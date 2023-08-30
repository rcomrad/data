import{r as u,j as t}from"./index-50c8aee8.js";import{T as y}from"./Table-85f89527.js";import{b as x,F as b,E as n,c as M,d as a,D as N,e as I}from"./utils-bafe39db.js";import{M as C}from"./MessageBlock-96fe4be3.js";import{M as g,a as _,b as F}from"./Modal-3506476a.js";import{G as q}from"./utils-346fb4c0.js";import{P as f}from"./Paginator-1f3b96ab.js";function k(){const[r,o]=u.useState([]),[i,m]=u.useState({}),h=q(),[l,d]=u.useState(0);u.useEffect(()=>{x().then(e=>{o(e)})},[]);function E(e){switch(e){case"admin":return"Администратор";case"teacher":return"Преподаватель";case"student":return"Студент";case"submitor":return"Участник соревнований";default:return e}}function U(e){o(r.filter(s=>!e.includes(s.id))),N(e)}function j(e){e.school_id=h.school_id,i.id&&(e.id=i.id),I(e).then(()=>{x().then(s=>{o(s)})})}function T(e){m(e),new F.Modal(document.getElementById("user_modal"),{}).show()}function w(e,s){const S=r.sort((c,p)=>c[e]>p[e]?s?1:-1:c[e]<p[e]?s?-1:1:0);o([...S])}function P(){return r.slice(l*a,l*a+a)}return t.jsxs(t.Fragment,{children:[t.jsx(C,{}),t.jsx(g,{connected_with:"user_modal",title:"Юзер",children:t.jsx(b,{elements:[{name:"name",label:"Имя",type:n.INPUT,settings:{required:!0}},{name:"surname",label:"Фамилия",type:n.INPUT,settings:{required:!0}},{name:"login",label:"Логин",type:n.INPUT,settings:{required:!0}},{name:"password",label:"Пароль",type:n.INPUT,settings:{required:!0}},{name:"role",label:"Роль",type:n.SELECT,settings:{options:[{value:"admin",text:"Администратор"},{value:"teacher",text:"Преподаватель"},{value:"student",text:"Студент"},{value:"submitor",text:"Участник соревнований"}],multiple:!0,required:!0}}],instance:i,onSubmit:j,buttonText:"Отправить"})}),t.jsx(_,{connected_with:"user_modal",additionalClasses:"m-3",preOpen:()=>{m({})},button_text:"Создание юзера"}),t.jsx(g,{connected_with:"multiple_users_modal",title:"Загрузка через файл",children:t.jsx(b,{elements:[{name:"file",label:"Файл",type:n.FILE,settings:{}}],onSubmit:e=>{M(e.file)},buttonText:"Отправить"})}),t.jsx(_,{connected_with:"multiple_users_modal",button_text:"Загрузить через файл"}),t.jsx(f,{max_page:r.length/a,current_page:l,onPageChange:e=>{d(e)}}),t.jsx(y,{elements:P(),additional_classes:"mt-3",table_fields:[{name:"name",label:"Имя"},{name:"surname",label:"Фамилия"},{name:"login",label:"Логин"},{name:"password",label:"Пароль"},{name:"role",label:"Роль",valueProcessing:e=>e.map(s=>E(s)).join(", "),width:20}],NeedEdit:!0,NeedDelete:!0,onEdit:T,onDelete:U,Sort:w}),t.jsx(f,{max_page:r.length/a,current_page:l,onPageChange:e=>{d(e)}})]})}export{k as default};