import{r as n,j as e,C as o}from"./index-b1GaKYbE.js";import{O as a,L as l}from"./common-0f55-XKe.js";import{A as d}from"./Alert-J3v2tVLm.js";import"./config-OtuK27fz.js";function x(){const[s,i]=n.useState(!1);return e.jsx("div",{className:"full-height d-flex justify-content-center align-items-center",children:e.jsxs(o,{children:[s?e.jsx(d,{type:"danger",text:"Неправильный логин или пароль"}):null,e.jsx(a,{title:"Вход",buttonText:"Войти",defaultInvalidText:"Это поле обязательно для заполнения",elements:[{label:"Логин",name:"login",type:"input",required:!0,properties:{}},{label:"Пароль",name:"password",type:"input",required:!0,properties:{type:"password"}}],onButtonClick:t=>{l(t.login,t.password).then(r=>{r.isGood?(localStorage.setItem("user",JSON.stringify(r.value)),window.location.href="/"):i(!0)})}}),e.jsxs("p",{className:"text-secondary mt-3",children:["Нет аккаунта? ",e.jsx("a",{className:"link-secondary",href:"/registration",children:"Зарегистрироваться"})]})]})})}export{x as default};
