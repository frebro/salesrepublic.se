!function(t,o,e,i){"use strict";function n(t,o){this.options=e.extend(!0,e.fn[s].defaults,o),this.$element=e(t),this.$locationControls=e("[data-target]",this.$element),this.$stepsCloseButton=e(".tour__steps-close-button",this.$element)}var s="sr.tour",a=".tour";n.prototype={constructor:n,version:"0.1.0",init:function(){this.$locationControls.on("mouseenter",e.proxy(this.enterLocationControl,this)),this.$locationControls.on("mouseleave",e.proxy(this.leaveLocationControl,this)),this.$locationControls.on("click focusin",e.proxy(this.focusLocationControl,this)),this.$locationControls.on("focusout",e.proxy(this.blurLocationControl,this)),this.$stepsCloseButton.on("click",e.proxy(this.setTourInactive,this))},enterLocationControl:function(t){console.log("enterLocationControl");var o=e(t.target),i=o.data("target");this.$locationControls.filter('[data-target="'+i+'"]').addClass("is-active")},leaveLocationControl:function(t){console.log("leaveLocationControl");var o=e(t.target),i=o.data("target");this.$locationControls.filter('[data-target="'+i+'"]').removeClass("is-active")},focusLocationControl:function(t){console.log("focusLocationControl");var o=e(t.target),i=o.data("target"),n=e("#"+i);this.$locationControls.filter('[data-target="'+i+'"]').addClass("is-active"),this.options.activeStepId&&e("#"+this.options.activeStepId).removeClass("is-active"),n.addClass("is-active"),this.options.activeStepId=i,this.setActiveStep(i)},blurLocationControl:function(t){console.log("blurLocationControl");var o=e(t.target),i=o.data("target");this.$locationControls.filter('[data-target="'+i+'"]').removeClass("is-active")},setActiveStep:function(t){this.$element.addClass("is-step-active")},setTourInactive:function(){console.log("setTourInactive"),this.$element.removeClass("is-step-active")}},e.fn[s]=function(t,o){return this.each(function(){var i=e(this),a=i.data(s);o="object"==typeof t?t:o,a||i.data(s,a=new n(this,o)),a["string"==typeof t?t:"init"]()})},e.fn[s].defaults={activeStepId:null},e(t).on("load",function(t){e(a).each(function(){e(this)[s]()})})}(this,this.document,this.jQuery);