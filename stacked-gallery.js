(function($) {
  $.fn.reverse = [].reverse;
  $.fn.shift = [].shift;
  $.fn.push = [].push;
  
  $.fn.stackedGallery = function(params) {
    var elements = $(this).children().reverse();
    var params = $.extend( { display_duration: 4000, fadeout_duration: 800, fadein_duration: 200, n_elem: elements.length }, params);
    
    var animate = function() {
      var current = elements[0];
      
      $(current).fadeOut(params.fadeout_duration, function() {
        elements.shift();
        elements.push(current);
        
        $.each(elements, function(index, elem) {
          $(elem).css('z-index', (params.n_elem-index));
        });
        
        $(current).fadeIn(params.fadein_duration);
        setTimeout(function() { animate() }, params.display_duration);
      });
    }
    
    $.each(elements, function(index, elem) {
      $(elem).css('position', 'absolute');
    });
    
    setTimeout(function() { animate() }, params.display_duration);
    
    return $(this);
  };
})(jQuery);
