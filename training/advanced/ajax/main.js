window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    let rubInput = document.getElementById("rub");
    let usdInput = document.getElementById("usd");
    let errorMessage = document.getElementById('error-message');

    rubInput.addEventListener('input', function () {
        let request = new XMLHttpRequest();

        request.open("GET", 'json/current.json');
        request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
        request.send();
        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    let data = JSON.parse(request.response);
                    let currentRate = data.usd;
                    usdInput.value = (rubInput.value / currentRate).toFixed(2);
                } else {
                    errorMessage.textContent = "Что то пошло не так!";
                    errorMessage.style.display = 'block';
                }
            }
        });
    });

    usdInput.addEventListener('input', function () {
        let request = new XMLHttpRequest();

        request.open("GET", 'json/current.json');
        request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
        request.send();
        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    let data = JSON.parse(request.response);
                    let currentRate = data.usd;
                    rubInput.value = +usdInput.value * currentRate;
                } else {
                    errorMessage.textContent = "Что то пошло не так!";
                    errorMessage.style.display = 'block';
                }
            }
        });
    });

    //TODO
    // readyState возвращает состояние запроса.
    // 0 UNSENT	Объект был создан. Метод open() ещё не вызывался.
    // 1 OPENED	Метод open() был вызван.
    // 2 HEADERS_RECEIVED Метод send() был вызван, доступны заголовки (headers) и статус.
    // 3 LOADING Загрузка; responseText содержит частичные данные.
    // 4 DONE Операция полностью завершена.
});
