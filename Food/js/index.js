/*! For license information please see index.js.LICENSE.txt */
!function(){var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,s=void 0,i=function(t,e){f[r]=t,f[r+1]=e,2===(r+=2)&&(s?s(m):g())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(m,1)}}var f=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;r=0}var v,y,p,_,g=void 0;function w(t,e){var n=this,r=new this.constructor(S);void 0===r[E]&&$(r);var o=n._state;if(o){var s=arguments[o-1];i((function(){return I(o,r,s,n._result)}))}else T(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(S);return x(e,t),e}g=u?function(){return process.nextTick(m)}:l?(y=0,p=new l(m),_=document.createTextNode(""),p.observe(_,{characterData:!0}),function(){_.data=y=++y%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:h()}catch(t){return h()}}():h();var E=Math.random().toString(36).substring(2);function S(){}var L=void 0;function A(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){1===e._state?C(t,e._result):2===e._state?k(t,e._result):T(e,void 0,(function(e){return x(t,e)}),(function(e){return k(t,e)}))}(e,n):void 0===r?C(e,n):t(r)?function(t,e,n){i((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?x(t,n):C(t,n))}),(function(e){r||(r=!0,k(t,e))}),t._label);!r&&o&&(r=!0,k(t,o))}),t)}(e,n,r):C(e,n)}function x(t,e){if(t===e)k(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)C(t,e);else{var n=void 0;try{n=e.then}catch(e){return void k(t,e)}A(t,e,n)}var r,o}function q(t){t._onerror&&t._onerror(t._result),j(t)}function C(t,e){t._state===L&&(t._result=e,t._state=1,0!==t._subscribers.length&&i(j,t))}function k(t,e){t._state===L&&(t._state=2,t._result=e,i(q,t))}function T(t,e,n,r){var o=t._subscribers,s=o.length;t._onerror=null,o[s]=e,o[s+1]=n,o[s+2]=r,0===s&&t._state&&i(j,t)}function j(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,s=t._result,i=0;i<e.length;i+=3)r=e[i],o=e[i+n],r?I(n,r,o,s):o(s);t._subscribers.length=0}}function I(e,n,r,o){var s=t(r),i=void 0,c=void 0,a=!0;if(s){try{i=r(o)}catch(t){a=!1,c=t}if(n===i)return void k(n,new TypeError("A promises callback cannot return that same promise."))}else i=o;n._state!==L||(s&&a?x(n,i):!1===a?k(n,c):1===e?C(n,i):2===e&&k(n,i))}var M=0;function $(t){t[E]=M++,t._state=void 0,t._result=void 0,t._subscribers=[]}var O=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(S),this.promise[E]||$(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?C(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&C(this.promise,this._result))):k(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===L&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,s=void 0,i=!1;try{o=t.then}catch(t){i=!0,s=t}if(o===w&&t._state!==L)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===N){var c=new n(S);i?k(c,s):A(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===L&&(this._remaining--,2===t?k(r,n):this._result[e]=n),0===this._remaining&&C(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;T(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var N=function(){function e(t){this[E]=M++,this._result=this._state=void 0,this._subscribers=[],S!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){x(t,e)}),(function(e){k(t,e)}))}catch(e){k(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return N.prototype.then=w,N.all=function(t){return new O(this,t).promise},N.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,s=0;s<o;s++)n.resolve(t[s]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},N.resolve=b,N.reject=function(t){var e=new this(S);return k(e,t),e},N._setScheduler=function(t){s=t},N._setAsap=function(t){i=t},N._asap=i,N.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=N},N.Promise=N,N}()},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(746);function t(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hidden"),document.body.style.overflow="hidden",console.log(e),e&&clearInterval(e)}function e(t){const e=document.querySelector(t);e.classList.add("hidden"),e.classList.remove("show"),document.body.style.overflow=""}var r=function(n,r){const o=document.querySelectorAll(n);function s(n){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),t(".modal",r);const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n        <div class="modal__content">\n            <div class="modal__close" data-close>×</div>\n            <div class="modal__title">${n}</div>\n        </div>\n    `,document.querySelector(".modal").append(s),setTimeout((()=>{s.remove(),o.classList.add("show"),o.classList.remove("hide"),e(".modal")}),4e3)}o.forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/spinner.svg",n.style.cssText="\n            display: block;\n            margin: 0 auto;\n        ",e.insertAdjacentElement("afterend",n);const r=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(r.entries()))).then((t=>{console.log(t),s("Передача данных прошла успешно! Мы с вами свяжемся!"),setTimeout((()=>{n.remove()}),5e3)})).catch((()=>{s("Что-то пошло не так, попробуйте ещё раз:)")})).finally((()=>{e.reset()}))}))}))};n(702).polyfill(),document.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),8e3);(function(t,e,n,r){const o=document.querySelectorAll(t),s=document.querySelectorAll(e),i=document.querySelector(n);function c(){s.forEach((t=>{t.classList.add("hide","fade"),t.classList.remove("show")})),o.forEach((t=>{t.classList.remove(r)}))}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s[t].classList.add("show"),s[t].classList.remove("hide"),o[t].classList.add(r)}c(),a(),i.addEventListener("click",(e=>{e.target&&e.target.classList.contains(t.slice(1))&&o.forEach(((t,n)=>{e.target===t&&(c(),a(n))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(t,e){function n(t){return t<10?`0${t}`:t}!function(r){const o=document.querySelector(t),s=o.querySelector("#days"),i=o.querySelector("#hours"),c=o.querySelector("#minutes"),a=o.querySelector("#seconds"),l=setInterval(u,1e3);function u(){const t=function(){let t,n,r,o;const s=Date.parse(e)-new Date;return s<=0?(t=0,n=0,r=0,o=0):(t=Math.floor(s/864e5),n=Math.floor(s/36e5%24),r=Math.floor(s/6e4%60),o=Math.floor(s/1e3%60)),{total:s,days:t,hours:n,minutes:r,seconds:o}}();t.total>0?(s.innerText=n(t.days),i.innerText=n(t.hours),c.innerText=n(t.minutes),a.innerText=n(t.seconds)):(clearInterval(l),s.textContent="00",i.textContent="00",c.textContent="00",a.textContent="00",s.parentElement.style.backgroundColor="red",i.parentElement.style.backgroundColor="red",c.parentElement.style.backgroundColor="red",a.parentElement.style.backgroundColor="red")}u()}()}(".timer","2022-05-07"),function(){class t{constructor(t,e,n,r,o,s,i){this.name=t,this.img=e,this.alt=n,this.info=r,this.price=o;for(var c=arguments.length,a=new Array(c>7?c-7:0),l=7;l<c;l++)a[l-7]=arguments[l];this.classes=a,this.element=s,this.parent=document.querySelector(i),this.transfer=.7,this.changeToUAH()}madeCart(){const t=document.createElement(this.element);0===this.classes.length&&this.classes.push("menu__item"),this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n            <img src=${this.img} alt=${this.alt}>\n            <h3 class="menu__item-subtitle">${this.name}</h3>\n            <div class="menu__item-descr">${this.info}</div>\n            <div class="menu__item-divider"></div>\n            <div class = "menu__item-price">\n                <div class="menu__item-cost"> Цена: </div>\n                <div class="menu__item-total"><span>${this.price}</span> грн/день </div>\n            </div>\n        `,this.parent.append(t)}changeToUAH(){this.price=(this.price*this.transfer).toFixed(2)}}(async t=>{const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return console.log(e),await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((e=>{let{name:n,img:r,alt:o,info:s,price:i}=e;new t(n,r,o,s,i,"div",".menu .container").madeCart()}))}))}(),r("form",n),function(n,r,o){const s=document.querySelectorAll(n),i=document.querySelector(r);s.forEach((e=>{e.addEventListener("click",(()=>t(r,o)))})),i.addEventListener("click",(t=>{t.target!==i&&""!==t.target.getAttribute("data-close")||e(r)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&i.classList.contains("show")&&e(r)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(r,o),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(t){let{container:e,slides:n,nextArr:r,prevArr:o,totalImage:s,currImg:i,wrapper:c,field:a}=t;const l=document.querySelectorAll(n),u=document.querySelector(e),d=document.querySelector(s),h=document.querySelector(i),f=document.querySelector(o),m=document.querySelector(r),v=document.querySelector(c),y=document.querySelector(a),p=window.getComputedStyle(v).width;let _=1,g=0;function w(t,e){t.textContent=e<10?`0${e}`:`${e}`}y.style.width=100*l.length+"%",y.style.display="flex",y.style.transition=".45s all",v.style.overflow="hidden",l.forEach((t=>{t.style.width=p})),w(h,_),w(d,l.length);const b=document.createElement("div");b.style.height="25px",b.style.margin="0 auto",b.style.top="20px",b.cssText="\n    position: 'absolute';\n    display: flex;\n    margin-left = '15%';\n    margin-right = '15%';\n\t",l.forEach((()=>{const t=document.createElement("button");t.classList.add("dot-button"),t.style.width="25px",t.style.height="10px",t.style.border="none",t.style.borderRadius="18%",t.style.backgroundColor="lightgrey",t.style.margin="10px",t.style.transform="translateY(-40px)",t.style.opacity="0.8",b.append(t)})),u.append(b);const E=document.querySelectorAll(".dot-button");function S(){y.style.transform=`translateX(-${g}px`,_=g/parseInt(p)+1,E.forEach((t=>{t.style.backgroundColor="grey"})),E[_-1].style.backgroundColor="white",w(h,_)}E.forEach(((t,e,n)=>{t.style.backgroundColor="grey",t.addEventListener("click",(()=>{g=parseInt(p)*e,y.style.transform=`translateX(-${g}px`,n.forEach((t=>{t.style.backgroundColor="grey"})),t.style.backgroundColor="white",w(h,e+1)}))})),E[_-1].style.backgroundColor="white",m.addEventListener("click",(()=>{g===parseInt(p)*(l.length-1)?g=0:g+=parseInt(p),S()})),f.addEventListener("click",(()=>{0===g?g=parseInt(p)*(l.length-1):g-=parseInt(p),S()}))}({container:".offer__slider",slides:".offer__slide",totalImage:"#total",nextArr:".offer__slider-next",prevArr:".offer__slider-prev",currImg:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),function(){const t=document.querySelectorAll("#gender .calculating__choose-item"),e=document.querySelector("#female"),n=document.querySelector("#male"),r=document.querySelectorAll(".calculating__choose_medium input"),o=document.querySelector("#height"),s=document.querySelector("#weight"),i=document.querySelector("#age"),c=document.querySelectorAll(".calculating__choose_big div"),a=document.querySelector("#result-kal");let l=localStorage.getItem("currentActivity");function u(){n.classList.contains("calculating__choose-item_active")?s.value&&i.value&&o.value&&l&&(a.textContent=Math.round((88.36+13.4*+s.value+4.8*+o.value-5.7*+i.value)*l)+" ккал"):e.classList.contains("calculating__choose-item_active")?s.value&&i.value&&o.value&&l&&(a.textContent=Math.round((447.6+9.2*+s.value+3.1*+o.value-4.3*+i.value)*l)+" ккал"):a.textContent="Введите все данные!"}a.textContent="Введите все данные",function(t,e){if(document.querySelectorAll(".calculating__choose-item").forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("gender")&&t.classList.add(e)})),localStorage.currentActivity){let t=Math.round((localStorage.currentActivity-1.2)/.175);c[t].classList.add(e)}}(0,"calculating__choose-item_active"),t.forEach((e=>e.addEventListener("click",(()=>{t.forEach((t=>t.classList.remove("calculating__choose-item_active"))),e.classList.add("calculating__choose-item_active"),localStorage.setItem("gender",e.id),u()})))),r.forEach((t=>t.addEventListener("input",(()=>{""===t.value||Number.isNaN(+t.value)?(t.classList.remove("calculating__choose-item_active"),t.value="",a.textContent="Введите все данные в числах!"):(t.classList.add("calculating__choose-item_active"),u())})))),c.forEach(((t,e)=>t.addEventListener("click",(()=>{c.forEach((t=>t.classList.remove("calculating__choose-item_active"))),t.classList.add("calculating__choose-item_active"),l=(1.2+.175*e).toFixed(3),localStorage.setItem("currentActivity",l),u()}))))}()}))}()}();
//# sourceMappingURL=index.js.map