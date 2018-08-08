(function($) {
  $.fn.emailValidator = function() {
    var isEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return isEmail.test(this.val());
  };
})(jQuery);
