import{u as r,j as e,b as n}from"./index-50c8aee8.js";import{C as o}from"./Card-a622415b.js";import{u as c,M as l}from"./MessageBlock-96fe4be3.js";import{J as m}from"./JournalSelect-e6da1e59.js";import"./utils-bafe39db.js";import"./utils-346fb4c0.js";function x(){const a=c(),t=r();function i(s){s.length==0?a(n({type:"danger",text:"Нет журнала для этого класса и предмета"})):t(`/journal/${s[0].id}`)}return e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center align-items-center full-height",children:e.jsx("div",{className:"col-lg-4",children:e.jsxs(o,{children:[e.jsx(l,{}),e.jsx(m,{GetJournal:i})]})})})})}export{x as default};