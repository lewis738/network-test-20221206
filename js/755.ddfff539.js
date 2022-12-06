(self["webpackChunknetwork_demo"]=self["webpackChunknetwork_demo"]||[]).push([[755],{7879:function(t){t.exports={nodeXAttribute:"x",nodeYAttribute:"y",isNodeFixed:"fixed",shouldSkipNode:null,shouldSkipEdge:null,settings:{attraction:5e-4,repulsion:.1,gravity:1e-4,inertia:.6,maxMove:200}}},4944:function(t,e){e.assignLayoutChanges=function(t,e,n){const{nodeXAttribute:r,nodeYAttribute:o}=n;t.updateEachNodeAttributes(((t,n)=>{const i=e[t];return!i||i.fixed||(n[r]=i.x,n[o]=i.y),n}),{attributes:["x","y"]})},e.collectLayoutChanges=function(t){const e={};for(const n in t){const r=t[n];e[n]={x:r.x,y:r.y}}return e}},5939:function(t,e,n){const{createNodeValueGetter:r,createEdgeValueGetter:o}=n(5008);t.exports=function(t,e,n){const{nodeXAttribute:i,nodeYAttribute:s}=n,{attraction:a,repulsion:u,gravity:d,inertia:f,maxMove:c}=n.settings;let{shouldSkipNode:l,shouldSkipEdge:g,isNodeFixed:h}=n;h=r(h),l=r(l,!1),g=o(g,!1);const y=t.filterNodes(((t,e)=>!l.fromEntry(t,e))),p=y.length;for(let r=0;r<p;r++){const n=y[r],o=t.getNodeAttributes(n),a=e[n];e[n]=a?{dx:a.dx*f,dy:a.dy*f,x:o[i]||0,y:o[s]||0}:{dx:0,dy:0,x:o[i]||0,y:o[s]||0}}if(u)for(let r=0;r<p;r++){const t=y[r],n=e[t];for(let o=r+1;o<p;o++){const t=y[o],r=e[t],i=r.x-n.x,s=r.y-n.y,a=Math.sqrt(i*i+s*s)||1,d=u/a*i,f=u/a*s;n.dx-=d,n.dy-=f,r.dx+=d,r.dy+=f}}if(a&&t.forEachEdge(((t,n,r,o,i,s,u)=>{if(r===o)return;if(l.fromEntry(r,i)||l.fromEntry(o,s))return;if(g.fromEntry(t,n,r,o,i,s,u))return;const d=e[r],f=e[o],c=f.x-d.x,h=f.y-d.y,y=Math.sqrt(c*c+h*h)||1,p=a*y*c,m=a*y*h;d.dx+=p,d.dy+=m,f.dx-=p,f.dy-=m})),d)for(let r=0;r<p;r++){const t=y[r],n=e[t],{x:o,y:i}=n,s=Math.sqrt(o*o+i*i)||1;e[t].dx-=o*d*s,e[t].dy-=i*d*s}const m=!1;for(let r=0;r<p;r++){const n=y[r],o=e[n],i=Math.sqrt(o.dx*o.dx+o.dy*o.dy);i>c&&(o.dx*=c/i,o.dy*=c/i),h.fromGraph(t,n)?o.fixed=!0:(o.x+=o.dx,o.y+=o.dy,o.fixed=!1)}return{converged:m}}},2563:function(t,e,n){const r=n(8415),o=n(2709),i=n(5939),s=n(4944),a=n(7879);function u(t,e){if(!r(t))throw new Error("graphology-layout-force/worker: the given graph is not a valid graphology instance.");e=o(e,a),this.callbacks={},e.onConverged&&(this.callbacks.onConverged=e.onConverged),this.graph=t,this.params=e,this.nodeStates={},this.frameID=null,this.running=!1,this.killed=!1}u.prototype.isRunning=function(){return this.running},u.prototype.runFrame=function(){let{converged:t}=i(this.graph,this.nodeStates,this.params);s.assignLayoutChanges(this.graph,this.nodeStates,this.params),t=!1,t?(this.callbacks.onConverged&&this.callbacks.onConverged(),this.stop()):this.frameID=window.requestAnimationFrame((()=>this.runFrame()))},u.prototype.stop=function(){return this.running=!1,null!==this.frameID&&(window.cancelAnimationFrame(this.frameID),this.frameID=null),this},u.prototype.start=function(){if(this.killed)throw new Error("graphology-layout-force/worker.start: layout was killed.");this.running||(this.running=!0,this.runFrame())},u.prototype.kill=function(){this.stop(),delete this.nodeStates,this.killed=!0},t.exports=u},842:function(t,e,n){var r=n(2709),o=n(8415),i={dimensions:["x","y"],center:.5,rng:Math.random,scale:1};function s(t,e,n){if(!o(e))throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");n=r(n,i);var s=n.dimensions;if(!Array.isArray(s)||s.length<1)throw new Error("graphology-layout/random: given dimensions are invalid.");var a=s.length,u=n.center,d=n.rng,f=n.scale,c=(u-.5)*f;function l(t){for(var e=0;e<a;e++)t[s[e]]=d()*f+c;return t}if(!t){var g={};return e.forEachNode((function(t){g[t]=l({})})),g}e.updateEachNodeAttributes((function(t,e){return l(e),e}),{attributes:s})}var a=s.bind(null,!1);a.assign=s.bind(null,!0),t.exports=a},2709:function(t){function e(t){return!t||"object"!==typeof t||"function"===typeof t||Array.isArray(t)||t instanceof Set||t instanceof Map||t instanceof RegExp||t instanceof Date}function n(t,r){t=t||{};var o={};for(var i in r){var s=t[i],a=r[i];e(a)?o[i]=void 0===s?a:s:o[i]=n(s,a)}return o}t.exports=n},5008:function(t,e){function n(t){return"number"!==typeof t||isNaN(t)?1:t}function r(t,e){var n={},r=function(t){return"undefined"===typeof t?e:t};"function"===typeof e&&(r=e);var o=function(e){return r(e[t])},i=function(){return r(void 0)};return"string"===typeof t?(n.fromAttributes=o,n.fromGraph=function(t,e){return o(t.getNodeAttributes(e))},n.fromEntry=function(t,e){return o(e)}):"function"===typeof t?(n.fromAttributes=function(){throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.")},n.fromGraph=function(e,n){return r(t(n,e.getNodeAttributes(n)))},n.fromEntry=function(e,n){return r(t(e,n))}):(n.fromAttributes=i,n.fromGraph=i,n.fromEntry=i),n}function o(t,e){var n={},r=function(t){return"undefined"===typeof t?e:t};"function"===typeof e&&(r=e);var o=function(e){return r(e[t])},i=function(){return r(void 0)};return"string"===typeof t?(n.fromAttributes=o,n.fromGraph=function(t,e){return o(t.getEdgeAttributes(e))},n.fromEntry=function(t,e){return o(e)},n.fromPartialEntry=n.fromEntry,n.fromMinimalEntry=n.fromEntry):"function"===typeof t?(n.fromAttributes=function(){throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.")},n.fromGraph=function(e,n){var o=e.extremities(n);return r(t(n,e.getEdgeAttributes(n),o[0],o[1],e.getNodeAttributes(o[0]),e.getNodeAttributes(o[1]),e.isUndirected(n)))},n.fromEntry=function(e,n,o,i,s,a,u){return r(t(e,n,o,i,s,a,u))},n.fromPartialEntry=function(e,n,o,i){return r(t(e,n,o,i))},n.fromMinimalEntry=function(e,n){return r(t(e,n))}):(n.fromAttributes=i,n.fromGraph=i,n.fromEntry=i,n.fromMinimalEntry=i),n}e.createNodeValueGetter=r,e.createEdgeValueGetter=o,e.createEdgeWeightGetter=function(t){return o(t,n)}},2755:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});n(7658);var r=n(3396),o=n(4870),i=n(2965),s=n.n(i),a=n(4886),u=n.n(a),d=n(5765),f=n(842),c=n.n(f),l=n(2563),g=n.n(l);const h={name:"NetworkSigma"};var y=Object.assign(h,{setup(t){const e=(0,o.iH)();var n=(0,o.qj)(null);const i=(0,o.qj)({});i.nodes=[],i.edges=[];for(let r=0;r<d.nodes.id.length;r++){const t={key:d.nodes.id[r],x:800*d.nodes.x[r],y:800*d.nodes.y[r],attributes:{label:d.nodes.label[r],size:d.nodes.size[r]/3,color:d.nodes["color.background"][r]}};i.nodes.push(t)}for(let r=0;r<d.edges.from.length;r++){const t={id:d.edges.ends[r],source:d.edges.from[r],target:d.edges.to[r]};i.edges.push(t)}const a=new(s());a.import(i),c().assign(a);const f=new(g())(a,{maxIterations:5e3,settings:{attraction:5e-4,repulsion:1e-4,gravity:.001,inertia:.9,maxMove:350}});return(0,r.bv)((()=>{n=new(u())(a,e.value),f.start();let t=null,r=!1;n.on("downNode",(e=>{r=!0,t=e.node,a.setNodeAttribute(t,"highlighted",!0)})),n.getMouseCaptor().on("mousemovebody",(e=>{if(!r||!t)return;const o=n.viewportToGraph(e);a.setNodeAttribute(t,"x",o.x),a.setNodeAttribute(t,"y",o.y),e.preventSigmaDefault(),e.original.preventDefault(),e.original.stopPropagation()})),n.getMouseCaptor().on("mouseup",(()=>{t&&a.removeNodeAttribute(t,"highlighted"),r=!1,t=null})),n.getMouseCaptor().on("mousedown",(()=>{n.getCustomBBox()||n.setCustomBBox(n.getBBox())})),setTimeout((()=>{f.stop()}),5e3)})),(t,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"container",id:"container",ref_key:"container",ref:e,style:{width:"100%",height:"100%"}},null,512))}});const p=y;var m=p}}]);
//# sourceMappingURL=755.ddfff539.js.map