'use strict';
(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'papper'];
    const FIGURES_RU = ['камень', 'ножницы', 'бумага'];

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
            const compChoose = FIGURES_RU[getRandomIntInclusive(0, FIGURES_RU.length - 1)].slice(0,1);
            console.log(compChoose);
            let userChoose = prompt('Камень, ножницы, бумага ?');
            if(userChoose === null)
                confirm("Вы хотите закончить?") ? alert('Игра окончена') : start();
            else {
                userChoose = userChoose.toLowerCase().slice(0,1)
                if(userChoose !== 'к' && userChoose !== 'н' && userChoose !== 'б') {
                        start();
                }
                if(compChoose === userChoose) {
                    msg = "Ничья";
                }
                else {
                    if(userChoose === 'к') {
                        if(compChoose === 'н')
                            rez = 1;
                        else
                            rez = 2;
                    }
                    if(userChoose === 'н') {
                        if(compChoose === 'б')
                            rez = 1;
                        else
                            rez = 2;
                    }
                    if(userChoose === 'б') {
                        if(compChoose === 'к')
                            rez = 1;
                        else
                            rez = 2;
                    }
                }
                switch (rez) {
                    case 0: msg = "Ничья";
                        break;
                    case 1: msg = "Вы выиграли";
                        result.user += 1;
                        break;
                    case 2: msg = "Выиграл компьютер";
                        result.computer += 1;
                        break;
                }
                alert(`Компьютер: ${result.computer} \nИгрок: ${result.user} \n${msg}`)
                start();
            }
        }
    };
    window.RPS = game;
})();


