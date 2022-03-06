!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(a){"use strict";var o,r=window.Slick||{};o=0,(r=function(i,e){var t=this;t.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(i),appendDots:a(i),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(i,e){return a('<button type="button" />').text(e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:400,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},t.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(t,t.initials),t.activeBreakpoint=null,t.animType=null,t.animProp=null,t.breakpoints=[],t.breakpointSettings=[],t.cssTransitions=!1,t.focussed=!1,t.interrupted=!1,t.hidden="hidden",t.paused=!0,t.positionProp=null,t.respondTo=null,t.rowCount=1,t.shouldClick=!0,t.$slider=a(i),t.$slidesCache=null,t.transformType=null,t.transitionType=null,t.visibilityChange="visibilitychange",t.windowWidth=0,t.windowTimer=null,i=a(i).data("slick")||{},t.options=a.extend({},t.defaults,e,i),t.currentSlide=t.options.initialSlide,t.originalSettings=t.options,void 0!==document.mozHidden?(t.hidden="mozHidden",t.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(t.hidden="webkitHidden",t.visibilityChange="webkitvisibilitychange"),t.autoPlay=a.proxy(t.autoPlay,t),t.autoPlayClear=a.proxy(t.autoPlayClear,t),t.autoPlayIterator=a.proxy(t.autoPlayIterator,t),t.changeSlide=a.proxy(t.changeSlide,t),t.clickHandler=a.proxy(t.clickHandler,t),t.selectHandler=a.proxy(t.selectHandler,t),t.setPosition=a.proxy(t.setPosition,t),t.swipeHandler=a.proxy(t.swipeHandler,t),t.dragHandler=a.proxy(t.dragHandler,t),t.keyHandler=a.proxy(t.keyHandler,t),t.instanceUid=o++,t.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,t.registerBreakpoints(),t.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},r.prototype.addSlide=r.prototype.slickAdd=function(i,e,t){var o=this;if("boolean"==typeof e)t=e,e=null;else if(e<0||e>=o.slideCount)return!1;o.unload(),"number"==typeof e?0===e&&0===o.$slides.length?a(i).appendTo(o.$slideTrack):t?a(i).insertBefore(o.$slides.eq(e)):a(i).insertAfter(o.$slides.eq(e)):!0===t?a(i).prependTo(o.$slideTrack):a(i).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each(function(i,e){a(e).attr("data-slick-index",i)}),o.$slidesCache=o.$slides,o.reinit()},r.prototype.animateHeight=function(){var i,e=this;1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical&&(i=e.$slides.eq(e.currentSlide).outerHeight(!0),e.$list.animate({height:i},e.options.speed))},r.prototype.animateSlide=function(i,e){var t={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(i=-i),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:i},o.options.speed,o.options.easing,e):o.$slideTrack.animate({top:i},o.options.speed,o.options.easing,e):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),a({animStart:o.currentLeft}).animate({animStart:i},{duration:o.options.speed,easing:o.options.easing,step:function(i){i=Math.ceil(i),!1===o.options.vertical?t[o.animType]="translate("+i+"px, 0px)":t[o.animType]="translate(0px,"+i+"px)",o.$slideTrack.css(t)},complete:function(){e&&e.call()}})):(o.applyTransition(),i=Math.ceil(i),!1===o.options.vertical?t[o.animType]="translate3d("+i+"px, 0px, 0px)":t[o.animType]="translate3d(0px,"+i+"px, 0px)",o.$slideTrack.css(t),e&&setTimeout(function(){o.disableTransition(),e.call()},o.options.speed))},r.prototype.getNavTarget=function(){var i=this.options.asNavFor;return i&&null!==i&&(i=a(i).not(this.$slider)),i},r.prototype.asNavFor=function(e){var i=this.getNavTarget();null!==i&&"object"==typeof i&&i.each(function(){var i=a(this).slick("getSlick");i.unslicked||i.slideHandler(e,!0)})},r.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,(!1===e.options.fade?e.$slideTrack:e.$slides.eq(i)).css(t)},r.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},r.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},r.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},r.prototype.buildArrows=function(){var i=this;!0===i.options.arrows&&(i.$prevArrow=a(i.options.prevArrow).addClass("slick-arrow"),i.$nextArrow=a(i.options.nextArrow).addClass("slick-arrow"),i.slideCount>i.options.slidesToShow?(i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.prependTo(i.options.appendArrows),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.appendTo(i.options.appendArrows),!0!==i.options.infinite&&i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},r.prototype.buildDots=function(){var i,e,t=this;if(!0===t.options.dots&&t.slideCount>t.options.slidesToShow){for(t.$slider.addClass("slick-dotted"),e=a("<ul />").addClass(t.options.dotsClass),i=0;i<=t.getDotCount();i+=1)e.append(a("<li />").append(t.options.customPaging.call(this,t,i)));t.$dots=e.appendTo(t.options.appendDots),t.$dots.find("li").first().addClass("slick-active")}},r.prototype.buildOut=function(){var i=this;i.$slides=i.$slider.children(i.options.slide+":not(.slick-cloned)").addClass("slick-slide"),i.slideCount=i.$slides.length,i.$slides.each(function(i,e){a(e).attr("data-slick-index",i).data("originalStyling",a(e).attr("style")||"")}),i.$slider.addClass("slick-slider"),i.$slideTrack=0===i.slideCount?a('<div class="slick-track"/>').appendTo(i.$slider):i.$slides.wrapAll('<div class="slick-track"/>').parent(),i.$list=i.$slideTrack.wrap('<div class="slick-list"/>').parent(),i.$slideTrack.css("opacity",0),!0!==i.options.centerMode&&!0!==i.options.swipeToSlide||(i.options.slidesToScroll=1),a("img[data-lazy]",i.$slider).not("[src]").addClass("slick-loading"),i.setupInfinite(),i.buildArrows(),i.buildDots(),i.updateDots(),i.setSlideClasses("number"==typeof i.currentSlide?i.currentSlide:0),!0===i.options.draggable&&i.$list.addClass("draggable")},r.prototype.buildRows=function(){var i,e,t,o=this,s=document.createDocumentFragment(),n=o.$slider.children();if(0<o.options.rows){for(t=o.options.slidesPerRow*o.options.rows,e=Math.ceil(n.length/t),i=0;i<e;i++){for(var r=document.createElement("div"),l=0;l<o.options.rows;l++){for(var d=document.createElement("div"),a=0;a<o.options.slidesPerRow;a++){var c=i*t+(l*o.options.slidesPerRow+a);n.get(c)&&d.appendChild(n.get(c))}r.appendChild(d)}s.appendChild(r)}o.$slider.empty().append(s),o.$slider.children().children().children().css({width:100/o.options.slidesPerRow+"%",display:"inline-block"})}},r.prototype.checkResponsive=function(i,e){var t,o,s,n=this,r=!1,l=n.$slider.width(),d=window.innerWidth||a(window).width();if("window"===n.respondTo?s=d:"slider"===n.respondTo?s=l:"min"===n.respondTo&&(s=Math.min(d,l)),n.options.responsive&&n.options.responsive.length&&null!==n.options.responsive){for(t in o=null,n.breakpoints)n.breakpoints.hasOwnProperty(t)&&(!1===n.originalSettings.mobileFirst?s<n.breakpoints[t]&&(o=n.breakpoints[t]):s>n.breakpoints[t]&&(o=n.breakpoints[t]));null!==o?null!==n.activeBreakpoint&&o===n.activeBreakpoint&&!e||(n.activeBreakpoint=o,"unslick"===n.breakpointSettings[o]?n.unslick(o):(n.options=a.extend({},n.originalSettings,n.breakpointSettings[o]),!0===i&&(n.currentSlide=n.options.initialSlide),n.refresh(i)),r=o):null!==n.activeBreakpoint&&(n.activeBreakpoint=null,n.options=n.originalSettings,!0===i&&(n.currentSlide=n.options.initialSlide),n.refresh(i),r=o),i||!1===r||n.$slider.trigger("breakpoint",[n,r])}},r.prototype.changeSlide=function(i,e){var t,o=this,s=a(i.currentTarget);switch(s.is("a")&&i.preventDefault(),s.is("li")||(s=s.closest("li")),t=o.slideCount%o.options.slidesToScroll!=0?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,i.data.message){case"previous":n=0==t?o.options.slidesToScroll:o.options.slidesToShow-t,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-n,!1,e);break;case"next":n=0==t?o.options.slidesToScroll:t,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+n,!1,e);break;case"index":var n=0===i.data.index?0:i.data.index||s.index()*o.options.slidesToScroll;o.slideHandler(o.checkNavigable(n),!1,e),s.children().trigger("focus");break;default:return}},r.prototype.checkNavigable=function(i){var e=this.getNavigableIndexes(),t=0;if(i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},r.prototype.cleanUpEvents=function(){var i=this;i.options.dots&&null!==i.$dots&&(a("li",i.$dots).off("click.slick",i.changeSlide).off("mouseenter.slick",a.proxy(i.interrupt,i,!0)).off("mouseleave.slick",a.proxy(i.interrupt,i,!1)),!0===i.options.accessibility&&i.$dots.off("keydown.slick",i.keyHandler)),i.$slider.off("focus.slick blur.slick"),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow&&i.$prevArrow.off("click.slick",i.changeSlide),i.$nextArrow&&i.$nextArrow.off("click.slick",i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow&&i.$prevArrow.off("keydown.slick",i.keyHandler),i.$nextArrow&&i.$nextArrow.off("keydown.slick",i.keyHandler))),i.$list.off("touchstart.slick mousedown.slick",i.swipeHandler),i.$list.off("touchmove.slick mousemove.slick",i.swipeHandler),i.$list.off("touchend.slick mouseup.slick",i.swipeHandler),i.$list.off("touchcancel.slick mouseleave.slick",i.swipeHandler),i.$list.off("click.slick",i.clickHandler),a(document).off(i.visibilityChange,i.visibility),i.cleanUpSlideEvents(),!0===i.options.accessibility&&i.$list.off("keydown.slick",i.keyHandler),!0===i.options.focusOnSelect&&a(i.$slideTrack).children().off("click.slick",i.selectHandler),a(window).off("orientationchange.slick.slick-"+i.instanceUid,i.orientationChange),a(window).off("resize.slick.slick-"+i.instanceUid,i.resize),a("[draggable!=true]",i.$slideTrack).off("dragstart",i.preventDefault),a(window).off("load.slick.slick-"+i.instanceUid,i.setPosition)},r.prototype.cleanUpSlideEvents=function(){var i=this;i.$list.off("mouseenter.slick",a.proxy(i.interrupt,i,!0)),i.$list.off("mouseleave.slick",a.proxy(i.interrupt,i,!1))},r.prototype.cleanUpRows=function(){var i;0<this.options.rows&&((i=this.$slides.children().children()).removeAttr("style"),this.$slider.empty().append(i))},r.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},r.prototype.destroy=function(i){var e=this;e.autoPlayClear(),e.touchObject={},e.cleanUpEvents(),a(".slick-cloned",e.$slider).detach(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.$prevArrow.length&&(e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove()),e.$nextArrow&&e.$nextArrow.length&&(e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove()),e.$slides&&(e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.detach(),e.$list.detach(),e.$slider.append(e.$slides)),e.cleanUpRows(),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.$slider.removeClass("slick-dotted"),e.unslicked=!0,i||e.$slider.trigger("destroy",[e])},r.prototype.disableTransition=function(i){var e={};e[this.transitionType]="",(!1===this.options.fade?this.$slideTrack:this.$slides.eq(i)).css(e)},r.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},r.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},r.prototype.filterSlides=r.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},r.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(i){i.stopImmediatePropagation();var e=a(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=e.is(":focus"),t.autoPlay())},0)})},r.prototype.getCurrent=r.prototype.slickCurrentSlide=function(){return this.currentSlide},r.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},r.prototype.getLeft=function(i){var e,t,o=this,s=0;return o.slideOffset=0,e=o.$slides.first().outerHeight(!0),!0===o.options.infinite?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.slideWidth*o.options.slidesToShow*-1,t=-1,!0===o.options.vertical&&!0===o.options.centerMode&&(2===o.options.slidesToShow?t=-1.5:1===o.options.slidesToShow&&(t=-2)),s=e*o.options.slidesToShow*t),o.slideCount%o.options.slidesToScroll!=0&&i+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(s=i>o.slideCount?(o.slideOffset=(o.options.slidesToShow-(i-o.slideCount))*o.slideWidth*-1,(o.options.slidesToShow-(i-o.slideCount))*e*-1):(o.slideOffset=o.slideCount%o.options.slidesToScroll*o.slideWidth*-1,o.slideCount%o.options.slidesToScroll*e*-1))):i+o.options.slidesToShow>o.slideCount&&(o.slideOffset=(i+o.options.slidesToShow-o.slideCount)*o.slideWidth,s=(i+o.options.slidesToShow-o.slideCount)*e),o.slideCount<=o.options.slidesToShow&&(s=o.slideOffset=0),!0===o.options.centerMode&&o.slideCount<=o.options.slidesToShow?o.slideOffset=o.slideWidth*Math.floor(o.options.slidesToShow)/2-o.slideWidth*o.slideCount/2:!0===o.options.centerMode&&!0===o.options.infinite?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:!0===o.options.centerMode&&(o.slideOffset=0,o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),e=!1===o.options.vertical?i*o.slideWidth*-1+o.slideOffset:i*e*-1+s,!0===o.options.variableWidth&&(s=o.slideCount<=o.options.slidesToShow||!1===o.options.infinite?o.$slideTrack.children(".slick-slide").eq(i):o.$slideTrack.children(".slick-slide").eq(i+o.options.slidesToShow),e=!0===o.options.rtl?s[0]?-1*(o.$slideTrack.width()-s[0].offsetLeft-s.width()):0:s[0]?-1*s[0].offsetLeft:0,!0===o.options.centerMode&&(s=o.slideCount<=o.options.slidesToShow||!1===o.options.infinite?o.$slideTrack.children(".slick-slide").eq(i):o.$slideTrack.children(".slick-slide").eq(i+o.options.slidesToShow+1),e=!0===o.options.rtl?s[0]?-1*(o.$slideTrack.width()-s[0].offsetLeft-s.width()):0:s[0]?-1*s[0].offsetLeft:0,e+=(o.$list.width()-s.outerWidth())/2)),e},r.prototype.getOption=r.prototype.slickGetOption=function(i){return this.options[i]},r.prototype.getNavigableIndexes=function(){for(var i=this,e=0,t=0,o=[],s=!1===i.options.infinite?i.slideCount:(e=-1*i.options.slidesToScroll,t=-1*i.options.slidesToScroll,2*i.slideCount);e<s;)o.push(e),e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;return o},r.prototype.getSlick=function(){return this},r.prototype.getSlideCount=function(){var t,o=this,s=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0;return!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(i,e){if(e.offsetLeft-s+a(e).outerWidth()/2>-1*o.swipeLeft)return t=e,!1}),Math.abs(a(t).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},r.prototype.goTo=r.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},r.prototype.init=function(i){var e=this;a(e.$slider).hasClass("slick-initialized")||(a(e.$slider).addClass("slick-initialized"),e.buildRows(),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots(),e.checkResponsive(!0),e.focusHandler()),i&&e.$slider.trigger("init",[e]),!0===e.options.accessibility&&e.initADA(),e.options.autoplay&&(e.paused=!1,e.autoPlay())},r.prototype.initADA=function(){var t=this,o=Math.ceil(t.slideCount/t.options.slidesToShow),s=t.getNavigableIndexes().filter(function(i){return 0<=i&&i<t.slideCount});t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==t.$dots&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i){var e=s.indexOf(i);a(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+i,tabindex:-1}),-1!==e&&(e="slick-slide-control"+t.instanceUid+e,a("#"+e).length&&a(this).attr({"aria-describedby":e}))}),t.$dots.attr("role","tablist").find("li").each(function(i){var e=s[i];a(this).attr({role:"presentation"}),a(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+i,"aria-controls":"slick-slide"+t.instanceUid+e,"aria-label":i+1+" of "+o,"aria-selected":null,tabindex:"-1"})}).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var i=t.currentSlide,e=i+t.options.slidesToShow;i<e;i++)t.options.focusOnChange?t.$slides.eq(i).attr({tabindex:"0"}):t.$slides.eq(i).removeAttr("tabindex");t.activateADA()},r.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},r.prototype.initDotEvents=function(){var i=this;!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&(a("li",i.$dots).on("click.slick",{message:"index"},i.changeSlide),!0===i.options.accessibility&&i.$dots.on("keydown.slick",i.keyHandler)),!0===i.options.dots&&!0===i.options.pauseOnDotsHover&&i.slideCount>i.options.slidesToShow&&a("li",i.$dots).on("mouseenter.slick",a.proxy(i.interrupt,i,!0)).on("mouseleave.slick",a.proxy(i.interrupt,i,!1))},r.prototype.initSlideEvents=function(){var i=this;i.options.pauseOnHover&&(i.$list.on("mouseenter.slick",a.proxy(i.interrupt,i,!0)),i.$list.on("mouseleave.slick",a.proxy(i.interrupt,i,!1)))},r.prototype.initializeEvents=function(){var i=this;i.initArrowEvents(),i.initDotEvents(),i.initSlideEvents(),i.$list.on("touchstart.slick mousedown.slick",{action:"start"},i.swipeHandler),i.$list.on("touchmove.slick mousemove.slick",{action:"move"},i.swipeHandler),i.$list.on("touchend.slick mouseup.slick",{action:"end"},i.swipeHandler),i.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},i.swipeHandler),i.$list.on("click.slick",i.clickHandler),a(document).on(i.visibilityChange,a.proxy(i.visibility,i)),!0===i.options.accessibility&&i.$list.on("keydown.slick",i.keyHandler),!0===i.options.focusOnSelect&&a(i.$slideTrack).children().on("click.slick",i.selectHandler),a(window).on("orientationchange.slick.slick-"+i.instanceUid,a.proxy(i.orientationChange,i)),a(window).on("resize.slick.slick-"+i.instanceUid,a.proxy(i.resize,i)),a("[draggable!=true]",i.$slideTrack).on("dragstart",i.preventDefault),a(window).on("load.slick.slick-"+i.instanceUid,i.setPosition),a(i.setPosition)},r.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},r.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},r.prototype.lazyLoad=function(){var i,e,t,n=this;function o(i){a("img[data-lazy]",i).each(function(){var i=a(this),e=a(this).attr("data-lazy"),t=a(this).attr("data-srcset"),o=a(this).attr("data-sizes")||n.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){i.animate({opacity:0},100,function(){t&&(i.attr("srcset",t),o&&i.attr("sizes",o)),i.attr("src",e).animate({opacity:1},200,function(){i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,i,e])})},s.onerror=function(){i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,i,e])},s.src=e})}if(!0===n.options.centerMode?t=!0===n.options.infinite?(e=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(e=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),n.options.slidesToShow/2+1+2+n.currentSlide):(e=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,t=Math.ceil(e+n.options.slidesToShow),!0===n.options.fade&&(0<e&&e--,t<=n.slideCount&&t++)),i=n.$slider.find(".slick-slide").slice(e,t),"anticipated"===n.options.lazyLoad)for(var s=e-1,r=t,l=n.$slider.find(".slick-slide"),d=0;d<n.options.slidesToScroll;d++)s<0&&(s=n.slideCount-1),i=(i=i.add(l.eq(s))).add(l.eq(r)),s--,r++;o(i),n.slideCount<=n.options.slidesToShow?o(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?o(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&o(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},r.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},r.prototype.next=r.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},r.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},r.prototype.pause=r.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},r.prototype.play=r.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},r.prototype.postSlide=function(i){var e=this;e.unslicked||(e.$slider.trigger("afterChange",[e,i]),e.animating=!1,e.slideCount>e.options.slidesToShow&&e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),!0===e.options.accessibility&&(e.initADA(),e.options.focusOnChange&&a(e.$slides.get(e.currentSlide)).attr("tabindex",0).focus()))},r.prototype.prev=r.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},r.prototype.preventDefault=function(i){i.preventDefault()},r.prototype.progressiveLazyLoad=function(i){i=i||1;var e,t,o,s,n=this,r=a("img[data-lazy]",n.$slider);r.length?(e=r.first(),t=e.attr("data-lazy"),o=e.attr("data-srcset"),s=e.attr("data-sizes")||n.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===n.options.adaptiveHeight&&n.setPosition(),n.$slider.trigger("lazyLoaded",[n,e,t]),n.progressiveLazyLoad()},r.onerror=function(){i<3?setTimeout(function(){n.progressiveLazyLoad(i+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t]),n.progressiveLazyLoad())},r.src=t):n.$slider.trigger("allImagesLoaded",[n])},r.prototype.refresh=function(i){var e=this,t=e.slideCount-e.options.slidesToShow;!e.options.infinite&&e.currentSlide>t&&(e.currentSlide=t),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),t=e.currentSlide,e.destroy(!0),a.extend(e,e.initials,{currentSlide:t}),e.init(),i||e.changeSlide({data:{message:"index",index:t}},!1)},r.prototype.registerBreakpoints=function(){var i,e,t,o=this,s=o.options.responsive||null;if("array"===a.type(s)&&s.length){for(i in o.respondTo=o.options.respondTo||"window",s)if(t=o.breakpoints.length-1,s.hasOwnProperty(i)){for(e=s[i].breakpoint;0<=t;)o.breakpoints[t]&&o.breakpoints[t]===e&&o.breakpoints.splice(t,1),t--;o.breakpoints.push(e),o.breakpointSettings[e]=s[i].settings}o.breakpoints.sort(function(i,e){return o.options.mobileFirst?i-e:e-i})}},r.prototype.reinit=function(){var i=this;i.$slides=i.$slideTrack.children(i.options.slide).addClass("slick-slide"),i.slideCount=i.$slides.length,i.currentSlide>=i.slideCount&&0!==i.currentSlide&&(i.currentSlide=i.currentSlide-i.options.slidesToScroll),i.slideCount<=i.options.slidesToShow&&(i.currentSlide=0),i.registerBreakpoints(),i.setProps(),i.setupInfinite(),i.buildArrows(),i.updateArrows(),i.initArrowEvents(),i.buildDots(),i.updateDots(),i.initDotEvents(),i.cleanUpSlideEvents(),i.initSlideEvents(),i.checkResponsive(!1,!0),!0===i.options.focusOnSelect&&a(i.$slideTrack).children().on("click.slick",i.selectHandler),i.setSlideClasses("number"==typeof i.currentSlide?i.currentSlide:0),i.setPosition(),i.focusHandler(),i.paused=!i.options.autoplay,i.autoPlay(),i.$slider.trigger("reInit",[i])},r.prototype.resize=function(){var i=this;a(window).width()!==i.windowWidth&&(clearTimeout(i.windowDelay),i.windowDelay=window.setTimeout(function(){i.windowWidth=a(window).width(),i.checkResponsive(),i.unslicked||i.setPosition()},50))},r.prototype.removeSlide=r.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),(!0===t?o.$slideTrack.children():o.$slideTrack.children(this.options.slide).eq(i)).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},r.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled||(!(s={})===o.cssTransitions?s[o.animType]="translate("+e+", "+t+")":s[o.animType]="translate3d("+e+", "+t+", 0px)"),o.$slideTrack.css(s)},r.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},r.prototype.setFade=function(){var t,o=this;o.$slides.each(function(i,e){t=o.slideWidth*i*-1,!0===o.options.rtl?a(e).css({position:"relative",right:t,top:0,zIndex:o.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:t,top:0,zIndex:o.options.zIndex-2,opacity:0})}),o.$slides.eq(o.currentSlide).css({zIndex:o.options.zIndex-1,opacity:1})},r.prototype.setHeight=function(){var i,e=this;1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical&&(i=e.$slides.eq(e.currentSlide).outerHeight(!0),e.$list.css("height",i))},r.prototype.setOption=r.prototype.slickSetOption=function(){var i,e,t,o,s,n=this,r=!1;if("object"===a.type(arguments[0])?(t=arguments[0],r=arguments[1],s="multiple"):"string"===a.type(arguments[0])&&(o=arguments[1],r=arguments[2],"responsive"===(t=arguments[0])&&"array"===a.type(arguments[1])?s="responsive":void 0!==arguments[1]&&(s="single")),"single"===s)n.options[t]=o;else if("multiple"===s)a.each(t,function(i,e){n.options[i]=e});else if("responsive"===s)for(e in o)if("array"!==a.type(n.options.responsive))n.options.responsive=[o[e]];else{for(i=n.options.responsive.length-1;0<=i;)n.options.responsive[i].breakpoint===o[e].breakpoint&&n.options.responsive.splice(i,1),i--;n.options.responsive.push(o[e])}r&&(n.unload(),n.reinit())},r.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},r.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},r.prototype.setSlideClasses=function(i){var e,t,o,s=this,n=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");s.$slides.eq(i).addClass("slick-current"),!0===s.options.centerMode?(t=s.options.slidesToShow%2==0?1:0,o=Math.floor(s.options.slidesToShow/2),!0===s.options.infinite&&(o<=i&&i<=s.slideCount-1-o?s.$slides.slice(i-o+t,i+o+1).addClass("slick-active").attr("aria-hidden","false"):(e=s.options.slidesToShow+i,n.slice(e-o+1+t,e+o+2).addClass("slick-active").attr("aria-hidden","false")),0===i?n.eq(n.length-1-s.options.slidesToShow).addClass("slick-center"):i===s.slideCount-1&&n.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(i).addClass("slick-center")):0<=i&&i<=s.slideCount-s.options.slidesToShow?s.$slides.slice(i,i+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=s.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(o=s.slideCount%s.options.slidesToShow,e=!0===s.options.infinite?s.options.slidesToShow+i:i,(s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-i<s.options.slidesToShow?n.slice(e-(s.options.slidesToShow-o),e+o):n.slice(e,e+s.options.slidesToShow)).addClass("slick-active").attr("aria-hidden","false")),"ondemand"!==s.options.lazyLoad&&"anticipated"!==s.options.lazyLoad||s.lazyLoad()},r.prototype.setupInfinite=function(){var i,e,t,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(e=null,o.slideCount>o.options.slidesToShow)){for(t=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,i=o.slideCount;i>o.slideCount-t;--i)e=i-1,a(o.$slides[e]).clone(!0).attr("id","").attr("data-slick-index",e-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(i=0;i<t+o.slideCount;i+=1)e=i,a(o.$slides[e]).clone(!0).attr("id","").attr("data-slick-index",e+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},r.prototype.interrupt=function(i){i||this.autoPlay(),this.interrupted=i},r.prototype.selectHandler=function(i){i=a(i.target).is(".slick-slide")?a(i.target):a(i.target).parents(".slick-slide"),i=(i=parseInt(i.attr("data-slick-index")))||0;this.slideCount<=this.options.slidesToShow?this.slideHandler(i,!1,!0):this.slideHandler(i)},r.prototype.slideHandler=function(i,e,t){var o,s,n,r,l=this;if(e=e||!1,!(!0===l.animating&&!0===l.options.waitForAnimate||!0===l.options.fade&&l.currentSlide===i))if(!1===e&&l.asNavFor(i),o=i,n=l.getLeft(o),e=l.getLeft(l.currentSlide),l.currentLeft=null===l.swipeLeft?e:l.swipeLeft,!1===l.options.infinite&&!1===l.options.centerMode&&(i<0||i>l.getDotCount()*l.options.slidesToScroll))!1===l.options.fade&&(o=l.currentSlide,!0!==t&&l.slideCount>l.options.slidesToShow?l.animateSlide(e,function(){l.postSlide(o)}):l.postSlide(o));else if(!1===l.options.infinite&&!0===l.options.centerMode&&(i<0||i>l.slideCount-l.options.slidesToScroll))!1===l.options.fade&&(o=l.currentSlide,!0!==t&&l.slideCount>l.options.slidesToShow?l.animateSlide(e,function(){l.postSlide(o)}):l.postSlide(o));else{if(l.options.autoplay&&clearInterval(l.autoPlayTimer),s=o<0?l.slideCount%l.options.slidesToScroll!=0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount+o:o>=l.slideCount?l.slideCount%l.options.slidesToScroll!=0?0:o-l.slideCount:o,l.animating=!0,l.$slider.trigger("beforeChange",[l,l.currentSlide,s]),e=l.currentSlide,l.currentSlide=s,l.setSlideClasses(l.currentSlide),l.options.asNavFor&&(r=(r=l.getNavTarget()).slick("getSlick")).slideCount<=r.options.slidesToShow&&r.setSlideClasses(l.currentSlide),l.updateDots(),l.updateArrows(),!0===l.options.fade)return!0!==t?(l.fadeSlideOut(e),l.fadeSlide(s,function(){l.postSlide(s)})):l.postSlide(s),void l.animateHeight();!0!==t&&l.slideCount>l.options.slidesToShow?l.animateSlide(n,function(){l.postSlide(s)}):l.postSlide(s)}},r.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},r.prototype.swipeDirection=function(){var i=this,e=i.touchObject.startX-i.touchObject.curX,t=i.touchObject.startY-i.touchObject.curY,e=Math.atan2(t,e),e=Math.round(180*e/Math.PI);return e<0&&(e=360-Math.abs(e)),e<=45&&0<=e||e<=360&&315<=e?!1===i.options.rtl?"left":"right":135<=e&&e<=225?!1===i.options.rtl?"right":"left":!0===i.options.verticalSwiping?35<=e&&e<=135?"down":"up":"vertical"},r.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1;if(o.interrupted=!1,o.shouldClick=!(10<o.touchObject.swipeLength),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},r.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},r.prototype.swipeMove=function(i){var e,t,o=this,s=void 0!==i.originalEvent?i.originalEvent.touches:null;return!(!o.dragging||o.scrolling||s&&1!==s.length)&&(e=o.getLeft(o.currentSlide),o.touchObject.curX=void 0!==s?s[0].pageX:i.clientX,o.touchObject.curY=void 0!==s?s[0].pageY:i.clientY,o.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(o.touchObject.curX-o.touchObject.startX,2))),t=Math.round(Math.sqrt(Math.pow(o.touchObject.curY-o.touchObject.startY,2))),!o.options.verticalSwiping&&!o.swiping&&4<t?!(o.scrolling=!0):(!0===o.options.verticalSwiping&&(o.touchObject.swipeLength=t),s=o.swipeDirection(),void 0!==i.originalEvent&&4<o.touchObject.swipeLength&&(o.swiping=!0,i.preventDefault()),t=(!1===o.options.rtl?1:-1)*(o.touchObject.curX>o.touchObject.startX?1:-1),!0===o.options.verticalSwiping&&(t=o.touchObject.curY>o.touchObject.startY?1:-1),i=o.touchObject.swipeLength,(o.touchObject.edgeHit=!1)===o.options.infinite&&(0===o.currentSlide&&"right"===s||o.currentSlide>=o.getDotCount()&&"left"===s)&&(i=o.touchObject.swipeLength*o.options.edgeFriction,o.touchObject.edgeHit=!0),!1===o.options.vertical?o.swipeLeft=e+i*t:o.swipeLeft=e+i*(o.$list.height()/o.listWidth)*t,!0===o.options.verticalSwiping&&(o.swipeLeft=e+i*t),!0!==o.options.fade&&!1!==o.options.touchMove&&(!0===o.animating?(o.swipeLeft=null,!1):void o.setCSS(o.swipeLeft))))},r.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return!(t.touchObject={});void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},r.prototype.unfilterSlides=r.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},r.prototype.unload=function(){var i=this;a(".slick-cloned",i.$slider).remove(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove(),i.$nextArrow&&i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove(),i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},r.prototype.unslick=function(i){this.$slider.trigger("unslick",[this,i]),this.destroy()},r.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2);!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode||i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode)&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},r.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},r.prototype.visibility=function(){this.options.autoplay&&(document[this.hidden]?this.interrupted=!0:this.interrupted=!1)},a.fn.slick=function(){for(var i,e=this,t=arguments[0],o=Array.prototype.slice.call(arguments,1),s=e.length,n=0;n<s;n++)if("object"==typeof t||void 0===t?e[n].slick=new r(e[n],t):i=e[n].slick[t].apply(e[n].slick,o),void 0!==i)return i;return e}});


if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function F() {};
        F.prototype = obj;
        return new F();
    };
}

