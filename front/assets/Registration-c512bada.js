import{u as l,j as e,L as m,a as i}from"./index-894b7408.js";import{C as p}from"./Card-fcb83c87.js";import{F as c}from"./Form-a537c889.js";import{E as t}from"./config-d7ec2646.js";import{R as d}from"./utils-a5d98db5.js";import{u as g}from"./useDispatch-1e370c23.js";import"./Grow-171eff3a.js";import"./axios-4a70c6fc.js";import"./utils-89423bbb.js";function T(){const o=l();function r(a){if(a.password!==a.password2){s(i({type:"danger",text:"Пароли не совпадают"}));return}d(a).then(()=>{s(i({type:"success",text:"Регистрация прошла успешно. Проверьте почту"})),o("/login")}).catch(n=>{console.log(n),s(i({type:"danger",text:n.response.status===409?n.response.data:"Произошла ошибка"}))})}const s=g();return e.jsx("div",{className:"full-height container",children:e.jsx("div",{className:"row h-100 justify-content-center align-items-center",children:e.jsx("div",{className:"col-lg-4",children:e.jsxs(p,{children:[e.jsx("h3",{children:"Регистрация"}),e.jsx(c,{elements:[{label:"Логин",name:"login",type:t.INPUT,settings:{}},{label:"Пароль",name:"password",type:t.INPUT,settings:{type:"password"}},{label:"Повторите пароль",name:"password2",type:t.INPUT,settings:{type:"password"}},{label:"Электропочта",name:"email",type:t.INPUT,settings:{type:"email"}},{label:"Дополнительный код (необязательно)",name:"key",type:t.INPUT,settings:{}}],onSubmit:r,buttonText:"Зарегистрироваться"}),e.jsxs("p",{className:"text-secondary m-0 mt-3",children:["Уже есть аккаунт? ",e.jsx(m,{to:"/login",children:"Войти"})]})]})})})})}export{T as default};
