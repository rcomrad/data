import{j as e,i as f,r as j,c as p}from"./index-1325a463.js";import{B as k,a as b,S as g}from"./utils-b1014e2c.js";function v({lessons:o}){return e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"15%"}}),o.map(r=>e.jsx("th",{className:"text-center",children:r.date_val},r.id))]})})}function _({grade:o,lessons:r,onMarkChange:l}){function c(s,t){const a=s.marks.find(d=>d.student_id===t.id);return a?a.mark_value:""}return e.jsx("tbody",{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[s.surname," ",s.name[0],"."]}),r.map(t=>e.jsx("td",{children:e.jsx(k,{additionalClasses:"text-center invisible-input border-0",onInput:a=>{l(s.id,t.id,a.currentTarget.value)},value:c(t,s)})},t.id))]},s.id))})}function J(){const o=f(),[r,l]=j.useState([]),[c,s]=j.useState([]);j.useEffect(()=>{b({id:Number(o.journal_id)}).then(a=>{l(a.lessons),s(a.grade.sort((d,u)=>d.surname.localeCompare(u.surname)))})},[]);function t(a,d,u){const n=r,i=n.findIndex(h=>h.id===d),m=n[i].marks.findIndex(h=>h.student_id===a);let x;m===-1?(n[i].marks.push({student_id:a,mark_value:u,lesson_id:d}),x=n[i].marks[n[i].marks.length-1]):(n[i].marks[m].mark_value=u,x=n[i].marks[m]),g({mark:x}).then(()=>{}),l(n)}return e.jsx("div",{className:"full-height",children:r.length>0?e.jsxs("table",{className:"table table-striped table-bordered",children:[e.jsx(v,{lessons:r}),e.jsx(_,{grade:c,lessons:r,onMarkChange:t})]}):e.jsx(p,{})})}export{J as default};