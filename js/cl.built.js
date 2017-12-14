function onYouTubePlayerAPIReady(){uriCreateYouTubePlayers()}!function(){"use strict";function e(){t(),n(),r()}function t(){for(var e=document.querySelectorAll(".cl-hero .dynamic"),t=0;t<e.length;t++)e[t].style.backgroundPositionX="100%",e[t].style.backgroundPositionY=0}function n(){function e(){var e=window.pageYOffset,t=n.offsetHeight+a,r=Math.min(e/t*i,i);n.style.webkitBackdropFilter="blur("+r+"px)"}var t=document.getElementById("hero");if(t){var n=t.querySelector(".overlay"),r=window.pageYOffset,a=n.getBoundingClientRect().top+r,i=50;e(),window.addEventListener("scroll",function(){e()})}}function r(){var e=document.querySelectorAll(".cl-hero .poster");window.addEventListener("resize",function(){var t;if(window.innerWidth<750)for(t=0;t<e.length;t++)e[t].classList.remove("unveil");else for(t=0;t<e.length;t++)e[t].classList.add("unveil")})}window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e,t=document.querySelectorAll(".cl-menu ul");for(e=0;e<t.length;e++)t[e].style.display="none";var n=document.querySelectorAll(".cl-menu span");for(e=0;e<n.length;e++){var r=n[e];r.addEventListener("click",function(){var e=this.parentNode.querySelector("ul"),t=this.querySelector(".arrow");e.style.display="none"===e.style.display?"block":"none",t.classList.contains("on")?t.classList.remove("on"):t.classList.add("on")});var a=document.createElement("div");a.className="arrow",r.appendChild(a)}}window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e,n;for(e=document.querySelectorAll(".gallery.gallery-size-full"),n=0;n<e.length;n++)t(e[n])}function t(e){var t,r,a,i,o=[];for(t=e.querySelectorAll("figure"),r=0;r<t.length;r++)a={},a.img=t[r].querySelector("img"),i=t[r].querySelector("figcaption"),i&&(a.caption=i.innerHTML),o.push(a);n(e,o)}function n(e,t){var n,a,o,l,s,d,c,u;for(n=document.createElement("div"),n.className="cl-slideshow",a=document.createElement("div"),a.className="carousel-wrapper",n.appendChild(a),o=document.createElement("ul"),o.className="carousel transitions",a.appendChild(o),l=document.createElement("ul"),l.className="captions",n.appendChild(l),s=document.createElement("div"),s.className="counter",s.innerHTML="<span></span> of "+t.length,n.appendChild(s),u=0;u<t.length;u++)d=document.createElement("li"),d.className="slide",d.appendChild(t[u].img),o.appendChild(d),c=document.createElement("li"),c.className="caption",c.innerHTML=t[u].caption?t[u].caption:"",l.appendChild(c);a.appendChild(r(o)),i(o,0),e.parentNode.replaceChild(n,e)}function r(e){var t,n,r,i,l;t=document.createElement("div"),t.className="controls",n=["Previous","Next"];for(l in n)r=document.createElement("div"),r.className="target "+n[l].toLowerCase(),r.title=n[l],r.addEventListener("click",a.bind(null,e,n[l],!1)),i=document.createElement("div"),i.className="controller",r.appendChild(i),t.appendChild(r);return o(t,e),t}function a(e,t,n){var r,a;if(r=e.getAttribute("data-position"),a=e.children.length-1,e.classList.remove("reboundLeft","reboundRight"),"Next"==t){if(++r>a){if(!n)return e.offsetWidth,void e.classList.add("reboundRight");r--}}else if(--r<0){if(!n)return e.offsetWidth,void e.classList.add("reboundLeft");r++}i(e,r)}function i(e,t){var n,r,a,i;e.style.transform="translateX(-"+100*t+"%)",e.setAttribute("data-position",t),n=e.parentNode.parentNode,r=n.querySelector(".captions .active"),r&&r.classList.remove("active"),a=n.querySelectorAll(".caption"),a[t].classList.add("active"),i=n.querySelector(".counter span"),i.innerHTML=t+1}function o(e,t){var n,r;n=0,r=0,e.addEventListener("touchstart",function(e){t.classList.remove("transitions");var r=e.changedTouches[0];n=parseInt(r.clientX),e.preventDefault()},!1),e.addEventListener("touchmove",function(e){var a,i,o,l;a=e.changedTouches[0],i=parseInt(a.clientX)-n-r,r=parseInt(a.clientX)-n,o=i<0?-1:1,l=t.style.transform.replace("translateX(","").replace("%)",""),t.style.transform="translateX("+(parseInt(l)+o)+"%)",e.preventDefault()},!1),e.addEventListener("touchend",function(e){t.classList.add("transitions");var n=t.offsetWidth;parseInt(t.getAttribute("data-position"));r>.25*n?a(t,"Previous",!0):r<n*-.25?a(t,"Next",!0):i(t,parseInt(t.getAttribute("data-position"))),e.preventDefault()},!1)}window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e=document.querySelector(".cl-tabs"),t=e.querySelector("ul"),n=t.querySelectorAll("a"),r=e.querySelectorAll('[id^="cl-tab-section"]'),a=function(e,t){t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),e.removeAttribute("aria-selected"),e.setAttribute("tabindex","-1");var a=Array.prototype.indexOf.call(n,t),i=Array.prototype.indexOf.call(n,e);r[i].hidden=!0,r[a].hidden=!1};t.setAttribute("role","tablist"),Array.prototype.forEach.call(n,function(e,i){e.setAttribute("role","tab"),e.setAttribute("id","tab"+(i+1)),e.setAttribute("tabindex","-1"),e.parentNode.setAttribute("role","presentation"),e.addEventListener("click",function(e){e.preventDefault();var n=t.querySelector("[aria-selected]");e.currentTarget!==n&&a(n,e.currentTarget)}),e.addEventListener("keydown",function(e){var t=Array.prototype.indexOf.call(n,e.currentTarget),o=37===e.which?t-1:39===e.which?t+1:40===e.which?"down":null;null!==o&&(e.preventDefault(),"down"===o?r[i].focus():n[o]&&a(e.currentTarget,n[o]))})}),Array.prototype.forEach.call(r,function(e,t){e.setAttribute("role","tabpanel"),e.setAttribute("tabindex","-1");e.getAttribute("id");e.setAttribute("aria-labelledby",n[t].id),e.hidden=!0}),n[0].removeAttribute("tabindex"),n[0].setAttribute("aria-selected","true"),r[0].hidden=!1}window.addEventListener("load",e,!1)}(),function(){"use strict";function e(){var e,n;e=document.querySelectorAll(".cl-wave"),n=window.pageYOffset,window.addEventListener("scroll",function(){t(e,n)})}function t(e,t){var n,r,a,i,o;for(n=window.pageYOffset,r=n-t,i=0;i<e.length;i++)o=e[i],a=o.firstElementChild.style.backgroundPositionX.split("px")[0],a+=r,o.firstElementChild.style.backgroundPositionX=r+"px",o.lastElementChild.style.backgroundPositionX=r+"px"}window.addEventListener("load",e,!1)}();var uriCreateYouTubePlayers;!function(){"use strict";function e(){var e,r,a,i,o=!1,l=t(),s=document.querySelectorAll(".cl-hero .poster");if(l)for(i=0;i<s.length;i++){e=s[i],r=e.getAttribute("id"),a=e.parentNode;var d=e.getAttribute("data-start"),c=e.getAttribute("data-end");f[r]={poster:e,parent:a,ytid:e.getAttribute("data-id"),w:a.offsetWidth,h:a.offsetHeight,start:d||0,end:c||-1},e.removeAttribute("id");var u=document.createElement("div");u.id=r,a.appendChild(u),o=!0}var p=document.querySelectorAll(".cl-video img");for(i=0;i<p.length;i++){e=p[i],r=e.getAttribute("id");var h=16/9;e.getAttribute("data-aspect")&&(h=e.getAttribute("data-aspect").split(":"),h=h[0]/h[1]),v[r]={poster:e,ytid:e.getAttribute("data-id"),parent:e.parentNode,aspect:h},o=!0}o&&n()}function t(){var e=!0,t=navigator.userAgent,n=t.indexOf("MSIE "),r=t.indexOf("Trident/");return("Microsoft Internet Explorer"==navigator.appName||n>0||r>0)&&(e=!1),e}function n(){var e=document.createElement("script");e.src="https://www.youtube.com/player_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}function r(e,t){var n=t.offsetWidth,r=t.offsetHeight;n/r>16/9?(e.style.height=9*n/16+"px",e.style.width="100%",e.style.left=0,e.style.top=(r-9*n/16)/2+"px",e.style.marginLeft=0):(n=16*r/9,e.style.height="100%",e.style.width=n+"px",e.style.left=0-n/2+"px",e.style.top=0,e.style.marginLeft="50%")}function a(e,t,n){t.style.height=n.offsetWidth/v[e].aspect+"px"}function i(e,t){var n=window.innerHeight,r=window.pageYOffset,a=t.offsetHeight,i=t.getBoundingClientRect().top+r;n+r<i||r>i+a?e.target.pauseVideo():e.target.playVideo()}function o(e){e.target.mute();var t=e.target.getIframe(),n=f[e.target.a.id].parent;window.addEventListener("resize",function(){r(t,n)}),r(t,n),window.addEventListener("scroll",function(){n.classList.contains("paused")||i(e,n)}),i(e,n);var a=n.querySelector(".overlay"),o=document.createElement("div");o.className="motionswitch",o.title="Pause",o.addEventListener("click",function(){s(e,n,this)}),a.appendChild(o)}function l(e){var t=e.target.getIframe(),n=e.target.a.id,r=v[n].parent;window.addEventListener("resize",function(){a(n,t,r)}),a(n,t,r)}function s(e,t,n){switch(e.target.getPlayerState()){default:case 1:e.target.pauseVideo(),t.classList.add("paused"),n.setAttribute("title","Play");break;case 2:e.target.playVideo(),t.classList.remove("paused"),n.setAttribute("title","Pause")}}function d(e){switch(e.target.getPlayerState()){case 0:e.target.playVideo();break;case-1:case 1:window.innerWidth>750&&f[e.target.a.id].poster.classList.add("unveil")}}function c(e){f[e.target.a.id].poster.classList.remove("unveil"),f[e.target.a.id].parent.querySelector(".motionswitch").style.display="none"}function u(e){var t,n,r,a;t=v[e.target.a.id],n=document.createElement("a"),n.href="http://www.youtube.com/watch?v="+t.ytid,n.title="Try watching this video on YouTube",r=document.createElement("img"),r.src=t.poster.getAttribute("src"),a=t.poster.getAttribute("alt"),a||(a="Poster for video"),r.alt=a,n.appendChild(r);var i=document.getElementById(e.target.a.id);i&&t.parent.replaceChild(n,i)}function p(e){var t=e.target.getPlayerState(),n=e.target.a.id,r=v[n].parent.querySelector(".overlay");switch(t){case 1:case 3:r.classList.add("hidden");break;default:r.classList.remove("hidden")}}var f={},v={};window.addEventListener("load",e,!1),uriCreateYouTubePlayers=function(){var e,t;for(e in f)t=f[e],t.player=new YT.Player(e,{width:t.w,height:t.h,videoId:t.ytid,playerVars:{autoplay:1,controls:0,showinfo:0,start:t.start,end:t.end,modestbranding:1,iv_load_policy:3,rel:0},events:{onReady:o,onStateChange:d,onError:c}});for(e in v)t=v[e],t.player=new YT.Player(e,{videoId:t.ytid,playerVars:{autoplay:0,controls:1,showinfo:0,color:"white",modestbranding:1,iv_load_policy:3},events:{onReady:l,onStateChange:p,onError:u}})}}();