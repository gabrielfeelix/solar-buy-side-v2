import React from 'react'
import { ArrowRight, Sparkles, ChevronDown, BookOpen, ChevronRight } from 'lucide-react'
import { useContent } from '../contexts/ContentContext'

export const HeroSectionPotato: React.FC = () => {
  const { getSection } = useContent()
  const section = getSection('hero')

  const titlePrefix = section?.texts.titlePrefix || section?.texts.title1 || 'Saia da Disputa de Preço e Passe a'
  const titleHighlight = section?.texts.titleHighlight || section?.texts.title2 || 'Vender Decisões'
  const titleSuffix = section?.texts.titleSuffix || 'em Sistema Solar'
  const subtitle = section?.texts.subtitle || `${section?.texts.subtitle1 || 'O método Buy-Side ensina você a pensar como o cliente e conduzir decisões de compra, não disputas de preço.'} ${section?.texts.subtitle2 || ''}`.trim()
  const manualTitle = section?.texts.manualTitle || 'Manual Solar Buy-Side'
  const manualSubtitle = section?.texts.manualSubtitle || 'Construído a partir da observação real de como compradores decidem, na prática.'
  const bonusBadge = section?.texts.bonusBadge || 'Bônus Exclusivo'
  const bonusTitle = section?.texts.bonusTitle || 'O Código do Vendedor Consultivo'
  const bonusSubtitle = section?.texts.bonusSubtitle || 'Para quem quer conduzir decisões, não concessões.'
  const ctaButton = section?.texts.ctaButton || 'Quero vender decisões agora'
  const ctaSubtext = section?.texts.ctaSubtext || 'Acesso imediato ao Manual Solar Buy-Side.'
  const scrollHint = section?.texts.scrollHint || 'Entenda a lógica'
  const heroImage = section?.images.heroImage || '/assets/GED9CF_1_cleanup.PNG'

  const scrollToSection = () => {
    const element = document.getElementById('contexto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToOffer = () => {
    const element = document.getElementById('oferta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#020617] overflow-hidden flex items-center font-sans selection:bg-orange-500/30">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[80vh] bg-indigo-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[30vw] h-[60vh] bg-orange-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
        <div className="flex-1 flex flex-col items-start text-left animate-in fade-in slide-in-from-left-4 duration-700 z-20 pt-20 lg:pt-0 order-1">
          <h1 className="font-['Sora'] text-3xl lg:text-[36px] font-bold text-white leading-[1.4] tracking-tight mb-4 text-center lg:text-left">
            {titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">{titleHighlight}</span>{' '}
            <span className="whitespace-nowrap">{titleSuffix}</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-lg border-l-2 border-orange-500/30 pl-4">
            {subtitle && !subtitle.startsWith('O método Buy-Side') ? subtitle : (<>O método <strong className="text-slate-200">Buy-Side</strong> ensina você a pensar como o cliente e conduzir decisões de compra, não disputas de preço.</>)}
          </p>

          <div className="mb-12 inline-flex relative group">
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex items-center gap-4 bg-[#0f172a]/50 backdrop-blur-sm border border-white/10 rounded-full py-2 pl-2 pr-8 hover:border-orange-500/50 hover:bg-[#0f172a]/80 transition-all duration-300 ring-1 ring-white/5">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-lg shadow-orange-900/50">
                <BookOpen className="w-5 h-5" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-0.5">
                   <h2 className="font-['Sora'] text-lg text-white font-bold tracking-tight">
                     {manualTitle && manualTitle !== 'Manual Solar Buy-Side' ? manualTitle : (<>Manual Solar <span className="text-orange-400">Buy-Side</span></>)}
                   </h2>
                </div>
                <p className="text-[14px] text-slate-400 font-medium">
                  {manualSubtitle}
                </p>
              </div>

              <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ChevronRight className="w-4 h-4 text-orange-500" />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-start gap-3 w-full sm:w-auto mb-12 lg:mb-0">
            <button
              onClick={scrollToOffer}
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-bold text-sm shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>{ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-slate-400 font-medium">{ctaSubtext}</p>
          </div>
        </div>

        <div className="flex-1 w-full relative flex flex-col items-center lg:items-end justify-center h-[50vh] lg:h-screen animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 order-2">
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-t from-orange-500/20 to-blue-900/20 blur-[100px] rounded-full z-0 pointer-events-none" />

          <div className="relative z-10 w-full group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/50 to-blue-600/50 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#020617]">
              <img
                src={heroImage}
                alt="Consultoria Solar Executiva"
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                style={{
                  aspectRatio: '1/1',
                  objectPosition: 'center',
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#0f172a] border border-orange-500/30 p-5 rounded-2xl shadow-2xl w-[280px] z-30 text-left backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-[10px] font-bold text-orange-500 tracking-wider uppercase">{bonusBadge}</span>
              </div>
              <h3 className="text-white font-bold text-base mb-1 leading-tight">{bonusTitle}</h3>
              <p className="text-xs text-slate-400 leading-snug">
                {bonusSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col items-center gap-3 w-full sm:w-auto px-6 order-3">
          <button
            onClick={scrollToOffer}
            type="button"
            className="w-full sm:w-auto px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-bold text-sm shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-slate-400 font-medium text-center">{ctaSubtext}</p>
        </div>
      </div>

      <button
        onClick={scrollToSection}
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse text-slate-500 z-20 hover:text-orange-500 transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">{scrollHint}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  )
}
