import{r as l,j as r}from"./index-648ea929.js";import{h as p,b as S,i as O,j}from"./utils-e98f4032.js";import{T as $}from"./Table-a7f3a1cb.js";import{M}from"./Modal-e56f6ae2.js";import{M as w}from"./ModalButton-19d58689.js";import{F}from"./Form-4cab7a04.js";import{E as c}from"./config-a5b38a07.js";import{b as T}from"./bootstrap.bundle.min-8af756cc.js";import"./Grow-c1eb770b.js";function I(){const[u,a]=l.useState([]),[o,h]=l.useState([]),[m,f]=l.useState({});l.useEffect(()=>{p().then(t=>{a(t)}),S().then(t=>{h(t)})},[]);function b(){return o.filter(e=>!e.role.includes("student")).map(e=>({id:e.id,label:`${e.surname} ${e.name[0]}.`}))}function g(){return o.filter(e=>e.role.includes("student")).map(e=>({value:e.id,text:`${e.surname} ${e.name[0]}.`}))}function G(t){m.id&&(t.id=m.id),O(t).then(()=>{p().then(e=>{console.log(e),a(e)})})}function x(t){a(u.filter(e=>!t.includes(e.id))),j(t)}function E(t){f(t),new T.Modal(document.getElementById("grade_modal"),{}).show()}function d(t,e){var s;switch(e){case"head_id":let n=o.find(i=>i.id===t.head_id);return`${n==null?void 0:n.surname} ${n==null?void 0:n.name[0]}.`;case"student":return(s=t.student)==null?void 0:s.length;default:return t[e]}}function _(t,e){const s=u.sort((n,i)=>d(n,t)>d(i,t)?e?1:-1:d(n,t)<d(i,t)?e?-1:1:0);a([...s])}return r.jsxs(r.Fragment,{children:[r.jsx(M,{title:"Класс",connected_with:"grade_modal",children:r.jsx(F,{elements:[{name:"name",label:"Имя",type:c.INPUT,settings:{}},{name:"head_id",label:"Руководитель",type:c.COMBOBOX,settings:{options:b()}},{name:"student",label:"Ученики",type:c.SMART_SELECT,settings:{options:g(),multiple:!0,size:10}}],instance:m,onSubmit:G})}),r.jsx(w,{connected_with:"grade_modal",button_text:"Создание класса",additionalClasses:"m-3",preOpen:()=>{f({})}}),r.jsx($,{elements:u,table_fields:[{label:"Имя",name:"name"},{label:"Руководитель",name:"head_id",valueProcessing:t=>{let e=o.find(s=>s.id===t);if(e)return`${e.surname} ${e.name[0]}.`}},{label:"Количество учащихся",name:"student",valueProcessing:t=>t.length}],NeedDelete:!0,NeedEdit:!0,Sort:_,onDelete:x,onEdit:E})]})}export{I as default};
