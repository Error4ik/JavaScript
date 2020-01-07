window.addEventListener('DOMContentLoaded', function () {

    "use strict";

    let currentSlide = 0;
    let sliderItems = document.querySelectorAll('.slider-item');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let dots = document.querySelectorAll('.dot');

    function hideSlides() {
        sliderItems.forEach(function (item) {
            item.style.display = 'none';
        });
    }

    function removeActiveCLassForDots() {
        dots.forEach(function (item) {
            item.classList.remove('dot-active');
        });
    }

    function addActiveClassForDot(number) {
        dots[number].classList.add('dot-active');
    }

    function showSlide(number) {
        hideSlides();
        removeActiveCLassForDots();
        addActiveClassForDot(number);

        sliderItems.forEach(function (item, index) {
            if (index === number) {
                item.style.display = 'block';
            }
        });
    }

    function checkNumber(number) {
        if (number === sliderItems.length) {
            currentSlide = 0;
        } else if (number < 0) {
            currentSlide = sliderItems.length - 1;
        }
    }

    prev.addEventListener('click', function () {
        checkNumber(--currentSlide);
        showSlide(currentSlide)
    });

    next.addEventListener('click', function () {
        checkNumber(++currentSlide);
        showSlide(currentSlide);
    });

    dots.forEach(function (item, index) {
        item.addEventListener('click', function () {
            showSlide(index);
        });
    });

    showSlide(currentSlide);
});
