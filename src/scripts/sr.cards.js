(function() {
  var Pages, Card,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Pages = (function() {
    function Pages() {
      this.browserSupportsCSSProperty = __bind(this.browserSupportsCSSProperty, this);
    }

    Pages.prototype.browserSupportsCSSProperty = function(featureName) {
      var domPrefixes, elm, featureNameCapital, i, _i, _ref;
      elm = document.createElement('div');
      featureName = featureName.toLowerCase();
      if (elm.style[featureName] !== void 0) {
        return true;
      }
      domPrefixes = 'Webkit Moz ms O'.split(' ');
      featureNameCapital = featureName.charAt(0).toUpperCase() + featureName.substr(1);
      for (i = _i = 0, _ref = domPrefixes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (elm.style[domPrefixes[i] + featureNameCapital] !== void 0) {
          return true;
        }
      }
      return false;
    };

    return Pages;

  })();

  Card = (function(_super) {
    __extends(Card, _super);

    Card.prototype.animateInOffset = 90;

    Card.prototype.animateInClass = "dont-animate";

    function Card() {
      this.animateInPresentElements = __bind(this.animateInPresentElements, this);
      if (this.browserSupportsCSSProperty("transition")) {
        this.animateInClass = "animate-in";
      }
      $(window).scroll(this.animateInPresentElements);
    }

    Card.prototype.animateInPresentElements = function(index) {
      var bottomScrollPosition, windowHeight, windowScrollPosition,
        _this = this;
      windowHeight = $(window).height();
      windowScrollPosition = $(window).scrollTop();
      bottomScrollPosition = windowHeight + windowScrollPosition;
      return $(".animate-in").not(".hidden").each(function(i, element) {
        if ($(element).offset().top + _this.animateInOffset < bottomScrollPosition) {
          return $(element).removeClass(_this.animateInClass);
        }
      });
    };

    return Card;

  })(Pages);

  $(function() {
    return new Card();
  });

}).call(this);
