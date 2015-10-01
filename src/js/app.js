// nav link color fade
$(document).ready(function() {
	$('a').mouseenter(function() {
		$(this).fadeTo('fast', 0.5);
	});

	$('a').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
});

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