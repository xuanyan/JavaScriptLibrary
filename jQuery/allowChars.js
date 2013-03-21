(function($){

  jQuery.fn.allowChars = function(charsList, callback) {
    callback = callback || jQuery.noop;

    return this.each(function(){
      var self = this;
      jQuery(this.value.split('')).each(function(){
        if (this.match(charsList) == null) {
          callback.call(self, this);

          return false;
        }
      });
    });

  };

})(jQuery);