import{u as c,j as e,a as l,b as m}from"./index-2931db17.js";import{C as d}from"./Card-f200e4aa.js";import{F as u,E as a,A as g}from"./utils-26674dc9.js";import{u as h,M as p}from"./MessageBlock-72cf53d8.js";function N(){const n=c(),t=h();function i({login:s,password:r}){g({login:s,password:r}).then(o=>{localStorage.setItem("user",JSON.stringify(o)),t(l({type:"success",text:"Авторизация прошла успешно"})),n("/")}).catch(()=>{t(m({type:"danger",text:"Неправильный логин или пароль"}))})}return e.jsx("div",{className:"full-height container",children:e.jsx("div",{className:"row h-100 justify-content-center align-items-center",children:e.jsx("div",{className:"col-lg-4",children:e.jsxs(d,{children:[e.jsx("h3",{children:"Авторизация"}),e.jsx(p,{}),e.jsx(u,{elements:[{label:"Логин",name:"login",type:a.INPUT,settings:{}},{label:"Пароль",name:"password",type:a.INPUT,settings:{}}],onSubmit:s=>{i(s)},buttonText:"Войти"})]})})})})}export{N as default};
