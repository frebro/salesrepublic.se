(function(){var t,n,e=function(t,n){return function(){return t.apply(n,arguments)}},r={}.hasOwnProperty,o=function(t,n){function e(){this.constructor=t}for(var o in n)r.call(n,o)&&(t[o]=n[o]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t};t=function(){function t(){this.browserSupportsCSSProperty=e(this.browserSupportsCSSProperty,this)}return t.prototype.browserSupportsCSSProperty=function(t){var n,e,r,o,i,s;if(e=document.createElement("div"),t=t.toLowerCase(),void 0!==e.style[t])return!0;for(n="Webkit Moz ms O".split(" "),r=t.charAt(0).toUpperCase()+t.substr(1),o=i=0,s=n.length;s>=0?s>i:i>s;o=s>=0?++i:--i)if(void 0!==e.style[n[o]+r])return!0;return!1},t}(),n=function(t){function n(){this.animateInPresentElements=e(this.animateInPresentElements,this),this.browserSupportsCSSProperty("transition")&&(this.animateInClass="animate-in"),$(window).scroll(this.animateInPresentElements)}return o(n,t),n.prototype.animateInOffset=120,n.prototype.animateInClass="dont-animate",n.prototype.animateInPresentElements=function(t){var n,e,r,o=this;return e=$(window).height(),r=$(window).scrollTop(),n=e+r,$(".animate-in").not(".hidden").each(function(t,e){return $(e).offset().top+o.animateInOffset<n?$(e).removeClass(o.animateInClass):void 0})},n}(t),$(function(){return new n})}).call(this);