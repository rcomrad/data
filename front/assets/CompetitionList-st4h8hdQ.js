import{j as t,C as a,a as o,r as n}from"./index--C9Zf2yg.js";import{a as c}from"./competition-FRa9cu2U.js";import{G as m}from"./users-My4gugrs.js";import"./config-ZEIqkGks.js";function d({competition:e}){return t.jsx(a,{colSize:4,children:t.jsxs("div",{className:"d-flex justify-content-center flex-column",children:[t.jsx("div",{className:"text-center fs-3",children:e.name}),t.jsx("div",{className:"text-center mb-5 text-secondary fs-6",children:`С ${e.start_time} до ${e.end_time}`}),t.jsx(o,{className:"btn btn-primary",to:`/competition/${e.id}`,children:"Участвовать"})]})})}function p(){const[e,r]=n.useState([]),i=m()??{};return n.useEffect(()=>{c(i.id??-1).then(s=>{r(s)})},[i.id]),t.jsx("div",{className:"container",children:t.jsx("div",{className:"row justify-content-center align-items-center full-height",children:e.map(s=>t.jsx(d,{competition:s},s.id))})})}export{p as default};
