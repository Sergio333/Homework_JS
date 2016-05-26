$(function(){
    $('.topmenu ul li').hover(
        function() {
            $(this).find('.submenu').stop(true, true);
            $(this).find('.submenu').slideDown();
			$('.submenu').animate({
				backgroundColor:'#007F0E',
			}, 500 );
        },
        function() {
            $(this).find('.submenu').slideUp();
        }
    );
	$('.submenu li').hover(
        function() {
            $(this).find('.next_submenu').stop(true, true);
            $(this).find('.next_submenu').slideDown();
			$('.next_submenu').animate({
				backgroundColor:'#00D20E',
			}, 500 );
        },
        function() {
            $(this).find('.next_submenu').slideUp();
        }
    );
	$('.next_submenu li').hover(
        function() {
            $(this).find('.last_submenu').stop(true, true);
            $(this).find('.last_submenu').slideDown();
			$('.last_submenu').animate({
				backgroundColor:'#4CFF00',
			}, 500 )
        },
        function() {
            $(this).find('.last_submenu').slideUp();
        }
    );
});
