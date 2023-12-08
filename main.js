/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,c=o.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(r){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,c=Object.create(o.prototype),a=new P(n||[]);return u(c,"_invoke",{value:C(t,r,a)}),c}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function S(){}var w={};p(w,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==o&&c.call(E,i)&&(w=E);var q=S.prototype=b.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(o,u,a,i){var s=d(e[o],e,u);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==t(p)&&c.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,a,i)}),(function(t){n("throw",t,a,i)})):r.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,i)}))}i(s.arg)}var o;u(this,"_invoke",{value:function(t,e){function c(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(c,c):c()}})}function C(t,e,n){var o=h;return function(c,u){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===c)throw u;return{value:r,done:!0}}for(n.method=c,n.arg=u;;){var a=n.delegate;if(a){var i=O(a,n);if(i){if(i===_)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var c=d(o,t.iterator,e.arg);if("throw"===c.type)return e.method="throw",e.arg=c.arg,e.delegate=null,_;var u=c.arg;return u?u.done?(e[t.resultName]=u.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):u:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,u=function t(){for(;++o<e.length;)if(c.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return u.next=u}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=S,u(q,"constructor",{value:S,configurable:!0}),u(S,"constructor",{value:g,configurable:!0}),g.displayName=p(S,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,p(t,l,"GeneratorFunction")),t.prototype=Object.create(q),t},n.awrap=function(t){return{__await:t}},x(k.prototype),p(k.prototype,s,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,c){void 0===c&&(c=Promise);var u=new k(f(t,e,r,o),c);return n.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},x(q),p(q,l,"Generator"),p(q,i,(function(){return this})),p(q,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var i=c.call(u,"catchLoc"),s=c.call(u,"finallyLoc");if(i&&s){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,c,u){try{var a=t[c](u),i=a.value}catch(t){return void r(t)}a.done?e(i):Promise.resolve(i).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,c){var u=t.apply(e,n);function a(t){r(u,o,c,a,i,"next",t)}function i(t){r(u,o,c,a,i,"throw",t)}a(void 0)}))}}var o,c,u={baseUrl:"https://nomoreparties.co/v1/wff-cohort-1",headers:{authorization:"1cc10a3e-0236-450e-9a14-d6ad47096e52","Content-Type":"application/json"}},a=function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))},i=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/users/me"),{headers:u.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards"),{headers:u.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all([i(),s()]));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:r,about:n})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:r,link:n})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:u.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:u.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:u.headers}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:r})}).then((function(t){return a(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function m(t,e,r){(t.classList.contains("card__like-button_is-active")?h:d)(r).then((function(r){t.classList.toggle("card__like-button_is-active"),e.textContent=r.likes.length})).catch((function(t){console.log(t)}))}function _(t,e,r,n,u,a){var i=e.querySelector(".card").cloneNode(!0),s=i.querySelector(".card__image"),l=i.querySelector(".card__title"),p=i.querySelector(".card__delete-button"),f=i.querySelector(".card__like-button"),d=i.querySelector(".card__like-count"),h=t._id;return s.src=t.link,s.alt=t.name,l.textContent=t.name,d.textContent=t.likes.length,t.likes.some((function(t){return t._id===a}))&&f.classList.add("card__like-button_is-active"),f.addEventListener("click",(function(){r(f,d,h)})),s.addEventListener("click",n),t.owner._id!==a?p.classList.add("card__delete-button-unactive"):p.addEventListener("click",(function(){o=h,c=p,u()})),i}function b(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",w),t.addEventListener("mousedown",S)}function g(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",w),t.removeEventListener("mousedown",S)}function S(t){t.target===t.currentTarget&&g(t.currentTarget)}function w(t){"Escape"===t.key&&g(document.querySelector(".popup_is-opened"))}var L={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},E=function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),o.classList.remove(n),o.textContent=""},q=function(t,e){t.disabled=!0,t.classList.add(e)},x=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r)):q(e,r)},k=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);q(n,e.inactiveButtonClass),r.forEach((function(r){E(t,r,e.inputErrorClass,e.errorClass),r.setCustomValidity("")}))};function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var O=document.querySelector("#card-template").content,j=document.querySelector(".places__list"),A=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"},P=document.querySelector(".popup_type_edit"),T=document.querySelector(".profile__edit-button"),N=P.querySelector(".popup__close"),I=document.querySelector('form[name="edit-profile"]'),U=I.querySelector(".popup__input_type_name"),B=I.querySelector(".popup__input_type_description"),G=document.querySelector(".profile__title"),D=document.querySelector(".profile__description"),F=P.querySelector(".popup__button");T.addEventListener("click",(function(){b(P),U.value=G.textContent,B.value=D.textContent,k(I,L)})),N.addEventListener("click",(function(){g(P)})),I.addEventListener("submit",(function(t){t.preventDefault();var e=U.value,r=B.value;A(!0,P.querySelector(".popup__button")),F.disabled=!0,p(e,r).then((function(t){G.textContent=t.name,D.textContent=t.about,g(P)})).catch((function(t){console.log(t)})).finally((function(){A(!1,P.querySelector(".popup__button"))}))}));var M=document.querySelector(".popup_type_new-card"),J=document.querySelector(".profile__add-button"),V=M.querySelector(".popup__close"),H=document.querySelector('form[name="new-place"]'),Y=H.querySelector(".popup__input_type_card-name"),z=H.querySelector(".popup__input_type_url"),$=M.querySelector(".popup__button");J.addEventListener("click",(function(){b(M),H.reset(),k(H,L)})),V.addEventListener("click",(function(){g(M)})),H.addEventListener("submit",(function(t){t.preventDefault();var e=Y.value,r=z.value;A(!0,H.querySelector(".popup__button")),$.disabled=!0,f(e,r).then((function(t){var e=_(t,O,m,X,lt,ut);j.prepend(e),g(M)})).catch((function(t){console.log(t)})).finally((function(){H.reset(),A(!1,H.querySelector(".popup__button"))}))}));var K=document.querySelector(".popup_type_image"),Q=K.querySelector(".popup__close"),R=K.querySelector(".popup__image"),W=K.querySelector(".popup__caption");function X(t){b(K),R.setAttribute("src",t.target.src),R.setAttribute("alt",t.target.alt),W.textContent=t.target.alt}Q.addEventListener("click",(function(){g(K)}));var Z=document.querySelector(".profile__image_cover"),tt=document.querySelector(".profile__image"),et=document.querySelector(".popup_type_avatar"),rt=et.querySelector(".popup__close"),nt=document.forms.avatar_edit,ot=nt.querySelector(".popup__input_type_url"),ct=et.querySelector(".popup__button");Z.addEventListener("click",(function(){b(et),nt.reset(),k(nt,L)})),rt.addEventListener("click",(function(){g(et)})),nt.addEventListener("submit",(function(t){t.preventDefault();var e=ot.value;tt.style.backgroundImage=e,A(!0,et.querySelector(".popup__button")),ct.disabled=!0,v(e).then((function(t){tt.style.backgroundImage="url('".concat(t.avatar,"')"),g(et)})).catch((function(t){console.log(t)})).finally((function(){nt.reset(),A(!1,nt.querySelector(".popup__button"))}))}));var ut,at=document.querySelector(".popup_type_delete"),it=at.querySelector(".popup__close"),st=document.querySelector('form[name="delete-card"'),lt=function(){b(at)},pt=function(){g(at)};it.addEventListener("click",pt),st.addEventListener("submit",(function(t){var e,r,n;t.preventDefault(),r=(e={cardId:o,deleteButton:c}).cardId,n=e.deleteButton,y(r).then((function(){n.closest(".places__item").remove(),pt()})).catch((function(t){console.log(t)}))})),l(),Promise.all([i(),s()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c,u,a=[],i=!0,s=!1;try{if(c=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(a.push(n.value),a.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];G.textContent=o.name,D.textContent=o.about,ut=o._id,tt.style.backgroundImage="url(".concat(o.avatar,")"),function(t,e){t.forEach((function(t){!function(t,e,r,n,o,c,u,a){var i=n(t,r,o,c,u,a);e.append(i)}(t,j,O,_,m,X,lt,e)}))}(c,ut)})).catch((function(t){console.log(t)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e,r,n,o,c){var u=Array.from(t.querySelectorAll(e)),a=t.querySelector(o);x(u,a,c),u.forEach((function(e){e.addEventListener("input",(function(){!function(t,e,r,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?E(t,e,r,n):function(t,e,r,n,o){var c=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n),c.textContent=r,c.classList.add(o)}(t,e,e.validationMessage,r,n)}(t,e,r,n),x(u,a,c)}))}))}(e,t.inputSelector,t.inputErrorClass,t.errorClass,t.submitButtonSelector,t.inactiveButtonClass)}))}(L)})();