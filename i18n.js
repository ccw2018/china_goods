// UI copy for four locales: English (default), Simplified Chinese, Brazilian Portuguese, Latin American Spanish.
const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' }
];

const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'source-china-lang';

const UI = {
  en: {
    explore: 'Explore the directory',
    hero_eyebrow: 'MADE IN CHINA. FOUND HERE.',
    hero_title_1: 'Small components.',
    hero_title_2: 'Big possibilities.',
    hero_desc_1: 'High-performance choices. Thoughtful sourcing.',
    hero_desc_2: 'Explore specifications, applications and long-term value.',
    stamp_1: 'Made in China',
    stamp_2: 'GLOBAL POSSIBILITIES',
    section_eyebrow: 'THE PRODUCT INDEX',
    section_title: 'Find your next product.',
    search_placeholder: 'Search products',
    buying_note: 'Choose with confidence: explore performance-focused buying briefs and value considerations. Technical figures are example selection targets, not verified specifications of the suppliers linked below. Confirm the exact model, test conditions and quotation before ordering.',
    name_label: 'PRODUCT NAME',
    empty: 'No products found. Try “bearing”, “solar”, or “轴承”.',
    noscript: 'Please enable JavaScript to browse this product directory.',
    directory_note: 'Product names open Alibaba search in a new tab. A curated directory, not a live sales ranking.',
    closing_1: 'BUILT TO CONNECT.',
    closing_2: 'From China.',
    closing_3: 'To your next idea.',
    closing_link: 'Explore products',
    footer_tagline: 'An independent product discovery directory.',
    visits_label: 'Page views',
    powered_by: 'Powered by',
    ga_notice: 'This site uses Google Analytics',
    spec_guide: 'Technical selection guide',
    spec_caption: 'Reference targets · Confirm per model',
    value_focus: 'VALUE FOCUS',
    counter_loading: 'Loading…',
    counter_local: 'Published only',
    counter_unavailable: 'Unavailable',
    result_count: '{n} PRODUCTS · {category}'
  },
  zh: {
    explore: '浏览目录',
    hero_eyebrow: '中国制造，就在这里。',
    hero_title_1: '小零件。',
    hero_title_2: '大可能。',
    hero_desc_1: '高性能之选。用心采购。',
    hero_desc_2: '探索规格、应用与长期价值。',
    stamp_1: '中国制造',
    stamp_2: '全球可能',
    section_eyebrow: '商品索引',
    section_title: '找到你的下一个产品。',
    search_placeholder: '搜索商品',
    buying_note: '放心选购：探索以性能为导向的采购简报与价值考量。技术参数为示例选型目标，并非下方所链供应商的已验证规格。下单前请确认具体型号、测试条件与报价。',
    name_label: '商品名称',
    empty: '未找到商品。试试“bearing”、“solar”或“轴承”。',
    noscript: '请启用 JavaScript 以浏览此商品目录。',
    directory_note: '商品名称将在新标签页打开 Alibaba 搜索。精选目录，非实时销量排名。',
    closing_1: '为连接而生。',
    closing_2: '来自中国。',
    closing_3: '到你下一个创意。',
    closing_link: '浏览产品',
    footer_tagline: '一个独立的商品发现目录。',
    visits_label: '本页访问次数',
    powered_by: '技术支持',
    ga_notice: '本站使用 Google Analytics',
    spec_guide: '技术选型指南',
    spec_caption: '参考指标 · 按型号确认',
    value_focus: '性价比',
    counter_loading: '加载中…',
    counter_local: '发布后启用',
    counter_unavailable: '暂不可用',
    result_count: '{n} 个商品 · {category}'
  },
  pt: {
    explore: 'Explorar o diretório',
    hero_eyebrow: 'FABRICADO NA CHINA. ENCONTRADO AQUI.',
    hero_title_1: 'Pequenos componentes.',
    hero_title_2: 'Grandes possibilidades.',
    hero_desc_1: 'Escolhas de alto desempenho. Fornecimento criterioso.',
    hero_desc_2: 'Explore especificações, aplicações e valor a longo prazo.',
    stamp_1: 'Feito na China',
    stamp_2: 'POSSIBILIDADES GLOBAIS',
    section_eyebrow: 'O ÍNDICE DE PRODUTOS',
    section_title: 'Encontre seu próximo produto.',
    search_placeholder: 'Buscar produtos',
    buying_note: 'Escolha com confiança: explore briefs de compra focados em desempenho e considerações de valor. Os dados técnicos são metas de seleção de exemplo, não especificações verificadas dos fornecedores vinculados abaixo. Confirme o modelo exato, as condições de teste e a cotação antes de comprar.',
    name_label: 'NOME DO PRODUTO',
    empty: 'Nenhum produto encontrado. Tente “bearing”, “solar” ou “轴承”.',
    noscript: 'Ative o JavaScript para navegar neste diretório de produtos.',
    directory_note: 'Os nomes dos produtos abrem a busca do Alibaba em uma nova aba. Um diretório curado, não um ranking de vendas em tempo real.',
    closing_1: 'FEITO PARA CONECTAR.',
    closing_2: 'Da China.',
    closing_3: 'Para sua próxima ideia.',
    closing_link: 'Explorar produtos',
    footer_tagline: 'Um diretório independente de descoberta de produtos.',
    visits_label: 'Visualizações de página',
    powered_by: 'Desenvolvido por',
    ga_notice: 'Este site usa Google Analytics',
    spec_guide: 'Guia técnico de seleção',
    spec_caption: 'Metas de referência · Confirme por modelo',
    value_focus: 'FOCO EM VALOR',
    counter_loading: 'Carregando…',
    counter_local: 'Disponível após publicação',
    counter_unavailable: 'Indisponível',
    result_count: '{n} PRODUTOS · {category}'
  },
  es: {
    explore: 'Explorar el directorio',
    hero_eyebrow: 'HECHO EN CHINA. ENCONTRADO AQUÍ.',
    hero_title_1: 'Componentes pequeños.',
    hero_title_2: 'Grandes posibilidades.',
    hero_desc_1: 'Opciones de alto rendimiento. Abastecimiento responsable.',
    hero_desc_2: 'Explore especificaciones, aplicaciones y valor a largo plazo.',
    stamp_1: 'Hecho en China',
    stamp_2: 'POSIBILIDADES GLOBALES',
    section_eyebrow: 'EL ÍNDICE DE PRODUCTOS',
    section_title: 'Encuentra tu próximo producto.',
    search_placeholder: 'Buscar productos',
    buying_note: 'Elige con confianza: explora guías de compra centradas en el rendimiento y consideraciones de valor. Las cifras técnicas son objetivos de selección de ejemplo, no especificaciones verificadas de los proveedores enlazados abajo. Confirma el modelo exacto, las condiciones de prueba y la cotización antes de comprar.',
    name_label: 'NOMBRE DEL PRODUCTO',
    empty: 'No se encontraron productos. Prueba “bearing”, “solar” o “轴承”.',
    noscript: 'Habilite JavaScript para explorar este directorio de productos.',
    directory_note: 'Los nombres de productos abren la búsqueda de Alibaba en una pestaña nueva. Un directorio curado, no un ranking de ventas en vivo.',
    closing_1: 'HECHO PARA CONECTAR.',
    closing_2: 'De China.',
    closing_3: 'Hacia tu próxima idea.',
    closing_link: 'Explorar productos',
    footer_tagline: 'Un directorio independiente de descubrimiento de productos.',
    visits_label: 'Vistas de página',
    powered_by: 'Con tecnología de',
    ga_notice: 'Este sitio utiliza Google Analytics',
    spec_guide: 'Guía técnica de selección',
    spec_caption: 'Objetivos de referencia · Confirmar por modelo',
    value_focus: 'ENFOQUE EN VALOR',
    counter_loading: 'Cargando…',
    counter_local: 'Disponible tras la publicación',
    counter_unavailable: 'No disponible',
    result_count: '{n} PRODUCTOS · {category}'
  }
};

