$(document).ready(function () {
	$(".section__card-arrow").click(function (e) {
		if ($(this).hasClass("section__card-arrow--up")) {
			$(this).removeClass("section__card-arrow--up");
			$(this).next().removeClass("section__card-p--visible");
		} else {
			$(this).addClass("section__card-arrow--up");
			$(this).next().addClass("section__card-p--visible");
		}
	});
});
