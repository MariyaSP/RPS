'use strict';
(() => {

    const figuries = {
        eng: ['rock', 'scissors', 'papper'],
        ru: ['камень', 'ножницы', 'бумага'],
    };

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const game = () => {
        const result = {
            user:0,
            computer: 0,
        }
        return function start() {
            let msg = '';
            let rez = 0;
            const compChoose = figuries.ru[getRandomIntInclusive(0, figuries.ru.length - 1)].slice(0,1);
            console.log(compChoose);
            let userChoose = prompt('Камень, ножницы, бумага ?');
            if(userChoose === null)
                confirm("Вы хотите закончить?") ? alert('Игра окончена') : start();
            else {
                userChoose = userChoose.toLowerCase().slice(0,1);
                if(userChoose !== figuries.ru[0].slice(0,1) && userChoose !== figuries.ru[1].slice(0,1) && userChoose !== figuries.ru[2].slice(0,1)) {
                        start();
                }
                if(compChoose === userChoose) {
                    msg = "Ничья";
                }
                else {
                    if((userChoose === figuries.ru[0].slice(0,1) && compChoose === figuries.ru[1].slice(0,1)) ||
                        (userChoose === figuries.ru[1].slice(0,1) && compChoose === figuries.ru[2].slice(0,1))||
                        (userChoose === figuries.ru[2].slice(0,1) && compChoose === figuries.ru[0].slice(0,1)))
                            {
                                msg = "Вы выиграли";
                                result.user += 1;
                            }

                        else
                            {
                                msg = "Выиграл компьютер";
                                result.computer += 1;
                            }
                    }

                alert(`Компьютер: ${result.computer} \nИгрок: ${result.user} \n${msg}`)
                start();
            }
        }
    };
    window.RPS = game;
})();


