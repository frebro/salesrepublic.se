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
    this.$stepsCloseButton = $('.tour__steps-close-button', this.$element);
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

      this.$stepsCloseButton.on('click', $.proxy(this.setTourInactive, this));
    },

    /**
     * Mouse Enter Location Control method
     */
    enterLocationControl: function(event) {
      var $control = $(event.target);
      var stepId = $control.data('target');

      // Highlight any control with the stepId
      this.$locationControls.filter('[data-target="' + stepId + '"]').addClass('is-active');
    },

    /**
     * Mouse Leave Location Control method
     */
    leaveLocationControl: function(event) {
      var $control = $(event.target);
      var stepId = $control.data('target');

      // Remove highlight from any control with the stepId
      this.$locationControls.filter('[data-target="' + stepId + '"]').removeClass('is-active');
    },

    /**
     * Focus Location Control method
     */
    focusLocationControl: function(event) {
      var $control = $(event.target);
      var stepId = $control.data('target');
      var $step = $('#' + stepId);

      // Highlight any control with the stepId
      this.$locationControls.filter('[data-target="' + stepId + '"]').addClass('is-active');

      // Make currently active target inactive
      if (this.options.activeStepId) {
        $('#' + this.options.activeStepId).removeClass('is-active');
      }

      // Set target to active
      $step.addClass('is-active');
      this.options.activeStepId = stepId;

      // Set active step
      this.setActiveStep(stepId);
    },

    /**
     * Blur Location Control method
     */
    blurLocationControl: function(event) {
      var $control = $(event.target);
      var stepId = $control.data('target');

      // Remove highlight from any control with the stepId
      this.$locationControls.filter('[data-target="' + stepId + '"]').removeClass('is-active');
    },

    /**
     * Set Step to Active
     */
    setActiveStep: function(stepId) {

      // Set class on container to signal that a step is active
      this.$element.addClass('is-step-active');
    },

    /**
     * Set Tour to Inactive
     */
    setTourInactive: function() {

      console.log('setTourInactive');

      // Remove class on container to signal that no steps are active
      this.$element.removeClass('is-step-active');
    }

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
    activeStepId: null
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
