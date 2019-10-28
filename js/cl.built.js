/**
 * uri-component-library
 * 
 * --scripts--
 * 
 * @version v3.6.0
 * @author Brandon Fuller <bjcfuller@uri.edu>
 * @author John Pennypacker <jpennypacker@uri.edu>
 * @license GPL-3.0
 * @see https://www.uri.edu/styleguide
 */

class URICL{static checkSupport(){var e=!0,t=navigator.userAgent,n=t.indexOf("MSIE "),r=t.indexOf("Trident/");return("Microsoft Internet Explorer"===navigator.appName||n>0||r>0)&&(e=!1),e}}var CLResizeSuperheroes,CLCreateYouTubePlayers,CLCreateVimeoPlayers;function onYouTubePlayerAPIReady(){CLCreateYouTubePlayers()}!function(){"use strict";window.addEventListener("load",function(){(function(){var e,t;for(e=document.querySelectorAll(".cl-hero .animate.shift"),t=0;t<e.length;t++)e[t].style.backgroundPositionX="100%",e[t].style.backgroundPositionY=0})(),function(){var e,t,n,r,a;(e=document.getElementById("hero"))&&(t=e.querySelector(".overlay"),n=window.pageYOffset,r=t.getBoundingClientRect().top+n,a=50,i(),window.addEventListener("scroll",function(){i()}));function i(){var e=window.pageYOffset,n=t.offsetHeight+r,i=Math.min(e/n*a,a);t.style.webkitBackdropFilter="blur("+i+"px)"}}(),URICL.checkSupport()&&(e=document.querySelectorAll(".cl-hero .poster"),window.addEventListener("resize",function(){var t,n=window.innerWidth;if(n<750)for(t=0;t<e.length;t++)e[t].classList.remove("unveil");else for(t=0;t<e.length;t++)e[t].classList.add("unveil")})),function(){var e,t,n,r=[];for(e=document.querySelectorAll(".cl-hero.super"),t=e.length,n=0;n<t;n++)r.push({el:e[n],offset:e[n].getBoundingClientRect().top});CLResizeSuperheroes=function(e){var n,a,i,o,s,l;for(n=window.innerHeight,a=window.innerWidth,i=window.pageYOffset,o=0;o<t;o++)s=r[o],!1!==e&&(s.offset=s.el.getBoundingClientRect().top),l=(s.offset+i)/n,s.el.style.height=n<.75*a&&n<675||l>.3?Math.max(.9*n,500)+"px":98-100*l+"vh"},window.dispatchEvent(new Event("scroll")),CLResizeSuperheroes(!1),window.addEventListener("resize",CLResizeSuperheroes.bind(null,!1),!1)}();var e},!1)}(),function(){"use strict";var e="reveal";function t(t,n,r){t.addEventListener("click",function(t){t.preventDefault(),function(t,n){var r,a;for(r=n.classList.contains(e),a=0;a<t.length;a++)t[a].classList.remove(e);r||n.classList.add(e)}(n,r)})}window.addEventListener("load",function(){var e,n,r,a,i,o,s,l;for(e=document.querySelectorAll(".cl-menu"),i=0;i<e.length;i++)(n=document.createElement("span")).className="cl-menu-toggle","0"===e[i].getAttribute("data-show-title")&&n.classList.add("hidden"),n.innerHTML=e[i].getAttribute("data-name"),n.addEventListener("click",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}),(r=e[i].querySelector(".cl-menu-list")).classList.remove("cl-menu-list-no-js"),e[i].insertBefore(n,r),e[i].classList.add(".cl-menu-js");for(a=document.querySelectorAll(".cl-menu-list ul"),i=0;i<a.length;i++)(s=document.createElement("span")).className="cl-menu-arrow",a[i].parentNode.append(s),o=a[i].parentNode.querySelector("a"),(l=document.createElement("li")).appendChild(o.cloneNode(!0)),a[i].insertBefore(l,a[i].firstChild),o.classList.add("cl-menu-trigger"),t(o,a,a[i])},!1)}(),function(){"use strict";function e(e){var t,n;for(t=0;t<e.length;t++)if((n={}).el=e[t],n.num=n.el.querySelector("span"),n.w=n.num.clientWidth,n.fs=window.getComputedStyle(n.num).getPropertyValue("font-size"),n.sw=n.num.scrollWidth,n.mfs=n.el.getAttribute("data-font-max"),n.nfs=n.fs.match(/\d+/)[0],n.sw>n.w)for(n.num.classList.add("autosized");n.sw>n.w;)n.nfs--,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth;else if(n.num.classList.contains("autosized"))for(;n.sw===n.w&&n.nfs<n.mfs;)n.nfs++,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth}window.addEventListener("load",function(){var t,n;if((t=document.querySelectorAll(".cl-metric")).length>0){for(n=0;n<t.length;n++)t[n].setAttribute("data-font-max",window.getComputedStyle(t[n].querySelector("span")).getPropertyValue("font-size").match(/\d+/)[0]);e(t),window.addEventListener("resize",e.bind(null,t))}},!1)}(),function(){"use strict";function e(e,t){var n;(n=t.querySelector(".cl-overlay-block")).classList.contains("hidden")?(n.classList.remove("hidden"),t.style.height="auto",e.title="Hide story"):(t.style.height=t.offsetHeight+"px",n.classList.add("hidden"),e.title="Show story")}window.addEventListener("load",function(){var t,n,r;for(t=document.querySelectorAll(".cl-overlay"),n=0;n<t.length;n++)(r=document.createElement("div")).className="cl-overlay-slider",r.innerHTML='<div class="cl-overlay-prompter"></div>',r.title="Hide story",r.addEventListener("click",e.bind(null,r,t[n]),!1),t[n].querySelector(".cl-overlay-block").appendChild(r)},!1)}(),function(){"use strict";var e={heroes:{vimeo:{},yt:{}},videos:{vimeo:{},yt:{}}};function t(e,t,n){t.player=new Vimeo.Player(e,n),t.player.on("loaded",function(e){console.log(e),t.state="loaded",CLVimeo.onHeroReady(t)}),t.player.on("play",function(e){t.state="playing",CLVimeo.onHeroStateChange(t)}),t.player.on("pause",function(e){t.state="paused",CLVimeo.onHeroStateChange(t)}),t.player.on("ended",function(e){t.state="ended",CLVimeo.onHeroStateChange(t)}),t.player.on("error",CLVimeo.onHeroError.bind(null,t))}window.addEventListener("load",function(){var t,n,r,a,i,o,s,l,d=!1,c=!1,u=document.querySelectorAll(".cl-hero .poster"),p=document.querySelectorAll(".cl-video img");if(URICL.checkSupport())for(t=0;t<u.length;t++)n=u[t],a=n.parentNode,i={parent:a,poster:n,state:"init",w:a.offsetWidth,h:a.offsetHeight},o=n.getAttribute("data-video"),s=n.getAttribute("data-platform"),r=n.getAttribute("id"),"youtube"==s&&(d=!0,e.heroes.yt[r]=i,e.heroes.yt[r].src=o),"vimeo"==s&&(c=!0,e.heroes.vimeo[r]=i,e.heroes.vimeo[r].src=o),n.removeAttribute("id"),(l=document.createElement("div")).id=r,a.appendChild(l);for(t=0;t<p.length;t++)n=p[t],r=n.getAttribute("id"),i={poster:n},o=n.getAttribute("data-video"),"youtube"==(s=n.getAttribute("data-platform"))&&(e.videos.yt[r]=i,e.heroes.yt[r].src=o,d=!0),"vimeo"==s&&(e.videos.vimeo[r]=i,e.videos.vimeo[r].src=o,c=!0);d&&CLYT.loadYouTubeAPI();c&&CLVimeo.loadVimeoAPI();console.log(e)},!1),CLCreateVimeoPlayers=function(){var n,r;for(n in e.heroes.vimeo)t(n,r=e.heroes.vimeo[n],{url:r.src,background:!0,autoplay:!0,width:r.w,height:r.h})},CLCreateYouTubePlayers=function(){var t,n;for(t in e.heroes.yt)(n=e.heroes.yt[t]).player=new YT.Player(t,{width:n.w,height:n.h,videoId:n.src,playerVars:{autoplay:1,controls:0,showinfo:0,modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:CLYT.onHeroReady,onStateChange:CLYT.onHeroStateChange,onError:CLYT.onHeroError}});for(t in e.videos.yt)(n=e.videos.yt[t]).player=new YT.Player(t,{videoId:n.src,playerVars:{autoplay:0,controls:1,showinfo:0,color:"white",modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:CLYT.onVideoReady,onStateChange:CLYT.onVideoStateChange,onError:CLYT.onVideoError}})}}(),function(){"use strict";function e(e){var r,a,i,o,s=[];for(r=e.querySelectorAll("figure"),a=0;a<r.length;a++)(i={}).img=r[a].querySelector("img"),(o=r[a].querySelector("figcaption"))&&(i.caption=o.innerHTML),s.push(i);!function(e,r){var a,i,o,s,l,d,c,u;for((a=document.createElement("div")).className="cl-slideshow",(i=document.createElement("div")).className="carousel-wrapper",a.appendChild(i),(o=document.createElement("ul")).className="carousel transitions",i.appendChild(o),(s=document.createElement("ul")).className="captions",a.appendChild(s),(l=document.createElement("div")).className="counter",l.innerHTML="<span></span> of "+r.length,a.appendChild(l),u=0;u<r.length;u++)(d=document.createElement("li")).className="slide",d.appendChild(r[u].img),o.appendChild(d),(c=document.createElement("li")).className="caption",c.innerHTML=r[u].caption?r[u].caption:"",s.appendChild(c);i.appendChild(function(e){var r,a,i,o,s;for(s in(r=document.createElement("div")).className="controls",a=["Previous","Next"])(i=document.createElement("div")).className="target "+a[s].toLowerCase(),i.title=a[s],i.addEventListener("click",t.bind(null,e,a[s],!1)),(o=document.createElement("div")).className="controller",i.appendChild(o),r.appendChild(i);return function(e,r){var a,i;a=0,i=0,!0===function(){return"ontouchstart"in window||navigator.maxTouchPoints}&&e.classList.add("touch"),e.addEventListener("touchstart",function(e){var t;r.classList.remove("transitions"),t=e.changedTouches[0],a=parseInt(t.clientX),e.preventDefault()},!1),e.addEventListener("touchmove",function(e){var t,n,o,s;t=e.changedTouches[0],n=parseInt(t.clientX)-a-i,i=parseInt(t.clientX)-a,o=n<0?-1:1,s=r.style.transform.replace("translateX(","").replace("%)",""),r.style.transform="translateX("+(parseInt(s)+o)+"%)",e.preventDefault()},!1),e.addEventListener("touchend",function(e){var a;r.classList.add("transitions"),a=r.offsetWidth,i>.25*a?t(r,"Previous",!0):i<-.25*a?t(r,"Next",!0):n(r,parseInt(r.getAttribute("data-position"))),e.preventDefault()},!1)}(r,e),r}(o)),n(o,0),e.parentNode.replaceChild(a,e)}(e,s)}function t(e,t,r){var a,i;if(a=e.getAttribute("data-position"),i=e.children.length-1,e.classList.remove("reboundLeft","reboundRight"),"Next"===t){if(++a>i){if(!r)return e.offsetWidth,void e.classList.add("reboundRight");a--}}else if(--a<0){if(!r)return e.offsetWidth,void e.classList.add("reboundLeft");a++}n(e,a)}function n(e,t){var n,r;e.style.transform="translateX(-"+100*t+"%)",e.setAttribute("data-position",t),(r=(n=e.parentNode.parentNode).querySelector(".captions .active"))&&r.classList.remove("active"),n.querySelectorAll(".caption")[t].classList.add("active"),n.querySelector(".counter span").innerHTML=t+1}window.addEventListener("load",function(){var t,n;for(t=document.querySelectorAll(".gallery.gallery-size-full"),n=0;n<t.length;n++)e(t[n])},!1)}(),function(){"use strict";function e(e,a){var i,o,s,l,d,c,u,p,f,h;for(e.classList.add("cl-tabs-js"),d=e.querySelectorAll(".cl-tab"),(l=document.createElement("ul")).setAttribute("role","tablist"),f=0,p=0;p<d.length;p++)f++,i=(i=d[p].querySelector("h1"))?i.innerHTML:(i=d[p].querySelector("h2"))?i.innerHTML:"Section "+f,""===(o=d[p].id)&&(o="cl-tabs-"+a+"-tab-section-"+f,d[p].id=o),(c=document.createElement("li")).setAttribute("role","presentation"),(u=document.createElement("a")).href="#"+o,u.id="cl-tabs-"+a+"-tab-"+f,u.setAttribute("role","tab"),u.setAttribute("tabindex","-1"),u.innerHTML=i,c.appendChild(u),l.appendChild(c);for(e.insertBefore(l,d[0]),s=l.querySelectorAll("a"),p=0;p<s.length;p++)s[p].addEventListener("click",function(e){t(e,s,l,d)}),s[p].addEventListener("keydown",function(e){n(e,s,d)});for(p=0;p<d.length;p++)d[p].setAttribute("role","tabpanel"),d[p].setAttribute("tabindex","-1"),d[p].setAttribute("aria-labelledby",s[p].id),d[p].hidden=!0;s[0].removeAttribute("tabindex"),s[0].setAttribute("aria-selected","true"),d[0].hidden=!1,null!==(h=function(e){var t,n,r;t=document.URL.split("#"),r=null,t.length>1&&null!==(n=e.querySelector("#"+t[1]))&&(r=document.getElementById(n.getAttribute("aria-labelledby")));return r}(e))&&r(s,d,l.querySelector("[aria-selected]"),h)}function t(e,t,n,a){var i;e.preventDefault(),i=n.querySelector("[aria-selected]"),e.currentTarget!==i&&r(t,a,i,e.currentTarget)}function n(e,t,n){var a=Array.prototype.indexOf.call(t,e.currentTarget),i=37===e.which?a-1:39===e.which?a+1:40===e.which?"down":null;null!==i&&(e.preventDefault(),"down"===i?n[a].focus():t[i]&&r(t,n,e.currentTarget,t[i]))}function r(e,t,n,r){var a;r.focus(),r.removeAttribute("tabindex"),r.setAttribute("aria-selected","true"),n.removeAttribute("aria-selected"),n.setAttribute("tabindex","-1"),a=Array.prototype.indexOf.call(e,r),t[Array.prototype.indexOf.call(e,n)].hidden=!0,t[a].hidden=!1}window.addEventListener("load",function(){var t,n;for(t=document.querySelectorAll(".cl-tabs"),n=0;n<t.length;n++)e(t[n],n+1)},!1)}();class CLVimeo{static loadVimeoAPI(){var e,t;(e=document.createElement("script")).src="https://player.vimeo.com/api/player.js",(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t),e.addEventListener("load",CLCreateVimeoPlayers,!1)}static onHeroReady(e){var t,n;window.addEventListener("resize",function(){CLVimeo.resizeHero(e)}),CLVimeo.resizeHero(e),window.addEventListener("scroll",function(){e.parent.classList.contains("paused")||CLVimeo.determinePlayState(e)}),CLVimeo.determinePlayState(e),t=e.parent.querySelector(".overlay"),(n=document.createElement("div")).className="motionswitch",n.title="Pause",n.addEventListener("click",function(){CLVimeo.heroControl(e,n)}),t.appendChild(n)}static determinePlayState(e){var t=window.innerHeight,n=window.pageYOffset,r=e.parent.offsetHeight,a=e.parent.getBoundingClientRect().top+n;t+n<a||n>a+r?e.player.pause():e.player.play()}static heroControl(e,t){switch(e.state){default:case"playing":e.player.pause(),e.parent.classList.add("paused"),t.setAttribute("title","Play");break;case"paused":e.player.play(),e.parent.classList.remove("paused"),t.setAttribute("title","Pause")}}static onHeroStateChange(e){switch(e.state){case"playing":window.innerWidth>750&&e.poster.classList.add("unveil")}}static resizeHero(e){var t=e.parent.querySelector("iframe"),n=e.parent.offsetWidth,r=e.parent.offsetHeight;n/r>16/9?(t.style.height=9*n/16+"px",t.style.width="100%",t.style.left=0,t.style.top=(r-9*n/16)/2+"px",t.style.marginLeft=0):(n=16*r/9,t.style.height="100%",t.style.width=n+"px",t.style.left=0-n/2+"px",t.style.top=0,t.style.marginLeft="50%")}static onHeroError(e){e.poster.classList.remove("unveil"),e.parent.querySelector(".motionswitch").style.display="none"}}!function(){"use strict";window.addEventListener("load",function(){var e,t;e=document.querySelectorAll(".cl-wave"),t=window.pageYOffset,window.addEventListener("scroll",function(){!function(e,t){var n,r,a,i;for(n=window.pageYOffset,r=n-t,a=0;a<e.length;a++)(i=e[a]).firstElementChild.style.backgroundPositionX=r+"px",i.lastElementChild.style.backgroundPositionX=r+"px"}(e,t)})},!1)}();class CLYT{static loadYouTubeAPI(){var e,t;(e=document.createElement("script")).src="https://www.youtube.com/player_api",(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t)}static resizeHero(e,t){var n=t.offsetWidth,r=t.offsetHeight;n/r>16/9?(e.style.height=9*n/16+"px",e.style.width="100%",e.style.left=0,e.style.top=(r-9*n/16)/2+"px",e.style.marginLeft=0):(n=16*r/9,e.style.height="100%",e.style.width=n+"px",e.style.left=0-n/2+"px",e.style.top=0,e.style.marginLeft="50%")}static resizeVideo(e,t,n){t.style.height=n.offsetWidth/(e.target.a.offsetWidth/e.target.a.offsetHeight)+"px"}static determinePlayState(e,t){var n=window.innerHeight,r=window.pageYOffset,a=t.offsetHeight,i=t.getBoundingClientRect().top+r;n+r<i||r>i+a?e.target.pauseVideo():e.target.playVideo()}static onHeroReady(e){var t,n,r,a;e.target.mute(),t=e.target.getIframe(),n=e.target.a.parentNode,window.addEventListener("resize",function(){CLYT.resizeHero(t,n)}),CLYT.resizeHero(t,n),window.addEventListener("scroll",function(){n.classList.contains("paused")||CLYT.determinePlayState(e,n)}),CLYT.determinePlayState(e,n),r=n.querySelector(".overlay"),(a=document.createElement("div")).className="motionswitch",a.title="Pause",a.addEventListener("click",function(){CLYT.heroControl(e,n,this)}),r.appendChild(a)}static onVideoReady(e){var t=e.target.getIframe(),n=(e.target.a.id,e.target.a.parentNode);window.addEventListener("resize",function(){CLYT.resizeVideo(e,t,n)}),CLYT.resizeVideo(e,t,n)}static heroControl(e,t,n){switch(e.target.getPlayerState()){default:case 1:e.target.pauseVideo(),t.classList.add("paused"),n.setAttribute("title","Play");break;case 2:e.target.playVideo(),t.classList.remove("paused"),n.setAttribute("title","Pause")}}static onHeroStateChange(e){switch(e.target.getPlayerState()){case 0:e.target.playVideo();break;case-1:case 1:window.innerWidth>750&&e.target.a.previousSibling.classList.add("unveil")}}static onHeroError(e){e.target.a.previousSibling.classList.remove("unveil"),e.target.a.parentNode.querySelector(".motionswitch").style.display="none"}static onVideoError(e){var t,n,r,a,i;t=e.target.a.previousSibling,(n=document.createElement("a")).href="http://www.youtube.com/watch?v="+e.target.a.id,n.title="Try watching this video on YouTube",(r=document.createElement("img")).src=t.getAttribute("src"),(a=t.getAttribute("alt"))||(a="Poster for video"),r.alt=a,n.appendChild(r),(i=document.getElementById(e.target.a.id))&&e.target.a.parentNode.replaceChild(n,i)}static onVideoStateChange(e){var t=e.target.getPlayerState(),n=(e.target.a.id,e.target.a.parentNode.querySelector(".overlay"));switch(t){case 1:case 3:n.classList.add("hidden");break;default:n.classList.remove("hidden")}}}