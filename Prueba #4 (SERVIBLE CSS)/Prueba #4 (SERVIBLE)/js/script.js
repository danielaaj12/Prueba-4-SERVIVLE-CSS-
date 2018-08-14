const cardsContent = ['Austria', 'Austria', 'Bélgica', 'Bélgica', 'Canadá', 'Canadá', 'Dinamarca', 'Dinamarca', 'Estonia', 'Estonia', 'Francia', 'Francia', 'Grecia', 'Grecia', 'Holanda', 'Holanda', 'Inglaterra', 'Inglaterra', 'Japón', 'Japón', 'Kurdistán', 'Kurdistán', 'Lituania', 'Lituania'];
let cardValor = [];
let cardId = [];
let cardInverse = 0;

Array.prototype.mixCards = function() {
    for (let i = cardsContent.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this[i];
        this[i] = this[j];
        this [j] = temp;
    }
};

function newTable() {
    tilesFlipped = 0;
    let output = '';
    cardsContent.mixCards();
    for (let i = 0; i < cardsContent.length; i++) {
        output += '<div id="carta' +i+ '" onclick="flipCard(this, \'' + cardsContent[i] + '\')"></div>';
    }
    document.getElementById('memoryTable').innerHTML = output;
}
newTable();

function flipCard(carta, val) {
    let e = function flipBack() {
        let carta1 = document.getElementById(cardId[0]);
        let carta2 = document.getElementById(cardId[1]);
        carta1.style.backgroundImage = 'url(https://raw.githubusercontent.com/YethPenado/memory-g-pruebas/master/img/card-reverse.png)';
        carta1.innerHTML = '';
        carta2.style.backgroundImage = 'url(https://raw.githubusercontent.com/YethPenado/memory-g-pruebas/master/img/card-reverse.png)';
        carta2.innerHTML = '';
        cardValor = [];
        cardId = [];
    };

    if (carta.innerHTML === "" && cardValor.length < 2) {
        carta.style.background = 'white';
        carta.innerHTML = val;
        if (cardValor.length === 0) {
            cardValor.push(val);
            cardId.push(carta.id);
        } else if (cardValor.length == 1) {
            cardValor.push(val);
            cardId.push(carta.id);
            
            if (cardValor[0] == cardValor[1]) {
                cardInverse += 2;
                cardValor = [];
                cardId = [];
                if (cardInverse == cardsContent.length) {
                    alert("¡Enhorabuena! Has finalizado el juego");
                    document.getElementById('memoryTable').innerHTML = '';
                    newTable();
                }
            } else {
                e;
                setTimeout(e, 700);
            }
        }
    }
}