window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    let options =  {
        width: 800,
        height: 600,
        background: 'blue',
        font: {
            size: 20 + 'px',
            color: 'white'
        }
    };
    console.log("Default - ", options);

    let json = JSON.stringify(options);
    console.log("Json - ", json);

    let parse = JSON.parse(json);
    console.log("Parse - ", parse);
});
