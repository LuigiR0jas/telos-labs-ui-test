$(document).ready(function () {
	$(".card-arrow").click(function (e) {
		if ($(this).hasClass("card-arrow--up")) {
			$(this).removeClass("card-arrow--up");
			$(this).next().removeClass("card-p--visible");
		} else {
			$(this).addClass("card-arrow--up");
			$(this).next().addClass("card-p--visible");
		}
	});
});
