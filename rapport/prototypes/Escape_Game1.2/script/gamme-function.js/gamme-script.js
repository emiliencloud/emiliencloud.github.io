function validWord() {
    let word = document.getElementById('reponse').value;

    let goodWord1 = 'musique';

    let goodWord2 = 'cintres';

    let goodWord3 = 'caisses';

    let goodWord4 = 'publicité';

    let goodWord5 = 'oiseaux';

    let goodWord6 = 'portes';

    let goodWord7 = 'escalator';

    if (word === goodWord1) {
        document.getElementById('progress1').style.background = '#50B8FF';
        word1.innerHTML = "Musique";
        reponse.innerHTML = "";
    } else if (word === goodWord2) {
        document.getElementById('progress2').style.background = '#50B8FF';
        word2.innerHTML = "Cintres";
    } else if (word === goodWord3) {
        document.getElementById('progress3').style.background = '#50B8FF';
        word3.innerHTML = "Caisses";
    } else if (word === goodWord4) {
        document.getElementById('progress4').style.background = '#50B8FF';
        word4.innerHTML = "Publicités";
    } else if (word === goodWord5) {
        document.getElementById('progress5').style.background = '#50B8FF';
        word5.innerHTML = "Oiseaux";
    }


    if (
        document.getElementById('word1').textContent != "" &&
        document.getElementById('word2').textContent != "" &&
        document.getElementById('word3').textContent != "" &&
        document.getElementById('word4').textContent != "" &&
        document.getElementById('word5').textContent != ""
    ) {
        document.getElementById('valid-word').style.backgroundColor = 'rgb( 0, 200, 0)';
        document.getElementById('bulle-jeu-ok').style.top = "20vh";
        document.getElementById('bulle-jeu-ok').style.opacity = "1";
        document.getElementById('bulle-jeu-ok').style.zIndex = "300";
        document.getElementById('filtrePuzzle').style.top = "0";
        document.getElementById('filtrePuzzle').style.opacity = "1";
        puzzle1correct.innerHTML = "Indice : '04'";
    }
};

function gammeEnvoie() {
    document.getElementById('bulle-jeu-ok1').style.bottom = "-14vh";
}
function gamme2Envoie() {
    document.getElementById('bulle-jeu-ok2').style.bottom = "-10vh";
}
function gamme3Envoie() {
    document.getElementById('bulle-jeu-ok3').style.bottom = "-13vh";
}