!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=86)}([function(t,r,e){(function(r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r&&r)||Function("return this")()}).call(this,e(51))},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},function(t,r,e){var n=e(0),o=e(35),i=e(2),c=e(36),u=e(41),a=e(63),f=o("wks"),s=n.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,r,e){var n=e(6),o=e(7),i=e(9);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,e){var n=e(1);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r,e){var n=e(6),o=e(30),i=e(8),c=e(13),u=Object.defineProperty;r.f=n?u:function(t,r,e){if(i(t),r=c(r,!0),i(e),o)try{return u(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},function(t,r,e){var n=e(5);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,e){var n=e(28),o=e(29);t.exports=function(t){return n(o(t))}},function(t,r,e){var n=e(0),o=e(27).f,i=e(4),c=e(14),u=e(15),a=e(54),f=e(61);t.exports=function(t,r){var e,s,l,p,v,y=t.target,d=t.global,h=t.stat;if(e=d?n:h?n[y]||u(y,{}):(n[y]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(d?s:y+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,r){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,r,e){var n=e(5);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r,e){var n=e(0),o=e(4),i=e(2),c=e(15),u=e(32),a=e(34),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,r,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),s(e).source=l.join("string"==typeof r?r:"")),t!==n?(a?!p&&t[r]&&(f=!0):delete t[r],f?t[r]=e:o(t,r,e)):f?t[r]=e:c(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,r,e){var n=e(0),o=e(4);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},function(t,r,e){var n=e(35),o=e(36),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports=!1},function(t,r){t.exports={}},function(t,r,e){var n=e(56),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},function(t,r,e){var n=e(38),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,e){var n=e(29);t.exports=function(t){return Object(n(t))}},function(t,r,e){"use strict";var n=e(10),o=e(66),i=e(24),c=e(34),u=e(70),a=c.set,f=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,r){a(this,{type:"Array Iterator",target:n(t),index:0,kind:r})}),(function(){var t=f(this),r=t.target,e=t.kind,n=t.index++;return!r||n>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:n,done:!1}:"values"==e?{value:r[n],done:!1}:{value:[n,r[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,r){t.exports={}},function(t,r,e){var n={};n[e(3)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,r,e){"use strict";var n=e(11),o=e(1),i=e(39),c=e(5),u=e(22),a=e(20),f=e(62),s=e(40),l=e(64),p=e(3),v=e(42),y=p("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),h=l("concat"),g=function(t){if(!c(t))return!1;var r=t[y];return void 0!==r?!!r:i(t)};n({target:"Array",proto:!0,forced:!d||!h},{concat:function(t){var r,e,n,o,i,c=u(this),l=s(c,0),p=0;for(r=-1,n=arguments.length;r<n;r++)if(g(i=-1===r?c:arguments[r])){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,r,e){var n=e(6),o=e(52),i=e(9),c=e(10),u=e(13),a=e(2),f=e(30),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=c(t),r=u(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r,e){var n=e(1),o=e(12),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,e){var n=e(6),o=e(1),i=e(31);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,e){var n=e(0),o=e(5),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,r,e){var n=e(33),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,r,e){var n=e(0),o=e(15),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,e){var n,o,i,c=e(53),u=e(0),a=e(5),f=e(4),s=e(2),l=e(16),p=e(18),v=u.WeakMap;if(c){var y=new v,d=y.get,h=y.has,g=y.set;n=function(t,r){return g.call(y,t,r),r},o=function(t){return d.call(y,t)||{}},i=function(t){return h.call(y,t)}}else{var m=l("state");p[m]=!0,n=function(t,r){return f(t,m,r),r},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!a(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,r,e){var n=e(17),o=e(33);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.5",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},function(t,r,e){var n=e(2),o=e(10),i=e(58).indexOf,c=e(18);t.exports=function(t,r){var e,u=o(t),a=0,f=[];for(e in u)!n(c,e)&&n(u,e)&&f.push(e);for(;r.length>a;)n(u,e=r[a++])&&(~i(f,e)||f.push(e));return f}},function(t,r){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},function(t,r,e){var n=e(12);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,r,e){var n=e(5),o=e(39),i=e(3)("species");t.exports=function(t,r){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?n(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},function(t,r,e){var n=e(1);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,r,e){var n,o,i=e(0),c=e(65),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(n=f.split("."))[0]+n[1]:c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,r,e){var n,o=e(8),i=e(67),c=e(21),u=e(18),a=e(69),f=e(31),s=e(16),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;y=n?function(t){t.write(v("")),t.close();var r=t.parentWindow.Object;return t=null,r}(n):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete y.prototype[c[e]];return y()};u[l]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=y(),void 0===r?e:i(e,r)}},function(t,r,e){"use strict";var n,o,i,c=e(45),u=e(4),a=e(2),f=e(3),s=e(17),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(n=o):p=!0),null==n&&(n={}),s||a(n,l)||u(n,l,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},function(t,r,e){var n=e(2),o=e(22),i=e(16),c=e(72),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),n(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,r,e){var n=e(7).f,o=e(2),i=e(3)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},function(t,r,e){var n=e(25),o=e(14),i=e(75);n||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,r,e){var n=e(0),o=e(49),i=e(23),c=e(4),u=e(3),a=u("iterator"),f=u("toStringTag"),s=i.values;for(var l in o){var p=n[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{c(v,a,s)}catch(t){v[a]=s}if(v[f]||c(v,f,l),o[l])for(var y in i)if(v[y]!==i[y])try{c(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,e){"use strict";var n=e(78).forEach,o=e(81),i=e(82),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:n},function(t,r,e){var n=e(0),o=e(32),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,r,e){var n=e(2),o=e(55),i=e(27),c=e(7);t.exports=function(t,r){for(var e=o(r),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];n(t,s)||u(t,s,a(r,s))}}},function(t,r,e){var n=e(19),o=e(57),i=e(60),c=e(8);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(c(t)),e=i.f;return e?r.concat(e(t)):r}},function(t,r,e){var n=e(0);t.exports=n},function(t,r,e){var n=e(37),o=e(21).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,r,e){var n=e(10),o=e(20),i=e(59),c=function(t){return function(r,e,c){var u,a=n(r),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,r,e){var n=e(38),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,e){var n=e(1),o=/#|\.prototype\./,i=function(t,r){var e=u[c(t)];return e==f||e!=a&&("function"==typeof r?n(r):!!r)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,r,e){"use strict";var n=e(13),o=e(7),i=e(9);t.exports=function(t,r,e){var c=n(r);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,r,e){var n=e(41);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,e){var n=e(1),o=e(3),i=e(42),c=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},function(t,r,e){var n=e(19);t.exports=n("navigator","userAgent")||""},function(t,r,e){var n=e(3),o=e(43),i=e(7),c=n("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,r,e){var n=e(6),o=e(7),i=e(8),c=e(68);t.exports=n?Object.defineProperties:function(t,r){i(t);for(var e,n=c(r),u=n.length,a=0;u>a;)o.f(t,e=n[a++],r[e]);return t}},function(t,r,e){var n=e(37),o=e(21);t.exports=Object.keys||function(t){return n(t,o)}},function(t,r,e){var n=e(19);t.exports=n("document","documentElement")},function(t,r,e){"use strict";var n=e(11),o=e(71),i=e(45),c=e(73),u=e(46),a=e(4),f=e(14),s=e(3),l=e(17),p=e(24),v=e(44),y=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),g=function(){return this};t.exports=function(t,r,e,s,v,m,x){o(e,r,s);var b,S,w,O=function(t){if(t===v&&A)return A;if(!d&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},j=r+" Iterator",E=!1,T=t.prototype,L=T[h]||T["@@iterator"]||v&&T[v],A=!d&&L||O(v),_="Array"==r&&T.entries||L;if(_&&(b=i(_.call(new t)),y!==Object.prototype&&b.next&&(l||i(b)===y||(c?c(b,y):"function"!=typeof b[h]&&a(b,h,g)),u(b,j,!0,!0),l&&(p[j]=g))),"values"==v&&L&&"values"!==L.name&&(E=!0,A=function(){return L.call(this)}),l&&!x||T[h]===A||a(T,h,A),p[r]=A,v)if(S={values:O("values"),keys:m?A:O("keys"),entries:O("entries")},x)for(w in S)(d||E||!(w in T))&&f(T,w,S[w]);else n({target:r,proto:!0,forced:d||E},S);return S}},function(t,r,e){"use strict";var n=e(44).IteratorPrototype,o=e(43),i=e(9),c=e(46),u=e(24),a=function(){return this};t.exports=function(t,r,e){var f=r+" Iterator";return t.prototype=o(n,{next:i(1,e)}),c(t,f,!1,!0),u[f]=a,t}},function(t,r,e){var n=e(1);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,r,e){var n=e(8),o=e(74);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(t){}return function(e,i){return n(e),o(i),r?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,r,e){var n=e(5);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,e){"use strict";var n=e(25),o=e(76);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,r,e){var n=e(25),o=e(12),i=e(3)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?e:c?o(r):"Object"==(n=o(r))&&"function"==typeof r.callee?"Arguments":n}},function(t,r,e){"use strict";var n=e(11),o=e(50);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,r,e){var n=e(79),o=e(28),i=e(22),c=e(20),u=e(40),a=[].push,f=function(t){var r=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,d,h){for(var g,m,x=i(v),b=o(x),S=n(y,d,3),w=c(b.length),O=0,j=h||u,E=r?j(v,w):e?j(v,0):void 0;w>O;O++)if((p||O in b)&&(m=S(g=b[O],O,x),t))if(r)E[O]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:a.call(E,g)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,r,e){var n=e(80);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,e){"use strict";var n=e(1);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},function(t,r,e){var n=e(6),o=e(1),i=e(2),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,r){if(i(u,t))return u[t];r||(r={});var e=[][t],f=!!i(r,"ACCESSORS")&&r.ACCESSORS,s=i(r,0)?r[0]:a,l=i(r,1)?r[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!n)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},function(t,r,e){var n=e(0),o=e(49),i=e(50),c=e(4);for(var u in o){var a=n[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},,,function(t,r,e){"use strict";e.r(r);function n(t){var r="More"===t.target.innerHTML;t.target.innerHTML=r?"Close":"More"}var o=function(){if(document.getElementById("collapseButton")){var t,r,e=document.getElementById("collapseButton");t="click",r=n,e.addEventListener(t,r)}},i=(e(26),e(23),e(47),e(48),e(77),e(83),[["weekOf","cumulative"],["currentStudents","cumulativeStudents"],["currentEmployees","cumulativeEmployees"],["currentTotal","cumulativeTotal"]]);function c(t,r){t.forEach((function(t,e){!function(t,r){var e=document.getElementById(r),n=t,o="#VALUE!"===t;e.innerHTML=o?"N/A":n}(t,r[e])}))}var u=function(t){t.result.values.forEach((function(t,r){c(t,i[r])}))};var a=function(t){var r=t.result.modifiedTime,e=new Date(r);return document.getElementById("lastUpdated").innerHTML="".concat(e.getMonth()+1,"/").concat(e.getDate(),"/").concat(e.getFullYear())},f={spreadsheetId:"1JDL9QfTqQ1zAVz50gf74WhYuu0QvyG9X-6ESJiddA9Q",range:"Sheet1!B4:C7"},s={apiKey:"AIzaSyA8LOs7BC9Hl_ibwdGd9DSQKINcWRcuu1o",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest","https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"],scopes:["https://www.googleapis.com/auth/drive.readonly","https://www.googleapis.com/auth/drive.metadata.readonly"]},l={fileId:"1JDL9QfTqQ1zAVz50gf74WhYuu0QvyG9X-6ESJiddA9Q",fields:"*"};var p=function(){document.getElementById("trackerTable")&&gapi.client.init(s).then((function(){return gapi.client.sheets.spreadsheets.values.get(f)})).then((function(t){u(t)})).then((function(){return gapi.client.drive.files.get(l)})).then((function(t){console.log(t),a(t)}),(function(t){console.error("Google API execution error \n\nError message: ".concat(t.result.error.message," \nError type: ").concat(t.result.error.code," \nFull response: "),t),document.querySelector(".table__wrapper").innerHTML='\n<div class="m-3 p-3">\n  <div class="card">\n    <div class="card-body">\n      <h5 class="typography__h5">Whoops!</h5>\n      <p><strong>It looks like something went wrong while trying to retrieve the COVID-19 Confirmed Case data.</strong></p>\n      <p>Please, try <a href="#" onclick="window.location.reload()">reloading the page</a> to retrieve the data, or try a modern browser like <a href="https://www.google.com/chrome/" target="_blank" rel="noopener norefferer">Google Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel="noopener norefferer">Mozilla FireFox</a>.</p>\n      <p>If the problem persists, please contact <a href="mailto:webservices@kcc.edu">webservices@kcc.edu</a></p>\n    </div>\n  </div>\n</div>\n'}))};document.addEventListener("DOMContentLoaded",(function(){o(),gapi.load("client",p)}))}]);