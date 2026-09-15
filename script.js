const items = [
  ['High-Speed Bearings','高速轴承','Industrial'],['Deep Groove Ball Bearings','深沟球轴承','Industrial'],['Linear Guide Rails','直线导轨','Industrial'],['Ball Screws','滚珠丝杠','Industrial'],['CNC Machined Parts','数控加工零件','Industrial'],['Servo Motors','伺服电机','Industrial'],
  ['Lithium-Ion Batteries','锂离子电池','Energy'],['Solar Panels','太阳能电池板','Energy'],['Solar Inverters','光伏逆变器','Energy'],['Portable Power Stations','便携式储能电源','Energy'],['EV Charging Stations','电动汽车充电桩','Energy'],['LiFePO4 Battery Packs','磷酸铁锂电池组','Energy'],
  ['Printed Circuit Boards','印刷电路板','Electronics'],['LED Strip Lights','LED灯带','Electronics'],['USB-C Chargers','USB-C充电器','Electronics'],['Wireless Earbuds','无线耳机','Electronics'],['Smart Watches','智能手表','Electronics'],['Security Cameras','安防摄像头','Electronics'],
  ['Stainless Steel Fasteners','不锈钢紧固件','Hardware'],['Power Drills','电钻','Hardware'],['Aluminum Extrusions','铝型材','Hardware'],['Water Pumps','水泵','Hardware'],['Pneumatic Cylinders','气缸','Hardware'],['Diamond Saw Blades','金刚石锯片','Hardware'],
  ['Insulated Water Bottles','保温水壶','Lifestyle'],['Robot Vacuum Cleaners','扫地机器人','Lifestyle'],['Air Fryers','空气炸锅','Lifestyle'],['Camping Tents','露营帐篷','Lifestyle'],['Electric Bicycles','电动自行车','Lifestyle'],['Travel Backpacks','旅行背包','Lifestyle']
];
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
  const matches = items.filter(item => (category === 'All products' || item[2] === category) && item.join(' ').toLowerCase().includes(query));
  products.replaceChildren();
  for (const [en, zh, group] of matches) {
    const link = document.createElement('a');
    link.className = 'product';
    link.href = 'https://www.alibaba.com/trade/search?SearchText=' + encodeURIComponent(en);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = `<div class="product-top"><span>${group}</span><b aria-hidden="true">↗</b></div><h3>${en}</h3><p lang="zh-CN">${zh}</p>`;
    products.append(link);
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
