/**
 * uri-component-library
 * 
 * --scripts--
 * 
 * @version v2.3.0
 * @author Brandon Fuller <bjcfuller@uri.edu>
 * @license GPL-3.0
 * @see http://uriweb.github.io
 */

function onYouTubePlayerAPIReady(){CLCreateYouTubePlayers()}var CLResizeSuperheroes;!function(){"use strict";function e(){t(),n(),r(),i()}function t(){var e,t;for(e=document.querySelectorAll(".cl-hero .animate.shift"),t=0;t<e.length;t++)e[t].style.backgroundPositionX="100%",e[t].style.backgroundPositionY=0}function n(){function e(){var e=window.pageYOffset,t=n.offsetHeight+i,r=Math.min(e/t*a,a);n.style.webkitBackdropFilter="blur("+r+"px)"}var t,n,r,i,a;(t=document.getElementById("hero"))&&(n=t.querySelector(".overlay"),r=window.pageYOffset,i=n.getBoundingClientRect().top+r,a=50,e(),window.addEventListener("scroll",function(){e()}))}function r(){var e=document.querySelectorAll(".cl-hero .poster");window.addEventListener("resize",function(){var t;if(window.innerWidth<750)for(t=0;t<e.length;t++)e[t].classList.remove("unveil");else for(t=0;t<e.length;t++)e[t].classList.add("unveil")})}function i(){var e,t,n,r,i=[];for(e=document.querySelectorAll(".cl-hero.super"),t=e.length,n=0;n<t;n++)r=document.createElement("div"),r.className="prompter",r.innerHTML="Scroll down",e[n].appendChild(r),i.push({el:e[n],offset:e[n].getBoundingClientRect().top,prompt:r});CLResizeSuperheroes=function(r){var a,o,s,l;for(a=window.innerHeight,o=window.innerWidth,s=window.pageYOffset,n=0;n<t;n++)!1!==r&&(i[n].offset=e[n].getBoundingClientRect().top),l=(i[n].offset+s)/a,a<.75*o&&a<675||l>.3?(i[n].el.style.height=Math.max(.9*a,500)+"px",i[n].prompt.style.display="none"):(i[n].el.style.height=98-100*l+"vh",i[n].offset<a?i[n].prompt.style.display="block":i[n].prompt.style.display="none")},window.dispatchEvent(new Event("scroll")),CLResizeSuperheroes(!1),window.addEventListener("resize",CLResizeSuperheroes.bind(null,!1),!1)}window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e,n,r,i,a,o,s;for(e=document.querySelectorAll(".cl-menu"),i=0;i<e.length;i++)n=document.createElement("span"),n.className="cl-menu-toggle","0"==e[i].getAttribute("data-show-title")&&n.classList.add("hidden"),n.innerHTML=e[i].getAttribute("data-name"),n.addEventListener("click",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}),e[i].insertBefore(n,e[i].querySelector(".cl-menu-list")),e[i].classList.add(".cl-menu-js");for(r=document.querySelectorAll(".cl-menu-list ul"),i=0;i<r.length;i++)o=document.createElement("span"),o.className="cl-menu-arrow",r[i].parentNode.append(o),a=r[i].parentNode.querySelector("a"),s=document.createElement("li"),s.appendChild(a.cloneNode(!0)),r[i].insertBefore(s,r[i].firstChild),a.classList.add("cl-menu-trigger"),t(a,r,r[i])}function t(e,t,r){e.addEventListener("click",function(e){e.preventDefault(),n(t,r)})}function n(e,t){var n,i;for(n=t.classList.contains(r),i=0;i<e.length;i++)e[i].classList.remove(r);n||t.classList.add(r)}var r="reveal";window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e,n;if(e=document.querySelectorAll(".cl-metric"),e.length>0){for(n=0;n<e.length;n++)e[n].setAttribute("data-font-max",window.getComputedStyle(e[n].querySelector("span")).getPropertyValue("font-size").match(/\d+/)[0]);t(e),window.addEventListener("resize",t.bind(null,e))}}function t(e){var t,n;for(t=0;t<e.length;t++)if(n={},n.el=e[t],n.num=n.el.querySelector("span"),n.w=n.num.clientWidth,n.fs=window.getComputedStyle(n.num).getPropertyValue("font-size"),n.sw=n.num.scrollWidth,n.mfs=n.el.getAttribute("data-font-max"),n.nfs=n.fs.match(/\d+/)[0],n.sw>n.w)for(n.num.classList.add("autosized");n.sw>n.w;)n.nfs--,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth;else if(n.num.classList.contains("autosized"))for(;n.sw==n.w&&n.nfs<n.mfs;)n.nfs++,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth}window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e,n;for(e=document.querySelectorAll(".gallery.gallery-size-full"),n=0;n<e.length;n++)t(e[n])}function t(e){var t,r,i,a,o=[];for(t=e.querySelectorAll("figure"),r=0;r<t.length;r++)i={},i.img=t[r].querySelector("img"),a=t[r].querySelector("figcaption"),a&&(i.caption=a.innerHTML),o.push(i);n(e,o)}function n(e,t){var n,i,o,s,l,d,c,u;for(n=document.createElement("div"),n.className="cl-slideshow",i=document.createElement("div"),i.className="carousel-wrapper",n.appendChild(i),o=document.createElement("ul"),o.className="carousel transitions",i.appendChild(o),s=document.createElement("ul"),s.className="captions",n.appendChild(s),l=document.createElement("div"),l.className="counter",l.innerHTML="<span></span> of "+t.length,n.appendChild(l),u=0;u<t.length;u++)d=document.createElement("li"),d.className="slide",d.appendChild(t[u].img),o.appendChild(d),c=document.createElement("li"),c.className="caption",c.innerHTML=t[u].caption?t[u].caption:"",s.appendChild(c);i.appendChild(r(o)),a(o,0),e.parentNode.replaceChild(n,e)}function r(e){var t,n,r,a,o;t=document.createElement("div"),t.className="controls",n=["Previous","Next"];for(o in n)r=document.createElement("div"),r.className="target "+n[o].toLowerCase(),r.title=n[o],r.addEventListener("click",i.bind(null,e,n[o],!1)),a=document.createElement("div"),a.className="controller",r.appendChild(a),t.appendChild(r);return s(t,e),t}function i(e,t,n){var r,i;if(r=e.getAttribute("data-position"),i=e.children.length-1,e.classList.remove("reboundLeft","reboundRight"),"Next"==t){if(++r>i){if(!n)return e.offsetWidth,void e.classList.add("reboundRight");r--}}else if(--r<0){if(!n)return e.offsetWidth,void e.classList.add("reboundLeft");r++}a(e,r)}function a(e,t){var n,r,i,a;e.style.transform="translateX(-"+100*t+"%)",e.setAttribute("data-position",t),n=e.parentNode.parentNode,r=n.querySelector(".captions .active"),r&&r.classList.remove("active"),i=n.querySelectorAll(".caption"),i[t].classList.add("active"),a=n.querySelector(".counter span"),a.innerHTML=t+1}function o(){return"ontouchstart"in window||navigator.maxTouchPoints}function s(e,t){var n,r;n=0,r=0,!0===o&&e.classList.add("touch"),e.addEventListener("touchstart",function(e){var r;t.classList.remove("transitions"),r=e.changedTouches[0],n=parseInt(r.clientX),e.preventDefault()},!1),e.addEventListener("touchmove",function(e){var i,a,o,s;i=e.changedTouches[0],a=parseInt(i.clientX)-n-r,r=parseInt(i.clientX)-n,o=a<0?-1:1,s=t.style.transform.replace("translateX(","").replace("%)",""),t.style.transform="translateX("+(parseInt(s)+o)+"%)",e.preventDefault()},!1),e.addEventListener("touchend",function(e){var n,o;t.classList.add("transitions"),n=t.offsetWidth,parseInt(t.getAttribute("data-position")),o=.25,r>n*o?i(t,"Previous",!0):r<n*-o?i(t,"Next",!0):a(t,parseInt(t.getAttribute("data-position"))),e.preventDefault()},!1)}window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e,n;for(e=document.querySelectorAll(".cl-tabs"),n=0;n<e.length;n++)t(e[n])}function t(e){var t,i,a,c,u;for(e.classList.add("cl-tabs-js"),s=e.querySelectorAll("section"),o=document.createElement("ul"),o.setAttribute("role","tablist"),u=0;u<s.length;u++)d++,t=s[u].querySelector("h1"),t?t=t.innerHTML:(t=s[u].querySelector("h2"),t=t?t.innerHTML:"Section "+d),i=s[u].id,""===i&&(i="cl-tab-section-"+d,s[u].id=i),a=document.createElement("li"),a.setAttribute("role","presentation"),c=document.createElement("a"),c.href="#"+i,c.id="cl-tabs-tab-"+d,c.setAttribute("role","tab"),c.setAttribute("tabindex","-1"),c.innerHTML=t,a.appendChild(c),o.appendChild(a);for(e.insertBefore(o,s[0]),l=o.querySelectorAll("a"),u=0;u<l.length;u++)l[u].addEventListener("click",n),l[u].addEventListener("keydown",r);for(u=0;u<s.length;u++)s[u].setAttribute("role","tabpanel"),s[u].setAttribute("tabindex","-1"),s[u].getAttribute("id"),s[u].setAttribute("aria-labelledby",l[u].id),s[u].hidden=!0;l[0].removeAttribute("tabindex"),l[0].setAttribute("aria-selected","true"),s[0].hidden=!1}function n(e){var t;e.preventDefault(),t=o.querySelector("[aria-selected]"),e.currentTarget!==t&&a(t,e.currentTarget)}function r(e){var t=Array.prototype.indexOf.call(l,e.currentTarget),n=37===e.which?t-1:39===e.which?t+1:40===e.which?"down":null;null!==n&&(e.preventDefault(),"down"===n?s[i].focus():l[n]&&a(e.currentTarget,l[n]))}function a(e,t){var n,r;t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),e.removeAttribute("aria-selected"),e.setAttribute("tabindex","-1"),n=Array.prototype.indexOf.call(l,t),r=Array.prototype.indexOf.call(l,e),s[r].hidden=!0,s[n].hidden=!1}var o,s,l,d=0;window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e,n;e=document.querySelectorAll(".cl-wave"),n=window.pageYOffset,window.addEventListener("scroll",function(){t(e,n)})}function t(e,t){var n,r,i,a,o;for(n=window.pageYOffset,r=n-t,a=0;a<e.length;a++)o=e[a],i=o.firstElementChild.style.backgroundPositionX.split("px")[0],i+=r,o.firstElementChild.style.backgroundPositionX=r+"px",o.lastElementChild.style.backgroundPositionX=r+"px"}window.addEventListener("load",e,!1)}();var CLCreateYouTubePlayers;!function(){"use strict";function e(){var e,r,i,a,o,s,l,d,c=!1,u=t(),f=document.querySelectorAll(".cl-hero .poster"),m=document.querySelectorAll(".cl-video img");if(u)for(a=0;a<f.length;a++)e=f[a],r=e.getAttribute("id"),i=e.parentNode,o=e.getAttribute("data-start"),s=e.getAttribute("data-end"),p[r]={poster:e,parent:i,ytid:e.getAttribute("data-id"),w:i.offsetWidth,h:i.offsetHeight,start:o||0,end:s||-1},e.removeAttribute("id"),l=document.createElement("div"),l.id=r,i.appendChild(l),c=!0;for(a=0;a<m.length;a++)e=m[a],r=e.getAttribute("id"),d=16/9,e.getAttribute("data-aspect")&&(d=e.getAttribute("data-aspect").split(":"),d=d[0]/d[1]),h[r]={poster:e,ytid:e.getAttribute("data-id"),parent:e.parentNode,aspect:d},c=!0;c&&n()}function t(){var e=!0,t=navigator.userAgent,n=t.indexOf("MSIE "),r=t.indexOf("Trident/");return("Microsoft Internet Explorer"==navigator.appName||n>0||r>0)&&(e=!1),e}function n(){var e,t;e=document.createElement("script"),e.src="https://www.youtube.com/player_api",t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(e,t)}function r(e,t){var n=t.offsetWidth,r=t.offsetHeight;n/r>16/9?(e.style.height=9*n/16+"px",e.style.width="100%",e.style.left=0,e.style.top=(r-9*n/16)/2+"px",e.style.marginLeft=0):(n=16*r/9,e.style.height="100%",e.style.width=n+"px",e.style.left=0-n/2+"px",e.style.top=0,e.style.marginLeft="50%")}function i(e,t,n){t.style.height=n.offsetWidth/h[e].aspect+"px"}function a(e,t){var n=window.innerHeight,r=window.pageYOffset,i=t.offsetHeight,a=t.getBoundingClientRect().top+r;n+r<a||r>a+i?e.target.pauseVideo():e.target.playVideo()}function o(e){var t,n,i,o;e.target.mute(),t=e.target.getIframe(),n=p[e.target.a.id].parent,window.addEventListener("resize",function(){r(t,n)}),r(t,n),window.addEventListener("scroll",function(){n.classList.contains("paused")||a(e,n)}),a(e,n),i=n.querySelector(".overlay"),o=document.createElement("div"),o.className="motionswitch",o.title="Pause",o.addEventListener("click",function(){l(e,n,this)}),i.appendChild(o)}function s(e){var t=e.target.getIframe(),n=e.target.a.id,r=h[n].parent;window.addEventListener("resize",function(){i(n,t,r)}),i(n,t,r)}function l(e,t,n){switch(e.target.getPlayerState()){default:case 1:e.target.pauseVideo(),t.classList.add("paused"),n.setAttribute("title","Play");break;case 2:e.target.playVideo(),t.classList.remove("paused"),n.setAttribute("title","Pause")}}function d(e){switch(e.target.getPlayerState()){case 0:e.target.playVideo();break;case-1:case 1:window.innerWidth>750&&p[e.target.a.id].poster.classList.add("unveil")}}function c(e){p[e.target.a.id].poster.classList.remove("unveil"),p[e.target.a.id].parent.querySelector(".motionswitch").style.display="none"}function u(e){var t,n,r,i,a;t=h[e.target.a.id],n=document.createElement("a"),n.href="http://www.youtube.com/watch?v="+t.ytid,n.title="Try watching this video on YouTube",r=document.createElement("img"),r.src=t.poster.getAttribute("src"),i=t.poster.getAttribute("alt"),i||(i="Poster for video"),r.alt=i,n.appendChild(r),(a=document.getElementById(e.target.a.id))&&t.parent.replaceChild(n,a)}function f(e){var t=e.target.getPlayerState(),n=e.target.a.id,r=h[n].parent.querySelector(".overlay");switch(t){case 1:case 3:r.classList.add("hidden");break;default:r.classList.remove("hidden")}}var p={},h={};window.addEventListener("load",e,!1),CLCreateYouTubePlayers=function(){var e,t;for(e in p)t=p[e],t.player=new YT.Player(e,{width:t.w,height:t.h,videoId:t.ytid,playerVars:{autoplay:1,controls:0,showinfo:0,start:t.start,end:t.end,modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:o,onStateChange:d,onError:c}});for(e in h)t=h[e],t.player=new YT.Player(e,{videoId:t.ytid,playerVars:{autoplay:0,controls:1,showinfo:0,color:"white",modestbranding:1,iv_load_policy:3},events:{onReady:s,onStateChange:f,onError:u}})}}();