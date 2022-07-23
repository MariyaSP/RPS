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
            let userChoose = prompt('Камень, ножницы, бумага ?').toLowerCase().slice(0,1);
            console.log(userChoose !== 'к' || userChoose !== 'н' || userChoose !== 'б');

            while(userChoose !== 'к' && userChoose !== 'н' && userChoose !== 'б') {
                userChoose = prompt('Камень, ножницы, бумага ?').toLowerCase().slice(0,1);
            }
            const compChoose = FIGURES_RU[getRandomIntInclusive(0, FIGURES_RU.length - 1)].slice(0,1);
            if(compChoose === userChoose) {
                alert("Ничья");
            }
            else
            if(userChoose === 'к') {
                if(compChoose === 'н')
                    result.user += 1;
                else
                    result.computer += 1;
            }
            if(userChoose === 'н') {
                if(compChoose === 'б')
                    result.user += 1;
                else
                    result.computer += 1;
            }
            if(userChoose === 'б') {
                if(compChoose === 'к')
                    result.user += 1;
                else
                    result.computer += 1;
            }

            console.log(compChoose, userChoose);
            console.log(result);
        }

    };
    window.RPS = game;
})();


