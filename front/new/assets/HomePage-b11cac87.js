import{G as t,j as e}from"./index-648ea929.js";import{H as r}from"./HomePageLinkCard-61106e5f.js";import"./Card-0cfb9c76.js";function i(){const s=t();return e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row justify-content-center align-items-center full-height",children:[s.role.includes("teacher")?e.jsxs(e.Fragment,{children:[e.jsx(r,{header:"Журнал",to:"/journal"}),e.jsx(r,{header:"Администрирование",to:"/admin"})]}):null,s.role.includes("submitor")?e.jsx(e.Fragment,{children:e.jsx(r,{header:"Список соревнований",to:"/contest"})}):null]})})}export{i as default};