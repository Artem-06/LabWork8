document.addEventListener('DOMContentLoaded', () => {
    const players = document.querySelectorAll('section.player');
    const userBlock = players[0];
    const compBlock = players[1];

    const userNameElem = userBlock.querySelector('#user');
    const userCounterElem = userBlock.querySelector('.counter');
    const userNumberElem = userBlock.querySelector('.number');

    const compCounterElem = compBlock.querySelector('.counter');
    const compNumberElem = compBlock.querySelector('.number');

    const genBtn = document.getElementById('=generate');

    let userWins = 0;
    let compWins = 0;
    const WINS_TO_END = 3;
    let playing = true;

    const askedName = prompt("Введи своє ім'я:", "");
    const playerName = askedName?.trim() || "Гість";
    userNameElem.textContent = playerName;

    function updateView() {
        userCounterElem.textContent = `Перемоги: ${userWins}`;
        compCounterElem.textContent = `Перемоги: ${compWins}`;
        userNumberElem.textContent = "-";
        compNumberElem.textContent = "-";
    }
    updateView();

    function randInt() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function playRound() {
        if (!playing) return;

        const u = randInt();
        const c = randInt();

        userNumberElem.textContent = u;
        compNumberElem.textContent = c;

        if (u > c) userWins++;
        else if (c > u) compWins++;

        userCounterElem.textContent = `Перемоги: ${userWins}`;
        compCounterElem.textContent = `Перемоги: ${compWins}`;

        if (userWins === WINS_TO_END || compWins === WINS_TO_END) {
            playing = false;

            let msg = "";
            if (userWins > compWins) {
                msg = `${playerName} переміг!\nРахунок: ${userWins} : ${compWins}`;
            } else {
                msg = `Комп'ютер переміг!\nРахунок: ${compWins} : ${userWins}`;
            }

            alert(msg);
        }
    }

    genBtn.addEventListener("click", playRound);
});