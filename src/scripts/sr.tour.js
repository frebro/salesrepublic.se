;(function(window, document, $, undefined) {

  'use strict';

  /**
   * Plugin NAMESPACE
   * @type {String}
   * @api private
   */
  var NAMESPACE = 'sr.tour',
      SELECTOR = '.tour';

  /**
   * Plugin constructor
   * @param {Node} element
   * @param {Object} [options]
   * @api public
   */
  function Plugin (element, options) {
    this.options = $.extend(true, $.fn[NAMESPACE].defaults, options);
    this.$element = $(element);
    this.$locationControls = $('[data-target]', this.$element);
  }


  /**
   * Plugin prototype
   * @type {Object}
   * @api public
   */
  Plugin.prototype = {
    constructor: Plugin,
    version: '0.1.0',

    /**
     * Init method
     * @api public
     */
    init: function () {

      // Set up interactions for location controls
      this.$locationControls.on('mouseenter', $.proxy(this.enterLocationControl, this));
      this.$locationControls.on('mouseleave', $.proxy(this.leaveLocationControl, this));
      this.$locationControls.on('focusin', $.proxy(this.focusLocationControl, this));
      this.$locationControls.on('focusout', $.proxy(this.blurLocationControl, this));
    },

    /**
     * Mouse Enter Location Control method
     */
    enterLocationControl: function(event) {
      var $control = $(event.target);
      var targetId = $control.data('target');

      // Highlight any control with the targetId
      this.$locationControls.filter('[data-target="' + targetId + '"]').css('background-color', 'salmon');
    },

    /**
     * Mouse Leave Location Control method
     */
    leaveLocationControl: function(event) {
      var $control = $(event.target);
      var targetId = $control.data('target');

      // Remove highlight from any control with the targetId
      this.$locationControls.filter('[data-target="' + targetId + '"]').css('background-color', '');
    },

    /**
     * Focus Location Control method
     */
    focusLocationControl: function(event) {
      var $control = $(event.target);
      var targetId = $control.data('target');
      var $target = $('#' + targetId);

      // Highlight any control with the targetId
      this.$locationControls.filter('[data-target="' + targetId + '"]').css('background-color', 'salmon');

      // Make currently active target inactive
      if (this.options.activeTarget) {
        this.options.activeTarget.css('background-color', '');
      }

      // Set target to active
      $target.css('background-color', 'gold');
      this.options.activeTarget = $target;
    },

    /**
     * Blur Location Control method
     */
    blurLocationControl: function(event) {
      var $control = $(event.target);
      var targetId = $control.data('target');

      // Remove highlight from any control with the targetId
      this.$locationControls.filter('[data-target="' + targetId + '"]').css('background-color', '');
    },

  };

  /**
   * jQuery plugin definition
   * @param  {String} [method]
   * @param  {Object} [options]
   * @return {Object}
   * @api public
   */
  $.fn[NAMESPACE] = function (method, options) {
    return this.each(function () {
      var $this = $(this),
      data = $this.data(NAMESPACE);
      options = (typeof method === 'object') ? method : options;
      if (!data) {
        $this.data(NAMESPACE, (data = new Plugin(this, options)));
      }
      data[(typeof method === 'string') ? method : 'init']();
    });
  };

  /**
   * jQuery plugin defaults
   * @type {Object}
   * @api public
   */
  $.fn[NAMESPACE].defaults = {
    activeTarget: null
  };

  /**
   * jQuery plugin data api
   * @api public
   */
  $(window).on('load', function (event) {
    $(SELECTOR).each(function () {
      $(this)[NAMESPACE]();
    });
  });

}(this, this.document, this.jQuery));
