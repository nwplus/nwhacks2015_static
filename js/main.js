$.easing.easeInOutCubic = function (x, t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t*t + b;
	return c/2*((t-=2)*t*t + 2) + b;
}

$('header nav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500, "easeInOutCubic");
    return false;
});

$("#faq nav a").click(function(e) {
	e.preventDefault();
	$("#faq article").removeAttr("class");
	$("#faq nav a").removeAttr("class");
	$($(this).attr("href")).addClass("active");
	$(this).addClass("active");
});

function resize() {
	var width = $(window).width();
	var height = $(window).height();
	$("section").first().css("margin-top", height + "px");
	$("#montage a").each(function() {
		$(this).css("width", width/$(this).siblings().andSelf().length);
		var $img = $(this).children("img"), height = $(this).height();
		$img.css("margin", (height - $img.height()) / 2 + "px auto");
	});
	$("#montage").removeAttr("class");
}
$(window).load(function(){resize();$("body").removeAttr("class")}).resize(resize);