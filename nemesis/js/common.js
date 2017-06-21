$(function() {

	//выезжающая панель меню (http://mmenu.frebsite.nl/)
	$('#my-menu').mmenu({
		extensions: ['fx-menu-slide', 'fx-listitems-drop', 'pagedim-white', 'border-none', ],
		navbar: {
			title: 'Menu' //можно вставить логотип <img src='' alt=''>
		},
		offCanvas: {
			//position: 'right' //панель выезжает справа
		}

	});

	//если меню открыто, добавляем класс кнопке-'гамбургеру' .is-active
	var api = $('#my-menu').data('mmenu');
		api.bind('open:start', function() {
			$('.hamburger').addClass('is-active');
		});
		api.bind('close:finish', function() {
			$('.hamburger').removeClass('is-active');
		});


	//появление/скрытие панели поиска
	
	$('.search').mouseover(function() {
		$('.input-search').css({'border-color': '#b8b8b8', 'border-width': '1px', 'border-style': 'dotted'});
	 });
	$('.search').mouseout(function() {
		$('.input-search').css('border', 'transparent');
	 });

	//Слайдер в секции .s-content
	$('.bxslider-content').bxSlider({
		mode: 'fade'
	});

	//Слайдер в секции .s-photos .photos-1
	$('.bxslider-photos-1').bxSlider({
		captions: true,
		mode: 'fade',
		auto: true,
		autoControls: false,
	 	pause: 2000
	});

	//Слайдер в секции .s-photos .photos-2
	$('.bxslider-photos-2').bxSlider({
		captions: true,
		mode: 'fade',	
		autoControls: false,
	});


});