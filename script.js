const EXAMPLE = {
  receita: 800000000,
  despesasGerais: 600000000,
  despesasTech: 4000000,
};

const money = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

const percent = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const $ = (id) => document.getElementById(id);

const inputs = {
  receita: $('receita'),
  despesasGerais: $('despesasGerais'),
  despesasTech: $('despesasTech'),
  baseMinima: $('baseMinima'),
  techRange: $('techRange'),
};

const resultEls = {
  outrasDespesas: $('outrasDespesas'),
  lucroOperacional: $('lucroOperacional'),
  impostoSemAct: $('impostoSemAct'),
  impostoComAct: $('impostoComAct'),
  economiaAnual: $('economiaAnual'),
  economiaPercentual: $('economiaPercentual'),
  baseSemAct: $('baseSemAct'),
  irSemAct: $('irSemAct'),
  irAdSemAct: $('irAdSemAct'),
  csllSemAct: $('csllSemAct'),
  baseComAct: $('baseComAct'),
  exclusaoAct: $('exclusaoAct'),
  irComAct: $('irComAct'),
  irAdComAct: $('irAdComAct'),
  csllComAct: $('csllComAct'),
  sliderValue: $('sliderValue'),
  scenarioSaving: $('scenarioSaving'),
  scenarioBase: $('scenarioBase'),
  tableLucro: $('tableLucro'),
  tableSem: $('tableSem'),
  tableCom: $('tableCom'),
  tableSaving: $('tableSaving'),
  heroEligible: $('heroEligible'),
  heroReducedBase: $('heroReducedBase'),
  heroSaving: $('heroSaving'),
  heroRate: $('heroRate'),
  heroProgress: $('heroProgress'),
};

const buttons = {
  fillExampleBtn: $('fillExampleBtn'),
  fillExampleHero: $('fillExampleHero'),
  clearBtn: $('clearBtn'),
  copySummaryBtn: $('copySummaryBtn'),
  menuToggle: $('menuToggle'),
  navMenu: $('navMenu'),
  toast: $('toast'),
};

function formatMoney(value) {
  return money.format(Number(value || 0));
}

function formatPercent(value) {
  return `${percent.format(Number(value || 0))}%`;
}

function clampBase(value) {
  return inputs.baseMinima.checked ? Math.max(0, value) : value;
}

function calcAdditionalIR(base) {
  const threshold = 240000;
  return Math.max(0, base - threshold) * 0.10;
}

function calculateData(receita, despesasGerais, despesasTech) {
  const outrasDespesas = Math.max(0, despesasGerais - despesasTech);
  const lucroOperacional = receita - despesasGerais;

  const baseSemAct = clampBase(lucroOperacional);
  const irSemAct = baseSemAct * 0.15;
  const irAdSemAct = calcAdditionalIR(baseSemAct);
  const csllSemAct = baseSemAct * 0.09;
  const impostoSemAct = irSemAct + irAdSemAct + csllSemAct;

  const baseComAct = clampBase(lucroOperacional - despesasTech);
  const irComAct = baseComAct * 0.15;
  const irAdComAct = calcAdditionalIR(baseComAct);
  const csllComAct = baseComAct * 0.09;
  const impostoComAct = irComAct + irAdComAct + csllComAct;

  const economiaAnual = impostoSemAct - impostoComAct;
  const economiaPercentual = despesasTech > 0 ? (economiaAnual / despesasTech) * 100 : 0;

  return {
    receita,
    despesasGerais,
    despesasTech,
    outrasDespesas,
    lucroOperacional,
    baseSemAct,
    irSemAct,
    irAdSemAct,
    csllSemAct,
    impostoSemAct,
    baseComAct,
    irComAct,
    irAdComAct,
    csllComAct,
    impostoComAct,
    economiaAnual,
    economiaPercentual,
  };
}

function getInputValues() {
  return {
    receita: Number(inputs.receita.value || 0),
    despesasGerais: Number(inputs.despesasGerais.value || 0),
    despesasTech: Number(inputs.despesasTech.value || 0),
  };
}

