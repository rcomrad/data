import{r as n,j as s,d as c}from"./index-50c8aee8.js";import{a as p,F as d,E as a}from"./utils-bafe39db.js";import{G as g}from"./utils-346fb4c0.js";function S({GetJournal:o}){const[r,u]=n.useState([]),i=g();n.useEffect(()=>{p({teacher_id:i.id}).then(t=>{u(t)})},[]);function m(t){return t.map(e=>({text:e.grade.toString(),value:e.grade.toString()}))}function l(t){return t.map(e=>({text:e.subject,value:e.subject}))}return s.jsx(s.Fragment,{children:r.length>0?s.jsx(d,{additionalClasses:"mt-3",elements:[{type:a.SMART_SELECT,name:"grade",label:"Класс",settings:{options:[...m(r)]}},{type:a.SMART_SELECT,name:"subject",label:"Предмет",settings:{options:[...l(r)]}}],onSubmit:t=>{o(r.filter(e=>e.grade===t.grade&&e.subject===t.subject))},buttonText:"Открыть журнал"}):s.jsx(c,{})})}export{S as J};