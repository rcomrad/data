import{u as j,j as e,a as N,f as b,r as d}from"./index-e904d17d.js";import{p as v,q as w,r as g}from"./utils-15360d70.js";import{u as y}from"./useDispatch-54402883.js";import{F as q,E as C}from"./Form-832b389a.js";import"./axios-4a70c6fc.js";import"./config-67b08cc3.js";import"./utils-978ca1b9.js";import"./Grow-17ce2bf5.js";function E({contest:r,setCurrentQuestion:n,currentQuestion:o}){var i;const s=y(),m=j();return e.jsxs("div",{className:"d-flex flex-column h-100",children:[e.jsx("div",{className:"py-3 fs-3 fw-bold border-bottom",children:r.name}),e.jsx("div",{className:"py-3 flex-grow-1 overflow-auto border-bottom",children:e.jsx("ul",{className:"list-group",children:(i=r.questions)==null?void 0:i.map((a,t)=>e.jsx("li",{className:`list-group-item ${a.id==o?"active":""}`,children:e.jsx("a",{className:`text-decoration-none ${a.id==o?"text-white":"text-dark"}`,href:"#",onClick:()=>{n(a.id)},children:a.name})},t))})}),e.jsx("div",{className:"my-4",children:e.jsx("button",{className:"btn btn-primary",onClick:()=>{s(N({type:"success",text:"Вы успешно вышли из соревнования"})),m("/")},children:"Закончить соревнование"})})]})}function _(){const r=b(),[n,o]=d.useState({}),[s,m]=d.useState(-1);d.useEffect(()=>{v(r.contest_id).then(t=>{o(t)})},[]);function i(){var t;return(t=n.questions)==null?void 0:t.find(l=>l.id==s)}function a(t=!1){var l;!s||s==-1||(l=n.questions)!=null&&l.find(c=>c.id==s).legend&&!t||g(s).then(c=>{var x,f,h;const u=(x=n.questions)==null?void 0:x.findIndex(p=>p.id==s);console.log(c),o({...n,questions:[...(f=n.questions)==null?void 0:f.slice(0,u),c,...(h=n.questions)==null?void 0:h.slice(u+1)]})})}return d.useEffect(()=>{a()},[s]),e.jsxs("div",{className:"row h-100",style:{maxWidth:"100%"},children:[e.jsx("div",{className:"col-2 border-end h-100 text-center",children:e.jsx(E,{contest:n,currentQuestion:s,setCurrentQuestion:m})}),e.jsx("div",{className:"col-10 h-100 overflow-auto",children:s==-1?e.jsxs("div",{className:"h-100 d-flex justify-content-center align-items-center",children:[e.jsx("i",{className:"bi bi-arrow-left fs-1 me-2"}),e.jsx("h3",{className:"m-0",children:"Выберете задание из списка слева"})]}):e.jsxs("div",{className:"d-flex flex-column h-100",children:[e.jsx("h3",{className:"p-3 fw-bold border-bottom",children:i().name}),e.jsx("div",{className:"p-3 flex-grow-1 border-bottom",dangerouslySetInnerHTML:{__html:i().legend}}),e.jsx("div",{className:"my-4",children:e.jsx("div",{className:"col-4",children:e.jsx(q,{elements:[{label:"Ответ",type:C.INPUT,name:"answer",settings:{}}],onSubmit:t=>{w(s,t.answer).then(()=>{a(!0)})},instance:{answer:i().answer?i().answer:null}})})})]})})]})}export{_ as default};
