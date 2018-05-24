/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*
 * metismenu - v2.0.2
 * A jQuery menu plugin
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */

!function(a){"use strict";function b(){var a=document.createElement("mm"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}function c(b){return this.each(function(){var c=a(this),d=c.data("mm"),f=a.extend({},e.DEFAULTS,c.data(),"object"==typeof b&&b);d||c.data("mm",d=new e(this,f)),"string"==typeof b&&d[b]()})}a.fn.emulateTransitionEnd=function(b){var c=!1,e=this;a(this).one("mmTransitionEnd",function(){c=!0});var f=function(){c||a(e).trigger(d.end)};return setTimeout(f,b),this};var d=b();d&&(a.event.special.mmTransitionEnd={bindType:d.end,delegateType:d.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}});var e=function(b,c){this.$element=a(b),this.options=a.extend({},e.DEFAULTS,c),this.transitioning=null,this.init()};e.TRANSITION_DURATION=350,e.DEFAULTS={toggle:!0,doubleTapToGo:!1,activeClass:"active"},e.prototype.init=function(){var b=this,c=this.options.activeClass;this.$element.find("li."+c).has("ul").children("ul").addClass("collapse in"),this.$element.find("li").not("."+c).has("ul").children("ul").addClass("collapse"),this.options.doubleTapToGo&&this.$element.find("li."+c).has("ul").children("a").addClass("doubleTapToGo"),this.$element.find("li").has("ul").children("a").on("click.metisMenu",function(d){var e=a(this),f=e.parent("li"),g=f.children("ul");return d.preventDefault(),f.hasClass(c)?b.hide(g):b.show(g),b.options.doubleTapToGo&&b.doubleTapToGo(e)&&"#"!==e.attr("href")&&""!==e.attr("href")?(d.stopPropagation(),void(document.location=e.attr("href"))):void 0})},e.prototype.doubleTapToGo=function(a){var b=this.$element;return a.hasClass("doubleTapToGo")?(a.removeClass("doubleTapToGo"),!0):a.parent().children("ul").length?(b.find(".doubleTapToGo").removeClass("doubleTapToGo"),a.addClass("doubleTapToGo"),!1):void 0},e.prototype.show=function(b){var c=this.options.activeClass,f=a(b),g=f.parent("li");if(!this.transitioning&&!f.hasClass("in")){g.addClass(c),this.options.toggle&&this.hide(g.siblings().children("ul.in")),f.removeClass("collapse").addClass("collapsing").height(0),this.transitioning=1;var h=function(){f.removeClass("collapsing").addClass("collapse in").height(""),this.transitioning=0};return d?void f.one("mmTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(e.TRANSITION_DURATION).height(f[0].scrollHeight):h.call(this)}},e.prototype.hide=function(b){var c=this.options.activeClass,f=a(b);if(!this.transitioning&&f.hasClass("in")){f.parent("li").removeClass(c),f.height(f.height())[0].offsetHeight,f.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var g=function(){this.transitioning=0,f.removeClass("collapsing").addClass("collapse")};return d?void f.height(0).one("mmTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(e.TRANSITION_DURATION):g.call(this)}};var f=a.fn.metisMenu;a.fn.metisMenu=c,a.fn.metisMenu.Constructor=e,a.fn.metisMenu.noConflict=function(){return a.fn.metisMenu=f,this}}(jQuery);
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function(e){e.fn.extend({slimScroll:function(g){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function v(d){if(r){d=d||window.event;
    var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,e,g){k=!1;var f=d,h=b.outerHeight()-c.outerHeight();e&&(f=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),f=Math.min(Math.max(f,0),h),f=0<d?Math.ceil(f):Math.floor(f),c.css({top:f+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
    f=l*(b[0].scrollHeight-b.outerHeight());g&&(f=d,d=f/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(f);b.trigger("slimscrolling",~~f);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
    !0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.closest("."+a.barClass),h=b.closest("."+a.railClass);x();if(e.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",
    q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else if(!(e.isPlainObject(g)&&"destroy"in g)){a.height="auto"==a.height?b.parent().height():a.height;n=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=e("<div></div>").addClass(a.railClass).css({width:a.size,
    height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?
{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});
    h.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(m((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),
        m(0,!0)):"top"!==a.start&&(m(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
/*! pace 1.0.0 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);
/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a){"use strict";function b(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b?b.replace(this.re,this.ch):""}),b}function c(b){var c=arguments,d=b;[].shift.apply(c);var e,f=this.each(function(){var b=a(this);if(b.is("select")){var f=b.data("selectpicker"),g="object"==typeof d&&d;if(f){if(g)for(var h in g)g.hasOwnProperty(h)&&(f.options[h]=g[h])}else{var i=a.extend({},l.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),g);i.template=a.extend({},l.DEFAULTS.template,a.fn.selectpicker.defaults?a.fn.selectpicker.defaults.template:{},b.data().template,g.template),b.data("selectpicker",f=new l(this,i))}"string"==typeof d&&(e=f[d]instanceof Function?f[d].apply(f,c):f.options[d])}});return"undefined"!=typeof e?e:f}String.prototype.includes||!function(){var a={}.toString,b=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(a){}return c}(),c="".indexOf,d=function(b){if(null==this)throw new TypeError;var d=String(this);if(b&&"[object RegExp]"==a.call(b))throw new TypeError;var e=d.length,f=String(b),g=f.length,h=arguments.length>1?arguments[1]:void 0,i=h?Number(h):0;i!=i&&(i=0);var j=Math.min(Math.max(i,0),e);return!(g+j>e)&&c.call(d,f,i)!=-1};b?b(String.prototype,"includes",{value:d,configurable:!0,writable:!0}):String.prototype.includes=d}(),String.prototype.startsWith||!function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(a){}return c}(),b={}.toString,c=function(a){if(null==this)throw new TypeError;var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw new TypeError;var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),Object.keys||(Object.keys=function(a,b,c){c=[];for(b in a)c.hasOwnProperty.call(a,b)&&c.push(b);return c});var d={useDefault:!1,_set:a.valHooks.select.set};a.valHooks.select.set=function(b,c){return c&&!d.useDefault&&a(b).data("selected",!0),d._set.apply(this,arguments)};var e=null,f=function(){try{return new Event("change"),!0}catch(a){return!1}}();a.fn.triggerNative=function(a){var b,c=this[0];c.dispatchEvent?(f?b=new Event(a,{bubbles:!0}):(b=document.createEvent("Event"),b.initEvent(a,!0,!1)),c.dispatchEvent(b)):c.fireEvent?(b=document.createEventObject(),b.eventType=a,c.fireEvent("on"+a,b)):this.trigger(a)},a.expr.pseudos.icontains=function(b,c,d){var e=a(b).find("a"),f=(e.data("tokens")||e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase())},a.expr.pseudos.ibegins=function(b,c,d){var e=a(b).find("a"),f=(e.data("tokens")||e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase())},a.expr.pseudos.aicontains=function(b,c,d){var e=a(b).find("a"),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase())},a.expr.pseudos.aibegins=function(b,c,d){var e=a(b).find("a"),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase())};var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},h={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"},i=function(a){var b=function(b){return a[b]},c="(?:"+Object.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}},j=i(g),k=i(h),l=function(b,c){d.useDefault||(a.valHooks.select.set=d._set,d.useDefault=!0),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title"));var e=this.options.windowPadding;"number"==typeof e&&(this.options.windowPadding=[e,e,e,e]),this.val=l.prototype.val,this.render=l.prototype.render,this.refresh=l.prototype.refresh,this.setStyle=l.prototype.setStyle,this.selectAll=l.prototype.selectAll,this.deselectAll=l.prototype.deselectAll,this.destroy=l.prototype.destroy,this.remove=l.prototype.remove,this.show=l.prototype.show,this.hide=l.prototype.hide,this.init()};l.VERSION="1.12.4",l.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a,b){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0},l.prototype={constructor:l,init:function(){var b=this,c=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight===!0&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(a){b.$menuInner.attr("aria-expanded",!1),b.$element.trigger("hide.bs.select",a)},"hidden.bs.dropdown":function(a){b.$element.trigger("hidden.bs.select",a)},"show.bs.dropdown":function(a){b.$menuInner.attr("aria-expanded",!0),b.$element.trigger("show.bs.select",a)},"shown.bs.dropdown":function(a){b.$element.trigger("shown.bs.select",a)}}),b.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){b.$button.addClass("bs-invalid"),b.$element.on({"focus.bs.select":function(){b.$button.focus(),b.$element.off("focus.bs.select")},"shown.bs.select":function(){b.$element.val(b.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&b.$button.removeClass("bs-invalid"),b.$element.off("rendered.bs.select")}}),b.$button.on("blur.bs.select",function(){b.$element.focus().blur(),b.$button.off("blur.bs.select")})}),setTimeout(function(){b.$element.trigger("loaded.bs.select")})},createDropdown:function(){var b=this.multiple||this.options.showTick?" show-tick":"",c=this.$element.parent().hasClass("input-group")?" input-group-btn":"",d=this.autofocus?" autofocus":"",e=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",f=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+j(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",g=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",h=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",i='<div class="btn-group bootstrap-select'+b+c+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+d+' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open" role="combobox">'+e+f+g+'<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>'+h+"</div></div>";return a(i)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul")[0].innerHTML=b,a},reloadLi:function(){var a=this.createLi();this.$menuInner[0].innerHTML=a},createLi:function(){var c=this,d=[],e=0,f=document.createElement("option"),g=-1,h=function(a,b,c,d){return"<li"+("undefined"!=typeof c&&""!==c?' class="'+c+'"':"")+("undefined"!=typeof b&&null!==b?' data-original-index="'+b+'"':"")+("undefined"!=typeof d&&null!==d?'data-optgroup="'+d+'"':"")+">"+a+"</li>"},i=function(d,e,f,g){return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+(f?' style="'+f+'"':"")+(c.options.liveSearchNormalize?' data-normalized-text="'+b(j(a(d).html()))+'"':"")+("undefined"!=typeof g||null!==g?' data-tokens="'+g+'"':"")+' role="option">'+d+'<span class="'+c.options.iconBase+" "+c.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(g--,!this.$element.find(".bs-title-option").length)){var k=this.$element[0];f.className="bs-title-option",f.innerHTML=this.options.title,f.value="",k.insertBefore(f,k.firstChild);var l=a(k.options[k.selectedIndex]);void 0===l.attr("selected")&&void 0===this.$element.data("selected")&&(f.selected=!0)}var m=this.$element.find("option");return m.each(function(b){var f=a(this);if(g++,!f.hasClass("bs-title-option")){var k,l=this.className||"",n=j(this.style.cssText),o=f.data("content")?f.data("content"):f.html(),p=f.data("tokens")?f.data("tokens"):null,q="undefined"!=typeof f.data("subtext")?'<small class="text-muted">'+f.data("subtext")+"</small>":"",r="undefined"!=typeof f.data("icon")?'<span class="'+c.options.iconBase+" "+f.data("icon")+'"></span> ':"",s=f.parent(),t="OPTGROUP"===s[0].tagName,u=t&&s[0].disabled,v=this.disabled||u;if(""!==r&&v&&(r="<span>"+r+"</span>"),c.options.hideDisabled&&(v&&!t||u))return k=f.data("prevHiddenIndex"),f.next().data("prevHiddenIndex",void 0!==k?k:b),void g--;if(f.data("content")||(o=r+'<span class="text">'+o+q+"</span>"),t&&f.data("divider")!==!0){if(c.options.hideDisabled&&v){if(void 0===s.data("allOptionsDisabled")){var w=s.children();s.data("allOptionsDisabled",w.filter(":disabled").length===w.length)}if(s.data("allOptionsDisabled"))return void g--}var x=" "+s[0].className||"";if(0===f.index()){e+=1;var y=s[0].label,z="undefined"!=typeof s.data("subtext")?'<small class="text-muted">'+s.data("subtext")+"</small>":"",A=s.data("icon")?'<span class="'+c.options.iconBase+" "+s.data("icon")+'"></span> ':"";y=A+'<span class="text">'+j(y)+z+"</span>",0!==b&&d.length>0&&(g++,d.push(h("",null,"divider",e+"div"))),g++,d.push(h(y,null,"dropdown-header"+x,e))}if(c.options.hideDisabled&&v)return void g--;d.push(h(i(o,"opt "+l+x,n,p),b,"",e))}else if(f.data("divider")===!0)d.push(h("",b,"divider"));else if(f.data("hidden")===!0)k=f.data("prevHiddenIndex"),f.next().data("prevHiddenIndex",void 0!==k?k:b),d.push(h(i(o,l,n,p),b,"hidden is-hidden"));else{var B=this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName;if(!B&&c.options.hideDisabled&&(k=f.data("prevHiddenIndex"),void 0!==k)){var C=m.eq(k)[0].previousElementSibling;C&&"OPTGROUP"===C.tagName&&!C.disabled&&(B=!0)}B&&(g++,d.push(h("",null,"divider",e+"div"))),d.push(h(i(o,l,n,p),b))}c.liObj[b]=g}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),d.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c,d=this,e=this.$element.find("option");b!==!1&&e.each(function(a){var b=d.findLis().eq(d.liObj[a]);d.setDisabled(a,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,b),d.setSelected(a,this.selected,b)}),this.togglePlaceholder(),this.tabIndex();var f=e.map(function(){if(this.selected){if(d.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var b,c=a(this),e=c.data("icon")&&d.options.showIcon?'<i class="'+d.options.iconBase+" "+c.data("icon")+'"></i> ':"";return b=d.options.showSubtext&&c.data("subtext")&&!d.multiple?' <small class="text-muted">'+c.data("subtext")+"</small>":"","undefined"!=typeof c.attr("title")?c.attr("title"):c.data("content")&&d.options.showContent?c.data("content").toString():e+c.html()+b}}).toArray(),g=this.multiple?f.join(this.options.multipleSeparator):f[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");if(h.length>1&&f.length>h[1]||1==h.length&&f.length>=2){c=this.options.hideDisabled?", [disabled]":"";var i=e.not('[data-divider="true"], [data-hidden="true"]'+c).length,j="function"==typeof this.options.countSelectedText?this.options.countSelectedText(f.length,i):this.options.countSelectedText;g=j.replace("{0}",f.length.toString()).replace("{1}",i.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(g=this.options.title),g||(g="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",k(a.trim(g.replace(/<[^>]*>?/g,"")))),this.$button.children(".filter-option").html(g),this.$element.trigger("rendered.bs.select")},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(b){if(b||this.options.size!==!1&&!this.sizeInfo){var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("ul"),f=document.createElement("li"),g=document.createElement("li"),h=document.createElement("a"),i=document.createElement("span"),j=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,k=this.options.liveSearch?document.createElement("div"):null,l=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,m=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(i.className="text",c.className=this.$menu[0].parentNode.className+" open",d.className="dropdown-menu open",e.className="dropdown-menu inner",f.className="divider",i.appendChild(document.createTextNode("Inner text")),h.appendChild(i),g.appendChild(h),e.appendChild(g),e.appendChild(f),j&&d.appendChild(j),k){var n=document.createElement("input");k.className="bs-searchbox",n.className="form-control",k.appendChild(n),d.appendChild(k)}l&&d.appendChild(l),d.appendChild(e),m&&d.appendChild(m),c.appendChild(d),document.body.appendChild(c);var o=h.offsetHeight,p=j?j.offsetHeight:0,q=k?k.offsetHeight:0,r=l?l.offsetHeight:0,s=m?m.offsetHeight:0,t=a(f).outerHeight(!0),u="function"==typeof getComputedStyle&&getComputedStyle(d),v=u?null:a(d),w={vert:parseInt(u?u.paddingTop:v.css("paddingTop"))+parseInt(u?u.paddingBottom:v.css("paddingBottom"))+parseInt(u?u.borderTopWidth:v.css("borderTopWidth"))+parseInt(u?u.borderBottomWidth:v.css("borderBottomWidth")),horiz:parseInt(u?u.paddingLeft:v.css("paddingLeft"))+parseInt(u?u.paddingRight:v.css("paddingRight"))+parseInt(u?u.borderLeftWidth:v.css("borderLeftWidth"))+parseInt(u?u.borderRightWidth:v.css("borderRightWidth"))},x={vert:w.vert+parseInt(u?u.marginTop:v.css("marginTop"))+parseInt(u?u.marginBottom:v.css("marginBottom"))+2,horiz:w.horiz+parseInt(u?u.marginLeft:v.css("marginLeft"))+parseInt(u?u.marginRight:v.css("marginRight"))+2};document.body.removeChild(c),this.sizeInfo={liHeight:o,headerHeight:p,searchHeight:q,actionsHeight:r,doneButtonHeight:s,dividerHeight:t,menuPadding:w,menuExtras:x}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var b,c,d,e,f,g,h,i,j=this,k=this.$menu,l=this.$menuInner,m=a(window),n=this.$newElement[0].offsetHeight,o=this.$newElement[0].offsetWidth,p=this.sizeInfo.liHeight,q=this.sizeInfo.headerHeight,r=this.sizeInfo.searchHeight,s=this.sizeInfo.actionsHeight,t=this.sizeInfo.doneButtonHeight,u=this.sizeInfo.dividerHeight,v=this.sizeInfo.menuPadding,w=this.sizeInfo.menuExtras,x=this.options.hideDisabled?".disabled":"",y=function(){var b,c=j.$newElement.offset(),d=a(j.options.container);j.options.container&&!d.is("body")?(b=d.offset(),b.top+=parseInt(d.css("borderTopWidth")),b.left+=parseInt(d.css("borderLeftWidth"))):b={top:0,left:0};var e=j.options.windowPadding;f=c.top-b.top-m.scrollTop(),g=m.height()-f-n-b.top-e[2],h=c.left-b.left-m.scrollLeft(),i=m.width()-h-o-b.left-e[1],f-=e[0],h-=e[3]};if(y(),"auto"===this.options.size){var z=function(){var m,n=function(b,c){return function(d){return c?d.classList?d.classList.contains(b):a(d).hasClass(b):!(d.classList?d.classList.contains(b):a(d).hasClass(b))}},u=j.$menuInner[0].getElementsByTagName("li"),x=Array.prototype.filter?Array.prototype.filter.call(u,n("hidden",!1)):j.$lis.not(".hidden"),z=Array.prototype.filter?Array.prototype.filter.call(x,n("dropdown-header",!0)):x.filter(".dropdown-header");y(),b=g-w.vert,c=i-w.horiz,j.options.container?(k.data("height")||k.data("height",k.height()),d=k.data("height"),k.data("width")||k.data("width",k.width()),e=k.data("width")):(d=k.height(),e=k.width()),j.options.dropupAuto&&j.$newElement.toggleClass("dropup",f>g&&b-w.vert<d),j.$newElement.hasClass("dropup")&&(b=f-w.vert),"auto"===j.options.dropdownAlignRight&&k.toggleClass("dropdown-menu-right",h>i&&c-w.horiz<e-o),m=x.length+z.length>3?3*p+w.vert-2:0,k.css({"max-height":b+"px",overflow:"hidden","min-height":m+q+r+s+t+"px"}),l.css({"max-height":b-q-r-s-t-v.vert+"px","overflow-y":"auto","min-height":Math.max(m-v.vert,0)+"px"})};z(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",z),m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",z)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(x).length>this.options.size){var A=this.$lis.not(".divider").not(x).children().slice(0,this.options.size).last().parent().index(),B=this.$lis.slice(0,A+1).filter(".divider").length;b=p*this.options.size+B*u+v.vert,j.options.container?(k.data("height")||k.data("height",k.height()),d=k.data("height")):d=k.height(),j.options.dropupAuto&&this.$newElement.toggleClass("dropup",f>g&&b-w.vert<d),k.css({"max-height":b+q+r+s+t+"px",overflow:"hidden","min-height":""}),l.css({"max-height":b-v.vert+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var a=this.$menu.parent().clone().appendTo("body"),b=this.options.container?this.$newElement.clone().appendTo("body"):a,c=a.children(".dropdown-menu").outerWidth(),d=b.css("width","auto").children("button").outerWidth();a.remove(),b.remove(),this.$newElement.css("width",Math.max(c,d)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=a('<div class="bs-container" />');var b,c,d,e=this,f=a(this.options.container),g=function(a){e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),f.is("body")?c={top:0,left:0}:(c=f.offset(),c.top+=parseInt(f.css("borderTopWidth"))-f.scrollTop(),c.left+=parseInt(f.css("borderLeftWidth"))-f.scrollLeft()),d=a.hasClass("dropup")?0:a[0].offsetHeight,e.$bsContainer.css({top:b.top-c.top+d,left:b.left-c.left,width:a[0].offsetWidth})};this.$button.on("click",function(){var b=a(this);e.isDisabled()||(g(e.$newElement),e.$bsContainer.appendTo(e.options.container).toggleClass("open",!b.hasClass("open")).append(e.$menu))}),a(window).on("resize scroll",function(){g(e.$newElement)}),this.$element.on("hide.bs.select",function(){e.$menu.data("height",e.$menu.height()),e.$bsContainer.detach()})},setSelected:function(a,b,c){c||(this.togglePlaceholder(),c=this.findLis().eq(this.liObj[a])),c.toggleClass("selected",b).find("a").attr("aria-selected",b)},setDisabled:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),b?c.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1).attr("aria-disabled",!0):c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0).attr("aria-disabled",!1)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var a=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled").attr("aria-disabled",!1)),this.$button.attr("tabindex")!=-1||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!a.isDisabled()})},togglePlaceholder:function(){var a=this.$element.val();this.$button.toggleClass("bs-placeholder",null===a||""===a||a.constructor===Array&&0===a.length)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&this.$element.attr("tabindex")!==-98&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var b=this,c=a(document);c.data("spaceSelect",!1),this.$button.on("keyup",function(a){/(32)/.test(a.keyCode.toString(10))&&c.data("spaceSelect")&&(a.preventDefault(),c.data("spaceSelect",!1))}),this.$button.on("click",function(){b.setSize()}),this.$element.on("shown.bs.select",function(){if(b.options.liveSearch||b.multiple){if(!b.multiple){var a=b.liObj[b.$element[0].selectedIndex];if("number"!=typeof a||b.options.size===!1)return;var c=b.$lis.eq(a)[0].offsetTop-b.$menuInner[0].offsetTop;c=c-b.$menuInner[0].offsetHeight/2+b.sizeInfo.liHeight/2,b.$menuInner[0].scrollTop=c}}else b.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(c){var d=a(this),f=d.parent().data("originalIndex"),g=b.$element.val(),h=b.$element.prop("selectedIndex"),i=!0;if(b.multiple&&1!==b.options.maxOptions&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var j=b.$element.find("option"),k=j.eq(f),l=k.prop("selected"),m=k.parent("optgroup"),n=b.options.maxOptions,o=m.data("maxOptions")||!1;if(b.multiple){if(k.prop("selected",!l),b.setSelected(f,!l),d.blur(),n!==!1||o!==!1){var p=n<j.filter(":selected").length,q=o<m.find("option:selected").length;if(n&&p||o&&q)if(n&&1==n)j.prop("selected",!1),k.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(f,!0);else if(o&&1==o){m.find("option:selected").prop("selected",!1),k.prop("selected",!0);var r=d.parent().data("optgroup");b.$menuInner.find('[data-optgroup="'+r+'"]').removeClass("selected"),b.setSelected(f,!0)}else{var s="string"==typeof b.options.maxOptionsText?[b.options.maxOptionsText,b.options.maxOptionsText]:b.options.maxOptionsText,t="function"==typeof s?s(n,o):s,u=t[0].replace("{n}",n),v=t[1].replace("{n}",o),w=a('<div class="notify"></div>');t[2]&&(u=u.replace("{var}",t[2][n>1?0:1]),v=v.replace("{var}",t[2][o>1?0:1])),k.prop("selected",!1),b.$menu.append(w),n&&p&&(w.append(a("<div>"+u+"</div>")),i=!1,b.$element.trigger("maxReached.bs.select")),o&&q&&(w.append(a("<div>"+v+"</div>")),i=!1,b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(f,!1)},10),w.delay(750).fadeOut(300,function(){a(this).remove()})}}}else j.prop("selected",!1),k.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected",!1),b.setSelected(f,!0);!b.multiple||b.multiple&&1===b.options.maxOptions?b.$button.focus():b.options.liveSearch&&b.$searchbox.focus(),i&&(g!=b.$element.val()&&b.multiple||h!=b.$element.prop("selectedIndex")&&!b.multiple)&&(e=[f,k.prop("selected"),l],b.$element.triggerNative("change"))}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(c){c.currentTarget==this&&(c.preventDefault(),c.stopPropagation(),b.options.liveSearch&&!a(c.target).hasClass("close")?b.$searchbox.focus():b.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.click()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll()}),this.$element.change(function(){b.render(!1),b.$element.trigger("changed.bs.select",e),e=null})},liveSearchListener:function(){var c=this,d=a('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api",function(){c.$menuInner.find(".active").removeClass("active"),c.$searchbox.val()&&(c.$searchbox.val(""),c.$lis.not(".is-hidden").removeClass("hidden"),d.parent().length&&d.remove()),c.multiple||c.$menuInner.find(".selected").addClass("active"),setTimeout(function(){c.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(c.$lis.not(".is-hidden").removeClass("hidden"),c.$lis.filter(".active").removeClass("active"),d.remove(),c.$searchbox.val()){var e,f=c.$lis.not(".is-hidden, .divider, .dropdown-header");if(e=c.options.liveSearchNormalize?f.not(":a"+c._searchStyle()+'("'+b(c.$searchbox.val())+'")'):f.not(":"+c._searchStyle()+'("'+c.$searchbox.val()+'")'),e.length===f.length)d.html(c.options.noneResultsText.replace("{0}",'"'+j(c.$searchbox.val())+'"')),c.$menuInner.append(d),c.$lis.addClass("hidden");else{e.addClass("hidden");var g,h=c.$lis.not(".hidden");h.each(function(b){var c=a(this);c.hasClass("divider")?void 0===g?c.addClass("hidden"):(g&&g.addClass("hidden"),g=c):c.hasClass("dropdown-header")&&h.eq(b+1).data("optgroup")!==c.data("optgroup")?c.addClass("hidden"):g=null}),g&&g.addClass("hidden"),f.not(".hidden").first().addClass("active"),c.$menuInner.scrollTop(0)}}})},_searchStyle:function(){var a={begins:"ibegins",startsWith:"ibegins"};return a[this.options.liveSearchStyle]||"icontains"},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},changeAll:function(b){if(this.multiple){"undefined"==typeof b&&(b=!0),this.findLis();var c=this.$element.find("option"),d=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),e=d.length,f=[];if(b){if(d.filter(".selected").length===d.length)return}else if(0===d.filter(".selected").length)return;d.toggleClass("selected",b);for(var g=0;g<e;g++){var h=d[g].getAttribute("data-original-index");f[f.length]=c.eq(h)[0]}a(f).prop("selected",b),this.render(!1),this.togglePlaceholder(),this.$element.triggerNative("change")}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(a){a=a||window.event,a&&a.stopPropagation(),this.$button.trigger("click")},keydown:function(b){var c,d,e,f,g=a(this),h=g.is("input")?g.parent().parent():g.parent(),i=h.data("this"),j=":not(.disabled, .hidden, .dropdown-header, .divider)",k={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(f=i.$newElement.hasClass("open"),!f&&(b.keyCode>=48&&b.keyCode<=57||b.keyCode>=96&&b.keyCode<=105||b.keyCode>=65&&b.keyCode<=90))return i.options.container?i.$button.trigger("click"):(i.setSize(),i.$menu.parent().addClass("open"),f=!0),void i.$searchbox.focus();if(i.options.liveSearch&&/(^9$|27)/.test(b.keyCode.toString(10))&&f&&(b.preventDefault(),b.stopPropagation(),i.$menuInner.click(),i.$button.focus()),/(38|40)/.test(b.keyCode.toString(10))){if(c=i.$lis.filter(j),!c.length)return;d=i.options.liveSearch?c.index(c.filter(".active")):c.index(c.find("a").filter(":focus").parent()),e=i.$menuInner.data("prevIndex"),38==b.keyCode?(!i.options.liveSearch&&d!=e||d==-1||d--,d<0&&(d+=c.length)):40==b.keyCode&&((i.options.liveSearch||d==e)&&d++,d%=c.length),i.$menuInner.data("prevIndex",d),i.options.liveSearch?(b.preventDefault(),g.hasClass("dropdown-toggle")||(c.removeClass("active").eq(d).addClass("active").children("a").focus(),g.focus())):c.eq(d).children("a").focus()}else if(!g.is("input")){var l,m,n=[];c=i.$lis.filter(j),c.each(function(c){a.trim(a(this).children("a").text().toLowerCase()).substring(0,1)==k[b.keyCode]&&n.push(c)}),l=a(document).data("keycount"),l++,a(document).data("keycount",l),m=a.trim(a(":focus").text().toLowerCase()).substring(0,1),m!=k[b.keyCode]?(l=1,a(document).data("keycount",l)):l>=n.length&&(a(document).data("keycount",0),l>n.length&&(l=1)),c.eq(n[l-1]).children("a").focus()}if((/(13|32)/.test(b.keyCode.toString(10))||/(^9$)/.test(b.keyCode.toString(10))&&i.options.selectOnTab)&&f){if(/(32)/.test(b.keyCode.toString(10))||b.preventDefault(),i.options.liveSearch)/(32)/.test(b.keyCode.toString(10))||(i.$menuInner.find(".active a").click(),g.focus());else{var o=a(":focus");o.click(),o.focus(),b.preventDefault(),a(document).data("spaceSelect",!0)}a(document).data("keycount",0)}(/(^9$|27)/.test(b.keyCode.toString(10))&&f&&(i.multiple||i.options.liveSearch)||/(27)/.test(b.keyCode.toString(10))&&!f)&&(i.$menu.parent().removeClass("open"),i.options.container&&i.$newElement.removeClass("open"),i.$button.focus())},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),
this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var m=a.fn.selectpicker;a.fn.selectpicker=c,a.fn.selectpicker.Constructor=l,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=m,this},a(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',l.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);c.call(b,b.data())})})}(a)});
//# sourceMappingURL=bootstrap-select.js.map
/*
* FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
* @version 3.1.5
* @link http://fooplugins.com
* @copyright Steven Usher & Brad Vincent 2015
* @license Released under the GPLv3 license.
*/
(function($, F){
	// add in console we use in case it's missing
	window.console = window.console || { log:function(){}, error:function(){} };

	/**
	 * The jQuery plugin initializer.
	 * @function jQuery.fn.footable
	 * @param {(object|FooTable.Defaults)} [options] - The options to initialize the plugin with.
	 * @param {function} [ready] - A callback function to execute for each initialized plugin.
	 * @returns {jQuery}
	 */
	$.fn.footable = function (options, ready) {
		options = options || {};
		// make sure we only work with tables
		return this.filter('table').each(function (i, tbl) {
			F.init(tbl, options, ready);
		});
	};

	var debug_defaults = {
		events: []
	};
	F.__debug__ = JSON.parse(localStorage.getItem('footable_debug')) || false;
	F.__debug_options__ = JSON.parse(localStorage.getItem('footable_debug_options')) || debug_defaults;

	/**
	 * Gets or sets the internal debug variable which enables some additional logging to the console.
	 * When enabled this value is stored in the localStorage so it can persist across page reloads.
	 * @param {boolean} value - Whether or not to enable additional logging.
	 * @param {object} [options] - Any debug specific options.
	 * @returns {(boolean|undefined)}
	 */
	F.debug = function(value, options){
		if (!F.is.boolean(value)) return F.__debug__;
		F.__debug__ = value;
		if (F.__debug__){
			localStorage.setItem('footable_debug', JSON.stringify(F.__debug__));
			F.__debug_options__ = $.extend(true, {}, debug_defaults, options || {});
			if (F.is.hash(options)){
				localStorage.setItem('footable_debug_options', JSON.stringify(F.__debug_options__));
			}
		} else {
			localStorage.removeItem('footable_debug');
			localStorage.removeItem('footable_debug_options');
		}
	};

	/**
	 * Gets the FooTable instance of the supplied table if one exists.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} table - The jQuery table object, selector or the HTMLTableElement to retrieve FooTable from.
	 * @returns {(FooTable.Table|undefined)}
	 */
	F.get = function(table){
		return $(table).first().data('__FooTable__');
	};

	/**
	 * Initializes a new instance of FooTable on the supplied table.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} table - The jQuery table object, selector or the HTMLTableElement to initialize FooTable on.
	 * @param {object} options - The options to initialize FooTable with.
	 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
	 * @returns {FooTable.Table}
	 */
	F.init = function(table, options, ready){
		var ft = F.get(table);
		if (ft instanceof F.Table) ft.destroy();
		return new F.Table(table, options, ready);
	};

	/**
	 * Gets the FooTable.Row instance for the supplied element.
	 * @param {(jQuery|jQuery.selector|HTMLTableElement)} element - A jQuery object, selector or the HTMLElement of an element to retrieve the FooTable.Row for.
	 * @returns {FooTable.Row}
	 */
	F.getRow = function(element){
		// to get the FooTable.Row object simply walk up the DOM, find the TR and grab the __FooTableRow__ data value
		var $row = $(element).closest('tr');
		// if this is a detail row get the previous row in the table to get the main TR element
		if ($row.hasClass('footable-detail-row')){
			$row = $row.prev();
		}
		// grab the row object
		return $row.data('__FooTableRow__');
	};

	// The below are external type definitions mainly used as pointers to jQuery docs for important information
	/**
	 * jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API
	 * that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
	 * @name jQuery
	 * @constructor
	 * @returns {jQuery}
	 * @see {@link http://api.jquery.com/}
	 */

	/**
	 * This object provides a subset of the methods of the Deferred object (then, done, fail, always, pipe, and state) to prevent users from changing the state of the Deferred.
	 * @typedef {object} jQuery.Promise
	 * @see {@link http://api.jquery.com/Types/#Promise}
	 */

	/**
	 * As of jQuery 1.5, the Deferred object provides a way to register multiple callbacks into self-managed callback queues, invoke callback queues as appropriate,
	 * and relay the success or failure state of any synchronous or asynchronous function.
	 * @typedef {object} jQuery.Deferred
	 * @see {@link http://api.jquery.com/Types/#Deferred}
	 */

	/**
	 * jQuery's event system normalizes the event object according to W3C standards. The event object is guaranteed to be passed to the event handler. Most properties from
	 * the original event are copied over and normalized to the new event object.
	 * @typedef {object} jQuery.Event
	 * @see {@link http://api.jquery.com/category/events/event-object/}
	 */

	/**
	 * Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.
	 * @memberof jQuery
	 * @function when
	 * @param {...jQuery.Deferred} deferreds - Any number of deferred objects to wait for.
	 * @returns {jQuery.Promise}
	 * @see {@link http://api.jquery.com/jQuery.when/}
	 */

	/**
	 * The jQuery.fn namespace used to register plugins with jQuery.
	 * @memberof jQuery
	 * @namespace fn
	 * @see {@link http://learn.jquery.com/plugins/basic-plugin-creation/}
	 */
})(
	jQuery,
	/**
	 * The core FooTable namespace containing all the plugin code.
	 * @namespace
	 */
	FooTable = window.FooTable || {}
);
(function(F){
	var returnTrue = function(){ return true; };

	/**
	 * This namespace contains commonly used array utility methods.
	 * @namespace {object} FooTable.arr
	 */
	F.arr = {};

	/**
	 * Iterates over each item in the supplied array and performs the supplied function passing in the current item as the first argument.
	 * @memberof FooTable.arr
	 * @function each
	 * @param {Array} array - The array to iterate
	 * @param {function} func - The function to execute for each item. The first argument supplied to this function is the current item and the second is the current index.
	 */
	F.arr.each = function (array, func) {
		if (!F.is.array(array) || !F.is.fn(func)) return;
		for (var i = 0, len = array.length; i < len; i++) {
			if (func(array[i], i) === false) break;
		}
	};

	/**
	 * Get all items in the supplied array that optionally matches the supplied where function. If no items are found an empty array is returned.
	 * @memberof FooTable.arr
	 * @function get
	 * @param {Array} array - The array to get items from.
	 * @param {function} where - This function must return a boolean value, true includes the item in the result array.
	 * @returns {Array}
	 */
	F.arr.get = function (array, where) {
		var result = [];
		if (!F.is.array(array)) return result;
		if (!F.is.fn(where)) return array;
		for (var i = 0, len = array.length; i < len; i++) {
			if (where(array[i], i)) result.push(array[i]);
		}
		return result;
	};

	/**
	 * Get a boolean value indicating if any item exists in the supplied array that optionally matches the supplied where function.
	 * @memberof FooTable.arr
	 * @function any
	 * @param {Array} array - The array to check.
	 * @param {function} [where] - [Optional] This function must return a boolean value, true indicates that the current item is a valid match.
	 * @returns {boolean}
	 */
	F.arr.any = function (array, where) {
		if (!F.is.array(array)) return false;
		where = F.is.fn(where) ? where : returnTrue;
		for (var i = 0, len = array.length; i < len; i++) {
			if (where(array[i], i)) return true;
		}
		return false;
	};

	/**
	 * Checks if the supplied value exists in the array.
	 * @memberof FooTable.arr
	 * @function contains
	 * @param {Array} array - The array to check.
	 * @param {*} value - The value to check for.
	 * @returns {boolean}
	 */
	F.arr.contains = function(array, value){
		if (!F.is.array(array) || F.is.undef(value)) return false;
		for (var i = 0, len = array.length; i < len; i++) {
			if (array[i] == value) return true;
		}
		return false;
	};

	/**
	 * Get the first item in the supplied array that optionally matches the supplied where function. If no item is found null is returned.
	 * @memberof FooTable.arr
	 * @function first
	 * @param {Array} array - The array to get the item from.
	 * @param {function} [where] - [Optional] This function must return a boolean value, true indicates that the current item can be returned.
	 * @returns {(*|null)}
	 */
	F.arr.first = function (array, where) {
		if (!F.is.array(array)) return null;
		where = F.is.fn(where) ? where : returnTrue;
		for (var i = 0, len = array.length; i < len; i++) {
			if (where(array[i], i)) return array[i];
		}
		return null;
	};

	/**
	 * Creates a new array from the results of the supplied getter function. If no items are found an empty array is returned, to exclude an item from the results return null.
	 * @memberof FooTable.arr
	 * @function map
	 * @param {Array} array - The array to iterate.
	 * @param {function} getter - This function must return either a new value or null.
	 * The first argument is the result being returned at this point in the iteration. The second argument is the current item being iterated.
	 * @returns {(*|null)}
	 */
	F.arr.map = function (array, getter) {
		var result = [], returned = null;
		if (!F.is.array(array) || !F.is.fn(getter)) return result;
		for (var i = 0, len = array.length; i < len; i++) {
			if ((returned = getter(array[i], i)) != null) result.push(returned);
		}
		return result;
	};

	/**
	 * Removes items from the array matching the supplied where function. All removed items are returned in a new array.
	 * @memberof FooTable.arr
	 * @function remove
	 * @param {Array} array - The array to iterate and remove items from.
	 * @param {function} where - This function must return a boolean value, true includes the item in the result array.
	 * @returns {*}
	 */
	F.arr.remove = function (array, where) {
		var remove = [], removed = [];
		if (!F.is.array(array) || !F.is.fn(where)) return removed;
		var i = 0, len = array.length;
		for (; i < len; i++) {
			if (where(array[i], i, removed)){
				remove.push(i);
				removed.push(array[i]);
			}
		}
		// sort the indexes to be removed from largest to smallest
		remove.sort(function(a, b){ return b - a; });
		i = 0; len = remove.length;
		for(; i < len; i++){
			var index = remove[i] - i;
			array.splice(index, 1);
		}
		return removed;
	};

	/**
	 * Deletes a single item from the array. The item if removed is returned.
	 * @memberof FooTable.arr
	 * @function delete
	 * @param {Array} array - The array to iterate and delete the item from.
	 * @param {*} item - The item to find and delete.
	 * @returns {(*|null)}
	 */
	F.arr.delete = function(array, item){
		var remove = -1, removed = null;
		if (!F.is.array(array) || F.is.undef(item)) return removed;
		var i = 0, len = array.length;
		for (; i < len; i++) {
			if (array[i] == item){
				remove = i;
				removed = array[i];
				break;
			}
		}
		if (remove != -1) array.splice(remove, 1);
		return removed;
	};

	/**
	 * Replaces a single item in the array with a new one.
	 * @memberof FooTable.arr
	 * @function replace
	 * @param {Array} array - The array to iterate and replace the item in.
	 * @param {*} oldItem - The item to be replaced.
	 * @param {*} newItem - The item to be inserted.
	 */
	F.arr.replace = function(array, oldItem, newItem){
		var index = array.indexOf(oldItem);
		if (index !== -1) array[index] = newItem;
	};

})(FooTable);
(function (F) {

	/**
	 * This namespace contains commonly used 'is' type methods that return boolean values.
	 * @namespace FooTable.is
	 */
	F.is = {};

	/**
	 * Checks if the type of the value is the same as that supplied.
	 * @memberof FooTable.is
	 * @function type
	 * @param {*} value - The value to check the type of.
	 * @param {string} type - The type to check for.
	 * @returns {boolean}
	 */
	F.is.type = function (value, type) {
		return typeof value === type;
	};

	/**
	 * Checks if the value is defined.
	 * @memberof FooTable.is
	 * @function defined
	 * @param {*} value - The value to check is defined.
	 * @returns {boolean}
	 */
	F.is.defined = function (value) {
		return typeof value !== 'undefined';
	};

	/**
	 * Checks if the value is undefined.
	 * @memberof FooTable.is
	 * @function undef
	 * @param {*} value - The value to check is undefined.
	 * @returns {boolean}
	 */
	F.is.undef = function (value) {
		return typeof value === 'undefined';
	};

	/**
	 * Checks if the value is an array.
	 * @memberof FooTable.is
	 * @function array
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.array = function (value) {
		return '[object Array]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is a date.
	 * @memberof FooTable.is
	 * @function date
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.date = function (value) {
		return '[object Date]' === Object.prototype.toString.call(value) && !isNaN(value.getTime());
	};

	/**
	 * Checks if the value is a boolean.
	 * @memberof FooTable.is
	 * @function boolean
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.boolean = function (value) {
		return '[object Boolean]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is a string.
	 * @memberof FooTable.is
	 * @function string
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.string = function (value) {
		return '[object String]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is a number.
	 * @memberof FooTable.is
	 * @function number
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.number = function (value) {
		return '[object Number]' === Object.prototype.toString.call(value) && !isNaN(value);
	};

	/**
	 * Checks if the value is a function.
	 * @memberof FooTable.is
	 * @function fn
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.fn = function (value) {
		return (F.is.defined(window) && value === window.alert) || '[object Function]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is an error.
	 * @memberof FooTable.is
	 * @function error
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.error = function (value) {
		return '[object Error]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is an object.
	 * @memberof FooTable.is
	 * @function object
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.object = function (value) {
		return '[object Object]' === Object.prototype.toString.call(value);
	};

	/**
	 * Checks if the value is a hash.
	 * @memberof FooTable.is
	 * @function hash
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.hash = function (value) {
		return F.is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
	};

	/**
	 * Checks if the supplied object is an HTMLElement
	 * @memberof FooTable.is
	 * @function element
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */
	F.is.element = function (obj) {
		return typeof HTMLElement === 'object'
			? obj instanceof HTMLElement
			: obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
	};

	/**
	 * This is a simple check to determine if an object is a jQuery promise object. It simply checks the object has a "then" and "promise" function defined.
	 * The promise object is created as an object literal inside of jQuery.Deferred.
	 * It has no prototype, nor any other truly unique properties that could be used to distinguish it.
	 * This method should be a little more accurate than the internal jQuery one that simply checks for a "promise" method.
	 * @memberof FooTable.is
	 * @function promise
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */
	F.is.promise = function(obj){
		return F.is.object(obj) && F.is.fn(obj.then) && F.is.fn(obj.promise);
	};

	/**
	 * Checks if the supplied object is an instance of a jQuery object.
	 * @memberof FooTable.is
	 * @function jq
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */
	F.is.jq = function(obj){
		return F.is.defined(window.jQuery) && obj instanceof jQuery && obj.length > 0;
	};

	/**
	 * Checks if the supplied object is a moment.js date object.
	 * @memberof FooTable.is
	 * @function moment
	 * @param {object} obj - The object to check.
	 * @returns {boolean}
	 */
	F.is.moment = function(obj){
		return F.is.defined(window.moment) && F.is.object(obj) && F.is.boolean(obj._isAMomentObject)
	};

	/**
	 * Checks if the supplied value is an object and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyObject
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.emptyObject = function(value){
		if (!F.is.hash(value)) return false;
		for(var prop in value) {
			if(value.hasOwnProperty(prop))
				return false;
		}
		return true;
	};

	/**
	 * Checks if the supplied value is an array and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyArray
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.emptyArray = function(value){
		return F.is.array(value) ? value.length === 0 : true;
	};

	/**
	 * Checks if the supplied value is a string and if it is empty.
	 * @memberof FooTable.is
	 * @function emptyString
	 * @param {*} value - The value to check.
	 * @returns {boolean}
	 */
	F.is.emptyString = function(value){
		return F.is.string(value) ? value.length === 0 : true;
	};

})(FooTable);
(function (F) {
	/**
	 * This namespace contains commonly used string utility methods.
	 * @namespace FooTable.str
	 */
	F.str = {};

	/**
	 * Checks if the supplied string contains the given substring.
	 * @memberof FooTable.str
	 * @function contains
	 * @param {string} str - The string to check.
	 * @param {string} contains - The string to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */
	F.str.contains = function (str, contains, ignoreCase) {
		if (F.is.emptyString(str) || F.is.emptyString(contains)) return false;
		return contains.length <= str.length
			&& (ignoreCase ? str.toUpperCase().indexOf(contains.toUpperCase()) : str.indexOf(contains)) !== -1;
	};

	/**
	 * Checks if the supplied string contains the exact given substring.
	 * @memberof FooTable.str
	 * @function contains
	 * @param {string} str - The string to check.
	 * @param {string} contains - The string to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */
	F.str.containsExact = function (str, contains, ignoreCase) {
		if (F.is.emptyString(str) || F.is.emptyString(contains) || contains.length > str.length) return false;
		return new RegExp('\\b'+ F.str.escapeRegExp(contains)+'\\b', ignoreCase ? 'i' : '').test(str);
	};

	/**
	 * Checks if the supplied string contains the given word.
	 * @memberof FooTable.str
	 * @function containsWord
	 * @param {string} str - The string to check.
	 * @param {string} word - The word to check for.
	 * @param {boolean} [ignoreCase=false] - Whether or not to ignore casing when performing the check.
	 * @returns {boolean}
	 */
	F.str.containsWord = function(str, word, ignoreCase){
		if (F.is.emptyString(str) || F.is.emptyString(word) || str.length < word.length)
			return false;
		var parts = str.split(/\W/);
		for (var i = 0, len = parts.length; i < len; i++){
			if (ignoreCase ? parts[i].toUpperCase() == word.toUpperCase() : parts[i] == word) return true;
		}
		return false;
	};

	/**
	 * Returns the remainder of a string split on the first index of the given substring.
	 * @memberof FooTable.str
	 * @function from
	 * @param {string} str - The string to split.
	 * @param {string} from - The substring to split on.
	 * @returns {string}
	 */
	F.str.from = function (str, from) {
		if (F.is.emptyString(str)) return str;
		return F.str.contains(str, from) ? str.substring(str.indexOf(from) + 1) : str;
	};

	/**
	 * Checks if a string starts with the supplied prefix.
	 * @memberof FooTable.str
	 * @function startsWith
	 * @param {string} str - The string to check.
	 * @param {string} prefix - The prefix to check for.
	 * @returns {boolean}
	 */
	F.str.startsWith = function (str, prefix) {
		if (F.is.emptyString(str)) return str == prefix;
		return str.slice(0, prefix.length) == prefix;
	};

	/**
	 * Takes the supplied string and converts it to camel case.
	 * @memberof FooTable.str
	 * @function toCamelCase
	 * @param {string} str - The string to camel case.
	 * @returns {string}
	 */
	F.str.toCamelCase = function (str) {
		if (F.is.emptyString(str)) return str;
		if (str.toUpperCase() === str) return str.toLowerCase();
		return str.replace(/^([A-Z])|[-\s_](\w)/g, function (match, p1, p2) {
			if (F.is.string(p2)) return p2.toUpperCase();
			return p1.toLowerCase();
		});
	};

	/**
	 * Generates a random string 9 characters long using the optional prefix if supplied.
	 * @memberof FooTable.str
	 * @function random
	 * @param {string} [prefix] - The prefix to append to the 9 random characters.
	 * @returns {string}
	 */
	F.str.random = function(prefix){
		prefix = F.is.emptyString(prefix) ? '' : prefix;
		return prefix + Math.random().toString(36).substr(2, 9);
	};

	/**
	 * Escapes a string for use in a regular expression.
	 * @memberof FooTable.str
	 * @function escapeRegExp
	 * @param {string} str - The string to escape.
	 * @returns {string}
	 */
	F.str.escapeRegExp = function(str){
		if (F.is.emptyString(str)) return str;
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	};

})(FooTable);
(function (F) {
	"use strict";

	if (!Object.create) {
		Object.create = (function () {
			var Object = function () {};
			return function (prototype) {
				if (arguments.length > 1)
					throw Error('Second argument not supported');

				if (!F.is.object(prototype))
					throw TypeError('Argument must be an object');

				Object.prototype = prototype;
				var result = new Object();
				Object.prototype = null;
				return result;
			};
		})();
	}

	/**
	 * This base implementation does nothing except provide access to the {@link FooTable.Class#extend} method.
	 * @constructs FooTable.Class
	 * @classdesc This class is based off of John Resig's [Simple JavaScript Inheritance]{@link http://ejohn.org/blog/simple-javascript-inheritance} but it has been updated to be ES 5.1
	 * compatible by implementing an [Object.create polyfill]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill}
	 * for older browsers.
	 * @see {@link http://ejohn.org/blog/simple-javascript-inheritance}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill}
	 * @returns {FooTable.Class}
	 */
	function Class() {}

	var __extendable__ = /xyz/.test(function () {xyz;}) ? /\b_super\b/ : /.*/;

	// this._super() within the context of the new function is a pointer to the original function
	// except if the hook param is specified then the this._super variable is the result of the original function
	Class.__extend__ = function(proto, name, func, original){
		// to all who venture here, here be dragons!
		proto[name] = F.is.fn(original) && __extendable__.test(func) ?
			(function (name, fn) {
				return function () {
					var tmp, ret;
					tmp = this._super;
					this._super = original;
					ret = fn.apply(this, arguments);
					this._super = tmp;
					return ret;
				};
			})(name, func) : func;
	};

	/**
	 * Creates a new class that inherits from this class which in turn allows itself to be extended or if a name and function is supplied extends only that specific function on the class.
	 * @param {(object|string)} arg1 - An object containing any new methods/members to implement or the name of the method to extend.
	 * @param {function} arg2 - If the first argument is a method name then this is the new function to replace it with.
	 * @returns {FooTable.Class} A new class that inherits from the base class.
	 * @example <caption>The below shows an example of how to implement inheritance using this method.</caption>
	 * var Person = FooTable.Class.extend({
	 *   construct: function(isDancing){
	 *     this.dancing = isDancing;
	 *   },
	 *   dance: function(){
	 *     return this.dancing;
	 *   }
	 * });
	 *
	 * var Ninja = Person.extend({
	 *   construct: function(){
	 *     this._super( false );
	 *   },
	 *   dance: function(){
	 *     // Call the inherited version of dance()
	 *     return this._super();
	 *   },
	 *   swingSword: function(){
	 *     return true;
	 *   }
	 * });
	 *
	 * var p = new Person(true);
	 * p.dance(); // => true
	 *
	 * var n = new Ninja();
	 * n.dance(); // => false
	 * n.swingSword(); // => true
	 *
	 * // Should all be true
	 * p instanceof Person && p instanceof FooTable.Class &&
	 * n instanceof Ninja && n instanceof Person && n instanceof FooTable.Class
	 */
	Class.extend = function (arg1 , arg2) {
		var args = Array.prototype.slice.call(arguments);
		arg1 = args.shift();
		arg2 = args.shift();

		function __extend__(proto, name, func, original){
			// to all who venture here, here be dragons!
			proto[name] = F.is.fn(original) && __extendable__.test(func) ?
				(function (name, fn, ofn) {
					return function () {
						var tmp, ret;
						tmp = this._super;
						this._super = ofn;
						ret = fn.apply(this, arguments);
						this._super = tmp;
						return ret;
					};
				})(name, func, original) : func;
		}

		if (F.is.hash(arg1)){
			var proto = Object.create(this.prototype),
				_super = this.prototype;
			for (var name in arg1) {
				if (name === '__ctor__') continue;
				__extend__(proto, name, arg1[name], _super[name]);
			}
			var obj = F.is.fn(proto.__ctor__) ? proto.__ctor__ : function () {
				if (!F.is.fn(this.construct))
					throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');
				this.construct.apply(this, arguments);
			};
			proto.construct = F.is.fn(proto.construct) ? proto.construct : function(){};
			obj.prototype = proto;
			proto.constructor = obj;
			obj.extend = Class.extend;
			return obj;
		} else if (F.is.string(arg1) && F.is.fn(arg2)) {
			__extend__(this.prototype, arg1, arg2, this.prototype[arg1]);
		}
	};

	F.Class = Class;

	F.ClassFactory = F.Class.extend(/** @lends FooTable.ClassFactory */{
		/**
		 * This is a simple factory for {@link FooTable.Class} objects allowing them to be registered using a friendly name
		 * and then new instances can be created using this friendly name.
		 * @constructs
		 * @extends FooTable.Class
		 * @returns {FooTable.ClassFactory}
		 * @this FooTable.ClassFactory
		 */
		construct: function(){
			/**
			 * An object containing all registered classes.
			 * @type {{}}
			 */
			this.registered = {};
		},
		/**
		 * Checks if the factory contains a class registered using the supplied name.
		 * @instance
		 * @param {string} name - The name of the class to check.
		 * @returns {boolean}
		 * @this FooTable.ClassFactory
		 */
		contains: function(name){
			return F.is.defined(this.registered[name]);
		},
		/**
		 * Gets an array of all registered names.
		 * @instance
		 * @returns {Array.<string>}
		 * @this FooTable.ClassFactory
		 */
		names: function(){
			var names = [], name;
			for (name in this.registered){
				if (!this.registered.hasOwnProperty(name)) continue;
				names.push(name);
			}
			return names;
		},
		/**
		 * Registers a class object using the supplied friendly name and priority. The priority is only taken into account when loading all registered classes
		 * using the {@link FooTable.ClassFactory#load} method.
		 * @instance
		 * @param {string} name - The friendly name of the class.
		 * @param {function} klass - The class to register.
		 * @param {number} priority - This determines the order that the class is created when using the {@link FooTable.ClassFactory#load} method, higher values are loaded first.
		 * @this FooTable.ClassFactory
		 */
		register: function(name, klass, priority){
			if (!F.is.string(name) || !F.is.fn(klass)) return;
			var current = this.registered[name];
			this.registered[name] = {
				name: name,
				klass: klass,
				priority: F.is.number(priority) ? priority : (F.is.defined(current) ? current.priority : 0)
			};
		},
		/**
		 * Creates new instances of all registered classes using there priority and the supplied arguments to return them in an array.
		 * @instance
		 * @param {object} subs - An object containing classes to substitute on load.
		 * @param {*} arg1 - The first argument to supply when creating new instances of all registered classes.
		 * @param {*} [argN...] - Any number of additional arguments to supply when creating new instances of all registered classes.
		 * @returns {Array.<FooTable.Class>}
		 * @this FooTable.ClassFactory
		 */
		load: function(subs, arg1, argN){
			var self = this, args = Array.prototype.slice.call(arguments), reg = [], loaded = [], name, klass;
			subs = args.shift() || {};
			for (name in self.registered){
				if (!self.registered.hasOwnProperty(name)) continue;
				var component = self.registered[name];
				if (subs.hasOwnProperty(name)){
					klass = subs[name];
					if (F.is.string(klass)) klass = F.getFnPointer(subs[name]);
					if (F.is.fn(klass)){
						component = {name: name, klass: klass, priority: self.registered[name].priority};
					}
				}
				reg.push(component);
			}
			for (name in subs){
				if (!subs.hasOwnProperty(name) || self.registered.hasOwnProperty(name)) continue;
				klass = subs[name];
				if (F.is.string(klass)) klass = F.getFnPointer(subs[name]);
				if (F.is.fn(klass)){
					reg.push({name: name, klass: klass, priority: 0});
				}
			}
			reg.sort(function(a, b){ return b.priority - a.priority; });
			F.arr.each(reg, function(r){
				if (F.is.fn(r.klass)){
					loaded.push(self._make(r.klass, args));
				}
			});
			return loaded;
		},
		/**
		 * Create a new instance of a single class using the supplied name and arguments.
		 * @instance
		 * @param {string} name - The name of the class to create.
		 * @param {*} arg1 - The first argument to supply to the new instance.
		 * @param {*} [argN...] - Any number of additional arguments to supply to the new instance.
		 * @returns {FooTable.Class}
		 * @this FooTable.ClassFactory
		 */
		make: function(name, arg1, argN){
			var self = this, args = Array.prototype.slice.call(arguments), reg;
			name = args.shift();
			reg = self.registered[name];
			if (F.is.fn(reg.klass)){
				return self._make(reg.klass, args);
			}
			return null;
		},
		/**
		 * This in effect lets us use the "apply" method on a function using the "new" keyword.
		 * @instance
		 * @private
		 * @param {function} klass
		 * @param args
		 * @returns {FooTable.Class}
		 * @this FooTable.ClassFactory
		 */
		_make: function(klass, args){
			function Class() {
				return klass.apply(this, args);
			}
			Class.prototype = klass.prototype;
			return new Class();
		}
	});

})(FooTable);
(function($, F){

	/**
	 * Converts the supplied cssText string into JSON object.
	 * @param {string} cssText - The cssText to convert to a JSON object.
	 * @returns {object}
	 */
	F.css2json = function(cssText){
		if (F.is.emptyString(cssText)) return {};
		var json = {}, props = cssText.split(';'), pair, key, value;
		for (var i = 0, i_len = props.length; i < i_len; i++){
			if (F.is.emptyString(props[i])) continue;
			pair = props[i].split(':');
			if (F.is.emptyString(pair[0]) || F.is.emptyString(pair[1])) continue;
			key = F.str.toCamelCase($.trim(pair[0]));
			value = $.trim(pair[1]);
			json[key] = value;
		}
		return json;
	};

	/**
	 * Attempts to retrieve a function pointer using the given name.
	 * @param {string} functionName - The name of the function to fetch a pointer to.
	 * @returns {(function|object|null)}
	 */
	F.getFnPointer = function(functionName){
		if (F.is.emptyString(functionName)) return null;
		var pointer = window,
			parts = functionName.split('.');
		F.arr.each(parts, function(part){
			if (pointer[part]) pointer = pointer[part];
		});
		return F.is.fn(pointer) ? pointer : null;
	};

	/**
	 * Checks the value for function properties such as the {@link FooTable.Column#formatter} option which could also be specified using just the name
	 * and attempts to return the correct function pointer or null if none was found matching the value.
	 * @param {FooTable.Class} self - The class to use as the 'this' keyword within the context of the function.
	 * @param {(function|string)} value - The actual function or the name of the function for the property.
	 * @param {function} [def] - A default function to return if none is found.
	 * @returns {(function|null)}
	 */
	F.checkFnValue = function(self, value, def){
		def = F.is.fn(def) ? def : null;
		function wrap(t, fn, d){
			if (!F.is.fn(fn)) return d;
			return function(){
				return fn.apply(t, arguments);
			};
		}
		return F.is.fn(value) ? wrap(self, value, def) : (F.is.type(value, 'string') ? wrap(self, F.getFnPointer(value), def) : def);
	};

})(jQuery, FooTable);
(function($, F){

	F.Cell = F.Class.extend(/** @lends FooTable.Cell */{
		/**
		 * The cell class containing all the properties for cells.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} table -  The root {@link FooTable.Table} this cell belongs to.
		 * @param {FooTable.Row} row - The parent {@link FooTable.Row} this cell belongs to.
		 * @param {FooTable.Column} column - The {@link FooTable.Column} this cell falls under.
		 * @param {(*|HTMLElement|jQuery)} valueOrElement - Either the value or the element for the cell.
		 * @returns {FooTable.Cell}
		 * @this FooTable.Cell
		 */
		construct: function (table, row, column, valueOrElement) {
			/**
			 * The root {@link FooTable.Table} for the cell.
			 * @instance
			 * @readonly
			 * @type {FooTable.Table}
			 */
			this.ft = table;
			/**
			 * The parent {@link FooTable.Row} for the cell.
			 * @instance
			 * @readonly
			 * @type {FooTable.Row}
			 */
			this.row = row;
			/**
			 * The {@link FooTable.Column} this cell falls under.
			 * @instance
			 * @readonly
			 * @type {FooTable.Column}
			 */
			this.column = column;
			this.created = false;
			this.define(valueOrElement);
		},
		/**
		 * This is supplied either the value or the cell element/jQuery object if it exists.
		 * If supplied the element we need set the $el property and parse the value from it.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or element to define the cell.
		 * @this FooTable.Cell
		 */
		define: function(valueOrElement){
			/**
			 * The jQuery table cell object this instance wraps.
			 * @instance
			 * @type {jQuery}
			 */
			this.$el = F.is.element(valueOrElement) || F.is.jq(valueOrElement) ? $(valueOrElement) : null;
			/**
			 * The jQuery row object that represents this cell in the details table.
			 * @type {jQuery}
			 */
			this.$detail = null;

			var hasOptions = F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options) && F.is.defined(valueOrElement.value);

			/**
			 * The value of the cell.
			 * @instance
			 * @type {*}
			 */
			this.value = this.column.parser.call(this.column, F.is.jq(this.$el) ? this.$el : (hasOptions ? valueOrElement.value : valueOrElement), this.ft.o);

			/**
			 * Contains any options for the cell. These are the options supplied through the plugin constructor as part of the row object itself.
			 * @type {object}
			 */
			this.o = $.extend(true, {
				classes: null,
				style: null
			}, hasOptions ? valueOrElement.options : {});
			/**
			 * An array of CSS classes for the cell.
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */
			this.classes = F.is.jq(this.$el) && this.$el.attr('class') ? this.$el.attr('class').match(/\S+/g) : (F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []));
			/**
			 * The inline styles for the cell.
			 * @instance
			 * @protected
			 * @type {object}
			 */
			this.style = F.is.jq(this.$el) && this.$el.attr('style') ? F.css2json(this.$el.attr('style')) : (F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {}));
		},
		/**
		 * After the cell has been defined this ensures that the $el and #detail properties are jQuery objects by either creating or updating them.
		 * @instance
		 * @protected
		 * @this FooTable.Cell
		 */
		$create: function(){
			if (this.created) return;
			(this.$el = F.is.jq(this.$el) ? this.$el : $('<td/>'))
				.data('value', this.value)
				.contents().detach().end()
				.append(this.format(this.value));

			this._setClasses(this.$el);
			this._setStyle(this.$el);

			this.$detail = $('<tr/>').addClass(this.row.classes.join(' '))
				.data('__FooTableCell__', this)
				.append($('<th/>'))
				.append($('<td/>'));

			this.created = true;
		},
		/**
		 * Collapses this cell and displays it in the details row.
		 * @instance
		 * @protected
		 */
		collapse: function(){
			if (!this.created) return;
			this.$detail.children('th').html(this.column.title);
			this.$el.clone()
				.attr('id', this.$el.attr('id') ? this.$el.attr('id') + '-detail' : undefined)
				.css('display', 'table-cell')
				.html('')
				.append(this.$el.contents().detach())
				.replaceAll(this.$detail.children('td').first());

			if (!F.is.jq(this.$detail.parent()))
				this.$detail.appendTo(this.row.$details.find('.footable-details > tbody'));
		},
		/**
		 * Restores this cell from a detail row back into the normal row.
		 * @instance
		 * @protected
		 */
		restore: function(){
			if (!this.created) return;
			if (F.is.jq(this.$detail.parent())){
				var $cell = this.$detail.children('td').first();
				this.$el
					.attr('class', $cell.attr('class'))
					.attr('style', $cell.attr('style'))
					.css('display', (this.column.hidden || !this.column.visible) ? 'none' : 'table-cell')
					.append($cell.contents().detach());
			}
			this.$detail.detach();
		},
		/**
		 * Helper method to call this cell's column parser function supplying the required parameters.
		 * @instance
		 * @protected
		 * @returns {*}
		 * @see FooTable.Column#parser
		 * @this FooTable.Cell
		 */
		parse: function(){
			return this.column.parser.call(this.column, this.$el, this.ft.o);
		},
		/**
		 * Helper method to call this cell's column formatter function using the supplied value and any additional required parameters.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @see FooTable.Column#formatter
		 * @this FooTable.Cell
		 */
		format: function(value){
			return this.column.formatter.call(this.column, value, this.ft.o, this.row.value);
		},
		/**
		 * Allows easy access to getting or setting the cell's value. If the value is set all associated properties are also updated along with the actual element.
		 * Using this method also allows us to supply an object containing options and the value for the cell.
		 * @instance
		 * @param {*} [value] - The value to set for the cell. If not supplied the current value of the cell is returned.
		 * @param {boolean} [redraw=true] - Whether or not to redraw the row once the value has been set.
		 * @param {boolean} [redrawSelf=true] - Whether or not to redraw the cell itself once the value has been set, if `false` this will override the supplied `redraw` value and prevent the row from redrawing as well.
		 * @returns {(*|undefined)}
		 * @this FooTable.Cell
		 */
		val: function(value, redraw, redrawSelf){
			if (F.is.undef(value)){
				// get
				return this.value;
			}
			// set
			var self = this, hasOptions = F.is.hash(value) && F.is.hash(value.options) && F.is.defined(value.value);
			this.o = $.extend(true, {
				classes: self.classes,
				style: self.style
			}, hasOptions ? value.options : {});

			this.value = hasOptions ? value.value : value;
			this.classes = F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []);
			this.style = F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {});

			redrawSelf = F.is.boolean(redrawSelf) ? redrawSelf : true;
			if (this.created && redrawSelf){
				this.$el.data('value', this.value).empty();

				var $detail = this.$detail.children('td').first().empty(),
					$target = F.is.jq(this.$detail.parent()) ? $detail : this.$el;

				$target.append(this.format(this.value));

				this._setClasses($target);
				this._setStyle($target);

				if (F.is.boolean(redraw) ? redraw : true) this.row.draw();
			}
		},
		_setClasses: function($el){
			var hasColClasses = !F.is.emptyArray(this.column.classes),
				hasClasses = !F.is.emptyArray(this.classes),
				classes = null;
			$el.removeAttr('class');
			if (!hasColClasses && !hasClasses) return;
			if (hasColClasses && hasClasses){
				classes = this.classes.concat(this.column.classes).join(' ');
			} else if (hasColClasses) {
				classes = this.column.classes.join(' ');
			} else if (hasClasses){
				classes = this.classes.join(' ');
			}
			if (!F.is.emptyString(classes)){
				$el.addClass(classes);
			}
		},
		_setStyle: function($el){
			var hasColStyle = !F.is.emptyObject(this.column.style),
				hasStyle = !F.is.emptyObject(this.style),
				style = null;
			$el.removeAttr('style');
			if (!hasColStyle && !hasStyle) return;
			if (hasColStyle && hasStyle){
				style = $.extend({}, this.column.style, this.style);
			} else if (hasColStyle) {
				style = this.column.style;
			} else if (hasStyle){
				style = this.style;
			}
			if (F.is.hash(style)){
				$el.css(style);
			}
		}
	});

})(jQuery, FooTable);
(function($, F){

	F.Column = F.Class.extend(/** @lends FooTable.Column */{
		/**
		 * The column class containing all the properties for columns. All members marked as "readonly" should not be used when defining {@link FooTable.Defaults#columns}.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this component belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @param {string} [type] - The type of column, "text" by default.
		 * @returns {FooTable.Column}
		 * @this FooTable.Column
		 */
		construct: function(instance, definition, type){
			/**
			 * The root {@link FooTable.Table} for the column.
			 * @instance
			 * @readonly
			 * @type {FooTable.Table}
			 */
			this.ft = instance;
			/**
			 * The type of data displayed by the column.
			 * @instance
			 * @readonly
			 * @type {string}
			 */
			this.type = F.is.emptyString(type) ? 'text' : type;
			/**
			 * Whether or not the column was parsed from a standard table row containing data instead of from an actual header row.
			 * @instance
			 * @readonly
			 * @type {boolean}
			 */
			this.virtual = F.is.boolean(definition.virtual) ? definition.virtual : false;
			/**
			 * The jQuery cell object for the column header.
			 * @instance
			 * @readonly
			 * @type {jQuery}
			 */
			this.$el = F.is.jq(definition.$el) ? definition.$el : null;
			/**
			 * The index of the column in the table. This is set by the plugin during initialization.
			 * @instance
			 * @readonly
			 * @type {number}
			 * @default -1
			 */
			this.index = F.is.number(definition.index) ? definition.index : -1;
			/**
			 * Whether or not this in an internal only column.
			 * @instance
			 * @readonly
			 * @type {boolean}
			 * @description Internal columns or there cells will not be returned when calling methods such as `FooTable.Row#val`.
			 */
			this.internal = false;
			this.define(definition);
			this.$create();
		},
		/**
		 * This is supplied the column definition in the form of a simple object created by merging options supplied via the plugin constructor with those parsed from the DOM.
		 * @instance
		 * @protected
		 * @param {object} definition - The object containing the column definition.
		 * @this FooTable.Column
		 */
		define: function(definition){
			/**
			 * Whether or not this column is hidden from view and appears in the details row.
			 * @type {boolean}
			 * @default false
			 */
			this.hidden = F.is.boolean(definition.hidden) ? definition.hidden : false;
			/**
			 * Whether or not this column is completely hidden from view and will not appear in the details row.
			 * @type {boolean}
			 * @default true
			 */
			this.visible = F.is.boolean(definition.visible) ? definition.visible : true;

			/**
			 * The name of the column. This name must correspond to the property name of the JSON row data.
			 * @type {string}
			 * @default null
			 */
			this.name = F.is.string(definition.name) ? definition.name : null;
			if (this.name == null) this.name = 'col'+(definition.index+1);
			/**
			 * The title to display in the column header, this can be HTML.
			 * @type {string}
			 * @default null
			 */
			this.title = F.is.string(definition.title) ? definition.title : null;
			if (!this.virtual && this.title == null && F.is.jq(this.$el)) this.title = this.$el.html();
			if (this.title == null) this.title = 'Column '+(definition.index+1);
			/**
			 * The styles to apply to all cells in this column.
			 * @type {object}
			 */
			this.style = F.is.hash(definition.style) ? definition.style : (F.is.string(definition.style) ? F.css2json(definition.style) : {});
			/**
			 * The classes to apply to all cells in this column.
			 * @type {Array.<string>}
			 */
			this.classes = F.is.array(definition.classes) ? definition.classes : (F.is.string(definition.classes) ? definition.classes.match(/\S+/g) : []);

			// override any default functions ensuring when they are executed "this" within the context of the function points to the instance of this object.
			this.parser = F.checkFnValue(this, definition.parser, this.parser);
			this.formatter = F.checkFnValue(this, definition.formatter, this.formatter);
		},
		/**
		 * After the column has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Column
		 */
		$create: function(){
			(this.$el = !this.virtual && F.is.jq(this.$el) ? this.$el : $('<th/>')).html(this.title).addClass(this.classes.join(' ')).css(this.style);
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.Column#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {string}
		 * @this FooTable.Column
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){ // use jQuery to get the value
				var data = $(valueOrElement).data('value');
				return F.is.defined(data) ? data : $(valueOrElement).html();
			}
			if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement+''; // use the native toString of the value
			return null; // otherwise we have no value so return null
		},
		/**
		 * This is supplied the value retrieved from the {@link FooTable.Column#parse} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {string} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.Column
		 */
		formatter: function(value, options, rowData){
			return value == null ? '' : value;
		},
		/**
		 * Creates a cell for this column from the supplied {@link FooTable.Row} object. This allows different column types to return different types of cells.
		 * @instance
		 * @protected
		 * @param {FooTable.Row} row - The row to create the cell from.
		 * @returns {FooTable.Cell}
		 * @this FooTable.Column
		 */
		createCell: function(row){
			var element = F.is.jq(row.$el) ? row.$el.children('td,th').get(this.index) : null,
				data = F.is.hash(row.value) ? row.value[this.name] : null;
			return new F.Cell(this.ft, row, this, element || data);
		}
	});

	F.columns = new F.ClassFactory();

	F.columns.register('text', F.Column);

})(jQuery, FooTable);
(function ($, F) {

	F.Component = F.Class.extend(/** @lends FooTable.Component */{
		/**
		 * The base class for all FooTable components.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} instance - The parent {@link FooTable.Table} object for the component.
		 * @param {boolean} enabled - Whether or not the component is enabled.
		 * @throws {TypeError} The instance parameter must be an instance of {@link FooTable.Table}.
		 * @returns {FooTable.Component}
		 */
		construct: function (instance, enabled) {
			if (!(instance instanceof F.Table))
				throw new TypeError('The instance parameter must be an instance of FooTable.Table.');

			/**
			 * The parent {@link FooTable.Table} for the component.
			 * @type {FooTable.Table}
			 */
			this.ft = instance;
			/**
			 * Whether or not this component is enabled. Disabled components only have there preinit method called allowing for this value to be overridden.
			 * @type {boolean}
			 */
			this.enabled = F.is.boolean(enabled) ? enabled : false;
		},
		/**
		 * The preinit method is called during the parent {@link FooTable.Table} constructor call.
		 * @param {object} data - The jQuery.data() object of the root table.
		 * @instance
		 * @protected
		 * @function
		 */
		preinit: function(data){},
		/**
		 * The init method is called during the parent {@link FooTable.Table} constructor call.
		 * @instance
		 * @protected
		 * @function
		 */
		init: function(){},
		/**
		 * This method is called from the {@link FooTable.Table#destroy} method.
		 * @instance
		 * @protected
		 * @function
		 */
		destroy: function(){},
		/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */
		predraw: function(){},
		/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */
		draw: function(){},
		/**
		 * This method is called from the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @function
		 */
		postdraw: function(){}
	});

	F.components = new F.ClassFactory();

})(jQuery, FooTable);
(function ($, F) {
	/**
	 * Contains all the available options for the FooTable plugin.
	 * @name FooTable.Defaults
	 * @function
	 * @constructor
	 * @returns {FooTable.Defaults}
	 */
	F.Defaults = function () {
		/**
		 * Whether or not events raised using the {@link FooTable.Table#raise} method are propagated up the DOM. By default this is set to false and all events bubble up the DOM as per usual
		 * however the reason for this option is if we have nested tables. If false the parent table would receive all the events raised by it's children and any handlers bound to both the
		 * parent and child would be triggered which is not the desired behavior.
		 * @type {boolean}
		 * @default false
		 */
		this.stopPropagation = false;
		/**
		 * An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
		 * @type {object.<string, function>}
		 * @default NULL
		 * @example <caption>This example shows how to pass an object containing the events and handlers.</caption>
		 * "on": {
		 * 	"click": function(e){
		 * 		// bind a custom click event to do something whenever the table is clicked
		 * 	},
		 * 	"init.ft.table": function(e, ft){
		 * 		// bind to the FooTable initialize event to do something
		 * 	}
		 * }
		 */
		this.on = null;
	};

	/**
	 * Contains all the default options for the plugin.
	 * @type {FooTable.Defaults}
	 */
	F.defaults = new F.Defaults();

})(jQuery, FooTable);
(function($, F){

	F.Row = F.Class.extend(/** @lends FooTable.Row */{
		/**
		 * The row class containing all the properties for a row and its' cells.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @param {Array.<FooTable.Column>} columns - The array of {@link FooTable.Column} for this row.
		 * @param {(*|HTMLElement|jQuery)} dataOrElement - Either the data for the row (create) or the element (parse) for the row.
		 * @returns {FooTable.Row}
		 */
		construct: function (table, columns, dataOrElement) {
			/**
			 * The {@link FooTable.Table} for the row.
			 * @type {FooTable.Table}
			 */
			this.ft = table;
			/**
			 * The array of {@link FooTable.Column} for this row.
			 * @type {Array.<FooTable.Column>}
			 */
			this.columns = columns;

			this.created = false;
			this.define(dataOrElement);
		},
		/**
		 * This is supplied either the object containing the values for the row or the row element/jQuery object if it exists.
		 * If supplied the element we need to set the $el property and parse the cells from it using the column index.
		 * If we have an object we parse the cells from it using the column name.
		 * @param {(object|jQuery)} dataOrElement - The row object or element to define the row.
		 */
		define: function(dataOrElement){
			/**
			 * The jQuery table row object this instance wraps.
			 * @instance
			 * @protected
			 * @type {jQuery}
			 */
			this.$el = F.is.element(dataOrElement) || F.is.jq(dataOrElement) ? $(dataOrElement) : null;
			/**
			 * The jQuery toggle element for the row.
			 * @instance
			 * @protected
			 * @type {jQuery}
			 */
			this.$toggle = $('<span/>', {'class': 'footable-toggle fooicon fooicon-plus'});

			var isObj = F.is.hash(dataOrElement),
				hasOptions = isObj && F.is.hash(dataOrElement.options) && F.is.hash(dataOrElement.value);

			/**
			 * The value of the row.
			 * @instance
			 * @protected
			 * @type {Object}
			 */
			this.value = isObj ? (hasOptions ? dataOrElement.value : dataOrElement) : null;

			/**
			 * Contains any options for the row.
			 * @type {object}
			 */
			this.o = $.extend(true, {
				expanded: false,
				classes: null,
				style: null
			}, hasOptions ? dataOrElement.options : {});

			/**
			 * Whether or not this row is expanded and will display it's detail row when there are any hidden columns.
			 * @instance
			 * @protected
			 * @type {boolean}
			 */
			this.expanded = F.is.jq(this.$el) ? (this.$el.data('expanded') || this.o.expanded) : this.o.expanded;
			/**
			 * An array of CSS classes for the row.
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */
			this.classes = F.is.jq(this.$el) && this.$el.attr('class') ? this.$el.attr('class').match(/\S+/g) : (F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []));
			/**
			 * The inline styles for the row.
			 * @instance
			 * @protected
			 * @type {object}
			 */
			this.style = F.is.jq(this.$el) && this.$el.attr('style') ? F.css2json(this.$el.attr('style')) : (F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {}));

			/**
			 * The cells array. This is populated before the call to the {@link FooTable.Row#$create} method.
			 * @instance
			 * @type {Array.<FooTable.Cell>}
			 */
			this.cells = this.createCells();

			// this ensures the value contains the parsed cell values and not the supplied values
			var self = this;
			self.value = {};
			F.arr.each(self.cells, function(cell){
				self.value[cell.column.name] = cell.val();
			});
		},
		/**
		 * After the row has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Row
		 */
		$create: function(){
			if (this.created) return;
			(this.$el = F.is.jq(this.$el) ? this.$el : $('<tr/>'))
				.data('__FooTableRow__', this);

			this._setClasses(this.$el);
			this._setStyle(this.$el);

			if (this.ft.rows.toggleColumn == 'last') this.$toggle.addClass('last-column');

			this.$details = $('<tr/>', { 'class': 'footable-detail-row' })
				.append($('<td/>', { colspan: this.ft.columns.visibleColspan })
					.append($('<table/>', { 'class': 'footable-details ' + this.ft.classes.join(' ') })
						.append('<tbody/>')));

			var self = this;
			F.arr.each(self.cells, function(cell){
				if (!cell.created) cell.$create();
				self.$el.append(cell.$el);
			});
			self.$el.off('click.ft.row').on('click.ft.row', { self: self }, self._onToggle);
			this.created = true;
		},
		/**
		 * This is called during the construct method and uses the current column definitions to create an array of {@link FooTable.Cell} objects for the row.
		 * @instance
		 * @protected
		 * @returns {Array.<FooTable.Cell>}
		 * @this FooTable.Row
		 */
		createCells: function(){
			var self = this;
			return F.arr.map(self.columns, function(col){
				return col.createCell(self);
			});
		},
		/**
		 * Allows easy access to getting or setting the row's data. If the data is set all associated properties are also updated along with the actual element.
		 * Using this method also allows us to supply an object containing options and the data for the row at the same time.
		 * @instance
		 * @param {object} [data] - The data to set for the row. If not supplied the current value of the row is returned.
		 * @param {boolean} [redraw=true] - Whether or not to redraw the table once the value has been set.
		 * @param {boolean} [redrawSelf=true] - Whether or not to redraw the row itself once the value has been set, if `false` this will override the supplied `redraw` value and prevent the table from redrawing as well.
		 * @returns {(*|undefined)}
		 */
		val: function(data, redraw, redrawSelf){
			var self = this;
			if (!F.is.hash(data)){
				// get - check the value property and build it from the cells if required.
				if (!F.is.hash(this.value) || F.is.emptyObject(this.value)){
					this.value = {};
					F.arr.each(this.cells, function(cell){
						if (!cell.column.internal){
							self.value[cell.column.name] = cell.val();
						}
					});
				}
				return this.value;
			}
			// set
			this.collapse(false);
			var isObj = F.is.hash(data),
				hasOptions = isObj && F.is.hash(data.options) && F.is.hash(data.value);

			this.o = $.extend(true, {
				expanded: self.expanded,
				classes: self.classes,
				style: self.style
			}, hasOptions ? data.options : {});

			this.expanded = this.o.expanded;
			this.classes = F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []);
			this.style = F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {});
			if (isObj) {
				if ( hasOptions ) data = data.value;
				if (F.is.hash(this.value)){
					for (var prop in data) {
						if (!data.hasOwnProperty(prop)) continue;
						this.value[prop] = data[prop];
					}
				} else {
					this.value = data;
				}
			} else {
				this.value = null;
			}

			redrawSelf = F.is.boolean(redrawSelf) ? redrawSelf : true;
			F.arr.each(this.cells, function(cell){
				if (!cell.column.internal && F.is.defined(self.value[cell.column.name])){
					cell.val(self.value[cell.column.name], false, redrawSelf);
				}
			});

			if (this.created && redrawSelf){
				this._setClasses(this.$el);
				this._setStyle(this.$el);
				if (F.is.boolean(redraw) ? redraw : true) this.draw();
			}
		},
		_setClasses: function($el){
			var hasClasses = !F.is.emptyArray(this.classes),
				classes = null;
			$el.removeAttr('class');
			if (!hasClasses) return;
			else classes = this.classes.join(' ');
			if (!F.is.emptyString(classes)){
				$el.addClass(classes);
			}
		},
		_setStyle: function($el){
			var hasStyle = !F.is.emptyObject(this.style),
				style = null;
			$el.removeAttr('style');
			if (!hasStyle) return;
			else style = this.style;
			if (F.is.hash(style)){
				$el.css(style);
			}
		},
		/**
		 * Sets the current row to an expanded state displaying any hidden columns in a detail row just below it.
		 * @instance
		 * @fires FooTable.Row#"expand.ft.row"
		 */
		expand: function(){
			if (!this.created) return;
			var self = this;
			/**
			 * The expand.ft.row event is raised before the the row is expanded.
			 * Calling preventDefault on this event will stop the row being expanded.
			 * @event FooTable.Row#"expand.ft.row"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Row} row - The row about to be expanded.
			 */
			self.ft.raise('expand.ft.row',[self]).then(function(){
				self.__hidden__ = F.arr.map(self.cells, function(cell){
					return cell.column.hidden && cell.column.visible ? cell : null;
				});

				if (self.__hidden__.length > 0){
					self.$details.insertAfter(self.$el)
						.children('td').first()
						.attr('colspan', self.ft.columns.visibleColspan);

					F.arr.each(self.__hidden__, function(cell){
						cell.collapse();
					});
				}
				self.$el.attr('data-expanded', true);
				self.$toggle.removeClass('fooicon-plus').addClass('fooicon-minus');
				self.expanded = true;
				self.ft.raise('expanded.ft.row', [self]);
			});
		},
		/**
		 * Sets the current row to a collapsed state removing the detail row if it exists.
		 * @instance
		 * @param {boolean} [setExpanded] - Whether or not to set the {@link FooTable.Row#expanded} property to false.
		 * @fires FooTable.Row#"collapse.ft.row"
		 */
		collapse: function(setExpanded){
			if (!this.created) return;
			var self = this;
			/**
			 * The collapse.ft.row event is raised before the the row is collapsed.
			 * Calling preventDefault on this event will stop the row being collapsed.
			 * @event FooTable.Row#"collapse.ft.row"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Row} row - The row about to be expanded.
			 */
			self.ft.raise('collapse.ft.row',[self]).then(function(){
				F.arr.each(self.__hidden__, function(cell){
					cell.restore();
				});
				self.$details.detach();
				self.$el.removeAttr('data-expanded');
				self.$toggle.removeClass('fooicon-minus').addClass('fooicon-plus');
				if (F.is.boolean(setExpanded) ? setExpanded : true) self.expanded = false;
				self.ft.raise('collapsed.ft.row', [self]);
			});
		},
		/**
		 * Prior to drawing this moves the details contents back to there original cells and detaches the toggle element from the row.
		 * @instance
		 * @param {boolean} [detach] - Whether or not to detach the row.
		 * @this FooTable.Row
		 */
		predraw: function(detach){
			if (this.created){
				if (this.expanded){
					this.collapse(false);
				}
				this.$toggle.detach();
				detach = F.is.boolean(detach) ? detach : true;
				if (detach) this.$el.detach();
			}
		},
		/**
		 * Draws the current row and cells.
		 * @instance
		 * @this FooTable.Row
		 */
		draw: function($parent){
			if (!this.created) this.$create();
			if (F.is.jq($parent)) $parent.append(this.$el);
			var self = this;
			F.arr.each(self.cells, function(cell){
				cell.$el.css('display', (cell.column.hidden || !cell.column.visible  ? 'none' : 'table-cell'));
				if (self.ft.rows.showToggle && self.ft.columns.hasHidden){
					if ((self.ft.rows.toggleColumn == 'first' && cell.column.index == self.ft.columns.firstVisibleIndex)
						|| (self.ft.rows.toggleColumn == 'last' && cell.column.index == self.ft.columns.lastVisibleIndex)) {
						cell.$el.prepend(self.$toggle);
					}
				}
				cell.$el.add(cell.column.$el).removeClass('footable-first-visible footable-last-visible');
				if (cell.column.index == self.ft.columns.firstVisibleIndex){
					cell.$el.add(cell.column.$el).addClass('footable-first-visible');
				}
				if (cell.column.index == self.ft.columns.lastVisibleIndex){
					cell.$el.add(cell.column.$el).addClass('footable-last-visible');
				}
			});
			if (this.expanded){
				this.expand();
			}
		},
		/**
		 * Toggles the row between it's expanded and collapsed state if there are hidden columns.
		 * @instance
		 * @this FooTable.Row
		 */
		toggle: function(){
			if (this.created && this.ft.columns.hasHidden){
				if (this.expanded) this.collapse();
				else this.expand();
			}
		},
		/**
		 * Handles the toggle click event for rows.
		 * @instance
		 * @param {jQuery.Event} e - The jQuery.Event object for the click event.
		 * @private
		 * @this jQuery
		 */
		_onToggle: function (e) {
			var self = e.data.self;
			// only execute the toggle if the event.target is one of the approved initiators
			if ($(e.target).is(self.ft.rows.toggleSelector)){
				self.toggle();
			}
		}
	});

})(jQuery, FooTable);

(function ($, F) {

	/**
	 * An array of all currently loaded instances of the plugin.
	 * @protected
	 * @readonly
	 * @type {Array.<FooTable.Table>}
	 */
	F.instances = [];

	F.Table = F.Class.extend(/** @lends FooTable.Table */{
		/**
		 * This class is the core of the plugin and drives the logic of all components.
		 * @constructs
		 * @this FooTable.Table
		 * @extends FooTable.Class
		 * @param {(HTMLTableElement|jQuery)} element - The element or jQuery table object to bind the plugin to.
		 * @param {object} options - The options to initialize the plugin with.
		 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
		 * @returns {FooTable.Table}
		 */
		construct: function (element, options, ready) {
			//BEGIN MEMBERS
			/**
			 * The timeout ID for the resize event.
			 * @instance
			 * @private
			 * @type {?number}
			 */
			this._resizeTimeout = null;
			/**
			 * The ID of the FooTable instance.
			 * @instance
			 * @type {number}
			 */
			this.id = F.instances.push(this);
			/**
			 * Whether or not the plugin and all components and add-ons are fully initialized.
			 * @instance
			 * @type {boolean}
			 */
			this.initialized = false;
			/**
			 * The jQuery table object the plugin is bound to.
			 * @instance
			 * @type {jQuery}
			 */
			this.$el = (F.is.jq(element) ? element : $(element)).first(); // ensure one table, one instance
			/**
			 * A loader jQuery instance
			 * @instance
			 * @type {jQuery}
			 */
			this.$loader = $('<div/>', { 'class': 'footable-loader' }).append($('<span/>', {'class': 'fooicon fooicon-loader'}));
			/**
			 * The options for the plugin. This is a merge of user defined options and the default options.
			 * @instance
			 * @type {object}
			 */
			this.o = $.extend(true, {}, F.defaults, options);
			/**
			 * The jQuery data object for the table at initialization.
			 * @instance
			 * @type {object}
			 */
			this.data = this.$el.data() || {};
			/**
			 * An array of all CSS classes on the table that do not start with "footable".
			 * @instance
			 * @protected
			 * @type {Array.<string>}
			 */
			this.classes = [];
			/**
			 * All components for this instance of the plugin. These are executed in the order they appear in the array for the initialize phase and in reverse order for the destroy phase of the plugin.
			 * @instance
			 * @protected
			 * @type {object}
			 * @prop {Array.<FooTable.Component>} internal - The internal components for the plugin. These are executed either before all other components in the initialize phase or after them in the destroy phase of the plugin.
			 * @prop {Array.<FooTable.Component>} core - The core components for the plugin. These are executed either after the internal components in the initialize phase or before them in the destroy phase of the plugin.
			 * @prop {Array.<FooTable.Component>} custom - The custom components for the plugin. These are executed either after the core components in the initialize phase or before them in the destroy phase of the plugin.
			 */
			this.components = F.components.load((F.is.hash(this.data.components) ? this.data.components : this.o.components), this);
			/**
			 * The breakpoints component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Breakpoints}
			 */
			this.breakpoints = this.use(FooTable.Breakpoints);
			/**
			 * The columns component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Columns}
			 */
			this.columns = this.use(FooTable.Columns);
			/**
			 * The rows component for this instance of the plugin.
			 * @instance
			 * @type {FooTable.Rows}
			 */
			this.rows = this.use(FooTable.Rows);

			//END MEMBERS
			this._construct(ready);
		},
		/**
		 * Once all properties are set this performs the actual initialization of the plugin calling the {@link FooTable.Table#_preinit} and
		 * {@link FooTable.Table#_init} methods as well as raising the {@link FooTable.Table#"ready.ft.table"} event.
		 * @this FooTable.Table
		 * @instance
		 * @param {function} [ready] - A callback function to execute once the plugin is initialized.
		 * @private
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"ready.ft.table"
		 */
		_construct: function(ready){
			var self = this;
			return this._preinit().then(function(){
				return self._init().then(function(){
					/**
					 * The ready.ft.table event is raised after the plugin has been initialized and the table drawn.
					 * Calling preventDefault on this event will stop the ready callback being executed.
					 * @event FooTable.Table#"ready.ft.table"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 */
					return self.raise('ready.ft.table').then(function(){
						if (F.is.fn(ready)) ready.call(self, self);
					});
				});
			}).always(function(arg){
				self.$el.show();
				if (F.is.error(arg)){
					console.error('FooTable: unhandled error thrown during initialization.', arg);
				}
			});
		},
		/**
		 * The preinit method is called prior to the plugins actual initialization and provides itself and it's components an opportunity to parse any additional option values.
		 * @instance
		 * @private
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"preinit.ft.table"
		 */
		_preinit: function(){
			var self = this;
			/**
			 * The preinit.ft.table event is raised before any components.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Table#"preinit.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object from the root table element.
			 */
			return this.raise('preinit.ft.table', [self.data]).then(function(){
				var classes = (self.$el.attr('class') || '').match(/\S+/g) || [];

				self.o.ajax = F.checkFnValue(self, self.data.ajax, self.o.ajax);
				self.o.stopPropagation = F.is.boolean(self.data.stopPropagation)
					? self.data.stopPropagation
					: self.o.stopPropagation;

				for (var i = 0, len = classes.length; i < len; i++){
					if (!F.str.startsWith(classes[i], 'footable')) self.classes.push(classes[i]);
				}

				self.$el.hide().after(self.$loader);
				return self.execute(false, false, 'preinit', self.data);
			});
		},
		/**
		 * Initializes this instance of the plugin and calls the callback function if one is supplied once complete.
		 * @this FooTable.Table
		 * @instance
		 * @private
		 * @return {jQuery.Promise}
		 * @fires FooTable.Table#"init.ft.table"
		 */
		_init: function(){
			var self = this;
			/**
			 * The init.ft.table event is raised before any components are initialized.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Table#"init.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return self.raise('init.ft.table').then(function(){
				var $thead = self.$el.children('thead'),
					$tbody = self.$el.children('tbody'),
					$tfoot = self.$el.children('tfoot');
				self.$el.addClass('footable footable-' + self.id);
				if (F.is.hash(self.o.on)) self.$el.on(self.o.on);
				if ($tfoot.length == 0) self.$el.append($tfoot = $('<tfoot/>'));
				if ($tbody.length == 0) self.$el.append('<tbody/>');
				if ($thead.length == 0) self.$el.prepend($thead = $('<thead/>'));
				return self.execute(false, true, 'init').then(function(){
					self.$el.data('__FooTable__', self);
					if ($tfoot.children('tr').length == 0) $tfoot.remove();
					if ($thead.children('tr').length == 0) $thead.remove();

					/**
					 * The postinit.ft.table event is raised after any components are initialized but before the table is
					 * drawn for the first time.
					 * Calling preventDefault on this event will disable the initial drawing of the table.
					 * @event FooTable.Table#"postinit.ft.table"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 */
					return self.raise('postinit.ft.table').then(function(){
						return self.draw();
					}).always(function(){
						$(window).off('resize.ft'+self.id, self._onWindowResize)
							.on('resize.ft'+self.id, { self: self }, self._onWindowResize);
						self.initialized = true;
					});
				});
			});
		},
		/**
		 * Destroys this plugin removing it from the table.
		 * @this FooTable.Table
		 * @instance
		 * @fires FooTable.Table#"destroy.ft.table"
		 */
		destroy: function () {
			var self = this;
			/**
			 * The destroy.ft.table event is called before all core components.
			 * Calling preventDefault on this event will prevent the entire plugin from being destroyed.
			 * @event FooTable.Table#"destroy.ft.table"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return self.raise('destroy.ft.table').then(function(){
				return self.execute(true, true, 'destroy').then(function () {
					self.$el.removeData('__FooTable__').removeClass('footable-' + self.id);
					if (F.is.hash(self.o.on)) self.$el.off(self.o.on);
					$(window).off('resize.ft'+self.id, self._onWindowResize);
					self.initialized = false;
					F.instances[self.id] = null;
				});
			}).fail(function(err){
				if (F.is.error(err)){
					console.error('FooTable: unhandled error thrown while destroying the plugin.', err);
				}
			});
		},
		/**
		 * Raises an event on this instance supplying the args array as additional parameters to the handlers.
		 * @this FooTable.Table
		 * @instance
		 * @param {string} eventName - The name of the event to raise, this can include namespaces.
		 * @param {Array} [args] - An array containing additional parameters to be passed to any bound handlers.
		 * @returns {jQuery.Event}
		 */
		raise: function(eventName, args){
			var self = this,
				debug = F.__debug__ && (F.is.emptyArray(F.__debug_options__.events) || F.arr.any(F.__debug_options__.events, function(name){ return F.str.contains(eventName, name); }));
			args = args || [];
			args.unshift(this);
			return $.Deferred(function(d){
				var evt = $.Event(eventName);
				if (self.o.stopPropagation == true){
					self.$el.one(eventName, function (e) {e.stopPropagation();});
				}
				if (debug) console.log('FooTable:'+eventName+': ', args);
				self.$el.trigger(evt, args);
				if (evt.isDefaultPrevented()){
					if (debug) console.log('FooTable: default prevented for the "'+eventName+'" event.');
					d.reject(evt);
				}	else d.resolve(evt);
			});
		},
		/**
		 * Attempts to retrieve the instance of the supplied component type for this instance.
		 * @this FooTable.Table
		 * @instance
		 * @param {object} type - The content type to retrieve for this instance.
		 * @returns {(*|null)}
		 */
		use: function(type){
			for (var i = 0, len = this.components.length; i < len; i++){
				if (this.components[i] instanceof type) return this.components[i];
			}
			return null;
		},
		/**
		 * Performs the drawing of the table.
		 * @this FooTable.Table
		 * @instance
		 * @protected
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Table#"predraw.ft.table"
		 * @fires FooTable.Table#"draw.ft.table"
		 * @fires FooTable.Table#"postdraw.ft.table"
		 */
		draw: function () {
			var self = this;

			// Clone the current table and insert it into the original's place
			var $elCopy = self.$el.clone().insertBefore(self.$el);

			// Detach `self.$el` from the DOM, retaining its event handlers
			self.$el.detach();

			// when drawing the order that the components are executed is important so chain the methods but use promises to retain async safety.
			return self.execute(false, true, 'predraw').then(function(){
				/**
				 * The predraw.ft.table event is raised after all core components and add-ons have executed there predraw functions but before they execute there draw functions.
				 * @event FooTable.Table#"predraw.ft.table"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 */
				return self.raise('predraw.ft.table').then(function(){
					return self.execute(false, true, 'draw').then(function(){
						/**
						 * The draw.ft.table event is raised after all core components and add-ons have executed there draw functions.
						 * @event FooTable.Table#"draw.ft.table"
						 * @param {jQuery.Event} e - The jQuery.Event object for the event.
						 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
						 */
						return self.raise('draw.ft.table').then(function(){
							return self.execute(false, true, 'postdraw').then(function(){
								/**
								 * The postdraw.ft.table event is raised after all core components and add-ons have executed there postdraw functions.
								 * @event FooTable.Table#"postdraw.ft.table"
								 * @param {jQuery.Event} e - The jQuery.Event object for the event.
								 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
								 */
								return self.raise('postdraw.ft.table');
							});
						});
					});
				});
			}).fail(function(err){
				if (F.is.error(err)){
					console.error('FooTable: unhandled error thrown during a draw operation.', err);
				}
			}).always(function(){
				// Replace the copy that we added above with the modified `self.$el`
				$elCopy.replaceWith(self.$el);
				self.$loader.remove();
			});
		},
		/**
		 * Executes the specified method with the optional number of parameters on all components and waits for the promise from each to be resolved before executing the next.
		 * @this FooTable.Table
		 * @instance
		 * @protected
		 * @param {boolean} reverse - Whether or not to execute the component methods in the reverse order to what they were registered in.
		 * @param {boolean} enabled - Whether or not to execute the method on enabled components only.
		 * @param {string} methodName - The name of the method to execute.
		 * @param {*} [param1] - The first parameter for the method.
		 * @param {...*} [paramN] - Any number of additional parameters for the method.
		 * @returns {jQuery.Promise}
		 */
		execute: function(reverse, enabled, methodName, param1, paramN){
			var self = this, args = Array.prototype.slice.call(arguments);
			reverse = args.shift();
			enabled = args.shift();
			var components = enabled ? F.arr.get(self.components, function(c){ return c.enabled; }) : self.components.slice(0);
			args.unshift(reverse ? components.reverse() : components);
			return self._execute.apply(self, args);
		},
		/**
		 * Executes the specified method with the optional number of parameters on all supplied components waiting for the result of each before executing the next.
		 * @this FooTable.Table
		 * @instance
		 * @private
		 * @param {Array.<FooTable.Component>} components - The components to call the method on.
		 * @param {string} methodName - The name of the method to execute
		 * @param {*} [param1] - The first parameter for the method.
		 * @param {...*} [paramN] - Any additional parameters for the method.
		 * @returns {jQuery.Promise}
		 */
		_execute: function(components, methodName, param1, paramN){
			if (!components || !components.length) return $.when();
			var self = this, args = Array.prototype.slice.call(arguments),
				component;
			components = args.shift();
			methodName = args.shift();
			component = components.shift();

			if (!F.is.fn(component[methodName]))
				return self._execute.apply(self, [components, methodName].concat(args));

			return $.Deferred(function(d){
				try {
					var result = component[methodName].apply(component, args);
					if (F.is.promise(result)){
						return result.then(d.resolve, d.reject);
					} else {
						d.resolve(result);
					}
				} catch (err) {
					d.reject(err);
				}
			}).then(function(){
				return self._execute.apply(self, [components, methodName].concat(args));
			});
		},
		/**
		 * Listens to the window resize event and performs a check to see if the breakpoint has changed.
		 * @this window
		 * @instance
		 * @private
		 * @fires FooTable.Table#"resize.ft.table"
		 */
		_onWindowResize: function (e) {
			var self = e.data.self;
			if (self._resizeTimeout != null) { clearTimeout(self._resizeTimeout); }
			self._resizeTimeout = setTimeout(function () {
				self._resizeTimeout = null;
				/**
				 * The resize event is raised a short time after window resize operations cease.
				 * @event FooTable.Table#"resize.ft.table"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 */
				self.raise('resize.ft.table').then(function(){
					self.breakpoints.check();
				});
			}, 300);
		}
	});

})(jQuery, FooTable);
(function($, F){

	F.ArrayColumn = F.Column.extend(/** @lends FooTable.ArrayColumn */{
		/**
		 * @summary A column to handle Array values.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 */
		construct: function(instance, definition) {
			this._super(instance, definition, 'array');
		},
		/**
		 * @summary Parses the supplied value or element to retrieve a column value.
		 * @description This is supplied either the cell value or jQuery object to parse. This method will return either the Array containing the values or null.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(array|null)}
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){ // use jQuery to get the value
				var $el = $(valueOrElement), data = $el.data('value'); // .data() will automatically convert a JSON string to an array
				if (F.is.array(data)) return data;
				data = $el.html();
				try {
					data = JSON.parse(data);
				} catch(err) {
					data = null;
				}
				return F.is.array(data) ? data : null; // if we have an array return it
			}
			if (F.is.array(valueOrElement)) return valueOrElement; // if we have an array return it
			return null; // otherwise we have no value so return null
		},
		/**
		 * @summary Formats the column value and creates the HTML seen within a cell.
		 * @description This is supplied the value retrieved from the {@link FooTable.ArrayColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {?Array} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		formatter: function(value, options, rowData){
			return F.is.array(value) ? JSON.stringify(value) : '';
		}
	});

	F.columns.register('array', F.ArrayColumn);

})(jQuery, FooTable);
(function($, F){

	if (F.is.undef(window.moment)){
		// The DateColumn requires moment.js to parse and format date values. Goto http://momentjs.com/ to get it.
		return;
	}

	F.DateColumn = F.Column.extend(/** @lends FooTable.DateColumn */{
		/**
		 * The date column class is used to handle date values. This column is dependent on [moment.js]{@link http://momentjs.com/} to provide date parsing and formatting functionality.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.DateColumn}
		 */
		construct: function(instance, definition){
			this._super(instance, definition, 'date');
			/**
			 * The format string to use when parsing and formatting dates.
			 * @instance
			 * @type {string}
			 */
			this.formatString = F.is.string(definition.formatString) ? definition.formatString : 'MM-DD-YYYY';
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.DateColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(moment|null)}
		 * @this FooTable.DateColumn
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
				var data = $(valueOrElement).data('value');
				valueOrElement = F.is.defined(data) ? data : $(valueOrElement).text();
				if (F.is.string(valueOrElement)) valueOrElement = isNaN(valueOrElement) ? valueOrElement : +valueOrElement;
			}
			if (F.is.date(valueOrElement)) return moment(valueOrElement);
			if (F.is.object(valueOrElement) && F.is.boolean(valueOrElement._isAMomentObject)) return valueOrElement;
			if (F.is.string(valueOrElement)){
				// if it looks like a number convert it and do nothing else otherwise create a new moment using the string value and formatString
				if (isNaN(valueOrElement)){
					return moment(valueOrElement, this.formatString);
				} else {
					valueOrElement = +valueOrElement;
				}
			}
			if (F.is.number(valueOrElement)){
				return moment(valueOrElement);
			}
			return null;
		},
		/**
		 * This is supplied the value retrieved from the {@link FooTable.DateColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.DateColumn
		 */
		formatter: function(value, options, rowData){
			return F.is.object(value) && F.is.boolean(value._isAMomentObject) && value.isValid() ? value.format(this.formatString) : '';
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. A string value must be returned from this method and will be used during filtering operations.
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {string}
		 * @this FooTable.DateColumn
		 */
		filterValue: function(valueOrElement){
			// if we have an element or a jQuery object use jQuery to get the value
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) valueOrElement = $(valueOrElement).data('filterValue') || $(valueOrElement).text();
			// if options are supplied with the value
			if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
				if (F.is.string(valueOrElement.options.filterValue)) valueOrElement = valueOrElement.options.filterValue;
				if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
			}
			// if the value is a moment object just return the formatted value
			if (F.is.object(valueOrElement) && F.is.boolean(valueOrElement._isAMomentObject)) return valueOrElement.format(this.formatString);
			// if its a string
			if (F.is.string(valueOrElement)){
				// if its not a number return it
				if (isNaN(valueOrElement)){
					return valueOrElement;
				} else { // otherwise convert it and carry on
					valueOrElement = +valueOrElement;
				}
			}
			// if the value is a number or date convert to a moment object and return the formatted result.
			if (F.is.number(valueOrElement) || F.is.date(valueOrElement)){
				return moment(valueOrElement).format(this.formatString);
			}
			// try use the native toString of the value if its not undefined or null
			if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement+'';
			return ''; // otherwise we have no value so return an empty string
		}
	});

	F.columns.register('date', F.DateColumn);

})(jQuery, FooTable);

(function($, F){

	F.HTMLColumn = F.Column.extend(/** @lends FooTable.HTMLColumn */{
		/**
		 * The HTML column class is used to handle any raw HTML columns.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.HTMLColumn}
		 */
		construct: function(instance, definition){
			this._super(instance, definition, 'html');
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.HTMLColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(jQuery|null)}
		 * @this FooTable.HTMLColumn
		 */
		parser: function(valueOrElement){
			if (F.is.string(valueOrElement)) valueOrElement = $($.trim(valueOrElement));
			if (F.is.element(valueOrElement)) valueOrElement = $(valueOrElement);
			if (F.is.jq(valueOrElement)){
				var tagName = valueOrElement.prop('tagName').toLowerCase();
				if (tagName == 'td' || tagName == 'th'){
					var data = valueOrElement.data('value');
					return F.is.defined(data) ? data : valueOrElement.contents();
				}
				return valueOrElement;
			}
			return null;
		}
	});

	F.columns.register('html', F.HTMLColumn);

})(jQuery, FooTable);
(function($, F){

	F.NumberColumn = F.Column.extend(/** @lends FooTable.NumberColumn */{
		/**
		 * The number column class is used to handle simple number columns.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.NumberColumn}
		 */
		construct: function(instance, definition){
			this._super(instance, definition, 'number');
			this.decimalSeparator = F.is.string(definition.decimalSeparator) ? definition.decimalSeparator : '.';
			this.thousandSeparator = F.is.string(definition.thousandSeparator) ? definition.thousandSeparator : ',';
			this.decimalSeparatorRegex = new RegExp(F.str.escapeRegExp(this.decimalSeparator), 'g');
			this.thousandSeparatorRegex = new RegExp(F.str.escapeRegExp(this.thousandSeparator), 'g');
			this.cleanRegex = new RegExp('[^\-0-9' + F.str.escapeRegExp(this.decimalSeparator) + ']', 'g');
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and will be provided to the {@link FooTable.Column#formatter} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(number|null)}
		 * @this FooTable.NumberColumn
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
				var data = $(valueOrElement).data('value');
				valueOrElement = F.is.defined(data) ? data : $(valueOrElement).text().replace(this.cleanRegex, '');
			}
			if (F.is.string(valueOrElement)){
				valueOrElement = valueOrElement.replace(this.thousandSeparatorRegex, '').replace(this.decimalSeparatorRegex, '.');
				valueOrElement = parseFloat(valueOrElement);
			}
			if (F.is.number(valueOrElement)) return valueOrElement;
			return null;
		},
		/**
		 * This is supplied the value retrieved from the {@link FooTable.NumberColumn#parse} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {number} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 * @this FooTable.NumberColumn
		 */
		formatter: function(value, options, rowData){
			if (value == null) return '';
			var s = (value + '').split('.');
			if (s.length == 2 && s[0].length > 3) {
				s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.thousandSeparator);
			}
			return s.join(this.decimalSeparator);
		}
	});

	F.columns.register('number', F.NumberColumn);

})(jQuery, FooTable);
(function($, F){

	F.ObjectColumn = F.Column.extend(/** @lends FooTable.ObjectColumn */{
		/**
		 * @summary A column to handle Object values.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 */
		construct: function(instance, definition) {
			this._super(instance, definition, 'object');
		},
		/**
		 * @summary Parses the supplied value or element to retrieve a column value.
		 * @description This is supplied either the cell value or jQuery object to parse. This method will return either the Object containing the values or null.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(object|null)}
		 */
		parser: function(valueOrElement){
			if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){ // use jQuery to get the value
				var $el = $(valueOrElement), data = $el.data('value'); // .data() will automatically convert a JSON string to an object
				if (F.is.object(data)) return data;
				data = $el.html();
				try {
					data = JSON.parse(data);
				} catch(err) {
					data = null;
				}
				return F.is.object(data) ? data : null; // if we have an object return it
			}
			if (F.is.object(valueOrElement)) return valueOrElement; // if we have an object return it
			return null; // otherwise we have no value so return null
		},
		/**
		 * @summary Formats the column value and creates the HTML seen within a cell.
		 * @description This is supplied the value retrieved from the {@link FooTable.ObjectColumn#parser} function and must return a string, HTMLElement or jQuery object.
		 * The return value from this function is what is displayed in the cell in the table.
		 * @instance
		 * @protected
		 * @param {*} value - The value to format.
		 * @param {object} options - The current plugin options.
		 * @param {object} rowData - An object containing the current row data.
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		formatter: function(value, options, rowData){
			return F.is.object(value) ? JSON.stringify(value) : '';
		}
	});

	F.columns.register('object', F.ObjectColumn);

})(jQuery, FooTable);
(function($, F){

	F.Breakpoint = F.Class.extend(/** @lends FooTable.Breakpoint */{
		/**
		 * The breakpoint class containing the name and maximum width for the breakpoint.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} name - The name of the breakpoint. Must contain no spaces or special characters.
		 * @param {number} width - The width of the breakpoint in pixels.
		 * @returns {FooTable.Breakpoint}
		 */
		construct: function(name, width){
			/**
			 * The name of the breakpoint.
			 * @type {string}
			 */
			this.name = name;
			/**
			 * The maximum width of the breakpoint in pixels.
			 * @type {number}
			 */
			this.width = width;
		}
	});

})(jQuery, FooTable);
(function($, F){
	F.Breakpoints = F.Component.extend(/** @lends FooTable.Breakpoints */{
		/**
		 * Contains the logic to calculate and apply breakpoints for the plugin.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Breakpoints}
		 */
		construct: function(table){
			// call the base class constructor
			this._super(table, true);

			/* PROTECTED */
			/**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @protected
			 * @type {FooTable.Table#options}
			 */
			this.o = table.o;

			/* PUBLIC */
			/**
			 * The current breakpoint.
			 * @type {FooTable.Breakpoint}
			 */
			this.current = null;
			/**
			 * An array of {@link FooTable.Breakpoint} objects created from parsing the options.
			 * @type {Array.<FooTable.Breakpoint>}
			 */
			this.array = [];
			/**
			 * Whether or not breakpoints cascade. When set to true all breakpoints larger than the current will be hidden along with it.
			 * @type {boolean}
			 */
			this.cascade = this.o.cascade;
			/**
			 * Whether or not to calculate breakpoints on the width of the parent element rather than the viewport.
			 * @type {boolean}
			 */
			this.useParentWidth = this.o.useParentWidth;
			/**
			 * This value is updated each time the current breakpoint changes and contains a space delimited string of the names of the current breakpoint and all those smaller than it.
			 * @type {string}
			 */
			this.hidden = null;

			/* PRIVATE */
			/**
			 * This value is set once when the {@link FooTable.Breakpoints#array} is generated and contains a space delimited string of all the breakpoint class names.
			 * @type {string}
			 * @private
			 */
			this._classNames = '';

			// check if a function was supplied to override the default getWidth
			this.getWidth = F.checkFnValue(this, this.o.getWidth, this.getWidth);
		},

		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the breakpoints component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Breakpoints#"preinit.ft.breakpoints"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.breakpoints event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Breakpoints#"preinit.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			return this.ft.raise('preinit.ft.breakpoints', [data]).then(function(){
				self.cascade = F.is.boolean(data.cascade) ? data.cascade : self.cascade;
				self.o.breakpoints = F.is.hash(data.breakpoints) ? data.breakpoints : self.o.breakpoints;
				self.getWidth = F.checkFnValue(self, data.getWidth, self.getWidth);
				if (self.o.breakpoints == null) self.o.breakpoints = { "xs": 480, "sm": 768, "md": 992, "lg": 1200 };
				// Create a nice friendly array to work with out of the breakpoints object.
				for (var name in self.o.breakpoints) {
					if (!self.o.breakpoints.hasOwnProperty(name)) continue;
					self.array.push(new F.Breakpoint(name, self.o.breakpoints[name]));
					self._classNames += 'breakpoint-' + name + ' ';
				}
				// Sort the breakpoints so the largest is checked first
				self.array.sort(function (a, b) {
					return b.width - a.width;
				});
			});
		},
		/**
		 * Initializes the class parsing the options into a sorted array of {@link FooTable.Breakpoint} objects.
		 * @instance
		 * @protected
		 * @fires FooTable.Breakpoints#"init.ft.breakpoints"
		 */
		init: function(){
			var self = this;
			/**
			 * The init.ft.breakpoints event is raised before any UI is generated.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Breakpoints#"init.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return this.ft.raise('init.ft.breakpoints').then(function(){
				self.current = self.get();
			});
		},
		/**
		 * Whenever the table is drawn this ensures the correct breakpoint class is applied to the table.
		 * @instance
		 * @protected
		 */
		draw: function(){
			this.ft.$el.removeClass(this._classNames).addClass('breakpoint-' + this.current.name);
		},

		/* PUBLIC */
		/**
		 * Calculates the current breakpoint from the {@link FooTable.Breakpoints#array} and sets the {@link FooTable.Breakpoints#current} property.
		 * @instance
		 * @returns {FooTable.Breakpoint}
		 */
		calculate: function(){
			var self = this, current = null, hidden = [], breakpoint, prev = null, width = self.getWidth();
			for (var i = 0, len = self.array.length; i < len; i++) {
				breakpoint = self.array[i];
				// if the width is smaller than the smallest breakpoint set the smallest as the current.
				// if the width is larger than the largest breakpoint set the largest as the current.
				// otherwise if the width is somewhere in between check all breakpoints testing if the width
				// is greater than the current but smaller than the previous.
				if ((!current && i == len -1)
					|| (width >= breakpoint.width && (prev instanceof F.Breakpoint ? width < prev.width : true))) {
					current = breakpoint;
				}
				if (!current) hidden.push(breakpoint.name);
				prev = breakpoint;
			}
			hidden.push(current.name);
			self.hidden = hidden.join(' ');
			return current;
		},
		/**
		 * Supplied a columns breakpoints this returns a boolean value indicating whether or not the column is visible.
		 * @param {string} breakpoints - A space separated string of breakpoint names.
		 * @returns {boolean}
		 */
		visible: function(breakpoints){
			if (F.is.emptyString(breakpoints)) return true;
			if (breakpoints === 'all') return false;
			var parts = breakpoints.split(' '), i = 0, len = parts.length;
			for (; i < len; i++){
				if (this.cascade ? F.str.containsWord(this.hidden, parts[i]) : parts[i] == this.current.name) return false;
			}
			return true;
		},
		/**
		 * Performs a check between the current breakpoint and the previous breakpoint and performs a redraw if they differ.
		 * @instance
		 * @fires FooTable.Breakpoints#"before.ft.breakpoints"
		 * @fires FooTable.Breakpoints#"after.ft.breakpoints"
		 */
		check: function(){
			var self = this, bp = self.get();
			if (!(bp instanceof F.Breakpoint)
				|| bp == self.current)
				return;

			/**
			 * The before.ft.breakpoints event is raised if the breakpoint has changed but before the UI is redrawn and is supplied both the current breakpoint
			 * and the next "new" one that is about to be applied.
			 * Calling preventDefault on this event will prevent the next breakpoint from being applied.
			 * @event FooTable.Breakpoints#"before.ft.breakpoints"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Breakpoint} current - The current breakpoint.
			 * @param {FooTable.Breakpoint} next - The breakpoint that is about to be applied.
			 */
			self.ft.raise('before.ft.breakpoints', [self.current, bp]).then(function(){
				var previous = self.current;
				self.current = bp;
				return self.ft.draw().then(function(){
					/**
					 * The after.ft.breakpoints event is raised after the breakpoint has changed and the UI is redrawn and is supplied both the "new" current breakpoint
					 * and the previous one that was replaced.
					 * @event FooTable.Breakpoints#"after.ft.breakpoints"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Breakpoint} current - The current breakpoint.
					 * @param {FooTable.Breakpoint} previous - The breakpoint that was just replaced.
					 */
					self.ft.raise('after.ft.breakpoints', [self.current, previous]);
				});
			});
		},
		/**
		 * Attempts to return a {@link FooTable.Breakpoint} instance when passed a {@link FooTable.Breakpoint},
		 * the {@link FooTable.Breakpoint#name} string or if nothing is supplied the current breakpoint.
		 * @instance
		 * @param {(FooTable.Breakpoint|string|number)} [breakpoint] - The breakpoint to retrieve.
		 * @returns {FooTable.Breakpoint}
		 */
		get: function(breakpoint){
			if (F.is.undef(breakpoint)) return this.calculate();
			if (breakpoint instanceof F.Breakpoint) return breakpoint;
			if (F.is.string(breakpoint)) return F.arr.first(this.array, function (bp) { return bp.name == breakpoint; });
			if (F.is.number(breakpoint)) return breakpoint >= 0 && breakpoint < this.array.length ? this.array[breakpoint] : null;
			return null;
		},
		/**
		 * Gets the width used to determine breakpoints whether it be from the viewport, parent or a custom function.
		 * @instance
		 * @returns {number}
		 */
		getWidth: function(){
			if (F.is.fn(this.o.getWidth)) return this.o.getWidth(this.ft);
			if (this.useParentWidth == true) return this.getParentWidth();
			return this.getViewportWidth();
		},
		/**
		 * Gets the tables direct parents width.
		 * @instance
		 * @returns {number}
		 */
		getParentWidth: function(){
			return this.ft.$el.parent().width();
		},
		/**
		 * Gets the current viewport width.
		 * @instance
		 * @returns {number}
		 */
		getViewportWidth: function(){
			return Math.max(document.documentElement.clientWidth, window.innerWidth, 0);
		}
	});

	F.components.register('breakpoints', F.Breakpoints, 1000);

})(jQuery, FooTable);
(function(F){
	/**
	 * A space delimited string of breakpoint names that specify when the column will be hidden. You can also specify "all" to make a column permanently display in an expandable detail row.
	 * @type {string}
	 * @default null
	 * @example <caption>The below shows how this value would be set</caption>
	 * breakpoints: "md"
	 */
	F.Column.prototype.breakpoints = null;

	F.Column.prototype.__breakpoints_define__ = function(definition){
		this.breakpoints = F.is.emptyString(definition.breakpoints) ? null : definition.breakpoints;
	};

	F.Column.extend('define', function(definition){
		this._super(definition);
		this.__breakpoints_define__(definition);
	});
})(FooTable);
(function(F){
	/**
	 * An object containing the breakpoints for the plugin.
	 * @type {object.<string, number>}
	 * @default { "xs": 480, "sm": 768, "md": 992, "lg": 1200 }
	 */
	F.Defaults.prototype.breakpoints = null;

	/**
	 * Whether or not breakpoints cascade. When set to true all breakpoints larger than the current will also be hidden along with it.
	 * @type {boolean}
	 * @default false
	 */
	F.Defaults.prototype.cascade = false;

	/**
	 * Whether or not to calculate breakpoints on the width of the parent element rather than the viewport.
	 * @type {boolean}
	 * @default false
	 */
	F.Defaults.prototype.useParentWidth = false;

	/**
	 * A function used to override the default getWidth function with a custom one.
	 * @type {function}
	 * @default null
	 * @example <caption>The below shows what the default getWidth function would look like.</caption>
	 * getWidth: function(instance){
	 * 	if (instance.o.useParentWidth == true) return instance.$el.parent().width();
	 * 	return instance.breakpoints.getViewportWidth();
	 * }
	 */
	F.Defaults.prototype.getWidth = null;
})(FooTable);
(function($, F){
	F.Columns = F.Component.extend(/** @lends FooTable.Columns */{
		/**
		 * The columns class contains all the logic for handling columns.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Columns}
		 */
		construct: function(table){
			// call the base class constructor
			this._super(table, true);

			/* PROTECTED */
			/**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @protected
			 * @type {FooTable.Table#options}
			 */
			this.o = table.o;

			/* PUBLIC */
			/**
			 * An array of {@link FooTable.Column} objects created from parsing the options and/or DOM.
			 * @type {Array.<FooTable.Column>}
			 */
			this.array = [];
			/**
			 * The jQuery header row object.
			 * @type {jQuery}
			 */
			this.$header = null;
			/**
			 * Whether or not to display the header row.
			 * @type {boolean}
			 */
			this.showHeader = table.o.showHeader;

			this._fromHTML = F.is.emptyArray(table.o.columns) && !F.is.promise(table.o.columns);
		},

		/* PROTECTED */
		/**
		 * This parses the columns from either the tables rows or the supplied options.
		 * @instance
		 * @protected
		 * @param {object} data - The tables jQuery data object.
		 * @returns {jQuery.Promise}
		 * @this FooTable.Columns
		 */
		parse: function(data){
			var self = this;
			return $.Deferred(function(d){
				function merge(cols1, cols2){
					var merged = [];
					// check if either of the arrays is empty as it can save us having to merge them by index.
					if (cols1.length == 0 || cols2.length == 0){
						merged = cols1.concat(cols2);
					} else {
						// at this point we have two arrays of column definitions, we now need to merge them based on there index properties
						// first figure out the highest column index provided so we can loop that many times to merge all columns and provide
						// defaults where nothing was specified (fill in the gaps in the array as it were).
						var highest = 0;
						F.arr.each(cols1.concat(cols2), function(c){
							if (c.index > highest) highest = c.index;
						});
						highest++;
						for (var i = 0, cols1_c, cols2_c; i < highest; i++){
							cols1_c = {};
							F.arr.each(cols1, function(c){
								if (c.index == i){
									cols1_c = c;
									return false;
								}
							});
							cols2_c = {};
							F.arr.each(cols2, function(c){
								if (c.index == i){
									cols2_c = c;
									return false;
								}
							});
							merged.push($.extend(true, {}, cols1_c, cols2_c));
						}
					}
					return merged;
				}

				var json = [], html = [];
				// get the column options from the content
				var $header = self.ft.$el.find('tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first').first(), $cell, cdata;
				if ($header.length > 0){
					var virtual = $header.parent().is('tbody') && $header.children().length == $header.children('td').length;
					if (!virtual) self.$header = $header.addClass('footable-header');
					$header.children('td,th').each(function(i, cell){
						$cell = $(cell);
						cdata = $cell.data();
						cdata.index = i;
						cdata.$el = $cell;
						cdata.virtual = virtual;
						html.push(cdata);
					});
					if (virtual) self.showHeader = false;
				}
				// get the supplied column options
				if (F.is.array(self.o.columns) && !F.is.emptyArray(self.o.columns)){
					F.arr.each(self.o.columns, function(c, i){
						c.index = i;
						json.push(c);
					});
					self.parseFinalize(d, merge(json, html));
				} else if (F.is.promise(self.o.columns)){
					self.o.columns.then(function(cols){
						F.arr.each(cols, function(c, i){
							c.index = i;
							json.push(c);
						});
						self.parseFinalize(d, merge(json, html));
					}, function(xhr){
						d.reject(Error('Columns ajax request error: ' + xhr.status + ' (' + xhr.statusText + ')'));
					});
				} else {
					self.parseFinalize(d, merge(json, html));
				}
			});
		},
		/**
		 * Used to finalize the parsing of columns it is supplied the parse deferred object which must be resolved with an array of {@link FooTable.Column} objects
		 * or rejected with an error.
		 * @instance
		 * @protected
		 * @param {jQuery.Deferred} deferred - The deferred object used for parsing.
		 * @param {Array.<object>} cols - An array of all merged column definitions.
		 */
		parseFinalize: function(deferred, cols){
			// we now have a merged array of all column definitions supplied to the plugin, time to make the objects.
			var self = this, columns = [], column;
			F.arr.each(cols, function(def){
				// if we have a column registered using the definition type then create an instance of that column otherwise just create a default text column.
				if (column = F.columns.contains(def.type) ? F.columns.make(def.type, self.ft, def) : new F.Column(self.ft, def))
					columns.push(column);
			});
			if (F.is.emptyArray(columns)){
				deferred.reject(Error("No columns supplied."));
			} else {
				// make sure to sort by the column index as the merge process may have mixed them up
				columns.sort(function(a, b){ return a.index - b.index; });
				deferred.resolve(columns);
			}
		},
		/**
		 * The columns preinit method is used to parse and check the column options supplied from both static content and through the constructor.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the root table element.
		 * @this FooTable.Columns
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.columns event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Columns#"preinit.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			return self.ft.raise('preinit.ft.columns', [data]).then(function(){
				return self.parse(data).then(function(columns){
					self.array = columns;
					self.showHeader = F.is.boolean(data.showHeader) ? data.showHeader : self.showHeader;
				});
			});
		},
		/**
		 * Initializes the columns creating the table header if required.
		 * @instance
		 * @protected
		 * @fires FooTable.Columns#"init.ft.columns"
		 * @this FooTable.Columns
		 */
		init: function(){
			var self = this;
			/**
			 * The init.ft.columns event is raised after the header row is created/parsed for column data.
			 * @event FooTable.Columns#"init.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} instance - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Column>} columns - The array of {@link FooTable.Column} objects parsed from the options and/or DOM.
			 */
			return this.ft.raise('init.ft.columns', [ self.array ]).then(function(){
				self.$create();
			});
		},
		/**
		 * Destroys the columns component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Columns#"destroy.ft.columns"
		 */
		destroy: function(){
			/**
			 * The destroy.ft.columns event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Columns#"destroy.ft.columns"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.columns').then(function(){
				if (!self._fromHTML) self.$header.remove();
			});
		},
		/**
		 * The predraw method called from within the {@link FooTable.Table#draw} method.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */
		predraw: function(){
			var self = this, first = true;
			self.visibleColspan = 0;
			self.firstVisibleIndex = 0;
			self.lastVisibleIndex = 0;
			self.hasHidden = false;
			F.arr.each(self.array, function(col){
				col.hidden = !self.ft.breakpoints.visible(col.breakpoints);
				if (!col.hidden && col.visible){
					if (first){
						self.firstVisibleIndex = col.index;
						first = false;
					}
					self.lastVisibleIndex = col.index;
					self.visibleColspan++;
				}
				if (col.hidden) self.hasHidden = true;
			});
			self.ft.$el.toggleClass('breakpoint', self.hasHidden);
		},
		/**
		 * Performs the actual drawing of the columns, hiding or displaying them depending on there breakpoints.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */
		draw: function(){
			F.arr.each(this.array, function(col){
				col.$el.css('display', (col.hidden || !col.visible  ? 'none' : 'table-cell'));
			});
			if (!this.showHeader && F.is.jq(this.$header.parent())){
				this.$header.detach();
			}
		},
		/**
		 * Creates the header row for the table from the parsed column definitions.
		 * @instance
		 * @protected
		 * @this FooTable.Columns
		 */
		$create: function(){
			var self = this;
			self.$header = F.is.jq(self.$header) ? self.$header : $('<tr/>', {'class': 'footable-header'});
			self.$header.children('th,td').detach();
			F.arr.each(self.array, function(col){
				self.$header.append(col.$el);
			});
			if (self.showHeader && !F.is.jq(self.$header.parent())){
				self.ft.$el.children('thead').append(self.$header);
			}
		},
		/**
		 * Attempts to return a {@link FooTable.Column} instance when passed the {@link FooTable.Column} instance, the {@link FooTable.Column#name} string or the {@link FooTable.Column#index} number.
		 * If supplied a function this will return an array by iterating all columns passing the index and column itself to the supplied callback as arguments.
		 * Returning true in the callback will include the column in the result.
		 * @instance
		 * @param {(FooTable.Column|string|number|function)} column - The column to retrieve.
		 * @returns {(Array.<FooTable.Column>|FooTable.Column|null)} The column if one is found otherwise it returns NULL.
		 * @example <caption>This example shows retrieving a column by name assuming a column called "id" exists. The <code>columns</code> object is an instance of {@link FooTable.Columns}.</caption>
		 * var column = columns.get('id');
		 * if (column instanceof FooTable.Column){
		 * 	// found the "id" column
		 * } else {
		 * 	// no column with a name of "id" exists
		 * }
		 * // to get an array of all hidden columns
		 * var columns = columns.get(function(col){
		 *  return col.hidden;
		 * });
		 */
		get: function(column){
			if (column instanceof F.Column) return column;
			if (F.is.string(column)) return F.arr.first(this.array, function (col) { return col.name == column; });
			if (F.is.number(column)) return F.arr.first(this.array, function (col) { return col.index == column; });
			if (F.is.fn(column)) return F.arr.get(this.array, column);
			return null;
		},
		/**
		 * Takes an array of column names, index's or actual {@link FooTable.Column} and ensures that an array of only {@link FooTable.Column} is returned.
		 * @instance
		 * @param {(Array.<string>|Array.<number>|Array.<FooTable.Column>)} columns - The array of column names, index's or {@link FooTable.Column} to check.
		 * @returns {Array.<FooTable.Column>}
		 */
		ensure: function(columns){
			var self = this, result = [];
			if (!F.is.array(columns)) return result;
			F.arr.each(columns, function(name){
				result.push(self.get(name));
			});
			return result;
		}
	});

	F.components.register('columns', F.Columns, 900);

})(jQuery, FooTable);
(function(F){
	/**
	 * An array containing the column options or a jQuery promise that resolves returning the columns. The index of the definitions must match the index of each column as it should appear in the table. For more information on the options available see the {@link FooTable.Column} object.
	 * @type {(Array.<object>|jQuery.Promise)}
	 * @default []
	 * @example <caption>The below shows column definitions for a row defined as <code>{ id: Number, name: String, age: Number }</code>. The ID column has a fixed width, the table is initially sorted on the Name column and the Age column will be hidden on phones.</caption>
	 * columns: [
	 * 	{ name: 'id', title: 'ID', type: 'number' },
	 *	{ name: 'name', title: 'Name', sorted: true, direction: 'ASC' }
	 *	{ name: 'age', title: 'Age', type: 'number', breakpoints: 'xs' }
	 * ]
	 */
	F.Defaults.prototype.columns = [];

	/**
	 * Specifies whether or not the column headers should be displayed.
	 * @type {boolean}
	 * @default true
	 */
	F.Defaults.prototype.showHeader = true;
})(FooTable);
(function ($, F) {
	F.Rows = F.Component.extend(/** @lends FooTable.Rows */{
		/**
		 * The rows class contains all the logic for handling rows.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table -  The parent {@link FooTable.Table} this component belongs to.
		 * @returns {FooTable.Rows}
		 */
		construct: function (table) {
			// call the base class constructor
			this._super(table, true);

			/**
			 * This provides a shortcut to the {@link FooTable.Table#options} object.
			 * @instance
			 * @protected
			 * @type {FooTable.Table#options}
			 */
			this.o = table.o;
			/**
			 * The current working array of {@link FooTable.Row} objects.
			 * @instance
			 * @protected
			 * @type {Array.<FooTable.Row>}
			 * @default []
			 */
			this.array = [];
			/**
			 * The base array of rows parsed from either the DOM or the constructor options.
			 * The {@link FooTable.Rows#current} member is populated with a shallow clone of this array
			 * during the predraw operation before any core or custom components are executed.
			 * @instance
			 * @protected
			 * @type {Array.<FooTable.Row>}
			 * @default []
			 */
			this.all = [];
			/**
			 * Whether or not to display a toggle in each row when it contains hidden columns.
			 * @type {boolean}
			 * @default true
			 */
			this.showToggle = table.o.showToggle;
			/**
			 * The CSS selector used to filter row click events. If the event.target property matches the selector the row will be toggled.
			 * @type {string}
			 * @default "tr,td,.footable-toggle"
			 */
			this.toggleSelector = table.o.toggleSelector;
			/**
			 * Specifies which column the row toggle is appended to. Supports only two values; "first" and "last"
			 * @type {string}
			 */
			this.toggleColumn = table.o.toggleColumn;
			/**
			 * The text to display when the table has no rows.
			 * @type {string}
			 */
			this.emptyString = table.o.empty;
			/**
			 * Whether or not the first rows details are expanded by default when displayed on a device that hides any columns.
			 * @type {boolean}
			 */
			this.expandFirst = table.o.expandFirst;
			/**
			 * Whether or not all row details are expanded by default when displayed on a device that hides any columns.
			 * @type {boolean}
			 */
			this.expandAll = table.o.expandAll;
			/**
			 * The jQuery object that contains the empty row control.
			 * @type {jQuery}
			 */
			this.$empty = null;
			this._fromHTML = F.is.emptyArray(table.o.rows) && !F.is.promise(table.o.rows);
		},
		/**
		 * This parses the rows from either the tables rows or the supplied options.
		 * @instance
		 * @protected
		 * @returns {jQuery.Promise}
		 */
		parse: function(){
			var self = this;
			return $.Deferred(function(d){
				var $rows = self.ft.$el.children('tbody').children('tr');
				if (F.is.array(self.o.rows) && self.o.rows.length > 0){
					self.parseFinalize(d, self.o.rows);
				} else if (F.is.promise(self.o.rows)){
					self.o.rows.then(function(rows){
						self.parseFinalize(d, rows);
					}, function(xhr){
						d.reject(Error('Rows ajax request error: ' + xhr.status + ' (' + xhr.statusText + ')'));
					});
				} else if (F.is.jq($rows)){
					self.parseFinalize(d, $rows);
					$rows.detach();
				} else {
					self.parseFinalize(d, []);
				}
			});
		},
		/**
		 * Used to finalize the parsing of rows it is supplied the parse deferred object which must be resolved with an array of {@link FooTable.Row} objects
		 * or rejected with an error.
		 * @instance
		 * @protected
		 * @param {jQuery.Deferred} deferred - The deferred object used for parsing.
		 * @param {(Array.<object>|jQuery)} rows - An array of row values and options or the jQuery object containing all rows.
		 */
		parseFinalize: function(deferred, rows){
			var self = this, result = $.map(rows, function(r){
				return new F.Row(self.ft, self.ft.columns.array, r);
			});
			deferred.resolve(result);
		},
		/**
		 * The columns preinit method is used to parse and check the column options supplied from both static content and through the constructor.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the root table element.
		 * @fires FooTable.Rows#"preinit.ft.rows"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.rows event is raised before any UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Rows#"preinit.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			return self.ft.raise('preinit.ft.rows', [data]).then(function(){
				return self.parse().then(function(rows){
					self.all = rows;
					self.array = self.all.slice(0);
					self.showToggle = F.is.boolean(data.showToggle) ? data.showToggle : self.showToggle;
					self.toggleSelector = F.is.string(data.toggleSelector) ? data.toggleSelector : self.toggleSelector;
					self.toggleColumn = F.is.string(data.toggleColumn) ? data.toggleColumn : self.toggleColumn;
					if (self.toggleColumn != "first" && self.toggleColumn != "last") self.toggleColumn = "first";
					self.emptyString = F.is.string(data.empty) ? data.empty : self.emptyString;
					self.expandFirst = F.is.boolean(data.expandFirst) ? data.expandFirst : self.expandFirst;
					self.expandAll = F.is.boolean(data.expandAll) ? data.expandAll : self.expandAll;
				});
			});
		},
		/**
		 * Initializes the rows class using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Rows#"init.ft.rows"
		 */
		init: function () {
			var self = this;
			/**
			 * The init.ft.rows event is raised after the the rows are parsed from either the DOM or the options.
			 * Calling preventDefault on this event will disable the entire plugin.
			 * @event FooTable.Rows#"init.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} instance - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Row>} rows - The array of {@link FooTable.Row} objects parsed from the DOM or the options.
			 */
			return self.ft.raise('init.ft.rows', [self.all]).then(function(){
				self.$create();
			});
		},
		/**
		 * Destroys the rows component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Rows#"destroy.ft.rows"
		 */
		destroy: function(){
			/**
			 * The destroy.ft.rows event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Rows#"destroy.ft.rows"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.rows').then(function(){
				F.arr.each(self.array, function(row){
					row.predraw(!self._fromHTML);
				});
				self.all = self.array = [];
			});
		},
		/**
		 * Performs the predraw operations that are required including creating the shallow clone of the {@link FooTable.Rows#array} to work with.
		 * @instance
		 * @protected
		 */
		predraw: function(){
			F.arr.each(this.array, function(row){
				row.predraw();
			});
			this.array = this.all.slice(0);
		},
		$create: function(){
			this.$empty = $('<tr/>', { 'class': 'footable-empty' }).append($('<td/>').text(this.emptyString));
		},
		/**
		 * Performs the actual drawing of the table rows.
		 * @instance
		 * @protected
		 */
		draw: function(){
			var self = this, $tbody = self.ft.$el.children('tbody'), first = true;
			// if we have rows
			if (self.array.length > 0){
				self.$empty.detach();
				// loop through them appending to the tbody and then drawing
				F.arr.each(self.array, function(row){
					if ((self.expandFirst && first) || self.expandAll){
						row.expanded = true;
						first = false;
					}
					row.draw($tbody);
				});
			} else {
				// otherwise display the $empty row
				self.$empty.children('td').attr('colspan', self.ft.columns.visibleColspan);
				$tbody.append(self.$empty);
			}
		},
		/**
		 * Loads a JSON array of row objects into the table
		 * @instance
		 * @param {Array.<object>} data - An array of row objects to load.
		 * @param {boolean} [append=false] - Whether or not to append the new rows to the current rows array or to replace them entirely.
		 */
		load: function(data, append){
			var self = this, rows = $.map(data, function(r){
				return new F.Row(self.ft, self.ft.columns.array, r);
			});
			F.arr.each(this.array, function(row){
				row.predraw();
			});
			this.all = (F.is.boolean(append) ? append : false) ? this.all.concat(rows) : rows;
			this.array = this.all.slice(0);
			this.ft.draw();
		},
		/**
		 * Expands all visible rows.
		 * @instance
		 */
		expand: function(){
			F.arr.each(this.array, function(row){
				row.expand();
			});
		},
		/**
		 * Collapses all visible rows.
		 * @instance
		 */
		collapse: function(){
			F.arr.each(this.array, function(row){
				row.collapse();
			});
		}
	});

	F.components.register('rows', F.Rows, 800);

})(jQuery, FooTable);
(function(F){
	/**
	 * An array of JSON objects containing the row data or a jQuery promise that resolves returning the row data.
	 * @type {(Array.<object>|jQuery.Promise)}
	 * @default []
	 */
	F.Defaults.prototype.rows = [];

	/**
	 * A string to display when there are no rows in the table.
	 * @type {string}
	 * @default "No results"
	 */
	F.Defaults.prototype.empty = 'No results';

	/**
	 * Whether or not the toggle is appended to each row.
	 * @type {boolean}
	 * @default true
	 */
	F.Defaults.prototype.showToggle = true;

	/**
	 * The CSS selector used to filter row click events. If the event.target property matches the selector the row will be toggled.
	 * @type {string}
	 * @default "tr,td,.footable-toggle"
	 */
	F.Defaults.prototype.toggleSelector = 'tr,td,.footable-toggle';

	/**
	 * Specifies which column to display the row toggle in. The only supported values are "first" or "last".
	 * @type {string}
	 * @default "first"
	 */
	F.Defaults.prototype.toggleColumn = 'first';

	/**
	 * Whether or not the first rows details are expanded by default when displayed on a device that hides any columns.
	 * @type {boolean}
	 */
	F.Defaults.prototype.expandFirst = false;

	/**
	 * Whether or not all row details are expanded by default when displayed on a device that hides any columns.
	 * @type {boolean}
	 */
	F.Defaults.prototype.expandAll = false;
})(FooTable);
(function(F){
	/**
	 * Loads a JSON array of row objects into the table
	 * @param {Array.<object>} data - An array of row objects to load.
	 * @param {boolean} [append=false] - Whether or not to append the new rows to the current rows array or to replace them entirely.
	 */
	F.Table.prototype.loadRows = function(data, append){
		this.rows.load(data, append);
	};
})(FooTable);
(function(F){
	F.Filter = F.Class.extend(/** @lends FooTable.Filter */{
		/**
		 * The filter object contains the query to filter by and the columns to apply it to.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} name - The name for the filter.
		 * @param {(string|FooTable.Query)} query - The query for the filter.
		 * @param {Array.<FooTable.Column>} columns - The columns to apply the query to.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 * @returns {FooTable.Filter}
		 */
		construct: function(name, query, columns, space, connectors, ignoreCase, hidden){
			/**
			 * The name of the filter.
			 * @instance
			 * @type {string}
			 */
			this.name = name;
			/**
			 * A string specifying how the filter treats space characters. Can be either "OR" or "AND".
			 * @instance
			 * @type {string}
			 */
			this.space = F.is.string(space) && (space == 'OR' || space == 'AND') ? space : 'AND';
			/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */
			this.connectors = F.is.boolean(connectors) ? connectors : true;
			/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */
			this.ignoreCase = F.is.boolean(ignoreCase) ? ignoreCase : true;
			/**
			 * Whether or not this is a hidden filter.
			 * @instance
			 * @type {boolean}
			 */
			this.hidden = F.is.boolean(hidden) ? hidden : false;
			/**
			 * The query for the filter.
			 * @instance
			 * @type {(string|FooTable.Query)}
			 */
			this.query = query instanceof F.Query ? query : new F.Query(query, this.space, this.connectors, this.ignoreCase);
			/**
			 * The columns to apply the query to.
			 * @instance
			 * @type {Array.<FooTable.Column>}
			 */
			this.columns = columns;
		},
		/**
		 * Checks if the current filter matches the supplied string.
		 * If the current query property is a string it will be auto converted to a {@link FooTable.Query} object to perform the match.
		 * @instance
		 * @param {string} str - The string to check.
		 * @returns {boolean}
		 */
		match: function(str){
			if (!F.is.string(str)) return false;
			if (F.is.string(this.query)){
				this.query = new F.Query(this.query, this.space, this.connectors, this.ignoreCase);
			}
			return this.query instanceof F.Query ? this.query.match(str) : false;
		},
		/**
		 * Checks if the current filter matches the supplied {@link FooTable.Row}.
		 * @instance
		 * @param {FooTable.Row} row - The row to check.
		 * @returns {boolean}
		 */
		matchRow: function(row){
			var self = this, text = F.arr.map(row.cells, function(cell){
				return F.arr.contains(self.columns, cell.column) ? cell.filterValue : null;
			}).join(' ');
			return self.match(text);
		}
	});

})(FooTable);
(function ($, F) {
	F.Filtering = F.Component.extend(/** @lends FooTable.Filtering */{
		/**
		 * The filtering component adds a search input and column selector dropdown to the table allowing users to filter the using space delimited queries.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Filtering}
		 */
		construct: function (table) {
			// call the constructor of the base class
			this._super(table, table.o.filtering.enabled);

			/* PUBLIC */
			/**
			 * The filters to apply to the current {@link FooTable.Rows#array}.
			 * @instance
			 * @type {Array.<FooTable.Filter>}
			 */
			this.filters = table.o.filtering.filters;
			/**
			 * The delay in milliseconds before the query is auto applied after a change.
			 * @instance
			 * @type {number}
			 */
			this.delay = table.o.filtering.delay;
			/**
			 * The minimum number of characters allowed in the search input before it is auto applied.
			 * @instance
			 * @type {number}
			 */
			this.min = table.o.filtering.min;
			/**
			 * Specifies how whitespace in a filter query is handled.
			 * @instance
			 * @type {string}
			 */
			this.space = table.o.filtering.space;
			/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */
			this.connectors = table.o.filtering.connectors;
			/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */
			this.ignoreCase = table.o.filtering.ignoreCase;
			/**
			 * Whether or not search queries are treated as phrases when matching.
			 * @instance
			 * @type {boolean}
			 */
			this.exactMatch = table.o.filtering.exactMatch;
			/**
			 * The placeholder text to display within the search $input.
			 * @instance
			 * @type {string}
			 */
			this.placeholder = table.o.filtering.placeholder;
			/**
			 * The title to display at the top of the search input column select.
			 * @type {string}
			 */
			this.dropdownTitle = table.o.filtering.dropdownTitle;
			/**
			 * The position of the $search input within the filtering rows cell.
			 * @type {string}
			 */
			this.position = table.o.filtering.position;
			/**
			 * Whether or not to focus the search input after the search/clear button is clicked or after auto applying the search input query.
			 * @type {boolean}
			 */
			this.focus = table.o.filtering.focus;
			/**
			 * A selector specifying where to place the filtering components form, if null the form is displayed within a row in the head of the table.
			 * @type {string}
			 */
			this.container = table.o.filtering.container;
			/**
			 * The jQuery object of the element containing the entire filtering form.
			 * @instance
			 * @type {jQuery}
			 */
			this.$container = null;
			/**
			 * The jQuery row object that contains all the filtering specific elements.
			 * @instance
			 * @type {jQuery}
			 */
			this.$row = null;
			/**
			 * The jQuery cell object that contains the search input and column selector.
			 * @instance
			 * @type {jQuery}
			 */
			this.$cell = null;
			/**
			 * The jQuery form object of the form that contains the search input and column selector.
			 * @instance
			 * @type {jQuery}
			 */
			this.$form = null;
			/**
			 * The jQuery object of the column selector dropdown.
			 * @instance
			 * @type {jQuery}
			 */
			this.$dropdown = null;
			/**
			 * The jQuery object of the search input.
			 * @instance
			 * @type {jQuery}
			 */
			this.$input = null;
			/**
			 * The jQuery object of the search button.
			 * @instance
			 * @type {jQuery}
			 */
			this.$button = null;

			/* PRIVATE */
			/**
			 * The timeout ID for the filter changed event.
			 * @instance
			 * @private
			 * @type {?number}
			 */
			this._filterTimeout = null;
			/**
			 * The regular expression used to check for encapsulating quotations.
			 * @instance
			 * @private
			 * @type {RegExp}
			 */
			this._exactRegExp = /^"(.*?)"$/;
		},

		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the filtering component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Filtering#"preinit.ft.filtering"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.filtering event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Filtering#"preinit.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			return self.ft.raise('preinit.ft.filtering').then(function(){
				// first check if filtering is enabled via the class being applied
				if (self.ft.$el.hasClass('footable-filtering'))
					self.enabled = true;
				// then check if the data-filtering-enabled attribute has been set
				self.enabled = F.is.boolean(data.filtering)
					? data.filtering
					: self.enabled;

				// if filtering is not enabled exit early as we don't need to do anything else
				if (!self.enabled) return;

				self.space = F.is.string(data.filterSpace)
					? data.filterSpace
					: self.space;

				self.min = F.is.number(data.filterMin)
					? data.filterMin
					: self.min;

				self.connectors = F.is.boolean(data.filterConnectors)
					? data.filterConnectors
					: self.connectors;

				self.ignoreCase = F.is.boolean(data.filterIgnoreCase)
					? data.filterIgnoreCase
					: self.ignoreCase;

				self.exactMatch = F.is.boolean(data.filterExactMatch)
					? data.filterExactMatch
					: self.exactMatch;

				self.focus = F.is.boolean(data.filterFocus)
					? data.filterFocus
					: self.focus;

				self.delay = F.is.number(data.filterDelay)
					? data.filterDelay
					: self.delay;

				self.placeholder = F.is.string(data.filterPlaceholder)
					? data.filterPlaceholder
					: self.placeholder;

				self.dropdownTitle = F.is.string(data.filterDropdownTitle)
					? data.filterDropdownTitle
					: self.dropdownTitle;

				self.container = F.is.string(data.filterContainer)
					? data.filterContainer
					: self.container;

				self.filters = F.is.array(data.filterFilters)
					? self.ensure(data.filterFilters)
					: self.ensure(self.filters);

				if (self.ft.$el.hasClass('footable-filtering-left'))
					self.position = 'left';
				if (self.ft.$el.hasClass('footable-filtering-center'))
					self.position = 'center';
				if (self.ft.$el.hasClass('footable-filtering-right'))
					self.position = 'right';

				self.position = F.is.string(data.filterPosition)
					? data.filterPosition
					: self.position;
			},function(){
				self.enabled = false;
			});
		},
		/**
		 * Initializes the filtering component for the plugin.
		 * @instance
		 * @protected
		 * @fires FooTable.Filtering#"init.ft.filtering"
		 */
		init: function () {
			var self = this;
			/**
			 * The init.ft.filtering event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Filtering#"init.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return self.ft.raise('init.ft.filtering').then(function(){
				self.$create();
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Destroys the filtering component removing any UI from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Filtering#"destroy.ft.filtering"
		 */
		destroy: function () {
			var self = this;
			/**
			 * The destroy.ft.filtering event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Filtering#"destroy.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			return self.ft.raise('destroy.ft.filtering').then(function(){
				self.ft.$el.removeClass('footable-filtering')
					.find('thead > tr.footable-filtering').remove();
			});
		},
		/**
		 * Creates the filtering UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 * @this FooTable.Filtering
		 */
		$create: function () {
			var self = this;
			// generate the cell that actually contains all the UI.
			var $form_grp = $('<div/>', {'class': 'form-group footable-filtering-search'})
					.append($('<label/>', {'class': 'sr-only', text: 'Search'})),
				$input_grp = $('<div/>', {'class': 'input-group'}).appendTo($form_grp),
				$input_grp_btn = $('<div/>', {'class': 'input-group-btn'}),
				$dropdown_toggle = $('<button/>', {type: 'button', 'class': 'btn btn-default dropdown-toggle'})
					.on('click', { self: self }, self._onDropdownToggleClicked)
					.append($('<span/>', {'class': 'caret'})),
				position;

			switch (self.position){
				case 'left': position = 'footable-filtering-left'; break;
				case 'center': position = 'footable-filtering-center'; break;
				default: position = 'footable-filtering-right'; break;
			}
			self.ft.$el.addClass('footable-filtering').addClass(position);

			self.$container = self.container === null ? $() : $(self.container).first();
			if (!self.$container.length){
				// add it to a row and then populate it with the search input and column selector dropdown.
				self.$row = $('<tr/>', {'class': 'footable-filtering'}).prependTo(self.ft.$el.children('thead'));
				self.$cell = $('<th/>').attr('colspan', self.ft.columns.visibleColspan).appendTo(self.$row);
				self.$container = self.$cell;
			} else {
				self.$container.addClass('footable-filtering-external').addClass(position);
			}
			self.$form = $('<form/>', {'class': 'form-inline'}).append($form_grp).appendTo(self.$container);

			self.$input = $('<input/>', {type: 'text', 'class': 'form-control', placeholder: self.placeholder});

			self.$button = $('<button/>', {type: 'button', 'class': 'btn btn-primary'})
				.on('click', { self: self }, self._onSearchButtonClicked)
				.append($('<span/>', {'class': 'fooicon fooicon-search'}));

			self.$dropdown = $('<ul/>', {'class': 'dropdown-menu dropdown-menu-right'});
			if (!F.is.emptyString(self.dropdownTitle)){
				self.$dropdown.append($('<li/>', {'class': 'dropdown-header','text': self.dropdownTitle}));
			}
			self.$dropdown.append(
				F.arr.map(self.ft.columns.array, function (col) {
					return col.filterable ? $('<li/>').append(
						$('<a/>', {'class': 'checkbox'}).append(
							$('<label/>', {html: col.title}).prepend(
								$('<input/>', {type: 'checkbox', checked: true}).data('__FooTableColumn__', col)
							)
						)
					) : null;
				})
			);

			if (self.delay > 0){
				self.$input.on('keypress keyup paste', { self: self }, self._onSearchInputChanged);
				self.$dropdown.on('click', 'input[type="checkbox"]', {self: self}, self._onSearchColumnClicked);
			}

			$input_grp_btn.append(self.$button, $dropdown_toggle, self.$dropdown);
			$input_grp.append(self.$input, $input_grp_btn);
		},
		/**
		 * Performs the filtering of rows before they are appended to the page.
		 * @instance
		 * @protected
		 */
		predraw: function(){
			if (F.is.emptyArray(this.filters))
				return;

			var self = this;
			self.ft.rows.array = $.grep(self.ft.rows.array, function(r){
				return r.filtered(self.filters);
			});
		},
		/**
		 * As the rows are drawn by the {@link FooTable.Rows#draw} method this simply updates the colspan for the UI.
		 * @instance
		 * @protected
		 */
		draw: function(){
			if (F.is.jq(this.$cell)){
				this.$cell.attr('colspan', this.ft.columns.visibleColspan);
			}
			var search = this.find('search');
			if (search instanceof F.Filter){
				var query = search.query.val();
				if (this.exactMatch && this._exactRegExp.test(query)){
					query = query.replace(this._exactRegExp, '$1');
				}
				this.$input.val(query);
			} else {
				this.$input.val(null);
			}
			this.setButton(!F.arr.any(this.filters, function(f){ return !f.hidden; }));
		},

		/* PUBLIC */
		/**
		 * Adds or updates the filter using the supplied name, query and columns.
		 * @instance
		 * @param {(string|FooTable.Filter|object)} nameOrFilter - The name for the filter or the actual filter object itself.
		 * @param {(string|FooTable.Query)} [query] - The query for the filter. This is only optional when the first parameter is a filter object.
		 * @param {(Array.<number>|Array.<string>|Array.<FooTable.Column>)} [columns] - The columns to apply the filter to.
		 * 	If not supplied the filter will be applied to all selected columns in the search input dropdown.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 */
		addFilter: function(nameOrFilter, query, columns, ignoreCase, connectors, space, hidden){
			var f = this.createFilter(nameOrFilter, query, columns, ignoreCase, connectors, space, hidden);
			if (f instanceof F.Filter){
				this.removeFilter(f.name);
				this.filters.push(f);
			}
		},
		/**
		 * Removes the filter using the supplied name if it exists.
		 * @instance
		 * @param {string} name - The name of the filter to remove.
		 */
		removeFilter: function(name){
			F.arr.remove(this.filters, function(f){ return f.name == name; });
		},
		/**
		 * Performs the required steps to handle filtering including the raising of the {@link FooTable.Filtering#"before.ft.filtering"} and {@link FooTable.Filtering#"after.ft.filtering"} events.
		 * @instance
		 * @param {boolean} [focus=false] - Whether or not to set the focus to the input once filtering is complete.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Filtering#"before.ft.filtering"
		 * @fires FooTable.Filtering#"after.ft.filtering"
		 */
		filter: function(focus){
			var self = this;
			self.filters = self.ensure(self.filters);
			/**
			 * The before.ft.filtering event is raised before a filter is applied and allows listeners to modify the filter or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Filtering#"before.ft.filtering"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {Array.<FooTable.Filter>} filters - The filters that are about to be applied.
			 */
			return self.ft.raise('before.ft.filtering', [self.filters]).then(function(){
				self.filters = self.ensure(self.filters);
				if (focus){
					var start = self.$input.prop('selectionStart'),
						end = self.$input.prop('selectionEnd');
				}
				return self.ft.draw().then(function(){
					if (focus){
						self.$input.focus().prop({
							selectionStart: start,
							selectionEnd: end
						});
					}
					/**
					 * The after.ft.filtering event is raised after a filter has been applied.
					 * @event FooTable.Filtering#"after.ft.filtering"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Filter} filter - The filters that were applied.
					 */
					self.ft.raise('after.ft.filtering', [self.filters]);
				});
			});
		},
		/**
		 * Removes the current search filter.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Filtering#"before.ft.filtering"
		 * @fires FooTable.Filtering#"after.ft.filtering"
		 */
		clear: function(){
			this.filters = F.arr.get(this.filters, function(f){ return f.hidden; });
			return this.filter(this.focus);
		},
		/**
		 * Toggles the button icon between the search and clear icons based on the supplied value.
		 * @instance
		 * @param {boolean} search - Whether or not to display the search icon.
		 */
		setButton: function(search){
			if (!search){
				this.$button.children('.fooicon').removeClass('fooicon-search').addClass('fooicon-remove');
			} else {
				this.$button.children('.fooicon').removeClass('fooicon-remove').addClass('fooicon-search');
			}
		},
		/**
		 * Finds a filter by name.
		 * @param {string} name - The name of the filter to find.
		 * @returns {(FooTable.Filter|null)}
		 */
		find: function(name){
			return F.arr.first(this.filters, function(f){ return f.name == name; });
		},
		/**
		 * Gets an array of {@link FooTable.Column} to apply the search filter to. This also doubles as the default columns for filters which do not specify any columns.
		 * @instance
		 * @returns {Array.<FooTable.Column>}
		 */
		columns: function(){
			if (F.is.jq(this.$dropdown)){
				// if we have a dropdown containing the column names get the selected columns from there
				return this.$dropdown.find('input:checked').map(function(){
					return $(this).data('__FooTableColumn__');
				}).get();
			} else {
				// otherwise find all columns that are set to be filterable.
				return this.ft.columns.get(function(c){ return c.filterable; });
			}
		},
		/**
		 * Takes an array of plain objects containing the filter values or actual {@link FooTable.Filter} objects and ensures that an array of only {@link FooTable.Filter} is returned.
		 * If supplied a plain object that object must contain a name, query and columns properties which are used to create a new {@link FooTable.Filter}.
		 * @instance
		 * @param {({name: string, query: (string|FooTable.Query), columns: (Array.<string>|Array.<number>|Array.<FooTable.Column>)}|Array.<FooTable.Filter>)} filters - The array of filters to check.
		 * @returns {Array.<FooTable.Filter>}
		 */
		ensure: function(filters){
			var self = this, parsed = [], filterable = self.columns();
			if (!F.is.emptyArray(filters)){
				F.arr.each(filters, function(f){
					f = self._ensure(f, filterable);
					if (f instanceof F.Filter) parsed.push(f);
				});
			}
			return parsed;
		},

		/**
		 * Creates a new filter using the supplied object or individual parameters to populate it.
		 * @instance
		 * @param {(string|FooTable.Filter|object)} nameOrObject - The name for the filter or the actual filter object itself.
		 * @param {(string|FooTable.Query)} [query] - The query for the filter. This is only optional when the first parameter is a filter object.
		 * @param {(Array.<number>|Array.<string>|Array.<FooTable.Column>)} [columns] - The columns to apply the filter to.
		 * 	If not supplied the filter will be applied to all selected columns in the search input dropdown.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {string} [space="AND"] - How the query treats space chars.
		 * @param {boolean} [hidden=true] - Whether or not this is a hidden filter.
		 * @returns {*}
		 */
		createFilter: function(nameOrObject, query, columns, ignoreCase, connectors, space, hidden){
			if (F.is.string(nameOrObject)){
				nameOrObject = {name: nameOrObject, query: query, columns: columns, ignoreCase: ignoreCase, connectors: connectors, space: space, hidden: hidden};
			}
			return this._ensure(nameOrObject, this.columns());
		},

		/* PRIVATE */
		_ensure: function(filter, selectedColumns){
			if ((F.is.hash(filter) || filter instanceof F.Filter) && !F.is.emptyString(filter.name) && (!F.is.emptyString(filter.query) || filter.query instanceof F.Query)){
				filter.columns = F.is.emptyArray(filter.columns) ? selectedColumns : this.ft.columns.ensure(filter.columns);
				filter.ignoreCase = F.is.boolean(filter.ignoreCase) ? filter.ignoreCase : this.ignoreCase;
				filter.connectors = F.is.boolean(filter.connectors) ? filter.connectors : this.connectors;
				filter.hidden = F.is.boolean(filter.hidden) ? filter.hidden : false;
				filter.space = F.is.string(filter.space) && (filter.space === 'AND' || filter.space === 'OR') ? filter.space : this.space;
				filter.query = F.is.string(filter.query) ? new F.Query(filter.query, filter.space, filter.connectors, filter.ignoreCase) : filter.query;
				return (filter instanceof F.Filter)
					? filter
					: new F.Filter(filter.name, filter.query, filter.columns, filter.space, filter.connectors, filter.ignoreCase, filter.hidden);
			}
			return null;
		},
		/**
		 * Handles the change event for the {@link FooTable.Filtering#$input}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onSearchInputChanged: function (e) {
			var self = e.data.self;
			var alpha = e.type == 'keypress' && !F.is.emptyString(String.fromCharCode(e.charCode)),
				ctrl = e.type == 'keyup' && (e.which == 8 || e.which == 46),
				paste = e.type == 'paste'; // backspace & delete

			// if alphanumeric characters or specific control characters
			if(alpha || ctrl || paste) {
				if (e.which == 13) e.preventDefault();
				if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
				self._filterTimeout = setTimeout(function(){
					self._filterTimeout = null;
					var query = self.$input.val();
					if (query.length >= self.min){
						if (self.exactMatch && !self._exactRegExp.test(query)){
							query = '"' + query + '"';
						}
						self.addFilter('search', query);
						self.filter(self.focus);
					} else if (F.is.emptyString(query)){
						self.clear();
					}
				}, self.delay);
			}
		},
		/**
		 * Handles the click event for the {@link FooTable.Filtering#$button}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onSearchButtonClicked: function (e) {
			e.preventDefault();
			var self = e.data.self;
			if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
			var $icon = self.$button.children('.fooicon');
			if ($icon.hasClass('fooicon-remove')) self.clear();
			else {
				var query = self.$input.val();
				if (query.length >= self.min){
					if (self.exactMatch && !self._exactRegExp.test(query)){
						query = '"' + query + '"';
					}
					self.addFilter('search', query);
					self.filter(self.focus);
				}
			}
		},
		/**
		 * Handles the click event for the column checkboxes in the {@link FooTable.Filtering#$dropdown}.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onSearchColumnClicked: function (e) {
			var self = e.data.self;
			if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
			self._filterTimeout = setTimeout(function(){
				self._filterTimeout = null;
				var $icon = self.$button.children('.fooicon');
				if ($icon.hasClass('fooicon-remove')){
					$icon.removeClass('fooicon-remove').addClass('fooicon-search');
					self.addFilter('search', self.$input.val());
					self.filter();
				}
			}, self.delay);
		},
		/**
		 * Handles the click event for the {@link FooTable.Filtering#$dropdown} toggle.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onDropdownToggleClicked: function (e) {
			e.preventDefault();
			e.stopPropagation();
			var self = e.data.self;
			self.$dropdown.parent().toggleClass('open');
			if (self.$dropdown.parent().hasClass('open')) $(document).on('click.footable', { self: self }, self._onDocumentClicked);
			else $(document).off('click.footable', self._onDocumentClicked);
		},
		/**
		 * Checks all click events when the dropdown is visible and closes the menu if the target is not the dropdown.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onDocumentClicked: function(e){
			if ($(e.target).closest('.dropdown-menu').length == 0){
				e.preventDefault();
				var self = e.data.self;
				self.$dropdown.parent().removeClass('open');
				$(document).off('click.footable', self._onDocumentClicked);
			}
		}
	});

	F.components.register('filtering', F.Filtering, 500);

})(jQuery, FooTable);

(function(F){
	F.Query = F.Class.extend(/** @lends FooTable.Query */{
		/**
		 * The query object is used to parse and test the filtering component's queries
		 * @constructs
		 * @extends FooTable.Class
		 * @param {string} query - The string value of the query.
		 * @param {string} [space="AND"] - How the query treats whitespace.
		 * @param {boolean} [connectors=true] - Whether or not to replace phrase connectors (+.-_) with spaces.
		 * @param {boolean} [ignoreCase=true] - Whether or not ignore case when matching.
		 * @returns {FooTable.Query}
		 */
		construct: function(query, space, connectors, ignoreCase){
			/* PRIVATE */
			/**
			 * Holds the previous value of the query and is used internally in the {@link FooTable.Query#val} method.
			 * @type {string}
			 * @private
			 */
			this._original = null;
			/**
			 * Holds the value for the query. Access to this variable is provided through the {@link FooTable.Query#val} method.
			 * @type {string}
			 * @private
			 */
			this._value = null;
			/* PUBLIC */
			/**
			 * A string specifying how the query treats whitespace. Can be either "OR" or "AND".
			 * @type {string}
			 */
			this.space = F.is.string(space) && (space == 'OR' || space == 'AND') ? space : 'AND';
			/**
			 * Whether or not to replace phrase connectors (+.-_) with spaces before executing the query.
			 * @instance
			 * @type {boolean}
			 */
			this.connectors = F.is.boolean(connectors) ? connectors : true;
			/**
			 * Whether or not ignore case when matching.
			 * @instance
			 * @type {boolean}
			 */
			this.ignoreCase = F.is.boolean(ignoreCase) ? ignoreCase : true;
			/**
			 * The left side of the query if one exists. OR takes precedence over AND.
			 * @type {FooTable.Query}
			 * @example <caption>The below shows what is meant by the "left" side of a query</caption>
			 * query = "Dave AND Mary" - "Dave" is the left side of the query.
			 * query = "Dave AND Mary OR John" - "Dave and Mary" is the left side of the query.
			 */
			this.left = null;
			/**
			 * The right side of the query if one exists. OR takes precedence over AND.
			 * @type {FooTable.Query}
			 * @example <caption>The below shows what is meant by the "right" side of a query</caption>
			 * query = "Dave AND Mary" - "Mary" is the right side of the query.
			 * query = "Dave AND Mary OR John" - "John" is the right side of the query.
			 */
			this.right = null;
			/**
			 * The parsed parts of the query. This contains the information used to actually perform a match against a string.
			 * @type {Array}
			 */
			this.parts = [];
			/**
			 * The type of operand to apply to the results of the individual parts of the query.
			 * @type {string}
			 */
			this.operator = null;
			this.val(query);
		},
		/**
		 * Gets or sets the value for the query. During set the value is parsed setting all properties as required.
		 * @param {string} [value] - If supplied the value to set for this query.
		 * @returns {(string|undefined)}
		 */
		val: function(value){
			// get
			if (F.is.emptyString(value)) return this._value;

			// set
			if (F.is.emptyString(this._original)) this._original = value;
			else if (this._original == value) return;

			this._value = value;
			this._parse();
		},
		/**
		 * Tests the supplied string against the query.
		 * @param {string} str - The string to test.
		 * @returns {boolean}
		 */
		match: function(str){
			if (F.is.emptyString(this.operator) || this.operator === 'OR')
				return this._left(str, false) || this._match(str, false) || this._right(str, false);
			if (this.operator === 'AND')
				return this._left(str, true) && this._match(str, true) && this._right(str, true);
		},
		/**
		 * Matches this queries parts array against the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */
		_match: function(str, def){
			var self = this, result = false, empty = F.is.emptyString(str);
			if (F.is.emptyArray(self.parts) && self.left instanceof F.Query) return def;
			if (F.is.emptyArray(self.parts)) return result;
			if (self.space === 'OR'){
				// with OR we give the str every part to test and if any match it is a success, we do exit early if a negated match occurs
				F.arr.each(self.parts, function(p){
					if (p.empty && empty){
						result = true;
						if (p.negate){
							result = false;
							return result;
						}
					} else {
						var match = (p.exact ? F.str.containsExact : F.str.contains)(str, p.query, self.ignoreCase);
						if (match && !p.negate) result = true;
						if (match && p.negate) {
							result = false;
							return result;
						}
					}
				});
			} else {
				// otherwise with AND we check until the first failure and then exit
				result = true;
				F.arr.each(self.parts, function(p){
					if (p.empty){
						if ((!empty && !p.negate) || (empty && p.negate)) result = false;
						return result;
					} else {
						var match = (p.exact ? F.str.containsExact : F.str.contains)(str, p.query, self.ignoreCase);
						if ((!match && !p.negate) || (match && p.negate)) result = false;
						return result;
					}
				});
			}
			return result;
		},
		/**
		 * Matches the left side of the query if one exists with the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */
		_left: function(str, def){
			return (this.left instanceof F.Query) ? this.left.match(str) : def;
		},
		/**
		 * Matches the right side of the query if one exists with the supplied string.
		 * @param {string} str - The string to test.
		 * @param {boolean} def - The default value to return based on the operand.
		 * @returns {boolean}
		 * @private
		 */
		_right: function(str, def){
			return (this.right instanceof F.Query) ? this.right.match(str) : def;
		},
		/**
		 * Parses the private {@link FooTable.Query#_value} property and populates the object.
		 * @private
		 */
		_parse: function(){
			if (F.is.emptyString(this._value)) return;
			// OR takes precedence so test for it first
			if (/\sOR\s/.test(this._value)){
				// we have an OR so split the value on the first occurrence of OR to get the left and right sides of the statement
				this.operator = 'OR';
				var or = this._value.split(/(?:\sOR\s)(.*)?/);
				this.left = new F.Query(or[0], this.space, this.connectors, this.ignoreCase);
				this.right = new F.Query(or[1], this.space, this.connectors, this.ignoreCase);
			} else if (/\sAND\s/.test(this._value)) {
				// there are no more OR's so start with AND
				this.operator = 'AND';
				var and = this._value.split(/(?:\sAND\s)(.*)?/);
				this.left = new F.Query(and[0], this.space, this.connectors, this.ignoreCase);
				this.right = new F.Query(and[1], this.space, this.connectors, this.ignoreCase);
			} else {
				// we have no more statements to parse so set the parts array by parsing each part of the remaining query
				var self = this;
				this.parts = F.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g), function(str){
					return self._part(str);
				});
			}
		},
		/**
		 * Parses a single part of a query into an object to use during matching.
		 * @param {string} str - The string representation of the part.
		 * @returns {{query: string, negate: boolean, phrase: boolean, exact: boolean}}
		 * @private
		 */
		_part: function(str){
			var p = {
				query: str,
				negate: false,
				phrase: false,
				exact: false,
				empty: false
			};
			// support for NEGATE operand - (minus sign). Remove this first so we can get onto phrase checking
			if (F.str.startsWith(p.query, '-')){
				p.query = F.str.from(p.query, '-');
				p.negate = true;
			}
			// support for PHRASES (exact matches)
			if (/^"(.*?)"$/.test(p.query)){ // if surrounded in quotes strip them and nothing else
				p.query = p.query.replace(/^"(.*?)"$/, '$1');
				p.phrase = true;
				p.exact = true;
			} else if (this.connectors && /(?:\w)+?([-_\+\.])(?:\w)+?/.test(p.query)) { // otherwise replace supported phrase connectors (-_+.) with spaces
				p.query = p.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g, function(match, p1){
					return match.replace(p1, ' ');
				});
				p.phrase = true;
			}
			p.empty = p.phrase && F.is.emptyString(p.query);
			return p;
		}
	});

})(FooTable);
(function(F){

	/**
	 * The value used by the filtering component during filter operations. Must be a string and can be set using the data-filter-value attribute on the cell itself.
	 * If this is not supplied it is set to the result of the toString method called on the value for the cell. Added by the {@link FooTable.Filtering} component.
	 * @type {string}
	 * @default null
	 */
	F.Cell.prototype.filterValue = null;

	// this is used to define the filtering specific properties on cell creation
	F.Cell.prototype.__filtering_define__ = function(valueOrElement){
		this.filterValue = this.column.filterValue.call(this.column, valueOrElement);
	};

	// this is used to update the filterValue property whenever the cell value is changed
	F.Cell.prototype.__filtering_val__ = function(value){
		if (F.is.defined(value)){
			// set only
			this.filterValue = this.column.filterValue.call(this.column, value);
		}
	};

	// overrides the public define method and replaces it with our own
	F.Cell.extend('define', function(valueOrElement){
		this._super(valueOrElement);
		this.__filtering_define__(valueOrElement);
	});
	// overrides the public val method and replaces it with our own
	F.Cell.extend('val', function(value, redraw, redrawSelf){
		var val = this._super(value, redraw, redrawSelf);
		this.__filtering_val__(value);
		return val;
	});
})(FooTable);
(function($, F){
	/**
	 * Whether or not the column can be used during filtering. Added by the {@link FooTable.Filtering} component.
	 * @type {boolean}
	 * @default true
	 */
	F.Column.prototype.filterable = true;

	/**
	 * This is supplied either the cell value or jQuery object to parse. A string value must be returned from this method and will be used during filtering operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {string}
	 * @this FooTable.Column
	 */
	F.Column.prototype.filterValue = function(valueOrElement){
		// if we have an element or a jQuery object use jQuery to get the value
		if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
			var data = $(valueOrElement).data('filterValue');
			return F.is.defined(data) ? ''+data : $(valueOrElement).text();
		}
		// if options are supplied with the value
		if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
			if (F.is.string(valueOrElement.options.filterValue)) return valueOrElement.options.filterValue;
			if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
		}
		if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement+''; // use the native toString of the value
		return ''; // otherwise we have no value so return an empty string
	};

	// this is used to define the filtering specific properties on column creation
	F.Column.prototype.__filtering_define__ = function(definition){
		this.filterable = F.is.boolean(definition.filterable) ? definition.filterable : this.filterable;
		this.filterValue = F.checkFnValue(this, definition.filterValue, this.filterValue);
	};

	// overrides the public define method and replaces it with our own
	F.Column.extend('define', function(definition){
		this._super(definition); // call the base so we don't have to redefine any previously set properties
		this.__filtering_define__(definition); // then call our own
	});
})(jQuery, FooTable);
(function(F){
	/**
	 * An object containing the filtering options for the plugin. Added by the {@link FooTable.Filtering} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow filtering on the table.
	 * @prop {({name: string, query: (string|FooTable.Query), columns: (Array.<string>|Array.<number>|Array.<FooTable.Column>)}|Array.<FooTable.Filter>)} filters - The filters to apply to the current {@link FooTable.Rows#array}.
	 * @prop {number} delay=1200 - The delay in milliseconds before the query is auto applied after a change (any value equal to or less than zero will disable this).
	 * @prop {number} min=1 - The minimum number of characters allowed in the search input before it is auto applied.
	 * @prop {string} space="AND" - Specifies how whitespace in a filter query is handled.
	 * @prop {string} placeholder="Search" - The string used as the placeholder for the search input.
	 * @prop {string} dropdownTitle=null - The title to display at the top of the search input column select.
	 * @prop {string} position="right" - The string used to specify the alignment of the search input.
	 * @prop {string} connectors=true - Whether or not to replace phrase connectors (+.-_) with space before executing the query.
	 * @prop {boolean} ignoreCase=true - Whether or not ignore case when matching.
	 * @prop {boolean} exactMatch=false - Whether or not search queries are treated as phrases when matching.
	 * @prop {boolean} focus=true - Whether or not to focus the search input after the search/clear button is clicked or after auto applying the search input query.
	 * @prop {string} container=null - A selector specifying where to place the filtering components form, if null the form is displayed within a row in the head of the table.
	 */
	F.Defaults.prototype.filtering = {
		enabled: false,
		filters: [],
		delay: 1200,
		min: 1,
		space: 'AND',
		placeholder: 'Search',
		dropdownTitle: null,
		position: 'right',
		connectors: true,
		ignoreCase: true,
		exactMatch: false,
		focus: true,
		container: null
	};
})(FooTable);
(function(F){
	/**
	 * Checks if the row is filtered using the supplied filters.
	 * @this FooTable.Row
	 * @param {Array.<FooTable.Filter>} filters - The filters to apply.
	 * @returns {boolean}
	 */
	F.Row.prototype.filtered = function(filters){
		var result = true, self = this;
		F.arr.each(filters, function(f){
			if ((result = f.matchRow(self)) == false) return false;
		});
		return result;
	};
})(FooTable);
(function($, F){

	F.Sorter = F.Class.extend(/** @lends FooTable.Sorter */{
		/**
		 * The sorter object contains the column and direction to sort by.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {FooTable.Column} column - The column to sort.
		 * @param {string} direction - The direction to sort by.
		 * @returns {FooTable.Sorter}
		 */
		construct: function(column, direction){
			/**
			 * The column to sort.
			 * @type {FooTable.Column}
			 */
			this.column = column;
			/**
			 * The direction to sort by.
			 * @type {string}
			 */
			this.direction = direction;
		}
	});

})(jQuery, FooTable);
(function ($, F) {
	F.Sorting = F.Component.extend(/** @lends FooTable.Sorting */{
		/**
		 * The sorting component adds a small sort button to specified column headers allowing users to sort those columns in the table.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Sorting}
		 */
		construct: function (table) {
			// call the constructor of the base class
			this._super(table, table.o.sorting.enabled);

			/* PROTECTED */
			/**
			 * This provides a shortcut to the {@link FooTable.Table#options}.[sorting]{@link FooTable.Defaults#sorting} object.
			 * @instance
			 * @protected
			 * @type {object}
			 */
			this.o = table.o.sorting;
			/**
			 * The current sorted column.
			 * @instance
			 * @type {FooTable.Column}
			 */
			this.column = null;
			/**
			 * Whether or not to allow sorting to occur, should be set using the {@link FooTable.Sorting#toggleAllowed} method.
			 * @instance
			 * @type {boolean}
			 */
			this.allowed = true;
			/**
			 * The initial sort state of the table, this value is used for determining if the sorting has occurred or to reset the state to default.
			 * @instance
			 * @type {{isset: boolean, rows: Array.<FooTable.Row>, column: string, direction: ?string}}
			 */
			this.initial = null;
		},

		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the sorting component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Sorting#"preinit.ft.sorting"
		 * @this FooTable.Sorting
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.sorting event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Sorting#"preinit.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			this.ft.raise('preinit.ft.sorting', [data]).then(function(){
				if (self.ft.$el.hasClass('footable-sorting'))
					self.enabled = true;
				self.enabled = F.is.boolean(data.sorting)
					? data.sorting
					: self.enabled;
				if (!self.enabled) return;
				self.column = F.arr.first(self.ft.columns.array, function(col){ return col.sorted; });
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Initializes the sorting component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Sorting#"init.ft.sorting"
		 * @this FooTable.Sorting
		 */
		init: function () {
			/**
			 * The init.ft.sorting event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Sorting#"init.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('init.ft.sorting').then(function(){
				if (!self.initial){
					var isset = !!self.column;
					self.initial = {
						isset: isset,
						// grab a shallow copy of the rows array prior to sorting - allows us to reset without an initial sort
						rows: self.ft.rows.all.slice(0),
						// if there is a sorted column store its name and direction
						column: isset ? self.column.name : null,
						direction: isset ? self.column.direction : null
					}
				}
				F.arr.each(self.ft.columns.array, function(col){
					if (col.sortable){
						col.$el.addClass('footable-sortable').append($('<span/>', {'class': 'fooicon fooicon-sort'}));
					}
				});
				self.ft.$el.on('click.footable', '.footable-sortable', { self: self }, self._onSortClicked);
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Destroys the sorting component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Sorting#"destroy.ft.sorting"
		 */
		destroy: function () {
			/**
			 * The destroy.ft.sorting event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Sorting#"destroy.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.paging').then(function(){
				self.ft.$el.off('click.footable', '.footable-sortable', self._onSortClicked);
				self.ft.$el.children('thead').children('tr.footable-header')
					.children('.footable-sortable').removeClass('footable-sortable footable-asc footable-desc')
					.find('span.fooicon').remove();
			});
		},
		/**
		 * Performs the actual sorting against the {@link FooTable.Rows#current} array.
		 * @instance
		 * @protected
		 */
		predraw: function () {
			if (!this.column) return;
			var self = this, col = self.column;
			self.ft.rows.array.sort(function (a, b) {
				return col.direction == 'DESC'
						? col.sorter(b.cells[col.index].sortValue, a.cells[col.index].sortValue)
						: col.sorter(a.cells[col.index].sortValue, b.cells[col.index].sortValue);
			});
		},
		/**
		 * Updates the sorting UI setting the state of the sort buttons.
		 * @instance
		 * @protected
		 */
		draw: function () {
			if (!this.column) return;
			var self = this,
				$sortable = self.ft.$el.find('thead > tr > .footable-sortable'),
				$active = self.column.$el;

			$sortable.removeClass('footable-asc footable-desc').children('.fooicon').removeClass('fooicon-sort fooicon-sort-asc fooicon-sort-desc');
			$sortable.not($active).children('.fooicon').addClass('fooicon-sort');
			$active.addClass(self.column.direction == 'DESC' ? 'footable-desc' : 'footable-asc')
				.children('.fooicon').addClass(self.column.direction == 'DESC' ? 'fooicon-sort-desc' : 'fooicon-sort-asc');
		},

		/* PUBLIC */
		/**
		 * Sets the sorting options and calls the {@link FooTable.Table#draw} method to perform the actual sorting.
		 * @instance
		 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
		 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Sorting#"before.ft.sorting"
		 * @fires FooTable.Sorting#"after.ft.sorting"
		 */
		sort: function(column, direction){
			return this._sort(column, direction);
		},
		/**
		 * Toggles whether or not sorting is currently allowed.
		 * @param {boolean} [state] - You can optionally specify the state you want it to be, if not supplied the current value is flipped.
		 */
		toggleAllowed: function(state){
			state = F.is.boolean(state) ? state : !this.allowed;
			this.allowed = state;
			this.ft.$el.toggleClass('footable-sorting-disabled', !this.allowed);
		},
		/**
		 * Checks whether any sorting has occurred for the table.
		 * @returns {boolean}
		 */
		hasChanged: function(){
			return !(!this.initial || !this.column ||
				(this.column.name === this.initial.column &&
					(this.column.direction === this.initial.direction || (this.initial.direction === null && this.column.direction === 'ASC')))
			);
		},
		/**
		 * Resets the table sorting to the initial state recorded in the components init method.
		 */
		reset: function(){
			if (!!this.initial){
				if (this.initial.isset){
					// if the initial value specified a column, sort by it
					this.sort(this.initial.column, this.initial.direction);
				} else {
					// if there was no initial column then we need to reset the rows to there original order
					if (!!this.column){
						// if there is a currently sorted column remove the asc/desc classes and set it to null.
						this.column.$el.removeClass('footable-asc footable-desc');
						this.column = null;
					}
					// replace the current all rows array with the one stored in the initial value
					this.ft.rows.all = this.initial.rows;
					// force the table to redraw itself using the updated rows array
					this.ft.draw();
				}
			}
		},

		/* PRIVATE */
		/**
		 * Performs the required steps to handle sorting including the raising of the {@link FooTable.Sorting#"before.ft.sorting"} and {@link FooTable.Sorting#"after.ft.sorting"} events.
		 * @instance
		 * @private
		 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
		 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Sorting#"before.ft.sorting"
		 * @fires FooTable.Sorting#"after.ft.sorting"
		 */
		_sort: function(column, direction){
			if (!this.allowed) return $.Deferred().reject('sorting disabled');
			var self = this;
			var sorter = new F.Sorter(self.ft.columns.get(column), F.Sorting.dir(direction));
			/**
			 * The before.ft.sorting event is raised before a sort is applied and allows listeners to modify the sorter or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Sorting#"before.ft.sorting"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Sorter} sorter - The sorter that is about to be applied.
			 */
			return self.ft.raise('before.ft.sorting', [sorter]).then(function(){
				F.arr.each(self.ft.columns.array, function(col){
					if (col != self.column) col.direction = null;
				});
				self.column = self.ft.columns.get(sorter.column);
				if (self.column) self.column.direction = F.Sorting.dir(sorter.direction);
				return self.ft.draw().then(function(){
					/**
					 * The after.ft.sorting event is raised after a sorter has been applied.
					 * @event FooTable.Sorting#"after.ft.sorting"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Sorter} sorter - The sorter that has been applied.
					 */
					self.ft.raise('after.ft.sorting', [sorter]);
				});
			});
		},
		/**
		 * Handles the sort button clicked event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onSortClicked: function (e) {
			var self = e.data.self, $header = $(this).closest('th,td'),
				direction = $header.is('.footable-asc, .footable-desc')
					? ($header.hasClass('footable-desc') ? 'ASC' : 'DESC')
					: 'ASC';
			self._sort($header.index(), direction);
		}
	});

	/**
	 * Checks the supplied string is a valid direction and if not returns ASC as default.
	 * @static
	 * @protected
	 * @param {string} str - The string to check.
	 */
	F.Sorting.dir = function(str){
		return F.is.string(str) && (str == 'ASC' || str == 'DESC') ? str : 'ASC';
	};

	F.components.register('sorting', F.Sorting, 600);

})(jQuery, FooTable);
(function(F){

	/**
	 * The value used by the sorting component during sort operations. Can be set using the data-sort-value attribute on the cell itself.
	 * If this is not supplied it is set to the result of the toString method called on the value for the cell. Added by the {@link FooTable.Sorting} component.
	 * @type {string}
	 * @default null
	 */
	F.Cell.prototype.sortValue = null;

	// this is used to define the sorting specific properties on cell creation
	F.Cell.prototype.__sorting_define__ = function(valueOrElement){
		this.sortValue = this.column.sortValue.call(this.column, valueOrElement);
	};

	// this is used to update the sortValue property whenever the cell value is changed
	F.Cell.prototype.__sorting_val__ = function(value){
		if (F.is.defined(value)){
			// set only
			this.sortValue = this.column.sortValue.call(this.column, value);
		}
	};

	// overrides the public define method and replaces it with our own
	F.Cell.extend('define', function(valueOrElement){
		this._super(valueOrElement);
		this.__sorting_define__(valueOrElement);
	});
	// overrides the public val method and replaces it with our own
	F.Cell.extend('val', function(value, redraw, redrawSelf){
		var val = this._super(value, redraw, redrawSelf);
		this.__sorting_val__(value);
		return val;
	});
})(FooTable);
(function($, F){
	/**
	 * The direction to sort if the {@link FooTable.Column#sorted} property is set to true. Can be "ASC", "DESC" or NULL. Added by the {@link FooTable.Sorting} component.
	 * @type {string}
	 * @default null
	 */
	F.Column.prototype.direction = null;
	/**
	 * Whether or not the column can be sorted. Added by the {@link FooTable.Sorting} component.
	 * @type {boolean}
	 * @default true
	 */
	F.Column.prototype.sortable = true;
	/**
	 * Whether or not the column is sorted. Added by the {@link FooTable.Sorting} component.
	 * @type {boolean}
	 * @default false
	 */
	F.Column.prototype.sorted = false;

	/**
	 * This is supplied two values from the column for a comparison to be made and the result returned. Added by the {@link FooTable.Sorting} component.
	 * @param {*} a - The first value to be compared.
	 * @param {*} b - The second value to compare to the first.
	 * @returns {number}
	 * @example <caption>This example shows using pseudo code what a sort function would look like.</caption>
	 * "sorter": function(a, b){
	 * 	if (a is less than b by some ordering criterion) {
	 * 		return -1;
	 * 	}
	 * 	if (a is greater than b by the ordering criterion) {
	 * 		return 1;
	 * 	}
	 * 	// a must be equal to b
	 * 	return 0;
	 * }
	 */
	F.Column.prototype.sorter = function(a, b){
		if (typeof a === 'string') a = a.toLowerCase();
		if (typeof b === 'string') b = b.toLowerCase();
		if (a === b) return 0;
		if (a < b) return -1;
		return 1;
	};

	/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 * @this FooTable.Column
	 */
	F.Column.prototype.sortValue = function(valueOrElement){
		// if we have an element or a jQuery object use jQuery to get the value
		if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
			var data = $(valueOrElement).data('sortValue');
			return F.is.defined(data) ? data : this.parser(valueOrElement);
		}
		// if options are supplied with the value
		if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
			if (F.is.string(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
			if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
		}
		if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement;
		return null;
	};

	// this is used to define the sorting specific properties on column creation
	F.Column.prototype.__sorting_define__ = function(definition){
		this.sorter = F.checkFnValue(this, definition.sorter, this.sorter);
		this.direction = F.is.type(definition.direction, 'string') ? F.Sorting.dir(definition.direction) : null;
		this.sortable = F.is.boolean(definition.sortable) ? definition.sortable : true;
		this.sorted = F.is.boolean(definition.sorted) ? definition.sorted : false;
		this.sortValue = F.checkFnValue(this, definition.sortValue, this.sortValue);
	};

	// overrides the public define method and replaces it with our own
	F.Column.extend('define', function(definition){
		this._super(definition);
		this.__sorting_define__(definition);
	});

})(jQuery, FooTable);
(function(F){
	/**
	 * An object containing the sorting options for the plugin. Added by the {@link FooTable.Sorting} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow sorting on the table.
	 */
	F.Defaults.prototype.sorting = {
		enabled: false
	};
})(FooTable);
(function($, F){

	F.HTMLColumn.extend('__sorting_define__', function(definition){
		this._super(definition);
		this.sortUse = F.is.string(definition.sortUse) && $.inArray(definition.sortUse, ['html','text']) !== -1 ? definition.sortUse : 'html';
	});

	/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 * @this FooTable.HTMLColumn
	 */
	F.HTMLColumn.prototype.sortValue = function(valueOrElement){
		// if we have an element or a jQuery object use jQuery to get the data value or pass it off to the parser
		if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
			var data = $(valueOrElement).data('sortValue');
			return F.is.defined(data) ? data : this.parser(valueOrElement);
		}
		// if options are supplied with the value
		if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
			if (F.is.string(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
			if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
		}
		if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement;
		return null;
	};

})(jQuery, FooTable);
(function($, F){

	/**
	 * This is supplied either the cell value or jQuery object to parse. A value must be returned from this method and will be used during sorting operations.
	 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
	 * @returns {*}
	 */
	F.NumberColumn.prototype.sortValue = function(valueOrElement){
		// if we have an element or a jQuery object use jQuery to get the data value or pass it off to the parser
		if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)){
			var data = $(valueOrElement).data('sortValue');
			return F.is.number(data) ? data : this.parser(valueOrElement);
		}
		// if options are supplied with the value
		if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)){
			if (F.is.string(valueOrElement.options.sortValue)) return this.parser(valueOrElement);
			if (F.is.number(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
			if (F.is.number(valueOrElement.value)) return valueOrElement.value;
		}
		if (F.is.string(valueOrElement)) return this.parser(valueOrElement);
		if (F.is.number(valueOrElement)) return valueOrElement;
		return null;
	};

})(jQuery, FooTable);
(function(F){
	/**
	 * Sort the table using the specified column and direction. Added by the {@link FooTable.Sorting} component.
	 * @instance
	 * @param {(string|number|FooTable.Column)} column - The column name, index or the actual {@link FooTable.Column} object to sort by.
	 * @param {string} [direction="ASC"] - The direction to sort by, either ASC or DESC.
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Sorting#"change.ft.sorting"
	 * @fires FooTable.Sorting#"changed.ft.sorting"
	 * @see FooTable.Sorting#sort
	 */
	F.Table.prototype.sort = function(column, direction){
		return this.use(F.Sorting).sort(column, direction);
	};
})(FooTable);
(function($, F){

	F.Pager = F.Class.extend(/** @lends FooTable.Pager */{
		/**
		 * The pager object contains the page number and direction to page to.
		 * @constructs
		 * @extends FooTable.Class
		 * @param {number} total - The total number of pages available.
		 * @param {number} current - The current page number.
		 * @param {number} size - The number of rows per page.
		 * @param {number} page - The page number to goto.
		 * @param {boolean} forward - A boolean indicating the direction of paging, TRUE = forward, FALSE = back.
		 * @returns {FooTable.Pager}
		 */
		construct: function(total, current, size, page, forward){
			/**
			 * The total number of pages available.
			 * @type {number}
			 */
			this.total = total;
			/**
			 * The current page number.
			 * @type {number}
			 */
			this.current = current;
			/**
			 * The number of rows per page.
			 * @type {number}
			 */
			this.size = size;
			/**
			 * The page number to goto.
			 * @type {number}
			 */
			this.page = page;
			/**
			 * A boolean indicating the direction of paging, TRUE = forward, FALSE = back.
			 * @type {boolean}
			 */
			this.forward = forward;
		}
	});

})(jQuery, FooTable);
(function($, F){
	F.Paging = F.Component.extend(/** @lends FooTable.Paging */{
		/**
		 * The paging component adds a pagination control to the table allowing users to navigate table rows via pages.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Filtering}
		 */
		construct: function(table){
			// call the base constructor
			this._super(table, table.o.paging.enabled);

			/* PROTECTED */
			/**
			 * An object containing the strings used by the paging buttons.
			 * @type {{ first: string, prev: string, next: string, last: string }}
			 */
			this.strings = table.o.paging.strings;

			/* PUBLIC */
			/**
			 * The current page number to display.
			 * @instance
			 * @type {number}
			 */
			this.current = table.o.paging.current;
			/**
			 * The number of rows to display per page.
			 * @instance
			 * @type {number}
			 */
			this.size = table.o.paging.size;
			/**
			 * The maximum number of page links to display at once.
			 * @instance
			 * @type {number}
			 */
			this.limit = table.o.paging.limit;
			/**
			 * The position of the pagination control within the paging rows cell.
			 * @instance
			 * @type {string}
			 */
			this.position = table.o.paging.position;
			/**
			 * The format string used to generate the text displayed under the pagination control.
			 * @instance
			 * @type {string}
			 */
			this.countFormat = table.o.paging.countFormat;
			/**
			 * A selector specifying where to place the paging components UI, if null the UI is displayed within a row in the foot of the table.
			 * @instance
			 * @type {string}
			 */
			this.container = table.o.paging.container;
				/**
			 * The total number of pages.
			 * @instance
			 * @type {number}
			 */
			this.total = -1;
			/**
			 * The number of rows in the {@link FooTable.Rows#array} before paging is applied.
			 * @instance
			 * @type {number}
			 */
			this.totalRows = 0;
			/**
			 * A number indicating the previous page displayed.
			 * @instance
			 * @type {number}
			 */
			this.previous = -1;
			/**
			 * The count string generated using the {@link FooTable.Filtering#countFormat} option. This value is only set after the first call to the {@link FooTable.Filtering#predraw} method.
			 * @instance
			 * @type {string}
			 */
			this.formattedCount = null;
			/**
			 * The jQuery object of the element containing the entire paging UI.
			 * @instance
			 * @type {jQuery}
			 */
			this.$container = null;
			/**
			 * The jQuery object of the element wrapping all the paging UI elements.
			 * @instance
			 * @type {jQuery}
			 */
			this.$wrapper = null;
			/** +
			 * The jQuery row object that contains all the paging specific elements.
			 * @instance
			 * @type {jQuery}
			 */
			this.$row = null;
			/**
			 * The jQuery cell object that contains the pagination control and total count.
			 * @instance
			 * @type {jQuery}
			 */
			this.$cell = null;
			/**
			 * The jQuery object that contains the links for the pagination control.
			 * @instance
			 * @type {jQuery}
			 */
			this.$pagination = null;
			/**
			 * The jQuery object that contains the row count.
			 * @instance
			 * @type {jQuery}
			 */
			this.$count = null;
			/**
			 * Whether or not the pagination row is detached from the table.
			 * @instance
			 * @type {boolean}
			 */
			this.detached = true;

			/* PRIVATE */
			/**
			 * Used to hold the number of page links created.
			 * @instance
			 * @type {number}
			 * @private
			 */
			this._createdLinks = 0;
		},

		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the paging component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Paging#"preinit.ft.paging"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.paging event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Paging#"preinit.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			this.ft.raise('preinit.ft.paging', [data]).then(function(){
				if (self.ft.$el.hasClass('footable-paging'))
					self.enabled = true;
				self.enabled = F.is.boolean(data.paging)
					? data.paging
					: self.enabled;

				if (!self.enabled) return;

				self.size = F.is.number(data.pagingSize)
					? data.pagingSize
					: self.size;

				self.current = F.is.number(data.pagingCurrent)
					? data.pagingCurrent
					: self.current;

				self.limit = F.is.number(data.pagingLimit)
					? data.pagingLimit
					: self.limit;

				if (self.ft.$el.hasClass('footable-paging-left'))
					self.position = 'left';
				if (self.ft.$el.hasClass('footable-paging-center'))
					self.position = 'center';
				if (self.ft.$el.hasClass('footable-paging-right'))
					self.position = 'right';

				self.position = F.is.string(data.pagingPosition)
					? data.pagingPosition
					: self.position;

				self.countFormat = F.is.string(data.pagingCountFormat)
					? data.pagingCountFormat
					: self.countFormat;

				self.container = F.is.string(data.pagingContainer)
					? data.pagingContainer
					: self.container;

				self.total = Math.ceil(self.ft.rows.all.length / self.size);
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Initializes the paging component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Paging#"init.ft.paging"
		 */
		init: function(){
			/**
			 * The init.ft.paging event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Paging#"init.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('init.ft.paging').then(function(){
				self.$create();
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Destroys the paging component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Paging#"destroy.ft.paging"
		 */
		destroy: function () {
			/**
			 * The destroy.ft.paging event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Paging#"destroy.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.paging').then(function(){
				self.ft.$el.removeClass('footable-paging')
					.find('tfoot > tr.footable-paging').remove();
				self.detached = true;
				self._createdLinks = 0;
			});
		},
		/**
		 * Performs the actual paging against the {@link FooTable.Rows#current} array removing all rows that are not on the current visible page.
		 * @instance
		 * @protected
		 */
		predraw: function(){
			this.total = Math.ceil(this.ft.rows.array.length / this.size);
			this.current = this.current > this.total ? this.total : (this.current < 1 ? 1 : this.current);
			this.totalRows = this.ft.rows.array.length;
			if (this.totalRows > this.size){
				this.ft.rows.array = this.ft.rows.array.splice((this.current - 1) * this.size, this.size);
			}
			this.formattedCount = this.format(this.countFormat);
		},
		/**
		 * Updates the paging UI setting the state of the pagination control.
		 * @instance
		 * @protected
		 */
		draw: function(){
			if (this.total <= 1){
				if (!this.detached){
					if (this.$row){
						this.$row.detach();
					} else {
						this.$wrapper.detach();
					}
					this.detached = true;
				}
			} else {
				if (this.detached){
					if (this.$row){
						var $tfoot = this.ft.$el.children('tfoot');
						if ($tfoot.length == 0){
							$tfoot = $('<tfoot/>');
							this.ft.$el.append($tfoot);
						}
						this.$row.appendTo($tfoot);
					} else {
						this.$wrapper.appendTo(this.$container);
					}
					this.detached = false;
				}
				if (F.is.jq(this.$cell)){
					this.$cell.attr('colspan', this.ft.columns.visibleColspan);
				}
				this._createLinks();
				this._setVisible(this.current, this.current > this.previous);
				this._setNavigation(true);
				this.$count.text(this.formattedCount);
			}
		},
		/**
		 * Creates the paging UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 */
		$create: function(){
			this._createdLinks = 0;
			var position = 'footable-paging-center';
			switch (this.position){
				case 'left': position = 'footable-paging-left'; break;
				case 'right': position = 'footable-paging-right'; break;
			}
			this.ft.$el.addClass('footable-paging').addClass(position);

			this.$container = this.container === null ? null : $(this.container).first();
			if (!F.is.jq(this.$container)){
				var $tfoot = this.ft.$el.children('tfoot');
				if ($tfoot.length == 0){
					$tfoot = $('<tfoot/>');
					this.ft.$el.append($tfoot);
				}
				// add it to a row and then populate it with the search input and column selector dropdown.
				this.$row = $('<tr/>', {'class': 'footable-paging'}).prependTo($tfoot);
				this.$container = this.$cell = $('<td/>').attr('colspan', this.ft.columns.visibleColspan).appendTo(this.$row);
			} else {
				this.$container.addClass('footable-paging-external').addClass(position);
			}
			this.$wrapper = $('<div/>', {'class': 'footable-pagination-wrapper'}).appendTo(this.$container);
			this.$pagination = $('<ul/>', { 'class': 'pagination' }).on('click.footable', 'a.footable-page-link', { self: this }, this._onPageClicked);
			this.$count = $('<span/>', { 'class': 'label label-default' });
			this.$wrapper.append(this.$pagination, $('<div/>', {'class': 'divider'}), this.$count);
			this.detached = false;
		},

		/* PUBLIC */
		/**
		 * @summary Uses the supplied format string and replaces the placeholder strings with the current values.
		 * @description This method is used to generate the short description label for the pagination control. i.e. Showing X of Y records. The placeholders for this string are the following:
		 * * {CP} - The current page number.
		 * * {TP} - The total number of pages.
		 * * {PF} - The first row of the current page.
		 * * {PL} - The last row of the current page.
		 * * {TR} - The total rows available.
		 * These placeholders can be supplied in a string like; "Showing {PF} to {PL} of {TR} rows."
		 * @param {string} formatString - The string to be formatted with the paging specific variables.
		 * @returns {string}
		 */
		format: function(formatString){
			var firstRow = (this.size * (this.current - 1)) + 1,
				lastRow = this.size * this.current;
			if (this.ft.rows.array.length == 0){
				firstRow = 0;
				lastRow = 0;
			} else {
				lastRow = lastRow > this.totalRows ? this.totalRows : lastRow;
			}
			return formatString.replace(/\{CP}/g, this.current)
				.replace(/\{TP}/g, this.total)
				.replace(/\{PF}/g, firstRow)
				.replace(/\{PL}/g, lastRow)
				.replace(/\{TR}/g, this.totalRows);
		},
		/**
		 * Pages to the first page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		first: function(){
			return this._set(1);
		},
		/**
		 * Pages to the previous page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		prev: function(){
			return this._set(this.current - 1 > 0 ? this.current - 1 : 1);
		},
		/**
		 * Pages to the next page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		next: function(){
			return this._set(this.current + 1 < this.total ? this.current + 1 : this.total);
		},
		/**
		 * Pages to the last page.
		 * @instance
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		last: function(){
			return this._set(this.total);
		},
		/**
		 * Pages to the specified page.
		 * @instance
		 * @param {number} page - The page number to go to.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		goto: function(page){
			return this._set(page > this.total ? this.total : (page < 1 ? 1 : page));
		},
		/**
		 * Shows the previous X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit option value.
		 * @instance
		 */
		prevPages: function(){
			var page = this.$pagination.children('li.footable-page.visible:first').data('page') - 1;
			this._setVisible(page, true);
			this._setNavigation(false);
		},
		/**
		 * Shows the next X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit option value.
		 * @instance
		 */
		nextPages: function(){
			var page = this.$pagination.children('li.footable-page.visible:last').data('page') + 1;
			this._setVisible(page, false);
			this._setNavigation(false);
		},
		/**
		 * Gets or sets the current page size.
		 * @instance
		 * @param {(number|string)} [value] - The new page size to use, this value is supplied to `parseInt` so strings can be used. If not supplied or an invalid valid the current page size is returned.
		 * @returns {(number|undefined)}
		 */
		pageSize: function(value){
			value = parseInt(value);
			if (isNaN(value)){
				return this.size;
			}
			this.size = value;
			this.total = Math.ceil(this.ft.rows.all.length / this.size);
			if (F.is.jq(this.$wrapper)){
				if (this.$container.is("td")){
					this.$row.remove();
				} else {
					this.$wrapper.remove();
				}
			}
			this.$create();
			this.ft.draw();
		},

		/* PRIVATE */
		/**
		 * Performs the required steps to handle paging including the raising of the {@link FooTable.Paging#"before.ft.paging"} and {@link FooTable.Paging#"after.ft.paging"} events.
		 * @instance
		 * @private
		 * @param {number} page - The page to set.
		 * @returns {jQuery.Promise}
		 * @fires FooTable.Paging#"before.ft.paging"
		 * @fires FooTable.Paging#"after.ft.paging"
		 */
		_set: function(page){
			var self = this,
				pager = new F.Pager(self.total, self.current, self.size, page, page > self.current);
			/**
			 * The before.ft.paging event is raised before a sort is applied and allows listeners to modify the pager or cancel it completely by calling preventDefault on the jQuery.Event object.
			 * @event FooTable.Paging#"before.ft.paging"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {FooTable.Pager} pager - The pager that is about to be applied.
			 */
			return self.ft.raise('before.ft.paging', [pager]).then(function(){
				pager.page = pager.page > pager.total ? pager.total	: pager.page;
				pager.page = pager.page < 1 ? 1 : pager.page;
				if (self.current == page) return $.when();
				self.previous = self.current;
				self.current = pager.page;
				return self.ft.draw().then(function(){
					/**
					 * The after.ft.paging event is raised after a pager has been applied.
					 * @event FooTable.Paging#"after.ft.paging"
					 * @param {jQuery.Event} e - The jQuery.Event object for the event.
					 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
					 * @param {FooTable.Pager} pager - The pager that has been applied.
					 */
					self.ft.raise('after.ft.paging', [pager]);
				});
			});
		},
		/**
		 * Creates the pagination links using the current state of the plugin. If the total number of pages is the same as
		 * the last time this function was executed it does nothing.
		 * @instance
		 * @private
		 */
		_createLinks: function(){
			if (this._createdLinks === this.total) return;
			var self = this,
				multiple = self.total > 1,
				link = function(attr, html, klass){
					return $('<li/>', {
						'class': klass
					}).attr('data-page', attr)
						.append($('<a/>', {
							'class': 'footable-page-link',
							href: '#'
						}).data('page', attr).html(html));
				};
			self.$pagination.empty();
			if (multiple) {
				self.$pagination.append(link('first', self.strings.first, 'footable-page-nav'));
				self.$pagination.append(link('prev', self.strings.prev, 'footable-page-nav'));
				if (self.limit > 0 && self.limit < self.total){
					self.$pagination.append(link('prev-limit', self.strings.prevPages, 'footable-page-nav'));
				}
			}
			for (var i = 0, $li; i < self.total; i++){
				$li = link(i + 1, i + 1, 'footable-page');
				self.$pagination.append($li);
			}
			if (multiple){
				if (self.limit > 0 && self.limit < self.total){
					self.$pagination.append(link('next-limit', self.strings.nextPages, 'footable-page-nav'));
				}
				self.$pagination.append(link('next', self.strings.next, 'footable-page-nav'));
				self.$pagination.append(link('last', self.strings.last, 'footable-page-nav'));
			}
			self._createdLinks = self.total;
		},
		/**
		 * Sets the state for the navigation links of the pagination control and optionally sets the active class state on the current page link.
		 * @instance
		 * @private
		 * @param {boolean} active - Whether or not to set the active class state on the individual page links.
		 */
		_setNavigation: function(active){
			if (this.current == 1) {
				this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass('disabled');
			} else {
				this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass('disabled');
			}

			if (this.current == this.total) {
				this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass('disabled');
			} else {
				this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass('disabled');
			}

			if ((this.$pagination.children('li.footable-page.visible:first').data('page') || 1) == 1) {
				this.$pagination.children('li[data-page="prev-limit"]').addClass('disabled');
			} else {
				this.$pagination.children('li[data-page="prev-limit"]').removeClass('disabled');
			}

			if ((this.$pagination.children('li.footable-page.visible:last').data('page') || this.limit) == this.total) {
				this.$pagination.children('li[data-page="next-limit"]').addClass('disabled');
			} else {
				this.$pagination.children('li[data-page="next-limit"]').removeClass('disabled');
			}

			if (this.limit > 0 && this.total < this.limit){
				this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css('display', 'none');
			} else {
				this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css('display', '');
			}

			if (active){
				this.$pagination.children('li.footable-page').removeClass('active').filter('li[data-page="' + this.current + '"]').addClass('active');
			}
		},
		/**
		 * Sets the visible page using the supplied parameters.
		 * @instance
		 * @private
		 * @param {number} page - The page to make visible.
		 * @param {boolean} right - If set to true the supplied page will be the right most visible pagination link.
		 */
		_setVisible: function(page, right){
			if (this.limit > 0 && this.total > this.limit){
				if (!this.$pagination.children('li.footable-page[data-page="'+page+'"]').hasClass('visible')){
					var start = 0, end = 0;
					if (right == true){
						end = page > this.total ? this.total : page;
						start = end - this.limit;
					} else {
						start = page < 1 ? 0 : page - 1;
						end = start + this.limit;
					}
					if (start < 0){
						start = 0;
						end = this.limit > this.total ? this.total : this.limit;
					}
					if (end > this.total){
						end = this.total;
						start = this.total - this.limit < 0 ? 0 : this.total - this.limit;
					}
					this.$pagination.children('li.footable-page').removeClass('visible').slice(start, end).addClass('visible');
				}
			} else {
				this.$pagination.children('li.footable-page').removeClass('visible').slice(0, this.total).addClass('visible');
			}
		},
		/**
		 * Handles the click event for all links in the pagination control.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The event object for the event.
		 */
		_onPageClicked: function(e){
			e.preventDefault();
			if ($(e.target).closest('li').is('.active,.disabled')) return;

			var self = e.data.self, page = $(this).data('page');
			switch(page){
				case 'first': self.first();
					return;
				case 'prev': self.prev();
					return;
				case 'next': self.next();
					return;
				case 'last': self.last();
					return;
				case 'prev-limit': self.prevPages();
					return;
				case 'next-limit': self.nextPages();
					return;
				default: self._set(page);
					return;
			}
		}
	});

	F.components.register('paging', F.Paging, 400);

})(jQuery, FooTable);
(function(F){
	/**
	 * An object containing the paging options for the plugin. Added by the {@link FooTable.Paging} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow paging on the table.
	 * @prop {string} countFormat="{CP} of {TP}" - A string format used to generate the page count text.
	 * @prop {number} current=1 - The page number to display.
	 * @prop {number} limit=5 - The maximum number of page links to display at once.
	 * @prop {string} position="center" - The string used to specify the alignment of the pagination control.
	 * @prop {number} size=10 - The number of rows displayed per page.
	 * @prop {string} container=null - A selector specifying where to place the paging components UI, if null the UI is displayed within a row in the foot of the table.
	 * @prop {object} strings - An object containing the strings used by the paging buttons.
	 * @prop {string} strings.first="&laquo;" - The string used for the 'first' button.
	 * @prop {string} strings.prev="&lsaquo;" - The string used for the 'previous' button.
	 * @prop {string} strings.next="&rsaquo;" - The string used for the 'next' button.
	 * @prop {string} strings.last="&raquo;" - The string used for the 'last' button.
	 * @prop {string} strings.prevPages="..." - The string used for the 'previous X pages' button.
	 * @prop {string} strings.nextPages="..." - The string used for the 'next X pages' button.
	 */
	F.Defaults.prototype.paging = {
		enabled: false,
		countFormat: '{CP} of {TP}',
		current: 1,
		limit: 5,
		position: 'center',
		size: 10,
		container: null,
		strings: {
			first: '&laquo;',
			prev: '&lsaquo;',
			next: '&rsaquo;',
			last: '&raquo;',
			prevPages: '...',
			nextPages: '...'
		}
	};
})(FooTable);
(function(F){
	/**
	 * Navigates to the specified page number. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @param {number} num - The page number to go to.
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#goto
	 */
	F.Table.prototype.gotoPage = function(num){
		return this.use(F.Paging).goto(num);
	};

	/**
	 * Navigates to the next page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#next
	 */
	F.Table.prototype.nextPage = function(){
		return this.use(F.Paging).next();
	};

	/**
	 * Navigates to the previous page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#prev
	 */
	F.Table.prototype.prevPage = function(){
		return this.use(F.Paging).prev();
	};

	/**
	 * Navigates to the first page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#first
	 */
	F.Table.prototype.firstPage = function(){
		return this.use(F.Paging).first();
	};

	/**
	 * Navigates to the last page. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @returns {jQuery.Promise}
	 * @fires FooTable.Paging#paging_changing
	 * @fires FooTable.Paging#paging_changed
	 * @see FooTable.Paging#last
	 */
	F.Table.prototype.lastPage = function(){
		return this.use(F.Paging).last();
	};

	/**
	 * Shows the next X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit.size option value. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @see FooTable.Paging#nextPages
	 */
	F.Table.prototype.nextPages = function(){
		return this.use(F.Paging).nextPages();
	};

	/**
	 * Shows the previous X number of pages in the pagination control where X is the value set by the {@link FooTable.Defaults#paging} - limit.size option value. Added by the {@link FooTable.Paging} component.
	 * @instance
	 * @see FooTable.Paging#prevPages
	 */
	F.Table.prototype.prevPages = function(){
		return this.use(F.Paging).prevPages();
	};

	/**
	 * Gets or sets the current page size
	 * @instance
	 * @param {number} [value] - The new page size to use.
	 * @returns {(number|undefined)}
	 * @see FooTable.Paging#pageSize
	 */
	F.Table.prototype.pageSize = function(value){
		return this.use(F.Paging).pageSize(value);
	};
})(FooTable);
(function($, F){

	F.Editing = F.Component.extend(/** @lends FooTable.Editing */{
		/**
		 * The editing component adds a column with edit and delete buttons to each row as well as a single add row button in the footer.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.Editing}
		 */
		construct: function(table){
			// call the base constructor
			this._super(table, table.o.editing.enabled);

			/**
			 * Whether or not to automatically page to a new row when it is added to the table.
			 * @type {boolean}
			 */
			this.pageToNew = table.o.editing.pageToNew;

			/**
			 * Whether or not the editing column and add row button are always visible.
			 * @type {boolean}
			 */
			this.alwaysShow = table.o.editing.alwaysShow;

			/**
			 * The options for the editing column. @see {@link FooTable.EditingColumn} for more info.
			 * @type {object}
			 * @prop {string} classes="footable-editing" - A space separated string of class names to apply to all cells in the column.
			 * @prop {string} name="editing" - The name of the column.
			 * @prop {string} title="" - The title displayed in the header row of the table for the column.
			 * @prop {boolean} filterable=false - Whether or not the column should be filterable when using the filtering component.
			 * @prop {boolean} sortable=false - Whether or not the column should be sortable when using the sorting component.
			 */
			this.column = $.extend(true, {}, table.o.editing.column, {visible: this.alwaysShow});

			/**
			 * The position of the editing column in the table as well as the alignment of the buttons.
			 * @type {string}
			 */
			this.position = table.o.editing.position;


			/**
			 * The text that appears in the show button. This can contain HTML.
			 * @type {string}
			 */
			this.showText = table.o.editing.showText;

			/**
			 * The text that appears in the hide button. This can contain HTML.
			 * @type {string}
			 */
			this.hideText = table.o.editing.hideText;

			/**
			 * The text that appears in the add button. This can contain HTML.
			 * @type {string}
			 */
			this.addText = table.o.editing.addText;

			/**
			 * The text that appears in the edit button. This can contain HTML.
			 * @type {string}
			 */
			this.editText = table.o.editing.editText;

			/**
			 * The text that appears in the delete button. This can contain HTML.
			 * @type {string}
			 */
			this.deleteText = table.o.editing.deleteText;
			
			/**
			 * The text that appears in the view button. This can contain HTML.
			 * @type {string}
			 */
			this.viewText = table.o.editing.viewText;

			/**
			 * Whether or not to show the Add Row button.
			 * @type {boolean}
			 */
			this.allowAdd = table.o.editing.allowAdd;

			/**
			 * Whether or not to show the Edit Row button.
			 * @type {boolean}
			 */
			this.allowEdit = table.o.editing.allowEdit;

			/**
			 * Whether or not to show the Delete Row button.
			 * @type {boolean}
			 */
			this.allowDelete = table.o.editing.allowDelete;

			/**
			 * Whether or not to show the View Row button.
			 * @type {boolean}
			 */
			this.allowView = table.o.editing.allowView;

			/**
			 * Caches the row button elements to help with performance.
			 * @type {(null|jQuery)}
			 * @private
			 */
			this._$buttons = null;

			/**
			 * This object is used to contain the callbacks for the add, edit and delete row buttons.
			 * @type {object}
			 * @prop {function} addRow
			 * @prop {function} editRow
			 * @prop {function} deleteRow
			 * @prop {function} viewRow
			 */
			this.callbacks = {
				addRow: F.checkFnValue(this, table.o.editing.addRow),
				editRow: F.checkFnValue(this, table.o.editing.editRow),
				deleteRow: F.checkFnValue(this, table.o.editing.deleteRow),
				viewRow: F.checkFnValue(this, table.o.editing.viewRow)
			};
		},
		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the editing component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.Editing#"preinit.ft.editing"
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.editing event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Editing#"preinit.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			this.ft.raise('preinit.ft.editing', [data]).then(function(){
				if (self.ft.$el.hasClass('footable-editing'))
					self.enabled = true;

				self.enabled = F.is.boolean(data.editing)
					? data.editing
					: self.enabled;

				if (!self.enabled) return;

				self.pageToNew = F.is.boolean(data.editingPageToNew) ? data.editingPageToNew : self.pageToNew;

				self.alwaysShow = F.is.boolean(data.editingAlwaysShow) ? data.editingAlwaysShow : self.alwaysShow;

				self.position = F.is.string(data.editingPosition) ? data.editingPosition : self.position;

				self.showText = F.is.string(data.editingShowText) ? data.editingShowText : self.showText;

				self.hideText = F.is.string(data.editingHideText) ? data.editingHideText : self.hideText;

				self.addText = F.is.string(data.editingAddText) ? data.editingAddText : self.addText;

				self.editText = F.is.string(data.editingEditText) ? data.editingEditText : self.editText;

				self.deleteText = F.is.string(data.editingDeleteText) ? data.editingDeleteText : self.deleteText;

				self.viewText = F.is.string(data.editingViewText) ? data.editingViewText : self.viewText;

				self.allowAdd = F.is.boolean(data.editingAllowAdd) ? data.editingAllowAdd : self.allowAdd;

				self.allowEdit = F.is.boolean(data.editingAllowEdit) ? data.editingAllowEdit : self.allowEdit;

				self.allowDelete = F.is.boolean(data.editingAllowDelete) ? data.editingAllowDelete : self.allowDelete;

				self.allowView = F.is.boolean(data.editingAllowView) ? data.editingAllowView : self.allowView;

				self.column = new F.EditingColumn(self.ft, self, $.extend(true, {}, self.column, data.editingColumn, {visible: self.alwaysShow}));

				if (self.ft.$el.hasClass('footable-editing-left'))
					self.position = 'left';

				if (self.ft.$el.hasClass('footable-editing-right'))
					self.position = 'right';

				if (self.position === 'right'){
					self.column.index = self.ft.columns.array.length;
				} else {
					self.column.index = 0;
					for (var i = 0, len = self.ft.columns.array.length; i < len; i++){
						self.ft.columns.array[i].index += 1;
					}
				}
				self.ft.columns.array.push(self.column);
				self.ft.columns.array.sort(function(a, b){ return a.index - b.index; });

				self.callbacks.addRow = F.checkFnValue(self, data.editingAddRow, self.callbacks.addRow);
				self.callbacks.editRow = F.checkFnValue(self, data.editingEditRow, self.callbacks.editRow);
				self.callbacks.deleteRow = F.checkFnValue(self, data.editingDeleteRow, self.callbacks.deleteRow);
				self.callbacks.viewRow = F.checkFnValue(self, data.editingViewRow, self.callbacks.viewRow);
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Initializes the editing component for the plugin using the supplied table and options.
		 * @instance
		 * @protected
		 * @fires FooTable.Editing#"init.ft.editing"
		 */
		init: function(){
			/**
			 * The init.ft.editing event is raised before its UI is generated.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.Editing#"init.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('init.ft.editing').then(function(){
				self.$create();
			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Destroys the editing component removing any UI generated from the table.
		 * @instance
		 * @protected
		 * @fires FooTable.Editing#"destroy.ft.editing"
		 */
		destroy: function () {
			/**
			 * The destroy.ft.editing event is raised before its UI is removed.
			 * Calling preventDefault on this event will prevent the component from being destroyed.
			 * @event FooTable.Editing#"destroy.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			var self = this;
			this.ft.raise('destroy.ft.editing').then(function(){
				self.ft.$el.removeClass('footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view')
					.off('click.ft.editing').find('tfoot > tr.footable-editing').remove();
			});
		},
		/**
		 * Creates the editing UI from the current options setting the various jQuery properties of this component.
		 * @instance
		 * @protected
		 */
		$create: function(){
			var self = this, position = self.position === 'right' ? 'footable-editing-right' : 'footable-editing-left';
			self.ft.$el.addClass('footable-editing').addClass(position)
				.on('click.ft.editing', '.footable-show', {self: self}, self._onShowClick)
				.on('click.ft.editing', '.footable-hide', {self: self}, self._onHideClick)
				.on('click.ft.editing', '.footable-edit', {self: self}, self._onEditClick)
				.on('click.ft.editing', '.footable-delete', {self: self}, self._onDeleteClick)
				.on('click.ft.editing', '.footable-view', {self: self}, self._onViewClick)
				.on('click.ft.editing', '.footable-add', {self: self}, self._onAddClick);

			self.$cell = $('<td/>').attr('colspan', self.ft.columns.visibleColspan).append(self.$buttonShow());
			if (self.allowAdd){
				self.$cell.append(self.$buttonAdd());
			}
			self.$cell.append(self.$buttonHide());

			if (self.alwaysShow){
				self.ft.$el.addClass('footable-editing-always-show');
			}

			if (!self.allowAdd) self.ft.$el.addClass('footable-editing-no-add');
			if (!self.allowEdit) self.ft.$el.addClass('footable-editing-no-edit');
			if (!self.allowDelete) self.ft.$el.addClass('footable-editing-no-delete');
			if (!self.allowView) self.ft.$el.addClass('footable-editing-no-view');

			var $tfoot = self.ft.$el.children('tfoot');
			if ($tfoot.length == 0){
				$tfoot = $('<tfoot/>');
				self.ft.$el.append($tfoot);
			}
			self.$row = $('<tr/>', { 'class': 'footable-editing' }).append(self.$cell).appendTo($tfoot);
		},
		/**
		 * Creates the show button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonShow: function(){
			return '<button type="button" class="btn btn-primary footable-show">' + this.showText + '</button>';
		},
		/**
		 * Creates the hide button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonHide: function(){
			return '<button type="button" class="btn btn-default footable-hide">' + this.hideText + '</button>';
		},
		/**
		 * Creates the add button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonAdd: function(){
			return '<button type="button" class="btn btn-primary footable-add">' + this.addText + '</button> ';
		},
		/**
		 * Creates the edit button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonEdit: function(){
			return '<button type="button" class="btn btn-default footable-edit">' + this.editText + '</button> ';
		},
		/**
		 * Creates the delete button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonDelete: function(){
			return '<button type="button" class="btn btn-default footable-delete">' + this.deleteText + '</button>';
		},
		/**
		 * Creates the view button for the editing component.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$buttonView: function(){
			return '<button type="button" class="btn btn-default footable-view">' + this.viewText + '</button> ';
		},
		/**
		 * Creates the button group for the row buttons.
		 * @instance
		 * @protected
		 * @returns {(string|HTMLElement|jQuery)}
		 */
		$rowButtons: function(){
			if (F.is.jq(this._$buttons)) return this._$buttons.clone();
			this._$buttons = $('<div class="btn-group btn-group-xs" role="group"></div>');
			if (this.allowView) this._$buttons.append(this.$buttonView());
			if (this.allowEdit) this._$buttons.append(this.$buttonEdit());
			if (this.allowDelete) this._$buttons.append(this.$buttonDelete());
			return this._$buttons;
		},
		/**
		 * Performs the drawing of the component.
		 */
		draw: function(){
			this.$cell.attr('colspan', this.ft.columns.visibleColspan);
		},
		/**
		 * Handles the edit button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"edit.ft.editing"
		 */
		_onEditClick: function(e){
			e.preventDefault();
			var self = e.data.self, row = $(this).closest('tr').data('__FooTableRow__');
			if (row instanceof F.Row){
				/**
				 * The edit.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"edit.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be edited.
				 */
				self.ft.raise('edit.ft.editing', [row]).then(function(){
					self.callbacks.editRow.call(self.ft, row);
				});
			}
		},
		/**
		 * Handles the delete button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"delete.ft.editing"
		 */
		_onDeleteClick: function(e){
			e.preventDefault();
			var self = e.data.self, row = $(this).closest('tr').data('__FooTableRow__');
			if (row instanceof F.Row){
				/**
				 * The delete.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"delete.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be deleted.
				 */
				self.ft.raise('delete.ft.editing', [row]).then(function(){
					self.callbacks.deleteRow.call(self.ft, row);
				});
			}
		},
		/**
		 * Handles the view button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"view.ft.editing"
		 */
		_onViewClick: function(e){
			e.preventDefault();
			var self = e.data.self, row = $(this).closest('tr').data('__FooTableRow__');
			if (row instanceof F.Row){
				/**
				 * The view.ft.editing event is raised before its callback is executed.
				 * Calling preventDefault on this event will prevent the callback from being executed.
				 * @event FooTable.Editing#"view.ft.editing"
				 * @param {jQuery.Event} e - The jQuery.Event object for the event.
				 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
				 * @param {FooTable.Row} row - The row to be viewed.
				 */
				self.ft.raise('view.ft.editing', [row]).then(function(){
					self.callbacks.viewRow.call(self.ft, row);
				});
			}
		},
		/**
		 * Handles the add button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"add.ft.editing"
		 */
		_onAddClick: function(e){
			e.preventDefault();
			var self = e.data.self;
			/**
			 * The add.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"add.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			self.ft.raise('add.ft.editing').then(function(){
				self.callbacks.addRow.call(self.ft);
			});
		},
		/**
		 * Handles the show button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"show.ft.editing"
		 */
		_onShowClick: function(e){
			e.preventDefault();
			var self = e.data.self;
			/**
			 * The show.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"show.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			self.ft.raise('show.ft.editing').then(function(){
				self.ft.$el.addClass('footable-editing-show');
				self.column.visible = true;
				self.ft.draw();
			});
		},
		/**
		 * Handles the hide button click event.
		 * @instance
		 * @private
		 * @param {jQuery.Event} e - The jQuery.Event object for the event.
		 * @fires FooTable.Editing#"show.ft.editing"
		 */
		_onHideClick: function(e){
			e.preventDefault();
			var self = e.data.self;
			/**
			 * The hide.ft.editing event is raised before its callback is executed.
			 * Calling preventDefault on this event will prevent the callback from being executed.
			 * @event FooTable.Editing#"hide.ft.editing"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 */
			self.ft.raise('hide.ft.editing').then(function(){
				self.ft.$el.removeClass('footable-editing-show');
				self.column.visible = false;
				self.ft.draw();
			});
		}
	});

	F.components.register('editing', F.Editing, 850);

})(jQuery, FooTable);

(function($, F){

	F.EditingColumn = F.Column.extend(/** @lends FooTable.EditingColumn */{
		/**
		 * The Editing column class is used to create the column containing the editing buttons.
		 * @constructs
		 * @extends FooTable.Column
		 * @param {FooTable.Table} instance -  The parent {@link FooTable.Table} this column belongs to.
		 * @param {FooTable.Editing} editing - The parent {@link FooTable.Editing} component this column is used with.
		 * @param {object} definition - An object containing all the properties to set for the column.
		 * @returns {FooTable.EditingColumn}
		 */
		construct: function(instance, editing, definition){
			this._super(instance, definition, 'editing');
			this.editing = editing;
			this.internal = true;
		},
		/**
		 * After the column has been defined this ensures that the $el property is a jQuery object by either creating or updating the current value.
		 * @instance
		 * @protected
		 * @this FooTable.Column
		 */
		$create: function(){
			(this.$el = !this.virtual && F.is.jq(this.$el) ? this.$el : $('<th/>', {'class': 'footable-editing'})).html(this.title);
		},
		/**
		 * This is supplied either the cell value or jQuery object to parse. Any value can be returned from this method and
		 * will be provided to the {@link FooTable.EditingColumn#format} function
		 * to generate the cell contents.
		 * @instance
		 * @protected
		 * @param {(*|jQuery)} valueOrElement - The value or jQuery cell object.
		 * @returns {(jQuery)}
		 */
		parser: function(valueOrElement){
			if (F.is.string(valueOrElement)) valueOrElement = $($.trim(valueOrElement));
			if (F.is.element(valueOrElement)) valueOrElement = $(valueOrElement);
			if (F.is.jq(valueOrElement)){
				var tagName = valueOrElement.prop('tagName').toLowerCase();
				if (tagName == 'td' || tagName == 'th') return valueOrElement.data('value') || valueOrElement.contents();
				return valueOrElement;
			}
			return null;
		},
		/**
		 * Creates a cell to be used in the supplied row for this column.
		 * @param {FooTable.Row} row - The row to create the cell for.
		 * @returns {FooTable.Cell}
		 */
		createCell: function(row){
			var $buttons = this.editing.$rowButtons(), $cell = $('<td/>').append($buttons);
			if (F.is.jq(row.$el)){
				if (this.index === 0){
					$cell.prependTo(row.$el);
				} else {
					$cell.insertAfter(row.$el.children().eq(this.index-1));
				}
			}
			return new F.Cell(this.ft, row, this, $cell || $cell.html());
		}
	});

	F.columns.register('editing', F.EditingColumn);

})(jQuery, FooTable);
(function($, F) {

	/**
	 * An object containing the editing options for the plugin. Added by the {@link FooTable.Editing} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow editing on the table.
	 * @prop {boolean} pageToNew=true - Whether or not to automatically page to a new row when it is added to the table.
	 * @prop {string} position="right" - The position of the editing column in the table as well as the alignment of the buttons.
	 * @prop {boolean} alwaysShow=false - Whether or not the editing column and add row button are always visible.
	 * @prop {function} addRow - The callback function to execute when the add row button is clicked.
	 * @prop {function} editRow - The callback function to execute when the edit row button is clicked.
	 * @prop {function} deleteRow - The callback function to execute when the delete row button is clicked.
	 * @prop {function} viewRow - The callback function to execute when the view row button is clicked.
	 * @prop {string} showText - The text that appears in the show button. This can contain HTML.
	 * @prop {string} hideText - The text that appears in the hide button. This can contain HTML.
	 * @prop {string} addText - The text that appears in the add button. This can contain HTML.
	 * @prop {string} editText - The text that appears in the edit button. This can contain HTML.
	 * @prop {string} deleteText - The text that appears in the delete button. This can contain HTML.
	 * @prop {string} viewText - The text that appears in the view button. This can contain HTML.
	 * @prop {boolean} allowAdd - Whether or not to show the Add Row button.
	 * @prop {boolean} allowEdit - Whether or not to show the Edit Row button.
	 * @prop {boolean} allowDelete - Whether or not to show the Delete Row button.
	 * @prop {boolean} allowView - Whether or not to show the View Row button.
	 * @prop {object} column - The options for the editing column. @see {@link FooTable.EditingColumn} for more info.
	 * @prop {string} column.classes="footable-editing" - A space separated string of class names to apply to all cells in the column.
	 * @prop {string} column.name="editing" - The name of the column.
	 * @prop {string} column.title="" - The title displayed in the header row of the table for the column.
	 * @prop {boolean} column.filterable=false - Whether or not the column should be filterable when using the filtering component.
	 * @prop {boolean} column.sortable=false - Whether or not the column should be sortable when using the sorting component.
	 */
	F.Defaults.prototype.editing = {
		enabled: false,
		pageToNew: true,
		position: 'right',
		alwaysShow: false,
		addRow: function(){},
		editRow: function(row){},
		deleteRow: function(row){},
		viewRow: function(row){},
		showText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',
		hideText: 'Cancel',
		addText: 'New row',
		editText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',
		deleteText: '<span class="fooicon fooicon-trash" aria-hidden="true"></span>',
		viewText: '<span class="fooicon fooicon-stats" aria-hidden="true"></span>',
		allowAdd: true,
		allowEdit: true,
		allowDelete: true,
		allowView: false,
		column: {
			classes: 'footable-editing',
			name: 'editing',
			title: '',
			filterable: false,
			sortable: false
		}
	};

})(jQuery, FooTable);

(function($, F){

	if (F.is.defined(F.Paging)){
		/**
		 * Holds a shallow clone of the un-paged {@link FooTable.Rows#array} value before paging occurs and superfluous rows are removed. Added by the {@link FooTable.Editing} component.
		 * @instance
		 * @public
		 * @type {Array<FooTable.Row>}
		 */
		F.Paging.prototype.unpaged = [];

		// override the default predraw method with one that sets the unpaged property.
		F.Paging.extend('predraw', function(){
			this.unpaged = this.ft.rows.array.slice(0); // create a shallow clone for later use
			this._super(); // call the original method
		});
	}

})(jQuery, FooTable);
(function($, F){

	/**
	 * Adds the row to the table.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 * @returns {jQuery.Deferred}
	 */
	F.Row.prototype.add = function(redraw){
		redraw = F.is.boolean(redraw) ? redraw : true;
		var self = this;
		return $.Deferred(function(d){
			var index = self.ft.rows.all.push(self) - 1;
			if (redraw){
				return self.ft.draw().then(function(){
					d.resolve(index);
				});
			} else {
				d.resolve(index);
			}
		});
	};

	/**
	 * Removes the row from the table.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 * @returns {jQuery.Deferred}
	 */
	F.Row.prototype.delete = function(redraw){
		redraw = F.is.boolean(redraw) ? redraw : true;
		var self = this;
		return $.Deferred(function(d){
			var index = self.ft.rows.all.indexOf(self);
			if (F.is.number(index) && index >= 0 && index < self.ft.rows.all.length){
				self.ft.rows.all.splice(index, 1);
				if (redraw){
					return self.ft.draw().then(function(){
						d.resolve(self);
					});
				}
			}
			d.resolve(self);
		});
	};

	if (F.is.defined(F.Paging)){
		// override the default add method with one that supports paging
		F.Row.extend('add', function(redraw){
			redraw = F.is.boolean(redraw) ? redraw : true;
			var self = this,
				added = this._super(redraw),
				editing = self.ft.use(F.Editing),
				paging;
			if (editing && editing.pageToNew && (paging = self.ft.use(F.Paging)) && redraw){
				return added.then(function(){
					var index = paging.unpaged.indexOf(self); // find this row in the unpaged array (this array will be sorted and filtered)
					var page = Math.ceil((index + 1) / paging.size); // calculate the page the new row is on
					if (paging.current !== page){ // goto the page if we need to
						return paging.goto(page);
					}
				});
			}
			return added;
		});
	}

	if (F.is.defined(F.Sorting)){
		// override the default val method with one that supports sorting and paging
		F.Row.extend('val', function(data, redraw){
			redraw = F.is.boolean(redraw) ? redraw : true;
			var result = this._super(data);
			if (!F.is.hash(data)){
				return result;
			}
			var self = this;
			if (redraw){
				self.ft.draw().then(function(){
					var editing = self.ft.use(F.Editing), paging;
					if (F.is.defined(F.Paging) && editing && editing.pageToNew && (paging = self.ft.use(F.Paging))){
						var index = paging.unpaged.indexOf(self); // find this row in the unpaged array (this array will be sorted and filtered)
						var page = Math.ceil((index + 1) / paging.size); // calculate the page the new row is on
						if (paging.current !== page){ // goto the page if we need to
							return paging.goto(page);
						}
					}
				});
			}
			return result;
		});
	}

})(jQuery, FooTable);
(function(F){

	/**
	 * Adds a row to the underlying {@link FooTable.Rows#all} array.
	 * @param {(object|FooTable.Row)} dataOrRow - A hash containing the row values or an actual {@link FooTable.Row} object.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */
	F.Rows.prototype.add = function(dataOrRow, redraw){
		var row = dataOrRow;
		if (F.is.hash(dataOrRow)){
			row = new FooTable.Row(this.ft, this.ft.columns.array, dataOrRow);
		}
		if (row instanceof FooTable.Row){
			row.add(redraw);
		}
	};

	/**
	 * Updates a row in the underlying {@link FooTable.Rows#all} array.
	 * @param {(number|FooTable.Row)} indexOrRow - The index to update or the actual {@link FooTable.Row} object.
	 * @param {object} data - A hash containing the new row values.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */
	F.Rows.prototype.update = function(indexOrRow, data, redraw){
		var len = this.ft.rows.all.length, 
			row = indexOrRow;
		if (F.is.number(indexOrRow) && indexOrRow >= 0 && indexOrRow < len){
			row = this.ft.rows.all[indexOrRow];
		}
		if (row instanceof FooTable.Row && F.is.hash(data)){
			row.val(data, redraw);
		}
	};

	/**
	 * Deletes a row from the underlying {@link FooTable.Rows#all} array.
	 * @param {(number|FooTable.Row)} indexOrRow - The index to delete or the actual {@link FooTable.Row} object.
	 * @param {boolean} [redraw=true] - Whether or not to redraw the table, defaults to true but for bulk operations this
	 * can be set to false and then followed by a call to the {@link FooTable.Table#draw} method.
	 */
	F.Rows.prototype.delete = function(indexOrRow, redraw){
		var len = this.ft.rows.all.length, 
			row = indexOrRow;
		if (F.is.number(indexOrRow) && indexOrRow >= 0 && indexOrRow < len){
			row = this.ft.rows.all[indexOrRow];
		}
		if (row instanceof FooTable.Row){
			row.delete(redraw);
		}
	};

})(FooTable);

(function($, F){

	// global int to use if the table has no ID
	var _uid = 0,
	// a hash value for the current url
		_url_hash = (function(str){
			var i, l, hval = 0x811c9dc5;
			for (i = 0, l = str.length; i < l; i++) {
				hval ^= str.charCodeAt(i);
				hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
			}
			return hval >>> 0;
		})(location.origin + location.pathname);

	F.State = F.Component.extend(/** @lends FooTable.State */{
		/**
		 * The state component adds the ability for the table to remember its basic state for filtering, paging and sorting.
		 * @constructs
		 * @extends FooTable.Component
		 * @param {FooTable.Table} table - The parent {@link FooTable.Table} object for the component.
		 * @returns {FooTable.State}
		 */
		construct: function(table){
			// call the constructor of the base class
			this._super(table, table.o.state.enabled);
			// Change this value if an update to this component requires any stored data to be reset
			this._key = '1';
			/**
			 * The key to use to store the state for this table.
			 * @type {(null|string)}
			 */
			this.key = this._key + (F.is.string(table.o.state.key) ? table.o.state.key : this._uid());
			/**
			 * Whether or not to allow the filtering component to store it's state.
			 * @type {boolean}
			 */
			this.filtering = F.is.boolean(table.o.state.filtering) ? table.o.state.filtering : true;
			/**
			 * Whether or not to allow the paging component to store it's state.
			 * @type {boolean}
			 */
			this.paging = F.is.boolean(table.o.state.paging) ? table.o.state.paging : true;
			/**
			 * Whether or not to allow the sorting component to store it's state.
			 * @type {boolean}
			 */
			this.sorting = F.is.boolean(table.o.state.sorting) ? table.o.state.sorting : true;
		},
		/* PROTECTED */
		/**
		 * Checks the supplied data and options for the state component.
		 * @instance
		 * @protected
		 * @param {object} data - The jQuery data object from the parent table.
		 * @fires FooTable.State#"preinit.ft.state"
		 * @this FooTable.State
		 */
		preinit: function(data){
			var self = this;
			/**
			 * The preinit.ft.state event is raised before the UI is created and provides the tables jQuery data object for additional options parsing.
			 * Calling preventDefault on this event will disable the component.
			 * @event FooTable.State#"preinit.ft.state"
			 * @param {jQuery.Event} e - The jQuery.Event object for the event.
			 * @param {FooTable.Table} ft - The instance of the plugin raising the event.
			 * @param {object} data - The jQuery data object of the table raising the event.
			 */
			this.ft.raise('preinit.ft.state', [data]).then(function(){

				self.enabled = F.is.boolean(data.state)
					? data.state
					: self.enabled;

				if (!self.enabled) return;

				self.key = self._key + (F.is.string(data.stateKey) ? data.stateKey : self.key);

				self.filtering = F.is.boolean(data.stateFiltering) ? data.stateFiltering : self.filtering;

				self.paging = F.is.boolean(data.statePaging) ? data.statePaging : self.paging;

				self.sorting = F.is.boolean(data.stateSorting) ? data.stateSorting : self.sorting;

			}, function(){
				self.enabled = false;
			});
		},
		/**
		 * Gets the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to get the value for.
		 * @returns {(*|null)}
		 */
		get: function(key){
			return JSON.parse(localStorage.getItem(this.key + ':' + key));
		},
		/**
		 * Sets the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to set the value for.
		 * @param {*} data - The value to store for the key. This value must be JSON.stringify friendly.
		 */
		set: function(key, data){
			localStorage.setItem(this.key + ':' + key, JSON.stringify(data));
		},
		/**
		 * Clears the state value for the specified key for this table.
		 * @instance
		 * @param {string} key - The key to clear the value for.
		 */
		remove: function(key){
			localStorage.removeItem(this.key + ':' + key);
		},
		/**
		 * Executes the {@link FooTable.Component#readState} function on all components.
		 * @instance
		 */
		read: function(){
			this.ft.execute(false, true, 'readState');
		},
		/**
		 * Executes the {@link FooTable.Component#writeState} function on all components.
		 * @instance
		 */
		write: function(){
			this.ft.execute(false, true, 'writeState');
		},
		/**
		 * Executes the {@link FooTable.Component#clearState} function on all components.
		 * @instance
		 */
		clear: function(){
			this.ft.execute(false, true, 'clearState');
		},
		/**
		 * Generates a unique identifier for the current {@link FooTable.Table} if one is not supplied through the options.
		 * This value is a combination of the url hash and either the element ID or an incremented global int value.
		 * @instance
		 * @returns {*}
		 * @private
		 */
		_uid: function(){
			var id = this.ft.$el.attr('id');
			return _url_hash + '_' + (F.is.string(id) ? id : ++_uid);
		}
	});

	F.components.register('state', F.State, 700);

})(jQuery, FooTable);
(function(F){

	/**
	 * This method is called from the {@link FooTable.State#read} method and allows a component to retrieve its' stored state.
	 * @instance
	 * @protected
	 * @function
	 */
	F.Component.prototype.readState = function(){};

	/**
	 * This method is called from the {@link FooTable.State#write} method and allows a component to write its' current state to the store.
	 * @instance
	 * @protected
	 * @function
	 */
	F.Component.prototype.writeState = function(){};

	/**
	 * This method is called from the {@link FooTable.State#clear} method and allows a component to clear any stored state.
	 * @instance
	 * @protected
	 * @function
	 */
	F.Component.prototype.clearState = function(){};

})(FooTable);
(function(F){

	/**
	 * An object containing the state options for the plugin. Added by the {@link FooTable.State} component.
	 * @type {object}
	 * @prop {boolean} enabled=false - Whether or not to allow state to be stored for the table. This overrides the individual component enable options.
	 * @prop {boolean} filtering=true - Whether or not to allow the filtering state to be stored.
	 * @prop {boolean} paging=true - Whether or not to allow the filtering state to be stored.
	 * @prop {boolean} sorting=true - Whether or not to allow the filtering state to be stored.
	 * @prop {string} key=null - The unique key to use to store the table's data.
	 */
	F.Defaults.prototype.state = {
		enabled: false,
		filtering: true,
		paging: true,
		sorting: true,
		key: null
	};

})(FooTable);
(function(F){

	if (!F.Filtering) return;

	/**
	 * Allows the filtering component to retrieve its' stored state.
	 */
	F.Filtering.prototype.readState = function(){
		if (this.ft.state.filtering){
			var state = this.ft.state.get('filtering');
			if (F.is.hash(state) && !F.is.emptyArray(state.filters)){
				this.filters = this.ensure(state.filters);
			}
		}
	};

	/**
	 * Allows the filtering component to write its' current state to the store.
	 */
	F.Filtering.prototype.writeState = function(){
		if (this.ft.state.filtering) {
			var filters = F.arr.map(this.filters, function (f) {
				return {
					name: f.name,
					query: f.query instanceof F.Query ? f.query.val() : f.query,
					columns: F.arr.map(f.columns, function (c) {
						return c.name;
					}),
					hidden: f.hidden,
					space: f.space,
					connectors: f.connectors,
					ignoreCase: f.ignoreCase
				};
			});
			this.ft.state.set('filtering', {filters: filters});
		}
	};

	/**
	 * Allows the filtering component to clear any stored state.
	 */
	F.Filtering.prototype.clearState = function(){
		if (this.ft.state.filtering) {
			this.ft.state.remove('filtering');
		}
	};

})(FooTable);
(function(F){

	if (!F.Paging) return;

	/**
	 * Allows the paging component to retrieve its' stored state.
	 */
	F.Paging.prototype.readState = function(){
		if (this.ft.state.paging) {
			var state = this.ft.state.get('paging');
			if (F.is.hash(state)) {
				this.current = state.current;
				this.size = state.size;
			}
		}
	};

	/**
	 * Allows the paging component to write its' current state to the store.
	 */
	F.Paging.prototype.writeState = function(){
		if (this.ft.state.paging) {
			this.ft.state.set('paging', {
				current: this.current,
				size: this.size
			});
		}
	};

	/**
	 * Allows the paging component to clear any stored state.
	 */
	F.Paging.prototype.clearState = function(){
		if (this.ft.state.paging) {
			this.ft.state.remove('paging');
		}
	};

})(FooTable);
(function(F){

	if (!F.Sorting) return;

	/**
	 * Allows the sorting component to retrieve its' stored state.
	 */
	F.Sorting.prototype.readState = function(){
		if (this.ft.state.sorting) {
			var state = this.ft.state.get('sorting');
			if (F.is.hash(state)) {
				var column = this.ft.columns.get(state.column);
				if (column instanceof F.Column) {
					this.column = column;
					this.column.direction = state.direction;
				}
			}
		}
	};

	/**
	 * Allows the sorting component to write its' current state to the store.
	 */
	F.Sorting.prototype.writeState = function(){
		if (this.ft.state.sorting && this.column instanceof F.Column){
			this.ft.state.set('sorting', {
				column: this.column.name,
				direction: this.column.direction
			});
		}
	};

	/**
	 * Allows the sorting component to clear any stored state.
	 */
	F.Sorting.prototype.clearState = function(){
		if (this.ft.state.sorting) {
			this.ft.state.remove('sorting');
		}
	};

})(FooTable);
(function(F){

	// hook into the _construct method so we can add the state property to the table.
	F.Table.extend('_construct', function(ready){
		this.state = this.use(FooTable.State);
		return this._super(ready);
	});

	// hook into the _preinit method so we can trigger a plugin wide read state operation.
	F.Table.extend('_preinit', function(){
		var self = this;
		return self._super().then(function(){
			if (self.state.enabled){
				self.state.read();
			}
		});
	});

	// hook into the draw method so we can trigger a plugin wide write state operation.
	F.Table.extend('draw', function(){
		var self = this;
		return self._super().then(function(){
			if (self.state.enabled){
				self.state.write();
			}
		});
	});

})(FooTable);
(function($, F){

	F.Export = F.Component.extend(/** @lends FooTable.Export */{
		/**
		 * @summary This component provides some basic export functionality.
		 * @memberof FooTable
		 * @constructs Export
		 * @param {FooTable.Table} table - The current instance of the plugin.
		 */
		construct: function(table){
			// call the constructor of the base class
			this._super(table, true);
			/**
			 * @summary A snapshot of the working set of rows prior to being trimmed by the paging component.
			 * @memberof FooTable.Export#
			 * @name snapshot
			 * @type {FooTable.Row[]}
			 */
			this.snapshot = [];
		},
		/**
		 * @summary Hooks into the predraw pipeline after sorting and filtering have taken place but prior to paging.
		 * @memberof FooTable.Export#
		 * @function predraw
		 * @description This method allows us to take a snapshot of the working set of rows before they are trimmed by the paging component and is called by the plugin instance.
		 */
		predraw: function(){
			this.snapshot = this.ft.rows.array.slice(0);
		},
		/**
		 * @summary Return the columns as simple JavaScript objects in an array.
		 * @memberof FooTable.Export#
		 * @function columns
		 * @returns {Object[]}
		 */
		columns: function(){
			var result = [];
			F.arr.each(this.ft.columns.array, function(column){
				if (!column.internal){
					result.push({
						type: column.type,
						name: column.name,
						title: column.title,
						visible: column.visible,
						hidden: column.hidden,
						classes: column.classes,
						style: column.style
					});
				}
			});
			return result;
		},
		/**
		 * @summary Return the rows as simple JavaScript objects in an array.
		 * @memberof FooTable.Export#
		 * @function rows
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {Object[]}
		 */
		rows: function(filtered){
			filtered = F.is.boolean(filtered) ? filtered : false;
			var rows = filtered ? this.ft.rows.all : this.snapshot, result = [];
			F.arr.each(rows, function(row){
				result.push(row.val());
			});
			return result;
		},
		/**
		 * @summary Return the columns and rows as a properly formatted JSON object.
		 * @memberof FooTable.Export#
		 * @function json
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {Object}
		 */
		json: function(filtered){
			return JSON.parse(JSON.stringify({columns: this.columns(),rows: this.rows(filtered)}));
		},
		/**
		 * @summary Return the columns and rows as a properly formatted CSV value.
		 * @memberof FooTable.Export#
		 * @function csv
		 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
		 * @returns {string}
		 */
		csv: function(filtered){
			var csv = "", columns = this.columns(), value, escaped;
			F.arr.each(columns, function(column, i){
				escaped = '"' + column.title.replace(/"/g, '""') + '"';
				csv += (i === 0 ? escaped : "," + escaped);
			});
			csv += "\n";

			var rows = filtered ? this.ft.rows.all : this.snapshot;
			F.arr.each(rows, function(row){
				F.arr.each(row.cells, function(cell, i){
					if (!cell.column.internal){
						value = cell.column.stringify.call(cell.column, cell.value, cell.ft.o, cell.row.value);
						escaped = '"' + value.replace(/"/g, '""') + '"';
						csv += (i === 0 ? escaped : "," + escaped);
					}
				});
				csv += "\n";
			});
			return csv;
		}
	});

	// register the component using a priority of 490 which falls just after filtering (500) and before paging (400).
	F.components.register("export", F.Export, 490);

})(jQuery, FooTable);
(function(F){
	// this is used to define the filtering specific properties on column creation
	F.Column.prototype.__export_define__ = function(definition){
		this.stringify = F.checkFnValue(this, definition.stringify, this.stringify);
	};

	// overrides the public define method and replaces it with our own
	F.Column.extend('define', function(definition){
		this._super(definition); // call the base so we don't have to redefine any previously set properties
		this.__export_define__(definition); // then call our own
	});

	/**
	 * @summary Return the supplied value as a string.
	 * @memberof FooTable.Column#
	 * @function stringify
	 * @returns {string}
	 */
	F.Column.prototype.stringify = function(value, options, rowData){
		return value + "";
	};

	// override the base method for DateColumns
	F.DateColumn.prototype.stringify = function(value, options, rowData){
		return F.is.object(value) && F.is.boolean(value._isAMomentObject) && value.isValid() ? value.format(this.formatString) : '';
	};

	// override the base method for ObjectColumns
	F.ObjectColumn.prototype.stringify = function(value, options, rowData){
		return F.is.object(value) ? JSON.stringify(value) : "";
	};

	// override the base method for ArrayColumns
	F.ArrayColumn.prototype.stringify = function(value, options, rowData){
		return F.is.array(value) ? JSON.stringify(value) : "";
	};

})(FooTable);
(function(F){
	/**
	 * @summary Return the columns and rows as a properly formatted JSON object.
	 * @memberof FooTable.Table#
	 * @function toJSON
	 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
	 * @returns {Object}
	 */
	F.Table.prototype.toJSON = function(filtered){
		return this.use(F.Export).json(filtered);
	};

	/**
	 * @summary Return the columns and rows as a properly formatted CSV value.
	 * @memberof FooTable.Table#
	 * @function toCSV
	 * @param {boolean} [filtered=false] - Whether or not to exclude filtered rows from the result.
	 * @returns {string}
	 */
	F.Table.prototype.toCSV = function(filtered){
		return this.use(F.Export).csv(filtered);
	};

})(FooTable);
/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.7.1
 *
 */

$(document).ready(function () {


    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }

    // MetsiMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
    $('.collapse-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').on('click', function () {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Minimalize menu
    $('.navbar-minimalize').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();

    });

    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarHeight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarHeight + "px");
        }

        if (navbarHeight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarHeight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarHeight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })
});


// Minimalize menu when screen is less than 768px
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

//# sourceMappingURL=app.js.map
