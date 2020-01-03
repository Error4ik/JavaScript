window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    class Options {
        constructor(width, height, backgroundColor, fontSize, textAlign, fontWeight, textColor) {
            this.width = width;
            this.height = height;
            this.backgroundColor = backgroundColor;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.fontWeight = fontWeight;
            this.textColor = textColor;
        }

        createDiv(text) {
            let div = document.createElement('div');
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.backgroundColor = this.backgroundColor;
            div.style.fontSize = this.fontSize + 'px';
            div.style.textAlign = this.textAlign;
            div.style.fontWeight = this.fontWeight;
            div.style.color = this.textColor;
            div.textContent = text;
            document.body.appendChild(div);
        }
    }

    let element = new Options(
        250,
        100,
        'blue',
        30,
        'center',
        'bold',
        'yellow'
    );

    element.createDiv("Hello world");
});
