//form validate
$(document).ready(function () {

    if ($('.validate-form').length) {
        $('.validate-form').each(function () { // <- selects every <form> on page
            $(this).validate({ // <- initialize validate() on each form
                debug: true,
                errorElement: "em",
                errorPlacement: function (error, element) {
                    error.appendTo(element.parent(".form-card__field"));
                },
                rules: {
                    firstname: 'required',
                    lastname: 'required',

                    email: {
                        required: true,
                        email: true,
                    },
                    mobile: {
                        required: true,
                        maxlength: 11,
                    },
                    securityCode: {
                        required: true,
                    },
                    messageBox: 'required',
                },
                messages: {
                    name: 'نام و نام خانوادگی خود را وارد کنید',
                    phone: 'شماره تلفن خود را وارد کنید',
                    password: 'رمز عبور خود را وارد کنید',
                    code: 'کد ارسالی را وارد کنید',
                    mobile: 'شماره موبایل خود را وارد کنید',
                    postalcode: 'کدپستی خود را وارد کنید',
                    email: 'آدرس ایمیل خود را وارد کنید',
                    state: 'نام استان محل زندگی خود را وارد کنید',
                    city: 'نام شهر خود را وارد کنید',
                    address: 'آدرس محل زندگی خود را وارد کنید',
                    securityCode: 'کد امنیتی صحیح وارد نشده است',
                    messageBox: 'متن پیام خود را وارد کنید',
                },
            });
        });
    }
});
//pallet
$(document).ready(function () {
    var owl = $('.owl-slide');
    $("img.img-slide").on('load', function () {
        owl.trigger('play.owl.autoplay', 4000);
        $(".slider-handler").removeClass("lazy-slider");
        $(".slider-handler").children().removeClass("img-slide");
    });
    togglePallet();

    function togglePallet() {
        $('.toggler-pallet').click(function () {
            $('.pallet-wrapper').toggleClass('show')
        });
    }
    ////
    palletColorChanger()

    function palletColorChanger() {
        var color = document.querySelectorAll('.color-pallet li');
        color = Array.from(color);
        color.forEach(function (elColor) {
            elColor.addEventListener('click', function () {
                activate('.color-pallet li');
                var data = elColor.getAttribute('data-color');
                var activeId = elColor.getAttribute('data-color-id')
                document.body.setAttribute('style', data + "!important");
                localStorage.setItem("main-color", data + "!important");
                localStorage.setItem("data-color-id", activeId);
            })
            if (localStorage.getItem('main-color')) {
                document.body.setAttribute('style', localStorage.getItem('main-color'));
            }
            if (localStorage.getItem('data-color-id')) {
                color.forEach(function (elColor2) {
                    elColor2.classList.remove('active');
                    activate('.color-pallet li');
                });
                var active = localStorage.getItem('data-color-id');
                $('.color-pallet-item-show-color[data-color-id="' + active + '"]').addClass('active');
            }
        })
    }

    function activate(activateItem) {
        var items = document.querySelectorAll(activateItem)
        items = Array.from(items);
        items.forEach(function (value) {
            value.addEventListener('click', function () {
                if (value.classList.contains('active')) {} else {
                    items.forEach(function (elm) {
                        elm.classList.remove('active');
                    })
                    value.classList.toggle('active');
                }
            })
        })
    }
});