const CATEGORIES = {
  'All products': { en: 'All products', zh: '全部商品', pt: 'Todos os produtos', es: 'Todos los productos' },
  Industrial: { en: 'Industrial', zh: '工业', pt: 'Industrial', es: 'Industrial' },
  Energy: { en: 'Energy', zh: '能源', pt: 'Energia', es: 'Energía' },
  Electronics: { en: 'Electronics', zh: '电子', pt: 'Eletrônicos', es: 'Electrónica' },
  Hardware: { en: 'Hardware', zh: '五金', pt: 'Ferramentas', es: 'Ferretería' },
  Lifestyle: { en: 'Lifestyle', zh: '生活方式', pt: 'Estilo de vida', es: 'Estilo de vida' }
};

let currentLang = DEFAULT_LANG;
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LANGS.some(l => l.code === saved)) currentLang = saved;
} catch (e) { /* localStorage unavailable (e.g. file:// with restrictive policies) */ }

function t(key) {
  return (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || key;
}

function categoryName(cat) {
  return CATEGORIES[cat] ? CATEGORIES[cat][currentLang] : cat;
}

function countText(n, category) {
  return t('result_count').replace('{n}', n).replace('{category}', categoryName(category));
}

function setLang(code) {
  if (!LANGS.some(l => l.code === code)) return;
  currentLang = code;
  try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* ignore */ }
  if (code === 'zh') document.documentElement.lang = 'zh-CN';
  else if (code === 'pt') document.documentElement.lang = 'pt-BR';
  else document.documentElement.lang = code;
  document.dispatchEvent(new CustomEvent('langchange'));
}