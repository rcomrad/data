import{r as u,j as n}from"./index-36003393.js";import{M as b}from"./Modal-501fdc1f.js";import{M as j}from"./ModalButton-00fcf1f3.js";import{F as p}from"./Form-3d54bc60.js";import{E as f}from"./config-16fea0ec.js";import{f as i,m as S,n as x}from"./utils-84ccb15d.js";import{T as h}from"./Table-89f65705.js";import{b as E}from"./bootstrap.bundle.min-e26b4c14.js";import"./Grow-7fbf58ee.js";function A(){const[m,r]=u.useState([]),[a,c]=u.useState({});u.useEffect(()=>{i().then(t=>{r(t)})},[]);function l(t){a.id&&(t.id=a.id),x(t).then(()=>{i().then(e=>{r(e)})})}function d(t,e){r(e?[...m.sort((s,o)=>s[t]>o[t]?1:s[t]<o[t]?-1:0)]:[...m.sort((s,o)=>s[t]<o[t]?1:s[t]>o[t]?-1:0)])}return n.jsxs(n.Fragment,{children:[n.jsx(b,{title:"Предмет",connected_with:"subject_modal",children:n.jsx(p,{elements:[{name:"name",label:"Название",type:f.INPUT,settings:{}}],onSubmit:l,instance:a})}),n.jsx(j,{connected_with:"subject_modal",button_text:"Создать предмет",additionalClasses:"m-3",preOpen:()=>{c({})}}),n.jsx(h,{elements:m,table_fields:[{label:"Название",name:"name"}],onEdit:t=>{c(t),new E.Modal(document.getElementById("subject_modal"),{}).show()},Sort:d,NeedEdit:!0,NeedDelete:!0,onDelete:t=>{S(t).then(()=>{i().then(e=>{r(e)})})}})]})}export{A as default};