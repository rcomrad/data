import{j as t,b as h,r as c}from"./index-y6thpFE1.js";import{A as u}from"./config-ZEIqkGks.js";import{G as x}from"./competition-FRa9cu2U.js";import{O as j}from"./pashs-form-generator-EalgrOvb.js";import{G as v}from"./users-My4gugrs.js";async function g(e){return(await(await fetch(`${u}/get/if/competition_question/competition_id=${e}`)).json()).competition_questions}async function w(e,s){const o=await(await fetch(`${u}/get_question/${s}/${e}`)).json();return console.log("By Id",o),o.question}async function y(e,s,n){console.log(e,s,n);const o=await fetch(`${u}/post/answer`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e,question_id:s,value:n})});console.log(await o.json())}function b(e){return t.jsx("div",{className:"mt-4",style:{maxHeight:"50vh",overflowY:"scroll"},children:t.jsx("ul",{className:"list-group",children:e.shortQuestions.map(s=>t.jsx("a",{className:`list-group-item list-group-item-action ${s.question_id==e.activeQuestionId?"active":""}`,role:"button",onClick:()=>{var n;return(n=e.onQuestionClick)==null?void 0:n.call(e,s.question_id)},children:s.name},s.question_id))})})}function N(e){return t.jsx(t.Fragment,{children:e.question.id!=-1?t.jsxs("div",{className:"d-flex flex-column h-100 justify-content-between",children:[t.jsx("div",{className:"fs-3 pb-4 border-bottom ",children:e.question.name}),t.jsx("div",{style:{maxHeight:"50vh",overflowY:"scroll"},children:t.jsx("div",{className:"fs-5",dangerouslySetInnerHTML:{__html:e.question.legend}})}),t.jsxs("div",{className:"fs-5 pt-1 border-top",children:[e.question.answer?t.jsxs("div",{className:"text-secondary fs-6",children:['Ответ "',e.question.answer,'" сохранен']}):null,t.jsx(j,{elements:[{type:"input",name:"answer",label:"",required:!0,defaultValue:e.question.answer??"",properties:{}}],buttonText:"Отправить",defaultInvalidText:"Поле обязательно для заполнения",onButtonClick:s=>{var n;(n=e.onAnswer)==null||n.call(e,s.answer)}})]})]}):t.jsx("div",{className:"d-flex flex-column h-100 justify-content-center align-items-center",children:t.jsx("h1",{children:"Выберите вопрос из списка слева"})})})}function A(){const e=h(),s=v()??{},[n,o]=c.useState([]),[m,f]=c.useState({}),[a,d]=c.useState(-1),[r,l]=c.useState({});return c.useEffect(()=>{g(parseInt(e.id??"-1")).then(i=>{o(i),i.length>0&&d(-1)}),x(parseInt(e.id??"-1")).then(i=>{f(i??{})})},[]),c.useEffect(()=>{a!=-1?w(s.id,a).then(i=>{l(i)}):l({id:-1})},[a]),t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"row p-4 full-height",children:[t.jsxs("div",{className:"col-2 pe-4 border-end",children:[t.jsx("div",{className:"fs-3 pb-4 border-bottom ",children:m.name}),t.jsx(b,{shortQuestions:n,activeQuestionId:a,onQuestionClick:i=>d(i)})]}),t.jsx("div",{className:"col-10",children:t.jsx(N,{question:r,onAnswer:i=>{l({...r,answer:"..."}),y(s.id,a,i).then(()=>{l({...r,answer:i})})}},a)})]})})}export{A as default};
