import{u as k}from"./vue-router-42ccad0b.js";import{a as m,U as p}from"./axios-940a6ca7.js";import{e as $,v as S}from"./runtime-dom.esm-bundler-b9ecab8c.js";import{u as f}from"./vuex.esm-bundler-af09927f.js";import{o as a,c as n,J as g,a as s,K as _,L as y,M as c,G as h,H as T,P as b,b as v,y as L}from"./runtime-core.esm-bundler-292d2fca.js";const N=s("h5",null,"Решения:",-1),M={class:"table"},x=s("thead",null,[s("tr",null,[s("th",{scope:"col",style:{width:"30%"},class:"border-end"},"Тест"),s("th",{scope:"col"},"Ведрдикт")])],-1),H={class:"border-end"},w={__name:"SubmissionList",props:["submissions"],setup(r){f();const l={NUN:"Проерка",CE:"Ошибка компиляции",Nu:"Тестируется",WA:"Неправильный ответ",OK:"Решение сдано"};return(o,t)=>(a(),n(_,null,[N,g(s("table",M,[x,s("tbody",null,[(a(!0),n(_,null,y(r.submissions,e=>(a(),n("tr",null,[s("td",H,c(e.test===-1?" ":e.test),1),s("td",null,c(l[e.verdict]===void 0?e.verdict:l[e.verdict]),1)]))),256))])],512),[[$,r.submissions.lenght!==0]])],64))}},C={class:"modal",id:"send_submission",tabindex:"-1"},O={class:"modal-dialog"},P={class:"modal-content"},U=s("div",{class:"modal-header"},[s("h5",{class:"modal-title"},"Послать решение"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),B={class:"modal-body"},D={class:"mb-3"},I=s("label",{class:"form-label"},"Выберите язык",-1),J=s("option",{selected:"",value:".cpp"},"C++20",-1),V=s("option",{value:".py"},"Python 3.10",-1),E=s("option",{value:".pac"},"Pascal",-1),K=[J,V,E],R={class:"mb-3"},A=s("label",{class:"form-label"},"Загрузите файл",-1),F=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Закрыть",-1),G={__name:"SendSubmission",props:["task_id"],setup(r){const l=r,o=h(".cpp"),t=h(),e=()=>{console.log(t.value[0]),m.post(p+"/submit",{problem_id:l.task_id,user_id:JSON.parse(localStorage.getItem("user")).id,filename:"some"+o.value,file:t.value[0]},{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{console.log(i)})};return(i,d)=>(a(),n("div",C,[s("div",O,[s("div",P,[U,s("div",B,[s("form",null,[s("div",D,[I,g(s("select",{class:"form-select","onUpdate:modelValue":d[0]||(d[0]=u=>o.value=u)},K,512),[[S,o.value]])]),s("div",R,[A,s("input",{class:"form-control",type:"file",onChange:d[1]||(d[1]=u=>{t.value=u.target.files})},null,32)])])]),s("div",{class:"modal-footer"},[F,s("button",{type:"button",class:"btn btn-primary",onClick:e,"data-bs-dismiss":"modal"},"Отправить на проверку ")])])])]))}},W={key:0,class:"ps-5"},j={class:"row"},q={class:"col-8"},z={class:"my-3"},Q=["innerHTML"],X=s("h5",null,"Входные данные",-1),Y=["innerHTML"],Z=s("h5",null,"Выходные данные",-1),ss=["innerHTML"],ts=s("div",{class:"row gx-2 mt-1"},[s("div",{class:"col-6 text-secondary fw-light"}," STDIN "),s("div",{class:"col-6 text-secondary fw-light"}," STDOUT ")],-1),es={class:"row gx-2 mt-1"},os={class:"col-6"},ls=["innerHTML"],as={class:"col-6"},ns=["innerHTML"],is={class:"row mt-5"},ds=s("div",{class:"col-3 d-grid gap-2 me-auto"},[s("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#send_submission"},"Послать")],-1),rs={class:"col-5 text-end"},cs=s("br",null,null,-1),_s={class:"col-4 my-3"},us={key:1},fs={__name:"ProblemsPage",setup(r){const l=k(),o=f(),t=h(o.state.tasks.problems_list.find(e=>e.id===Number(l.params.id)));return o.state.tasks.problems_list.length===0&&m.get(p+"/get_all_competition/"+JSON.parse(localStorage.getItem("user")).id+"/"+l.params.c_id).then(e=>{o.state.tasks.problems_list.length===0&&o.commit("set_problems_list",e.data.problems),t.value=o.state.tasks.problems_list.find(i=>i.id===Number(l.params.id))}),T(l,()=>{t.value=o.state.tasks.problems_list.find(e=>e.id===Number(l.params.id)),o.state.tasks.problems_list.length===0&&m.get(p+"/get_all_competition/"+JSON.parse(localStorage.getItem("user")).id+"/"+l.params.c_id).then(e=>{o.state.tasks.problems_list.length===0&&o.commit("set_problems_list",e.data.problems),t.value=o.state.tasks.problems_list.find(i=>i.id===Number(l.params.id))})}),(e,i)=>(a(),n(_,null,[t.value?(a(),n("div",W,[s("div",j,[s("div",q,[s("h3",z,c(t.value.name),1),s("p",{innerHTML:t.value.legend},null,8,Q),X,s("p",{innerHTML:t.value.input_format},null,8,Y),Z,s("p",{innerHTML:t.value.output_format},null,8,ss),ts,(a(!0),n(_,null,y(t.value.tests,d=>(a(),n("div",es,[s("div",os,[s("div",{class:"p-2",style:{"background-color":"#f8f8f8"},innerHTML:"<pre>"+d.input+"</pre>"},null,8,ls)]),s("div",as,[s("div",{class:"p-2",style:{"background-color":"#f8f8f8"},innerHTML:"<pre>"+d.output+"</pre>"},null,8,ns)])]))),256)),s("div",is,[ds,s("div",rs,[b(" Лимит времени: "+c(t.value.time_limit)+" c. ",1),cs,b(" Лимит памяти: "+c(t.value.memory_limit)+" MB ",1)])])]),s("div",_s,[v(w,{submissions:t.value.submission},null,8,["submissions"])])])])):(a(),n("div",us," Страница загружается, выберите другую задачу из списка ")),v(G,{task_id:L(l).params.id},null,8,["task_id"])],64))}};export{fs as default};