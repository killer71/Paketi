$(document).ready(function(){

    // install slick.js
    $('.advantages_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        // nextArrow: '<button type="button"><img src="../img/next.png"></button>',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // $('.header_slider').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     mobileFirst: true,
    //     variableWidth: true
    // });


    $('.slider').bxSlider({
        adaptiveHeight: true,
        auto: true,
        infiniteLoop: true,
        hideControlOnEnd: true
    });

    $("#Glide").glide({
        type: "carousel",
        autoplay: false
    });

    //E-mail Ajax Send
    $("#call_back").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("РЎРїР°СЃРёР±Рѕ Р·Р° Р·Р°СЏРІРєСѓ!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $(".popup_c").magnificPopup();

});