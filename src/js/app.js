// smooth scrolling to anchors
// Credit to Chris Coyier: https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// hover effect for portfolio boxes
$('.box').on({
  mouseenter: function() {
    $('#' + $(this).attr('id') + '-text').show();
  },
  mouseleave: function() {
    $('#' + $(this).attr('id') + '-text').hide();
  }
});
