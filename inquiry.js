const inquiryCopy = {
  en: ['Product inquiry','Your message is private. Formspree processes your contact details so the site owner can reply.','Name *','Email *','Company','Product','Quantity / unit','Message *','General inquiry','Send inquiry','Ask about this product','Not yet available. Please return later.','Sending…','Your inquiry was received. Thank you.','Unable to confirm receipt. Your text is retained; check your connection before retrying.','Submission limit reached. Please try again later.','Please check the form and try again.'],
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