(function($, window, document, undefined) {
    var ElevateZoom = {
        init: function(options, elem) {
            var self = this;

            self.elem = elem;
            self.$elem = $(elem);

            self.imageSrc = self.$elem.data("zoom-image") ? self.$elem.data("zoom-image") : self.$elem.attr("src");

            self.options = $.extend({}, $.fn.elevateZoom.options, options);

            
            if (self.options.tint) {
                self.options.lensColour = "none", 
                    self.options.lensOpacity = "1" 
            }
            
            if (self.options.zoomType == "inner") { self.options.showLens = false; }


            

            self.$elem.parent().removeAttr('title').removeAttr('alt');

            self.zoomImage = self.imageSrc;

            self.refresh(1);



            
            $('#' + self.options.gallery + ' a').click(function(e) {

                
                if (self.options.galleryActiveClass) {
                    $('#' + self.options.gallery + ' a').removeClass(self.options.galleryActiveClass);
                    $(this).addClass(self.options.galleryActiveClass);
                }
                
                e.preventDefault();

                
                if ($(this).data("zoom-image")) { self.zoomImagePre = $(this).data("zoom-image") } else { self.zoomImagePre = $(this).data("image"); }
                self.swaptheimage($(this).data("image"), self.zoomImagePre);
                return false;
            });

        },

        refresh: function(length) {
            var self = this;

            setTimeout(function() {
                self.fetch(self.imageSrc);

            }, length || self.options.refresh);
        },

        fetch: function(imgsrc) {
            
            var self = this;
            var newImg = new Image();
            newImg.onload = function() {
                
                self.largeWidth = newImg.width;
                self.largeHeight = newImg.height;
                
                self.startZoom();
                self.currentImage = self.imageSrc;
                
                self.options.onZoomedImageLoaded(self.$elem);
            }
            newImg.src = imgsrc; 

            return;

        },

        startZoom: function() {
            var self = this;
            
            self.nzWidth = self.$elem.width();
            self.nzHeight = self.$elem.height();

            
            self.isWindowActive = false;
            self.isLensActive = false;
            self.isTintActive = false;
            self.overWindow = false;

            
            if (self.options.imageCrossfade) {
                self.zoomWrap = self.$elem.wrap('<div style="height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;" class="zoomWrapper" />');
                self.$elem.css('position', 'absolute');
            }

            self.zoomLock = 1;
            self.scrollingLock = false;
            self.changeBgSize = false;
            self.currentZoomLevel = self.options.zoomLevel;


            
            self.nzOffset = self.$elem.offset();
            
            self.widthRatio = (self.largeWidth / self.currentZoomLevel) / self.nzWidth;
            self.heightRatio = (self.largeHeight / self.currentZoomLevel) / self.nzHeight;


            
            if (self.options.zoomType == "window") {
                self.zoomWindowStyle = "overflow: hidden;" +
                    "background-position: 0px 0px;text-align:center;" +
                    "background-color: " + String(self.options.zoomWindowBgColour) +
                    ";width: " + String(self.options.zoomWindowWidth) + "px;" +
                    "height: " + String(self.options.zoomWindowHeight) +
                    "px;float: left;" +
                    "background-size: " + self.largeWidth / self.currentZoomLevel + "px " + self.largeHeight / self.currentZoomLevel + "px;" +
                    "display: none;z-index:100;" +
                    "border: " + String(self.options.borderSize) +
                    "px solid " + self.options.borderColour +
                    ";background-repeat: no-repeat;" +
                    "position: absolute;";
            }


            
            if (self.options.zoomType == "inner") {
                

                var borderWidth = self.$elem.css("border-left-width");

                self.zoomWindowStyle = "overflow: hidden;" +
                    "margin-left: " + String(borderWidth) + ";" +
                    "margin-top: " + String(borderWidth) + ";" +
                    "background-position: 0px 0px;" +
                    "width: " + String(self.nzWidth) + "px;" +
                    "height: " + String(self.nzHeight) + "px;" +
                    "px;float: left;" +
                    "display: none;" +
                    "cursor:" + (self.options.cursor) + ";" +
                    "px solid " + self.options.borderColour +
                    ";background-repeat: no-repeat;" +
                    "position: absolute;";
            }



            
            if (self.options.zoomType == "window") {


                

                if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                    lensHeight = self.nzHeight;
                } else {
                    lensHeight = String((self.options.zoomWindowHeight / self.heightRatio))
                }
                if (self.largeWidth < self.options.zoomWindowWidth) {
                    lensWidth = self.nzWidth;
                } else {
                    lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                }


                self.lensStyle = "background-position: 0px 0px;width: " + String((self.options.zoomWindowWidth) / self.widthRatio) + "px;height: " + String((self.options.zoomWindowHeight) / self.heightRatio) +
                    "px;float: right;display: none;" +
                    "overflow: hidden;" +
                    "z-index: 999;" +
                    "-webkit-transform: translateZ(0);" +
                    "opacity:" + (self.options.lensOpacity) + ";filter: alpha(opacity = " + (self.options.lensOpacity * 100) + "); zoom:1;" +
                    "width:" + lensWidth + "px;" +
                    "height:" + lensHeight + "px;" +
                    "background-color:" + (self.options.lensColour) + ";" +
                    "cursor:" + (self.options.cursor) + ";" +
                    "border: " + (self.options.lensBorderSize) + "px" +
                    " solid " + (self.options.lensBorderColour) + ";background-repeat: no-repeat;position: absolute;";
            }


            
            self.tintStyle = "display: block;" +
                "position: absolute;" +
                "background-color: " + self.options.tintColour + ";" +
                "filter:alpha(opacity=0);" +
                "opacity: 0;" +
                "width: " + self.nzWidth + "px;" +
                "height: " + self.nzHeight + "px;"

            ;

            
            self.lensRound = '';

            if (self.options.zoomType == "lens") {

                self.lensStyle = "background-position: 0px 0px;" +
                    "float: left;display: none;" +
                    "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour + ";" +
                    "width:" + String(self.options.lensSize) + "px;" +
                    "height:" + String(self.options.lensSize) + "px;" +
                    "background-repeat: no-repeat;position: absolute;";


            }


            
            if (self.options.lensShape == "round") {
                self.lensRound = "border-top-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" +
                    "border-top-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" +
                    "border-bottom-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" +
                    "border-bottom-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;";

            }

            
            

            self.zoomContainer = $('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + self.nzOffset.left + 'px;top:' + self.nzOffset.top + 'px;height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;"></div>');
            $('body').append(self.zoomContainer);


            
            if (self.options.containLensZoom && self.options.zoomType == "lens") {
                self.zoomContainer.css("overflow", "hidden");
            }
            if (self.options.zoomType != "inner") {
                self.zoomLens = $("<div class='zoomLens' style='" + self.lensStyle + self.lensRound + "'>&nbsp;</div>")
                    .appendTo(self.zoomContainer)
                    .click(function() {
                        self.$elem.trigger('click');
                    });


                if (self.options.tint) {
                    self.tintContainer = $('<div/>').addClass('tintContainer');
                    self.zoomTint = $("<div class='zoomTint' style='" + self.tintStyle + "'></div>");


                    self.zoomLens.wrap(self.tintContainer);


                    self.zoomTintcss = self.zoomLens.after(self.zoomTint);

                    

                    self.zoomTintImage = $('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + self.nzWidth + 'px; height: ' + self.nzHeight + 'px;" src="' + self.imageSrc + '">')
                        .appendTo(self.zoomLens)
                        .click(function() {

                            self.$elem.trigger('click');
                        });

                }

            }







            
            if (isNaN(self.options.zoomWindowPosition)) {
                self.zoomWindow = $("<div style='z-index:999;left:" + (self.windowOffsetLeft) + "px;top:" + (self.windowOffsetTop) + "px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")
                    .appendTo('body')
                    .click(function() {
                        self.$elem.trigger('click');
                    });
            } else {
                self.zoomWindow = $("<div style='z-index:999;left:" + (self.windowOffsetLeft) + "px;top:" + (self.windowOffsetTop) + "px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")
                    .appendTo(self.zoomContainer)
                    .click(function() {
                        self.$elem.trigger('click');
                    });
            }
            self.zoomWindowContainer = $('<div/>').addClass('zoomWindowContainer').css("width", self.options.zoomWindowWidth);
            self.zoomWindow.wrap(self.zoomWindowContainer);


            
            

            if (self.options.zoomType == "lens") {
                self.zoomLens.css({ backgroundImage: "url('" + self.imageSrc + "')" });
            }
            if (self.options.zoomType == "window") {
                self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" });
            }
            if (self.options.zoomType == "inner") {
                self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" });
            }
            
            self.$elem.bind('touchmove', function(e) {
                e.preventDefault();
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                self.setPosition(touch);

            });
            self.zoomContainer.bind('touchmove', function(e) {
                if (self.options.zoomType == "inner") {
                    self.showHideWindow("show");

                }
                e.preventDefault();
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                self.setPosition(touch);

            });
            self.zoomContainer.bind('touchend', function(e) {
                self.showHideWindow("hide");
                if (self.options.showLens) { self.showHideLens("hide"); }
                if (self.options.tint && self.options.zoomType != "inner") { self.showHideTint("hide"); }
            });

            self.$elem.bind('touchend', function(e) {
                self.showHideWindow("hide");
                if (self.options.showLens) { self.showHideLens("hide"); }
                if (self.options.tint && self.options.zoomType != "inner") { self.showHideTint("hide"); }
            });
            if (self.options.showLens) {
                self.zoomLens.bind('touchmove', function(e) {

                    e.preventDefault();
                    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    self.setPosition(touch);
                });


                self.zoomLens.bind('touchend', function(e) {
                    self.showHideWindow("hide");
                    if (self.options.showLens) { self.showHideLens("hide"); }
                    if (self.options.tint && self.options.zoomType != "inner") { self.showHideTint("hide"); }
                });
            }
            
            self.$elem.bind('mousemove', function(e) {
                if (self.overWindow == false) { self.setElements("show"); }
                
                if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                    self.setPosition(e);
                    self.currentLoc = e;
                }
                self.lastX = e.clientX;
                self.lastY = e.clientY;

            });

            self.zoomContainer.bind('mousemove', function(e) {

                if (self.overWindow == false) { self.setElements("show"); }

                
                if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                    self.setPosition(e);
                    self.currentLoc = e;
                }
                self.lastX = e.clientX;
                self.lastY = e.clientY;
            });
            if (self.options.zoomType != "inner") {
                self.zoomLens.bind('mousemove', function(e) {
                    
                    if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                        self.setPosition(e);
                        self.currentLoc = e;
                    }
                    self.lastX = e.clientX;
                    self.lastY = e.clientY;
                });
            }
            if (self.options.tint && self.options.zoomType != "inner") {
                self.zoomTint.bind('mousemove', function(e) {
                    
                    if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                        self.setPosition(e);
                        self.currentLoc = e;
                    }
                    self.lastX = e.clientX;
                    self.lastY = e.clientY;
                });

            }
            if (self.options.zoomType == "inner") {
                self.zoomWindow.bind('mousemove', function(e) {
                    
                    
                    if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                        self.setPosition(e);
                        self.currentLoc = e;
                    }
                    self.lastX = e.clientX;
                    self.lastY = e.clientY;
                });

            }


            
            self.zoomContainer.add(self.$elem).mouseenter(function() {

                if (self.overWindow == false) { self.setElements("show"); }


            }).mouseleave(function() {
                if (!self.scrollLock) {
                    self.setElements("hide");
                    self.options.onDestroy(self.$elem);
                }
            });
            





            if (self.options.zoomType != "inner") {
                self.zoomWindow.mouseenter(function() {
                    self.overWindow = true;
                    self.setElements("hide");
                }).mouseleave(function() {

                    self.overWindow = false;
                });
            }
            



            

            
            

            
            if (self.options.zoomLevel != 1) {
                
            }
            
            if (self.options.minZoomLevel) {
                self.minZoomLevel = self.options.minZoomLevel;
            } else {
                self.minZoomLevel = self.options.scrollZoomIncrement * 2;
            }


            if (self.options.scrollZoom) {


                self.zoomContainer.add(self.$elem).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {


                    
                    
                    self.scrollLock = true;
                    clearTimeout($.data(this, 'timer'));
                    $.data(this, 'timer', setTimeout(function() {
                        self.scrollLock = false;
                        
                    }, 250));

                    var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1


                    
                    


                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault();


                    if (theEvent / 120 > 0) {
                        
                        if (self.currentZoomLevel >= self.minZoomLevel) {
                            self.changeZoomLevel(self.currentZoomLevel - self.options.scrollZoomIncrement);
                        }

                    } else {
                        


                        if (self.options.maxZoomLevel) {
                            if (self.currentZoomLevel <= self.options.maxZoomLevel) {
                                self.changeZoomLevel(parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement);
                            }
                        } else {
                            

                            self.changeZoomLevel(parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement);
                        }

                    }
                    return false;
                });
            }


        },
        setElements: function(type) {
            var self = this;
            if (!self.options.zoomEnabled) { return false; }
            if (type == "show") {
                if (self.isWindowSet) {
                    if (self.options.zoomType == "inner") { self.showHideWindow("show"); }
                    if (self.options.zoomType == "window") { self.showHideWindow("show"); }
                    if (self.options.showLens) { self.showHideLens("show"); }
                    if (self.options.tint && self.options.zoomType != "inner") {
                        self.showHideTint("show");
                    }
                }
            }

            if (type == "hide") {
                if (self.options.zoomType == "window") { self.showHideWindow("hide"); }
                if (!self.options.tint) { self.showHideWindow("hide"); }
                if (self.options.showLens) { self.showHideLens("hide"); }
                if (self.options.tint) { self.showHideTint("hide"); }
            }
        },
        setPosition: function(e) {

            var self = this;

            if (!self.options.zoomEnabled) { return false; }

            
            
            self.nzHeight = self.$elem.height();
            self.nzWidth = self.$elem.width();
            self.nzOffset = self.$elem.offset();

            if (self.options.tint && self.options.zoomType != "inner") {
                self.zoomTint.css({ top: 0 });
                self.zoomTint.css({ left: 0 });
            }
            
            
            if (self.options.responsive && !self.options.scrollZoom) {
                if (self.options.showLens) {
                    if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                        lensHeight = self.nzHeight;
                    } else {
                        lensHeight = String((self.options.zoomWindowHeight / self.heightRatio))
                    }
                    if (self.largeWidth < self.options.zoomWindowWidth) {
                        lensWidth = self.nzWidth;
                    } else {
                        lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                    }
                    self.widthRatio = self.largeWidth / self.nzWidth;
                    self.heightRatio = self.largeHeight / self.nzHeight;
                    if (self.options.zoomType != "lens") {


                        
                        
                        if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                            lensHeight = self.nzHeight;

                        } else {
                            lensHeight = String((self.options.zoomWindowHeight / self.heightRatio))
                        }

                        if (self.nzWidth < self.options.zoomWindowHeight / self.heightRatio) {
                            lensWidth = self.nzWidth;
                        } else {
                            lensWidth = String((self.options.zoomWindowWidth / self.widthRatio));
                        }

                        self.zoomLens.css('width', lensWidth);
                        self.zoomLens.css('height', lensHeight);

                        if (self.options.tint) {
                            self.zoomTintImage.css('width', self.nzWidth);
                            self.zoomTintImage.css('height', self.nzHeight);
                        }

                    }
                    if (self.options.zoomType == "lens") {

                        self.zoomLens.css({ width: String(self.options.lensSize) + 'px', height: String(self.options.lensSize) + 'px' })


                    }
                    
                }
            }

            
            self.zoomContainer.css({ top: self.nzOffset.top });
            self.zoomContainer.css({ left: self.nzOffset.left });
            self.mouseLeft = parseInt(e.pageX - self.nzOffset.left);
            self.mouseTop = parseInt(e.pageY - self.nzOffset.top);
            

            
            if (self.options.zoomType == "window") {
                self.Etoppos = (self.mouseTop < (self.zoomLens.height() / 2));
                self.Eboppos = (self.mouseTop > self.nzHeight - (self.zoomLens.height() / 2) - (self.options.lensBorderSize * 2));
                self.Eloppos = (self.mouseLeft < 0 + ((self.zoomLens.width() / 2)));
                self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.zoomLens.width() / 2) - (self.options.lensBorderSize * 2)));
            }
            
            if (self.options.zoomType == "inner") {
                self.Etoppos = (self.mouseTop < ((self.nzHeight / 2) / self.heightRatio));
                self.Eboppos = (self.mouseTop > (self.nzHeight - ((self.nzHeight / 2) / self.heightRatio)));
                self.Eloppos = (self.mouseLeft < 0 + (((self.nzWidth / 2) / self.widthRatio)));
                self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.nzWidth / 2) / self.widthRatio - (self.options.lensBorderSize * 2)));
            }

            
            if (self.mouseLeft < 0 || self.mouseTop < 0 || self.mouseLeft > self.nzWidth || self.mouseTop > self.nzHeight) {
                self.setElements("hide");
                return;
            }
            
            else {


                
                if (self.options.showLens) {
                    
                    
                    self.lensLeftPos = String(Math.floor(self.mouseLeft - self.zoomLens.width() / 2));
                    self.lensTopPos = String(Math.floor(self.mouseTop - self.zoomLens.height() / 2));


                }
                

                
                if (self.Etoppos) {
                    self.lensTopPos = 0;
                }
                
                if (self.Eloppos) {
                    self.windowLeftPos = 0;
                    self.lensLeftPos = 0;
                    self.tintpos = 0;
                }
                
                if (self.options.zoomType == "window") {
                    if (self.Eboppos) {
                        self.lensTopPos = Math.max((self.nzHeight) - self.zoomLens.height() - (self.options.lensBorderSize * 2), 0);
                    }
                    if (self.Eroppos) {
                        self.lensLeftPos = (self.nzWidth - (self.zoomLens.width()) - (self.options.lensBorderSize * 2));
                    }
                }
                
                if (self.options.zoomType == "inner") {
                    if (self.Eboppos) {
                        self.lensTopPos = Math.max(((self.nzHeight) - (self.options.lensBorderSize * 2)), 0);
                    }
                    if (self.Eroppos) {
                        self.lensLeftPos = (self.nzWidth - (self.nzWidth) - (self.options.lensBorderSize * 2));
                    }

                }
                
                if (self.options.zoomType == "lens") {
                    self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * (-1));
                    self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * (-1));

                    self.zoomLens.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });

                    if (self.changeBgSize) {

                        if (self.nzHeight > self.nzWidth) {
                            if (self.options.zoomType == "lens") {
                                self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                            }

                            self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                        } else {
                            if (self.options.zoomType == "lens") {
                                self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                            }
                            self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                        }
                        self.changeBgSize = false;
                    }

                    self.setWindowPostition(e);
                }
                
                if (self.options.tint && self.options.zoomType != "inner") {
                    self.setTintPosition(e);

                }
                
                if (self.options.zoomType == "window") {
                    self.setWindowPostition(e);
                }
                if (self.options.zoomType == "inner") {
                    self.setWindowPostition(e);
                }
                if (self.options.showLens) {

                    if (self.fullwidth && self.options.zoomType != "lens") {
                        self.lensLeftPos = 0;

                    }
                    self.zoomLens.css({ left: self.lensLeftPos + 'px', top: self.lensTopPos + 'px' })
                }

            } 



        },
        showHideWindow: function(change) {
            var self = this;
            if (change == "show") {
                if (!self.isWindowActive) {
                    if (self.options.zoomWindowFadeIn) {
                        self.zoomWindow.stop(true, true, false).fadeIn(self.options.zoomWindowFadeIn);
                    } else { self.zoomWindow.show(); }
                    self.isWindowActive = true;
                }
            }
            if (change == "hide") {
                if (self.isWindowActive) {
                    if (self.options.zoomWindowFadeOut) {
                        self.zoomWindow.stop(true, true).fadeOut(self.options.zoomWindowFadeOut, function() {
                            if (self.loop) {
                                
                                clearInterval(self.loop);
                                self.loop = false;
                            }
                        });
                    } else { self.zoomWindow.hide(); }
                    self.isWindowActive = false;
                }
            }
        },
        showHideLens: function(change) {
            var self = this;
            if (change == "show") {
                if (!self.isLensActive) {
                    if (self.options.lensFadeIn) {
                        self.zoomLens.stop(true, true, false).fadeIn(self.options.lensFadeIn);
                    } else { self.zoomLens.show(); }
                    self.isLensActive = true;
                }
            }
            if (change == "hide") {
                if (self.isLensActive) {
                    if (self.options.lensFadeOut) {
                        self.zoomLens.stop(true, true).fadeOut(self.options.lensFadeOut);
                    } else { self.zoomLens.hide(); }
                    self.isLensActive = false;
                }
            }
        },
        showHideTint: function(change) {
            var self = this;
            if (change == "show") {
                if (!self.isTintActive) {

                    if (self.options.zoomTintFadeIn) {
                        self.zoomTint.css({ opacity: self.options.tintOpacity }).animate().stop(true, true).fadeIn("slow");
                    } else {
                        self.zoomTint.css({ opacity: self.options.tintOpacity }).animate();
                        self.zoomTint.show();


                    }
                    self.isTintActive = true;
                }
            }
            if (change == "hide") {
                if (self.isTintActive) {

                    if (self.options.zoomTintFadeOut) {
                        self.zoomTint.stop(true, true).fadeOut(self.options.zoomTintFadeOut);
                    } else { self.zoomTint.hide(); }
                    self.isTintActive = false;
                }
            }
        },
        setLensPostition: function(e) {


        },
        setWindowPostition: function(e) {
            
            var self = this;

            if (!isNaN(self.options.zoomWindowPosition)) {

                switch (self.options.zoomWindowPosition) {
                    case 1: 
                        self.windowOffsetTop = (self.options.zoomWindowOffety); 
                        self.windowOffsetLeft = (+self.nzWidth); 
                        break;
                    case 2:
                        if (self.options.zoomWindowHeight > self.nzHeight) { 

                            self.windowOffsetTop = ((self.options.zoomWindowHeight / 2) - (self.nzHeight / 2)) * (-1);
                            self.windowOffsetLeft = (self.nzWidth); 
                        } else { 

                        }
                        break;
                    case 3: 
                        self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize * 2)); 
                        self.windowOffsetLeft = (self.nzWidth); 
                        break;
                    case 4: 
                        self.windowOffsetTop = (self.nzHeight); 
                        self.windowOffsetLeft = (self.nzWidth); 
                        break;
                    case 5: 
                        self.windowOffsetTop = (self.nzHeight); 
                        self.windowOffsetLeft = (self.nzWidth - self.zoomWindow.width() - (self.options.borderSize * 2)); 
                        break;
                    case 6:
                        if (self.options.zoomWindowHeight > self.nzHeight) { 
                            self.windowOffsetTop = (self.nzHeight); 

                            self.windowOffsetLeft = ((self.options.zoomWindowWidth / 2) - (self.nzWidth / 2) + (self.options.borderSize * 2)) * (-1);
                        } else { 

                        }


                        break;
                    case 7: 
                        self.windowOffsetTop = (self.nzHeight); 
                        self.windowOffsetLeft = 0; 
                        break;
                    case 8: 
                        self.windowOffsetTop = (self.nzHeight); 
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1); 
                        break;
                    case 9: 
                        self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize * 2)); 
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1); 
                        break;
                    case 10:
                        if (self.options.zoomWindowHeight > self.nzHeight) { 

                            self.windowOffsetTop = ((self.options.zoomWindowHeight / 2) - (self.nzHeight / 2)) * (-1);
                            self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1); 
                        } else { 

                        }
                        break;
                    case 11:
                        self.windowOffsetTop = (self.options.zoomWindowOffety);
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1); 
                        break;
                    case 12: 
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); 
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1); 
                        break;
                    case 13: 
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); 
                        self.windowOffsetLeft = (0); 
                        break;
                    case 14:
                        if (self.options.zoomWindowHeight > self.nzHeight) { 
                            self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); 

                            self.windowOffsetLeft = ((self.options.zoomWindowWidth / 2) - (self.nzWidth / 2) + (self.options.borderSize * 2)) * (-1);
                        } else { 

                        }

                        break;
                    case 15: 
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); 
                        self.windowOffsetLeft = (self.nzWidth - self.zoomWindow.width() - (self.options.borderSize * 2)); 
                        break;
                    case 16: 
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); 
                        self.windowOffsetLeft = (self.nzWidth); 
                        break;
                    default: 
                        self.windowOffsetTop = (self.options.zoomWindowOffety); 
                        self.windowOffsetLeft = (self.nzWidth); 
                }
            } 
            else {
                
                self.externalContainer = $('#' + self.options.zoomWindowPosition);
                self.externalContainerWidth = self.externalContainer.width();
                self.externalContainerHeight = self.externalContainer.height();
                self.externalContainerOffset = self.externalContainer.offset();

                self.windowOffsetTop = self.externalContainerOffset.top; 
                self.windowOffsetLeft = self.externalContainerOffset.left; 

            }
            self.isWindowSet = true;
            self.windowOffsetTop = self.windowOffsetTop + self.options.zoomWindowOffety;
            self.windowOffsetLeft = self.windowOffsetLeft + self.options.zoomWindowOffetx;

            self.zoomWindow.css({ top: self.windowOffsetTop });
            self.zoomWindow.css({ left: self.windowOffsetLeft });

            if (self.options.zoomType == "inner") {
                self.zoomWindow.css({ top: 0 });
                self.zoomWindow.css({ left: 0 });

            }


            self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1));
            self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));
            if (self.Etoppos) { self.windowTopPos = 0; }
            if (self.Eloppos) { self.windowLeftPos = 0; }
            if (self.Eboppos) { self.windowTopPos = (self.largeHeight / self.currentZoomLevel - self.zoomWindow.height()) * (-1); }
            if (self.Eroppos) { self.windowLeftPos = ((self.largeWidth / self.currentZoomLevel - self.zoomWindow.width()) * (-1)); }

            
            if (self.fullheight) {
                self.windowTopPos = 0;

            }
            if (self.fullwidth) {
                self.windowLeftPos = 0;

            }
            


            if (self.options.zoomType == "window" || self.options.zoomType == "inner") {

                if (self.zoomLock == 1) {
                    
                    if (self.widthRatio <= 1) {

                        self.windowLeftPos = 0;
                    }
                    if (self.heightRatio <= 1) {
                        self.windowTopPos = 0;
                    }
                }
                

                if (self.options.zoomType == "window") {
                    if (self.largeHeight < self.options.zoomWindowHeight) {

                        self.windowTopPos = 0;
                    }
                    if (self.largeWidth < self.options.zoomWindowWidth) {
                        self.windowLeftPos = 0;
                    }
                }

                
                if (self.options.easing) {

                    
                    
                    
                    

                    
                    
                    if (!self.xp) { self.xp = 0; }
                    if (!self.yp) { self.yp = 0; }
                    
                    if (!self.loop) {
                        self.loop = setInterval(function() {
                            

                            self.xp += (self.windowLeftPos - self.xp) / self.options.easingAmount;
                            self.yp += (self.windowTopPos - self.yp) / self.options.easingAmount;
                            if (self.scrollingLock) {


                                clearInterval(self.loop);
                                self.xp = self.windowLeftPos;
                                self.yp = self.windowTopPos

                                self.xp = ((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1);
                                self.yp = (((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));

                                if (self.changeBgSize) {
                                    if (self.nzHeight > self.nzWidth) {
                                        if (self.options.zoomType == "lens") {
                                            self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                        }
                                        self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                    } else {
                                        if (self.options.zoomType != "lens") {
                                            self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                        }
                                        self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });

                                    }
                                    self.changeBgSize = false;
                                }

                                self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
                                self.scrollingLock = false;
                                self.loop = false;

                            } else if (Math.round(Math.abs(self.xp - self.windowLeftPos) + Math.abs(self.yp - self.windowTopPos)) < 1) {
                                
                                clearInterval(self.loop);
                                self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
                                self.loop = false;
                            } else {
                                if (self.changeBgSize) {
                                    if (self.nzHeight > self.nzWidth) {
                                        if (self.options.zoomType == "lens") {
                                            self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                        }
                                        self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                    } else {
                                        if (self.options.zoomType != "lens") {
                                            self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                                        }
                                        self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                                    }
                                    self.changeBgSize = false;
                                }

                                self.zoomWindow.css({ backgroundPosition: self.xp + 'px ' + self.yp + 'px' });
                            }
                        }, 16);
                    }
                } else {
                    if (self.changeBgSize) {
                        if (self.nzHeight > self.nzWidth) {
                            if (self.options.zoomType == "lens") {
                                self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                            }

                            self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                        } else {
                            if (self.options.zoomType == "lens") {
                                self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                            }
                            if ((self.largeHeight / self.newvaluewidth) < self.options.zoomWindowHeight) {

                                self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                            } else {

                                self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                            }

                        }
                        self.changeBgSize = false;
                    }

                    self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
                }
            }
        },
        setTintPosition: function(e) {
            var self = this;
            self.nzOffset = self.$elem.offset();
            self.tintpos = String(((e.pageX - self.nzOffset.left) - (self.zoomLens.width() / 2)) * (-1));
            self.tintposy = String(((e.pageY - self.nzOffset.top) - self.zoomLens.height() / 2) * (-1));
            if (self.Etoppos) {
                self.tintposy = 0;
            }
            if (self.Eloppos) {
                self.tintpos = 0;
            }
            if (self.Eboppos) {
                self.tintposy = (self.nzHeight - self.zoomLens.height() - (self.options.lensBorderSize * 2)) * (-1);
            }
            if (self.Eroppos) {
                self.tintpos = ((self.nzWidth - self.zoomLens.width() - (self.options.lensBorderSize * 2)) * (-1));
            }
            if (self.options.tint) {
                
                if (self.fullheight) {
                    self.tintposy = 0;

                }
                if (self.fullwidth) {
                    self.tintpos = 0;

                }
                self.zoomTintImage.css({ 'left': self.tintpos + 'px' });
                self.zoomTintImage.css({ 'top': self.tintposy + 'px' });
            }
        },

        swaptheimage: function(smallimage, largeimage) {
            var self = this;
            var newImg = new Image();

            if (self.options.loadingIcon) {
                self.spinner = $('<div style="background: url(\'' + self.options.loadingIcon + '\') no-repeat center;height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>');
                self.$elem.after(self.spinner);
            }

            self.options.onImageSwap(self.$elem);

            newImg.onload = function() {
                self.largeWidth = newImg.width;
                self.largeHeight = newImg.height;
                self.zoomImage = largeimage;
                self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });
                self.swapAction(smallimage, largeimage);
                return;
            }
            newImg.src = largeimage; 

        },
        swapAction: function(smallimage, largeimage) {


            var self = this;

            var newImg2 = new Image();
            newImg2.onload = function() {
                
                self.nzHeight = newImg2.height;
                self.nzWidth = newImg2.width;
                self.options.onImageSwapComplete(self.$elem);

                self.doneCallback();
                return;
            }
            newImg2.src = smallimage;

            
            self.currentZoomLevel = self.options.zoomLevel;
            self.options.maxZoomLevel = false;

            
            
            
            if (self.options.zoomType == "lens") {
                self.zoomLens.css({ backgroundImage: "url('" + largeimage + "')" });
            }
            if (self.options.zoomType == "window") {
                self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" });
            }
            if (self.options.zoomType == "inner") {
                self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" });
            }



            self.currentImage = largeimage;

            if (self.options.imageCrossfade) {
                var oldImg = self.$elem;
                var newImg = oldImg.clone();
                self.$elem.attr("src", smallimage)
                self.$elem.after(newImg);
                newImg.stop(true).fadeOut(self.options.imageCrossfade, function() {
                    $(this).remove();
                });

                
                
                self.$elem.width("auto").removeAttr("width");
                self.$elem.height("auto").removeAttr("height");
                

                oldImg.fadeIn(self.options.imageCrossfade);

                if (self.options.tint && self.options.zoomType != "inner") {

                    var oldImgTint = self.zoomTintImage;
                    var newImgTint = oldImgTint.clone();
                    self.zoomTintImage.attr("src", largeimage)
                    self.zoomTintImage.after(newImgTint);
                    newImgTint.stop(true).fadeOut(self.options.imageCrossfade, function() {
                        $(this).remove();
                    });



                    oldImgTint.fadeIn(self.options.imageCrossfade);


                    

                    
                    self.zoomTint.css({ height: self.$elem.height() });
                    self.zoomTint.css({ width: self.$elem.width() });
                }

                self.zoomContainer.css("height", self.$elem.height());
                self.zoomContainer.css("width", self.$elem.width());

                if (self.options.zoomType == "inner") {
                    if (!self.options.constrainType) {
                        self.zoomWrap.parent().css("height", self.$elem.height());
                        self.zoomWrap.parent().css("width", self.$elem.width());

                        self.zoomWindow.css("height", self.$elem.height());
                        self.zoomWindow.css("width", self.$elem.width());
                    }
                }

                if (self.options.imageCrossfade) {
                    self.zoomWrap.css("height", self.$elem.height());
                    self.zoomWrap.css("width", self.$elem.width());
                }
            } else {
                self.$elem.attr("src", smallimage);
                if (self.options.tint) {
                    self.zoomTintImage.attr("src", largeimage);
                    
                    self.zoomTintImage.attr("height", self.$elem.height());
                    
                    self.zoomTintImage.css({ height: self.$elem.height() });
                    self.zoomTint.css({ height: self.$elem.height() });

                }
                self.zoomContainer.css("height", self.$elem.height());
                self.zoomContainer.css("width", self.$elem.width());

                if (self.options.imageCrossfade) {
                    self.zoomWrap.css("height", self.$elem.height());
                    self.zoomWrap.css("width", self.$elem.width());
                }
            }
            if (self.options.constrainType) {

                
                if (self.options.constrainType == "height") {

                    self.zoomContainer.css("height", self.options.constrainSize);
                    self.zoomContainer.css("width", "auto");

                    if (self.options.imageCrossfade) {
                        self.zoomWrap.css("height", self.options.constrainSize);
                        self.zoomWrap.css("width", "auto");
                        self.constwidth = self.zoomWrap.width();


                    } else {
                        self.$elem.css("height", self.options.constrainSize);
                        self.$elem.css("width", "auto");
                        self.constwidth = self.$elem.width();
                    }

                    if (self.options.zoomType == "inner") {

                        self.zoomWrap.parent().css("height", self.options.constrainSize);
                        self.zoomWrap.parent().css("width", self.constwidth);
                        self.zoomWindow.css("height", self.options.constrainSize);
                        self.zoomWindow.css("width", self.constwidth);
                    }
                    if (self.options.tint) {
                        self.tintContainer.css("height", self.options.constrainSize);
                        self.tintContainer.css("width", self.constwidth);
                        self.zoomTint.css("height", self.options.constrainSize);
                        self.zoomTint.css("width", self.constwidth);
                        self.zoomTintImage.css("height", self.options.constrainSize);
                        self.zoomTintImage.css("width", self.constwidth);
                    }

                }
                if (self.options.constrainType == "width") {
                    self.zoomContainer.css("height", "auto");
                    self.zoomContainer.css("width", self.options.constrainSize);

                    if (self.options.imageCrossfade) {
                        self.zoomWrap.css("height", "auto");
                        self.zoomWrap.css("width", self.options.constrainSize);
                        self.constheight = self.zoomWrap.height();
                    } else {
                        self.$elem.css("height", "auto");
                        self.$elem.css("width", self.options.constrainSize);
                        self.constheight = self.$elem.height();
                    }
                    if (self.options.zoomType == "inner") {
                        self.zoomWrap.parent().css("height", self.constheight);
                        self.zoomWrap.parent().css("width", self.options.constrainSize);
                        self.zoomWindow.css("height", self.constheight);
                        self.zoomWindow.css("width", self.options.constrainSize);
                    }
                    if (self.options.tint) {
                        self.tintContainer.css("height", self.constheight);
                        self.tintContainer.css("width", self.options.constrainSize);
                        self.zoomTint.css("height", self.constheight);
                        self.zoomTint.css("width", self.options.constrainSize);
                        self.zoomTintImage.css("height", self.constheight);
                        self.zoomTintImage.css("width", self.options.constrainSize);
                    }

                }


            }

        },
        doneCallback: function() {

            var self = this;
            if (self.options.loadingIcon) {
                self.spinner.hide();
            }

            self.nzOffset = self.$elem.offset();
            self.nzWidth = self.$elem.width();
            self.nzHeight = self.$elem.height();

            
            self.currentZoomLevel = self.options.zoomLevel;

            
            self.widthRatio = self.largeWidth / self.nzWidth;
            self.heightRatio = self.largeHeight / self.nzHeight;

            
            
            if (self.options.zoomType == "window") {

                if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                    lensHeight = self.nzHeight;

                } else {
                    lensHeight = String((self.options.zoomWindowHeight / self.heightRatio))
                }

                if (self.options.zoomWindowWidth < self.options.zoomWindowWidth) {
                    lensWidth = self.nzWidth;
                } else {
                    lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                }


                if (self.zoomLens) {

                    self.zoomLens.css('width', lensWidth);
                    self.zoomLens.css('height', lensHeight);


                }
            }
        },
        getCurrentImage: function() {
            var self = this;
            return self.zoomImage;
        },
        getGalleryList: function() {
            var self = this;
            
            self.gallerylist = [];
            if (self.options.gallery) {


                $('#' + self.options.gallery + ' a').each(function() {

                    var img_src = '';
                    if ($(this).data("zoom-image")) {
                        img_src = $(this).data("zoom-image");
                    } else if ($(this).data("image")) {
                        img_src = $(this).data("image");
                    }
                    
                    if (img_src == self.zoomImage) {
                        self.gallerylist.unshift({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    } else {
                        self.gallerylist.push({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }


                });
            }
            
            else {
                self.gallerylist.push({
                    href: '' + self.zoomImage + '',
                    title: $(this).find('img').attr("title")
                });
            }
            return self.gallerylist;

        },
        changeZoomLevel: function(value) {
            var self = this;

            
            self.scrollingLock = true;

            
            self.newvalue = parseFloat(value).toFixed(2);
            newvalue = parseFloat(value).toFixed(2);




            
            maxheightnewvalue = self.largeHeight / ((self.options.zoomWindowHeight / self.nzHeight) * self.nzHeight);
            maxwidthtnewvalue = self.largeWidth / ((self.options.zoomWindowWidth / self.nzWidth) * self.nzWidth);




            
            if (self.options.zoomType != "inner") {
                if (maxheightnewvalue <= newvalue) {
                    self.heightRatio = (self.largeHeight / maxheightnewvalue) / self.nzHeight;
                    self.newvalueheight = maxheightnewvalue;
                    self.fullheight = true;

                } else {
                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;
                    self.newvalueheight = newvalue;
                    self.fullheight = false;

                }


                

                if (maxwidthtnewvalue <= newvalue) {
                    self.widthRatio = (self.largeWidth / maxwidthtnewvalue) / self.nzWidth;
                    self.newvaluewidth = maxwidthtnewvalue;
                    self.fullwidth = true;

                } else {
                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    self.newvaluewidth = newvalue;
                    self.fullwidth = false;

                }
                if (self.options.zoomType == "lens") {
                    if (maxheightnewvalue <= newvalue) {
                        self.fullwidth = true;
                        self.newvaluewidth = maxheightnewvalue;

                    } else {
                        self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                        self.newvaluewidth = newvalue;

                        self.fullwidth = false;
                    }
                }
            }



            if (self.options.zoomType == "inner") {
                maxheightnewvalue = parseFloat(self.largeHeight / self.nzHeight).toFixed(2);
                maxwidthtnewvalue = parseFloat(self.largeWidth / self.nzWidth).toFixed(2);
                if (newvalue > maxheightnewvalue) {
                    newvalue = maxheightnewvalue;
                }
                if (newvalue > maxwidthtnewvalue) {
                    newvalue = maxwidthtnewvalue;
                }


                if (maxheightnewvalue <= newvalue) {


                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;
                    if (newvalue > maxheightnewvalue) {
                        self.newvalueheight = maxheightnewvalue;
                    } else {
                        self.newvalueheight = newvalue;
                    }
                    self.fullheight = true;


                } else {



                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;

                    if (newvalue > maxheightnewvalue) {

                        self.newvalueheight = maxheightnewvalue;
                    } else {
                        self.newvalueheight = newvalue;
                    }
                    self.fullheight = false;
                }




                if (maxwidthtnewvalue <= newvalue) {

                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    if (newvalue > maxwidthtnewvalue) {

                        self.newvaluewidth = maxwidthtnewvalue;
                    } else {
                        self.newvaluewidth = newvalue;
                    }

                    self.fullwidth = true;


                } else {

                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    self.newvaluewidth = newvalue;
                    self.fullwidth = false;
                }


            } 
            scrcontinue = false;

            if (self.options.zoomType == "inner") {

                if (self.nzWidth >= self.nzHeight) {
                    if (self.newvaluewidth <= maxwidthtnewvalue) {
                        scrcontinue = true;
                    } else {

                        scrcontinue = false;
                        self.fullheight = true;
                        self.fullwidth = true;
                    }
                }
                if (self.nzHeight > self.nzWidth) {
                    if (self.newvaluewidth <= maxwidthtnewvalue) {
                        scrcontinue = true;
                    } else {
                        scrcontinue = false;

                        self.fullheight = true;
                        self.fullwidth = true;
                    }
                }
            }

            if (self.options.zoomType != "inner") {
                scrcontinue = true;
            }

            if (scrcontinue) {



                self.zoomLock = 0;
                self.changeZoom = true;

                


                if (((self.options.zoomWindowHeight) / self.heightRatio) <= self.nzHeight) {


                    self.currentZoomLevel = self.newvalueheight;
                    if (self.options.zoomType != "lens" && self.options.zoomType != "inner") {
                        self.changeBgSize = true;

                        self.zoomLens.css({ height: String((self.options.zoomWindowHeight) / self.heightRatio) + 'px' })
                    }
                    if (self.options.zoomType == "lens" || self.options.zoomType == "inner") {
                        self.changeBgSize = true;
                    }


                }




                if ((self.options.zoomWindowWidth / self.widthRatio) <= self.nzWidth) {



                    if (self.options.zoomType != "inner") {
                        if (self.newvaluewidth > self.newvalueheight) {
                            self.currentZoomLevel = self.newvaluewidth;

                        }
                    }

                    if (self.options.zoomType != "lens" && self.options.zoomType != "inner") {
                        self.changeBgSize = true;

                        self.zoomLens.css({ width: String((self.options.zoomWindowWidth) / self.widthRatio) + 'px' })
                    }
                    if (self.options.zoomType == "lens" || self.options.zoomType == "inner") {
                        self.changeBgSize = true;
                    }

                }
                if (self.options.zoomType == "inner") {
                    self.changeBgSize = true;

                    if (self.nzWidth > self.nzHeight) {
                        self.currentZoomLevel = self.newvaluewidth;
                    }
                    if (self.nzHeight > self.nzWidth) {
                        self.currentZoomLevel = self.newvaluewidth;
                    }
                }

            } 

            
            self.setPosition(self.currentLoc);
            
        },
        closeAll: function() {
            if (self.zoomWindow) { self.zoomWindow.hide(); }
            if (self.zoomLens) { self.zoomLens.hide(); }
            if (self.zoomTint) { self.zoomTint.hide(); }
        },
        changeState: function(value) {
            var self = this;
            if (value == 'enable') { self.options.zoomEnabled = true; }
            if (value == 'disable') { self.options.zoomEnabled = false; }

        }

    };




    $.fn.elevateZoom = function(options) {
        return this.each(function() {
            var elevate = Object.create(ElevateZoom);

            elevate.init(options, this);

            $.data(this, 'elevateZoom', elevate);

        });
    };

    $.fn.elevateZoom.options = {
        zoomActivation: "hover", 
        zoomEnabled: true, 
        preloading: 1, 
        zoomLevel: 1, 
        scrollZoom: false, 
        scrollZoomIncrement: 0.1, 
        minZoomLevel: false,
        maxZoomLevel: false,
        easing: false,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 303,
        zoomWindowHeight: 303,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: false,
        lensFadeOut: false,
        debug: false,
        zoomWindowFadeIn: false,
        zoomWindowFadeOut: false,
        zoomWindowAlwaysShow: false,
        zoomTintFadeIn: false,
        zoomTintFadeOut: false,
        borderSize: 4,
        showLens: true,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square", 
        zoomType: "window", 
        containLensZoom: false,
        lensColour: "white", 
        lensOpacity: 0.4, 
        lenszoom: false,
        tint: false, 
        tintColour: "#333", 
        tintOpacity: 0.4, 
        gallery: false,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: false,
        constrainType: false, 
        constrainSize: false, 
        loadingIcon: false, 
        cursor: "default", 
        responsive: true,
        onComplete: $.noop,
        onDestroy: function() {},
        onZoomedImageLoaded: function() {},
        onImageSwap: $.noop,
        onImageSwapComplete: $.noop
    };

})(jQuery, window, document);
var colors = [];

var zoomOptions = {
  zoomWindowHeight: 300,
  zoomWindowWidth: 600,
  borderSize: 0,
  easing: true,
  zoomWindowPosition: 11,
};

$(document).ready(function () {
  $('.regular').slick({
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.thumbs',
    autoplay: false,
  });

  $('.thumbs').slick({
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.regular',
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
  });
  $('.regular .slick-current img').elevateZoom(zoomOptions);
  $('.regular').on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      $.removeData(currentSlide, 'elevateZoom');
      $('.zoomContainer').remove();
    }
  );
  $('.regular').on('afterChange', function () {
    $('.regular .slick-current img').elevateZoom(zoomOptions);
  });
});

