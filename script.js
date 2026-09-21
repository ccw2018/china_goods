const items = [
  ['High-Speed Bearings','高速轴承','Industrial'],['Deep Groove Ball Bearings','深沟球轴承','Industrial'],['Linear Guide Rails','直线导轨','Industrial'],['Ball Screws','滚珠丝杠','Industrial'],['CNC Machined Parts','数控加工零件','Industrial'],['Servo Motors','伺服电机','Industrial'],
  ['Lithium-Ion Batteries','锂离子电池','Energy'],['Solar Panels','太阳能电池板','Energy'],['Solar Inverters','光伏逆变器','Energy'],['Portable Power Stations','便携式储能电源','Energy'],['EV Charging Stations','电动汽车充电桩','Energy'],['LiFePO4 Battery Packs','磷酸铁锂电池组','Energy'],
  ['Printed Circuit Boards','印刷电路板','Electronics'],['LED Strip Lights','LED灯带','Electronics'],['USB-C Chargers','USB-C充电器','Electronics'],['Wireless Earbuds','无线耳机','Electronics'],['Smart Watches','智能手表','Electronics'],['Security Cameras','安防摄像头','Electronics'],
  ['Stainless Steel Fasteners','不锈钢紧固件','Hardware'],['Power Drills','电钻','Hardware'],['Aluminum Extrusions','铝型材','Hardware'],['Water Pumps','水泵','Hardware'],['Pneumatic Cylinders','气缸','Hardware'],['Diamond Saw Blades','金刚石锯片','Hardware'],
  ['Insulated Water Bottles','保温水壶','Lifestyle'],['Robot Vacuum Cleaners','扫地机器人','Lifestyle'],['Air Fryers','空气炸锅','Lifestyle'],['Camping Tents','露营帐篷','Lifestyle'],['Electric Bicycles','电动自行车','Lifestyle'],['Travel Backpacks','旅行背包','Lifestyle']
];
const catalog = items.map((item, index) => {
  const [en, zh, description, specs, value] = productDetails[index];
  return {en, zh, group: item[2], description, specs, value};
});
const references = {
  'Precision High-Speed Spindle Bearings': ['Bearing selection guide · SKF', 'https://cdn.skfmediahub.skf.com/api/public/0901d19680495562/pdf_preview_medium/Super-precision_bearings_catalogue_-_13383_2_EN_pdf_preview_medium.pdf'],
  'High-Efficiency N-Type Solar Modules': ['Technology reference · Trinasolar', 'https://www.trinasolar.com/us/pv-module'],
  'GaN USB-C Power Delivery Chargers': ['USB-C technology reference · Texas Instruments', 'https://www.ti.com/technologies/usb-type-c.html']
};
let category = 'All products';
const search = document.getElementById('search');
const products = document.getElementById('products');
const categories = ['All products', ...new Set(items.map(item => item[2]))];
for (const name of categories) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = name;
  button.setAttribute('aria-pressed', String(name === category));
  button.addEventListener('click', () => {
    category = name;
    for (const filter of document.querySelectorAll('#filters button')) filter.setAttribute('aria-pressed', String(filter === button));
    render();
  });
  document.getElementById('filters').append(button);
}
function render() {
  const query = search.value.trim().toLowerCase();
  const matches = catalog.filter(item => (category === 'All products' || item.group === category) && [item.en, item.zh, item.group, item.description, ...item.specs, item.value].join(' ').toLowerCase().includes(query));
  products.replaceChildren();
  for (const {en, zh, group, description, specs, value} of matches) {
    const card = document.createElement('article');
    card.className = 'product';
    const link = document.createElement('a');
    link.className = 'product-name';
    link.href = 'https://www.alibaba.com/trade/search?SearchText=' + encodeURIComponent(en);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = en + ' ↗';
    const label = document.createElement('div');
    label.className = 'product-top';
    label.textContent = group;
    const heading = document.createElement('h3');
    heading.append(link);
    const translation = document.createElement('p');
    translation.lang = 'zh-CN';
    translation.textContent = zh;
    const intro = document.createElement('p');
    intro.className = 'product-description';
    intro.textContent = description;
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = 'Technical selection guide / 技术参数';
    const caption = document.createElement('p');
    caption.className = 'spec-caption';
    caption.textContent = 'Reference targets · Confirm per model';
    const list = document.createElement('ul');
    for (const spec of specs) {
      const row = document.createElement('li');
      row.textContent = spec;
      list.append(row);
    }
    details.append(summary, caption, list);
    if (references[en]) {
      const source = document.createElement('a');
      source.textContent = references[en][0];
      source.href = references[en][1];
      source.target = '_blank';
      source.rel = 'noopener noreferrer';
      source.className = 'spec-source';
      details.append(source);
    }
    const valueBox = document.createElement('div');
    valueBox.className = 'value-note';
    const valueTitle = document.createElement('strong');
    valueTitle.textContent = 'VALUE FOCUS / 性价比';
    const valueText = document.createElement('p');
    valueText.textContent = value;
    valueBox.append(valueTitle, valueText);
    card.append(label, heading, translation, intro, details, valueBox);
    products.append(card);
  }
  document.getElementById('result-count').textContent = `${matches.length} PRODUCTS / ${category.toUpperCase()}`;
  document.getElementById('empty').hidden = matches.length !== 0;
}
search.addEventListener('input', render);
render();
// Shared page-view counts require a hosted service; never substitute local counts.
const counter = document.getElementById('busuanzi_value_page_pv');
if (!['http:', 'https:'].includes(location.protocol) || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
  counter.textContent = '发布后启用';
} else {
  const timeout = setTimeout(() => { if (!/^\d+$/.test(counter.textContent.trim())) counter.textContent = '暂不可用'; }, 10000);
  const observer = new MutationObserver(() => {
    if (/^\d+$/.test(counter.textContent.trim())) { clearTimeout(timeout); observer.disconnect(); }
  });
  observer.observe(counter, {childList: true, subtree: true, characterData: true});
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.onerror = () => { clearTimeout(timeout); counter.textContent = '暂不可用'; observer.disconnect(); };
  document.head.append(script);
}
