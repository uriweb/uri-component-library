/**
 * uri-component-library
 * 
 * --scripts--
 * 
 * @version v3.5.1
 * @author Brandon Fuller <bjcfuller@uri.edu>
 * @author John Pennypacker <jpennypacker@uri.edu>
 * @license GPL-3.0
 * @see https://www.uri.edu/styleguide
 */

class URICL{static checkSupport(){var e=!0,t=navigator.userAgent,n=t.indexOf("MSIE "),r=t.indexOf("Trident/");return("Microsoft Internet Explorer"===navigator.appName||n>0||r>0)&&(e=!1),e}}var CLResizeSuperheroes,CLCreateYouTubePlayers;function onYouTubePlayerAPIReady(){CLCreateYouTubePlayers()}!function(){"use strict";window.addEventListener("load",function(){(function(){var e,t;for(e=document.querySelectorAll(".cl-hero .animate.shift"),t=0;t<e.length;t++)e[t].style.backgroundPositionX="100%",e[t].style.backgroundPositionY=0})(),function(){var e,t,n,r,i;(e=document.getElementById("hero"))&&(t=e.querySelector(".overlay"),n=window.pageYOffset,r=t.getBoundingClientRect().top+n,i=50,a(),window.addEventListener("scroll",function(){a()}));function a(){var e=window.pageYOffset,n=t.offsetHeight+r,a=Math.min(e/n*i,i);t.style.webkitBackdropFilter="blur("+a+"px)"}}(),URICL.checkSupport()&&(e=document.querySelectorAll(".cl-hero .poster"),window.addEventListener("resize",function(){var t,n=window.innerWidth;if(n<750)for(t=0;t<e.length;t++)e[t].classList.remove("unveil");else for(t=0;t<e.length;t++)e[t].classList.add("unveil")})),function(){var e,t,n,r=[];for(e=document.querySelectorAll(".cl-hero.super"),t=e.length,n=0;n<t;n++)r.push({el:e[n],offset:e[n].getBoundingClientRect().top});CLResizeSuperheroes=function(e){var n,i,a,o,l,s;for(n=window.innerHeight,i=window.innerWidth,a=window.pageYOffset,o=0;o<t;o++)l=r[o],!1!==e&&(l.offset=l.el.getBoundingClientRect().top),s=(l.offset+a)/n,l.el.style.height=n<.75*i&&n<675||s>.3?Math.max(.9*n,500)+"px":98-100*s+"vh"},window.dispatchEvent(new Event("scroll")),CLResizeSuperheroes(!1),window.addEventListener("resize",CLResizeSuperheroes.bind(null,!1),!1)}();var e},!1)}(),function(){"use strict";var e="reveal";function t(t,n,r){t.addEventListener("click",function(t){t.preventDefault(),function(t,n){var r,i;for(r=n.classList.contains(e),i=0;i<t.length;i++)t[i].classList.remove(e);r||n.classList.add(e)}(n,r)})}window.addEventListener("load",function(){var e,n,r,i,a,o,l,s;for(e=document.querySelectorAll(".cl-menu"),a=0;a<e.length;a++)(n=document.createElement("span")).className="cl-menu-toggle","0"===e[a].getAttribute("data-show-title")&&n.classList.add("hidden"),n.innerHTML=e[a].getAttribute("data-name"),n.addEventListener("click",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}),(r=e[a].querySelector(".cl-menu-list")).classList.remove("cl-menu-list-no-js"),e[a].insertBefore(n,r),e[a].classList.add(".cl-menu-js");for(i=document.querySelectorAll(".cl-menu-list ul"),a=0;a<i.length;a++)(l=document.createElement("span")).className="cl-menu-arrow",i[a].parentNode.append(l),o=i[a].parentNode.querySelector("a"),(s=document.createElement("li")).appendChild(o.cloneNode(!0)),i[a].insertBefore(s,i[a].firstChild),o.classList.add("cl-menu-trigger"),t(o,i,i[a])},!1)}(),function(){"use strict";function e(e){var t,n;for(t=0;t<e.length;t++)if((n={}).el=e[t],n.num=n.el.querySelector("span"),n.w=n.num.clientWidth,n.fs=window.getComputedStyle(n.num).getPropertyValue("font-size"),n.sw=n.num.scrollWidth,n.mfs=n.el.getAttribute("data-font-max"),n.nfs=n.fs.match(/\d+/)[0],n.sw>n.w)for(n.num.classList.add("autosized");n.sw>n.w;)n.nfs--,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth;else if(n.num.classList.contains("autosized"))for(;n.sw===n.w&&n.nfs<n.mfs;)n.nfs++,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth}window.addEventListener("load",function(){var t,n;if((t=document.querySelectorAll(".cl-metric")).length>0){for(n=0;n<t.length;n++)t[n].setAttribute("data-font-max",window.getComputedStyle(t[n].querySelector("span")).getPropertyValue("font-size").match(/\d+/)[0]);e(t),window.addEventListener("resize",e.bind(null,t))}},!1)}(),function(){"use strict";function e(e,t){var n;(n=t.querySelector(".cl-overlay-block")).classList.contains("hidden")?(n.classList.remove("hidden"),t.style.height="auto",e.title="Hide story"):(t.style.height=t.offsetHeight+"px",n.classList.add("hidden"),e.title="Show story")}window.addEventListener("load",function(){var t,n,r;for(t=document.querySelectorAll(".cl-overlay"),n=0;n<t.length;n++)(r=document.createElement("div")).className="cl-overlay-slider",r.innerHTML='<div class="cl-overlay-prompter"></div>',r.title="Hide story",r.addEventListener("click",e.bind(null,r,t[n]),!1),t[n].querySelector(".cl-overlay-block").appendChild(r)},!1)}(),function(){"use strict";function e(e){var r,i,a,o,l=[];for(r=e.querySelectorAll("figure"),i=0;i<r.length;i++)(a={}).img=r[i].querySelector("img"),(o=r[i].querySelector("figcaption"))&&(a.caption=o.innerHTML),l.push(a);!function(e,r){var i,a,o,l,s,d,c,u;for((i=document.createElement("div")).className="cl-slideshow",(a=document.createElement("div")).className="carousel-wrapper",i.appendChild(a),(o=document.createElement("ul")).className="carousel transitions",a.appendChild(o),(l=document.createElement("ul")).className="captions",i.appendChild(l),(s=document.createElement("div")).className="counter",s.innerHTML="<span></span> of "+r.length,i.appendChild(s),u=0;u<r.length;u++)(d=document.createElement("li")).className="slide",d.appendChild(r[u].img),o.appendChild(d),(c=document.createElement("li")).className="caption",c.innerHTML=r[u].caption?r[u].caption:"",l.appendChild(c);a.appendChild(function(e){var r,i,a,o,l;for(l in(r=document.createElement("div")).className="controls",i=["Previous","Next"])(a=document.createElement("div")).className="target "+i[l].toLowerCase(),a.title=i[l],a.addEventListener("click",t.bind(null,e,i[l],!1)),(o=document.createElement("div")).className="controller",a.appendChild(o),r.appendChild(a);return function(e,r){var i,a;i=0,a=0,!0===function(){return"ontouchstart"in window||navigator.maxTouchPoints}&&e.classList.add("touch"),e.addEventListener("touchstart",function(e){var t;r.classList.remove("transitions"),t=e.changedTouches[0],i=parseInt(t.clientX),e.preventDefault()},!1),e.addEventListener("touchmove",function(e){var t,n,o,l;t=e.changedTouches[0],n=parseInt(t.clientX)-i-a,a=parseInt(t.clientX)-i,o=n<0?-1:1,l=r.style.transform.replace("translateX(","").replace("%)",""),r.style.transform="translateX("+(parseInt(l)+o)+"%)",e.preventDefault()},!1),e.addEventListener("touchend",function(e){var i;r.classList.add("transitions"),i=r.offsetWidth,a>.25*i?t(r,"Previous",!0):a<-.25*i?t(r,"Next",!0):n(r,parseInt(r.getAttribute("data-position"))),e.preventDefault()},!1)}(r,e),r}(o)),n(o,0),e.parentNode.replaceChild(i,e)}(e,l)}function t(e,t,r){var i,a;if(i=e.getAttribute("data-position"),a=e.children.length-1,e.classList.remove("reboundLeft","reboundRight"),"Next"===t){if(++i>a){if(!r)return e.offsetWidth,void e.classList.add("reboundRight");i--}}else if(--i<0){if(!r)return e.offsetWidth,void e.classList.add("reboundLeft");i++}n(e,i)}function n(e,t){var n,r;e.style.transform="translateX(-"+100*t+"%)",e.setAttribute("data-position",t),(r=(n=e.parentNode.parentNode).querySelector(".captions .active"))&&r.classList.remove("active"),n.querySelectorAll(".caption")[t].classList.add("active"),n.querySelector(".counter span").innerHTML=t+1}window.addEventListener("load",function(){var t,n;for(t=document.querySelectorAll(".gallery.gallery-size-full"),n=0;n<t.length;n++)e(t[n])},!1)}(),function(){"use strict";function e(e,i){var a,o,l,s,d,c,u,f,p,h;for(e.classList.add("cl-tabs-js"),d=e.querySelectorAll(".cl-tab"),(s=document.createElement("ul")).setAttribute("role","tablist"),p=0,f=0;f<d.length;f++)p++,a=(a=d[f].querySelector("h1"))?a.innerHTML:(a=d[f].querySelector("h2"))?a.innerHTML:"Section "+p,""===(o=d[f].id)&&(o="cl-tabs-"+i+"-tab-section-"+p,d[f].id=o),(c=document.createElement("li")).setAttribute("role","presentation"),(u=document.createElement("a")).href="#"+o,u.id="cl-tabs-"+i+"-tab-"+p,u.setAttribute("role","tab"),u.setAttribute("tabindex","-1"),u.innerHTML=a,c.appendChild(u),s.appendChild(c);for(e.insertBefore(s,d[0]),l=s.querySelectorAll("a"),f=0;f<l.length;f++)l[f].addEventListener("click",function(e){t(e,l,s,d)}),l[f].addEventListener("keydown",function(e){n(e,l,d)});for(f=0;f<d.length;f++)d[f].setAttribute("role","tabpanel"),d[f].setAttribute("tabindex","-1"),d[f].setAttribute("aria-labelledby",l[f].id),d[f].hidden=!0;l[0].removeAttribute("tabindex"),l[0].setAttribute("aria-selected","true"),d[0].hidden=!1,null!==(h=function(e){var t,n,r;t=document.URL.split("#"),r=null,t.length>1&&null!==(n=e.querySelector("#"+t[1]))&&(r=document.getElementById(n.getAttribute("aria-labelledby")));return r}(e))&&r(l,d,s.querySelector("[aria-selected]"),h)}function t(e,t,n,i){var a;e.preventDefault(),a=n.querySelector("[aria-selected]"),e.currentTarget!==a&&r(t,i,a,e.currentTarget)}function n(e,t,n){var i=Array.prototype.indexOf.call(t,e.currentTarget),a=37===e.which?i-1:39===e.which?i+1:40===e.which?"down":null;null!==a&&(e.preventDefault(),"down"===a?n[i].focus():t[a]&&r(t,n,e.currentTarget,t[a]))}function r(e,t,n,r){var i;r.focus(),r.removeAttribute("tabindex"),r.setAttribute("aria-selected","true"),n.removeAttribute("aria-selected"),n.setAttribute("tabindex","-1"),i=Array.prototype.indexOf.call(e,r),t[Array.prototype.indexOf.call(e,n)].hidden=!0,t[i].hidden=!1}window.addEventListener("load",function(){var t,n;for(t=document.querySelectorAll(".cl-tabs"),n=0;n<t.length;n++)e(t[n],n+1)},!1)}(),function(){"use strict";window.addEventListener("load",function(){var e,t;e=document.querySelectorAll(".cl-wave"),t=window.pageYOffset,window.addEventListener("scroll",function(){!function(e,t){var n,r,i,a;for(n=window.pageYOffset,r=n-t,i=0;i<e.length;i++)(a=e[i]).firstElementChild.style.backgroundPositionX=r+"px",a.lastElementChild.style.backgroundPositionX=r+"px"}(e,t)})},!1)}(),function(){"use strict";var e={},t={};function n(e,t){var n=t.offsetWidth,r=t.offsetHeight;n/r>16/9?(e.style.height=9*n/16+"px",e.style.width="100%",e.style.left=0,e.style.top=(r-9*n/16)/2+"px",e.style.marginLeft=0):(n=16*r/9,e.style.height="100%",e.style.width=n+"px",e.style.left=0-n/2+"px",e.style.top=0,e.style.marginLeft="50%")}function r(e,n,r){n.style.height=r.offsetWidth/t[e].aspect+"px"}function i(e,t){var n=window.innerHeight,r=window.pageYOffset,i=t.offsetHeight,a=t.getBoundingClientRect().top+r;n+r<a||r>a+i?e.target.pauseVideo():e.target.playVideo()}function a(t){var r,a,o,l;t.target.mute(),r=t.target.getIframe(),a=e[t.target.a.id].parent,window.addEventListener("resize",function(){n(r,a)}),n(r,a),window.addEventListener("scroll",function(){a.classList.contains("paused")||i(t,a)}),i(t,a),o=a.querySelector(".overlay"),(l=document.createElement("div")).className="motionswitch",l.title="Pause",l.addEventListener("click",function(){!function(e,t,n){switch(e.target.getPlayerState()){default:case 1:e.target.pauseVideo(),t.classList.add("paused"),n.setAttribute("title","Play");break;case 2:e.target.playVideo(),t.classList.remove("paused"),n.setAttribute("title","Pause")}}(t,a,this)}),o.appendChild(l)}function o(e){var n=e.target.getIframe(),i=e.target.a.id,a=t[i].parent;window.addEventListener("resize",function(){r(i,n,a)}),r(i,n,a)}function l(t){switch(t.target.getPlayerState()){case 0:t.target.playVideo();break;case-1:case 1:window.innerWidth>750&&e[t.target.a.id].poster.classList.add("unveil")}}function s(t){e[t.target.a.id].poster.classList.remove("unveil"),e[t.target.a.id].parent.querySelector(".motionswitch").style.display="none"}function d(e){var n,r,i,a,o;n=t[e.target.a.id],(r=document.createElement("a")).href="http://www.youtube.com/watch?v="+n.ytid,r.title="Try watching this video on YouTube",(i=document.createElement("img")).src=n.poster.getAttribute("src"),(a=n.poster.getAttribute("alt"))||(a="Poster for video"),i.alt=a,r.appendChild(i),(o=document.getElementById(e.target.a.id))&&n.parent.replaceChild(r,o)}function c(e){var n=e.target.getPlayerState(),r=e.target.a.id,i=t[r].parent.querySelector(".overlay");switch(n){case 1:case 3:i.classList.add("hidden");break;default:i.classList.remove("hidden")}}window.addEventListener("load",function(){var n,r,i,a,o,l,s,d,c=!1,u=document.querySelectorAll(".cl-hero .poster"),f=document.querySelectorAll(".cl-video img");if(URICL.checkSupport())for(a=0;a<u.length;a++)n=u[a],r=n.getAttribute("id"),i=n.parentNode,o=n.getAttribute("data-start"),l=n.getAttribute("data-end"),e[r]={poster:n,parent:i,ytid:n.getAttribute("data-id"),w:i.offsetWidth,h:i.offsetHeight,start:o||0,end:l||-1},n.removeAttribute("id"),(s=document.createElement("div")).id=r,i.appendChild(s),c=!0;for(a=0;a<f.length;a++)n=f[a],r=n.getAttribute("id"),d=16/9,n.getAttribute("data-aspect")&&(d=(d=n.getAttribute("data-aspect").split(":"))[0]/d[1]),t[r]={poster:n,ytid:n.getAttribute("data-id"),parent:n.parentNode,aspect:d},c=!0;c&&((p=document.createElement("script")).src="https://www.youtube.com/player_api",(h=document.getElementsByTagName("script")[0]).parentNode.insertBefore(p,h));var p,h},!1),CLCreateYouTubePlayers=function(){var n,r;for(n in e)(r=e[n]).player=new YT.Player(n,{width:r.w,height:r.h,videoId:r.ytid,playerVars:{autoplay:1,controls:0,showinfo:0,start:r.start,end:r.end,modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:a,onStateChange:l,onError:s}});for(n in t)(r=t[n]).player=new YT.Player(n,{videoId:r.ytid,playerVars:{autoplay:0,controls:1,showinfo:0,color:"white",modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:o,onStateChange:c,onError:d}})}}();