$('.dropdown-toggle').dropdown();
/******************** search focus ********************/
$('.search-focus').on('shown.bs.modal', function () {
    $('.search-index').focus();
});
/******************** growing seed ********************/
$(document).ready(function () {

    /******************** Scroll To top ********************/
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 500) {
            jQuery('#scroll-up').css({
                bottom: "70px",
                opacity: "1"
            });
        } else {
            jQuery('#scroll-up').css({
                bottom: "-100px"
            });
        }
    });
    jQuery('#scroll-up').click(function () {
        jQuery('html, body').animate({
            scrollTop: '0px'
        }, 800);
        return false;
    });



    /******************** shrink Header ********************/

    $(function () {
        var shrinkHeader = 15;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.fixed-nav').addClass('on-scroll-nav');
            } else {
                $('.fixed-nav').removeClass('on-scroll-nav');
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset;
        }
    });

    /******************** owl Carousel ********************/

    $(document).ready(function () {
        if ($('.owl-product').length) {
            $('.owl-product').owlCarousel({
                rtl: true,
                items: 1,
                loop: false,
                rewind: true,
                margin: 10,
                dots: true,
                autoplay: false,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsiveClass: true,
                responsive: {
                    480: {
                        items: 2
                    },
                    575: {
                        items: 2
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                },
                nav: false,
                navText: [
                    "<span class='icon-chevron-right'></span>",
                    "<span class='icon-chevron-left'></span>"

                ]

            });
        }
        if ($('.owl-slide').length) {
            $('.owl-slide').owlCarousel({
                rtl: true,
                items: 1,
                loop: false,
                rewind: true,
                margin: 10,
                dots: true,
                animateOut: 'fadeOut',

                autoplayHoverPause: true,
                responsiveClass: true,

                nav: true,
                navText: [
                    "<span class='icon-chevron-right'></span>",
                    "<span class='icon-chevron-left'></span>"

                ]

            });
        }
    });

    /******************** cart-3 adding address ********************/

    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }

    /******************** profile delete address ********************/

    $('.delete-address').click(function (e) {
        e.preventDefault();
        if (confirm("آیا از حذف این آدرس اطمینان دارید?")) {
            $(this).parents('.address-card').css('background', '#7c0000').fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });
    /******************** shopping cart delete ********************/

    $('.shop__list-delete').click(function (e) {
        e.preventDefault();
        if (confirm("آیا از حذف این محصول اطمینان دارید?")) {
            $(this).parents('.shop__list-item').css('background', '#7c0000').fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });
    $('.cart-detail1__delete').click(function (e) {
        e.preventDefault();
        if (confirm("آیا از حذف این محصول اطمینان دارید?")) {
            $(this).parents('.cart__item').css('background', '#7c0000').fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

});



/******************** branding owl carousel ********************/
$(document).ready(function () {
    $('.owl-branding').owlCarousel({
        rtl: true,
        items: 8,
        margin: 5,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 4
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
            1200: {
                items: 6
            }
        }
    })
});

/******************** most_popular owl carousel ********************/

$(document).ready(function () {
    $('.owl_most_popular').owlCarousel({
        rtl: true,
        items: 6,
        margin: 0,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
});

/******************** newsest owl carousel ********************/

$(document).ready(function () {
    $('.owl_newsest').owlCarousel({
        rtl: true,
        items: 6,
        margin: 0,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
});


/******************** profile order list ********************/

$('.listMain').hide();
$('.myorder table:first-child a').click(function () {
    var hreflist = $(this).attr('href');
    $('.listMain:visible').hide();
    $(hreflist).fadeIn();
    var topElement = $(hreflist).offset().top;
    $('html , body').animate({
        scrollTop: topElement
    }, 3000, 'easeOutBack');
    return false;
});

/******************** range slider ********************/
if ($('.demo_3').length) {
    $(".demo_3").ionRangeSlider({
        rtl: true,
        skin: "flat",
        type: "double",
        grid: true,
        min: 1000,
        max: 2000,
        from: 1000,
        to: 20000,
        prettify_enabled: true,
        prettify_separator: ",",
        drag_interval: true,
        min_interval: null,
        max_interval: null,
        postfix: " تومان  "
    });
}
$(document).ready(function () {

    /******************** show more/less ********************/
    $('.up-down').click(function (event) {
        if ($(this).prev().is(':visible')) {
            $(this).text('نمایش بیشتر');
        } else {
            $(this).text('نمایش کمتر');
        }
    });
});

/******************** detail owl carousel ********************/

$(document).ready(function () {
    if ($('.owl-similar').length) {
        $('.owl-similar').owlCarousel({
            rtl: true,
            items: 1,
            loop: false,
            rewind: true,
            margin: 10,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                450: {
                    items: 2
                },
                575: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },
            nav: true,
            navText: [
                "<span class='icon-chevron-right'></span>",
                "<span class='icon-chevron-left'></span>"
            ]
        });
    }
});


/******************** article owl carousel ********************/

$(document).ready(function () {
    $('.owl-article').owlCarousel({
        rtl: true,
        items: 6,
        loop: true,
        rewind: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },

        },
        nav: false,
        navText: [
            "<span class='icon-chevron-right'></span>",
            "<span class='icon-chevron-left'></span>"
        ]
    });

});

// select option
$(document).ready(function () {
    $('.mySelectOption__wrapper').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.mySelectOption__wrapper').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.mySelectOption__wrapper .dropdown-menu li').click(function () {
        $(this).parents('.mySelectOption__wrapper').find('span').text($(this).text());
        $(this).parents('.mySelectOption__wrapper').find('input').attr('value', $(this).attr('id'));
    });
});

// comments
(function () {
    // state variables
    // ui variables
    var form = document.querySelector('.cons-pros');
    var input = document.querySelector('.cons__input');
    var ul = document.querySelector('.cons__list'); // event listeners

    document.addEventListener('submit', function (e) {
        // prevent default behaviour - Page reload
        e.preventDefault(); // give item a unique ID

        var itemId = String(Date.now()); // get/assign input value

        var toDoItem = input.value; //pass ID and item into functions

        if (!toDoItem) {
            return;
        } else {
            addItemToDOM(itemId, toDoItem); // clear the input box. (this is default behaviour but we got rid of that)

            input.value = '';
        }
    }); // functions

    function addItemToDOM(itemId, toDoItem) {
        // create an li
        var li = document.createElement('li');
        li.setAttribute('data-id', itemId);
        li.classList.add('cons__items');
        var close = document.createElement('span');
        close.classList.add('cons__close'); // add toDoItem text to li

        li.innerText = toDoItem; // add li to the DOM

        ul.appendChild(li).appendChild(close);
    }

    $(document).on('click', '.cons__close', function () {
        $(this).parent().remove();
    });
})();

(function () {
    // ui variables
    var form = document.querySelector('.cons-pros');
    var input = document.querySelector('.pros__input');
    var ul = document.querySelector('.pros__list'); // event listeners

    document.addEventListener('submit', function (e) {
        // prevent default behaviour - Page reload
        e.preventDefault(); // give item a unique ID

        var itemId = String(Date.now()); // get/assign input value

        var toDoItem = input.value; //pass ID and item into functions

        if (!toDoItem) {
            return;
        } else {
            addItemToDOM(itemId, toDoItem); // clear the input box. (this is default behaviour but we got rid of that)

            input.value = '';
        }
    }); // functions

    function addItemToDOM(itemId, toDoItem) {
        // create an li
        var li = document.createElement('li');
        li.setAttribute('data-id', itemId);
        li.classList.add('pros__items');
        var close = document.createElement('span');
        close.classList.add('pros__close'); // add toDoItem text to li

        li.innerText = toDoItem; // add li to the DOM

        ul.appendChild(li).appendChild(close);
    }

    $(document).on('click', '.pros__close', function () {
        $(this).parent().remove();
    });
})();

// detail product extras 

$(document).ready(function () {
    $('.extra__like').click(function () {
        if ($(this).hasClass('icon-heart-outlined')) {
            $(this).removeClass('icon-heart-outlined');
            $(this).addClass('icon-heart');
        } else {
            $(this).removeClass('icon-heart');
            $(this).addClass('icon-heart-outlined');
        }
    });
    // fancybox
    if ($('[data-fancybox="gallery"]').length) {
        $('[data-fancybox="gallery"]').fancybox({
            transitionIn: 'elastic',
            transitionOut: 'elastic',
            speedIn: 700,
            speedOut: 400,
            opacity: true,
            overlayShow: true,
            overlayColor: '#000',
            hideOnContentClick: false,
            hideOnOverlayClick: true,
        });
    }
});

// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// quantity
$('.quantity').each(function () {
    var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max'),
        loader = $('.cart-loader');
    btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
            input.val(newVal);
            input.attr('value', newVal);
        } else {
            var newVal = oldValue + 1;
            input.val(newVal);
            input.attr('value', newVal);
        }
        // loder
        loader.addClass('loading').prop("disabled", true);
        setInterval(function () {
            loader.removeClass('loading');
        }, 3000);

        spinner.find('input').val(newVal);
        spinner.find('input').trigger('change');
    });
    btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
            input.val(newVal);
            input.attr('value', newVal);
        } else {
            var newVal = oldValue - 1;
            input.val(newVal);
            input.attr('value', newVal);
        }
        // loder
        loader.addClass('loading').prop("disabled", true);
        setInterval(function () {
            loader.removeClass('loading');
        }, 1000);

        spinner.find('input').val(newVal);
        spinner.find('input').trigger('change');
    });
});


// menu-hambergery

const hamburger = $(".hamburger");
const navLinks = $(".navbar-nav");

hamburger.on("click", function () {
    $(this).toggleClass('active');
    $(".hamburger-box").toggleClass('active');
    navLinks.toggleClass("open");

});

$(document).ready(function () {

    //simple menu
    $('.mdropdown__button').click(function () {
        let $this = $(this);
        if ($this.next().hasClass('show')) {
            $this.removeClass('angle-down');

        } else {
            $this.addClass('angle-down');

        }
    });

    // mega menu
    $('#mega__button , .mega__button').click(function () {
        let $this = $(this);
        if ($this.next().hasClass('show')) {
            $this.removeClass('angle-down');

        } else {
            $this.addClass('angle-down');

        }
    });
});


//- title_icon _newset_or_most_pop...