function render(data) {
  resultEls.outrasDespesas.textContent = formatMoney(data.outrasDespesas);
  resultEls.lucroOperacional.textContent = formatMoney(data.lucroOperacional);
  resultEls.impostoSemAct.textContent = formatMoney(data.impostoSemAct);
  resultEls.impostoComAct.textContent = formatMoney(data.impostoComAct);
  resultEls.economiaAnual.textContent = formatMoney(data.economiaAnual);
  resultEls.economiaPercentual.textContent = formatPercent(data.economiaPercentual);

  resultEls.baseSemAct.textContent = formatMoney(data.baseSemAct);
  resultEls.irSemAct.textContent = formatMoney(data.irSemAct);
  resultEls.irAdSemAct.textContent = formatMoney(data.irAdSemAct);
  resultEls.csllSemAct.textContent = formatMoney(data.csllSemAct);

  resultEls.baseComAct.textContent = formatMoney(data.baseComAct);
  resultEls.exclusaoAct.textContent = formatMoney(data.despesasTech);
  resultEls.irComAct.textContent = formatMoney(data.irComAct);
  resultEls.irAdComAct.textContent = formatMoney(data.irAdComAct);
  resultEls.csllComAct.textContent = formatMoney(data.csllComAct);

  resultEls.sliderValue.textContent = formatMoney(data.despesasTech);
  resultEls.scenarioSaving.textContent = formatMoney(data.economiaAnual);
  resultEls.scenarioBase.textContent = formatMoney(data.baseComAct);
  resultEls.tableLucro.textContent = formatMoney(data.lucroOperacional);
  resultEls.tableSem.textContent = formatMoney(data.impostoSemAct);
  resultEls.tableCom.textContent = formatMoney(data.impostoComAct);
  resultEls.tableSaving.textContent = formatMoney(data.economiaAnual);

  resultEls.heroEligible.textContent = formatMoney(data.despesasTech);
  resultEls.heroReducedBase.textContent = formatMoney(data.baseComAct);
  resultEls.heroSaving.textContent = formatMoney(data.economiaAnual);
  resultEls.heroRate.textContent = formatPercent(data.economiaPercentual);
  resultEls.heroProgress.style.width = `${Math.min(100, Math.max(0, data.economiaPercentual))}%`;

  if (inputs.techRange.value !== String(data.despesasTech)) {
    inputs.techRange.value = data.despesasTech;
  }

  updatePresetButtons(data.despesasTech);
  updateCharts(data);
}

let comparisonChart;
let taxChart;

function createCharts() {
  const comparisonCtx = $('comparisonChart');
  const taxCtx = $('taxChart');

  comparisonChart = new Chart(comparisonCtx, {
    type: 'bar',
    data: {
      labels: ['Imposto sem ACT', 'Imposto com ACT', 'Economia anual'],
      datasets: [{
        label: 'Valor em R$',
        data: [0, 0, 0],
        backgroundColor: ['rgba(255, 0, 85, 0.72)', 'rgba(45, 210, 139, 0.72)', 'rgba(91, 192, 255, 0.72)'],
        borderRadius: 14,
      }],
    },
    options: getChartOptions(true),
  });

  taxChart = new Chart(taxCtx, {
    type: 'doughnut',
    data: {
      labels: ['IR 15%', 'IR adicional 10%', 'CSLL 9%'],
      datasets: [{
        data: [0, 0, 0],
        backgroundColor: ['rgba(255, 184, 77, 0.85)', 'rgba(157, 105, 255, 0.85)', 'rgba(91, 192, 255, 0.85)'],
        borderWidth: 0,
      }],
    },
    options: getChartOptions(false),
  });
}

