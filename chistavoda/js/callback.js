$(document).ready(function() {
 
    $('.callback').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400, // анимируем показ подложки
            function(){ // далее показываем мод. окно
                $('#modal_order') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
    });
 
    // закрытие модального окна
    $('#modal_close, #overlay').click( function(){
        $('#modal_order')
            .animate({opacity: 0, top: '45%'}, 200,  // уменьшаем прозрачность
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
 



    //маска ввода номера телефона
    jQuery(function($){
        $("#tel").mask("+38 (999) 999-99-99");
          
    });
    //маска ввода номера телефона

});







