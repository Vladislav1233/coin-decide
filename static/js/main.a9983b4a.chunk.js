(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=t.threshold||1,n=t.timeout||1e3;t&&(this.options={threshold:a,timeout:n}),this.hasDeviceMotion="ondevicemotion"in window,this.lastTime=null,this.lastX=null,this.lastY=null,this.lastZ=null,"function"===typeof CustomEvent?this.event=new CustomEvent("shake",{bubbles:!0,cancelable:!0}):(this.event=document.createEvent("Event"),this.event.initEvent("shake",!0,!0)),this.handleDeviceMotion=this.handleDeviceMotion.bind(this)}return n(e,[{key:"reset",value:function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null}},{key:"start",value:function(){this.reset(),this.hasDeviceMotion&&window.addEventListener("devicemotion",this.handleDeviceMotion,!1)}},{key:"stop",value:function(){this.hasDeviceMotion&&window.removeEventListener("devicemotion",this.handleDeviceMotion,!1),this.reset()}},{key:"handleDeviceMotion",value:function(e){var t,a,n,c=e.accelerationIncludingGravity;if(null===this.lastX&&null===this.lastY&&null===this.lastZ)return this.lastX=c.x,this.lastY=c.y,void(this.lastZ=c.z);t=Math.abs(this.lastX-c.x),a=Math.abs(this.lastY-c.y),n=Math.abs(this.lastZ-c.z),(t>this.options.threshold&&a>this.options.threshold||t>this.options.threshold&&n>this.options.threshold||a>this.options.threshold&&n>this.options.threshold)&&(new Date).getTime()-this.lastTime.getTime()>this.options.timeout&&(this.event.acceleration={deltaX:t,deltaY:a,deltaZ:n},window.dispatchEvent(this.event),this.lastTime=new Date),this.lastX=c.x,this.lastY=c.y,this.lastZ=c.z}}]),e}();t.default=c},,,,function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),l=a.n(i),r=(a(20),a(1)),s=a(2),o=a(4),m=a(3),h=a(5),u=a(32),p=a(10),d=a.n(p),F=function(){function e(t){Object(r.a)(this,e),this.ctx=t.ctx,this.image=t.image,this.countLoop=0,this.frameIndex=0,this.tickCount=0,this.ticksPerFrame=t.ticksPerFrame||0,this.numberOfFrames=t.numberOfFrames||1,this.width=t.width,this.height=t.height,this.stopAfterFlipping=t.stopAfterFlipping,this.start()}return Object(s.a)(e,[{key:"update",value:function(){this.tickCount++,this.tickCount>this.ticksPerFrame&&(this.tickCount=0,this.frameIndex<this.numberOfFrames-1?this.frameIndex++:(this.frameIndex=0,this.countLoop++,this.ticksPerFrame++))}},{key:"render",value:function(){this.ctx.clearRect(0,0,this.width/this.numberOfFrames,this.height),this.ctx.drawImage(this.image,this.frameIndex*this.width/this.numberOfFrames,0,this.width/this.numberOfFrames,this.height,0,0,this.width/this.numberOfFrames,this.height)}},{key:"start",value:function(){var e=this;window.requestAnimationFrame(function t(){e.update(),e.render(),e.countLoop<=20?window.requestAnimationFrame(t):e.stopAfterFlipping&&e.stopAfterFlipping()})}}]),e}(),f=function(e,t,a){var n=document.getElementById("canvas");n.width=100,n.height=100;var c=new Image;c.src="http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/downloads/sprite-animation-demo/images/coin-sprite-animation.png";new F({ctx:n.getContext("2d"),image:c,width:1e3,height:100,numberOfFrames:e||0,ticksPerFrame:t||0,stopAfterFlipping:a})},v=a(7),E=(a(21),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.tagName,n=e.onClick,i=a;return c.a.createElement(i,{className:"b-button",onClick:n},t)}}]),t}(n.Component));E.defaultProps={tagName:"button"};var b=E,y=(a(22),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).onClickFlip=function(){f(10,-15,a.props.stopFlipping)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=v.isMobileOnly?"\u041f\u043e\u0442\u0440\u044f\u0441\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438 \u043c\u043e\u043d\u0435\u0442\u043a\u0430 \u0440\u0435\u0448\u0438\u0442 \u0432 \u043a\u0430\u043a\u043e\u043c \u0431\u0430\u0440\u0435 \u0442\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0448\u044c \u0441\u043a\u0438\u0434\u043a\u0443 \u0438 \u0442\u0443\u0441\u0438\u0448\u044c.":"...\u0438 \u043e\u043d\u0430 \u0440\u0435\u0448\u0438\u0442 \u0432 \u043a\u0430\u043a\u043e\u043c \u0431\u0430\u0440\u0435 \u0442\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0448\u044c \u0441\u043a\u0438\u0434\u043a\u0443 \u0438 \u0442\u0443\u0441\u0438\u0448\u044c.";return c.a.createElement("div",{className:"b-screen-coin"},!v.isMobileOnly&&c.a.createElement("div",{className:"b-screen-coin__button"},c.a.createElement(b,{onClick:this.onClickFlip},"\u0411\u0440\u043e\u0441\u044c \u043c\u043e\u043d\u0435\u0442\u043a\u0443")),c.a.createElement("div",{className:"b-screen-coin__text"},e))}}]),t}(n.Component)),w=(a(23),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"b-card"},c.a.createElement("div",{className:"b-card__image-wrapper"},c.a.createElement("img",{className:"b-card__image",src:"https://media-cdn.tripadvisor.com/media/photo-w/12/a0/59/c9/69-pints-craft-pub-tverskaya.jpg",alt:""})),c.a.createElement("div",{className:"b-card__content"},c.a.createElement("div",{className:"b-card__name"},"69 Pints"),c.a.createElement("div",{className:"b-card__feedback"},c.a.createElement("div",{className:"b-card__feedback-star"},"+++++"),c.a.createElement("div",{className:"b-card__feedback-count"},"45 \u043e\u0442\u0437\u044b\u0432\u043e\u0432")),c.a.createElement("div",{className:"b-card__info"},c.a.createElement("p",null,c.a.createElement("span",{className:"b-card__icon"},c.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 97.713 97.713"},c.a.createElement("g",null,c.a.createElement("path",{d:"M48.855,0C29.021,0,12.883,16.138,12.883,35.974c0,5.174,1.059,10.114,3.146,14.684 c8.994,19.681,26.238,40.46,31.31,46.359c0.38,0.441,0.934,0.695,1.517,0.695s1.137-0.254,1.517-0.695 c5.07-5.898,22.314-26.676,31.311-46.359c2.088-4.57,3.146-9.51,3.146-14.684C84.828,16.138,68.69,0,48.855,0z M48.855,54.659 c-10.303,0-18.686-8.383-18.686-18.686c0-10.304,8.383-18.687,18.686-18.687s18.686,8.383,18.686,18.687 C67.542,46.276,59.159,54.659,48.855,54.659z"})))),"\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430 5/6, \u041c\u043e\u0441\u043a\u0432\u0430, \u0420\u043e\u0441\u0441\u0438\u044f"),c.a.createElement("p",null,c.a.createElement("span",{className:"b-card__icon"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 32 32"},c.a.createElement("g",{id:"surface1"},c.a.createElement("path",{d:"M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z "})))),"\u041e\u0442\u043a\u0440\u044b\u0442\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f: 12:00 - 23:45"))))}}]),t}(n.Component)),g=(a(24),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"b-sale"},c.a.createElement("div",{className:"b-sale__image-wrapper"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 200 200","enable-background":"new 0 0 200 200"},c.a.createElement("g",{id:"Objects"},c.a.createElement("g",{id:"beers"},c.a.createElement("g",{id:"beer_4_"},c.a.createElement("circle",{fill:"#3FCAAD",cx:"100",cy:"100",r:"100"}),c.a.createElement("path",{opacity:"0.1",d:"M200,100c0-0.3,0-0.7,0-1l-69.6-69.6l-4.2,4.1l-8.1-8.1l-10.2,10.2L92.1,19.9L69.6,42.4l23.9,23.9\r L79.1,80.7l24.4,24.4l-27.7,27.7l26.4,26.4l-19.3,19.3H68.4l20.9,20.9c3.5,0.4,7.1,0.6,10.7,0.6C155.2,200,200,155.2,200,100z"}),c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{fill:"#FFFFFF",d:"M70.7,35.3c-3,17.8-8.7,40.5-8.7,58.8c0,24.7,11.5,46.6,35.4,46.6c24,0,35.4-21.9,35.4-46.6\r c0-18.3-5.7-41-8.7-58.8H70.7z"}),c.a.createElement("g",{id:"icon_10_"},c.a.createElement("g",null,c.a.createElement("path",{fill:"#FFFFFF",d:"M127.2,174.9c0-4.2-59.6-4.2-59.6,0c0,0.3,0,1.5,0,1.8c0,4.2,13.3,7.6,29.8,7.6\r c16.4,0,29.8-3.4,29.8-7.6C127.2,176.5,127.2,175.2,127.2,174.9z"}),c.a.createElement("path",{fill:"#FFFFFF",d:"M104.1,166.9c-3.9-0.7-6.7-1.2-6.7-1.2s-2.8,0.4-6.7,1.2c-8.5,1.7-22.2,4.9-23.1,7.8\r c0.9,3.7,13.8,6.7,29.7,6.7c15.9,0,28.9-2.9,29.7-6.7C126.3,171.8,112.6,168.6,104.1,166.9z"}),c.a.createElement("path",{fill:"#FFFFFF",d:"M92.2,143.7c0,7.6,0,24.6,0,24.9c0,1.4,2.3,2.6,5.2,2.6c2.9,0,5.2-1.2,5.2-2.6c0-0.3,0-17.3,0-24.9\r H92.2z"}),c.a.createElement("path",{fill:"#FFFFFF",d:"M92.2,129.9c0,7.4,0,15,0,15.2c0,1.4,2.3,2.5,5.2,2.5c2.9,0,5.2-1.1,5.2-2.5c0-0.3,0-7.8,0-15.2H92.2\r z"}))),c.a.createElement("path",{fill:"#FFAA00",d:"M71.6,41.7c-2.7,18.1-7.2,38.1-7.2,54.9c0,23,12.2,40.4,33,40.4c20.8,0,32.8-17.3,32.8-40.4\r c0-16.8-3.5-36.7-6.2-54.9H71.6z"}),c.a.createElement("g",null,c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"86.2",cy:"124.3",r:"2.4"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"101",cy:"97.5",r:"2.4"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"113.6",cy:"115.5",r:"2.4"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"77.5",cy:"61.8",r:"2.4"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"74",cy:"102.9",r:"2.4"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"94.4",cy:"68.9",r:"2.4"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"108.8",cy:"57.8",r:"1.6"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"76.4",cy:"80.6",r:"1.6"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"119.1",cy:"77.1",r:"1.6"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"108.8",cy:"124.3",r:"1.6"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"113.6",cy:"93.4",r:"2.1"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"84.9",cy:"65",r:"2.1"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"87.8",cy:"102.9",r:"1.5"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"103.1",cy:"80.6",r:"0.8"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"94.9",cy:"84.1",r:"0.8"}),c.a.createElement("circle",{opacity:"0.2",fill:"#F6F8FB",cx:"112.7",cy:"34.8",r:"0.8"})),c.a.createElement("path",{opacity:"0.2",fill:"#F6F8FB",d:"M77.1,102.9c0-16.8,4.9-40.6,7.6-58.8h38.5c-0.1-0.8-0.3-1.7-0.4-2.5H71.9\r c-2.7,18.1-7.6,42-7.6,58.8c0,22.7,12,36.9,32.1,37.4C84.1,132.7,77.1,120.3,77.1,102.9z"})),c.a.createElement("g",null,c.a.createElement("circle",{fill:"#F6F8FB",cx:"77.1",cy:"36.2",r:"12.9"}),c.a.createElement("circle",{fill:"#F6F8FB",cx:"95.6",cy:"36.2",r:"10.7"}),c.a.createElement("circle",{fill:"#F6F8FB",cx:"86.5",cy:"27.3",r:"9.2"}),c.a.createElement("circle",{fill:"#F6F8FB",cx:"110.2",cy:"33.3",r:"11.1"}),c.a.createElement("path",{fill:"#F6F8FB",d:"M133.4,36.2c0-5-4-9-9-9c-5,0-9,4-9,9c0,5,4,9,9,9C129.4,45.2,133.4,41.2,133.4,36.2z"}),c.a.createElement("circle",{fill:"#F6F8FB",cx:"131.4",cy:"44.4",r:"6.6"}),c.a.createElement("circle",{fill:"#F6F8FB",cx:"124.4",cy:"49.1",r:"5.8"}),c.a.createElement("path",{fill:"#F6F8FB",d:"M132.3,58.2c0-2.9-2.3-5.2-5.2-5.2s-5.2,2.3-5.2,5.2c0,2.9,2.3,5.2,5.2,5.2S132.3,61.1,132.3,58.2z"}),c.a.createElement("circle",{fill:"#F6F8FB",cx:"128.2",cy:"49.7",r:"5.2"})))))))),c.a.createElement("div",{className:"b-sale__value"},c.a.createElement("span",null,"-10%"),c.a.createElement("span",null,"\u041d\u0430 \u043f\u0435\u0440\u0432\u044b\u0439 \u0431\u043e\u043a\u0430\u043b \u043f\u0438\u0432\u0430!")),c.a.createElement("div",{className:"b-sale__code"},c.a.createElement("div",{className:"b-sale__code-title"},"\u041f\u043e\u043a\u0430\u0436\u0438 \u043a\u043e\u0434 \u0431\u0430\u0440\u043c\u0435\u043d\u0443:"),c.a.createElement("div",{className:"b-sale__code-value"},"69557")))}}]),t}(n.Component)),x=(a(25),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={isStopFlipping:!1,showBar:!1},a.stopFlipping=function(){setTimeout(function(){a.setState({isStopFlipping:!0});var e=document.getElementById("canvas");e.classList="hide",setTimeout(function(){e.style.display="none"},500)},300)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;new d.a({threshold:15}).start();window.addEventListener("shake",function(){return f(10,-15,e.stopFlipping)},!1)}},{key:"render",value:function(){var e=this,t=this.state,a=t.isStopFlipping,n=t.showBar;return f(0,0),c.a.createElement("div",{className:"App"},c.a.createElement(u.a,{unmountOnExit:!0,in:!a,timeout:500,classNames:"b-screen",onExited:function(){return e.setState({showBar:!0})}},c.a.createElement(y,{stopFlipping:this.stopFlipping})),c.a.createElement(u.a,{unmountOnExit:!0,in:n,timeout:1500,classNames:"b-screen"},c.a.createElement("div",null,c.a.createElement(g,null),c.a.createElement("div",{className:"b-title"},"\u0421\u043a\u043e\u0440\u0435\u0435, \u0442\u0435\u0431\u044f \u0443\u0436\u0435 \u0436\u0434\u0443\u0442 \u0437\u0434\u0435\u0441\u044c"),c.a.createElement(w,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.a9983b4a.chunk.js.map