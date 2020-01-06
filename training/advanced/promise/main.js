window.addEventListener('DOMContentLoaded', function () {

    "use strict";

    let health = 100;
    let projectiles = ['bullet', 'arrow', 'axe', 'spear', 'frost bolt', 'fire bolt'];

    //TODO возвращает промис, если все ок выполнится resolve, в противном случаи reject.
    let shoot = function (projectile) {
        console.log("You fired a", projectile + "...");
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                Math.random() > .2 ? resolve() : reject();
            }, 1000);
        });
    };

    let hit = function () {
        let damage = (Math.random() * 15 + 1).toFixed(0);
        let multiplyDamage = (Math.random() * 10).toFixed(0) > 6;
        if (multiplyDamage) {
            damage = damage * 2;
            console.log("You hit Critical!!!" + " Damage: ", damage);
        } else {
            console.log("You hit" + " Damage: ", damage);
        }
        health = health - damage;
        if (health > 0) {
            console.log("Hes health is ", health);
        }
    };

    let miss = function () {
        console.log("You missed!!!" + " Try again...");
    };

    let win = function () {
        console.log("You won!!! You defeated that dragon!");
    };

    let dragonRoar = function () {
        console.log("RrrArrrRrrRRRrrr...");
    };

    function action() {
        let timeoutId = setTimeout(action, 2000);
        if (health > 0) {
            let projectile = projectiles[(Math.random() * 5).toFixed(0)];
            //TODO при положительном условии выполнятя все методы then, при отрицательном все catch.
            // если then стоит после catch то он будет выполняться в любом случаи.
            shoot(projectile)
                .then(hit)
                .then(dragonRoar)
                .catch(miss);
        } else {
            clearTimeout(timeoutId);
            win();
        }
    }

    action();
});
