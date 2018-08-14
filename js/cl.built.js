/**
 * uri-component-library
 * 
 * --scripts--
 * 
 * @version v3.0.0
 * @author Brandon Fuller <bjcfuller@uri.edu>
 * @author John Pennypacker <jpennypacker@uri.edu>
 * @license GPL-3.0
 * @see https://www.uri.edu/styleguide
 */

var CLResizeSuperheroes,CLCreateYouTubePlayers;function onYouTubePlayerAPIReady(){CLCreateYouTubePlayers()}!function(){"use strict";window.addEventListener("load",function(){(function(){var e,t;for(e=document.querySelectorAll(".cl-hero .animate.shift"),t=0;t<e.length;t++)e[t].style.backgroundPositionX="100%",e[t].style.backgroundPositionY=0})(),function(){var e,r,t,i;(e=document.getElementById("hero"))&&(r=e.querySelector(".overlay"),t=window.pageYOffset,i=r.getBoundingClientRect().top+t,50,n(),window.addEventListener("scroll",function(){n()}));function n(){var e=window.pageYOffset,t=r.offsetHeight+i,n=Math.min(e/t*50,50);r.style.webkitBackdropFilter="blur("+n+"px)"}}(),n=document.querySelectorAll(".cl-hero .poster"),window.addEventListener("resize",function(){var e,t=window.innerWidth;if(t<750)for(e=0;e<n.length;e++)n[e].classList.remove("unveil");else for(e=0;e<n.length;e++)n[e].classList.add("unveil")}),function(){var a,o,s,e,l=[];for(a=document.querySelectorAll(".cl-hero.super"),o=a.length,s=0;s<o;s++)(e=document.createElement("div")).className="prompter",e.innerHTML="Scroll down",a[s].appendChild(e),l.push({el:a[s],offset:a[s].getBoundingClientRect().top,prompt:e});CLResizeSuperheroes=function(e){var t,n,r,i;for(t=window.innerHeight,n=window.innerWidth,r=window.pageYOffset,s=0;s<o;s++)!1!==e&&(l[s].offset=a[s].getBoundingClientRect().top),i=(l[s].offset+r)/t,t<.75*n&&t<675||.3<i?(l[s].el.style.height=Math.max(.9*t,500)+"px",l[s].prompt.style.display="none"):(l[s].el.style.height=98-100*i+"vh",l[s].offset<t?l[s].prompt.style.display="block":l[s].prompt.style.display="none")},window.dispatchEvent(new Event("scroll")),CLResizeSuperheroes(!1),window.addEventListener("resize",CLResizeSuperheroes.bind(null,!1),!1)}();var n},!1)}(),function(){"use strict";var i="reveal";function l(e,t,n){e.addEventListener("click",function(e){e.preventDefault(),function(e,t){var n,r;for(n=t.classList.contains(i),r=0;r<e.length;r++)e[r].classList.remove(i);n||t.classList.add(i)}(t,n)})}window.addEventListener("load",function(){var e,t,n,r,i,a,o,s;for(e=document.querySelectorAll(".cl-menu"),i=0;i<e.length;i++)(t=document.createElement("span")).className="cl-menu-toggle","0"===e[i].getAttribute("data-show-title")&&t.classList.add("hidden"),t.innerHTML=e[i].getAttribute("data-name"),t.addEventListener("click",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}),(n=e[i].querySelector(".cl-menu-list")).classList.remove("cl-menu-list-no-js"),e[i].insertBefore(t,n),e[i].classList.add(".cl-menu-js");for(r=document.querySelectorAll(".cl-menu-list ul"),i=0;i<r.length;i++)(o=document.createElement("span")).className="cl-menu-arrow",r[i].parentNode.append(o),a=r[i].parentNode.querySelector("a"),(s=document.createElement("li")).appendChild(a.cloneNode(!0)),r[i].insertBefore(s,r[i].firstChild),a.classList.add("cl-menu-trigger"),l(a,r,r[i])},!1)}(),function(){"use strict";function n(e){var t,n;for(t=0;t<e.length;t++)if((n={}).el=e[t],n.num=n.el.querySelector("span"),n.w=n.num.clientWidth,n.fs=window.getComputedStyle(n.num).getPropertyValue("font-size"),n.sw=n.num.scrollWidth,n.mfs=n.el.getAttribute("data-font-max"),n.nfs=n.fs.match(/\d+/)[0],n.sw>n.w)for(n.num.classList.add("autosized");n.sw>n.w;)n.nfs--,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth;else if(n.num.classList.contains("autosized"))for(;n.sw===n.w&&n.nfs<n.mfs;)n.nfs++,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth}window.addEventListener("load",function(){var e,t;if(0<(e=document.querySelectorAll(".cl-metric")).length){for(t=0;t<e.length;t++)e[t].setAttribute("data-font-max",window.getComputedStyle(e[t].querySelector("span")).getPropertyValue("font-size").match(/\d+/)[0]);n(e),window.addEventListener("resize",n.bind(null,e))}},!1)}(),function(){"use strict";function r(e,t){var n;(n=t.querySelector(".cl-overlay-block")).classList.contains("hidden")?(n.classList.remove("hidden"),t.style.height="auto",e.title="Hide story"):(t.style.height=t.offsetHeight+"px",n.classList.add("hidden"),e.title="Show story")}window.addEventListener("load",function(){var e,t,n;for(e=document.querySelectorAll(".cl-overlay"),t=0;t<e.length;t++)(n=document.createElement("div")).className="cl-overlay-slider",n.innerHTML='<div class="cl-overlay-prompter"></div>',n.title="Hide story",n.addEventListener("click",r.bind(null,n,e[t]),!1),e[t].querySelector(".cl-overlay-block").appendChild(n)},!1)}(),function(){"use strict";function n(e){var t,n,r,i,a=[];for(t=e.querySelectorAll("figure"),n=0;n<t.length;n++)(r={}).img=t[n].querySelector("img"),(i=t[n].querySelector("figcaption"))&&(r.caption=i.innerHTML),a.push(r);!function(e,t){var n,r,i,a,o,s,l,d;for((n=document.createElement("div")).className="cl-slideshow",(r=document.createElement("div")).className="carousel-wrapper",n.appendChild(r),(i=document.createElement("ul")).className="carousel transitions",r.appendChild(i),(a=document.createElement("ul")).className="captions",n.appendChild(a),(o=document.createElement("div")).className="counter",o.innerHTML="<span></span> of "+t.length,n.appendChild(o),d=0;d<t.length;d++)(s=document.createElement("li")).className="slide",s.appendChild(t[d].img),i.appendChild(s),(l=document.createElement("li")).className="caption",l.innerHTML=t[d].caption?t[d].caption:"",a.appendChild(l);r.appendChild(function(e){var t,n,r,i,a;for(a in(t=document.createElement("div")).className="controls",n=["Previous","Next"])(r=document.createElement("div")).className="target "+n[a].toLowerCase(),r.title=n[a],r.addEventListener("click",c.bind(null,e,n[a],!1)),(i=document.createElement("div")).className="controller",r.appendChild(i),t.appendChild(r);return o=t,s=e,!(d=l=0)===function(){return"ontouchstart"in window||navigator.maxTouchPoints}&&o.classList.add("touch"),o.addEventListener("touchstart",function(e){var t;s.classList.remove("transitions"),t=e.changedTouches[0],l=parseInt(t.clientX),e.preventDefault()},!1),o.addEventListener("touchmove",function(e){var t,n,r,i;t=e.changedTouches[0],n=parseInt(t.clientX)-l-d,d=parseInt(t.clientX)-l,r=n<0?-1:1,i=s.style.transform.replace("translateX(","").replace("%)",""),s.style.transform="translateX("+(parseInt(i)+r)+"%)",e.preventDefault()},!1),o.addEventListener("touchend",function(e){var t;s.classList.add("transitions"),.25*(t=s.offsetWidth)<d?c(s,"Previous",!0):d<-.25*t?c(s,"Next",!0):u(s,parseInt(s.getAttribute("data-position"))),e.preventDefault()},!1),t;var o,s,l,d}(i)),u(i,0),e.parentNode.replaceChild(n,e)}(e,a)}function c(e,t,n){var r,i;if(r=e.getAttribute("data-position"),i=e.children.length-1,e.classList.remove("reboundLeft","reboundRight"),"Next"===t){if(i<++r){if(!n)return e.offsetWidth,void e.classList.add("reboundRight");r--}}else if(--r<0){if(!n)return e.offsetWidth,void e.classList.add("reboundLeft");r++}u(e,r)}function u(e,t){var n,r;e.style.transform="translateX(-"+100*t+"%)",e.setAttribute("data-position",t),(r=(n=e.parentNode.parentNode).querySelector(".captions .active"))&&r.classList.remove("active"),n.querySelectorAll(".caption")[t].classList.add("active"),n.querySelector(".counter span").innerHTML=t+1}window.addEventListener("load",function(){var e,t;for(e=document.querySelectorAll(".gallery.gallery-size-full"),t=0;t<e.length;t++)n(e[t])},!1)}(),function(){"use strict";function n(e,t){var n,r,i,a,o,s,l,d,c=0;for(e.classList.add("cl-tabs-js"),o=e.querySelectorAll(".cl-tab"),(a=document.createElement("ul")).setAttribute("role","tablist"),d=0;d<o.length;d++)c++,n=(n=o[d].querySelector("h1"))?n.innerHTML:(n=o[d].querySelector("h2"))?n.innerHTML:"Section "+c,""===(r=o[d].id)&&(r="cl-tabs-"+t+"-tab-section-"+c,o[d].id=r),(s=document.createElement("li")).setAttribute("role","presentation"),(l=document.createElement("a")).href="#"+r,l.id="cl-tabs-"+t+"-tab-"+c,l.setAttribute("role","tab"),l.setAttribute("tabindex","-1"),l.innerHTML=n,s.appendChild(l),a.appendChild(s);for(e.insertBefore(a,o[0]),i=a.querySelectorAll("a"),d=0;d<i.length;d++)i[d].addEventListener("click",function(e){u(e,i,a,o)}),i[d].addEventListener("keydown",function(e){f(e,i,o)});for(d=0;d<o.length;d++)o[d].setAttribute("role","tabpanel"),o[d].setAttribute("tabindex","-1"),o[d].setAttribute("aria-labelledby",i[d].id),o[d].hidden=!0;i[0].removeAttribute("tabindex"),i[0].setAttribute("aria-selected","true"),o[0].hidden=!1}function u(e,t,n,r){var i;e.preventDefault(),i=n.querySelector("[aria-selected]"),e.currentTarget!==i&&a(t,r,i,e.currentTarget)}function f(e,t,n){var r=Array.prototype.indexOf.call(t,e.currentTarget),i=37===e.which?r-1:39===e.which?r+1:40===e.which?"down":null;null!==i&&(e.preventDefault(),"down"===i?n[r].focus():t[i]&&a(t,n,e.currentTarget,t[i]))}function a(e,t,n,r){var i;r.focus(),r.removeAttribute("tabindex"),r.setAttribute("aria-selected","true"),n.removeAttribute("aria-selected"),n.setAttribute("tabindex","-1"),i=Array.prototype.indexOf.call(e,r),t[Array.prototype.indexOf.call(e,n)].hidden=!0,t[i].hidden=!1}window.addEventListener("load",function(){var e,t;for(e=document.querySelectorAll(".cl-tabs"),t=0;t<e.length;t++)n(e[t],t+1)},!1)}(),function(){"use strict";window.addEventListener("load",function(){var e,t;e=document.querySelectorAll(".cl-wave"),t=window.pageYOffset,window.addEventListener("scroll",function(){!function(e,t){var n,r,i,a;for(n=window.pageYOffset,r=n-t,i=0;i<e.length;i++)(a=e[i]).firstElementChild.style.backgroundPositionX=r+"px",a.lastElementChild.style.backgroundPositionX=r+"px"}(e,t)})},!1)}(),function(){"use strict";var h={},m={};function a(e,t){var n=t.offsetWidth,r=t.offsetHeight;16/9<n/r?(e.style.height=9*n/16+"px",e.style.width="100%",e.style.left=0,e.style.top=(r-9*n/16)/2+"px",e.style.marginLeft=0):(n=16*r/9,e.style.height="100%",e.style.width=n+"px",e.style.left=0-n/2+"px",e.style.top=0,e.style.marginLeft="50%")}function i(e,t,n){t.style.height=n.offsetWidth/m[e].aspect+"px"}function o(e,t){var n=window.innerHeight,r=window.pageYOffset,i=t.offsetHeight,a=t.getBoundingClientRect().top+r;n+r<a||a+i<r?e.target.pauseVideo():e.target.playVideo()}function n(e){var t,n,r,i;e.target.mute(),t=e.target.getIframe(),n=h[e.target.a.id].parent,window.addEventListener("resize",function(){a(t,n)}),a(t,n),window.addEventListener("scroll",function(){n.classList.contains("paused")||o(e,n)}),o(e,n),r=n.querySelector(".overlay"),(i=document.createElement("div")).className="motionswitch",i.title="Pause",i.addEventListener("click",function(){!function(e,t,n){switch(e.target.getPlayerState()){default:case 1:e.target.pauseVideo(),t.classList.add("paused"),n.setAttribute("title","Play");break;case 2:e.target.playVideo(),t.classList.remove("paused"),n.setAttribute("title","Pause")}}(e,n,this)}),r.appendChild(i)}function r(e){var t=e.target.getIframe(),n=e.target.a.id,r=m[n].parent;window.addEventListener("resize",function(){i(n,t,r)}),i(n,t,r)}function s(e){switch(e.target.getPlayerState()){case 0:e.target.playVideo();break;case-1:case 1:750<window.innerWidth&&h[e.target.a.id].poster.classList.add("unveil")}}function l(e){h[e.target.a.id].poster.classList.remove("unveil"),h[e.target.a.id].parent.querySelector(".motionswitch").style.display="none"}function d(e){var t,n,r,i,a;t=m[e.target.a.id],(n=document.createElement("a")).href="http://www.youtube.com/watch?v="+t.ytid,n.title="Try watching this video on YouTube",(r=document.createElement("img")).src=t.poster.getAttribute("src"),(i=t.poster.getAttribute("alt"))||(i="Poster for video"),r.alt=i,n.appendChild(r),(a=document.getElementById(e.target.a.id))&&t.parent.replaceChild(n,a)}function c(e){var t=e.target.getPlayerState(),n=e.target.a.id,r=m[n].parent.querySelector(".overlay");switch(t){case 1:case 3:r.classList.add("hidden");break;default:r.classList.remove("hidden")}}window.addEventListener("load",function(){var e,t,n,r,i,a,o,s,l=!1,d=function(){var e=!0,t=navigator.userAgent,n=t.indexOf("MSIE "),r=t.indexOf("Trident/");("Microsoft Internet Explorer"===navigator.appName||0<n||0<r)&&(e=!1);return e}(),c=document.querySelectorAll(".cl-hero .poster"),u=document.querySelectorAll(".cl-video img");if(d)for(r=0;r<c.length;r++)e=c[r],t=e.getAttribute("id"),n=e.parentNode,i=e.getAttribute("data-start"),a=e.getAttribute("data-end"),h[t]={poster:e,parent:n,ytid:e.getAttribute("data-id"),w:n.offsetWidth,h:n.offsetHeight,start:i||0,end:a||-1},e.removeAttribute("id"),(o=document.createElement("div")).id=t,n.appendChild(o),l=!0;for(r=0;r<u.length;r++)e=u[r],t=e.getAttribute("id"),s=16/9,e.getAttribute("data-aspect")&&(s=(s=e.getAttribute("data-aspect").split(":"))[0]/s[1]),m[t]={poster:e,ytid:e.getAttribute("data-id"),parent:e.parentNode,aspect:s},l=!0;l&&((f=document.createElement("script")).src="https://www.youtube.com/player_api",(p=document.getElementsByTagName("script")[0]).parentNode.insertBefore(f,p));var f,p},!1),CLCreateYouTubePlayers=function(){var e,t;for(e in h)(t=h[e]).player=new YT.Player(e,{width:t.w,height:t.h,videoId:t.ytid,playerVars:{autoplay:1,controls:0,showinfo:0,start:t.start,end:t.end,modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:n,onStateChange:s,onError:l}});for(e in m)(t=m[e]).player=new YT.Player(e,{videoId:t.ytid,playerVars:{autoplay:0,controls:1,showinfo:0,color:"white",modestbranding:1,iv_load_policy:3},events:{onReady:r,onStateChange:c,onError:d}})}}();