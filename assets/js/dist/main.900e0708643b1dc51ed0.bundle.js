!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=86)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(51))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(0),o=r(34),i=r(2),u=r(35),c=r(40),a=r(63),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,r){var e=r(6),o=r(7),i=r(9);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(6),o=r(29),i=r(8),u=r(13),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(27),o=r(28);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(0),o=r(26).f,i=r(4),u=r(14),c=r(15),a=r(54),f=r(61);t.exports=function(t,n){var r,s,l,p,v,y=t.target,d=t.global,h=t.stat;if(r=d?e:h?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(d?s:y+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(5);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(4),i=r(2),u=r(15),c=r(31),a=r(33),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n,r){var e=r(0),o=r(4);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(34),o=r(35),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var e=r(56),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(37),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(28);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e=r(10),o=r(66),i=r(24),u=r(33),c=r(70),a=u.set,f=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,n){a(this,{type:"Array Iterator",target:e(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,r=t.kind,e=t.index++;return!n||e>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:e,done:!1}:"values"==r?{value:n[e],done:!1}:{value:[e,n[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n){t.exports={}},function(t,n,r){var e={};e[r(3)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(6),o=r(52),i=r(9),u=r(10),c=r(13),a=r(2),f=r(29),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(1),o=r(12),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(6),o=r(1),i=r(30);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(5),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(32),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(0),o=r(15),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e,o,i,u=r(53),c=r(0),a=r(5),f=r(4),s=r(2),l=r(16),p=r(18),v=c.WeakMap;if(u){var y=new v,d=y.get,h=y.has,g=y.set;e=function(t,n){return g.call(y,t,n),n},o=function(t){return d.call(y,t)||{}},i=function(t){return h.call(y,t)}}else{var x=l("state");p[x]=!0,e=function(t,n){return f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(17),o=r(32);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(2),o=r(10),i=r(58).indexOf,u=r(18);t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(u,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(12);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(5),o=r(38),i=r(3)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e,o,i=r(0),u=r(65),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e,o=r(8),i=r(67),u=r(21),c=r(18),a=r(69),f=r(30),s=r(16),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete y.prototype[u[r]];return y()};c[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=y(),void 0===n?r:i(r,n)}},function(t,n,r){"use strict";var e,o,i,u=r(44),c=r(4),a=r(2),f=r(3),s=r(17),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(2),o=r(22),i=r(16),u=r(72),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,r){var e=r(7).f,o=r(2),i=r(3)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(25),o=r(14),i=r(75);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,r){var e=r(0),o=r(48),i=r(23),u=r(4),c=r(3),a=c("iterator"),f=c("toStringTag"),s=i.values;for(var l in o){var p=e[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{u(v,a,s)}catch(t){v[a]=s}if(v[f]||u(v,f,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(78).forEach,o=r(81),i=r(82),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,r){"use strict";var e=r(11),o=r(1),i=r(38),u=r(5),c=r(22),a=r(20),f=r(62),s=r(39),l=r(64),p=r(3),v=r(41),y=p("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),h=l("concat"),g=function(t){if(!u(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!d||!h},{concat:function(t){var n,r,e,o,i,u=c(this),l=s(u,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(g(i=-1===n?u:arguments[n])){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&f(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(31),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(2),o=r(55),i=r(26),u=r(7);t.exports=function(t,n){for(var r=o(n),c=u.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||c(t,s,a(n,s))}}},function(t,n,r){var e=r(19),o=r(57),i=r(60),u=r(8);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(36),o=r(21).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(10),o=r(20),i=r(59),u=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),s=i(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(37),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){"use strict";var e=r(13),o=r(7),i=r(9);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(40);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(1),o=r(3),i=r(41),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e=r(19);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(3),o=r(42),i=r(7),u=e("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,r){var e=r(6),o=r(7),i=r(8),u=r(68);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,a=0;c>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(36),o=r(21);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(19);t.exports=e("document","documentElement")},function(t,n,r){"use strict";var e=r(11),o=r(71),i=r(44),u=r(73),c=r(45),a=r(4),f=r(14),s=r(3),l=r(17),p=r(24),v=r(43),y=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),g=function(){return this};t.exports=function(t,n,r,s,v,x,m){o(r,n,s);var b,S,O,w=function(t){if(t===v&&L)return L;if(!d&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},j=n+" Iterator",E=!1,T=t.prototype,A=T[h]||T["@@iterator"]||v&&T[v],L=!d&&A||w(v),_="Array"==n&&T.entries||A;if(_&&(b=i(_.call(new t)),y!==Object.prototype&&b.next&&(l||i(b)===y||(u?u(b,y):"function"!=typeof b[h]&&a(b,h,g)),c(b,j,!0,!0),l&&(p[j]=g))),"values"==v&&A&&"values"!==A.name&&(E=!0,L=function(){return A.call(this)}),l&&!m||T[h]===L||a(T,h,L),p[n]=L,v)if(S={values:w("values"),keys:x?L:w("keys"),entries:w("entries")},m)for(O in S)(d||E||!(O in T))&&f(T,O,S[O]);else e({target:n,proto:!0,forced:d||E},S);return S}},function(t,n,r){"use strict";var e=r(43).IteratorPrototype,o=r(42),i=r(9),u=r(45),c=r(24),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),u(t,f,!1,!0),c[f]=a,t}},function(t,n,r){var e=r(1);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(8),o=r(74);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(25),o=r(76);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){var e=r(25),o=r(12),i=r(3)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:u?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){"use strict";var e=r(11),o=r(49);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){var e=r(79),o=r(27),i=r(22),u=r(20),c=r(39),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,d,h){for(var g,x,m=i(v),b=o(m),S=e(y,d,3),O=u(b.length),w=0,j=h||c,E=n?j(v,O):r?j(v,0):void 0;O>w;w++)if((p||w in b)&&(x=S(g=b[w],w,m),t))if(n)E[w]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:a.call(E,g)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(80);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){"use strict";var e=r(1);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e=r(6),o=r(1),i=r(2),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},function(t,n,r){var e=r(0),o=r(48),i=r(49),u=r(4);for(var c in o){var a=e[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},,,function(t,n,r){"use strict";r.r(n);function e(t){var n="More"===t.target.innerHTML;t.target.innerHTML=n?"Close":"More"}var o=function(){if(document.getElementById("collapseButton")){var t,n,r=document.getElementById("collapseButton");t="click",n=e,r.addEventListener(t,n)}},i=(r(50),r(23),r(46),r(47),r(77),r(83),[["weekOf","cumulative"],["currentStudents","cumulativeStudents"],["currentEmployees","cumulativeEmployees"],["currentTotal","cumulativeTotal"],["lastUpdated"]]);function u(t,n){t.forEach((function(t,r){!function(t,n){var r=document.getElementById(n),e=t,o="#VALUE!"===t;r.innerHTML=o?"N/A":e}(t,n[r])}))}var c=function(t){t.result.values.forEach((function(t,n){u(t,i[n])}))},a={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]},f={spreadsheetId:"1JDL9QfTqQ1zAVz50gf74WhYuu0QvyG9X-6ESJiddA9Q",range:"Sheet1!B4:C8"};var s=function(){document.getElementById("trackerTable")&&gapi.client.init(a).then((function(){return gapi.client.sheets.spreadsheets.values.get(f)})).then((function(t){c(t)}),(function(t){console.error("Google API Execution Error: \n".concat(t.result.error.message," \nError Code: ").concat(t.result.error.code," \n\nFull Response Object:"),t),document.querySelector(".table__wrapper").innerHTML='\n<div class="m-3 p-3">\n  <div class="card">\n    <div class="card-body">\n      <h5 class="typography__h5">Whoops!</h5>\n      <p><strong>It looks like something went wrong while trying to retrieve the COVID-19 Confirmed Case data</strong></p>\n      <p>Please, try <a href="#" onclick="window.location.reload()">reloading the page</a> to retrieve the data, or try a modern browser like Google Chrome or Mozilla FireFox.</p>\n    </div>\n  </div>\n</div>\n'}))};document.addEventListener("DOMContentLoaded",(function(){o(),gapi.load("client",s)}))}]);