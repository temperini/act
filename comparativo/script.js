const icons = {
  cover: '<svg viewBox="0 0 24 24"><path d="M4 15c4-8 12-8 16 0"></path><path d="M6 15c3 4 9 4 12 0"></path><path d="M12 3v4M4 5l3 3M20 5l-3 3"></path></svg>',
  matrix: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="M4 10h16M4 16h16M10 4v16"></path></svg>',
  flow: '<svg viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path><path d="M5 6v12"></path></svg>',
  lab: '<svg viewBox="0 0 24 24"><path d="M9 3h6"></path><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"></path><path d="M8 14h8"></path></svg>',
  target: '<svg viewBox="0 0 24 24"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m9 12 2 2 4-5"></path></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6M8 13h8M8 17h6"></path></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M7 16V8M12 16V5M17 16v-6"></path></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>',
  alert: '<svg viewBox="0 0 24 24"><path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z"></path><path d="M12 9v4M12 17h.01"></path></svg>',
  route: '<svg viewBox="0 0 24 24"><path d="M6 19c3 0 3-14 6-14s3 14 6 14"></path><path d="M6 19h12"></path><path d="M6 5h.01M18 5h.01"></path></svg>',
  roadmap: '<svg viewBox="0 0 24 24"><path d="M4 6h10a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h12"></path><path d="M4 6l3-3M4 6l3 3M20 22l-3-3M20 22l-3 3"></path></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"></path></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M4 19.5V5.8A2.8 2.8 0 0 1 6.8 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5"></path><path d="M8 7h8M8 11h6"></path></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="m13 2-2 7H4l6 4-2 9 8-6 6 4-4-8 4-5h-7z"></path></svg>'
};

