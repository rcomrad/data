import{u as i,j as e,a as o}from"./index-199b226d.js";import{C as n}from"./Card-821752c0.js";import{M as c}from"./MessageBlock-b455212b.js";import{J as l}from"./JournalSelect-4c52f261.js";import{u as m}from"./useDispatch-36c04e55.js";import"./config-d7ec2646.js";import"./Form-deb6d44d.js";import"./Grow-05218608.js";import"./utils-78c577ae.js";import"./axios-4a70c6fc.js";import"./utils-978ca1b9.js";function M(){const s=m(),a=i();function r(t){t.length==0?s(o({type:"danger",text:"Нет журнала для этого класса и предмета"})):a(`/journal/${t[0].id}`)}return e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center align-items-center full-height",children:e.jsx("div",{className:"col-lg-4",children:e.jsxs(n,{children:[e.jsx(c,{}),e.jsx(l,{GetJournal:r})]})})})})}export{M as default};
