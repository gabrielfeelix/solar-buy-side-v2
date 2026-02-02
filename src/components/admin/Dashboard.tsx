import React, { useState, useEffect } from 'react'
import {
  Users,
  Clock,
  Eye,
  Download,
  Mail,
  ShoppingCart,
  TrendingUp,
  FileSpreadsheet,
  FileText,
  Percent,
} from 'lucide-react'
import { API_URL } from '../../utils/api'

type Metrics = {
  total_visitors: number
  avg_time_on_site: number
  avg_sections_depth: number
  ebook_downloads: number
  newsletter_subs: number
  buy_clicks: number
  daily_stats: Array<{
    date: string
    visitors: number
    ebook_downloads: number
    newsletter_subs: number
    buy_clicks: number
  }>
}

type PeriodFilter = 'today' | 'yesterday' | 'last7days' | 'last30days' | 'custom'

export const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [period, setPeriod] = useState<PeriodFilter>('last30days')
  const [customStart, setCustomStart] = useState('')
  const [customEnd, setCustomEnd] = useState('')

  useEffect(() => {
    fetchMetrics()
  }, [period, customStart, customEnd])

  const fetchMetrics = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('admin-token')

      let url = `${API_URL}/api/admin/metrics`
      const params = new URLSearchParams()

      if (period === 'today') {
        const today = new Date().toISOString().split('T')[0]
        params.append('start_date', today)
        params.append('end_date', today)
      } else if (period === 'yesterday') {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        params.append('start_date', yesterday)
        params.append('end_date', yesterday)
      } else if (period === 'last7days') {
        const start = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0]
        const end = new Date().toISOString().split('T')[0]
        params.append('start_date', start)
        params.append('end_date', end)
      } else if (period === 'custom' && customStart && customEnd) {
        params.append('start_date', customStart)
        params.append('end_date', customEnd)
      }

      if (params.toString()) {
        url += `?${params.toString()}`
      }

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Erro ao carregar métricas')
      }

      const data = await response.json()
      setMetrics(data.data)
      setLoading(false)
    } catch (err) {
      setError('Erro ao carregar métricas')
      setLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  const calculateConversionRate = () => {
    if (!metrics || metrics.total_visitors === 0) return 0
    const totalLeads = metrics.ebook_downloads + metrics.newsletter_subs
    return ((totalLeads / metrics.total_visitors) * 100).toFixed(1)
  }

  const exportToCSV = () => {
    if (!metrics) return

    const headers = ['Data', 'Visitantes', 'Ebook', 'Newsletter', 'Compras']
    const rows = metrics.daily_stats.map(stat => [
      new Date(stat.date).toLocaleDateString('pt-BR'),
      stat.visitors,
      stat.ebook_downloads,
      stat.newsletter_subs,
      stat.buy_clicks
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `analytics_${period}_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  const exportToExcel = () => {
    if (!metrics) return

    // Simples export usando CSV com extensão .xls
    const headers = ['Data', 'Visitantes', 'Ebook', 'Newsletter', 'Compras']
    const rows = metrics.daily_stats.map(stat => [
      new Date(stat.date).toLocaleDateString('pt-BR'),
      stat.visitors,
      stat.ebook_downloads,
      stat.newsletter_subs,
      stat.buy_clicks
    ])

    const csvContent = [
      headers.join('\t'),
      ...rows.map(row => row.join('\t'))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'application/vnd.ms-excel' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `analytics_${period}_${new Date().toISOString().split('T')[0]}.xls`
    link.click()
  }

  const exportToPDF = () => {
    alert('Exportação PDF será implementada em breve! Por enquanto, use Ctrl+P ou Cmd+P para salvar como PDF.')
  }

  const getPeriodLabel = () => {
    switch (period) {
      case 'today': return 'Hoje'
      case 'yesterday': return 'Ontem'
      case 'last7days': return 'Últimos 7 dias'
      case 'last30days': return 'Últimos 30 dias'
      case 'custom': return 'Período personalizado'
      default: return 'Últimos 30 dias'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-500">Carregando métricas...</div>
      </div>
    )
  }

  if (error || !metrics) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-500">{error || 'Erro ao carregar dados'}</div>
      </div>
    )
  }

  const metricCards = [
    {
      title: 'Visitantes Únicos',
      value: metrics.total_visitors,
      icon: <Users className="text-blue-500" size={24} />,
      subtitle: getPeriodLabel(),
    },
    {
      title: 'Tempo Médio',
      value: formatTime(metrics.avg_time_on_site),
      icon: <Clock className="text-green-500" size={24} />,
      subtitle: 'No site',
    },
    {
      title: 'Seções Vistas',
      value: metrics.avg_sections_depth.toFixed(1),
      icon: <Eye className="text-purple-500" size={24} />,
      subtitle: 'Média por visita',
    },
    {
      title: 'Taxa de Conversão',
      value: `${calculateConversionRate()}%`,
      icon: <Percent className="text-pink-500" size={24} />,
      subtitle: 'Visitantes → Leads',
    },
    {
      title: 'Downloads Ebook',
      value: metrics.ebook_downloads,
      icon: <Download className="text-orange-500" size={24} />,
      subtitle: getPeriodLabel(),
    },
    {
      title: 'Inscritos Newsletter',
      value: metrics.newsletter_subs,
      icon: <Mail className="text-cyan-500" size={24} />,
      subtitle: getPeriodLabel(),
    },
    {
      title: 'Cliques Comprar',
      value: metrics.buy_clicks,
      icon: <ShoppingCart className="text-green-600" size={24} />,
      subtitle: getPeriodLabel(),
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header com Título e Filtros */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Dashboard Analytics</h2>
          <p className="text-slate-600">{getPeriodLabel()}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Filtro de Período */}
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as PeriodFilter)}
            className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Hoje</option>
            <option value="yesterday">Ontem</option>
            <option value="last7days">Últimos 7 dias</option>
            <option value="last30days">Últimos 30 dias</option>
            <option value="custom">Personalizado</option>
          </select>

          {/* Datas Personalizadas */}
          {period === 'custom' && (
            <>
              <input
                type="date"
                value={customStart}
                onChange={(e) => setCustomStart(e.target.value)}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-slate-600">até</span>
              <input
                type="date"
                value={customEnd}
                onChange={(e) => setCustomEnd(e.target.value)}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          {/* Botões de Exportação */}
          <div className="flex items-center gap-2 border-l border-slate-300 pl-3">
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
              title="Exportar CSV"
            >
              <FileText size={18} />
              <span className="hidden sm:inline">CSV</span>
            </button>
            <button
              onClick={exportToExcel}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              title="Exportar Excel"
            >
              <FileSpreadsheet size={18} />
              <span className="hidden sm:inline">Excel</span>
            </button>
            <button
              onClick={exportToPDF}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
              title="Exportar PDF"
            >
              <FileText size={18} />
              <span className="hidden sm:inline">PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-slate-50 rounded-lg">{card.icon}</div>
              <TrendingUp className="text-green-500" size={20} />
            </div>
            <h3 className="text-slate-600 text-sm font-medium mb-1">{card.title}</h3>
            <p className="text-3xl font-bold text-slate-800 mb-1">{card.value}</p>
            <p className="text-slate-500 text-xs">{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Simple Daily Stats Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Estatísticas Diárias</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-slate-600 font-medium">Data</th>
                <th className="text-right py-3 px-4 text-slate-600 font-medium">Visitantes</th>
                <th className="text-right py-3 px-4 text-slate-600 font-medium">Ebook</th>
                <th className="text-right py-3 px-4 text-slate-600 font-medium">Newsletter</th>
                <th className="text-right py-3 px-4 text-slate-600 font-medium">Compras</th>
              </tr>
            </thead>
            <tbody>
              {metrics.daily_stats.slice(-7).map((stat) => (
                <tr key={stat.date} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 text-slate-800">
                    {new Date(stat.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="text-right py-3 px-4 text-slate-800">{stat.visitors}</td>
                  <td className="text-right py-3 px-4 text-slate-800">{stat.ebook_downloads}</td>
                  <td className="text-right py-3 px-4 text-slate-800">{stat.newsletter_subs}</td>
                  <td className="text-right py-3 px-4 text-slate-800">{stat.buy_clicks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
