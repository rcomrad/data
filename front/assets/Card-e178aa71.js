import{R as o,d as i,e as l,f as d,s as x,r as f,g as c,h as p,j as a}from"./index-1325a463.js";function u(e=o){const t=e===o?i:l(e);return function(){const{store:s}=t();return s}}const h=u();function m(e=o){const t=e===o?h:u(e);return function(){return t().dispatch}}const j=m();function b(){const e=d(x),t=j();f.useEffect(()=>{e.map(s=>{s.constant||(s.need_to_delete?t(c(s)):t(p(s)))})},[]);function r(){const s=[];for(let n=0;n<e.length;n++)s.push(a.jsxs("div",{className:`d-flex justify-content-between alert alert-${e[n].type?e[n].type:"primary"}`,children:[a.jsxs("div",{children:[e[n].constant?a.jsx("i",{className:"bi bi-pin-angle-fill me-3"}):null,e[n].text]}),a.jsx("div",{children:e[n].constant?a.jsx("button",{type:"button",className:"btn-close",onClick:()=>{t(c(e[n]))}}):null})]},n));return s}return a.jsx(a.Fragment,{children:r()})}function C({children:e,additionalClasses:t}){return a.jsx("div",{className:`card ${t}`,children:a.jsx("div",{className:"card-body",children:e})})}export{C,b as M,j as u};
