$(document).ready(function() {

	function heightDetect() {
		$(".main_head").css("height", $(window).height());	//меняет высоту элемента на высоту окна браузера
	};
	
	heightDetect();
	$(window).resize(function() {		//при изменении размера окна браузера меняет высоту элемента
		heightDetect();
	});

	$(".toggle_mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() {
		if ($("top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
		}	else {
			$(".top_mnu").fadeIn(600);
		}
	});
});
$(window).load(function() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});