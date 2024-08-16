/**
 * uri-component-library
 * 
 * --scripts--
 * 
 * @version v5.0.3.3
 * @author Brandon Fuller <bjcfuller@uri.edu>
 * @author John Pennypacker <jpennypacker@uri.edu>
 * @license GPL-3.0
 * @see https://www.uri.edu/styleguide
 */

class CLCardVimeo{static onReady(e){window.addEventListener("resize",(function(){CLVimeo.resizeRelative(e)})),CLVimeo.resizeRelative(e),window.addEventListener("scroll",(function(){e.parent.classList.contains("paused")||CLVimeo.determinePlayState(e)})),CLVimeo.determinePlayState(e)}static onStateChange(e){if("playing"===e.state)e.poster.classList.add("unveil")}static onError(e){e.poster.classList.remove("unveil"),e.parent.querySelector(".motionswitch").style.display="none"}static theatreControl(e){const t=e.parent.parentNode.parentNode,n={el:t.querySelector(".theatre-controls")};n.close=n.el.querySelector(".close"),n.close.addEventListener("click",CLCardVimeo.closeTheatre.bind(null,e),!1),t.parentNode.addEventListener("click",(function(t){"close"!==t.target.className&&e.player.play()}),!1)}static closeTheatre(e){e.player.pause()}}!function(){"use strict";function e(e){e.addEventListener("click",(function(t){t.preventDefault(),function(e){e.classList.toggle("theatre-open")}(e)}))}window.addEventListener("load",(function(){const t=document.querySelectorAll(".cl-card-theatre");for(let n=0;n<t.length;n++)e(t[n])}),!1)}(),function(){"use strict";function e(e){e.classList.add("has-js");const o=e.querySelector(".cl-date-content-wrapper");o.addEventListener("click",t.bind(null,e),!1);e.querySelector(".cl-date-download-confirm").addEventListener("click",n.bind(null,e,o),!1);e.querySelector(".cl-date-download-cancel").addEventListener("click",t.bind(null,e),!1);const i=e.getAttribute("data-hash");"downloaded"===URICL.getCookie("uri-cl-"+i)&&(e.classList.add("downloaded"),o.setAttribute("title","You've downloaded this date before. Check your downloads folder for an ICS file."))}function t(e){const t="dialogue";e.classList.contains("downloaded")||(e.classList.contains(t)?e.classList.remove(t):e.classList.add(t))}function n(e,n){const o=e.getAttribute("data-hash");e.classList.contains("downloaded")||(e.querySelector("form").submit(),t(e),e.classList.add("downloaded"),n.setAttribute("title","Check your downloads folder for an ICS file."),URICL.setCookie("uri-cl-"+o,"downloaded",.5))}window.addEventListener("DOMContentLoaded",(function(){let t;const n=document.querySelectorAll(".cl-date");for(t=0;t<n.length;t++)e(n[t])}),!1)}(),function(){"use strict";function e(e){const n=e.querySelector(".dismiss");if(null===n)return;n.addEventListener("click",t.bind(null,e),!1);const o=e.getAttribute("data-hash");"dismissed"===URICL.getCookie("uri-cl-"+o)&&t(e)}function t(e){const t=e.getAttribute("data-hash");e.classList.add("dismissed"),URICL.setCookie("uri-cl-"+t,"dismissed",30)}window.addEventListener("DOMContentLoaded",(function(){let t;const n=document.querySelectorAll(".cl-countdown, .cl-notice");for(t=0;t<n.length;t++)e(n[t])}),!1)}();class URICL{static checkSupport(){let e=!0;const t=navigator.userAgent,n=t.indexOf("MSIE "),o=t.indexOf("Trident/");return("Microsoft Internet Explorer"===navigator.appName||n>0||o>0)&&(e=!1),e}static setCookie(e,t,n){const o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);const i="expires="+o.toUTCString();document.cookie=e+"="+t+";"+i+";path=/"}static getCookie(e){let t,n;const o=e+"=",i=document.cookie.split(";");for(t=0;t<i.length;t++){for(n=i[t];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(o))return n.substring(o.length,n.length)}return""}}let CLResizeSuperheroes,CLCreateYouTubePlayers,CLCreateVimeoPlayers;class CLHeroVimeo{static onReady(e){window.addEventListener("resize",(function(){CLVimeo.resizeRelative(e)})),CLVimeo.resizeRelative(e),window.addEventListener("scroll",(function(){e.parent.classList.contains("paused")||CLVimeo.determinePlayState(e)})),CLVimeo.determinePlayState(e);const t=e.parent.querySelector(".overlay"),n=document.createElement("div");n.className="motionswitch",n.title="Pause",n.addEventListener("click",(function(){CLHeroVimeo.control(e,n)})),t.appendChild(n)}static control(e,t){switch(e.state){default:case"playing":e.player.pause(),e.parent.classList.add("paused"),t.setAttribute("title","Play");break;case"paused":e.player.play(),e.parent.classList.remove("paused"),t.setAttribute("title","Pause")}}static onStateChange(e){if("playing"===e.state)e.poster.classList.add("unveil")}static onError(e){e.poster.classList.remove("unveil"),e.parent.querySelector(".motionswitch").style.display="none"}}function onYouTubePlayerAPIReady(){CLCreateYouTubePlayers()}!function(){"use strict";window.addEventListener("load",(function(){(function(){let e;const t=document.querySelectorAll(".cl-hero .animate.shift");for(e=0;e<t.length;e++)t[e].style.backgroundPositionX="100%",t[e].style.backgroundPositionY=0})(),function(){let e,t,n,o;const i=document.getElementById("hero");i&&(e=i.querySelector(".overlay"),t=window.pageYOffset,n=e.getBoundingClientRect().top+t,o=50,r(),window.addEventListener("scroll",(function(){r()})));function r(){const t=window.pageYOffset,i=e.offsetHeight+n,r=Math.min(t/i*o,o);e.style.webkitBackdropFilter="blur("+r+"px)"}}(),function(){let e;URICL.checkSupport()&&(e=document.querySelectorAll(".cl-hero .poster[data-platform=youtube]"),window.addEventListener("resize",(function(){let t;if(window.innerWidth<750)for(t=0;t<e.length;t++)e[t].classList.remove("unveil");else for(t=0;t<e.length;t++)e[t].classList.add("unveil")})))}(),function(){let e;const t=[],n=document.querySelectorAll(".cl-hero.super .cl-hero-proper"),o=n.length;for(e=0;e<o;e++)t.push({el:n[e],offset:n[e].getBoundingClientRect().top});CLResizeSuperheroes=function(n){let i,r;const s=window.innerHeight,a=window.innerWidth,l=window.pageYOffset;for(e=0;e<o;e++)i=t[e],!1!==n&&(i.offset=i.el.getBoundingClientRect().top),r=(i.offset+l)/s,i.el.style.height=s<.75*a&&s<675||r>.3?Math.max(.9*s,500)+"px":98-100*r+"vh"},window.dispatchEvent(new Event("scroll")),CLResizeSuperheroes(!1),window.addEventListener("resize",CLResizeSuperheroes.bind(null,!1),!1)}()}),!1)}(),function(){"use strict";const e="reveal";function t(t,n,o){t.addEventListener("click",(function(t){t.preventDefault(),function(t,n){let o;const i=n.classList.contains(e);for(o=0;o<t.length;o++)t[o].classList.remove(e);i||n.classList.add(e)}(n,o)}))}window.addEventListener("load",(function(){let e,n,o,i,r,s;const a=document.querySelectorAll(".cl-menu");for(o=0;o<a.length;o++)e=document.createElement("span"),e.className="cl-menu-toggle","0"===a[o].getAttribute("data-show-title")&&e.classList.add("hidden"),e.innerHTML=a[o].getAttribute("data-name"),e.addEventListener("click",(function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})),n=a[o].querySelector(".cl-menu-list"),n.classList.remove("cl-menu-list-no-js"),a[o].insertBefore(e,n),a[o].classList.add("cl-menu-js");const l=document.querySelectorAll(".cl-menu-list ul");for(o=0;o<l.length;o++)r=document.createElement("span"),r.className="cl-menu-arrow",l[o].parentNode.append(r),i=l[o].parentNode.querySelector("a"),s=document.createElement("li"),s.appendChild(i.cloneNode(!0)),l[o].insertBefore(s,l[o].firstChild),i.classList.add("cl-menu-trigger"),t(i,l,l[o])}),!1)}(),function(){"use strict";function e(e){let t,n;for(t=0;t<e.length;t++)if(n={},n.el=e[t],n.num=n.el.querySelector("span"),n.w=n.num.clientWidth,n.fs=window.getComputedStyle(n.num).getPropertyValue("font-size"),n.sw=n.num.scrollWidth,n.mfs=n.el.getAttribute("data-font-max"),n.nfs=n.fs.match(/\d+/)[0],n.sw>n.w)for(n.num.classList.add("autosized");n.sw>n.w;)n.nfs--,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth;else if(n.num.classList.contains("autosized"))for(;n.sw===n.w&&n.nfs<n.mfs;)n.nfs++,n.num.style.fontSize=n.nfs+"px",n.sw=n.num.scrollWidth}window.addEventListener("load",(function(){let t;const n=document.querySelectorAll(".cl-metric");if(n.length>0){for(t=0;t<n.length;t++)n[t].setAttribute("data-font-max",window.getComputedStyle(n[t].querySelector("span")).getPropertyValue("font-size").match(/\d+/)[0]);e(n),window.addEventListener("resize",e.bind(null,n))}}),!1)}(),function(){"use strict";function e(e,t){const n=t.querySelector(".cl-overlay-block");n.classList.contains("hidden")?(n.classList.remove("hidden"),t.style.height="auto",e.title="Hide story"):(t.style.height=t.offsetHeight+"px",n.classList.add("hidden"),e.title="Show story")}window.addEventListener("load",(function(){let t,n;const o=document.querySelectorAll(".cl-overlay");for(t=0;t<o.length;t++)n=document.createElement("div"),n.className="cl-overlay-slider",n.innerHTML='<div class="cl-overlay-prompter"></div>',n.title="Hide story",n.addEventListener("click",e.bind(null,n,o[t]),!1),o[t].querySelector(".cl-overlay-block").appendChild(n)}),!1)}(),function(){"use strict";const e={heroes:{vimeo:{},yt:{}},videos:{vimeo:{},yt:{}},cards:{vimeo:{}},cardFeatures:{vimeo:{}}};function t(e,t,n,o){t.player=new Vimeo.Player(e,n),t.player.on("loaded",(function(){t.state="loaded",o.onReady(t)})),t.player.on("bufferstart",(function(){t.state="buffering",o.onStateChange(t)})),t.player.on("play",(function(){t.state="playing",o.onStateChange(t)})),t.player.on("pause",(function(){t.state="paused",o.onStateChange(t)})),t.player.on("ended",(function(){t.state="ended",o.onStateChange(t)})),t.player.on("error",o.onError.bind(null,t))}window.addEventListener("load",(function(){let t,n,o,i,r,s,a,l,c=!1,d=!1;const u=document.querySelectorAll(".cl-hero .poster"),f=document.querySelectorAll(".cl-video .poster"),p=document.querySelectorAll(".cl-card .cl-card-container.video .poster");if(URICL.checkSupport())for(t=0;t<u.length;t++)n=u[t],i=n.parentNode,r={parent:i,poster:n,state:"init",w:i.offsetWidth,h:i.offsetHeight},s=n.getAttribute("data-video"),a=n.getAttribute("data-platform"),o=n.getAttribute("id"),"youtube"===a&&(c=!0,e.heroes.yt[o]=r,e.heroes.yt[o].src=s),"vimeo"===a&&(d=!0,e.heroes.vimeo[o]=r,e.heroes.vimeo[o].src=s),n.removeAttribute("id"),l=document.createElement("div"),l.id=o,i.appendChild(l);for(t=0;t<f.length;t++)n=f[t],r={parent:n.parentNode,poster:n,state:"init"},s=n.getAttribute("data-video"),a=n.getAttribute("data-platform"),o=n.getAttribute("id"),"youtube"===a&&(e.videos.yt[o]=r,e.videos.yt[o].src=s,c=!0),"vimeo"===a&&(e.videos.vimeo[o]=r,e.videos.vimeo[o].src=s,e.videos.vimeo[o].showinfo=n.getAttribute("data-showinfo"),d=!0);for(t=0;t<p.length;t++)n=p[t],i=n.parentNode,r={parent:i,poster:n,state:"init"},s=n.getAttribute("data-video"),a=n.getAttribute("data-platform"),o=n.getAttribute("id"),d=!0,e.cards.vimeo[o]=r,e.cards.vimeo[o].src=s,n.removeAttribute("id"),l=document.createElement("div"),l.id=o,i.appendChild(l);c&&CLYT.loadYouTubeAPI();d&&CLVimeo.loadVimeoAPI()}),!1),CLCreateVimeoPlayers=function(){let n,o,i,r,s;for(n in e.heroes.vimeo)o=e.heroes.vimeo[n],i={url:o.src,background:!0,autoplay:!0,width:o.w,height:o.h},s={onReady:CLHeroVimeo.onReady,onStateChange:CLHeroVimeo.onStateChange,onError:CLHeroVimeo.onError},t(n,o,i,s);for(n in e.videos.vimeo)o=e.videos.vimeo[n],r="1"===o.showinfo,i={url:o.src,byline:r,title:r,portrait:r},s={onReady:CLVideoVimeo.onReady,onStateChange:CLVideoVimeo.onStateChange,onError:CLVideoVimeo.onError},t(n,o,i,s);for(n in e.cards.vimeo)o=e.cards.vimeo[n],i={url:o.src,background:!0,autoplay:!0},s={onReady:CLCardVimeo.onReady,onStateChange:CLCardVimeo.onStateChange,onError:CLCardVimeo.onError},t(n,o,i,s)},CLCreateYouTubePlayers=function(){let t,n;for(t in e.heroes.yt)n=e.heroes.yt[t],n.player=new YT.Player(t,{width:n.w,height:n.h,videoId:n.src,playerVars:{autoplay:1,controls:0,showinfo:0,modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:CLYT.onHeroReady,onStateChange:CLYT.onHeroStateChange,onError:CLYT.onHeroError}});for(t in e.videos.yt)n=e.videos.yt[t],n.player=new YT.Player(t,{videoId:n.src,playerVars:{autoplay:0,controls:1,showinfo:0,color:"white",modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:CLYT.onVideoReady,onStateChange:CLYT.onVideoStateChange,onError:CLYT.onVideoError}})}}(),function(){"use strict";const e=[];function t(t){let i,r,a;const l=[],c=t.querySelectorAll("figure");for(i=0;i<c.length;i++)r={},r.img=c[i].querySelector("img"),a=c[i].querySelector("figcaption"),a&&(r.caption=a.innerHTML),l.push(r);!function(t,i){let r,a,l,c;const d=document.createElement("div");d.className="cl-slideshow";const u=document.createElement("div");u.className="carousel-wrapper",d.appendChild(u);const f=document.createElement("div");f.className="carousel transitions",f.setAttribute("style","grid-template-columns: repeat("+i.length+",100%)"),u.appendChild(f);const p=document.createElement("div");for(p.className="counter",d.appendChild(p),c=0;c<i.length;c++)r=document.createElement("div"),r.className="slide",a=document.createElement("figure"),a.appendChild(i[c].img),l=document.createElement("figcaption"),l.innerHTML=i[c].caption?i[c].caption:"",a.appendChild(l),r.appendChild(a),f.appendChild(r);const m={el:f,counter:p,n:i.length};f.addEventListener("scroll",s.bind(null,m),!1),u.appendChild(function(e){let t,o,i;const r=document.createElement("div");r.className="controls";const s=["Previous","Next"];for(i in s)t=document.createElement("div"),t.className="target "+s[i].toLowerCase(),t.title=s[i],t.addEventListener("click",n.bind(null,e,s[i],!1)),o=document.createElement("div"),o.className="controller",t.appendChild(o),r.appendChild(t);return r}(m)),e.push(m),o(m,0,"auto"),t.parentNode.replaceChild(d,t)}(t,l)}function n(e,t,n){let i;i=e.el.getAttribute("data-position");const r=e.el.children.length-1;if(e.el.classList.remove("reboundLeft","reboundRight"),"Next"===t){if(i++,i>r){if(!n)return e.el.offsetWidth,void e.el.classList.add("reboundRight");i--}}else if(i--,i<0){if(!n)return e.el.offsetWidth,void e.el.classList.add("reboundLeft");i++}o(e,i,"smooth")}function o(e,t,n){e.el.scroll({top:0,left:e.el.offsetWidth*t,behavior:n}),e.el.setAttribute("data-position",t),i(e,t),r(e,t)}function i(e,t){e.counter.innerHTML="<span>"+(1*t+1)+"</span> of "+e.n}function r(e,t){let n;const o=e.el.querySelectorAll(".slide");for(n=0;n<e.n;n++)o[n].classList.remove("active");o[t].classList.add("active")}function s(e){const t=e.el.scrollLeft/e.el.offsetWidth;Number.isInteger(t)&&(e.el.setAttribute("data-position",t),i(e,t),r(e,t))}function a(){let t;for(t=0;t<e.length;t++)o(e[t],e[t].el.getAttribute("data-position"),"auto")}window.addEventListener("load",(function(){let e;const n=document.querySelectorAll(".gallery.gallery-size-full, .wp-block-gallery.columns-1");for(e=0;e<n.length;e++)t(n[e]);window.addEventListener("resize",a,!1)}),!1)}(),function(){"use strict";function e(e,i){let r,s,a,l,c,d;e.classList.add("cl-tabs-js");const u=e.querySelectorAll(".cl-tab"),f=document.createElement("ul");for(f.setAttribute("role","tablist"),d=0,c=0;c<u.length;c++)d++,r=u[c].querySelector("h1"),r?r=r.innerHTML:(r=u[c].querySelector("h2"),r=r?r.innerHTML:"Section "+d),s=u[c].id,""===s&&(s="cl-tabs-"+i+"-tab-section-"+d,u[c].id=s),a=document.createElement("li"),a.setAttribute("role","presentation"),l=document.createElement("a"),l.href="#"+s,l.id="cl-tabs-"+i+"-tab-"+d,l.setAttribute("role","tab"),l.setAttribute("tabindex","-1"),l.innerHTML=r,a.appendChild(l),f.appendChild(a);e.insertBefore(f,u[0]);const p=f.querySelectorAll("a");for(c=0;c<p.length;c++)p[c].addEventListener("click",(function(e){t(e,p,f,u)})),p[c].addEventListener("keydown",(function(e){n(e,p,u)}));for(c=0;c<u.length;c++)u[c].setAttribute("role","tabpanel"),u[c].setAttribute("tabindex","-1"),u[c].setAttribute("aria-labelledby",p[c].id),u[c].hidden=!0;p[0].removeAttribute("tabindex"),p[0].setAttribute("aria-selected","true"),u[0].hidden=!1;const m=function(e){let t,n;const o=document.URL.split("#");n=null,o.length>1&&(t=e.querySelector("#"+o[1]),null!==t&&(n=document.getElementById(t.getAttribute("aria-labelledby"))));return n}(e);null!==m&&o(p,u,f.querySelector("[aria-selected]"),m)}function t(e,t,n,i){e.preventDefault();const r=n.querySelector("[aria-selected]");e.currentTarget!==r&&o(t,i,r,e.currentTarget)}function n(e,t,n){let i;const r=Array.prototype.indexOf.call(t,e.currentTarget);i=37===e.which?r-1:39===e.which?r+1:40===e.which?"down":null,null!==i&&(e.preventDefault(),"down"===i?n[r].focus():t[i]&&o(t,n,e.currentTarget,t[i]))}function o(e,t,n,o){o.focus(),o.removeAttribute("tabindex"),o.setAttribute("aria-selected","true"),n.removeAttribute("aria-selected"),n.setAttribute("tabindex","-1");const i=Array.prototype.indexOf.call(e,o);t[Array.prototype.indexOf.call(e,n)].hidden=!0,t[i].hidden=!1}window.addEventListener("load",(function(){let t;const n=document.querySelectorAll(".cl-tabs");for(t=0;t<n.length;t++)e(n[t],t+1)}),!1)}();class CLVideoVimeo{static onReady(e){e.poster.querySelector("img").style.display="none",e.ratio=e.player.element.width/e.player.element.height,window.addEventListener("resize",(function(){CLVimeo.resizeProportionate(e)})),CLVimeo.resizeProportionate(e),e.parent.classList.contains("cl-card-feature-video")&&CLCardVimeo.theatreControl(e)}static onError(e){let t;const n=document.createElement("a");n.href=e.src,n.title="Try watching this video on Vimeo";const o=document.createElement("img");o.src=e.poster.getAttribute("src"),t=e.poster.getAttribute("alt"),t||(t="Poster for video"),o.alt=t,n.appendChild(o),e.parent.replaceChild(n,e.player.element)}static onStateChange(e){const t=e.parent.querySelector(".overlay");switch(e.state){case"playing":case"buffering":t.classList.add("hidden");break;default:t.classList.remove("hidden")}}}class CLVimeo{static loadVimeoAPI(){const e=document.createElement("script");e.src="https://player.vimeo.com/api/player.js";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),e.addEventListener("load",CLCreateVimeoPlayers,!1)}static determinePlayState(e){const t=window.innerHeight,n=window.pageYOffset,o=e.parent.offsetHeight,i=e.parent.getBoundingClientRect().top+n;t+n<i||n>i+o?e.player.pause():e.player.play()}static resizeRelative(e){let t=e.parent.offsetWidth;const n=e.parent.querySelector("iframe"),o=e.parent.offsetHeight;t/o>16/9?(n.style.height=9*t/16+"px",n.style.width="100%",n.style.left=0,n.style.top=(o-9*t/16)/2+"px",n.style.marginLeft=0):(t=16*o/9,n.style.height="100%",n.style.width=t+"px",n.style.left=0-t/2+"px",n.style.top=0,n.style.marginLeft="50%")}static resizeProportionate(e){e.player.element.setAttribute("height",e.parent.offsetWidth/e.ratio)}}!function(){"use strict";window.addEventListener("load",(function(){const e=document.querySelectorAll(".cl-wave"),t=window.pageYOffset;window.addEventListener("scroll",(function(){!function(e,t){let n,o;const i=window.pageYOffset-t;for(n=0;n<e.length;n++)o=e[n],o.firstElementChild.style.backgroundPositionX=i+"px",o.lastElementChild.style.backgroundPositionX=i+"px"}(e,t)}))}),!1)}();class CLYT{static loadYouTubeAPI(){const e=document.createElement("script");e.src="https://www.youtube.com/player_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}static resizeHero(e,t){let n=t.offsetWidth;const o=t.offsetHeight;n/o>16/9?(e.style.height=9*n/16+"px",e.style.width="100%",e.style.left=0,e.style.top=(o-9*n/16)/2+"px",e.style.marginLeft=0):(n=16*o/9,e.style.height="100%",e.style.width=n+"px",e.style.left=0-n/2+"px",e.style.top=0,e.style.marginLeft="50%")}static resizeVideo(e,t){e.style.height=t.offsetWidth/(e.width/e.height)+"px"}static determinePlayState(e,t){const n=window.innerHeight,o=window.pageYOffset,i=t.offsetHeight,r=t.getBoundingClientRect().top+o;n+o<r||o>r+i?e.target.pauseVideo():e.target.playVideo()}static onHeroReady(e){e.target.mute();const t=e.target.getIframe(),n=t.parentNode;window.addEventListener("resize",(function(){CLYT.resizeHero(t,n)})),CLYT.resizeHero(t,n),window.addEventListener("scroll",(function(){n.classList.contains("paused")||CLYT.determinePlayState(e,n)})),CLYT.determinePlayState(e,n);const o=n.querySelector(".overlay"),i=document.createElement("div");i.className="motionswitch",i.title="Pause",i.addEventListener("click",(function(){CLYT.heroControl(e,n,this)})),o.appendChild(i)}static onVideoReady(e){const t=e.target.getIframe(),n=t.parentNode;window.addEventListener("resize",(function(){CLYT.resizeVideo(t,n)})),CLYT.resizeVideo(t,n)}static heroControl(e,t,n){switch(e.target.getPlayerState()){default:case 1:e.target.pauseVideo(),t.classList.add("paused"),n.setAttribute("title","Play");break;case 2:e.target.playVideo(),t.classList.remove("paused"),n.setAttribute("title","Pause")}}static onHeroStateChange(e){const t=e.target.getPlayerState(),n=e.target.getIframe();switch(t){case 0:e.target.playVideo();break;case-1:case 1:window.innerWidth>750&&n.previousSibling.classList.add("unveil")}}static onHeroError(e){const t=e.target.getIframe();t.previousSibling.classList.remove("unveil"),t.parentNode.querySelector(".motionswitch").style.display="none"}static onVideoError(e){let t;const n=e.target.getIframe(),o=n.previousSibling,i=document.createElement("a");i.href="http://www.youtube.com/watch?v="+n.id,i.title="Try watching this video on YouTube";const r=document.createElement("img");r.src=o.getAttribute("src"),t=o.getAttribute("alt"),t||(t="Poster for video"),r.alt=t,i.appendChild(r);const s=document.getElementById(n.id);s&&n.parentNode.replaceChild(i,s)}static onVideoStateChange(e){const t=e.target.getPlayerState(),n=e.target.getIframe().parentNode.querySelector(".overlay");switch(t){case 1:case 3:null!==n&&n.classList.add("hidden");break;default:null!==n&&n.classList.remove("hidden")}}}