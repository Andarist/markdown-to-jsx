!function(n,e,t){function r(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var o=r(n),a=r(e),i=r(t);function u(){return(u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function f(n,e){return e||(e=n.slice(0)),n.raw=e,n}function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function c(n,e){return(c=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}function p(n,e,t){return(p=d()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(n,r));return t&&c(o,t.prototype),o}).apply(null,arguments)}function g(n){var e="function"==typeof Map?new Map:void 0;return(g=function(n){if(null===n||!function(n){return-1!==Function.toString.call(n).indexOf("[native code]")}(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,t)}function t(){return p(n,arguments,s(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),c(t,n)})(n)}var m=function(n){var e,t;function r(e){return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+e+" for more information.")||this)}return t=n,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t),r}(g(Error));function b(n){return Math.round(255*n)}function h(n,e,t){return b(n)+","+b(e)+","+b(t)}function y(n,e,t,r){if(void 0===r&&(r=h),0===e)return r(t,t,t);var o=(n%360+360)%360/60,a=(1-Math.abs(2*t-1))*e,i=a*(1-Math.abs(o%2-1)),u=0,f=0,l=0;o>=0&&o<1?(u=a,f=i):o>=1&&o<2?(u=i,f=a):o>=2&&o<3?(f=a,l=i):o>=3&&o<4?(f=i,l=a):o>=4&&o<5?(u=i,l=a):o>=5&&o<6&&(u=a,l=i);var c=t-a/2;return r(u+c,f+c,l+c)}var v={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},k=/^#[a-fA-F0-9]{6}$/,w=/^#[a-fA-F0-9]{8}$/,x=/^#[a-fA-F0-9]{3}$/,I=/^#[a-fA-F0-9]{4}$/,_=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,S=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,j=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,$=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function z(n){if("string"!=typeof n)throw new m(3);var e=function(n){if("string"!=typeof n)return n;var e=n.toLowerCase();return v[e]?"#"+v[e]:n}(n);if(e.match(k))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(w)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(x))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(I)){var r=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:r}}var o=_.exec(e);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var a=S.exec(e.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])};var i=j.exec(e);if(i){var u="rgb("+y(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",f=_.exec(u);if(!f)throw new m(4,e,u);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var l=$.exec(e.substring(0,50));if(l){var c="rgb("+y(parseInt(""+l[1],10),parseInt(""+l[2],10)/100,parseInt(""+l[3],10)/100)+")",s=_.exec(c);if(!s)throw new m(4,e,c);return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+l[4])}}throw new m(5)}var M=function(n){return 7===n.length&&n[1]===n[2]&&n[3]===n[4]&&n[5]===n[6]?"#"+n[1]+n[3]+n[5]:n};function E(n){var e=n.toString(16);return 1===e.length?"0"+e:e}function R(n){return E(Math.round(255*n))}function A(n,e,t){return M("#"+R(n)+R(e)+R(t))}function O(n,e,t){return y(n,e,t,A)}function F(n,e,t){if("number"==typeof n&&"number"==typeof e&&"number"==typeof t)return M("#"+E(n)+E(e)+E(t));if("object"==typeof n&&void 0===e&&void 0===t)return M("#"+E(n.red)+E(n.green)+E(n.blue));throw new m(6)}function q(n,e,t,r){if("string"==typeof n&&"number"==typeof e){var o=z(n);return"rgba("+o.red+","+o.green+","+o.blue+","+e+")"}if("number"==typeof n&&"number"==typeof e&&"number"==typeof t&&"number"==typeof r)return r>=1?F(n,e,t):"rgba("+n+","+e+","+t+","+r+")";if("object"==typeof n&&void 0===e&&void 0===t&&void 0===r)return n.alpha>=1?F(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")";throw new m(7)}function C(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):C(n,e,r)}}function B(n){return C(n,n.length,[])}function D(n,e){if("transparent"===e)return e;var t,r=function(n){return function(n){var e,t=n.red/255,r=n.green/255,o=n.blue/255,a=Math.max(t,r,o),i=Math.min(t,r,o),u=(a+i)/2;if(a===i)return void 0!==n.alpha?{hue:0,saturation:0,lightness:u,alpha:n.alpha}:{hue:0,saturation:0,lightness:u};var f=a-i,l=u>.5?f/(2-a-i):f/(a+i);switch(a){case t:e=(r-o)/f+(r<o?6:0);break;case r:e=(o-t)/f+2;break;default:e=(t-r)/f+4}return e*=60,void 0!==n.alpha?{hue:e,saturation:l,lightness:u,alpha:n.alpha}:{hue:e,saturation:l,lightness:u}}(z(n))}(e);return function(n){if("object"!=typeof n)throw new m(8);if(function(n){return"number"==typeof n.red&&"number"==typeof n.green&&"number"==typeof n.blue&&"number"==typeof n.alpha}(n))return q(n);if(function(n){return"number"==typeof n.red&&"number"==typeof n.green&&"number"==typeof n.blue&&("number"!=typeof n.alpha||void 0===n.alpha)}(n))return F(n);if(function(n){return"number"==typeof n.hue&&"number"==typeof n.saturation&&"number"==typeof n.lightness&&"number"==typeof n.alpha}(n))return function(n,e,t,r){if("object"==typeof n)return n.alpha>=1?O(n.hue,n.saturation,n.lightness):"rgba("+y(n.hue,n.saturation,n.lightness)+","+n.alpha+")";throw new m(2)}(n);if(function(n){return"number"==typeof n.hue&&"number"==typeof n.saturation&&"number"==typeof n.lightness&&("number"!=typeof n.alpha||void 0===n.alpha)}(n))return function(n,e,t){if("object"==typeof n)return O(n.hue,n.saturation,n.lightness);throw new m(1)}(n);throw new m(8)}(l({},r,{lightness:(t=r.lightness+parseFloat(n),Math.max(0,Math.min(1,t)))}))}var L=B(D);function T(){return(T=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var P=/[\'\"]/,H=["children","options"],N={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},G={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},Z=["style","script"],J=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,U=/mailto:/i,V=/\n{2,}$/,W=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,X=/^ *> ?/gm,K=/^ {2,}\n/,Q=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,Y=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,nn=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,en=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,tn=/^(?:\n *)*\n/,rn=/\r\n?/g,on=/^\[\^([^\]]+)](:.*)\n/,an=/^\[\^([^\]]+)]/,un=/\f/g,fn=/^\s*?\[(x|\s)\]/,ln=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,cn=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,sn=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,dn=/&([a-z]+);/g,pn=/^<!--[\s\S]*?(?:-->)/,gn=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,mn=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,bn=/^\{.*\}$/,hn=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,yn=/^<([^ >]+@[^ >]+)>/,vn=/^<([^ >]+:\/[^ >]+)>/,kn=/ *\n+$/,wn=/(?:^|\n)( *)$/,xn=/-([a-z])?/gi,In=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,_n=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,Sn=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,jn=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,$n=/^\[([^\]]*)\] ?\[([^\]]*)\]/,zn=/(\[|\])/g,Mn=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,En=/\t/g,Rn=/^ *\| */,An=/(^ *\||\| *$)/g,On=/ *$/,Fn=/^ *:-+: *$/,qn=/^ *:-+ *$/,Cn=/^ *-+: *$/,Bn=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Dn=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,Ln=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,Tn=/^\\([^0-9A-Za-z\s])/,Pn=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,Hn=/(^\n+|\n+$|\s+$)/g,Nn=/^([ \t]*)/,Gn=/\\([^0-9A-Z\s])/gi,Zn=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),Jn=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),Un=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),Vn="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",Wn=new RegExp("^\\[("+Vn+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Xn=new RegExp("^!\\[("+Vn+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Kn=[W,nn,Y,ln,cn,sn,pn,mn,Jn,Un,In,_n];function Qn(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Yn(n){return Cn.test(n)?"right":Fn.test(n)?"center":qn.test(n)?"left":null}function ne(n,e,t){var r=t.t;t.t=!0;var o=e(n.trim(),t);t.t=r;var a=[[]];return o.forEach(function(n,e){"tableSeparator"===n.type?0!==e&&e!==o.length-1&&a.push([]):("text"!==n.type||null!=o[e+1]&&"tableSeparator"!==o[e+1].type||(n.content=n.content.replace(On,"")),a[a.length-1].push(n))}),a}function ee(n,e,t){t.o=!0;var r=ne(n[1],e,t),o=n[2].replace(An,"").split("|").map(Yn),a=function(n,e,t){return n.trim().split("\n").map(function(n){return ne(n,e,t)})}(n[3],e,t);return t.o=!1,{align:o,cells:a,header:r,type:"table"}}function te(n,e){return null==n.align[e]?{}:{textAlign:n.align[e]}}function re(n){return function(e,t){return t.o?n.exec(e):null}}function oe(n){return function(e,t){return t.o||t.u?n.exec(e):null}}function ae(n){return function(e,t){return t.o||t.u?null:n.exec(e)}}function ie(n){return function(e){return n.exec(e)}}function ue(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(n){return null}return n}function fe(n){return n.replace(Gn,"$1")}function le(n,e,t){var r=t.o||!1,o=t.u||!1;t.o=!0,t.u=!0;var a=n(e,t);return t.o=r,t.u=o,a}function ce(n,e,t){var r=t.o||!1,o=t.u||!1;t.o=!1,t.u=!0;var a=n(e,t);return t.o=r,t.u=o,a}function se(n,e,t){return t.o=!1,n(e+"\n\n",t)}var de,pe,ge,me,be,he,ye,ve,ke,we,xe,Ie=function(n,e,t){return{content:le(e,n[1],t)}};function _e(){return{}}function Se(){return null}function je(){return[].slice.call(arguments).filter(Boolean).join(" ")}function $e(n,e,t){for(var r=n,o=e.split(".");o.length&&void 0!==(r=r[o[0]]);)o.shift();return r||t}function ze(n,e){var t=$e(e,n);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:$e(e,n+".component",n):n}function Me(n,e){void 0===e&&(e={}),e.overrides=e.overrides||{},e.slugify=e.slugify||Qn,e.namedCodesToUnicode=e.namedCodesToUnicode?T({},G,e.namedCodesToUnicode):G;var t=e.createElement||o.default.createElement;function r(n,r){var o=$e(e.overrides,n+".props",{});return t.apply(void 0,[ze(n,e.overrides),T({},r,o,{className:je(null==r?void 0:r.className,o.className)||void 0})].concat([].slice.call(arguments,2)))}function a(n){var t=!1;e.forceInline?t=!0:e.forceBlock||(t=!1===Mn.test(n));var a=p(d(t?n:n.replace(Hn,"")+"\n\n",{o:t}));if(null===e.wrapper)return a;var i,u=e.wrapper||(t?"span":"div");if(a.length>1||e.forceWrapper)i=a;else{if(1===a.length)return"string"==typeof(i=a[0])?r("span",{key:"outer"},i):i;i=null}return o.default.createElement(u,{key:"outer"},i)}function i(n){var e=n.match(J);return e?e.reduce(function(n,e,t){var r,i=e.indexOf("=");if(-1!==i){var u=(r=e.slice(0,i),-1!==r.indexOf("-")&&null===r.match(gn)&&(r=r.replace(xn,function(n,e){return e.toUpperCase()})),r).trim(),f=function(n){return n?(P.test(n.charAt(0))&&(n=n.substr(1)),P.test(n.charAt(n.length-1))&&(n=n.substr(0,n.length-1)),n):""}(e.slice(i+1).trim()),l=N[u]||u,c=n[l]=function(n,e){return"style"===n?e.split(/;\s?/).reduce(function(n,e){var t=e.slice(0,e.indexOf(":"));return n[t.replace(/(-[a-z])/g,function(n){return n[1].toUpperCase()})]=e.slice(t.length+1).trim(),n},{}):"href"===n?ue(e):(e.match(bn)&&(e=e.slice(1,e.length-1)),"true"===e||"false"!==e&&e)}(u,f);"string"==typeof c&&(sn.test(c)||mn.test(c))&&(n[l]=o.default.cloneElement(a(c.trim()),{key:t}))}else"style"!==e&&(n[N[e]||e]=!0);return n},{}):void 0}var u=[],f={},l={blockQuote:{i:ae(W),l:de.HIGH,v:function(n,e,t){return{content:e(n[0].replace(X,""),t)}},p:function(n,e,t){return r("blockquote",{key:t.m},e(n.content,t))}},breakLine:{i:ie(K),l:de.HIGH,v:_e,p:function(n,e,t){return r("br",{key:t.m})}},breakThematic:{i:ae(Q),l:de.HIGH,v:_e,p:function(n,e,t){return r("hr",{key:t.m})}},codeBlock:{i:ae(nn),l:de.MAX,v:function(n){return{content:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},p:function(n,e,t){return r("pre",{key:t.m},r("code",{className:n.lang?"lang-"+n.lang:""},n.content))}},codeFenced:{i:ae(Y),l:de.MAX,v:function(n){return{content:n[3],lang:n[2]||void 0,type:"codeBlock"}}},codeInline:{i:oe(en),l:de.LOW,v:function(n){return{content:n[2]}},p:function(n,e,t){return r("code",{key:t.m},n.content)}},footnote:{i:ae(on),l:de.MAX,v:function(n){return u.push({footnote:n[2],identifier:n[1]}),{}},p:Se},footnoteReference:{i:re(an),l:de.HIGH,v:function(n){return{content:n[1],target:"#"+e.slugify(n[1])}},p:function(n,e,t){return r("a",{key:t.m,href:ue(n.target)},r("sup",{key:t.m},n.content))}},gfmTask:{i:re(fn),l:de.HIGH,v:function(n){return{completed:"x"===n[1].toLowerCase()}},p:function(n,e,t){return r("input",{checked:n.completed,key:t.m,readOnly:!0,type:"checkbox"})}},heading:{i:ae(ln),l:de.HIGH,v:function(n,t,r){return{content:le(t,n[2],r),id:e.slugify(n[2]),level:n[1].length}},p:function(n,e,t){return n.tag="h"+n.level,r(n.tag,{id:n.id,key:t.m},e(n.content,t))}},headingSetext:{i:ae(cn),l:de.MAX,v:function(n,e,t){return{content:le(e,n[1],t),level:"="===n[2]?1:2,type:"heading"}}},htmlComment:{i:ie(pn),l:de.HIGH,v:function(){return{}},p:Se},image:{i:oe(Xn),l:de.HIGH,v:function(n){return{alt:n[1],target:fe(n[2]),title:n[3]}},p:function(n,e,t){return r("img",{key:t.m,alt:n.alt||void 0,title:n.title||void 0,src:ue(n.target)})}},link:{i:re(Wn),l:de.LOW,v:function(n,e,t){return{content:ce(e,n[1],t),target:fe(n[2]),title:n[3]}},p:function(n,e,t){return r("a",{key:t.m,href:ue(n.target),title:n.title},e(n.content,t))}},linkAngleBraceStyleDetector:{i:re(vn),l:de.MAX,v:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],type:"link"}}},linkBareUrlDetector:{i:function(n,e){return e.g?null:re(hn)(n,e)},l:de.MAX,v:function(n){return{content:[{content:n[1],type:"text"}],target:n[1],title:void 0,type:"link"}}},linkMailtoDetector:{i:re(yn),l:de.MAX,v:function(n){var e=n[1],t=n[1];return U.test(t)||(t="mailto:"+t),{content:[{content:e.replace("mailto:",""),type:"text"}],target:t,type:"link"}}},list:{i:function(n,e,t){var r=wn.exec(t);return!r||!e.h&&e.o?null:Un.exec(n=r[1]+n)},l:de.HIGH,v:function(n,e,t){var r=n[2],o=r.length>1,a=o?+r:void 0,i=n[0].replace(V,"\n").match(Jn),u=!1;return{items:i.map(function(n,r){var o=Zn.exec(n)[0].length,a=new RegExp("^ {1,"+o+"}","gm"),f=n.replace(a,"").replace(Zn,""),l=r===i.length-1,c=-1!==f.indexOf("\n\n")||l&&u;u=c;var s,d=t.o,p=t.h;t.h=!0,c?(t.o=!1,s=f.replace(kn,"\n\n")):(t.o=!0,s=f.replace(kn,""));var g=e(s,t);return t.o=d,t.h=p,g}),ordered:o,start:a}},p:function(n,e,t){return r(n.ordered?"ol":"ul",{key:t.m,start:n.start},n.items.map(function(n,o){return r("li",{key:o},e(n,t))}))}},newlineCoalescer:{i:ae(tn),l:de.LOW,v:_e,p:function(){return"\n"}},paragraph:{i:ae(_n),l:de.LOW,v:Ie,p:function(n,e,t){return r("p",{key:t.m},e(n.content,t))}},ref:{i:re(Sn),l:de.MAX,v:function(n){return f[n[1]]={target:n[2],title:n[4]},{}},p:Se},refImage:{i:oe(jn),l:de.MAX,v:function(n){return{alt:n[1]||void 0,ref:n[2]}},p:function(n,e,t){return r("img",{key:t.m,alt:n.alt,src:ue(f[n.ref].target),title:f[n.ref].title})}},refLink:{i:re($n),l:de.MAX,v:function(n,e,t){return{content:e(n[1],t),fallbackContent:e(n[0].replace(zn,"\\$1"),t),ref:n[2]}},p:function(n,e,t){return f[n.ref]?r("a",{key:t.m,href:ue(f[n.ref].target),title:f[n.ref].title},e(n.content,t)):r("span",{key:t.m},e(n.fallbackContent,t))}},table:{i:ae(In),l:de.HIGH,v:ee,p:function(n,e,t){return r("table",{key:t.m},r("thead",null,r("tr",null,n.header.map(function(o,a){return r("th",{key:a,style:te(n,a)},e(o,t))}))),r("tbody",null,n.cells.map(function(o,a){return r("tr",{key:a},o.map(function(o,a){return r("td",{key:a,style:te(n,a)},e(o,t))}))})))}},tableSeparator:{i:function(n,e){return e.t?Rn.exec(n):null},l:de.HIGH,v:function(){return{type:"tableSeparator"}},p:function(){return" | "}},text:{i:ie(Pn),l:de.MIN,v:function(n){return{content:n[0].replace(dn,function(n,t){return e.namedCodesToUnicode[t]?e.namedCodesToUnicode[t]:n})}},p:function(n){return n.content}},textBolded:{i:oe(Bn),l:de.MED,v:function(n,e,t){return{content:e(n[2],t)}},p:function(n,e,t){return r("strong",{key:t.m},e(n.content,t))}},textEmphasized:{i:oe(Dn),l:de.LOW,v:function(n,e,t){return{content:e(n[2],t)}},p:function(n,e,t){return r("em",{key:t.m},e(n.content,t))}},textEscaped:{i:oe(Tn),l:de.HIGH,v:function(n){return{content:n[1],type:"text"}}},textStrikethroughed:{i:oe(Ln),l:de.LOW,v:Ie,p:function(n,e,t){return r("del",{key:t.m},e(n.content,t))}}};!0!==e.disableParsingRawHTML&&(l.htmlBlock={i:ie(sn),l:de.HIGH,v:function(n,e,t){var r,o=n[3].match(Nn),a=new RegExp("^"+o[1],"gm"),u=n[3].replace(a,""),f=(r=u,Kn.some(function(n){return n.test(r)})?se:le),l=n[1].toLowerCase(),c=-1!==Z.indexOf(l);t.g=t.g||"a"===l;var s=c?n[3]:f(e,u,t);return t.g=!1,{attrs:i(n[2]),content:s,noInnerParse:c,tag:c?l:n[1]}},p:function(n,e,t){return r(n.tag,T({key:t.m},n.attrs),n.noInnerParse?n.content:e(n.content,t))}},l.htmlSelfClosing={i:ie(mn),l:de.HIGH,v:function(n){return{attrs:i(n[2]||""),tag:n[1]}},p:function(n,e,t){return r(n.tag,T({},n.attrs,{key:t.m}))}});var c,s,d=function(n){var e=Object.keys(n);function t(r,o){for(var a=[],i="";r;)for(var u=0;u<e.length;){var f=e[u],l=n[f],c=l.i(r,o,i);if(c){var s=c[0];r=r.substring(s.length);var d=l.v(c,t,o);null==d.type&&(d.type=f),a.push(d),i=s;break}u++}return a}return e.sort(function(e,t){var r=n[e].l,o=n[t].l;return r!==o?r-o:e<t?-1:1}),function(n,e){return t(function(n){return n.replace(rn,"\n").replace(un,"").replace(En,"    ")}(n),e)}}(l),p=(s=l,c=function(n,e,t){return s[n.type].p(n,e,t)},function n(e,t){if(void 0===t&&(t={}),Array.isArray(e)){for(var r=t.m,o=[],a=!1,i=0;i<e.length;i++){t.m=i;var u=n(e[i],t),f="string"==typeof u;f&&a?o[o.length-1]+=u:o.push(u),a=f}return t.m=r,o}return c(e,n,t)}),g=a(n);return u.length&&g.props.children.push(r("footer",{key:"footer"},u.map(function(n){return r("div",{id:e.slugify(n.identifier),key:n.identifier},n.identifier,p(d(n.footnote,{o:!0})))}))),g}function Ee(n){var e=n.children,t=n.options,r=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e.indexOf(t=a[r])>=0||(o[t]=n[t]);return o}(n,H);return o.default.cloneElement(Me(e,t),r)}function Re(){var n=o.default.useState(document.getElementById("sample-content").textContent.trim()),e=n[0],t=n[1],r=o.default.useCallback(function(n){return t(n.target.value)},[]);return o.default.createElement("main",null,o.default.createElement(Fe,null),o.default.createElement("a",{href:"https://support.eji.org/give/153413/#!/donation/checkout",rel:"noopener noreferrer",target:"_blank",style:{background:"#000",color:"#fff",textAlign:"center",textDecoration:"none",fontSize:"16px",padding:"0.5em",margin:"-3rem -3rem 2em",position:"sticky",top:0}},"#BlackLivesMatter ✊🏿"," ",o.default.createElement("span",{style:{textDecoration:"underline"}},"Support the Equal Justice Initiative")),o.default.createElement(qe,null,o.default.createElement("a",{target:"_blank",href:"https://github.com/probablyup/markdown-to-jsx",title:"Check out the markdown-to-jsx source code",rel:"noopener noreferrer"},o.default.createElement("img",{src:"./images/logo.svg",alt:"markdown-to-jsx logo"})),o.default.createElement(Ce,null,o.default.createElement("h1",null,o.default.createElement("code",null,"markdown-to-jsx")," is an easy-to-use markdown component that takes Github-flavored Markdown (GFM) and makes native JSX without dangerous hacks. "),o.default.createElement("h2",null,"It's lightweight, customizable, and happily supports React-like libraries.")),o.default.createElement(Be,null,"See the"," ",o.default.createElement("a",{target:"_blank",href:"https://github.com/probablyup/markdown-to-jsx/blob/main/README.md",rel:"noopener noreferrer"},"project README")," ","for detailed installation & usage instructions.")),o.default.createElement(Le,null,o.default.createElement(Te,{onInput:r,value:e}),o.default.createElement(Pe,null,o.default.createElement(Ee,{options:Ne},e))))}(pe=de||(de={}))[pe.MAX=0]="MAX",pe[pe.HIGH=1]="HIGH",pe[pe.MED=2]="MED",pe[pe.LOW=3]="LOW",pe[pe.MIN=4]="MIN";var Ae="rgba(255, 255, 255, 0.5)",Oe="#fefefe",Fe=t.createGlobalStyle(ge||(ge=f(["\n\t*,\n\t*::before,\n\t*::after {\n\t\tbox-sizing: border-box;\n\t\toutline-color: ",";\n\t}\n\n\thtml,\n\tbody,\n\t#root,\n\tmain {\n\t\tmargin: 0;\n\t\tmin-height: 100vh;\n\t}\n\n\thtml {\n\t\tbackground: #222;\n\t\tcolor: ",";\n\t\tfont-family: 'Source Sans Pro', Helvetica Neue, Helvetica, sans-serif;\n\t\tfont-size: 14px;\n\t\tline-height: 1.5;\n\t}\n\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tmargin: 0 0 1rem;\n\t}\n\n\th1 {\n\t\tfont-size: 2rem;\n\t}\n\n\th2 {\n\t\tfont-size: 1.8rem;\n\t}\n\n\th3 {\n\t\tfont-size: 1.6rem;\n\t}\n\n\th4 {\n\t\tfont-size: 1.4rem;\n\t}\n\n\th5 {\n\t\tfont-size: 1.2rem;\n\t}\n\n\th6 {\n\t\tfont-size: 1rem;\n\t}\n\n\ta {\n\t\tcolor: ",";\n\t\ttransition: color 200ms ease;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n\tcode {\n\t\tbackground: ",";\n\t\tdisplay: inline-block;\n\t\tpadding: 0 2px;\n\t}\n\n\tpre code {\n\t\tbackground: transparent;\n\t\tborder: 0;\n\t\tdisplay: block;\n\t\tpadding: 1em;\n\t}\n\n\tmain {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 3rem 1.5rem 0;\n\t\tmargin: 0;\n\n\t\t@media all and (min-width: 1024px) {\n\t\t\tpadding: 3rem;\n\t\t}\n\t}\n"])),Ae,Oe,Ae,q(Ae,.75),q(Ae,.05)),qe=i.default.header(me||(me=f(["\n  flex-shrink: 0;\n  margin-bottom: 2em;\n  text-align: center;\n\n  img {\n    height: 100px;\n  }\n"]))),Ce=i.default.p(be||(be=f(["\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 60vw;\n\n  h1,\n  h2 {\n    font: inherit;\n  }\n\n  @media all and (max-width: 500px) {\n    max-width: none;\n  }\n\n  @media all and (max-width: 1023px) {\n    h1,\n    h2 {\n      display: block;\n      margin-bottom: 1.5rem;\n    }\n  }\n"]))),Be=i.default.p(he||(he=f(["\n  color: ",";\n"])),L(.2,Oe)),De=t.css(ye||(ye=f(["\n  flex: 0 0 50%;\n  padding: 1em;\n"]))),Le=i.default.section(ve||(ve=f(["\n  display: flex;\n  flex-grow: 1;\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n\n  @media all and (min-width: 1024px) {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  @media all and (max-width: 500px) {\n    flex-direction: column;\n  }\n"]))),Te=i.default.textarea(ke||(ke=f(["\n  ",";\n  background: ",";\n  border: 0;\n  color: inherit;\n  position: sticky;\n  top: 0;\n  font-family: 'Source Code Pro', Consolas, Monaco, monospace;\n  font-size: inherit;\n  max-height: 100vh;\n\n  @media all and (max-width: 500px) {\n    height: 300px;\n    position: relative;\n  }\n"])),De,q(Ae,.05)),Pe=i.default.div(we||(we=f(["\n  ",";\n  padding-left: 2rem;\n  padding-right: 1rem;\n  overflow: auto;\n  overflow-x: hidden;\n"])),De),He=i.default.button(xe||(xe=f(["\n  background: #444;\n  color: #ddd;\n  cursor: pointer;\n  font: inherit;\n  transition: background 200ms ease;\n\n  &:hover,\n  &:focus {\n    background: #222;\n  }\n\n  &:active {\n    background: #000;\n  }\n"]))),Ne={overrides:{MyComponent:{component:function(n){return o.default.createElement(He,u({},n,{onClick:function(){alert("Look ma, I'm a real component!")}}))}}}};a.default.render(o.default.createElement(Re,null),document.getElementById("root"))}(React,ReactDOM,styled);
//# sourceMappingURL=markdown-to-jsx.js.map
