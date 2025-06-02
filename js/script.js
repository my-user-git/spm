const swiperMe = new Swiper('.section-we__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    breakpoints: {

        0: {
            slidesPerView: 1.3,
            spaceBetween: 10,
            allowTouchMove: true,
            navigation: false,
        },

        576: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 37
        }

    },

    // Navigation arrows
    navigation: {
        nextEl: '.section-we__next',
        prevEl: '.section-we__prev',
    },

});

const swiperCards = new Swiper('.section-cards__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    breakpoints: {

        0: {
            slidesPerView: 1.3,
            spaceBetween: 10,
            allowTouchMove: true,
            navigation: false,
        },

        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 43
        }
    },
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.header__contacts-name').forEach(function (BottomMenu) {
        BottomMenu.addEventListener('click', function (event) {
            let el = this;
            el.classList.toggle('header__contacts-name-active');

            document.querySelectorAll('.header__contacts-list').forEach(item => {
                if (item.parentElement.querySelector('.header__contacts-name') != el) {
                    item.parentElement.querySelector('.header__contacts-name').classList.remove('header__contacts-name-active');
                }
                if (el.parentElement.querySelector('.header__contacts-list') != item) {
                    item.classList.remove('header__contacts-list-active');
                    item.style.maxHeight = null;
                }
            });

            const path = event.currentTarget.dataset.path;
            const targetList = document.querySelector(`[data-target="${path}"]`);
            targetList.classList.toggle('header__contacts-list-active');

            if (targetList.classList.contains('header__contacts-list-active')) {
                targetList.style.maxHeight = targetList.scrollHeight + 'px';
            } else {
                targetList.style.maxHeight = null;
            }
        });
    });

    document.addEventListener('click', e => {
        const target = e.target;

        if (!target.closest('.header__contacts-list') && !target.closest('.header__contacts-name')) {
            document.querySelectorAll('.header__contacts-list').forEach(function (item) {
                item.classList.remove('header__contacts-list-active');
                item.style.maxHeight = null; // сброс высоты
            });
            document.querySelectorAll('.header__contacts-name').forEach(function (item) {
                item.classList.remove('header__contacts-name-active');
            });
        }
    });

    document.querySelector('.header__burger').addEventListener('click', function () {
        document.querySelector('.header__content').classList.add('header__content-active');
        document.querySelector('.header__nav').classList.add('header__nav-active');
        document.querySelector('.header__contacts').classList.add('header__contacts-active');
        document.querySelector('.header__burger').classList.add('header__burger-hidden');
        document.querySelector('.header__burger-x').classList.add('header__burger-x-active');
    });
    document.querySelector('.header__burger-x').addEventListener('click', function () {
        document.querySelector('.header__nav').classList.remove('header__nav-active');
        document.querySelector('.header__contacts').classList.remove('header__contacts-active');
        document.querySelector('.header__burger').classList.remove('header__burger-hidden');
        document.querySelector('.header__burger-x').classList.remove('header__burger-x-active');

    });
    document.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.header__burger') && !target.closest('.header__burger-x') && !target.closest('.header__menu-link') && !target.closest('.header__contacts-name')) {
            document.querySelector('.header__content').classList.remove('header__content-active');
            document.querySelector('.header__nav').classList.remove('header__nav-active');
            document.querySelector('.header__contacts').classList.remove('header__contacts-active');
            document.querySelector('.header__burger').classList.remove('header__burger-hidden');
            document.querySelector('.header__burger-x').classList.remove('header__burger-x-active');
        }
    });
});
