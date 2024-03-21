import{H as L,I as Q,A as B,B as K,z as F}from"./runtime-core.esm-bundler-292d2fca.js";function W(){return A().__VUE_DEVTOOLS_GLOBAL_HOOK__}function A(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const J=typeof Proxy=="function",Y="devtools-plugin:setup",z="plugin:settings:set";let g,w;function X(){var e;return g!==void 0||(typeof window<"u"&&window.performance?(g=!0,w=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(g=!0,w=global.perf_hooks.performance):g=!1),g}function q(){return X()?w.now():Date.now()}class Z{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const o in t.settings){const a=t.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}s=o},now(){return q()}},n&&n.on(z,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...u)=>{this.onQueue.push({method:a,args:u})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...u)=>(this.targetQueue.push({method:a,args:u,resolve:()=>{}}),this.fallbacks[a](...u)):(...u)=>new Promise(l=>{this.targetQueue.push({method:a,args:u,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function tt(e,t){const n=e,r=A(),i=W(),s=J&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(Y,e,t);else{const o=s?new Z(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}var G="store";function mt(e){return e===void 0&&(e=null),K(e!==null?e:G)}function b(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function et(e){return e!==null&&typeof e=="object"}function rt(e){return e&&typeof e.then=="function"}function nt(e,t){return function(){return e(t)}}function M(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function P(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;O(e,n,[],e._modules.root,!0),C(e,n,t)}function C(e,t,n){var r=e._state,i=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={},a={},u=Q(!0);u.run(function(){b(s,function(l,c){o[c]=nt(l,e),a[c]=F(function(){return o[c]()}),Object.defineProperty(e.getters,c,{get:function(){return a[c].value},enumerable:!0})})}),e._state=B({data:t}),e._scope=u,e.strict&&ct(e),r&&n&&e._withCommit(function(){r.data=null}),i&&i.stop()}function O(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=I(t,n.slice(0,-1)),u=n[n.length-1];e._withCommit(function(){a[u]=r.state})}var l=r.context=it(e,o,n);r.forEachMutation(function(c,f){var h=o+f;ot(e,h,c,l)}),r.forEachAction(function(c,f){var h=c.root?f:o+f,d=c.handler||c;st(e,h,d,l)}),r.forEachGetter(function(c,f){var h=o+f;at(e,h,c,l)}),r.forEachChild(function(c,f){O(e,t,n.concat(f),c,i)})}function it(e,t,n){var r=t==="",i={dispatch:r?e.dispatch:function(s,o,a){var u=y(s,o,a),l=u.payload,c=u.options,f=u.type;return(!c||!c.root)&&(f=t+f),e.dispatch(f,l)},commit:r?e.commit:function(s,o,a){var u=y(s,o,a),l=u.payload,c=u.options,f=u.type;(!c||!c.root)&&(f=t+f),e.commit(f,l,c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return N(e,t)}},state:{get:function(){return I(e.state,n)}}}),i}function N(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function ot(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push(function(o){n.call(e,r.state,o)})}function st(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push(function(o){var a=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},o);return rt(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(u){throw e._devtoolHook.emit("vuex:error",u),u}):a})}function at(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function ct(e){L(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function I(e,t){return t.reduce(function(n,r){return n[r]},e)}function y(e,t,n){return et(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var ut="vuex bindings",x="vuex:mutations",S="vuex:actions",m="vuex",ft=0;function lt(e,t){tt({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ut]},function(n){n.addTimelineLayer({id:x,label:"Vuex Mutations",color:T}),n.addTimelineLayer({id:S,label:"Vuex Actions",color:T}),n.addInspector({id:m,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===m)if(r.filter){var i=[];R(i,t._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[V(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===m){var i=r.nodeId;N(t,i),r.state=pt(_t(t._modules,i),i==="root"?t.getters:t._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===m){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),t._withCommit(function(){r.set(t._state.data,s,r.state.value)})}}),t.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(m),n.sendInspectorState(m),n.addTimelineEvent({layerId:x,event:{time:Date.now(),title:r.type,data:s}})}),t.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=ft++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:S,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},o=Date.now()-r._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:S,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var T=8702998,dt=6710886,ht=16777215,D={label:"namespaced",textColor:ht,backgroundColor:dt};function $(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function V(e,t){return{id:t||"root",label:$(t),tags:e.namespaced?[D]:[],children:Object.keys(e._children).map(function(n){return V(e._children[n],t+n+"/")})}}function R(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[D]:[]}),Object.keys(t._children).forEach(function(i){R(e,t._children[i],n,r+i+"/")})}function pt(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(r.length){var s=vt(t);i.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?$(o):o,editable:!1,value:E(function(){return s[o]})}})}return i}function vt(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[s]=E(function(){return e[n]})}else t[n]=E(function(){return e[n]})}),t}function _t(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+t+'".');return s===n.length-1?o:o._children},t==="root"?e:e.root._children)}function E(e){try{return e()}catch(t){return t}}var v=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},U={namespaced:{configurable:!0}};U.namespaced.get=function(){return!!this._rawModule.namespaced};v.prototype.addChild=function(t,n){this._children[t]=n};v.prototype.removeChild=function(t){delete this._children[t]};v.prototype.getChild=function(t){return this._children[t]};v.prototype.hasChild=function(t){return t in this._children};v.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};v.prototype.forEachChild=function(t){b(this._children,t)};v.prototype.forEachGetter=function(t){this._rawModule.getters&&b(this._rawModule.getters,t)};v.prototype.forEachAction=function(t){this._rawModule.actions&&b(this._rawModule.actions,t)};v.prototype.forEachMutation=function(t){this._rawModule.mutations&&b(this._rawModule.mutations,t)};Object.defineProperties(v.prototype,U);var _=function(t){this.register([],t,!1)};_.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};_.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};_.prototype.update=function(t){k([],this.root,t)};_.prototype.register=function(t,n,r){var i=this;r===void 0&&(r=!0);var s=new v(n,r);if(t.length===0)this.root=s;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],s)}n.modules&&b(n.modules,function(a,u){i.register(t.concat(u),a,r)})};_.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};_.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function k(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;k(e.concat(r),t.getChild(r),n.modules[r])}}function bt(e){return new p(e)}var p=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var i=t.strict;i===void 0&&(i=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new _(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var o=this,a=this,u=a.dispatch,l=a.commit;this.dispatch=function(h,d){return u.call(o,h,d)},this.commit=function(h,d,H){return l.call(o,h,d,H)},this.strict=i;var c=this._modules.root.state;O(this,c,[],this._modules.root),C(this,c),r.forEach(function(f){return f(n)})},j={state:{configurable:!0}};p.prototype.install=function(t,n){t.provide(n||G,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&lt(t,this)};j.state.get=function(){return this._state.data};j.state.set=function(e){};p.prototype.commit=function(t,n,r){var i=this,s=y(t,n,r),o=s.type,a=s.payload,u={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(c){return c(u,i.state)}))};p.prototype.dispatch=function(t,n){var r=this,i=y(t,n),s=i.type,o=i.payload,a={type:s,payload:o},u=this._actions[s];if(!!u){try{this._actionSubscribers.slice().filter(function(c){return c.before}).forEach(function(c){return c.before(a,r.state)})}catch{}var l=u.length>1?Promise.all(u.map(function(c){return c(o)})):u[0](o);return new Promise(function(c,f){l.then(function(h){try{r._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,r.state)})}catch{}c(h)},function(h){try{r._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,r.state,h)})}catch{}f(h)})})}};p.prototype.subscribe=function(t,n){return M(t,this._subscribers,n)};p.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return M(r,this._actionSubscribers,n)};p.prototype.watch=function(t,n,r){var i=this;return L(function(){return t(i.state,i.getters)},n,Object.assign({},r))};p.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};p.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),O(this,this.state,t,this._modules.get(t),r.preserveState),C(this,this.state)};p.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=I(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),P(this)};p.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};p.prototype.hotUpdate=function(t){this._modules.update(t),P(this,!0)};p.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(p.prototype,j);export{bt as c,mt as u};
