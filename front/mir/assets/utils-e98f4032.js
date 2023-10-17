import{a,G as d}from"./index-648ea929.js";import{A as r,E as u}from"./config-a5b38a07.js";function p({login:e,password:t}){return new Promise(async(n,s)=>{try{const i=await a.post(`${r}/login`,{login:e,password:t});n(i.data.user)}catch(i){s(i)}})}function f({teacher_id:e}){return new Promise(async t=>{const n=await a.get(`${r}/get/if/journal_table[id,grade_id[name],subject_id[name]/teacher_id=${e}`);t(n.data.journal_tables.map(s=>({id:s.id,grade:s.grade.name,subject:s.subject.name})))})}function _({id:e}){return new Promise(async t=>{const n=await a.get(`${r}/get/if/journal_table[id,(lesson[id,theme_id[name],date_val,(mark[id,student_id,mark_value,lesson_id])),grade_id[id,name,(grade_student[student_id[*]])]]/id=${e}`),s=n.data.journal_tables[0].lessons,i=n.data.journal_tables[0].grade.grade_students.map(o=>o.student);t({lessons:s,grade:i})})}function w({mark:e}){return new Promise(async t=>{if(e.mark_value==="")e.id?await a.post(`${r}/drop/mark`,{id:e.id}):await a.post(`${r}/drop/mark`,{student_id:e.student_id,lesson_id:e.lesson_id}),t({student_id:e.student_id,lesson_id:e.lesson_id,mark_value:e.mark_value});else{const n=await a.post(`${r}/post/mark`,{...e});t({id:n.data,student_id:e.student_id,lesson_id:e.lesson_id,mark_value:e.mark_value})}})}function g(){return new Promise(async e=>{const t=await a.get(`${r}/get/all/user`);e(t.data.users)})}function y(e){return new Promise(async()=>{await a.post(`${r}/drop/user`,{id:e})})}function $(e){return new Promise(async t=>{await a.post(`${r}/post/user`,e),t(e)})}function P(e){return new Promise(async()=>{const t={file:e,filename:e.name,index:"data"};await a.post(`${r}/upload/user`,t,{headers:{"Content-Type":"multipart/form-data"}})})}function b(){return new Promise(async e=>{const t=await a.get(`${r}/get/all/plan`);e(t.data.plans)})}function j(e){return new Promise(async()=>{await a.post(`${r}/drop/plan`,{id:e})})}function A(){return new Promise(async e=>{const t=await a.get(`${r}/get/all/subject`);e(t.data.subjects)})}function G(e){return new Promise(async t=>{let n={name:e.name,subject_id:Number(e.subject_id)},s={};e.file&&(n.file=e.file,n.filename=e.file.name,n.index="data",s.headers={"Content-Type":"multipart/form-data"}),e.id&&(n.id=e.id),await a.post(`${r}/post/plan`,n,s),t()})}function h(){return new Promise(async e=>{let n=(await a.get(`${r}/get/all/grade[*,(grade_student)]`)).data.grades.map(s=>(s.student=s.grade_students.map(i=>i.student_id),delete s.grade_students,s));e(n)})}function T(e){return new Promise(async t=>{e.student&&(e.many_to_many="replace",e.student=e.student.map(n=>Number(n))),e.is_group=!1,e.head_id=Number(e.head_id),console.log(e),await a.post(`${r}/post/grade`,e),t()})}function E(e){return new Promise(async()=>{await a.post(`${r}/drop/grade`,{id:e})})}function S(){return new Promise(async e=>{const t=await a.get(`${r}/get/all/journal_table`);e(t.data.journal_tables)})}function q(e){return new Promise(async t=>{await a.post(`${r}/drop/journal_table`,{id:e}),t()})}function F(e){return new Promise(async t=>{await a.post(`${r}/post/subject`,e),t()})}function N(e){return new Promise(async t=>{await a.post(`${r}/drop/subject`,{id:e}),t()})}function I(e){return new Promise(async t=>{const n=await a.get(`${r}/print_journal/${e.join(",")}`);t(`https://kusmirror.ru/${n.data}`)})}function U(){return new Promise(async e=>{const t=d(),n=await a.get(`${r}/get/if/competition_user[competition_id[]]/user_id=${t.id}`);e(n.data.competition_users.map(s=>s.competition))})}function v(e){return new Promise(async t=>{const n=await a.get(`${r}/get/if/competition/id=${e}`),s=await a.get(`${r}/get/if/competition_question[question_id[id,name]]/competition_id=${e}`),i=n.data.competitions[0];if(s.data.errors){i.error=s.data.errors,t(i);return}i.questions=s.data.competition_questions.map(o=>o.question),t(i)})}function C(e){return new Promise(async t=>{const n=d(),i=(await a.get(`${r}/get_question/${e}/${n.id}`)).data.question;t(i)})}function D(e,t){return new Promise(async n=>{if(t==="")return;const s=d();console.log({question_id:e,user_id:s.id,value:t}),await a.post(`${r}/post/answer`,{question_id:e,user_id:s.id,value:t}),n()})}function c(e){switch(e){case"FILE":return u.FILE;case"TEXTAREA":case"BIG_TEXTAREA":return u.TEXTAREA;case"INPUT":return u.INPUT;default:throw new Error(`Unknown form type: ${e}`)}}function R(){return new Promise(async e=>{const n=(await a.get(`${r}/get/all/form[id,(field_form[field_id[]]),*]`)).data.forms;e(n.map(s=>({id:s.id,userName:s.userName,techName:s.techName,fields:s.field_forms.map(o=>({label:o.field.name,name:o.field.label,type:c(o.field.type),settings:{accept:c(o.field.type)==u.FILE?o.field.info:null,rows:o.field.type=="BIG_TEXTAREA"?10:null}}))})))})}function J(e,t){return new Promise(async n=>{const s=await a.post(`${r}/multitool`,{techName:e,...t},{headers:{"Content-Type":"multipart/form-data"}});n(s.data.html)})}function x(e){return new Promise(async(t,n)=>{try{await a.post(`${r}/registration`,e),t()}catch(s){n(s)}})}export{p as A,G as C,y as D,_ as G,I as P,x as R,w as S,f as a,g as b,P as c,$ as d,b as e,A as f,j as g,h,T as i,E as j,S as k,q as l,N as m,F as n,R as o,J as p,U as q,D as r,v as s,C as t};
