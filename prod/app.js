/* Theme Name: William Carriello - Firebox
   Author: Firebox
   Version: 1.0.0
   Created: September 2018
*/

(function ($) {

  var masks = ['(00) 00000-0000', '(00) 0000-00009'];
  $('.phone').mask(masks[1], {onKeyPress: 
     function(val, e, field, options) {
         field.mask(val.length > 14 ? masks[0] : masks[1], options) ;
     }
  });

  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  });

})(jQuery);
