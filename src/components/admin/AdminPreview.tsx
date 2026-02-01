import React from 'react'
import { ArrowDown, Search, Zap, ShieldCheck, AlertCircle, CheckCircle2, Layout, ArrowRight } from 'lucide-react'

interface AdminPreviewProps {
  sectionId: string
  texts: { [key: string]: string }
  images: { [key: string]: string }
}

export const AdminPreview: React.FC<AdminPreviewProps> = ({ sectionId, texts }) => {
  if (sectionId === 'hero') {
    return (
      <div className="relative min-h-[500px] flex flex-col justify-center items-center overflow-hidden bg-[#020617] text-white p-12">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] bg-[#F97316]/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#F97316] animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
              {texts.badge || 'Badge'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            {texts.title1 || 'Título 1'}<br />
            <span className="text-[#F97316]">{texts.title2 || 'Título 2'}</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
            {texts.subtitle1 || 'Subtítulo 1'}
          </p>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            <span className="font-bold">{texts.subtitle2 || 'Subtítulo 2'}</span>
          </p>

          <div className="flex flex-col items-center gap-3 opacity-80">
            <span className="text-[#F97316] text-sm font-bold uppercase tracking-widest">
              {texts.ctaButton || 'CTA'}
            </span>
            <ArrowDown className="w-6 h-6 text-[#F97316] animate-bounce" />
          </div>
        </div>
      </div>
    )
  }

  if (sectionId === 'context') {
    return (
      <div className="bg-white text-slate-900 p-12">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[#F97316] text-[10px] font-bold uppercase tracking-widest mb-6">
            <Layout className="w-3 h-3" /> {texts.badge || 'Badge'}
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            {texts.title || 'Título'}
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-tight italic">
            {texts.subtitle || 'Subtítulo'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: <Search className="w-5 h-5" />, titleKey: 'card1Title', descKey: 'card1Desc' },
            { icon: <Zap className="w-5 h-5" />, titleKey: 'card2Title', descKey: 'card2Desc' },
            { icon: <ShieldCheck className="w-5 h-5" />, titleKey: 'card3Title', descKey: 'card3Desc' },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col gap-4">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-[#F97316] shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{texts[item.titleKey] || 'Título'}</h4>
                <p className="text-sm text-slate-500 leading-snug">{texts[item.descKey] || 'Descrição'}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mb-12 overflow-hidden rounded-3xl bg-slate-950 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#F97316]">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-orange-500/10 rounded-lg text-[#F97316]">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              {texts.alertTitle || 'Alerta'}
            </h3>
          </div>
          <div className="h-px md:h-8 w-full md:w-px bg-white/10"></div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-widest text-center md:text-left">
            {texts.alertSubtitle || 'Subtítulo do alerta'}
          </p>
        </div>

        <div className="bg-slate-50 rounded-[40px] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">
                {texts.solutionBadge || 'Badge'}
              </span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-6">
                {texts.solutionTitle || 'Título da solução'}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-xl">
                {texts.solutionDesc || 'Descrição da solução'}
              </p>

              <div className="flex flex-wrap gap-y-3 gap-x-6">
                {[texts.check1 || 'Check 1', texts.check2 || 'Check 2', texts.check3 || 'Check 3'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316]" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
              <button
                className="group relative bg-slate-900 hover:bg-[#F97316] text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-3 shadow-lg"
                type="button"
              >
                {texts.ctaButton || 'CTA Button'}
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                {texts.ctaSubtext || 'Subtext'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (sectionId === 'video') {
    return (
      <div className="relative overflow-hidden bg-[#0B1120] text-white p-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
            {texts.title || 'Título do Vídeo'} <span className="text-[#F97316]">Manual</span>
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="flex flex-col md:flex-row gap-8 p-10 rounded-[48px] bg-[#0F1C36] border border-white/10"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-orange-500">
                  {num === 1 ? <ShieldCheck className="w-6 h-6" /> : num === 2 ? <Search className="w-6 h-6" /> : <Layout className="w-6 h-6" />}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black text-slate-400 tracking-widest uppercase">
                    {texts[`card${num}Id`] || `0${num}`}
                  </span>
                  <div className="h-px w-6 bg-white/15"></div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                    {texts[`card${num}Tag`] || 'Tag'}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">
                  {texts[`card${num}Title`] || 'Título'}
                </h4>
                <p className="text-lg text-slate-300 font-medium leading-relaxed">
                  {texts[`card${num}Desc`] || 'Descrição'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-4 text-red-500">
            <AlertCircle className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-widest">{texts.alertBadge || 'Badge'}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight">
            {texts.alertTitle || 'Título do Alerta'} <br />
            <span className="text-slate-400 text-lg font-medium">{texts.alertSubtitle || 'Subtítulo'}</span>
          </h3>
        </div>

        <div className="aspect-video rounded-[48px] bg-slate-900 overflow-hidden border border-white/10 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-2">{texts.videoBadge || 'Badge'}</p>
            <p className="text-xl font-black text-white">{texts.videoTitle || 'Título do Vídeo'}</p>
            <p className="text-xs text-slate-400 mt-2">{texts.videoDuration || '00:00'}</p>
          </div>
        </div>
      </div>
    )
  }

  if (sectionId === 'audience') {
    return (
      <div className="bg-white text-slate-900 p-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            {texts.title || 'Título'}
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
            {texts.subtitle || 'Subtítulo'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-slate-50">
                  {num === 1 ? '🏢' : num === 2 ? '🚀' : '👥'}
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  {texts[`profile${num}Tag`] || 'TAG'}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">
                {texts[`profile${num}Title`] || 'Título'}
              </h3>

              <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                {texts[`profile${num}Desc`] || 'Descrição'}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold">{texts[`profile${num}Bullet1`] || 'Bullet 1'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold">{texts[`profile${num}Bullet2`] || 'Bullet 2'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-6 border-l-4 border-[#F97316]">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-500/10 rounded-lg text-[#F97316]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              {texts.bottomTitle || 'Texto final'}
            </h3>
          </div>
        </div>
      </div>
    )
  }

  if (sectionId === 'pricing') {
    return (
      <div className="relative overflow-hidden bg-[#010413] text-white p-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-xs font-black uppercase mb-6">
            {texts.badge || 'Badge'}
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-4">
            {texts.title || 'Título'}
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            {texts.subtitle || 'Subtítulo'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 italic">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              {texts.sectionTitle || 'Título da Seção'}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="p-6 bg-white/5 border border-white/10 rounded-[24px]"
                >
                  <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-xl">📦</div>
                  <div className="space-y-1">
                    <span className="text-xs font-black text-slate-200 tracking-widest">
                      {texts[`feature${num}Tag`] || 'TAG'}
                    </span>
                    <h4 className="font-bold text-base leading-tight">
                      {texts[`feature${num}Title`] || 'Título'}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {texts[`feature${num}Desc`] || 'Descrição'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-[32px]">
              <div className="flex justify-between items-end mb-2">
                <div className="text-orange-500 font-black text-sm uppercase">
                  {texts.stockTitle || 'Título do Estoque'}
                </div>
                <span className="text-xs text-slate-500 font-bold">
                  {texts.stockCurrent || '0'} / {texts.stockLimit || '0'} Vendidos
                </span>
              </div>
              <div className="h-3 bg-white/5 rounded-full mb-3">
                <div className="h-full w-3/4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
              </div>
              <p className="text-center text-xs text-slate-500">
                {texts.stockNotice || 'Aviso de estoque'}
              </p>
            </div>
          </div>

          <div className="bg-white text-slate-950 rounded-[40px] p-8 shadow-2xl">
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-xs font-black uppercase text-orange-600">
                  {texts.planBadge || 'Badge do Plano'}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  {texts.planTitle || 'Título do Plano'}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                ✓
              </div>
            </div>

            <div className="mb-8">
              <p className="text-slate-400 text-sm font-bold line-through mb-2">
                {texts.priceOriginal || 'Preço Original'}
              </p>
              <div className="text-6xl font-black mb-2">R$ 61,38</div>
              <p className="text-slate-500 text-sm font-medium">
                {texts.priceCash || 'Preço à vista'}
              </p>
            </div>

            <button className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl mb-4">
              {texts.ctaButton || 'CTA Button'}
            </button>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-500 text-xs font-bold">
                <CheckCircle2 size={16} className="text-green-600" />
                {texts.benefit1 || 'Benefício 1'}
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-xs font-bold">
                <CheckCircle2 size={16} className="text-blue-600" />
                {texts.benefit2 || 'Benefício 2'}
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-xs font-bold">
                <CheckCircle2 size={16} className="text-blue-600" />
                {texts.benefit3 || 'Benefício 3'}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400 mb-2">7 dias de garantia</p>
              <div className="flex items-center justify-center gap-3 text-xs text-slate-400">
                <span>💳 Visa</span>
                <span>💳 Mastercard</span>
                <span>💰 PIX</span>
                <span>📄 Boleto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-12 text-center">
      <p className="text-slate-600">Preview não disponível para esta seção</p>
    </div>
  )
}
