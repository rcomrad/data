import{r,j as c}from"./index-e904d17d.js";function g({elements:i,table_fields:e,onDelete:j,additional_classes:p,onEdit:k,NeedDelete:u,NeedEdit:h,Sort:x}){const[l,y]=r.useState(e),[s,a]=r.useState({});r.useEffect(()=>{let n={};e.forEach(t=>{t.sortDown=!1,t.checkbox&&(n[t.name]=[])}),a(n),y(e)},[]);const w=l.map(n=>c.jsx("th",{style:n.width?{width:`${n.width}%`}:{},children:n.checkbox?c.jsx("button",{className:`btn btn-${n.checkbox.btn_type?n.checkbox.btn_type:"success"} btn-sm`,onClick:()=>{var t;(t=n.checkbox)==null||t.onButtonClick(s[n.name])},children:n.label}):c.jsx("a",{className:"text-decoration-none text-dark",href:"#",onClick:t=>{t.preventDefault(),n.sortDown=!n.sortDown,x&&x(n.name,n.sortDown)},children:n.label})},n.name)),[o,m]=r.useState([]);function C(n,t){return t.valueProcessing?t.valueProcessing(n[t.name]):n[t.name]?n[t.name]:""}const N=i.map(n=>c.jsxs("tr",{children:[e.map(t=>t.checkbox?c.jsx("td",{children:c.jsx("input",{type:"checkbox",className:"form-check-input",onInput:b=>{b.currentTarget.checked?a({...s,[t.name]:[...s[t.name],n.id]}):a({...s,[t.name]:s[t.name].filter(d=>d!==n.id)})}})},t.name):t.button?c.jsx("td",{children:c.jsxs("button",{className:`btn ${t.button.type?t.button.type:"btn-primary"} btn-sm`,onClick:()=>{t.button&&t.button.onClick(n[t.name])},children:[t.button.icon?c.jsx("i",{className:`bi ${t.button.icon}`}):null,t.button.text]})},t.name):c.jsx("td",{children:C(n,t)},t.name)),h?c.jsx("td",{children:c.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>{k(n)},children:c.jsx("i",{className:"bi bi-pencil"})})}):null,u?c.jsx("td",{children:c.jsx("input",{type:"checkbox",className:"form-check-input",onInput:t=>{t.currentTarget.checked?m([...o,n.id]):m(o.filter(b=>b!==n.id))}})}):null]},n.id));return c.jsxs("table",{className:`table table-striped text-center ${p}`,children:[c.jsx("thead",{children:c.jsxs("tr",{children:[w,h?c.jsx("th",{children:"Изменить"}):null,u?c.jsx("th",{children:c.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>{j(o)},children:"Удалить"})}):null]})}),c.jsx("tbody",{children:N})]})}export{g as T};