function getChartOptions(isBar) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#f5f7ff', font: { family: 'Montserrat' } },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${formatMoney(ctx.parsed.y ?? ctx.parsed)}`,
        },
      },
    },
    scales: isBar ? {
      y: {
        ticks: {
          color: '#c0c9e4',
          callback: (value) => formatMoney(value),
        },
        grid: { color: 'rgba(255,255,255,0.08)' },
      },
      x: {
        ticks: { color: '#c0c9e4' },
        grid: { display: false },
      },
    } : {},
  };
}

function updateCharts(data) {
  comparisonChart.data.datasets[0].data = [
    data.impostoSemAct,
    data.impostoComAct,
    data.economiaAnual,
  ];
  comparisonChart.update();

  taxChart.data.datasets[0].data = [
    data.irComAct,
    data.irAdComAct,
    data.csllComAct,
  ];
  taxChart.update();
}

function fillExample() {
  inputs.receita.value = EXAMPLE.receita;
  inputs.despesasGerais.value = EXAMPLE.despesasGerais;
  inputs.despesasTech.value = EXAMPLE.despesasTech;
  inputs.techRange.value = EXAMPLE.despesasTech;
  update();
}

function clearForm() {
  inputs.receita.value = '';
  inputs.despesasGerais.value = '';
  inputs.despesasTech.value = '';
  inputs.techRange.value = 0;
  update();
}

function update() {
  const { receita, despesasGerais, despesasTech } = getInputValues();
  const data = calculateData(receita, despesasGerais, despesasTech);
  render(data);
}

function setTechValue(value) {
  inputs.despesasTech.value = value;
  inputs.techRange.value = value;
  update();
}

function updatePresetButtons(value) {
  document.querySelectorAll('.chip-btn').forEach((btn) => {
    btn.classList.toggle('active', Number(btn.dataset.value) === Number(value));
  });
}

function showToast(message) {
  buttons.toast.textContent = message;
  buttons.toast.classList.add('show');
  setTimeout(() => buttons.toast.classList.remove('show'), 2200);
}

async function copySummary() {
  const { receita, despesasGerais, despesasTech } = getInputValues();
  const data = calculateData(receita, despesasGerais, despesasTech);

  const summary = [
    'Resumo executivo - Benefício Fiscal ACT',
    `Receita bruta anual: ${formatMoney(data.receita)}`,
    `Despesas gerais: ${formatMoney(data.despesasGerais)}`,
    `Despesas elegíveis com tecnologia: ${formatMoney(data.despesasTech)}`,
    `Lucro operacional: ${formatMoney(data.lucroOperacional)}`,
    `Imposto sem ACT: ${formatMoney(data.impostoSemAct)}`,
    `Imposto com ACT: ${formatMoney(data.impostoComAct)}`,
    `Economia anual estimada: ${formatMoney(data.economiaAnual)}`,
    `Economia sobre o gasto elegível: ${formatPercent(data.economiaPercentual)}`,
    'Observação: simulação indicativa para apoio comercial e executivo.',
  ].join('\n');

  try {
    await navigator.clipboard.writeText(summary);
    showToast('Resumo copiado com sucesso.');
  } catch (error) {
    showToast('Não foi possível copiar automaticamente.');
  }
}

function initMenu() {
  buttons.menuToggle.addEventListener('click', () => {
    buttons.navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => buttons.navMenu.classList.remove('open'));
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.16 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function bindEvents() {
  [inputs.receita, inputs.despesasGerais, inputs.despesasTech, inputs.baseMinima].forEach((el) => {
    el.addEventListener('input', update);
    el.addEventListener('change', update);
  });

  inputs.techRange.addEventListener('input', (e) => setTechValue(Number(e.target.value)));

  document.querySelectorAll('.chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => setTechValue(Number(btn.dataset.value)));
  });

  buttons.fillExampleBtn.addEventListener('click', fillExample);
  buttons.fillExampleHero.addEventListener('click', fillExample);
  buttons.clearBtn.addEventListener('click', clearForm);
  buttons.copySummaryBtn.addEventListener('click', copySummary);
}

function init() {
  createCharts();
  initMenu();
  initReveal();
  bindEvents();
  fillExample();
}

init();