function filter(key) {
  $('.regular, .thumbs').slick('slickUnfilter');

  if (typeof key === 'string') {
    $('.regular, .thumbs').slick('slickFilter', 'div[data-color="${key}"]');
  }
  $('.regular, .thumbs').slick('refresh');
}

(function(r, G, f, v) {
    var J = f("html"),
        n = f(r),
        p = f(G),
        b = f.fancybox = function() { b.open.apply(this, arguments) },
        I = navigator.userAgent.match(/msie/i),
        B = null,
        s = G.createTouch !== v,
        t = function(a) { return a && a.hasOwnProperty && a instanceof f },
        q = function(a) { return a && "string" === f.type(a) },
        E = function(a) { return q(a) && 0 < a.indexOf("%") },
        l = function(a, d) { var e = parseInt(a, 10) || 0;
            d && E(a) && (e *= b.getViewport()[d] / 100); return Math.ceil(e) },
        w = function(a, b) { return l(a, b) + "px" };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
            iframe: { scrolling: "auto", preload: !0 },
            swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
            keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] },
            direction: { next: "left", prev: "right" },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (I ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: { overlay: !0, title: !0 },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: { timer: null, isActive: !1 },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                var k = {},
                    g, h, j, m, l;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = { href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c }, f.metadata && f.extend(!0, k,
                    c.metadata())) : k = c);
                g = d.href || k.href || (q(c) ? c : null);
                h = d.title !== v ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;
                !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g &&
                    k.isDom) && (m = "inline", j = c));
                f.extend(k, { href: g, type: m, content: j, title: h, selector: l });
                a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
                b._afterZoomOut(a))
        },
        close: function(a) { b.cancel();!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()))) },
        play: function(a) {
            var d = function() { clearTimeout(b.player.timer) },
                e = function() {
                    d();
                    b.current && b.player.isActive && (b.player.timer =
                        setTimeout(b.next, b.current.playSpeed))
                },
                c = function() { d();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd") };
            if (!0 === a || !b.player.isActive && !1 !== a) { if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart") } else c()
        },
        next: function(a) { var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next")) },
        prev: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) { var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a))) },
        reposition: function(a, d) { var e = b.current,
                c = e ? e.wrap : null,
                k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k))) },
        update: function(a) {
            var d =
                a && a.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null);
            b.isOpen && !B && (B = setTimeout(function() { var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null) }, e && !s ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")),
                b.update())
        },
        hideLoading: function() { p.unbind(".loading");
            f("#fancybox-loading").remove() },
        showLoading: function() { var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function(a) { if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel() });
            b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x })) },
        getViewport: function() {
            var a = b.current && b.current.locked || !1,
                d = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        },
        unbindEvents: function() { b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb") },
        bindEvents: function() {
            var a = b.current,
                d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode,
                    k = e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) { if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1; if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1 })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
                    (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) { if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
                    d.preventDefault() }
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        },
        isImage: function(a) { return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) },
        isSWF: function(a) { return q(a) && a.match(/\.(swf)((\?|#).*)?$/i) },
        _start: function(a) {
            var d = {},
                e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: { overlay: { closeClick: !1 } }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) { d.skin.css("padding" + b, w(d.padding[a])) });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) { if (!d.content || !d.content.length) return b._error("content") } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) { f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error });
            b._afterLoad() },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() { this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad() };
            a.onerror = function() {
                this.onload =
                    this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() { var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function(a, e) { b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading() }, success: function(d, e) { "success" === e && (a.content = d, b._afterLoad()) } })) },
        _loadIframe: function() {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() { try { f(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (a) {} });
            a.iframe.preload && (b.showLoading(), d.one("load", function() { f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad() }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function() {
            var a = b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload,
                    e - 1) : 0,
                f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var a = b.coming,
                d = b.current,
                e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() { f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1) }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}",
                                g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) { e += '<param name="' + a + '" value="' + b + '"></param>';
                                h += " " + a + '="' + b + '"' }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" :
                        "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) { if (d.prevMethod) b.transitions[d.prevMethod]() } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function() {
            var a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                k = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                j = h.height,
                m = h.minWidth,
                u = h.minHeight,
                n = h.maxWidth,
                p = h.maxHeight,
                s = h.scrolling,
                q = h.scrollOutside ?
                h.scrollbarWidth : 0,
                x = h.margin,
                y = l(x[1] + x[3]),
                r = l(x[0] + x[2]),
                v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) { if (H = h.content, h.autoHeight && 1 === H.data("ready")) try { H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0)) } catch (G) {} } else if (h.autoWidth ||
                h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight &&
                "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)
                if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
                    for (;
                        (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
                else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, { dim: { width: w(a), height: w(y) }, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = { position: "absolute", top: c[0], left: c[3] };
            d.autoCenter && d.fixed &&
                !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
                    b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) { a.preventDefault();
                b.close() }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function(a) {
            a =
                a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function() {
            var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                j = a.wPadding,
                m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
                (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
            return c = { top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h) }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace,
                h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" ===
                f ? c : c - g * e - h * e))
        },
        zoomIn: function() { var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                k = f.extend({ opacity: 1 }, d);
            delete k.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn }) },
        zoomOut: function() {
            var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = { opacity: 0.1 };
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut })
        },
        changeIn: function() { var a = b.current,
                d = a.nextEffect,
                e = a.pos,
                c = { opacity: 1 },
                f = b.direction,
                g;
            e.opacity = 0.1; "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px")); "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn }) },
        changeOut: function() {
            var a =
                b.previous,
                d = a.prevEffect,
                e = { opacity: 0.1 },
                c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function() { f(this).trigger("onReset").remove() } })
        }
    };
    b.helpers.overlay = {
        defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0 },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function(a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay =
                f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ?
                    b.close() : d.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function() { var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, { overlay: null, fixed: !1 }) },
        update: function() {
            var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
                p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function(a, b) { var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);!0 === a.showEarly && this.beforeShow.apply(this, arguments) },
        beforeShow: function(a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function() {
                return "fixed" ===
                    f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
            this.open(a)
        },
        onUpdate: function() { this.fixed || this.update() },
        afterClose: function(a) { this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this)) }
    };
    b.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function(a) {
            var d =
                b.current,
                e = d.title,
                c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) { d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>"); switch (c) {
                    case "inside":
                        c = b.skin; break;
                    case "outside":
                        c = b.wrap; break;
                    case "over":
                        c = b.inner; break;
                    default:
                        c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom"))) }
                d["top" === a.position ? "prependTo" : "appendTo"](c) }
        }
    };
    f.fn.fancybox = function(a) {
        var d,
            e = f(this),
            c = this.selector || "",
            k = function(g) { var h = f(this).blur(),
                    j = d,
                    k, l;!g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault()) };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c +
            ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function() {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function() { var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove(); return b });
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 ===
                d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") });
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);

!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);