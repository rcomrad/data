import{r as i,j as r}from"./index-e904d17d.js";import{e as f,f as S,g as _,C as g}from"./utils-15360d70.js";import{T as y}from"./Table-9bc44cbb.js";import{M as F,a as w}from"./Modal-3bd2ba55.js";import{F as B,E as d}from"./Form-832b389a.js";import{b as C}from"./bootstrap.bundle.min-52cf60f7.js";import"./axios-4a70c6fc.js";import"./config-67b08cc3.js";import"./utils-978ca1b9.js";import"./Grow-17ce2bf5.js";function L(){const[l,a]=i.useState([]),[u,b]=i.useState([]),[m,c]=i.useState({});i.useEffect(()=>{f().then(e=>{a(e)}),S().then(e=>{b(e)})},[]);function j(e){var n;const t=(n=u.find(s=>s.id===e))==null?void 0:n.name;return t||"Неизвестный предмет"}function x(e){a(l.filter(t=>t.id?!e.includes(t.id):!0)),_(e)}function E(e){m.id&&(e.id=m.id),g(e).then(()=>{f().then(t=>{a(t)})})}function P(e){c(e),new C.Modal(document.getElementById("plan_modal"),{}).show()}function o(e,t){var n;return t!="subject_id"?e[t]:(n=u.find(s=>s.id===e.subject_id))==null?void 0:n.name}function h(e,t){const n=l.sort((s,p)=>o(s,e)>o(p,e)?t?1:-1:o(s,e)<o(p,e)?t?-1:1:0);a([...n])}return r.jsxs(r.Fragment,{children:[r.jsx(F,{connected_with:"plan_modal",title:"План",children:r.jsx(B,{elements:[{label:"Название",name:"name",type:d.INPUT,settings:{required:!0}},{label:"Предмет",name:"subject_id",type:d.COMBOBOX,settings:{options:u.map(e=>({id:e.id,label:e.name}))}},{label:"Файл",name:"file",type:d.FILE,settings:{required:!0}}],instance:m,onSubmit:E})}),r.jsx(w,{connected_with:"plan_modal",button_text:"Добавить план",additionalClasses:"m-3",preOpen:()=>c({})}),r.jsx(y,{elements:l,table_fields:[{label:"Название",name:"name"},{label:"Предмет",name:"subject_id",valueProcessing:j}],NeedDelete:!0,NeedEdit:!0,onDelete:x,onEdit:P,Sort:h})]})}export{L as default};
