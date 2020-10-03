

//Menu

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
})

// Remove animation on title and text on mobile
if ($(window).width() < 992) {
    $('.specialization_info-title').removeClass('wow');
    $('.specialization_info-text').removeClass('wow');
    $('.quality__info-title').removeClass('wow');
    $('.qualitu__info-subtitle').removeClass('wow');
    $('.qualitu__info-text').removeClass('wow');
}


// Counter
$('.js-count__num').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        delay: 3000,
        duration: 5000,
        // easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now))
        }
    });
});
// // Active menu link

$('.header__munu-list li a, .footer__menu-list li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('active-link');
    }
});

// Slider Switcher
$(document).ready(function () {
    $('.switch__label').click(function () {
        $('.reviews-slider').toggleClass('switch-bg');
        $('.switch').toggleClass('switch-border');
    });
});

// Slider Animation
$(document).ready(function () {

    var z = 0;
    var inAnimation = false;

    $('#pictures img').each(function () {
        z++;
        $(this).css('z-index', z);
    });

    function swapFirstLast(isFirst) {

        if (inAnimation) return false;
        else inAnimation = true;

        var processZindex, direction, newZindex, inDeCrease;

        if (isFirst) { processZindex = z; direction = '-'; newZindex = 1; inDeCrease = 1; }
        else { processZindex = 1; direction = ''; newZindex = z; inDeCrease = -1; }


        $('#pictures img').each(function () {

            if ($(this).css('z-index') == processZindex) {


                $(this).animate({ 'top': direction + $(this).height() + 'px' }, 'slow', function () {
                    $(this).css('z-index', newZindex)
                        .animate({ 'top': '0' }, 'slow', function () {
                            inAnimation = false;
                        });
                });
            } else {
                $(this).animate({ 'top': '0' }, 'slow', function () {
                    $(this).css('z-index', parseInt($(this).css('z-index')) + inDeCrease);
                });
            }
        });

        return false;
    }

    $('.previousLink').click(function () {
        return swapFirstLast(false);
    });
    $('.previousLink2').click(function () {
        return swapFirstLast(false);
    });

    $('.nextLink').click(function () {
        return swapFirstLast(true);
    });
    $('.nextLink2').click(function () {
        return swapFirstLast(true);
    });
});



// Tabs
let links = document.querySelectorAll('.js-tab-links .js-tab-link');
let content = document.querySelectorAll('.tabcontents .js-tabs__item');

for (var i = 0; i < links.length; i++) {
    (function (i) {
        var link = links[i];
        link.onclick = function () {
            for (var j = 0; j < content.length; j++) {
                var shown = window.getComputedStyle(content[j]).display;
                if (shown == "block") {
                    content[j].style.display = "none";
                    links[j].classList.remove('active');
                }
            }
            content[i].style.display = "block";
            links[i].classList.add('active');
        }
    })(i);
}
var colorButton = $(".colors li");
colorButton.on("click", function () {

    $(".colors > li").removeClass("active-color");

    $(this).addClass("active-color");

    var newColor = $(this).attr("data-color");

    $(".bg-color").css("background-color", newColor);

});


// Input Mask
let tel = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+4\\9 (999) 999-99-99');
im.mask(tel);
// Lamp Switch
const btn = document.querySelector('.intro__btn');
function changeBackground() {
    document.querySelector(".intro").classList.toggle("switch-on");
    document.querySelector(".intro__btn").classList.toggle("switch-on")
}
btn.addEventListener('click', function () { changeBackground('switch-on') });
// -----------------------------------

$('.slider-pic').slick({
    dots: true,
    infinite: true,
    speed: 500,
});


jQuery(document).ready(function () {

    // Init Masonry
    var opts = {
        itemSelector: '.block',
        columnWidth: '.block',
        gutter: 25,
        percentPosition: true,
        transitionDuration: 0
    }
    var $grid = jQuery('.grid').masonry(opts);

    // Position and show image as it loads
    jQuery('.grid').imagesLoaded().progress(function (imgLoadData, elem) {
        jQuery(elem.img).closest('.block').css('opacity', 1);
        $grid.masonry('layout');
    });

});

