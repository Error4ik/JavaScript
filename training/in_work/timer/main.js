window.addEventListener('DOMContentLoaded', function () {

    'use strict'; //TODO Строгий режим стандарта ES6

    let deadline = "2019-12-25";

    let timerElement = document.getElementById('timer');
    let hours = timerElement.querySelector('#hours');
    let minutes = timerElement.querySelector('#minutes');
    let seconds = timerElement.querySelector('#seconds');

    function initClock(time) {
        hours.textContent = time.hours;
        minutes.textContent = time.minutes;
        seconds.textContent = time.seconds;
    }

    function getRemainingTime(endtime) {
        let currentDate = new Date();
        let timeRemaining = (Date.parse(endtime) - currentDate);

        let hours = Math.floor((timeRemaining / 1000 / 60 / 60));
        let minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        let seconds = Math.floor((timeRemaining / 1000) % 60);

        return {
            total: timeRemaining,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }
    
    function setClock(endTime) {
        initClock(getRemainingTime(endTime));
        let timeIntervalId = setInterval(updateTime, 1000);

        function updateTime() {
            let time = getRemainingTime(endTime);
            hours.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds;

            if (time.total < 0) {
                clearInterval(timeIntervalId);
            }
        }
    }

    setClock(deadline)
});
