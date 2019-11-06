/**
 * uri-component-library
 * 
 * --scripts--
 * 
 * @version v3.7.0
 * @author Brandon Fuller <bjcfuller@uri.edu>
 * @author John Pennypacker <jpennypacker@uri.edu>
 * @license GPL-3.0
 * @see https://www.uri.edu/styleguide
 */

class URICL{static checkSupport(){var e=!0,t=navigator.userAgent,r=t.indexOf("MSIE "),n=t.indexOf("Trident/");return("Microsoft Internet Explorer"===navigator.appName||r>0||n>0)&&(e=!1),e}}var CLResizeSuperheroes,CLCreateYouTubePlayers,CLCreateVimeoPlayers;function onYouTubePlayerAPIReady(){CLCreateYouTubePlayers()}!function(){"use strict";window.addEventListener("load",function(){(function(){var e,t;for(e=document.querySelectorAll(".cl-hero .animate.shift"),t=0;t<e.length;t++)e[t].style.backgroundPositionX="100%",e[t].style.backgroundPositionY=0})(),function(){var e,t,r,n,i;(e=document.getElementById("hero"))&&(t=e.querySelector(".overlay"),r=window.pageYOffset,n=t.getBoundingClientRect().top+r,i=50,o(),window.addEventListener("scroll",function(){o()}));function o(){var e=window.pageYOffset,r=t.offsetHeight+n,o=Math.min(e/r*i,i);t.style.webkitBackdropFilter="blur("+o+"px)"}}(),URICL.checkSupport()&&(e=document.querySelectorAll(".cl-hero .poster"),window.addEventListener("resize",function(){var t,r=window.innerWidth;if(r<750)for(t=0;t<e.length;t++)e[t].classList.remove("unveil");else for(t=0;t<e.length;t++)e[t].classList.add("unveil")})),function(){var e,t,r,n=[];for(e=document.querySelectorAll(".cl-hero.super"),t=e.length,r=0;r<t;r++)n.push({el:e[r],offset:e[r].getBoundingClientRect().top});CLResizeSuperheroes=function(e){var r,i,o,a,s,l;for(r=window.innerHeight,i=window.innerWidth,o=window.pageYOffset,a=0;a<t;a++)s=n[a],!1!==e&&(s.offset=s.el.getBoundingClientRect().top),l=(s.offset+o)/r,s.el.style.height=r<.75*i&&r<675||l>.3?Math.max(.9*r,500)+"px":98-100*l+"vh"},window.dispatchEvent(new Event("scroll")),CLResizeSuperheroes(!1),window.addEventListener("resize",CLResizeSuperheroes.bind(null,!1),!1)}();var e},!1)}(),function(){"use strict";var e="reveal";function t(t,r,n){t.addEventListener("click",function(t){t.preventDefault(),function(t,r){var n,i;for(n=r.classList.contains(e),i=0;i<t.length;i++)t[i].classList.remove(e);n||r.classList.add(e)}(r,n)})}window.addEventListener("load",function(){var e,r,n,i,o,a,s,l;for(e=document.querySelectorAll(".cl-menu"),o=0;o<e.length;o++)(r=document.createElement("span")).className="cl-menu-toggle","0"===e[o].getAttribute("data-show-title")&&r.classList.add("hidden"),r.innerHTML=e[o].getAttribute("data-name"),r.addEventListener("click",function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")}),(n=e[o].querySelector(".cl-menu-list")).classList.remove("cl-menu-list-no-js"),e[o].insertBefore(r,n),e[o].classList.add(".cl-menu-js");for(i=document.querySelectorAll(".cl-menu-list ul"),o=0;o<i.length;o++)(s=document.createElement("span")).className="cl-menu-arrow",i[o].parentNode.append(s),a=i[o].parentNode.querySelector("a"),(l=document.createElement("li")).appendChild(a.cloneNode(!0)),i[o].insertBefore(l,i[o].firstChild),a.classList.add("cl-menu-trigger"),t(a,i,i[o])},!1)}(),function(){"use strict";function e(e){var t,r;for(t=0;t<e.length;t++)if((r={}).el=e[t],r.num=r.el.querySelector("span"),r.w=r.num.clientWidth,r.fs=window.getComputedStyle(r.num).getPropertyValue("font-size"),r.sw=r.num.scrollWidth,r.mfs=r.el.getAttribute("data-font-max"),r.nfs=r.fs.match(/\d+/)[0],r.sw>r.w)for(r.num.classList.add("autosized");r.sw>r.w;)r.nfs--,r.num.style.fontSize=r.nfs+"px",r.sw=r.num.scrollWidth;else if(r.num.classList.contains("autosized"))for(;r.sw===r.w&&r.nfs<r.mfs;)r.nfs++,r.num.style.fontSize=r.nfs+"px",r.sw=r.num.scrollWidth}window.addEventListener("load",function(){var t,r;if((t=document.querySelectorAll(".cl-metric")).length>0){for(r=0;r<t.length;r++)t[r].setAttribute("data-font-max",window.getComputedStyle(t[r].querySelector("span")).getPropertyValue("font-size").match(/\d+/)[0]);e(t),window.addEventListener("resize",e.bind(null,t))}},!1)}(),function(){"use strict";function e(e,t){var r;(r=t.querySelector(".cl-overlay-block")).classList.contains("hidden")?(r.classList.remove("hidden"),t.style.height="auto",e.title="Hide story"):(t.style.height=t.offsetHeight+"px",r.classList.add("hidden"),e.title="Show story")}window.addEventListener("load",function(){var t,r,n;for(t=document.querySelectorAll(".cl-overlay"),r=0;r<t.length;r++)(n=document.createElement("div")).className="cl-overlay-slider",n.innerHTML='<div class="cl-overlay-prompter"></div>',n.title="Hide story",n.addEventListener("click",e.bind(null,n,t[r]),!1),t[r].querySelector(".cl-overlay-block").appendChild(n)},!1)}(),function(){"use strict";var e={heroes:{vimeo:{},yt:{}},videos:{vimeo:{},yt:{}}};function t(e,t,r,n){t.player=new Vimeo.Player(e,r),t.player.on("loaded",function(e){t.state="loaded",n.onReady(t)}),t.player.on("bufferstart",function(e){t.state="buffering",n.onStateChange(t)}),t.player.on("play",function(e){t.state="playing",n.onStateChange(t)}),t.player.on("pause",function(e){t.state="paused",n.onStateChange(t)}),t.player.on("ended",function(e){t.state="ended",n.onStateChange(t)}),t.player.on("error",n.onError.bind(null,t))}window.addEventListener("load",function(){var t,r,n,i,o,a,s,l,d=!1,c=!1,u=document.querySelectorAll(".cl-hero .poster"),p=document.querySelectorAll(".cl-video .poster");if(URICL.checkSupport())for(t=0;t<u.length;t++)r=u[t],i=r.parentNode,o={parent:i,poster:r,state:"init",w:i.offsetWidth,h:i.offsetHeight},a=r.getAttribute("data-video"),s=r.getAttribute("data-platform"),n=r.getAttribute("id"),"youtube"==s&&(d=!0,e.heroes.yt[n]=o,e.heroes.yt[n].src=a),"vimeo"==s&&(c=!0,e.heroes.vimeo[n]=o,e.heroes.vimeo[n].src=a),r.removeAttribute("id"),(l=document.createElement("div")).id=n,i.appendChild(l);for(t=0;t<p.length;t++)r=p[t],o={parent:r.parentNode,poster:r,state:"init"},a=r.getAttribute("data-video"),s=r.getAttribute("data-platform"),n=r.getAttribute("id"),"youtube"==s&&(e.videos.yt[n]=o,e.videos.yt[n].src=a,d=!0),"vimeo"==s&&(e.videos.vimeo[n]=o,e.videos.vimeo[n].src=a,e.videos.vimeo[n].showinfo=r.getAttribute("data-showinfo"),c=!0);d&&CLYT.loadYouTubeAPI();c&&CLVimeo.loadVimeoAPI()},!1),CLCreateVimeoPlayers=function(){var r,n,i;for(r in e.heroes.vimeo)t(r,n=e.heroes.vimeo[r],{url:n.src,background:!0,autoplay:!0,width:n.w,height:n.h},{onReady:CLVimeo.onHeroReady,onStateChange:CLVimeo.onHeroStateChange,onError:CLVimeo.onHeroError});for(r in e.videos.vimeo)i="1"==(n=e.videos.vimeo[r]).showinfo,t(r,n,{url:n.src,byline:i,title:i,portrait:i},{onReady:CLVimeo.onVideoReady,onStateChange:CLVimeo.onVideoStateChange,onError:CLVimeo.onVideoError})},CLCreateYouTubePlayers=function(){var t,r;for(t in e.heroes.yt)(r=e.heroes.yt[t]).player=new YT.Player(t,{width:r.w,height:r.h,videoId:r.src,playerVars:{autoplay:1,controls:0,showinfo:0,modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:CLYT.onHeroReady,onStateChange:CLYT.onHeroStateChange,onError:CLYT.onHeroError}});for(t in e.videos.yt)(r=e.videos.yt[t]).player=new YT.Player(t,{videoId:r.src,playerVars:{autoplay:0,controls:1,showinfo:0,color:"white",modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:CLYT.onVideoReady,onStateChange:CLYT.onVideoStateChange,onError:CLYT.onVideoError}})}}(),function(){"use strict";var e=[];function t(t){var a,s,l,d,c=[];for(a=t.querySelectorAll("figure"),s=0;s<a.length;s++)(l={}).img=a[s].querySelector("img"),(d=a[s].querySelector("figcaption"))&&(l.caption=d.innerHTML),c.push(l);!function(t,a){var s,l,d,c,u,p,f,h,m;for((s=document.createElement("div")).className="cl-slideshow",(l=document.createElement("div")).className="carousel-wrapper",s.appendChild(l),(d=document.createElement("div")).className="carousel transitions",d.setAttribute("style","grid-template-columns: repeat("+a.length+",100%)"),l.appendChild(d),(c=document.createElement("div")).className="counter",s.appendChild(c),h=0;h<a.length;h++)(u=document.createElement("div")).className="slide",(p=document.createElement("figure")).appendChild(a[h].img),(f=document.createElement("figcaption")).innerHTML=a[h].caption?a[h].caption:"",p.appendChild(f),u.appendChild(p),d.appendChild(u);m={el:d,counter:c,n:a.length},d.addEventListener("scroll",function(e){var t,r;t=e.el.scrollLeft,r=t/e.el.offsetWidth,Number.isInteger(r)&&(e.el.setAttribute("data-position",r),i(e,r),o(e,r))}.bind(null,m),!1),l.appendChild(function(e){var t,n,i,o,a;for(a in(t=document.createElement("div")).className="controls",n=["Previous","Next"])(i=document.createElement("div")).className="target "+n[a].toLowerCase(),i.title=n[a],i.addEventListener("click",r.bind(null,e,n[a],!1)),(o=document.createElement("div")).className="controller",i.appendChild(o),t.appendChild(i);return t}(m)),e.push(m),n(m,0,"auto"),t.parentNode.replaceChild(s,t)}(t,c)}function r(e,t,r){var i,o;if(i=e.el.getAttribute("data-position"),o=e.el.children.length-1,e.el.classList.remove("reboundLeft","reboundRight"),"Next"===t){if(++i>o){if(!r)return e.el.offsetWidth,void e.el.classList.add("reboundRight");i--}}else if(--i<0){if(!r)return e.el.offsetWidth,void e.el.classList.add("reboundLeft");i++}n(e,i,"smooth")}function n(e,t,r){e.el.scroll({top:0,left:e.el.offsetWidth*t,behavior:r}),e.el.setAttribute("data-position",t),i(e,t),o(e,t)}function i(e,t){e.counter.innerHTML="<span>"+(1*t+1)+"</span> of "+e.n}function o(e,t){var r,n;for(n=e.el.querySelectorAll(".slide"),r=0;r<e.n;r++)n[r].classList.remove("active");n[t].classList.add("active")}function a(){var t;for(t=0;t<e.length;t++)n(e[t],e[t].el.getAttribute("data-position"),"auto")}window.addEventListener("load",function(){var e,r;for(e=document.querySelectorAll(".gallery.gallery-size-full"),r=0;r<e.length;r++)t(e[r]);window.addEventListener("resize",a,!1)},!1)}(),function(){"use strict";function e(e,i){var o,a,s,l,d,c,u,p,f,h;for(e.classList.add("cl-tabs-js"),d=e.querySelectorAll(".cl-tab"),(l=document.createElement("ul")).setAttribute("role","tablist"),f=0,p=0;p<d.length;p++)f++,o=(o=d[p].querySelector("h1"))?o.innerHTML:(o=d[p].querySelector("h2"))?o.innerHTML:"Section "+f,""===(a=d[p].id)&&(a="cl-tabs-"+i+"-tab-section-"+f,d[p].id=a),(c=document.createElement("li")).setAttribute("role","presentation"),(u=document.createElement("a")).href="#"+a,u.id="cl-tabs-"+i+"-tab-"+f,u.setAttribute("role","tab"),u.setAttribute("tabindex","-1"),u.innerHTML=o,c.appendChild(u),l.appendChild(c);for(e.insertBefore(l,d[0]),s=l.querySelectorAll("a"),p=0;p<s.length;p++)s[p].addEventListener("click",function(e){t(e,s,l,d)}),s[p].addEventListener("keydown",function(e){r(e,s,d)});for(p=0;p<d.length;p++)d[p].setAttribute("role","tabpanel"),d[p].setAttribute("tabindex","-1"),d[p].setAttribute("aria-labelledby",s[p].id),d[p].hidden=!0;s[0].removeAttribute("tabindex"),s[0].setAttribute("aria-selected","true"),d[0].hidden=!1,null!==(h=function(e){var t,r,n;t=document.URL.split("#"),n=null,t.length>1&&null!==(r=e.querySelector("#"+t[1]))&&(n=document.getElementById(r.getAttribute("aria-labelledby")));return n}(e))&&n(s,d,l.querySelector("[aria-selected]"),h)}function t(e,t,r,i){var o;e.preventDefault(),o=r.querySelector("[aria-selected]"),e.currentTarget!==o&&n(t,i,o,e.currentTarget)}function r(e,t,r){var i=Array.prototype.indexOf.call(t,e.currentTarget),o=37===e.which?i-1:39===e.which?i+1:40===e.which?"down":null;null!==o&&(e.preventDefault(),"down"===o?r[i].focus():t[o]&&n(t,r,e.currentTarget,t[o]))}function n(e,t,r,n){var i;n.focus(),n.removeAttribute("tabindex"),n.setAttribute("aria-selected","true"),r.removeAttribute("aria-selected"),r.setAttribute("tabindex","-1"),i=Array.prototype.indexOf.call(e,n),t[Array.prototype.indexOf.call(e,r)].hidden=!0,t[i].hidden=!1}window.addEventListener("load",function(){var t,r;for(t=document.querySelectorAll(".cl-tabs"),r=0;r<t.length;r++)e(t[r],r+1)},!1)}();class CLVimeo{static loadVimeoAPI(){var e,t;(e=document.createElement("script")).src="https://player.vimeo.com/api/player.js",(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t),e.addEventListener("load",CLCreateVimeoPlayers,!1)}static onHeroReady(e){var t,r;window.addEventListener("resize",function(){CLVimeo.resizeHero(e)}),CLVimeo.resizeHero(e),window.addEventListener("scroll",function(){e.parent.classList.contains("paused")||CLVimeo.determinePlayState(e)}),CLVimeo.determinePlayState(e),t=e.parent.querySelector(".overlay"),(r=document.createElement("div")).className="motionswitch",r.title="Pause",r.addEventListener("click",function(){CLVimeo.heroControl(e,r)}),t.appendChild(r)}static onVideoReady(e){e.poster.querySelector("img").style.display="none",e.ratio=e.player.element.width/e.player.element.height,window.addEventListener("resize",function(){CLVimeo.resizeVideo(e)}),CLVimeo.resizeVideo(e)}static determinePlayState(e){var t=window.innerHeight,r=window.pageYOffset,n=e.parent.offsetHeight,i=e.parent.getBoundingClientRect().top+r;t+r<i||r>i+n?e.player.pause():e.player.play()}static heroControl(e,t){switch(e.state){default:case"playing":e.player.pause(),e.parent.classList.add("paused"),t.setAttribute("title","Play");break;case"paused":e.player.play(),e.parent.classList.remove("paused"),t.setAttribute("title","Pause")}}static onHeroStateChange(e){switch(e.state){case"playing":window.innerWidth>750&&e.poster.classList.add("unveil")}}static resizeHero(e){var t=e.parent.querySelector("iframe"),r=e.parent.offsetWidth,n=e.parent.offsetHeight;r/n>16/9?(t.style.height=9*r/16+"px",t.style.width="100%",t.style.left=0,t.style.top=(n-9*r/16)/2+"px",t.style.marginLeft=0):(r=16*n/9,t.style.height="100%",t.style.width=r+"px",t.style.left=0-r/2+"px",t.style.top=0,t.style.marginLeft="50%")}static resizeVideo(e){e.player.element.setAttribute("height",e.parent.offsetWidth/e.ratio)}static onHeroError(e){e.poster.classList.remove("unveil"),e.parent.querySelector(".motionswitch").style.display="none"}static onVideoError(e){var t,r,n;(t=document.createElement("a")).href=e.src,t.title="Try watching this video on Vimeo",(r=document.createElement("img")).src=e.poster.getAttribute("src"),(n=e.poster.getAttribute("alt"))||(n="Poster for video"),r.alt=n,t.appendChild(r),e.parent.replaceChild(t,e.player.element)}static onVideoStateChange(e){var t;switch(t=e.parent.querySelector(".overlay"),e.state){case"playing":case"buffering":t.classList.add("hidden");break;default:t.classList.remove("hidden")}}}!function(){"use strict";window.addEventListener("load",function(){var e,t;e=document.querySelectorAll(".cl-wave"),t=window.pageYOffset,window.addEventListener("scroll",function(){!function(e,t){var r,n,i,o;for(r=window.pageYOffset,n=r-t,i=0;i<e.length;i++)(o=e[i]).firstElementChild.style.backgroundPositionX=n+"px",o.lastElementChild.style.backgroundPositionX=n+"px"}(e,t)})},!1)}();class CLYT{static loadYouTubeAPI(){var e,t;(e=document.createElement("script")).src="https://www.youtube.com/player_api",(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t)}static resizeHero(e,t){var r=t.offsetWidth,n=t.offsetHeight;r/n>16/9?(e.style.height=9*r/16+"px",e.style.width="100%",e.style.left=0,e.style.top=(n-9*r/16)/2+"px",e.style.marginLeft=0):(r=16*n/9,e.style.height="100%",e.style.width=r+"px",e.style.left=0-r/2+"px",e.style.top=0,e.style.marginLeft="50%")}static resizeVideo(e,t,r){t.style.height=r.offsetWidth/(e.target.a.width/e.target.a.height)+"px"}static determinePlayState(e,t){var r=window.innerHeight,n=window.pageYOffset,i=t.offsetHeight,o=t.getBoundingClientRect().top+n;r+n<o||n>o+i?e.target.pauseVideo():e.target.playVideo()}static onHeroReady(e){var t,r,n,i;e.target.mute(),t=e.target.getIframe(),r=e.target.a.parentNode,window.addEventListener("resize",function(){CLYT.resizeHero(t,r)}),CLYT.resizeHero(t,r),window.addEventListener("scroll",function(){r.classList.contains("paused")||CLYT.determinePlayState(e,r)}),CLYT.determinePlayState(e,r),n=r.querySelector(".overlay"),(i=document.createElement("div")).className="motionswitch",i.title="Pause",i.addEventListener("click",function(){CLYT.heroControl(e,r,this)}),n.appendChild(i)}static onVideoReady(e){var t=e.target.getIframe(),r=e.target.a.parentNode;window.addEventListener("resize",function(){CLYT.resizeVideo(e,t,r)}),CLYT.resizeVideo(e,t,r)}static heroControl(e,t,r){switch(e.target.getPlayerState()){default:case 1:e.target.pauseVideo(),t.classList.add("paused"),r.setAttribute("title","Play");break;case 2:e.target.playVideo(),t.classList.remove("paused"),r.setAttribute("title","Pause")}}static onHeroStateChange(e){switch(e.target.getPlayerState()){case 0:e.target.playVideo();break;case-1:case 1:window.innerWidth>750&&e.target.a.previousSibling.classList.add("unveil")}}static onHeroError(e){e.target.a.previousSibling.classList.remove("unveil"),e.target.a.parentNode.querySelector(".motionswitch").style.display="none"}static onVideoError(e){var t,r,n,i,o;t=e.target.a.previousSibling,(r=document.createElement("a")).href="http://www.youtube.com/watch?v="+e.target.a.id,r.title="Try watching this video on YouTube",(n=document.createElement("img")).src=t.getAttribute("src"),(i=t.getAttribute("alt"))||(i="Poster for video"),n.alt=i,r.appendChild(n),(o=document.getElementById(e.target.a.id))&&e.target.a.parentNode.replaceChild(r,o)}static onVideoStateChange(e){var t=e.target.getPlayerState(),r=e.target.a.parentNode.querySelector(".overlay");switch(t){case 1:case 3:r.classList.add("hidden");break;default:r.classList.remove("hidden")}}}