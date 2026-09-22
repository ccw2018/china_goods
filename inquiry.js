const inquiryCopy = {
  en: ['Product inquiry','Your message is private. Formspree processes your contact details so the site owner can reply.','Name *','Email *','Company','Product','Quantity / unit','Message *','General inquiry','Send inquiry','Ask about this product','Not yet available. Please return later.','Sending…','Your inquiry was received. Thank you.','Unable to confirm receipt. Your text is retained; check your connection before retrying.','Submission limit reached. Please try again later.','Please check the form and try again.'],
  zh: ['产品咨询','留言不会公开。Formspree 将处理你的联系方式和咨询内容，供站主回复。','姓名 *','邮箱 *','公司','感兴趣的商品','采购数量 / 单位','留言内容 *','一般咨询','发送咨询','咨询此商品','咨询尚未开通，请稍后再来。','正在发送…','咨询已收到，谢谢。','无法确认是否收到，内容已保留；请检查网络后再重试。','提交次数达到限制，请稍后重试。','请检查填写内容后重试。'],
  pt: ['Consulta de produto','Sua mensagem é privada. O Formspree processa seus dados de contato para que o responsável pelo site possa responder.','Nome *','E-mail *','Empresa','Produto','Quantidade / unidade','Mensagem *','Consulta geral','Enviar consulta','Consultar este produto','Ainda indisponível. Volte mais tarde.','Enviando…','Sua consulta foi recebida. Obrigado.','Não foi possível confirmar o recebimento. O texto foi mantido; verifique a conexão antes de tentar novamente.','Limite de envios atingido. Tente mais tarde.','Verifique o formulário e tente novamente.'],
  es: ['Consulta de producto','Tu mensaje es privado. Formspree procesa tus datos de contacto para que el responsable del sitio pueda responder.','Nombre *','Correo electrónico *','Empresa','Producto','Cantidad / unidad','Mensaje *','Consulta general','Enviar consulta','Consultar este producto','Aún no disponible. Vuelve más tarde.','Enviando…','Tu consulta fue recibida. Gracias.','No se pudo confirmar la recepción. El texto se conserva; revisa la conexión antes de reintentar.','Se alcanzó el límite de envíos. Inténtalo más tarde.','Revisa el formulario e inténtalo de nuevo.']
};
const inquiryLabel = index => inquiryCopy[currentLang][index];
const inquiryEndpoint = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(window.INQUIRY_ENDPOINT || '') && !/YOUR|PLACEHOLDER/i.test(window.INQUIRY_ENDPOINT) ? window.INQUIRY_ENDPOINT : '';
const inquirySection = document.getElementById('inquiry');
const inquiryForm = document.createElement('form');
inquiryForm.id = 'inquiry-form';
inquiryForm.method = 'post';
inquiryForm.setAttribute('aria-describedby','inquiry-privacy');
const inquiryFields = {};
const inquiryLabels = [];
for (const [name, type, label, required, max] of [
  ['name','text',2,true,100],['email','email',3,true,254],['company','text',4,false,150],
  ['product','select',5,false,0],['quantity','text',6,false,80],['message','textarea',7,true,5000]
]) {
  const wrapper = document.createElement('label');
  if(name === 'message') wrapper.className = 'inquiry-wide';
  const caption = document.createElement('span');
  inquiryLabels.push([caption,label]);
  const input = document.createElement(type === 'select' || type === 'textarea' ? type : 'input');
  if(input.tagName === 'INPUT') input.type = type;
  input.name = name;
  input.id = 'inquiry-' + name;
  input.required = required;
  if(max) input.maxLength = max;
  if(type === 'textarea') input.rows = 6;
  if(name === 'name') input.autocomplete = 'name';
  if(name === 'email') input.autocomplete = 'email';
  if(name === 'company') input.autocomplete = 'organization';
  wrapper.append(caption,input);
  inquiryForm.append(wrapper);
  inquiryFields[name] = input;
}
const honeypot = document.createElement('input');
honeypot.name = '_gotcha';
honeypot.type = 'text';
honeypot.tabIndex = -1;
honeypot.autocomplete = 'off';
honeypot.className = 'inquiry-trap';
honeypot.setAttribute('aria-hidden','true');
const inquirySubmit = document.createElement('button');
inquirySubmit.type = 'submit';
const inquiryStatus = document.createElement('p');
inquiryStatus.setAttribute('role','status');
inquiryStatus.setAttribute('aria-live','polite');
inquiryStatus.className = 'inquiry-wide';
let inquiryBusy = false;
let inquiryStatusKey = inquiryEndpoint ? null : 11;
inquiryForm.append(honeypot,inquirySubmit,inquiryStatus);
inquirySection.append(inquiryForm);
function translateInquiry() {
  document.getElementById('inquiry-title').textContent = inquiryLabel(0);
  document.getElementById('inquiry-privacy').textContent = inquiryLabel(1);
  for(const [label,key] of inquiryLabels) label.textContent = inquiryLabel(key);
  const selected = inquiryFields.product.value;
  inquiryFields.product.replaceChildren();
  for(const item of [null,...productDetails]) {
    const option = document.createElement('option');
    option.value = item ? item.name.en : '';
    option.textContent = item ? item.name[currentLang] : inquiryLabel(8);
    inquiryFields.product.append(option);
  }
  inquiryFields.product.value = selected;
  inquirySubmit.textContent = inquiryLabel(inquiryBusy ? 12 : 9);
  inquirySubmit.disabled = inquiryBusy || !inquiryEndpoint;
  inquiryStatus.textContent = inquiryStatusKey === null ? '' : inquiryLabel(inquiryStatusKey);
}
document.addEventListener('langchange',translateInquiry);
document.addEventListener('product-inquiry',event => {
  if(inquiryBusy) return;
  if(productDetails.some(p=>p.name.en === event.detail)) inquiryFields.product.value = event.detail;
  inquirySection.scrollIntoView({block:'start',behavior:'auto'});
  inquiryFields.name.focus({preventScroll:true});
});
// No inquiry values are sent to analytics. Also disable Form interactions in GA4 settings.
for(const event of ['focusin','input','change']) inquiryForm.addEventListener(event,e=>e.stopPropagation());
inquiryForm.addEventListener('submit',async event => {
  event.preventDefault();
  event.stopImmediatePropagation();
  if(inquiryBusy || !inquiryEndpoint) return;
  for(const name of ['name','email','message']) inquiryFields[name].value = inquiryFields[name].value.trim();
  if(!inquiryForm.reportValidity()) return;
  if(honeypot.value) { inquiryStatusKey=16; translateInquiry(); return; }
  const body = new FormData(inquiryForm);
  body.set('language',currentLang);
  body.set('_subject','Source China product inquiry');
  inquiryBusy = true;
  inquiryStatusKey = 12;
  Object.values(inquiryFields).forEach(field=>field.disabled=true);
  translateInquiry();
  const controller = new AbortController();
  const timer = setTimeout(()=>controller.abort(),20000);
  try {
    const response = await fetch(inquiryEndpoint,{method:'POST',body,headers:{Accept:'application/json'},signal:controller.signal,credentials:'omit',referrerPolicy:'no-referrer'});
    if(response.ok) { inquiryForm.reset(); inquiryStatusKey=13; }
    else inquiryStatusKey = response.status === 429 ? 15 : response.status === 400 || response.status === 422 ? 16 : 14;
  } catch { inquiryStatusKey=14; }
  finally {
    clearTimeout(timer);
    inquiryBusy=false;
    Object.values(inquiryFields).forEach(field=>field.disabled=false);
    translateInquiry();
  }
});
translateInquiry();
