import React, { useState, useEffect } from 'react'
import {
  Users,
  Clock,
  Eye,
  Download,
  Mail,
  ShoppingCart,
  TrendingUp,
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

export const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMetrics()
  }, [])

  const fetchMetrics = async () => {
    try {
      const token = localStorage.getItem('admin-token')
      const response = await fetch(`${API_URL}/api/admin/metrics`, {
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
      subtitle: 'Últimos 30 dias',
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
      title: 'Downloads Ebook',
      value: metrics.ebook_downloads,
      icon: <Download className="text-orange-500" size={24} />,
      subtitle: 'Últimos 30 dias',
    },
    {
      title: 'Inscritos Newsletter',
      value: metrics.newsletter_subs,
      icon: <Mail className="text-cyan-500" size={24} />,
      subtitle: 'Últimos 30 dias',
    },
    {
      title: 'Cliques Comprar',
      value: metrics.buy_clicks,
      icon: <ShoppingCart className="text-green-600" size={24} />,
      subtitle: 'Últimos 30 dias',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Dashboard Analytics</h2>
        <p className="text-slate-600">Resumo dos últimos 30 dias</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <h3 className="text-lg font-bold text-slate-800 mb-4">Estatísticas Diárias (Últimos 7 dias)</h3>
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
