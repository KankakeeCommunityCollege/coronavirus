!function(){"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+"."+o.h()+".bundle.js"},o.miniCssF=function(e){},o.h=function(){return"6c84aaa65cab61e1df77"},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="coronavirus:",o.l=function(n,r,i,u){if(e[n])e[n].push(r);else{var a,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var f=d[l];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var s=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="../assets/js/dist/",function(){var e={792:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var u=o.p+o.u(t),a=new Error;o.l(u,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,u=n[0],a=n[1],c=n[2],d=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);c&&c(o)}for(t&&t(n);d<u.length;d++)i=u[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkcoronavirus=self.webpackChunkcoronavirus||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),window.addEventListener("load",(()=>{document.getElementById("trackerTable")&&o.e(28).then(o.bind(o,28)).then((e=>{let{default:t}=e;gapi.load("client",t)}))}))}();