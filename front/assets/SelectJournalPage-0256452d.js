import{u as r,j as e,b as n}from"./index-2931db17.js";import{C as o}from"./Card-f200e4aa.js";import{u as c,M as l}from"./MessageBlock-72cf53d8.js";import{J as m}from"./JournalSelect-7b479ce1.js";import"./utils-26674dc9.js";import"./utils-346fb4c0.js";function x(){const a=c(),t=r();function i(s){s.length==0?a(n({type:"danger",text:"Нет журнала для этого класса и предмета"})):t(`/journal/${s[0].id}`)}return e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center align-items-center full-height",children:e.jsx("div",{className:"col-lg-4",children:e.jsxs(o,{children:[e.jsx(l,{}),e.jsx(m,{GetJournal:i})]})})})})}export{x as default};