const slides = [
  {
    id: 'slide-1',
    number: '01',
    nav: 'Capa',
    icon: 'cover',
    kind: 'hero',
    title: 'Modelo ACT x Lei do Bem',
    subtitle: 'Comparação executiva entre duas rotas de eficiência fiscal para empresas de Lucro Real.',
    footer: 'Análise comparativa com foco em elegibilidade, benefício estimado, riscos e aplicabilidade prática.'
  },
  {
    id: 'slide-2',
    number: '02',
    nav: 'Matriz executiva',
    icon: 'matrix',
    title: 'Matriz comparativa executiva',
    subtitle: 'Visão objetiva e autoexplicável das principais diferenças.',
    blocks: [
      {
        type: 'table',
        headers: ['Critério', 'Modelo ACT', 'Lei do Bem'],
        rows: [
          ['Natureza', 'Estrutura de renúncia fiscal associada ao modelo apresentado pela ACT.', 'Incentivo fiscal federal para PD&I.'],
          ['Base legal', 'Lei nº 9.249/95, art. 13, §2º, II e III + IN SRF nº 87/96.', 'Lei nº 11.196/2005, arts. 17 a 26 + Decreto nº 5.798/2006.'],
          ['Quem pode usar', 'Empresas de Lucro Real.', 'Empresas de Lucro Real.'],
          ['Objeto principal', 'Gastos estruturados no ecossistema ACT, com foco em tecnologia, capacitação, pesquisa e impacto.', 'Dispêndios em pesquisa tecnológica e desenvolvimento de inovação tecnológica.'],
          ['Exigência técnica', 'Menor exigência de comprovação de PD&I, mas maior necessidade de validação jurídico-tributária da estrutura.', 'Alta exigência técnica, com comprovação formal de PD&I.'],
          ['Benefício financeiro', 'No exemplo da ACT, economia de 34% sobre o gasto elegível.', 'No caso padrão, benefício incremental inferior ao ACT, porém com base legal específica para inovação.'],
          ['Documentação', 'Contratos, NF, registros contábeis e aderência à estrutura jurídica proposta.', 'Projetos de PD&I, memória técnica, controles contábeis e reporte ao MCTI.'],
          ['Melhor uso', 'Empresas com despesa relevante em tecnologia e busca de eficiência fiscal com apelo institucional.', 'Empresas que já realizam ou podem estruturar projetos reais de inovação.']
        ]
      },
      {
        type: 'callout',
        title: 'Leitura executiva',
        items: [
          '<strong>ACT:</strong> mais simples de comunicar, benefício aparente maior no exemplo, mas depende de validação jurídica e tributária robusta.',
          '<strong>Lei do Bem:</strong> mais técnica, mais consolidada para inovação e mais aderente a empresas com PD&I real.'
        ]
      }
    ]
  },
  {
    id: 'slide-3',
    number: '03',
    nav: 'Modelo ACT',
    icon: 'flow',
    title: 'Como funciona o modelo ACT',
    subtitle: 'Uma estrutura que conecta contratante, ACT e executora em torno de tecnologia, capacitação e impacto.',
    blocks: [
      {
        type: 'flow',
        nodes: [
          { title: 'Empresa contratante', text: 'Despesa estruturada em tecnologia e contratação dentro do ecossistema.' },
          { title: 'ACT', text: 'Organiza a tese, a governança e a lógica institucional da operação.' },
          { title: 'Executora / TI', text: 'Entrega tecnologia, consultoria e documentação da prestação.' }
        ]
      },
      {
        type: 'cards',
        columns: 3,
        cards: [
          { icon: 'route', title: 'Lógica principal', text: 'Transformar gasto elegível em eficiência fiscal, mantendo narrativa de ecossistema e impacto.' },
          { icon: 'file', title: 'Evidências', items: ['contrato tripartite', 'notas fiscais', 'registros contábeis', 'aderência jurídica'] },
          { icon: 'chart', title: 'Resultado esperado', text: 'Potencial redução da base de cálculo de tributos, conforme simulação apresentada.' }
        ]
      },
      {
        type: 'callout',
        title: 'Essência do modelo',
        text: 'Transformar gasto elegível em tecnologia em eficiência fiscal e impacto no ecossistema.'
      }
    ]
  },
  {
    id: 'slide-4',
    number: '04',
    nav: 'Lei do Bem',
    icon: 'lab',
    title: 'Como funciona a Lei do Bem',
    subtitle: 'O principal incentivo fiscal federal para empresas que investem em pesquisa tecnológica e inovação.',
    blocks: [
      {
        type: 'flow',
        nodes: [
          { title: 'Investimento em PD&I', text: 'Projeto de inovação formalmente caracterizado, com equipe, horas e custos.' },
          { title: 'Exclusão adicional', text: 'Dispêndios elegíveis podem reduzir a base de IRPJ e CSLL.' },
          { title: 'Benefício fiscal', text: 'Recuperação parcial do investimento com prova técnica e contábil.' }
        ]
      },
      {
        type: 'cards',
        columns: 3,
        cards: [
          { icon: 'plus', title: 'Incentivos possíveis', items: ['exclusão adicional de dispêndios de PD&I', 'depreciação acelerada', 'amortização acelerada em alguns casos'] },
          { icon: 'target', title: 'Exigências', items: ['Lucro Real', 'lucro tributável', 'regularidade fiscal', 'documentação técnica consistente'] },
          { icon: 'shield', title: 'Robustez', text: 'Rota mais consolidada quando a empresa realmente possui PD&I caracterizado.' }
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Essência da Lei do Bem',
        text: 'Recuperar parte do investimento em inovação por meio de benefício fiscal estruturado e tecnicamente comprovado.'
      }
    ]
  },
  {
    id: 'slide-5',
    number: '05',
    nav: 'Elegibilidade',
    icon: 'target',
    title: 'Quem se enquadra melhor em cada modelo',
    subtitle: 'Aderência depende do tipo de gasto, maturidade técnica e documentação disponível.',
    blocks: [
      {
        type: 'table',
        headers: ['Situação da empresa', 'Modelo ACT', 'Lei do Bem'],
        rows: [
          ['Empresa de Lucro Real com alto gasto em TI', 'Alta aderência potencial.', 'Média aderência, se houver PD&I real.'],
          ['Empresa com projetos formais de inovação', 'Aderência complementar.', 'Alta aderência.'],
          ['Empresa sem estrutura de P&D', 'Pode ter apelo maior.', 'Baixa aderência.'],
          ['Empresa com governança técnica e contábil forte', 'Boa aderência.', 'Excelente aderência.']
        ]
      },
      {
        type: 'callout',
        title: 'Mensagem-chave',
        items: [
          '<strong>ACT</strong> tende a conversar melhor com empresas que querem eficiência fiscal a partir de despesas estruturadas de tecnologia.',
          '<strong>Lei do Bem</strong> tende a ser superior quando a empresa já possui projetos reais de inovação, equipe técnica e documentação de PD&I.'
        ]
      }
    ]
  },
  {
    id: 'slide-6',
    number: '06',
    nav: 'Base legal',
    icon: 'shield',
    title: 'Base legal e segurança regulatória',
    subtitle: 'A comparação não é só financeira: a sustentação jurídica muda a leitura de risco.',
    blocks: [
      {
        type: 'cards',
        columns: 2,
        cards: [
          { icon: 'file', title: 'Modelo ACT', items: ['Lei nº 9.249/95, art. 13, §2º, II e III', 'IN SRF nº 87/96', 'atenção ao enquadramento correto da operação', 'sustentação contratual e fiscal'] },
          { icon: 'book', title: 'Lei do Bem', tone: 'yellow', items: ['Lei nº 11.196/2005', 'Decreto nº 5.798/2006', 'instrumento consolidado para incentivo fiscal à inovação tecnológica no Brasil'] }
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ponto crítico',
        text: 'A robustez da Lei do Bem é maior para inovação. O ACT pode ser comercialmente atraente, mas precisa de validação jurídico-tributária caso a caso.'
      }
    ]
  },
  {
    id: 'slide-7',
    number: '07',
    nav: 'Documentação',
    icon: 'file',
    title: 'O que precisa ser comprovado',
    subtitle: 'Nos dois modelos, a qualidade da prova documental define a segurança da tese.',
    blocks: [
      {
        type: 'cards',
        columns: 2,
        cards: [
          { icon: 'file', title: 'Modelo ACT', items: ['contrato tripartite', 'notas fiscais', 'escrituração contábil', 'LALUR, ECD e ECF', 'comprovação da aderência fiscal'] },
          { icon: 'lab', title: 'Lei do Bem', tone: 'yellow', items: ['projeto de PD&I', 'objetivo técnico claro', 'incerteza tecnológica', 'equipe envolvida', 'horas e custos controlados', 'reporte ao MCTI'] }
        ]
      },
      {
        type: 'callout',
        tone: 'orange',
        title: 'Frase executiva',
        text: '<strong>ACT</strong> exige arquitetura jurídico-fiscal consistente. <strong>Lei do Bem</strong> exige arquitetura técnica e contábil consistente.'
      }
    ]
  },
  {
    id: 'slide-8',
    number: '08',
    nav: 'Exemplo financeiro',
    icon: 'chart',
    title: 'Exemplo financeiro comparado',
    subtitle: 'Simulação com gasto elegível de R$ 4 milhões.',
    blocks: [
      {
        type: 'table',
        headers: ['Item', 'Modelo ACT', 'Lei do Bem - cenário padrão'],
        rows: [
          ['Gasto elegível', 'R$ 4.000.000', 'R$ 4.000.000'],
          ['Mecanismo', 'Exclusão integral da base no exemplo ACT.', 'Exclusão adicional padrão de 60% do dispêndio.'],
          ['Base de cálculo do benefício', 'R$ 4.000.000', 'R$ 2.400.000'],
          ['Alíquota efetiva considerada', '34%', '34%'],
          ['Economia estimada', '<strong>R$ 1.360.000</strong>', '<strong>R$ 816.000</strong>']
        ]
      },
      {
        type: 'barChart',
        bars: [
          { label: 'Modelo ACT', value: 'R$ 1.360.000', width: 100 },
          { label: 'Lei do Bem', value: 'R$ 816.000', width: 60, alt: true }
        ]
      },
      {
        type: 'callout',
        title: 'Insight principal',
        items: [
          'No exemplo apresentado, o <strong>ACT gera benefício financeiro maior</strong>.',
          'Porém, a <strong>Lei do Bem é juridicamente mais específica para inovação</strong>.'
        ]
      }
    ]
  },
  {
    id: 'slide-9',
    number: '09',
    nav: 'Vantagens e limites',
    icon: 'plus',
    title: 'Pontos fortes e limitações',
    subtitle: 'A melhor escolha depende da combinação entre apelo comercial, maturidade técnica e segurança documental.',
    blocks: [
      {
        type: 'cards',
        columns: 4,
        cards: [
          { icon: 'check', title: 'ACT - vantagens', items: ['comunicação simples', 'benefício aparente alto', 'narrativa de ecossistema e impacto', 'aderência para gastos de TI'] },
          { icon: 'alert', title: 'ACT - limitações', tone: 'orange', items: ['validação jurídico-tributária detalhada', 'sensibilidade ao desenho contratual', 'risco de questionamento do enquadramento'] },
          { icon: 'check', title: 'Lei do Bem - vantagens', tone: 'yellow', items: ['base legal específica para inovação', 'instrumento consolidado', 'aderência a empresas inovadoras', 'fortalece governança de P&D'] },
          { icon: 'alert', title: 'Lei do Bem - limitações', tone: 'dark', items: ['maior maturidade técnica', 'documentação intensa', 'nem todo gasto em TI é elegível'] }
        ]
      }
    ]
  },
  {
    id: 'slide-10',
    number: '10',
    nav: 'Riscos',
    icon: 'alert',
    title: 'Riscos de enquadramento e de glosa',
    subtitle: 'O risco principal nasce no enquadramento e na prova, não apenas no cálculo.',
    blocks: [
      {
        type: 'cards',
        columns: 2,
        cards: [
          { icon: 'alert', title: 'Modelo ACT', items: ['operação pode não ser aceita conforme interpretação da base legal', 'incompatibilidade entre serviço contratado e natureza do benefício', 'necessidade de parecer jurídico-tributário'] },
          { icon: 'alert', title: 'Lei do Bem', tone: 'yellow', items: ['projeto pode não ser considerado inovação tecnológica', 'risco de classificar atividade operacional comum como PD&I', 'necessidade de documentação técnica robusta'] }
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Mensagem-chave',
        text: 'Nos dois modelos, o risco não está apenas no cálculo. O risco está, principalmente, no enquadramento e na prova documental.'
      }
    ]
  },
  {
    id: 'slide-11',
    number: '11',
    nav: 'Quando usar',
    icon: 'route',
    title: 'Qual rota faz mais sentido em cada contexto',
    subtitle: 'Uma leitura decisória para orientar conversas comerciais e diagnóstico inicial.',
    blocks: [
      {
        type: 'decision',
        rows: [
          { context: 'Empresa quer capturar eficiência fiscal sobre despesas de tecnologia e ecossistema.', route: 'Modelo ACT', tone: 'pink' },
          { context: 'Empresa já investe em inovação, produto, software, IA, engenharia ou desenvolvimento experimental.', route: 'Lei do Bem', tone: 'yellow' },
          { context: 'Empresa ainda não documenta inovação formalmente.', route: 'ACT no curto prazo / Lei do Bem no médio prazo', tone: 'orange' },
          { context: 'Empresa quer estratégia fiscal com maior robustez para PD&I.', route: 'Lei do Bem', tone: 'yellow' }
        ]
      },
      {
        type: 'callout',
        title: 'Estratégia ideal',
        text: 'Usar o ACT como tese comercial de eficiência fiscal, mas desenvolver também uma rota de maturidade para Lei do Bem quando houver projetos de inovação elegíveis.'
      }
    ]
  },
  {
    id: 'slide-12',
    number: '12',
    nav: 'Recomendação',
    icon: 'roadmap',
    title: 'Recomendação estratégica para apresentação ao cliente',
    subtitle: 'O posicionamento deve separar as rotas, diagnosticar aderência e blindar a oferta final.',
    blocks: [
      {
        type: 'roadmap',
        steps: [
          'Não tratar os dois modelos como equivalentes.',
          'Posicionar o ACT como rota de eficiência fiscal com apelo institucional.',
          'Posicionar a Lei do Bem como rota de inovação estruturada.',
          'Avaliar cliente por cliente com diagnóstico de aderência.',
          'Criar calculadora comparativa com dois modos de simulação.',
          'Submeter o caso a validação contábil e jurídica antes da oferta final.'
        ]
      },
      {
        type: 'callout',
        tone: 'orange',
        title: 'Mensagem executiva',
        items: [
          '<strong>ACT</strong> vende simplicidade e benefício aparente.',
          '<strong>Lei do Bem</strong> vende robustez e aderência técnica à inovação.',
          'A melhor estratégia é combinar diagnóstico comercial com validação tributária.'
        ]
      }
    ]
  },
  {
    id: 'slide-13',
    number: '13',
    nav: 'Próximos passos',
    icon: 'check',
    title: 'Próximos passos sugeridos',
    subtitle: 'Uma trilha prática para transformar a comparação em abordagem comercial segura.',
    blocks: [
      {
        type: 'cards',
        columns: 3,
        cards: [
          { icon: 'shield', title: 'Validar', items: ['validar juridicamente o modelo ACT', 'submeter tese a validação contábil e tributária'] },
          { icon: 'target', title: 'Diagnosticar', items: ['estruturar questionário de elegibilidade', 'definir régua de decisão por perfil de cliente'] },
          { icon: 'chart', title: 'Operacionalizar', items: ['criar calculadora ACT x Lei do Bem', 'desenvolver apresentação comercial padrão', 'montar checklist documental'] }
        ]
      },
      {
        type: 'callout',
        title: 'Régua de decisão',
        items: [
          'cliente aderente a ACT',
          'cliente aderente a Lei do Bem',
          'cliente aderente a ambos como análise estratégica, não necessariamente sobre o mesmo gasto'
        ]
      }
    ]
  },
  {
    id: 'slide-14',
    number: '14',
    nav: 'Encerramento',
    icon: 'spark',
    title: 'Comparar bem para orientar melhor',
    subtitle: 'ACT e Lei do Bem não são substitutos diretos. São duas rotas diferentes de eficiência fiscal, com lógicas, exigências e riscos distintos.',
    blocks: [
      {
        type: 'callout',
        tone: 'warning',
        title: 'Próximo passo recomendado',
        text: 'Diagnóstico de aderência + validação jurídico-tributária + simulação financeira personalizada.'
      },
      {
        type: 'sources',
        anchor: 'fontes',
        sources: [
          { title: 'Apresentação ACT', url: '#slide-1', detail: '[Exata] ACT - Ecossistema e Economia Financeira' },
          { title: 'Lei nº 9.249/1995 - Planalto', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9249.htm', detail: 'Base citada para o modelo ACT.' },
          { title: 'Lei nº 11.196/2005 - Planalto', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11196.htm', detail: 'Base legal da Lei do Bem.' },
          { title: 'Decreto nº 5.798/2006 - Planalto', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/decreto/d5798.htm', detail: 'Regulamentação da Lei do Bem.' }
        ]
      }
    ]
  }
];

const slidesRoot = document.querySelector('#slides');
const desktopNav = document.querySelector('#desktopNav');
const mobileNav = document.querySelector('#mobileNav');
const mobileMenu = document.querySelector('#mobileMenu');
const menuToggle = document.querySelector('.menu-toggle');
const progress = document.querySelector('#scrollProgress');
const toTop = document.querySelector('#toTop');

function renderIcon(name, className = 'card-icon') {
  return `<span class="${className}" aria-hidden="true">${icons[name] || icons.spark}</span>`;
}

function renderNavItem(slide) {
  return `
    <li>
      <a class="nav-link" href="#${slide.id}" data-target="${slide.id}">
        ${renderIcon(slide.icon, 'nav-icon')}
        <span>${slide.number}. ${slide.nav}</span>
      </a>
    </li>
  `;
}

function renderHero(slide) {
  return `
    <section class="page hero" id="${slide.id}" aria-labelledby="${slide.id}-title">
      <div class="page-inner">
        <div class="hero-copy reveal">
          <div class="slide-meta">
            <span class="badge">Slide ${slide.number}</span>
            <span class="badge">Eficiência fiscal</span>
          </div>
          <h1 class="hero-title" id="${slide.id}-title">${slide.title}</h1>
          <p class="subtitle">${slide.subtitle}</p>
          <div class="hero-mark">
            <span class="hero-icon" aria-hidden="true">
              <svg viewBox="0 0 200 200"><path fill="#fff" d="M63 156c-27-11-40-40-30-67 6-16 18-35 31-50 11-13 31-8 34 9 2 11-2 24-10 40l-14 27c-2 4 4 7 7 3l32-55c9-15 31-10 35 7 2 9 0 20-7 32l-20 35c-13 22-34 29-58 19Z"></path><path fill="#fff" d="m91 29 31-18-12 18h21l-42 28 17-25H91Zm52 42 25-15-9 15h16l-34 22 13-20h-11Z"></path></svg>
            </span>
            <span>
              <strong>MonyU</strong>
              <span>Financiando boas ideias</span>
            </span>
          </div>
          <p class="lead">${slide.footer}</p>
        </div>
        <div class="route-comparison reveal">
          <article class="route-card">
            <div class="route-head">
              ${renderIcon('route', 'route-icon')}
              <h2>Modelo ACT</h2>
            </div>
            <p>Rota comercialmente atraente para empresas com despesas relevantes em tecnologia e busca de eficiência fiscal.</p>
            <ul>
              <li>benefício aparente maior no exemplo</li>
              <li>narrativa de ecossistema e impacto</li>
              <li>depende de validação jurídico-tributária</li>
            </ul>
          </article>
          <article class="route-card alt">
            <div class="route-head">
              ${renderIcon('lab', 'route-icon')}
              <h2>Lei do Bem</h2>
            </div>
            <p>Rota regulatória consolidada para empresas com projetos reais de inovação, documentação e PD&I caracterizado.</p>
            <ul>
              <li>base específica para inovação</li>
              <li>alta exigência técnica</li>
              <li>melhor para governança de P&D</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderSlide(slide) {
  if (slide.kind === 'hero') return renderHero(slide);

  return `
    <section class="page" id="${slide.id}" aria-labelledby="${slide.id}-title">
      <div class="page-inner">
        <header class="page-header reveal">
          <div class="slide-meta">
            <span class="badge">Slide ${slide.number}</span>
            <span class="badge">${slide.nav}</span>
          </div>
          <h2 class="slide-title" id="${slide.id}-title">${slide.title}</h2>
          <p class="subtitle">${slide.subtitle}</p>
        </header>
        <div class="content-stack">
          ${slide.blocks.map(renderBlock).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderBlock(block) {
  switch (block.type) {
    case 'table':
      return renderTable(block);
    case 'cards':
      return renderCards(block);
    case 'callout':
      return renderCallout(block);
    case 'flow':
      return renderFlow(block);
    case 'barChart':
      return renderBarChart(block);
    case 'decision':
      return renderDecision(block);
    case 'roadmap':
      return renderRoadmap(block);
    case 'sources':
      return renderSources(block);
    default:
      return '';
  }
}

function renderTable(block) {
  const headers = block.headers.map(header => `<th scope="col">${header}</th>`).join('');
  const rows = block.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');

  return `
    <div class="table-wrap reveal">
      <table>
        <thead><tr>${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderCards(block) {
  const gridClass = `grid-${block.columns || 2}`;

  return `
    <div class="${gridClass} reveal">
      ${block.cards.map(card => `
        <article class="card ${card.tone || ''}">
          <div class="card-head">
            ${renderIcon(card.icon || 'spark')}
            <h3>${card.title}</h3>
          </div>
          ${card.text ? `<p>${card.text}</p>` : ''}
          ${card.items ? `<ul>${card.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
        </article>
      `).join('')}
    </div>
  `;
}

function renderCallout(block) {
  return `
    <aside class="callout ${block.tone || ''} reveal">
      <p class="eyebrow">${block.title}</p>
      ${block.text ? `<p>${block.text}</p>` : ''}
      ${block.items ? `<ul>${block.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
    </aside>
  `;
}

function renderFlow(block) {
  return `
    <div class="flow reveal">
      ${block.nodes.map((node, index) => `
        <article class="flow-node">
          <span class="node-number">${index + 1}</span>
          <h3>${node.title}</h3>
          <p>${node.text}</p>
        </article>
      `).join('')}
    </div>
  `;
}

function renderBarChart(block) {
  return `
    <div class="bar-chart reveal">
      ${block.bars.map(bar => `
        <div class="bar-row ${bar.alt ? 'alt' : ''}">
          <span class="bar-label">${bar.label}</span>
          <span class="bar-track" aria-hidden="true">
            <span class="bar-fill" data-width="${bar.width}"></span>
          </span>
          <span class="bar-value">${bar.value}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderDecision(block) {
  return `
    <div class="decision-list reveal">
      ${block.rows.map(row => `
        <article class="decision-item">
          <p>${row.context}</p>
          <span class="route-chip ${row.tone === 'yellow' ? 'yellow' : row.tone === 'orange' ? 'orange' : ''}">${row.route}</span>
        </article>
      `).join('')}
    </div>
  `;
}

function renderRoadmap(block) {
  return `
    <div class="roadmap reveal">
      ${block.steps.map(step => `
        <article class="roadmap-step">
          <p>${step}</p>
        </article>
      `).join('')}
    </div>
  `;
}

function renderSources(block) {
  return `
    <div class="source-grid reveal" id="${block.anchor || ''}">
      ${block.sources.map(source => `
        <a class="source-card" href="${source.url}" ${source.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          <strong>${source.title}</strong>
          <span>${source.detail}</span>
        </a>
      `).join('')}
    </div>
  `;
}

function setActiveNav(id) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const isActive = link.dataset.target === id;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const amount = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, amount))}%`;
  toTop.classList.toggle('is-visible', window.scrollY > 480);
}

function setupObservers() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveNav(entry.target.id);
    });
  }, { rootMargin: '-42% 0px -48% 0px', threshold: 0.01 });

  document.querySelectorAll('.page').forEach(section => sectionObserver.observe(section));

  const chartObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          bar.style.width = `${bar.dataset.width}%`;
        });
        chartObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('.bar-chart').forEach(chart => chartObserver.observe(chart));
}

function setupMenu() {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileMenu.hidden) {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
      menuToggle.focus();
    }
  });
}

function setupBrandImage() {
  const brand = document.querySelector('.brand');
  const image = document.querySelector('.brand-img');
  if (!brand || !image) return;

  const applyState = () => {
    brand.classList.toggle('has-logo', image.complete && image.naturalWidth > 0);
  };

  image.addEventListener('load', applyState);
  image.addEventListener('error', applyState);
  applyState();
}

function init() {
  slidesRoot.innerHTML = slides.map(renderSlide).join('');
  desktopNav.innerHTML = slides.map(renderNavItem).join('');
  mobileNav.innerHTML = slides.map(renderNavItem).join('');

  setupBrandImage();
  setupMenu();
  setupObservers();

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  toTop.addEventListener('click', () => {
    document.querySelector('#slide-1').scrollIntoView({ behavior: 'smooth' });
  });

  const initialId = location.hash.replace('#', '') || 'slide-1';
  if (document.getElementById(initialId)) setActiveNav(initialId);
}

init();
