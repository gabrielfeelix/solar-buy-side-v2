import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export interface SectionContent {
  id: string
  name: string
  texts: { [key: string]: string }
  images: { [key: string]: string }
}

interface ContentContextType {
  content: SectionContent[]
  updateText: (sectionId: string, key: string, value: string) => void
  updateImage: (sectionId: string, key: string, value: string) => void
  getSection: (sectionId: string) => SectionContent | undefined
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

const initialContent: SectionContent[] = [
  {
    id: 'hero',
    name: 'Hero',
    texts: {
      badge: 'Inteligência de Mercado 2026',
      title1: 'Transforme-se no',
      title2: 'Vendedor Ideal.',
      subtitle1: 'Aprenda como o seu cliente pensa e fuja da guerra de preços com o',
      subtitle2: 'Manual Solar Buy-Side.',
      ctaButton: 'Entenda a Lógica',
    },
    images: {},
  },
  {
    id: 'context',
    name: 'Contexto',
    texts: {
      badge: 'Vision 2026',
      title: 'Panorama 2026',
      subtitle: 'Pode parecer exagero, mas em breve cada vez mais compradores de sistema fotovoltaico estarão informados.',
      card1Title: 'Saberão analisar',
      card1Desc: 'Compararão propostas com precisão técnica superior à média do mercado.',
      card2Title: 'Analisarão fundo',
      card2Desc: 'Fornecedores e tecnologias passarão por um crivo muito mais rigoroso.',
      card3Title: 'Avaliarão risco',
      card3Desc: 'A confiabilidade da sua empresa será o fator decisivo antes de qualquer preço.',
      alertTitle: 'Quem não entender essa nova jornada vai perder vendas.',
      alertSubtitle: 'O cenário está evoluindo. Você está pronto?',
      solutionBadge: 'A Solução Definitiva',
      solutionTitle: 'Ainda há tempo para reverter essa situação.',
      solutionDesc: 'O Manual de Compra Solar Buy-Side mapeia os novos gatilhos de decisão do cliente moderno, garantindo que você esteja do lado certo da venda.',
      check1: 'Visão do Cliente',
      check2: 'Gatilhos de Compra',
      check3: 'Confiabilidade',
      ctaButton: 'Garantir meu acesso agora',
      ctaSubtext: 'Download Imediato • PDF Interativo',
    },
    images: {},
  },
  {
    id: 'video',
    name: 'Vídeo',
    texts: {
      title: 'Descubra o que o Manual ensina aos compradores e entenda as novas regras do jogo.',
      card1Id: '01',
      card1Tag: 'Proteção',
      card1Title: 'Os 3 grandes RISCOS',
      card1Desc: 'Risco integrador (engenharia e suporte), técnico (equipamentos e garantias) e financeiro (payback e custo proprietário).',
      card2Id: '02',
      card2Tag: 'Análise',
      card2Title: 'Comprador Informado',
      card2Desc: 'Como identificar promessas exageradas e indício de risco em propostas comerciais.',
      card3Id: '03',
      card3Tag: 'Estratégia',
      card3Title: 'Jornada Planejada',
      card3Desc: 'As 4 fases da decisão de compra e os momentos exatos nos quais o vendedor perde a venda.',
      alertBadge: 'Atenção Crítica',
      alertTitle: 'Veja o porquê de muitos vendedores ficarem fora do jogo.',
      alertSubtitle: 'Não permita que isso aconteça com você.',
      videoBadge: 'Conteúdo Exclusivo',
      videoTitle: 'A Nova Realidade Solar',
      videoDuration: '03:54',
    },
    images: {},
  },
  {
    id: 'audience',
    name: 'Audiência',
    texts: {
      title: 'Quem REALMENTE precisa desse conhecimento?',
      subtitle: 'Veja para quem o Manual Solar Buy-Side é essencial:',
      profile1Title: 'Empresas de Integração Solar',
      profile1Desc: 'Para vender valor, fugir da guerra dos preços e fechar mais projetos.',
      profile1Tag: 'ESTRUTURADOS',
      profile1Bullet1: 'Vender valor',
      profile1Bullet2: 'Fechar mais projetos',
      profile2Title: 'Empreendedores Iniciantes',
      profile2Desc: 'Para construir um negócio sólido desde o primeiro passo na integração solar.',
      profile2Tag: 'STARTUPS',
      profile2Bullet1: 'Base sólida',
      profile2Bullet2: 'Autoridade desde o dia 1',
      profile3Title: 'Representantes Comerciais',
      profile3Desc: 'Para aumentar sua taxa de conversão reduzindo sua taxa de desconto.',
      profile3Tag: 'VENDAS',
      profile3Bullet1: 'Menos desconto',
      profile3Bullet2: 'Mais conversão',
      bottomTitle: 'Não importa em qual ponto da cadeia você está, o Manual Solar Buy-Side não é apenas um guia, mas uma imersão completa na perspectiva do comprador.',
    },
    images: {},
  },
  {
    id: 'pricing',
    name: 'Oferta',
    texts: {
      badge: 'Pré-venda profissional por tempo limitado',
      title: 'NÃO PERCA TEMPO NEM POSIÇÃO NO MERCADO.',
      subtitle: 'O mercado solar não perdoa quem fica para trás. Garanta o método que os grandes players usam para dominar o Buy-Side.',
      sectionTitle: 'VEJA TUDO QUE VOCÊ RECEBE:',
      feature1Tag: 'VITALÍCIO',
      feature1Title: 'Manual Solar Buy-Side',
      feature1Desc: 'Acesso imediato à bíblia da estratégia solar.',
      feature2Tag: 'TÉCNICO',
      feature2Title: '130 Páginas + 160 Tópicos',
      feature2Desc: 'Conteúdo denso e interativo. Sem enrolação.',
      feature3Tag: 'ESTRATÉGIA',
      feature3Title: 'Método em 4 Fases',
      feature3Desc: 'A jornada de compra completa decifrada.',
      feature4Tag: 'EXCLUSIVO',
      feature4Title: 'Anexos Técnicos',
      feature4Desc: 'Documentação exclusiva para pronta aplicação.',
      stockTitle: 'Apenas 1.000 unidades na Pré-venda',
      stockCurrent: '847',
      stockLimit: '1000',
      stockNotice: '*O preço subirá para R$ 1.497,00 assim que o lote de pré-venda esgotar.',
      planBadge: 'Plano de Acesso',
      planTitle: 'Oferta Especial',
      priceOriginal: 'De R$ 997,00 por apenas:',
      priceInstallments: '12x de R$ 61,38',
      priceCash: 'Ou R$ 597,00 à vista no PIX',
      ctaButton: 'GARANTIR MINHA UNIDADE',
      benefit1: 'Liberação imediata no seu e-mail',
      benefit2: 'Checkout 100% criptografado',
      benefit3: 'Acesso Imediato',
      timerLabel: 'Sua oferta expira em:',
    },
    images: {
      guarantee: '/assets/Garantia.png',
      visa: '/assets/Visa.png',
      mastercard: '/assets/Mastercard.png',
      pix: '/assets/Pix.png',
      boleto: '/assets/Boleto.png',
      securePurchase: '/assets/Compra segura.png',
    },
  },
]

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SectionContent[]>(() => {
    const saved = localStorage.getItem('cms-content')
    return saved ? JSON.parse(saved) : initialContent
  })

  const updateText = (sectionId: string, key: string, value: string) => {
    setContent((prev) => {
      const updated = prev.map((section) =>
        section.id === sectionId
          ? { ...section, texts: { ...section.texts, [key]: value } }
          : section
      )
      localStorage.setItem('cms-content', JSON.stringify(updated))
      return updated
    })
  }

  const updateImage = (sectionId: string, key: string, value: string) => {
    setContent((prev) => {
      const updated = prev.map((section) =>
        section.id === sectionId
          ? { ...section, images: { ...section.images, [key]: value } }
          : section
      )
      localStorage.setItem('cms-content', JSON.stringify(updated))
      return updated
    })
  }

  const getSection = (sectionId: string) => {
    return content.find((section) => section.id === sectionId)
  }

  return (
    <ContentContext.Provider value={{ content, updateText, updateImage, getSection }}>
      {children}
    </ContentContext.Provider>
  )
}

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return context
}
