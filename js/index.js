$('a[href*="#"]').not('[href="#"]').click(function(b) {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
    var a = $(this.hash), a = a.length ? a : $("[name=" + this.hash.slice(1) + "]");
    a.length && (b.preventDefault(), $("html, body").animate({scrollTop:a.offset().top}, 500, function() {
    }));
  }
});

$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});

$( document ).ready(function(){
  $(".button-collapse").sideNav();
});

