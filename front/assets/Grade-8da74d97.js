import{r as i,j as r}from"./index-2931db17.js";import{i as p,b as S,F as j,E as c,j as T,k as $}from"./utils-26674dc9.js";import{T as w}from"./Table-b6de09e7.js";import{M as F,a as M,b as y}from"./Modal-be4b3969.js";function D(){const[l,a]=i.useState([]),[o,h]=i.useState([]),[m,f]=i.useState({});i.useEffect(()=>{p().then(t=>{a(t)}),S().then(t=>{h(t)})},[]);function g(){return o.filter(e=>!e.role.includes("student")).map(e=>({value:e.id,text:`${e.surname} ${e.name[0]}.`}))}function _(){return o.filter(e=>e.role.includes("student")).map(e=>({value:e.id,text:`${e.surname} ${e.name[0]}.`}))}function b(t){m.id&&(t.id=m.id),T(t).then(()=>{p().then(e=>{console.log(e),a(e)})})}function x(t){a(l.filter(e=>!t.includes(e.id))),$(t)}function E(t){f(t),new y.Modal(document.getElementById("grade_modal"),{}).show()}function d(t,e){var s;switch(e){case"head_id":let n=o.find(u=>u.id===t.head_id);return`${n==null?void 0:n.surname} ${n==null?void 0:n.name[0]}.`;case"student":return(s=t.student)==null?void 0:s.length;default:return t[e]}}function G(t,e){const s=l.sort((n,u)=>d(n,t)>d(u,t)?e?1:-1:d(n,t)<d(u,t)?e?-1:1:0);a([...s])}return r.jsxs(r.Fragment,{children:[r.jsx(F,{title:"Класс",connected_with:"grade_modal",children:r.jsx(j,{elements:[{name:"name",label:"Имя",type:c.INPUT,settings:{}},{name:"head_id",label:"Руководитель",type:c.SMART_SELECT,settings:{options:g()}},{name:"student",label:"Ученики",type:c.SMART_SELECT,settings:{options:_(),multiple:!0,size:10}}],instance:m,onSubmit:b})}),r.jsx(M,{connected_with:"grade_modal",button_text:"Создание класса",additionalClasses:"m-3",preOpen:()=>{f({})}}),r.jsx(w,{elements:l,table_fields:[{label:"Имя",name:"name"},{label:"Руководитель",name:"head_id",valueProcessing:t=>{let e=o.find(s=>s.id===t);if(e)return`${e.surname} ${e.name[0]}.`}},{label:"Количество учащихся",name:"student",valueProcessing:t=>t.length}],NeedDelete:!0,NeedEdit:!0,Sort:G,onDelete:x,onEdit:E})]})}export{D as default};
