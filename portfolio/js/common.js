$(document).ready(function() {

	//плавная загрузка страницы
	$(window).load(function() { 
		$('.loader_inner').fadeOut(); 
		$('.loader').delay(400).fadeOut('slow'); 
	});

	//значение высоты хедера равно высоте окна
	function heightDetect() {
		$('.parallax-header').css('height', $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//подключение эффекта парралакс к хедеру
	$('.parallax-header').parallax({
		imageSrc : 'img/7.jpg',
		speed : '0.1',
	});

	//выезжающая панель меню (http://mmenu.frebsite.nl/)
	$('#my-menu').mmenu({
		extensions: ['theme-black', 'fx-menu-slide', 'fx-listitems-drop', 'pagedim-black', 'border-none', ],
		navbar: {
			title: 'Меню' //можно вставить логотип <img src='' alt=''>
		},
		offCanvas: {
			position: 'right' //панель выезжает справа
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

	//least2 gallery
	$('.least-gallery').least({
		
	});


	//плавный скрол к определенной секции
	$("#my-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	//кнопка "вверх"
	var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
		var delay = 1000; // Задержка прокрутки
		$(document).ready(function() {
		$(window).scroll(function () { // При прокрутке попадаем в эту функцию
		 	/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
		 	if ($(this).scrollTop() > top_show) $('#top').fadeIn();
		 	else $('#top').fadeOut();
			});
		$('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
			/* Плавная прокрутка наверх */
			$('body, html').animate({
				scrollTop: 0
			}, delay);
		});
	});
	
});