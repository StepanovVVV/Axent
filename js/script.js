// menu-burger
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
// menu-burger

// main-slider
$('.slider-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true
});
// main-slider

// popular-products-slider
$('.popular-products__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 990.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 479.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// popular-products-slider

// news__slider
$('.news__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 990.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 479.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
});
// news__slider

// btn-footer-country
$('.city__btn').click(function (event) {
    $('.city__btn, .search__box').toggleClass('active');
});
// btn-footer-country

// btn-catalog-1
$('.catalog__btn').click(function (event) {
    $('.catalog__btn, .search__box-1').toggleClass('active');
});
// btn-catalog-1

// btn-catalog-2
$('.catalog__btn-2').click(function (event) {
    $('.catalog__btn-2, .search__box-2').toggleClass('active');
});
// btn-catalog-2

// btn-sort
$('.btn__aside').click(function (event) {
    $('.btn__aside, .catalog__filter').toggleClass('active');
});
// btn-sort

// btn-catalog
$(".btn__catalog-active-1").click(function () {
    $(".categories-1").toggle('show')
})

$(".btn__catalog-active-2").click(function () {
    $(".categories-2").toggle('show')
})

$(".btn__catalog-active-3").click(function () {
    $(".categories-3").toggle('show')
})

$(".btn__catalog-active-4").click(function () {
    $(".categories-4").toggle('show')
})

$(".btn__catalog-active-5").click(function () {
    $(".categories-5").toggle('show')
})

$(".btn__catalog-active-6").click(function () {
    $(".categories-6").toggle('show')
})

$(".btn__catalog-active-7").click(function () {
    $(".categories-7").toggle('show')
})

$(".btn__catalog-active-8").click(function () {
    $(".categories-8").toggle('show')
})

$(".btn__catalog-active-9").click(function () {
    $(".categories-9").toggle('show')
})

$(".btn__catalog-active-10").click(function () {
    $(".categories-10").toggle('show')
})
// btn-catalog

// product-slider
$('.product__big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    asNavFor: '.product__min-slider'
});

$('.product__min-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__big-slider',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true
});
// product-slider

// TABS
const tabsBtns = document.querySelectorAll(".tabs button");
const tabsLists = document.querySelectorAll(".tabs__list");

function hideTabs() {
    tabsLists.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

function showTab(index) {
    tabsLists[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));
// TABS
