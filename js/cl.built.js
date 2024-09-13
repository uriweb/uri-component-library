/**
 * uri-component-library
 * 
 * --scripts--
 * 
 * @version v5.1.0
 * @author Brandon Fuller <bjcfuller@uri.edu>
 * @author John Pennypacker <jpennypacker@uri.edu>
 * @license GPL-3.0
 * @see https://www.uri.edu/wordpress
 */

!function(){"use strict";function e(e,t){let o,n,s;const i=window.innerHeight,a=window.innerWidth,r=window.pageYOffset;for(o=0;o<t;o++)n=e[o],s=(n.offset+r)/i,n.proper.style.height=i<.75*a&&i<675||s>.3?Math.max(.9*i,500)+"px":98-100*s+"vh"}window.addEventListener("load",(function(){let t,o;const n=[],s=document.querySelectorAll(".cl-abstract"),i=s.length;for(t=0;t<i;t++)o=s[t].querySelector(".cl-abstract-proper"),n.push({proper:o,offset:o.getBoundingClientRect().top});window.dispatchEvent(new Event("scroll")),e(n,i),window.addEventListener("resize",e.bind(null,n,i),!1)}),!1)}();class CLA11y{static hasNoMotion(){let e=!1;return CLA11y.arePrefsSaved()&&CLA11y.isSystemMotionPaused()&&(e=!0),e}static hasNoContrast(){let e=!1;return CLA11y.arePrefsSaved()&&CLA11y.isSystemContrastImproved()&&(e=!0),e}static arePrefsSaved(){let e=!1;return"1"===URICL.getCookie("uri-cl-accessibility-saved")&&(e=!0),e}static isSystemMotionPaused(){let e=!1;return"1"===URICL.getCookie("uri-cl-accessibility-motion")&&(e=!0),e}static isSystemContrastImproved(){let e=!1;return"1"===URICL.getCookie("uri-cl-accessibility-contrast")&&(e=!0),e}}!function(){"use strict";let e;function t(t){t.querySelector(".cl-accessibility-system-setting").addEventListener("click",(function(o){o.preventDefault(),function(t){let o;const n=["motion","contrast"];if(CLA11y.arePrefsSaved()){URICL.setCookie(e.settings.saved.key,"0",365);for(const t of n)URICL.setCookie(e.settings[t].key,"0",365);t.classList.toggle(e.classes.motion,e.body.classList.contains(e.classes.motion)),t.classList.toggle(e.classes.contrast,e.body.classList.contains(e.classes.contrast))}else{URICL.setCookie(e.settings.saved.key,"1",365);for(const s of n)o=t.classList.contains(e.classes[s])?"1":"0",URICL.setCookie(e.settings[s].key,o,365),"1"===o?e.body.classList.add(e.classes[s]):e.body.classList.remove(e.classes[s])}e.body.classList.toggle(e.classes.system)}(t)}),!1);const o=t.querySelector(".cl-accessibility-motion-control");CLA11y.hasNoMotion()&&t.classList.toggle(e.classes.motion),o.addEventListener("click",(function(o){o.preventDefault(),function(t){let o="0",n=!1;t.classList.toggle(e.classes.motion),t.classList.contains(e.classes.motion)&&(n=!0);if(CLA11y.arePrefsSaved()){e.body.classList.toggle(e.classes.motion)&&(o="1");for(const t of e.els)t.classList.toggle(e.classes.motion,n);URICL.setCookie(e.settings.motion.key,o,365)}}(t)}),!1);const n=t.querySelector(".cl-accessibility-contrast-control");CLA11y.hasNoContrast()&&t.classList.toggle(e.classes.contrast),n.addEventListener("click",(function(o){o.preventDefault(),function(t){let o="0",n=!1;t.classList.toggle(e.classes.contrast),t.classList.contains(e.classes.contrast)&&(n=!0);if(CLA11y.arePrefsSaved()){e.body.classList.toggle(e.classes.contrast)&&(o="1");for(const t of e.els)t.classList.toggle(e.classes.contrast,n);URICL.setCookie(e.settings.contrast.key,o,365)}}(t)}),!1)}window.addEventListener("load",(function(){e={body:document.getElementsByTagName("BODY")[0],els:document.querySelectorAll(".cl-has-accessibility-controls"),settings:{saved:{key:"uri-cl-accessibility-saved"},motion:{key:"uri-cl-accessibility-motion"},contrast:{key:"uri-cl-accessibility-contrast"}},classes:{system:"cl-accessibility-applied-site-wide",motion:"cl-accessibility-motion-paused",contrast:"cl-accessibility-contrast-improved"}},CLA11y.arePrefsSaved()&&e.body.classList.add(e.classes.system);CLA11y.isSystemMotionPaused()&&e.body.classList.add(e.classes.motion);CLA11y.isSystemContrastImproved()&&e.body.classList.add(e.classes.contrast);let o;const n=e.els.length;for(o=0;o<n;o++)t(e.els[o])}),!1)}();class CLCardVimeo{static onReady(e){window.addEventListener("resize",(function(){CLVimeo.resizeRelative(e)})),CLVimeo.resizeRelative(e),window.addEventListener("scroll",(function(){e.parent.classList.contains("paused")||CLVimeo.determinePlayState(e)})),CLVimeo.determinePlayState(e);e.parent.querySelector(".cl-accessibility-motion-control .cl-accessibility-control-button").addEventListener("click",(function(){CLCardVimeo.control(e)}))}static control(e){switch(e.state){default:case"playing":e.player.pause(),e.parent.classList.add("paused");break;case"paused":e.player.play(),e.parent.classList.remove("paused")}}static onStateChange(e){if("playing"===e.state)e.poster.classList.add("unveil")}static onError(e){e.poster.classList.remove("unveil")}static theatreControl(e){const t=e.parent.parentNode.parentNode,o={el:t.querySelector(".theatre-controls")};o.close=o.el.querySelector(".close"),o.close.addEventListener("click",CLCardVimeo.closeTheatre.bind(null,e),!1),t.parentNode.addEventListener("click",(function(t){CLCardVimeo.isClickAccessibilityRelated(t)||"close"!==t.target.className&&e.player.play()}),!1)}static closeTheatre(e){e.player.pause()}static isClickAccessibilityRelated(e){let t=!1;return(e.target.classList.contains("cl-accessibility-control")||e.target.classList.contains("cl-accessibility-control-button"))&&(t=!0),t}}!function(){"use strict";function e(e){e.addEventListener("click",(function(t){t.preventDefault(),CLCardVimeo.isClickAccessibilityRelated(t)||function(e){e.classList.toggle("theatre-open")}(e)}))}window.addEventListener("load",(function(){const t=document.querySelectorAll(".cl-card-theatre");for(let o=0;o<t.length;o++)e(t[o])}),!1)}(),function(){"use strict";function e(e){e.classList.add("has-js");const n=e.querySelector(".cl-date-content-wrapper");n.addEventListener("click",t.bind(null,e),!1);e.querySelector(".cl-date-download-confirm").addEventListener("click",o.bind(null,e,n),!1);e.querySelector(".cl-date-download-cancel").addEventListener("click",t.bind(null,e),!1);const s=e.getAttribute("data-hash");"downloaded"===URICL.getCookie("uri-cl-"+s)&&(e.classList.add("downloaded"),n.setAttribute("title","You've downloaded this date before. Check your downloads folder for an ICS file."))}function t(e){const t="dialogue";e.classList.contains("downloaded")||(e.classList.contains(t)?e.classList.remove(t):e.classList.add(t))}function o(e,o){const n=e.getAttribute("data-hash");e.classList.contains("downloaded")||(e.querySelector("form").submit(),t(e),e.classList.add("downloaded"),o.setAttribute("title","Check your downloads folder for an ICS file."),URICL.setCookie("uri-cl-"+n,"downloaded",.5))}window.addEventListener("DOMContentLoaded",(function(){let t;const o=document.querySelectorAll(".cl-date");for(t=0;t<o.length;t++)e(o[t])}),!1)}(),function(){"use strict";function e(e){const o=e.querySelector(".dismiss");if(null===o)return;o.addEventListener("click",t.bind(null,e),!1);const n=e.getAttribute("data-hash");"dismissed"===URICL.getCookie("uri-cl-"+n)&&t(e)}function t(e){const t=e.getAttribute("data-hash");e.classList.add("dismissed"),URICL.setCookie("uri-cl-"+t,"dismissed",30)}window.addEventListener("DOMContentLoaded",(function(){let t;const o=document.querySelectorAll(".cl-countdown, .cl-notice");for(t=0;t<o.length;t++)e(o[t])}),!1)}();class URICL{static checkSupport(){let e=!0;const t=navigator.userAgent,o=t.indexOf("MSIE "),n=t.indexOf("Trident/");return("Microsoft Internet Explorer"===navigator.appName||o>0||n>0)&&(e=!1),e}static setCookie(e,t,o){const n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3);const s="expires="+n.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}static getCookie(e){let t,o;const n=e+"=",s=document.cookie.split(";");for(t=0;t<s.length;t++){for(o=s[t];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(n))return o.substring(n.length,o.length)}return""}}let CLResizeSuperheroes,CLCreateYouTubePlayers,CLCreateVimeoPlayers;function onYouTubePlayerAPIReady(){CLCreateYouTubePlayers()}!function(){"use strict";window.addEventListener("load",(function(){(function(){let e,t,o,n;const s=document.getElementById("hero");s&&(e=s.querySelector(".overlay"),t=window.scrollY||window.pageYOffset,o=e.getBoundingClientRect().top+t,n=50,i(),window.addEventListener("scroll",(function(){i()})));function i(){const t=window.scrollY||window.pageYOffset,s=e.offsetHeight+o,i=Math.min(t/s*n,n);e.style.webkitBackdropFilter="blur("+i+"px)"}})(),function(){let e;URICL.checkSupport()&&(e=document.querySelectorAll(".cl-hero .poster[data-platform=youtube]"),window.addEventListener("resize",(function(){let t;if(window.innerWidth<750)for(t=0;t<e.length;t++)e[t].classList.remove("unveil");else for(t=0;t<e.length;t++)e[t].classList.add("unveil")})))}(),function(){let e;const t=[],o=document.querySelectorAll(".cl-hero.super .cl-hero-proper"),n=o.length;for(e=0;e<n;e++)t.push({el:o[e],offset:o[e].getBoundingClientRect().top});CLResizeSuperheroes=function(o){let s,i;const a=window.innerHeight,r=window.innerWidth,l=window.scrollY||window.pageYOffset;for(e=0;e<n;e++)s=t[e],!1!==o&&(s.offset=s.el.getBoundingClientRect().top),i=(s.offset+l)/a,s.el.style.height=a<.75*r&&a<675||i>.3?Math.max(.9*a,500)+"px":98-100*i+"vh"},window.dispatchEvent(new Event("scroll")),CLResizeSuperheroes(!1),window.addEventListener("resize",CLResizeSuperheroes.bind(null,!1),!1)}()}),!1)}(),function(){"use strict";const e="reveal";function t(t,o,n){t.addEventListener("click",(function(t){t.preventDefault(),function(t,o){let n;const s=o.classList.contains(e);for(n=0;n<t.length;n++)t[n].classList.remove(e);s||o.classList.add(e)}(o,n)}))}window.addEventListener("load",(function(){let e,o,n,s,i,a;const r=document.querySelectorAll(".cl-menu");for(n=0;n<r.length;n++)e=document.createElement("span"),e.className="cl-menu-toggle","0"===r[n].getAttribute("data-show-title")&&e.classList.add("hidden"),e.innerHTML=r[n].getAttribute("data-name"),e.addEventListener("click",(function(){this.classList.contains("active")?this.classList.remove("active"):this.classList.add("active")})),o=r[n].querySelector(".cl-menu-list"),o.classList.remove("cl-menu-list-no-js"),r[n].insertBefore(e,o),r[n].classList.add("cl-menu-js");const l=document.querySelectorAll(".cl-menu-list ul");for(n=0;n<l.length;n++)i=document.createElement("span"),i.className="cl-menu-arrow",l[n].parentNode.append(i),s=l[n].parentNode.querySelector("a"),a=document.createElement("li"),a.appendChild(s.cloneNode(!0)),l[n].insertBefore(a,l[n].firstChild),s.classList.add("cl-menu-trigger"),t(s,l,l[n])}),!1)}(),function(){"use strict";function e(e){let t,o;for(t=0;t<e.length;t++)if(o={},o.el=e[t],o.num=o.el.querySelector("span"),o.w=o.num.clientWidth,o.fs=window.getComputedStyle(o.num).getPropertyValue("font-size"),o.sw=o.num.scrollWidth,o.mfs=o.el.getAttribute("data-font-max"),o.nfs=o.fs.match(/\d+/)[0],o.sw>o.w)for(o.num.classList.add("autosized");o.sw>o.w;)o.nfs--,o.num.style.fontSize=o.nfs+"px",o.sw=o.num.scrollWidth;else if(o.num.classList.contains("autosized"))for(;o.sw===o.w&&o.nfs<o.mfs;)o.nfs++,o.num.style.fontSize=o.nfs+"px",o.sw=o.num.scrollWidth}window.addEventListener("load",(function(){let t;const o=document.querySelectorAll(".cl-metric");if(o.length>0){for(t=0;t<o.length;t++)o[t].setAttribute("data-font-max",window.getComputedStyle(o[t].querySelector("span")).getPropertyValue("font-size").match(/\d+/)[0]);e(o),window.addEventListener("resize",e.bind(null,o))}}),!1)}(),function(){"use strict";function e(e,t){const o=t.querySelector(".cl-overlay-block");o.classList.contains("hidden")?(o.classList.remove("hidden"),t.style.height="auto",e.title="Hide story"):(t.style.height=t.offsetHeight+"px",o.classList.add("hidden"),e.title="Show story")}window.addEventListener("load",(function(){let t,o;const n=document.querySelectorAll(".cl-overlay");for(t=0;t<n.length;t++)o=document.createElement("div"),o.className="cl-overlay-slider",o.innerHTML='<div class="cl-overlay-prompter"></div>',o.title="Hide story",o.addEventListener("click",e.bind(null,o,n[t]),!1),n[t].querySelector(".cl-overlay-block").appendChild(o)}),!1)}(),function(){"use strict";const e={heroes:{vimeo:{},yt:{}},videos:{vimeo:{},yt:{}},cards:{vimeo:{}},cardFeatures:{vimeo:{}}};function t(e,t,o,n){t.player=new Vimeo.Player(e,o),t.player.on("loaded",(function(){t.state="loaded",n.onReady(t)})),t.player.on("bufferstart",(function(){t.state="buffering",n.onStateChange(t)})),t.player.on("play",(function(){t.state="playing",n.onStateChange(t)})),t.player.on("pause",(function(){t.state="paused",n.onStateChange(t)})),t.player.on("ended",(function(){t.state="ended",n.onStateChange(t)})),t.player.on("error",n.onError.bind(null,t))}window.addEventListener("load",(function(){let t,o,n,s,i,a,r,l,c=!1,d=!1;const u=document.querySelectorAll(".cl-hero .poster"),f=document.querySelectorAll(".cl-video .poster"),m=document.querySelectorAll(".cl-card .cl-card-container.video .poster");if(URICL.checkSupport())for(t=0;t<u.length;t++)o=u[t],s=o.parentNode,i={parent:s,poster:o,state:"init",w:s.offsetWidth,h:s.offsetHeight},a=o.getAttribute("data-video"),r=o.getAttribute("data-platform"),n=o.getAttribute("id"),"youtube"===r&&(c=!0,e.heroes.yt[n]=i,e.heroes.yt[n].src=a),"vimeo"===r&&(d=!0,e.heroes.vimeo[n]=i,e.heroes.vimeo[n].src=a),o.removeAttribute("id"),l=document.createElement("div"),l.id=n,s.appendChild(l);for(t=0;t<f.length;t++)o=f[t],i={parent:o.parentNode,poster:o,state:"init"},a=o.getAttribute("data-video"),r=o.getAttribute("data-platform"),n=o.getAttribute("id"),"youtube"===r&&(e.videos.yt[n]=i,e.videos.yt[n].src=a,c=!0),"vimeo"===r&&(e.videos.vimeo[n]=i,e.videos.vimeo[n].src=a,e.videos.vimeo[n].showinfo=o.getAttribute("data-showinfo"),d=!0);for(t=0;t<m.length;t++)o=m[t],s=o.parentNode,i={parent:s,poster:o,state:"init"},a=o.getAttribute("data-video"),r=o.getAttribute("data-platform"),n=o.getAttribute("id"),d=!0,e.cards.vimeo[n]=i,e.cards.vimeo[n].src=a,o.removeAttribute("id"),l=document.createElement("div"),l.id=n,s.appendChild(l);c&&CLYT.loadYouTubeAPI();d&&CLVimeo.loadVimeoAPI()}),!1),CLCreateVimeoPlayers=function(){let o,n,s,i,a;for(o in e.heroes.vimeo)n=e.heroes.vimeo[o],s={url:n.src,background:!0,autoplay:!0,width:n.w,height:n.h},a={onReady:CLHeroVimeo.onReady,onStateChange:CLHeroVimeo.onStateChange,onError:CLHeroVimeo.onError},t(o,n,s,a);for(o in e.videos.vimeo)n=e.videos.vimeo[o],i="1"===n.showinfo,s={url:n.src,byline:i,title:i,portrait:i},a={onReady:CLVideoVimeo.onReady,onStateChange:CLVideoVimeo.onStateChange,onError:CLVideoVimeo.onError},t(o,n,s,a);for(o in e.cards.vimeo)n=e.cards.vimeo[o],s={url:n.src,background:!0,autoplay:!0},a={onReady:CLCardVimeo.onReady,onStateChange:CLCardVimeo.onStateChange,onError:CLCardVimeo.onError},t(o,n,s,a)},CLCreateYouTubePlayers=function(){let t,o;for(t in e.heroes.yt)o=e.heroes.yt[t],o.player=new YT.Player(t,{width:o.w,height:o.h,videoId:o.src,playerVars:{autoplay:1,controls:0,showinfo:0,modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:CLYT.onHeroReady,onStateChange:CLYT.onHeroStateChange,onError:CLYT.onHeroError}});for(t in e.videos.yt)o=e.videos.yt[t],o.player=new YT.Player(t,{videoId:o.src,playerVars:{autoplay:0,controls:1,showinfo:0,color:"white",modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:CLYT.onVideoReady,onStateChange:CLYT.onVideoStateChange,onError:CLYT.onVideoError}})}}(),function(){"use strict";const e=[];function t(t){let s,i,r;const l=[],c=t.querySelectorAll("figure");for(s=0;s<c.length;s++)i={},i.img=c[s].querySelector("img"),r=c[s].querySelector("figcaption"),r&&(i.caption=r.innerHTML),l.push(i);!function(t,s){let i,r,l,c;const d=document.createElement("div");d.className="cl-slideshow";const u=document.createElement("div");u.className="carousel-wrapper",d.appendChild(u);const f=document.createElement("div");f.className="carousel transitions",f.setAttribute("style","grid-template-columns: repeat("+s.length+",100%)"),u.appendChild(f);const m=document.createElement("div");for(m.className="counter",d.appendChild(m),c=0;c<s.length;c++)i=document.createElement("div"),i.className="slide",r=document.createElement("figure"),r.appendChild(s[c].img),l=document.createElement("figcaption"),l.innerHTML=s[c].caption?s[c].caption:"",r.appendChild(l),i.appendChild(r),f.appendChild(i);const p={el:f,counter:m,n:s.length};f.addEventListener("scroll",a.bind(null,p),!1),u.appendChild(function(e){let t,n,s;const i=document.createElement("div");i.className="controls";const a=["Previous","Next"];for(s in a)t=document.createElement("div"),t.className="target "+a[s].toLowerCase(),t.title=a[s],t.addEventListener("click",o.bind(null,e,a[s],!1)),n=document.createElement("div"),n.className="controller",t.appendChild(n),i.appendChild(t);return i}(p)),e.push(p),n(p,0,"auto"),t.parentNode.replaceChild(d,t)}(t,l)}function o(e,t,o){let s;s=e.el.getAttribute("data-position");const i=e.el.children.length-1;if(e.el.classList.remove("reboundLeft","reboundRight"),"Next"===t){if(s++,s>i){if(!o)return e.el.offsetWidth,void e.el.classList.add("reboundRight");s--}}else if(s--,s<0){if(!o)return e.el.offsetWidth,void e.el.classList.add("reboundLeft");s++}n(e,s,"smooth")}function n(e,t,o){e.el.scroll({top:0,left:e.el.offsetWidth*t,behavior:o}),e.el.setAttribute("data-position",t),s(e,t),i(e,t)}function s(e,t){e.counter.innerHTML="<span>"+(1*t+1)+"</span> of "+e.n}function i(e,t){let o;const n=e.el.querySelectorAll(".slide");for(o=0;o<e.n;o++)n[o].classList.remove("active");n[t].classList.add("active")}function a(e){const t=e.el.scrollLeft/e.el.offsetWidth;Number.isInteger(t)&&(e.el.setAttribute("data-position",t),s(e,t),i(e,t))}function r(){let t;for(t=0;t<e.length;t++)n(e[t],e[t].el.getAttribute("data-position"),"auto")}window.addEventListener("load",(function(){let e;const o=document.querySelectorAll(".gallery.gallery-size-full, .wp-block-gallery.columns-1");for(e=0;e<o.length;e++)t(o[e]);window.addEventListener("resize",r,!1)}),!1)}(),function(){"use strict";function e(e,s){let i,a,r,l,c,d;e.classList.add("cl-tabs-js");const u=e.querySelectorAll(".cl-tab"),f=document.createElement("ul");for(f.setAttribute("role","tablist"),d=0,c=0;c<u.length;c++)d++,i=u[c].querySelector("h1"),i?i=i.innerHTML:(i=u[c].querySelector("h2"),i=i?i.innerHTML:"Section "+d),a=u[c].id,""===a&&(a="cl-tabs-"+s+"-tab-section-"+d,u[c].id=a),r=document.createElement("li"),r.setAttribute("role","presentation"),l=document.createElement("a"),l.href="#"+a,l.id="cl-tabs-"+s+"-tab-"+d,l.setAttribute("role","tab"),l.setAttribute("tabindex","-1"),l.innerHTML=i,r.appendChild(l),f.appendChild(r);e.insertBefore(f,u[0]);const m=f.querySelectorAll("a");for(c=0;c<m.length;c++)m[c].addEventListener("click",(function(e){t(e,m,f,u)})),m[c].addEventListener("keydown",(function(e){o(e,m,u)}));for(c=0;c<u.length;c++)u[c].setAttribute("role","tabpanel"),u[c].setAttribute("tabindex","-1"),u[c].setAttribute("aria-labelledby",m[c].id),u[c].hidden=!0;m[0].removeAttribute("tabindex"),m[0].setAttribute("aria-selected","true"),u[0].hidden=!1;const p=function(e){let t,o;const n=document.URL.split("#");o=null,n.length>1&&(t=e.querySelector("#"+n[1]),null!==t&&(o=document.getElementById(t.getAttribute("aria-labelledby"))));return o}(e);null!==p&&n(m,u,f.querySelector("[aria-selected]"),p)}function t(e,t,o,s){e.preventDefault();const i=o.querySelector("[aria-selected]");e.currentTarget!==i&&n(t,s,i,e.currentTarget)}function o(e,t,o){let s;const i=Array.prototype.indexOf.call(t,e.currentTarget);s=37===e.which?i-1:39===e.which?i+1:40===e.which?"down":null,null!==s&&(e.preventDefault(),"down"===s?o[i].focus():t[s]&&n(t,o,e.currentTarget,t[s]))}function n(e,t,o,n){n.focus(),n.removeAttribute("tabindex"),n.setAttribute("aria-selected","true"),o.removeAttribute("aria-selected"),o.setAttribute("tabindex","-1");const s=Array.prototype.indexOf.call(e,n);t[Array.prototype.indexOf.call(e,o)].hidden=!0,t[s].hidden=!1}window.addEventListener("load",(function(){let t;const o=document.querySelectorAll(".cl-tabs");for(t=0;t<o.length;t++)e(o[t],t+1)}),!1)}();class CLVimeo{static loadVimeoAPI(){const e=document.createElement("script");e.src="https://player.vimeo.com/api/player.js";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),e.addEventListener("load",CLCreateVimeoPlayers,!1)}static determinePlayState(e){if(CLA11y.hasNoMotion())return e.player.pause(),!1;if(e.parent.parentNode.classList.contains("cl-accessibility-motion-paused"))return!1;const t=window.innerHeight,o=window.scrollY||window.pageYOffset,n=e.parent.offsetHeight,s=e.parent.getBoundingClientRect().top+o;t+o<s||o>s+n?e.player.pause():e.player.play()}static resizeRelative(e){let t=e.parent.offsetWidth;const o=e.parent.querySelector("iframe"),n=e.parent.offsetHeight;t/n>16/9?(o.style.height=9*t/16+"px",o.style.width="100%",o.style.left=0,o.style.top=(n-9*t/16)/2+"px",o.style.marginLeft=0):(t=16*n/9,o.style.height="100%",o.style.width=t+"px",o.style.left=0-t/2+"px",o.style.top=0,o.style.marginLeft="50%")}static resizeProportionate(e){e.player.element.setAttribute("height",e.parent.offsetWidth/e.ratio)}}class CLHeroVimeo{static onReady(e){window.addEventListener("resize",(function(){CLVimeo.resizeRelative(e)})),CLVimeo.resizeRelative(e),window.addEventListener("scroll",CLVimeo.determinePlayState.bind(null,e),!1),CLVimeo.determinePlayState(e);e.parent.querySelector(".cl-accessibility-motion-control").addEventListener("click",(function(){CLHeroVimeo.control(e)}))}static control(e){switch(e.state){default:case"playing":e.player.pause();break;case"loaded":case"paused":e.player.play()}}static onStateChange(e){if("playing"===e.state)e.poster.classList.add("unveil")}static onError(e){e.poster.classList.remove("unveil")}}class CLVideoVimeo{static onReady(e){e.poster.querySelector("img").style.display="none",e.ratio=e.player.element.width/e.player.element.height,window.addEventListener("resize",(function(){CLVimeo.resizeProportionate(e)})),CLVimeo.resizeProportionate(e),e.parent.classList.contains("cl-card-feature-video")&&CLCardVimeo.theatreControl(e)}static onError(e){let t;const o=document.createElement("a");o.href=e.src,o.title="Try watching this video on Vimeo";const n=document.createElement("img");n.src=e.poster.getAttribute("src"),t=e.poster.getAttribute("alt"),t||(t="Poster for video"),n.alt=t,o.appendChild(n),e.parent.replaceChild(o,e.player.element)}static onStateChange(e){const t=e.parent.querySelector(".overlay");switch(e.state){case"playing":case"buffering":t.classList.add("hidden");break;default:t.classList.remove("hidden")}}}!function(){"use strict";window.addEventListener("load",(function(){const e=document.querySelectorAll(".cl-wave"),t=window.scrollY||window.pageYOffset;window.addEventListener("scroll",(function(){!function(e,t){let o,n;const s=(window.scrollY||window.pageYOffset)-t;for(o=0;o<e.length;o++)n=e[o],n.firstElementChild.style.backgroundPositionX=s+"px",n.lastElementChild.style.backgroundPositionX=s+"px"}(e,t)}))}),!1)}();class CLYT{static loadYouTubeAPI(){const e=document.createElement("script");e.src="https://www.youtube.com/player_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}static resizeHero(e,t){let o=t.offsetWidth;const n=t.offsetHeight;o/n>16/9?(e.style.height=9*o/16+"px",e.style.width="100%",e.style.left=0,e.style.top=(n-9*o/16)/2+"px",e.style.marginLeft=0):(o=16*n/9,e.style.height="100%",e.style.width=o+"px",e.style.left=0-o/2+"px",e.style.top=0,e.style.marginLeft="50%")}static resizeVideo(e,t){e.style.height=t.offsetWidth/(e.width/e.height)+"px"}static determinePlayState(e,t){if(CLA11y.hasNoMotion())return e.target.pauseVideo(),!1;if(t.parentNode.classList.contains("cl-accessibility-motion-paused"))return!1;const o=window.innerHeight,n=window.scrollY||window.pageYOffSet,s=t.offsetHeight,i=t.getBoundingClientRect().top+n;o+n<i||n>i+s?e.target.pauseVideo():e.target.playVideo()}static onHeroReady(e){e.target.mute();const t=e.target.getIframe(),o=t.parentNode;window.addEventListener("resize",(function(){CLYT.resizeHero(t,o)})),CLYT.resizeHero(t,o),window.addEventListener("scroll",CLYT.determinePlayState.bind(null,e,o),!1),CLYT.determinePlayState(e,o);o.querySelector(".cl-accessibility-motion-control").addEventListener("click",(function(){CLYT.heroControl(e,o)}))}static onVideoReady(e){const t=e.target.getIframe(),o=t.parentNode;window.addEventListener("resize",(function(){CLYT.resizeVideo(t,o)})),CLYT.resizeVideo(t,o)}static heroControl(e,t){switch(e.target.getPlayerState()){default:case 1:e.target.pauseVideo(),t.classList.add("paused");break;case 2:e.target.playVideo(),t.classList.remove("paused")}}static onHeroStateChange(e){const t=e.target.getPlayerState(),o=e.target.getIframe();switch(t){case 0:e.target.playVideo();break;case-1:case 1:window.innerWidth>750&&o.previousSibling.classList.add("unveil")}}static onHeroError(e){e.target.getIframe().previousSibling.classList.remove("unveil")}static onVideoError(e){let t;const o=e.target.getIframe(),n=o.previousSibling,s=document.createElement("a");s.href="http://www.youtube.com/watch?v="+o.id,s.title="Try watching this video on YouTube";const i=document.createElement("img");i.src=n.getAttribute("src"),t=n.getAttribute("alt"),t||(t="Poster for video"),i.alt=t,s.appendChild(i);const a=document.getElementById(o.id);a&&o.parentNode.replaceChild(s,a)}static onVideoStateChange(e){const t=e.target.getPlayerState(),o=e.target.getIframe().parentNode.querySelector(".overlay");switch(t){case 1:case 3:null!==o&&o.classList.add("hidden");break;default:null!==o&&o.classList.remove("hidden")}}}