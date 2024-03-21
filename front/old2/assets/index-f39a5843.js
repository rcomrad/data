import{c as d,a as h}from"./vue-router-42ccad0b.js";import{C as s}from"./utils-4f7fe0fc.js";const E="modulepreload",g=function(r){return"/"+r},u={},e=function(i,n,c){if(!n||n.length===0)return i();const l=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=g(t),t in u)return;u[t]=!0;const a=t.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!c)for(let _=l.length-1;_>=0;_--){const m=l[_];if(m.href===t&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${p}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":E,a||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),a)return new Promise((_,m)=>{o.addEventListener("load",_),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i())},f=()=>{try{if(!JSON.parse(localStorage.getItem("user")))return s("Для доступа к этой странице требуется авторизация","danger"),{name:"login"}}catch{return s("Для доступа к этой странице требуется авторизация","danger"),{name:"login"}}},v=()=>{try{if(!JSON.parse(localStorage.getItem("user")).role.includes("teacher"))return s("Только учителя имеют доступ к этой странице","danger"),{name:"homepage"}}catch{return s("Для доступа к этой странице требуется авторизация","danger"),{name:"login"}}},R=(r,i)=>{try{if(JSON.parse(localStorage.getItem("user")))return i}catch{return{name:"login"}}},O=[{path:"",name:"task_filler",component:()=>e(()=>import("./TaskFiller-cfd6304d.js"),["assets/TaskFiller-cfd6304d.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"problem/:id",name:"problem_page",component:()=>e(()=>import("./ProblemsPage-8f45e22b.js"),["assets/ProblemsPage-8f45e22b.js","assets/vue-router-42ccad0b.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/axios-940a6ca7.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/vuex.esm-bundler-af09927f.js"])},{path:"question/:id",name:"question_page",component:()=>e(()=>import("./QuestionPage-778a4aea.js"),["assets/QuestionPage-778a4aea.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/vue-router-42ccad0b.js","assets/vuex.esm-bundler-af09927f.js","assets/axios-940a6ca7.js"])}],I=[{path:"",name:"homepage",component:()=>e(()=>import("./HomeFiller-52003102.js"),["assets/HomeFiller-52003102.js","assets/runtime-core.esm-bundler-292d2fca.js"])},{path:"journal",name:"journal",beforeEnter:v,component:()=>e(()=>import("./JournalView-3212572d.js"),["assets/JournalView-3212572d.js","assets/axios-940a6ca7.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/bootstrap.esm-9a522539.js"])},{path:"user",name:"user_management",component:()=>e(()=>import("./MakeUser-72be754b.js"),["assets/MakeUser-72be754b.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/axios-940a6ca7.js","assets/vuex.esm-bundler-af09927f.js","assets/utils-60e751a2.js","assets/bootstrap.esm-9a522539.js"])},{path:"plan",name:"plan_management",component:()=>e(()=>import("./MakePlan-fb702018.js"),["assets/MakePlan-fb702018.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/axios-940a6ca7.js","assets/vuex.esm-bundler-af09927f.js","assets/utils-60e751a2.js","assets/bootstrap.esm-9a522539.js"])},{path:"grade",name:"grade_management",component:()=>e(()=>import("./MakeGrade-62a699e6.js"),["assets/MakeGrade-62a699e6.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/axios-940a6ca7.js","assets/vuex.esm-bundler-af09927f.js","assets/utils-60e751a2.js","assets/bootstrap.esm-9a522539.js","assets/StudentsSearch-62759386.js","assets/vue-router-42ccad0b.js","assets/utils-4f7fe0fc.js"])},{path:"group/:grade",name:"group_management",component:()=>e(()=>import("./MakeGroup-9ca9c08a.js"),["assets/MakeGroup-9ca9c08a.js","assets/vue-router-42ccad0b.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/axios-940a6ca7.js","assets/StudentsSearch-62759386.js","assets/vuex.esm-bundler-af09927f.js","assets/utils-4f7fe0fc.js"])},{path:"journal_manage",name:"journal_management",component:()=>e(()=>import("./MakeJournal-c4a6fac5.js"),["assets/MakeJournal-c4a6fac5.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/axios-940a6ca7.js","assets/vuex.esm-bundler-af09927f.js","assets/utils-60e751a2.js","assets/bootstrap.esm-9a522539.js"])},{path:"head_journal",name:"head_journal",component:()=>e(()=>import("./HeadView-6005df46.js"),["assets/HeadView-6005df46.js","assets/axios-940a6ca7.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/bootstrap.esm-9a522539.js"])},{path:"move",name:"move",component:()=>e(()=>import("./MakeMove-87944a99.js"),["assets/MakeMove-87944a99.js","assets/axios-940a6ca7.js","assets/vuex.esm-bundler-af09927f.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/utils-4f7fe0fc.js"])},{path:"competitions",name:"competitions",component:()=>e(()=>import("./CompetitonPage-5ead0e0f.js"),["assets/CompetitonPage-5ead0e0f.js","assets/axios-940a6ca7.js","assets/runtime-core.esm-bundler-292d2fca.js"])},{path:"task_list/:c_id",name:"task_list",children:O,component:()=>e(()=>import("./Tasks-db17dc82.js"),["assets/Tasks-db17dc82.js","assets/vuex.esm-bundler-af09927f.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/axios-940a6ca7.js","assets/vue-router-42ccad0b.js","assets/Tasks-fb17797c.css"])}],A=d({history:h("/"),routes:[{path:"/journal",name:"journal",component:()=>e(()=>import("./JournalView-3212572d.js"),["assets/JournalView-3212572d.js","assets/axios-940a6ca7.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/bootstrap.esm-9a522539.js"])},{path:"/login",name:"login",beforeEnter:R,component:()=>e(()=>import("./Login-15801160.js"),["assets/Login-15801160.js","assets/runtime-dom.esm-bundler-b9ecab8c.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/MessageBlock.vue_vue_type_script_setup_true_lang-51ad2495.js","assets/MessageBlock-7ab26554.css","assets/axios-940a6ca7.js","assets/vue-router-42ccad0b.js","assets/utils-4f7fe0fc.js"])},{path:"/",beforeEnter:f,children:I,component:()=>e(()=>import("./Home-1c023d0d.js"),["assets/Home-1c023d0d.js","assets/MessageBlock.vue_vue_type_script_setup_true_lang-51ad2495.js","assets/runtime-core.esm-bundler-292d2fca.js","assets/MessageBlock-7ab26554.css","assets/vue-router-42ccad0b.js","assets/utils-4f7fe0fc.js","assets/Home-4e4f0ad3.css"])}]});export{A as r};
