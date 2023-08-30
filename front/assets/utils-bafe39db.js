import{j as b,r as P}from"./index-50c8aee8.js";var N=(e=>(e[e.INPUT=0]="INPUT",e[e.SELECT=1]="SELECT",e[e.CHECKBOX=2]="CHECKBOX",e[e.TEXTAREA=3]="TEXTAREA",e[e.RADIO=4]="RADIO",e[e.FILE=5]="FILE",e[e.SMART_SELECT=6]="SMART_SELECT",e[e.SCHEDULE=7]="SCHEDULE",e))(N||{});function Ae({placeholder:e,additionalClasses:t,value:n,disabled:r,type:s,min:i,max:o,required:u,onInput:f,onKeyPress:c,size:d}){return b.jsx("input",{className:"form-control "+t,placeholder:e,defaultValue:n,disabled:r,type:s,required:u,min:i,max:o,size:d,onChange:p=>{f&&f(p)},onKeyDown:p=>{c&&c(p)}},n)}function xe({options:e,additionalClasses:t,disabled:n,required:r,multiple:s,size:i,onSelect:o,value:u}){function f(c){return u?s?u.includes(c.value):u===c.value:!1}return b.jsxs(b.Fragment,{children:[b.jsx("select",{className:`form-select ${t}`,disabled:n,required:r,multiple:s,size:i,onChange:c=>o?o(c):"",children:e.map(c=>b.jsx("option",{value:c.value,disabled:c.disabled,selected:f(c),style:c.style,children:c.text},c.value))}),s?b.jsx("div",{className:"form-text",children:"Для выбора нескольких элементов нажмите ctrl + опцию"}):null]})}function Je({required:e,disabled:t,checked:n,additionalClasses:r,onCheck:s}){return b.jsx("input",{required:e,type:"checkbox",checked:n,disabled:t,onChange:s,className:`form-check-input ${r}`})}function ze({required:e,disabled:t,additionalClasses:n,value:r,cols:s,rows:i,onInput:o}){return b.jsx("textarea",{required:e,disabled:t,className:`form-control ${n}`,onInput:o,value:r,rows:i,cols:s})}function Ve({checked:e,connect_with:t,required:n,disabled:r,additionalClasses:s,onCheck:i}){return b.jsx("input",{type:"radio",className:`form-check-input ${s}`,required:n,disabled:r,name:t,checked:e,onChange:i})}const _="https://kusmirror.ru/api",bn=30,yn=20,Ge="https://kusmirror.ru";function Ke({required:e,disabled:t,additionalClasses:n,multiple:r,onInput:s,url:i}){return b.jsxs(b.Fragment,{children:[b.jsx("input",{required:e,disabled:t,className:`form-control ${n}`,type:"file",multiple:r,onChange:s}),i?b.jsx("div",{className:"form-text",children:b.jsx("a",{href:Ge+"/data"+i.slice(2),children:"Загруженный файл"})}):null]})}function We({options:e,additionalClasses:t,disabled:n,size:r,required:s,onSelect:i,multiple:o,initialSearch:u,value:f}){const[c,d]=P.useState(e);function p(S){d(e.map(y=>(y.text.includes(S)?y.style={...y.style,display:"block"}:y.style={...y.style,display:"none"},y)))}return P.useEffect(()=>{u&&p(u)},[]),P.useEffect(()=>{p("")},[e]),b.jsxs("div",{children:[b.jsxs("div",{className:"input-group mb-3 input-group-sm",children:[b.jsx("span",{className:"input-group-text",children:b.jsx("i",{className:"bi bi-search"})}),b.jsx("input",{className:"form-control",type:"text",placeholder:"Поиск...",value:u,onInput:S=>{p(S.currentTarget.value)}})]}),b.jsx(xe,{options:c,additionalClasses:t,disabled:n,size:r,required:s,onSelect:i,multiple:o,value:f})]})}function Xe({weekday:e,value:t,onInput:n}){const[r,s]=P.useState(t);return P.useEffect(()=>{s(t)},[t]),b.jsxs("div",{className:"row align-items-center justify-content-center mb-3",children:[b.jsxs("div",{className:"col-8",children:[e,":"]}),b.jsx("div",{className:"col-4",children:b.jsx(Ae,{type:"number",min:0,max:23,value:r,onInput:i=>{n&&n(i.currentTarget.value)}})})]})}function Qe({required:e,disabled:t,additionalClasses:n,value:r,onInput:s}){const[i,o]=P.useState([0,0,0,0,0,0,0]),u=["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];P.useEffect(()=>{const c=[0,0,0,0,0,0,0];r==null||r.split(" ").map(d=>{d&&(c[Number(d)-1]+=1)}),o(c)},[r]);function f(c){let d=[];c.map((p,S)=>{for(let y=0;y<p;y++)d.push(S+1)}),s&&s(d.join(" "))}return b.jsx("div",{className:`${n} `,children:u.map((c,d)=>b.jsx(Xe,{weekday:c,value:i[d],onInput:p=>{const S=[...i];S[d]=p?Number(p):0,o(S),f(S)}},d))})}function wn({elements:e,additionalClassesButton:t,buttonText:n,horizontal:r,onSubmit:s,additionalClasses:i,instance:o}){const[u,f]=P.useState({});P.useEffect(()=>{if(o){const l={};e.map(m=>{l[m.name]=o[m.name]}),f(l)}},[]),P.useEffect(()=>{const l={};e.map(m=>{(m.type===N.SELECT||m.type===N.SMART_SELECT)&&(m.settings.multiple?l[m.name]=[]:m.settings.options.length>0?l[m.name]=m.settings.options[0].value:l[m.name]=""),o&&o[m.name]&&(l[m.name]=o[m.name])}),f(l)},[e,o]);function c(l,m){f({...u,[m]:l})}function d(l,m){return b.jsx(Ae,{placeholder:l.placeholder,value:o?o[m]:"",disabled:l.disabled,type:l.type,min:l.min,max:l.max,required:l.required,additionalClasses:l.additionalClasses,onInput:O=>{c(O.currentTarget.value,m)}})}function p(l,m,O){O.multiple?c(Array.from(l.currentTarget.selectedOptions,ve=>ve.value),m):c(l.currentTarget.selectedOptions[0].value,m)}function S(l,m){return b.jsx(xe,{options:l.options,additionalClasses:l.additionalClasses,disabled:l.disabled,required:l.required,multiple:l.multiple,size:l.size,onSelect:O=>{p(O,m,l)},value:o?o[m]:""})}function y(l,m){return b.jsx(Ve,{connect_with:l.connect_with,required:l.required,disabled:l.disabled,additionalClasses:l.additionalClasses,checked:l.checked,onCheck:O=>{c(O.currentTarget.checked,m)}})}function h(l,m){return b.jsx(Je,{required:l.required,checked:l.checked,disabled:l.disabled,additionalClasses:l.additionalClasses,onCheck:O=>{c(O.currentTarget.checked,m)}})}function w(l,m){return b.jsx(ze,{required:l.required,disabled:l.disabled,additionalClasses:l.additionalClasses,value:l.value,rows:l.rows,cols:l.cols,onInput:O=>{c(O.currentTarget.value,m)}})}function T(l,m){return b.jsx(Ke,{required:l.required,disabled:l.disabled,additionalClasses:l.additionalClasses,multiple:l.multiple,onInput:O=>{l.multiple?c(O.target.files,m):c(O.target.files[0],m)},url:o?o.url:""})}function R(l,m){return b.jsx(We,{options:l.options,additionalClasses:l.additionalClasses,disabled:l.disabled,size:l.size,required:l.required,onSelect:O=>{p(O,m,l)},multiple:l.multiple,initialSearch:l.initialSearch,value:o?o[m]:""})}function D(l,m){return b.jsx(Qe,{value:o?o[m]:"",additionalClasses:l.additionalClasses,onInput:O=>{c(O,m)}})}const k=e.map(l=>{let m;switch(l.type){case N.INPUT:m=d(l.settings,l.name);break;case N.SELECT:m=S(l.settings,l.name);break;case N.CHECKBOX:m=h(l.settings,l.name);break;case N.TEXTAREA:m=w(l.settings,l.name);break;case N.RADIO:m=y(l.settings,l.name);break;case N.FILE:m=T(l.settings,l.name);break;case N.SMART_SELECT:m=R(l.settings,l.name);break;case N.SCHEDULE:m=D(l.settings,l.name);break}return l.type==N.CHECKBOX||l.type==N.RADIO?b.jsxs("div",{className:`${r?"me-3":"mb-3"} form-check`,children:[m,b.jsx("label",{className:"form-check-label",children:l.label})]},l.name):b.jsxs("div",{className:`${r?"me-3":"mb-3"}`,children:[b.jsx("label",{className:"form-label",children:l.label}),m]},l.name)});return b.jsxs("form",{className:`${r?"d-flex":""} ${i}`,children:[k,b.jsx("button",{className:`btn btn-primary ${t} ${r?"my-2":""}`,onClick:l=>{l.preventDefault(),s(u)},"data-bs-dismiss":"modal",children:n||"Submit"})]})}function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ye}=Object.prototype,{getPrototypeOf:ae}=Object,G=(e=>t=>{const n=Ye.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),j=e=>(e=e.toLowerCase(),t=>G(t)===e),K=e=>t=>typeof t===e,{isArray:U}=Array,$=K("undefined");function Ze(e){return e!==null&&!$(e)&&e.constructor!==null&&!$(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Re=j("ArrayBuffer");function et(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Re(e.buffer),t}const tt=K("string"),C=K("function"),Ne=K("number"),W=e=>e!==null&&typeof e=="object",nt=e=>e===!0||e===!1,M=e=>{if(G(e)!=="object")return!1;const t=ae(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},rt=j("Date"),st=j("File"),ot=j("Blob"),it=j("FileList"),at=e=>W(e)&&C(e.pipe),ct=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=G(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},ut=j("URLSearchParams"),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function Ce(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Te=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ge=e=>!$(e)&&e!==Te;function re(){const{caseless:e}=ge(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ce(t,s)||s;M(t[i])&&M(r)?t[i]=re(t[i],r):M(r)?t[i]=re({},r):U(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&q(arguments[r],n);return t}const dt=(e,t,n,{allOwnKeys:r}={})=>(q(t,(s,i)=>{n&&C(s)?e[i]=Oe(s,n):e[i]=s},{allOwnKeys:r}),e),ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),pt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ht=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&ae(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},mt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Ne(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},yt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ae(Uint8Array)),wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Et=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},St=j("HTMLFormElement"),_t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),At=j("RegExp"),Pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};q(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},xt=e=>{Pe(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ot=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Rt=()=>{},Nt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",pe="0123456789",je={DIGIT:pe,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+pe},Ct=(e=16,t=je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tt(e){return!!(e&&C(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const gt=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=U(r)?[]:{};return q(r,(o,u)=>{const f=n(o,s+1);!$(f)&&(i[u]=f)}),t[s]=void 0,i}}return r};return n(e,0)},Pt=j("AsyncFunction"),jt=e=>e&&(W(e)||C(e))&&C(e.then)&&C(e.catch),a={isArray:U,isArrayBuffer:Re,isBuffer:Ze,isFormData:ct,isArrayBufferView:et,isString:tt,isNumber:Ne,isBoolean:nt,isObject:W,isPlainObject:M,isUndefined:$,isDate:rt,isFile:st,isBlob:ot,isRegExp:At,isFunction:C,isStream:at,isURLSearchParams:ut,isTypedArray:yt,isFileList:it,forEach:q,merge:re,extend:dt,trim:lt,stripBOM:ft,inherits:pt,toFlatObject:ht,kindOf:G,kindOfTest:j,endsWith:mt,toArray:bt,forEachEntry:wt,matchAll:Et,isHTMLForm:St,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:Pe,freezeMethods:xt,toObjectSet:Ot,toCamelCase:_t,noop:Rt,toFiniteNumber:Nt,findKey:Ce,global:Te,isContextDefined:ge,ALPHABET:je,generateString:Ct,isSpecCompliantForm:Tt,toJSONObject:gt,isAsyncFn:Pt,isThenable:jt};function E(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Fe=E.prototype,De={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{De[e]={value:e}});Object.defineProperties(E,De);Object.defineProperty(Fe,"isAxiosError",{value:!0});E.from=(e,t,n,r,s,i)=>{const o=Object.create(Fe);return a.toFlatObject(e,o,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),E.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Ft=null;function se(e){return a.isPlainObject(e)||a.isArray(e)}function Le(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(s,i){return s=Le(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Dt(e){return a.isArray(e)&&!e.some(se)}const Lt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,T){return!a.isUndefined(T[w])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!f&&a.isBlob(h))throw new E("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?f&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function d(h,w,T){let R=h;if(h&&!T&&typeof h=="object"){if(a.endsWith(w,"{}"))w=r?w:w.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&Dt(h)||(a.isFileList(h)||a.endsWith(w,"[]"))&&(R=a.toArray(h)))return w=Le(w),R.forEach(function(k,l){!(a.isUndefined(k)||k===null)&&t.append(o===!0?he([w],l,i):o===null?w:w+"[]",c(k))}),!1}return se(h)?!0:(t.append(he(T,w,i),c(h)),!1)}const p=[],S=Object.assign(Lt,{defaultVisitor:d,convertValue:c,isVisitable:se});function y(h,w){if(!a.isUndefined(h)){if(p.indexOf(h)!==-1)throw Error("Circular reference detected in "+w.join("."));p.push(h),a.forEach(h,function(R,D){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(D)?D.trim():D,w,S))===!0&&y(R,w?w.concat(D):[D])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ce(e,t){this._pairs=[],e&&X(e,this,t)}const ke=ce.prototype;ke.append=function(t,n){this._pairs.push([t,n])};ke.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Be(e,t,n){if(!t)return e;const r=n&&n.encode||kt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new ce(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Bt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const be=Bt,Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ut=typeof URLSearchParams<"u"?URLSearchParams:ce,It=typeof FormData<"u"?FormData:null,$t=typeof Blob<"u"?Blob:null,qt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ht=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),g={isBrowser:!0,classes:{URLSearchParams:Ut,FormData:It,Blob:$t},isStandardBrowserEnv:qt,isStandardBrowserWebWorkerEnv:Ht,protocols:["http","https","file","blob","url","data"]};function Mt(e,t){return X(e,new g.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return g.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Jt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ie(e){function t(n,r,s,i){let o=n[i++];const u=Number.isFinite(+o),f=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,f?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Jt(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(vt(r),s,n,0)}),n}return null}const zt={"Content-Type":void 0};function Vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Q={transitional:Ue,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Mt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return X(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Vt(t)):t}],transformResponse:[function(t){const n=this.transitional||Q.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?E.from(u,E.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.classes.FormData,Blob:g.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Q.headers[t]={}});a.forEach(["post","put","patch"],function(t){Q.headers[t]=a.merge(zt)});const ue=Q,Gt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Kt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Gt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function Wt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Xt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Yt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class Y{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,f,c){const d=I(f);if(!d)throw new Error("header name must be a non-empty string");const p=a.findKey(s,d);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||f]=v(u))}const o=(u,f)=>a.forEach(u,(c,d)=>i(c,d,f));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Xt(t)?o(Kt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=I(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Wt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=I(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=I(o),o){const u=a.findKey(r,o);u&&(!n||ee(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||ee(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=v(s),delete n[i];return}const u=t?Qt(i):String(i).trim();u!==i&&delete n[i],n[u]=v(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=I(o);r[u]||(Yt(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}Y.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Y.prototype);a.freezeMethods(Y);const F=Y;function te(e,t){const n=this||ue,r=t||n,s=F.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function $e(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){E.call(this,e??"canceled",E.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(H,E,{__CANCEL__:!0});function Zt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const en=g.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,u){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(i)&&f.push("path="+i),a.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function tn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function nn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qe(e,t){return e&&!tn(t)?nn(e,t):t}const rn=g.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function sn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function on(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),d=r[i];o||(o=c),n[s]=f,r[s]=c;let p=i,S=0;for(;p!==s;)S+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const y=d&&c-d;return y?Math.round(S*1e3/y):void 0}}function we(e,t){let n=0;const r=on(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,f=r(u),c=i<=o;n=i;const d={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:f||void 0,estimated:f&&o&&c?(o-i)/f:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const an=typeof XMLHttpRequest<"u",cn=an&&function(e){return new Promise(function(n,r){let s=e.data;const i=F.from(e.headers).normalize(),o=e.responseType;let u;function f(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(g.isStandardBrowserEnv||g.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+h))}const d=qe(e.baseURL,e.url);c.open(e.method.toUpperCase(),Be(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=F.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Zt(function(R){n(R),f()},function(R){r(R),f()},w),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new E("Request aborted",E.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Ue;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new E(h,w.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,c)),c=null},g.isStandardBrowserEnv){const y=(e.withCredentials||rn(d))&&e.xsrfCookieName&&en.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(h,w){c.setRequestHeader(w,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",we(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",we(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{c&&(r(!y||y.type?new H(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const S=sn(d);if(S&&g.protocols.indexOf(S)===-1){r(new E("Unsupported protocol "+S+":",E.ERR_BAD_REQUEST,e));return}c.send(s||null)})},J={http:Ft,xhr:cn};a.forEach(J,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const un={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?J[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new E(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(J,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:J};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function Ee(e){return ne(e),e.headers=F.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),un.getAdapter(e.adapter||ue.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=F.from(r.headers),r},function(r){return $e(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=F.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof F?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(c,d,p){return a.isPlainObject(c)&&a.isPlainObject(d)?a.merge.call({caseless:p},c,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(c,d,p){if(a.isUndefined(d)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,d,p)}function i(c,d){if(!a.isUndefined(d))return r(void 0,d)}function o(c,d){if(a.isUndefined(d)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function u(c,d,p){if(p in t)return r(c,d);if(p in e)return r(void 0,c)}const f={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(c,d)=>s(Se(c),Se(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=f[d]||s,S=p(e[d],t[d],d);a.isUndefined(S)&&p!==u||(n[d]=S)}),n}const He="1.4.0",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _e={};le.transitional=function(t,n,r){function s(i,o){return"[Axios v"+He+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new E(s(o," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!_e[o]&&(_e[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function ln(e,t,n){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],f=u===void 0||o(u,i,e);if(f!==!0)throw new E("option "+i+" must be "+f,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+i,E.ERR_BAD_OPTION)}}const oe={assertOptions:ln,validators:le},L=oe.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new be,response:new be}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&oe.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:oe.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=F.concat(o,i);const u=[];let f=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(f=f&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let d,p=0,S;if(!f){const h=[Ee.bind(this),void 0];for(h.unshift.apply(h,u),h.push.apply(h,c),S=h.length,d=Promise.resolve(n);p<S;)d=d.then(h[p++],h[p++]);return d}S=u.length;let y=n;for(p=0;p<S;){const h=u[p++],w=u[p++];try{y=h(y)}catch(T){w.call(this,T);break}}try{d=Ee.call(this,y)}catch(h){return Promise.reject(h)}for(p=0,S=c.length;p<S;)d=d.then(c[p++],c[p++]);return d}getUri(t){t=B(this.defaults,t);const n=qe(t.baseURL,t.url);return Be(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(B(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const z=V;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new H(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}const dn=de;function fn(e){return function(n){return e.apply(null,n)}}function pn(e){return a.isObject(e)&&e.isAxiosError===!0}const ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ie).forEach(([e,t])=>{ie[t]=e});const hn=ie;function Me(e){const t=new z(e),n=Oe(z.prototype.request,t);return a.extend(n,z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Me(B(e,s))},n}const x=Me(ue);x.Axios=z;x.CanceledError=H;x.CancelToken=dn;x.isCancel=$e;x.VERSION=He;x.toFormData=X;x.AxiosError=E;x.Cancel=x.CanceledError;x.all=function(t){return Promise.all(t)};x.spread=fn;x.isAxiosError=pn;x.mergeConfig=B;x.AxiosHeaders=F;x.formToJSON=e=>Ie(a.isHTMLForm(e)?new FormData(e):e);x.HttpStatusCode=hn;x.default=x;const A=x;function En({login:e,password:t}){return new Promise(async(n,r)=>{try{const s=await A.post(`${_}/login`,{login:e,password:t});n(s.data.user)}catch(s){r(s)}})}function Sn({teacher_id:e}){return new Promise(async t=>{const n=await A.get(`${_}/get/if/journal_table[id,grade_id[name],subject_id[name]/teacher_id=${e}`);t(n.data.journal_tables.map(r=>({id:r.id,grade:r.grade.name,subject:r.subject.name})))})}function _n({id:e}){return new Promise(async t=>{const n=await A.get(`${_}/get/if/journal_table[id,(lesson[id,theme_id[name],date_val,(mark[id,student_id,mark_value,lesson_id])),grade_id[id,name,(grade_student[student_id[*]])]]/id=${e}`),r=n.data.journal_tables[0].lessons,s=n.data.journal_tables[0].grade.grade_students.map(i=>i.student);t({lessons:r,grade:s})})}function An({mark:e}){return new Promise(async t=>{if(e.mark_value==="")e.id?await A.post(`${_}/drop/mark`,{id:e.id}):await A.post(`${_}/drop/mark`,{student_id:e.student_id,lesson_id:e.lesson_id}),t({student_id:e.student_id,lesson_id:e.lesson_id,mark_value:e.mark_value});else{const n=await A.post(`${_}/post/mark`,{...e});t({id:n.data,student_id:e.student_id,lesson_id:e.lesson_id,mark_value:e.mark_value})}})}function xn(){return new Promise(async e=>{const t=await A.get(`${_}/get/all/user`);e(t.data.users)})}function On(e){return new Promise(async()=>{await A.post(`${_}/drop/user`,{id:e})})}function Rn(e){return new Promise(async t=>{await A.post(`${_}/post/user`,e),t(e)})}function Nn(e){return new Promise(async()=>{const t={file:e,filename:e.name,index:"data"};await A.post(`${_}/upload/user`,t,{headers:{"Content-Type":"multipart/form-data"}})})}function Cn(){return new Promise(async e=>{const t=await A.get(`${_}/get/all/plan`);e(t.data.plans)})}function Tn(e){return new Promise(async()=>{await A.post(`${_}/drop/plan`,{id:e})})}function gn(){return new Promise(async e=>{const t=await A.get(`${_}/get/all/subject`);e(t.data.subjects)})}function Pn(e){return new Promise(async t=>{let n={name:e.name,subject_id:Number(e.subject_id)},r={};e.file&&(n.file=e.file,n.filename=e.file.name,n.index="data",r.headers={"Content-Type":"multipart/form-data"}),e.id&&(n.id=e.id),console.log(n),await A.post(`${_}/post/plan`,n,r),t()})}function jn(){return new Promise(async e=>{let n=(await A.get(`${_}/get/all/grade[*,(grade_student)]`)).data.grades.map(r=>(r.student=r.grade_students.map(s=>s.student_id),delete r.grade_students,r));e(n)})}function Fn(e){return new Promise(async t=>{e.student&&(e.many_to_many="replace",e.student=e.student.map(n=>Number(n))),e.is_group=!1,e.head_id=Number(e.head_id),console.log(e),await A.post(`${_}/post/grade`,e),t()})}function Dn(e){return new Promise(async()=>{await A.post(`${_}/drop/grade`,{id:e})})}function Ln(){return new Promise(async e=>{const t=await A.get(`${_}/get/all/journal_table`);e(t.data.journal_tables)})}function kn(e){return e.grade_id=Number(e.grade_id),e.head_id=Number(e.head_id),e.subject_id=Number(e.subject_id),e.teacher_id=Number(e.teacher_id),e.plan_id=Number(e.plan_id),e.methodist_id=Number(e.methodist_id),new Promise(async t=>{await A.post(`${_}/post/journal_table`,e),t()})}function Bn(e){return new Promise(async t=>{await A.post(`${_}/drop/journal_table`,{id:e}),t()})}function Un(e){return new Promise(async t=>{await A.post(`${_}/post/subject`,e),t()})}function In(e){return new Promise(async t=>{await A.post(`${_}/drop/subject`,{id:e}),t()})}function $n(e){return new Promise(async t=>{const n=await A.get(`${_}/print_journal/${e.join(",")}`);t(`https://kusmirror.ru/${n.data}`)})}export{En as A,Ae as B,Pn as C,On as D,N as E,wn as F,_n as G,bn as M,$n as P,An as S,Sn as a,xn as b,Nn as c,yn as d,Rn as e,Cn as f,gn as g,Tn as h,jn as i,Fn as j,Dn as k,Ln as l,Bn as m,kn as n,In as o,Un as p};