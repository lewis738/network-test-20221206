"use strict";(self["webpackChunknetwork_demo"]=self["webpackChunknetwork_demo"]||[]).push([[308],{9308:function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});o(7658);var s=o(3396),n=o(4870),r=o(2965),i=o.n(r),d=o(4886),u=o.n(d),l=o(9754);const a={name:"NetworkSigma"};var g=Object.assign(a,{setup(e){const t=(0,n.iH)();var o=(0,n.qj)(null);const r=(0,n.qj)({});r.nodes=[],r.edges=[];for(let s=0;s<l.nodes.id.length;s++){const e={key:l.nodes.id[s],attributes:{label:l.nodes.label[s],size:l.nodes.size[s]/30,color:l.nodes["color.background"][s],x:4e4*l.nodes.x[s],y:4e4*l.nodes.y[s]}};r.nodes.push(e)}for(let s=0;s<l.edges.from.length;s++){const e={id:l.edges.ends[s],source:l.edges.from[s],target:l.edges.to[s],attributes:{size:Number(l.edges.title[s].split(" : ")[1])/1.5,opacity:Number(l.edges.title[s].split(" : ")[1])/1.5}};r.edges.push(e)}const d=new(i());return d.import(r),(0,s.bv)((()=>{o=new(u())(d,t.value);let e=null,s=!1;o.on("downNode",(t=>{s=!0,e=t.node,d.setNodeAttribute(e,"highlighted",!0)})),o.getMouseCaptor().on("mousemovebody",(t=>{if(!s||!e)return;const n=o.viewportToGraph(t);d.setNodeAttribute(e,"x",n.x),d.setNodeAttribute(e,"y",n.y),t.preventSigmaDefault(),t.original.preventDefault(),t.original.stopPropagation()})),o.getMouseCaptor().on("mouseup",(()=>{e&&d.removeNodeAttribute(e,"highlighted"),s=!1,e=null})),o.getMouseCaptor().on("mousedown",(()=>{o.getCustomBBox()||o.setCustomBBox(o.getBBox())})),setTimeout((()=>{}),5e3)})),(e,o)=>((0,s.wg)(),(0,s.iD)("div",{class:"container",id:"container",ref_key:"container",ref:t,style:{width:"100%",height:"100%"}},null,512))}});const c=g;var p=c}}]);
//# sourceMappingURL=308.26e9b5aa.js.map