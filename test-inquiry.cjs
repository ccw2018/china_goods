const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
class Element {
  constructor(tag){this.tagName=tag.toUpperCase();this.children=[];this.value='';this.events={};this.disabled=false;}
  append(...nodes){this.children.push(...nodes);}
  setAttribute(){}
  replaceChildren(){this.children=[];}
  addEventListener(name,fn){this.events[name]=fn;}
  scrollIntoView(){}
  focus(){this.focused=true;}
  reportValidity(){return this.valid !== false;}
  reset(){this.resetCalled=true;}
}
function setup(endpoint=''){
 const ids={};const listeners={};const calls=[];
 const document={getElementById:id=>ids[id]??=new Element('section'),createElement:tag=>new Element(tag),addEventListener:(k,f)=>listeners[k]=f};
 const context=vm.createContext({window:{INQUIRY_ENDPOINT:endpoint},document,currentLang:'en',productDetails:[{name:{en:'Bearings',zh:'轴承',pt:'Rolamentos',es:'Rodamientos'}}],FormData:class {constructor(){this.data={};}set(k,v){this.data[k]=v;}},AbortController,setTimeout,clearTimeout,fetch:async(url,options)=>{calls.push({url,options});return {ok:true,status:200};}});
 vm.runInContext(fs.readFileSync('inquiry.js','utf8'),context);
 const get=expr=>vm.runInContext(expr,context);
 return {context,get,calls,listeners};
}
const event=()=>({preventDefault(){},stopImmediatePropagation(){}});
(async()=>{
 let s=setup();assert.equal(s.get('inquirySubmit.disabled'),true);await s.get('inquiryForm').events.submit(event());assert.equal(s.calls.length,0);
 s=setup('https://example.com/f/abc');assert.equal(s.get('inquirySubmit.disabled'),true);
 s=setup('https://formspree.io/f/testonly');
 assert.equal(s.get("inquirySubmit.textContent"),"Send inquiry");
 s.listeners['product-inquiry']({detail:'Bearings'});assert.equal(s.get('inquiryFields.product.value'),'Bearings');assert.equal(s.get('inquiryFields.name.focused'),true);
 const submit=s.get('inquiryForm').events.submit;
 for(const name of ['name','email','message'])s.get('inquiryFields')[name].value=name==='email'?'test@example.com':'TEST ONLY';
 s.get('inquiryForm').valid=false;await submit(event());assert.equal(s.calls.length,0);s.get('inquiryForm').valid=true;
 let finish;s.context.fetch=(url,options)=>{s.calls.push({url,options});return new Promise(resolve=>finish=resolve);};
 const first=submit(event());assert.equal(s.get('inquirySubmit.disabled'),true);await submit(event());assert.equal(s.calls.length,1);finish({ok:true,status:200});await first;assert.equal(s.get('inquiryStatusKey'),13);assert.equal(s.get('inquiryForm.resetCalled'),true);assert.equal(s.calls[0].options.body.data.language,'en');
 for(const status of [429,422,500]){s.context.fetch=async()=>({ok:false,status});s.get('inquiryFields.message').value='retain this';await submit(event());assert.equal(s.get('inquiryFields.message.value'),'retain this');assert.equal(s.get('inquiryStatusKey'),status===429?15:status===422?16:14);}
 s.context.fetch=async()=>{throw Error('offline');};await submit(event());assert.equal(s.get('inquiryStatusKey'),14);assert.equal(s.get('inquirySubmit.disabled'),false);
 s.get('honeypot').value='spam';await submit(event());assert.equal(s.get('inquiryStatusKey'),16);
 console.log('PASS: disabled endpoint, English interface, product selection, invalid form, duplicate submission, success, 429/422/500, network failure, honeypot. Mock requests only.');
})().catch(error=>{console.error(error);process.exitCode=1;});
