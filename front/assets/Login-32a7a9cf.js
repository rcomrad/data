import{u as c,j as e,a as l,b as m}from"./index-1325a463.js";import{u as d,C as u,M as g}from"./Card-e178aa71.js";import{F as h,E as a}from"./Form-d1d8f94e.js";import{A as p}from"./utils-b1014e2c.js";function N(){const n=c(),t=d();function i({login:s,password:r}){p({login:s,password:r}).then(o=>{localStorage.setItem("user",JSON.stringify(o)),t(l({type:"success",text:"Авторизация прошла успешно"})),n("/")}).catch(()=>{t(m({type:"danger",text:"Неправильный логин или пароль"}))})}return e.jsx("div",{className:"full-height container",children:e.jsx("div",{className:"row h-100 justify-content-center align-items-center",children:e.jsx("div",{className:"col-lg-4",children:e.jsxs(u,{children:[e.jsx("h3",{children:"Авторизация"}),e.jsx(g,{}),e.jsx(h,{elements:[{label:"Логин",name:"login",type:a.INPUT,settings:{}},{label:"Пароль",name:"password",type:a.INPUT,settings:{}}],onSubmit:s=>{i(s)},buttonText:"Войти"})]})})})})}export{N as default};
