import{u as l,j as e,L as m,b as i}from"./index-d7b616ef.js";import{C as p}from"./Card-3f953c11.js";import{F as c}from"./Form-8d86b9e5.js";import{E as s}from"./config-16fea0ec.js";import{R as d}from"./utils-efc83923.js";import{u as g}from"./useDispatch-6200ca8e.js";import"./Grow-920096fd.js";function b(){const o=l();function r(a){if(a.password!==a.password2){t(i({type:"danger",text:"Пароли не совпадают"}));return}d(a).then(()=>{t(i({type:"success",text:"Регистрация прошла успешно. Проверьте почту"})),o("/login")}).catch(n=>{console.log(n),t(i({type:"danger",text:n.response.status===409?n.response.data:"Произошла ошибка"}))})}const t=g();return e.jsx("div",{className:"full-height container",children:e.jsx("div",{className:"row h-100 justify-content-center align-items-center",children:e.jsx("div",{className:"col-lg-4",children:e.jsxs(p,{children:[e.jsx("h3",{children:"Регистрация"}),e.jsx(c,{elements:[{label:"Логин",name:"login",type:s.INPUT,settings:{}},{label:"Пароль",name:"password",type:s.INPUT,settings:{type:"password"}},{label:"Повторите пароль",name:"password2",type:s.INPUT,settings:{type:"password"}},{label:"Электропочта",name:"email",type:s.INPUT,settings:{type:"email"}},{label:"Дополнительный код (необязательно)",name:"key",type:s.INPUT,settings:{}}],onSubmit:r,buttonText:"Зарегистрироваться"}),e.jsxs("p",{className:"text-secondary m-0 mt-3",children:["Уже есть аккаунт? ",e.jsx(m,{to:"/login",children:"Войти"})]})]})})})})}export{b as default};