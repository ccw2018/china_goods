// Shared page-view counts require a hosted service; never substitute local counts.

const references = {
  'Precision High-Speed Spindle Bearings': {
    url: 'https://cdn.skfmediahub.skf.com/api/public/0901d19680495562/pdf_preview_medium/Super-precision_bearings_catalogue_-_13383_2_EN_pdf_preview_medium.pdf',
    label: {
      en: 'Bearing selection guide · SKF',
      zh: '轴承选型指南 · SKF',
      pt: 'Guia de seleção de rolamentos · SKF',
      es: 'Guía de selección de rodamientos · SKF'
    }
  },
  'High-Efficiency N-Type Solar Modules': {
    url: 'https://www.trinasolar.com/us/pv-module',
    label: {
      en: 'Technology reference · Trinasolar',
      zh: '技术参考 · 天合光能',
      pt: 'Referência técnica · Trinasolar',
      es: 'Referencia técnica · Trinasolar'
    }
  },
  'GaN USB-C Power Delivery Chargers': {
    url: 'https://www.ti.com/technologies/usb-type-c.html',
    label: {
      en: 'USB-C technology reference · Texas Instruments',
      zh: 'USB-C 技术参考 · 德州仪器',
      pt: 'Referência técnica USB-C · Texas Instruments',
      es: 'Referencia técnica USB-C · Texas Instruments'
    }
  }
};

let category = 'All products';
const search = document.getElementById('search');
const products = document.getElementById('products');
const filters = document.getElementById('filters');
const langSelect = document.getElementById('lang-select');
const counter = document.getElementById('busuanzi_value_page_pv');

function syncHtmlLang(code) {
  if (code === 'zh') document.documentElement.lang = 'zh-CN';
  else if (code === 'pt') document.documentElement.lang = 'pt-BR';
  else document.documentElement.lang = code;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'))); });
}

function buildFilters() {
  const categories = ['All products', ...new Set(productDetails.map(item => item.category))];
  filters.replaceChildren();
  for (const name of categories) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = categoryName(name);
    button.setAttribute('aria-pressed', String(name === category));
    button.addEventListener('click', () => {
      category = name;
      for (const f of filters.querySelectorAll('button')) f.setAttribute('aria-pressed', String(f === button));
      render();
    });
    filters.append(button);
  }
}

function haystackOf(item) {
  return [
    item.name.en, item.name.zh, item.name.pt, item.name.es,
    item.category,
    item.description.en, item.description.zh, item.description.pt, item.description.es,
    ...item.specs.en, ...item.specs.zh, ...item.specs.pt, ...item.specs.es,
    item.value.en, item.value.zh, item.value.pt, item.value.es
  ].join(' ').toLowerCase();
}

function render() {
  const query = search.value.trim().toLowerCase();
  const matches = productDetails.filter(item => (category === 'All products' || item.category === category) && haystackOf(item).includes(query));
  products.replaceChildren();
  for (const item of matches) {
    const card = document.createElement('article');
    card.className = 'product';
    const link = document.createElement('a');
    link.className = 'product-name';
    link.href = 'https://www.alibaba.com/trade/search?SearchText=' + encodeURIComponent(item.name.en);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = item.name[currentLang] + ' ↗';
    const label = document.createElement('div');
    label.className = 'product-top';
    label.textContent = categoryName(item.category);
    const heading = document.createElement('h3');
    heading.append(link);
    const intro = document.createElement('p');
    intro.className = 'product-description';
    intro.textContent = item.description[currentLang];
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = t('spec_guide');
    const caption = document.createElement('p');
    caption.className = 'spec-caption';
    caption.textContent = t('spec_caption');
    const list = document.createElement('ul');
    for (const spec of item.specs[currentLang]) {
      const row = document.createElement('li');
      row.textContent = spec;
      list.append(row);
    }
    details.append(summary, caption, list);
    if (references[item.name.en]) {
      const ref = references[item.name.en];
      const source = document.createElement('a');
      source.textContent = ref.label[currentLang];
      source.href = ref.url;
      source.target = '_blank';
      source.rel = 'noopener noreferrer';
      source.className = 'spec-source';
      details.append(source);
    }
    const valueBox = document.createElement('div');
    valueBox.className = 'value-note';
    const valueTitle = document.createElement('strong');
    valueTitle.textContent = t('value_focus');
    const valueText = document.createElement('p');
    valueText.textContent = item.value[currentLang];
    valueBox.append(valueTitle, valueText);
    card.append(label, heading, intro, details, valueBox);
    products.append(card);
  }
  document.getElementById('result-count').textContent = countText(matches.length, category);
  document.getElementById('empty').hidden = matches.length !== 0;
}

search.addEventListener('input', render);

document.addEventListener('langchange', () => {
  applyTranslations();
  buildFilters();
  render();
});

syncHtmlLang(currentLang);
applyTranslations();
buildFilters();
render();
langSelect.value = currentLang;
langSelect.addEventListener('change', () => setLang(langSelect.value));

if (!['http:', 'https:'].includes(location.protocol) || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
  counter.textContent = t('counter_local');
} else {
  const timeout = setTimeout(() => { if (!/^\d+$/.test(counter.textContent.trim())) counter.textContent = t('counter_unavailable'); }, 10000);
  const observer = new MutationObserver(() => {
    if (/^\d+$/.test(counter.textContent.trim())) { clearTimeout(timeout); observer.disconnect(); }
  });
  observer.observe(counter, { childList: true, subtree: true, characterData: true });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.onerror = () => { clearTimeout(timeout); counter.textContent = t('counter_unavailable'); observer.disconnect(); };
  document.head.append(script);
}