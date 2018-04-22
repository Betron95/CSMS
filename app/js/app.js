$(function () {
    /*Выпадающее меню header*/
    $('.header-menu-item').mouseenter(function () {
        $('.header-menu-item-choise').hide();
        $(this).find('.header-menu-item-choise').show();
    });
    $('.header-menu-item').mouseleave(function () {
        $(this).find('.header-menu-item-choise').hide();
    });
    /*Выпадающее меню body*/
    $('.dropitems').click(function () {
        $(this).closest('li').find('.dropsel').slideToggle();
        $(this).find('.arrowreverse').toggleClass('active');
    });
    /*Верхний свипер на главной*/
    var swiper = new Swiper('.swiper-container.body-right-swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
    //Magnific Popup(Видео)
    $('.open-link-popup').magnificPopup({
        type:'inline'
    });
    /*Нижний спипер на главной*/
    var swiper2 = new Swiper('.swiper-container.swiper-main-bottom', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    /*Бургер*/
    $('.burger').click(function () {
        $('body').toggleClass('hide-scroll-body');
        $('.dd-menu').slideToggle();
    });
    $('.dd-menu-head img').click(function () {
        $('body').toggleClass('hide-scroll-body');
        $('.dd-menu').slideToggle();
    });
    /*Выпадающее меню dd-menu*/
    $('.dd-menu-foot-dropitems').click(function () {
        $(this).closest('li').find('.dd-menu-foot-dropsel').slideToggle();
        $(this).find('.arrowdd').toggleClass('active');
    });
    /*мобильный свипер на главной*/
    var swiper3 = new Swiper('.swiper-container.body-right-mobile-swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
    /*Версия для слабовидящих*/
    $('.header-badeyes__imgtxt').click(function () {
        $('body').toggleClass('badeyes');
    });
});