!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}([function(e,t,n){"use strict";var r=n(3),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:s,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,i=arguments.length;r<i;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,i=arguments.length;r<i;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(14)},function(e,t){var n,r;Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(n(this.denominator)){var e=r(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}n(this.numerator)&&(e=r(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},e.exports.Fraction=Fraction},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),i=n(19),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(a=n(8)),a),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n(7))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,p=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):p=-1,u.length&&d())}function d(){if(!l){var e=a(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++p<t;)c&&c[p].run();p=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0),i=n(20),o=n(4),s=n(22),a=n(25),c=n(26),u=n(9);e.exports=function(e){return new Promise((function(t,l){var p=e.data,f=e.headers;r.isFormData(p)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";f.Authorization="Basic "+btoa(h+":"+m)}var g=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),o(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};i(t,l,r),d=null}},d.onabort=function(){d&&(l(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){l(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=n(27),_=(e.withCredentials||c(g))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;_&&(f[e.xsrfHeaderName]=_)}if("setRequestHeader"in d&&r.forEach(f,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete f[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),l(e),d=null)})),void 0===p&&(p=null),d.send(p)}))}},function(e,t,n){"use strict";var r=n(21);e.exports=function(e,t,n,i,o){var s=new Error(e);return r(s,t,n,i,o)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},i=["url","method","params","data"],o=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(i,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(o,(function(i){r.isObject(t[i])?n[i]=r.deepMerge(e[i],t[i]):void 0!==t[i]?n[i]=t[i]:r.isObject(e[i])?n[i]=r.deepMerge(e[i]):void 0!==e[i]&&(n[i]=e[i])})),r.forEach(s,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var a=i.concat(o).concat(s),c=Object.keys(t).filter((function(e){return-1===a.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Recipe}));var axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);class Recipe{constructor(e){this.id=e}async getRecipe(){try{const e=await axios__WEBPACK_IMPORTED_MODULE_0___default()("https://forkify-api.herokuapp.com/api/get?rId="+this.id);this.title=e.data.recipe.title,this.author=e.data.recipe.publisher,this.img=e.data.recipe.image_url,this.url=e.data.recipe.source_url,this.ingredients=e.data.recipe.ingredients,console.log(e)}catch(e){console.log(e)}}calcTime(){const e=this.ingredients.length/3;this.time=15*e}calcServings(){this.servings=4}parseIngredients(){const unitsLong=["tablespoons","tablespoon","ounces","ounce","teaspoons","teaspoon","cups","pounds"],unitsShort=["tbsp","tbsp","oz","oz","tsp","tsp","cup","pound"],units=[...unitsShort,"kg","g"],newIngredients=this.ingredients.map(el=>{let ingredient=el.toLowerCase();unitsLong.forEach((e,t)=>{ingredient=ingredient.replace(e,unitsShort[t])}),ingredient=ingredient.replace(/ *\([^)]*\) */g," ");const arrIng=ingredient.split(" "),unitIndex=arrIng.findIndex(e=>units.includes(e));let objIng;if(unitIndex>-1){const arrCount=arrIng.slice(0,unitIndex);let count;count=1===arrCount?eval(arrIng[0].replace("-","+")):eval(arrIng.slice(0,unitIndex).join("+")),objIng={count:count,unit:arrIng[unitIndex],ingredient:arrIng.slice(unitIndex+1).join(" ")}}else parseInt(arrIng[0],10)?objIng={count:parseInt(arrIng[0],10),unit:"",ingredient:arrIng.slice(1).join(" ")}:-1===unitIndex&&(objIng={count:1,unit:"",ingredient:ingredient});return objIng});this.ingredients=newIngredients}updateServings(e){const t="dec"===e?this.servings-1:this.servings+1;this.ingredients.forEach(e=>{e.count*=t/this.servings}),this.servings=t}}},function(e,t,n){(function(t){var n=void 0!==t&&t.pid?t.pid.toString(36):"";function r(){var e=Date.now(),t=r.last||e;return r.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+n+r().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+n+r().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+r().toString(36)+(t||"")}}).call(this,n(7))},function(e,t,n){"use strict";var r=n(0),i=n(3),o=n(15),s=n(10);function a(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=a(n(6));c.Axios=o,c.create=function(e){return a(s(c.defaults,e))},c.Cancel=n(11),c.CancelToken=n(28),c.isCancel=n(5),c.all=function(e){return Promise.all(e)},c.spread=n(29),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),i=n(4),o=n(16),s=n(17),a=n(10);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,i){return this.request(r.merge(i||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(18),o=n(5),s=n(6);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return a(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(a(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t,n){var i=n.config.validateStatus;!i||i(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(23),i=n(24);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(11);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r);class o{constructor(e){this.query=e}async getResults(){try{const e=await i()("https://forkify-api.herokuapp.com/api/search?q="+this.query);this.result=e.data.recipes}catch(e){alert(e)}}}var s=n(12),a=n(13),c=n.n(a);class u{constructor(){this.items=[]}addItem(e,t,n){const r={id:c()(),count:e,unit:t,ingredient:n};return this.items.push(r),r}deleteItem(e){const t=this.items.findIndex(t=>t.id===e);this.items.splice(t,1)}updateCount(e,t){this.items.find(t=>t.id===e).count=t}}class l{constructor(){this.likes=[]}addLike(e,t,n,r){const i={id:e,title:t,author:n,img:r};return this.likes.push(i),this.persistData(),i}deleteLike(e){const t=this.likes.findIndex(t=>t.id===e);this.likes.splice(t,1),this.persistData()}isLiked(e){return-1!==this.likes.findIndex(t=>t.id===e)}getNumLikes(){return this.likes.length}persistData(){localStorage.setItem("likes",JSON.stringify(this.likes))}readStorage(){const e=JSON.parse(localStorage.getItem("likes"));e&&(this.likes=e)}}const p={searchForm:document.querySelector(".search"),searchInput:document.querySelector(".search__field"),searchRes:document.querySelector(".results"),searchResList:document.querySelector(".results__list"),searchResPages:document.querySelector(".results__pages"),recipe:document.querySelector(".recipe"),shopping:document.querySelector(".shopping__list"),likesMenu:document.querySelector(".likes__field"),likesList:document.querySelector(".likes__list")},f="loader",d=e=>{const t=`<div class = '${f}'>\n                        <svg> \n                            <use href = 'img/icons.svg#icon-cw'></use>\n                        </svg>\n                    </div>`;e.insertAdjacentHTML("afterbegin",t)},h=()=>{const e=document.querySelector("."+f);e&&e.parentElement.removeChild(e)},m=(e,t=17)=>{const n=[];return e.length>t?(e.split(" ").reduce((e,r)=>(e+r.length<t&&n.push(r),e+r.length),0),n.join(" ")+" ..."):e},g=e=>{const t=`\n    <li> \n        <a class="results__link" href="#${e.recipe_id}">\n            <figure class="results__fig">\n                <img src="${e.image_url}" alt="Test">\n            </figure>\n            <div class="results__data">\n                <h4 class="results__name">${m(e.title)}</h4>\n                <p class="results__author">${e.publisher}</p>\n            </div>\n        </a>\n    </li>`;p.searchResList.insertAdjacentHTML("beforeend",t)},v=(e,t)=>`\n<button class="btn-inline results__btn--${t}"  data-goto=${"prev"===t?e-1:e+1}>\n    <span>Page ${"prev"===t?e-1:e+1}</span>\n        <svg class="search__icon">\n            <use href="img/icons.svg#icon-triangle-${"prev"===t?"left":"right"}"></use>\n        </svg>\n</button>\n`,_=(e,t=1,n=10)=>{const r=(t-1)*n,i=t*n;e.slice(r,i).forEach(g),((e,t,n)=>{const r=Math.ceil(t/n);let i;1===e&&r>1?i=v(e,"next"):e<r?i=`${v(e,"next")}\n                  ${v(e,"prev")}`:e===r&&r>1&&(i=v(e,"prev")),p.searchResPages.insertAdjacentHTML("afterbegin",i)})(t,e.length,n)},y=()=>{p.searchResList.innerHTML="",p.searchResPages.innerHTML=""};var b=n(2);const w=e=>{if(e){const t=Math.round(1e4*e)/1e4,[n,r]=t.toString().split(".").map(e=>parseInt(e,10));if(!r)return t;if(0===n){const e=new b.Fraction(t);return`${e.numerator}/${e.denominator}`}{const e=new b.Fraction(t-n);return`${n} ${e.numerator}/${e.denominator} `}}return"?"},x=(e,t)=>{const n=`\n                <figure class="recipe__fig">\n                            <img src="${e.img}" alt="${e.title}" class="recipe__img">\n                            <h1 class="recipe__title">\n                                <span>${e.title}</span>\n                            </h1>\n                        </figure>\n                        <div class="recipe__details">\n                            <div class="recipe__info">\n                                <svg class="recipe__info-icon">\n                                    <use href="img/icons.svg#icon-stopwatch"></use>\n                                </svg>\n                                <span class="recipe__info-data recipe__info-data--minutes">${e.time}</span>\n                                <span class="recipe__info-text"> minutes</span>\n                            </div>\n                            <div class="recipe__info">\n                                <svg class="recipe__info-icon">\n                                    <use href="img/icons.svg#icon-man"></use>\n                                </svg>\n                                <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>\n                                <span class="recipe__info-text"> servings</span>\n\n                                <div class="recipe__info-buttons">\n                                    <button class="btn-tiny btn-decrease">\n                                        <svg>\n                                            <use href="img/icons.svg#icon-circle-with-minus"></use>\n                                        </svg>\n                                    </button>\n                                    <button class="btn-tiny btn-increase">\n                                        <svg>\n                                            <use href="img/icons.svg#icon-circle-with-plus"></use>\n                                        </svg>\n                                    </button>\n                                </div>\n\n                            </div>\n                            <button class="recipe__love">\n                                <svg class="header__likes">\n                                    <use href="img/icons.svg#icon-heart${t?"":"-outlined"}"></use>\n                                </svg>\n                            </button>\n                        </div>\n\n\n\n                        <div class="recipe__ingredients">\n                            <ul class="recipe__ingredient-list">\n                                ${e.ingredients.map(e=>{return`\n        <li class="recipe__item">\n            <svg class="recipe__icon">\n                <use href="img/icons.svg#icon-check"></use>\n            </svg>\n            <div class="recipe__count">${w((t=e).count)}</div>\n            <div class="recipe__ingredient">\n                <span class="recipe__unit">${t.unit}</span>\n                ${t.ingredient}\n            </div>\n        </li>\n`;var t}).join("")}\n                                \n                            </ul>\n\n                            <button class="btn-small recipe__btn--add">\n                                <svg class="search__icon">\n                                    <use href="img/icons.svg#icon-shopping-cart"></use>\n                                </svg>\n                                <span>Add to shopping list</span>\n                            </button>\n                        </div>\n\n                        <div class="recipe__directions">\n                            <h2 class="heading-2">How to cook it</h2>\n                            <p class="recipe__directions-text">\n                                This recipe was carefully designed and tested by\n                                <span class="recipe__by">${e.author}</span>. Please check out directions at their website.\n                            </p>\n                            <a class="btn-small recipe__btn" href="${e.url}" target="_blank">\n                                <span>Directions</span>\n                                <svg class="search__icon">\n                                    <use href="img/icons.svg#icon-triangle-right"></use>\n                                </svg>\n\n                            </a>\n            </div>`;p.recipe.insertAdjacentHTML("afterbegin",n)},k=e=>{document.querySelector(".recipe__info-data--people").textContent=e.servings;Array.from(document.querySelectorAll(".recipe__count")).forEach((t,n)=>{t.textContent=w(e.ingredients[n].count)})},S=e=>{const t=e?"icon-heart":"icon-heart-outlined";document.querySelector(".recipe__love use").setAttribute("href","img/icons.svg#"+t)},E=e=>{p.likesMenu.style.visibility=e>0?"visible":"hidden"},L=e=>{const t=`\n            <li>\n                <a class="likes__link" href="#${e.id}">\n                    <figure class="likes__fig">\n                        <img src="${e.img}" alt="${e.title}">\n                    </figure>\n                    <div class="likes__data">\n                        <h4 class="likes__name">${m(e.title)}</h4>\n                        <p class="likes__author">${e.author}</p>\n                    </div>\n                </a>\n            </li>\n\n    `;p.likesList.insertAdjacentHTML("beforeend",t)},T={},j=async()=>{const e=p.searchInput.value;e&&(T.search=new o(e),p.searchInput.value="",y(),d(p.searchRes),await T.search.getResults(),h(),_(T.search.result))};p.searchForm.addEventListener("submit",e=>{e.preventDefault(),j()}),p.searchResPages.addEventListener("click",e=>{const t=e.target.closest(".btn-inline");if(t){const e=parseInt(t.dataset.goto,10);y(),_(T.search.result,e)}});const I=async()=>{const e=window.location.hash.replace("#","");if(e){p.recipe.innerHTML="",d(p.recipe),T.search&&(e=>{Array.from(document.querySelectorAll(".results__link")).forEach(e=>{e.classList.remove("results__link--active")}),document.querySelector(`.results__link[href*="${e}"]`).classList.add("results__link--active")})(e),T.recipe=new s.a(e);try{await T.recipe.getRecipe(),T.recipe.parseIngredients(),T.recipe.calcTime(),T.recipe.calcServings(),h(),x(T.recipe,T.likes.isLiked(e))}catch(e){alert("Error Processing Recipe")}}};["hashchange","load"].forEach(e=>window.addEventListener(e,I));const R=()=>{T.List||(T.list=new u),T.recipe.ingredients.forEach(e=>{(e=>{const t=`\n            <li class="shopping__item" data-itemid=${e.id}>\n            <div class="shopping__count">\n                <input type="number" value="${e.count}" step="${e.count}" class ="shopping__count-value">\n                <p>${e.unit}</p>\n            </div>\n            <p class="shopping__description">${e.ingredient}</p>\n            <button class="shopping__delete btn-tiny">\n                <svg>\n                    <use href="img/icons.svg#icon-circle-with-cross"></use>\n                </svg>\n            </button>\n        </li>   \n    `;p.shopping.insertAdjacentHTML("beforeend",t)})(T.list.addItem(e.count,e.unit,e.ingredient))})};p.shopping.addEventListener("click",e=>{const t=e.target.closest(".shopping__item").dataset.itemid;if(e.target.matches(".shopping__delete, .shopping__delete *"))T.list.deleteItem(t),(e=>{const t=document.querySelector(`[data-itemid="${e}"]`);t.parentElement.removeChild(t)})(t);else if(e.target.matches(".shopping__count-value")){const n=parseFloat(e.target.value,10);T.list.updateCount(t,n)}});const F=()=>{T.likes||(T.likes=new l);const e=T.recipe.id;if(T.likes.isLiked(e))T.likes.deleteLike(e),S(!1),(e=>{const t=document.querySelector(`.likes__link[href *= "${e}"]`).parentElement;t&&t.parentElement.removeChild(t)})(e),console.log(T.likes);else{const t=T.likes.addLike(e,T.recipe.title,T.recipe.author,T.recipe.img);S(!0),L(t),console.log(T.likes)}E(T.likes.getNumLikes())};window.addEventListener("load",()=>{T.likes=new l,T.likes.readStorage(),E(T.likes.getNumLikes()),T.likes.likes.forEach(e=>L(e))}),p.recipe.addEventListener("click",e=>{e.target.matches(".btn-decrease, .btn-decrease *")?T.recipe.servings>1&&(T.recipe.updateServings("dec"),k(T.recipe)):e.target.matches(".btn-increase, .btn-increase *")?(T.recipe.updateServings("inc"),k(T.recipe)):e.target.matches(".recipe__btn--add,.recipe__btn--add *")?R():e.target.matches(".recipe__love,.recipe__love *")&&F()})}]);