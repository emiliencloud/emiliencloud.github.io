function info() {
    document.getElementById('bulle-info').style.top = "0vh";
}

function fermer() {
    document.getElementById('bulle-info').style.top = "-110vh";
}

function displayCode() {
    document.getElementById('code').style.top = "0";
    document.getElementById('code').style.opacity = "1";
}

function displayNoneCode() {
    document.getElementById('code').style.top = "-110vh";
    document.getElementById('code').style.opacity = "0";
}

function allSalle() {
    document.getElementById('salle1').style.top = "15vh";
    document.getElementById('salle2').style.top = "25vh";
    document.getElementById('salle3').style.top = "35vh";
    document.getElementById('salle4').style.top = "45vh";
    document.getElementById('salle5').style.top = "55vh";
    document.getElementById('salle6').style.top = "65vh";
    document.getElementById('salle-close').style.top = "75vh";
    document.getElementById('btn-salles').style.opacity = "0.5";
}

function salleClose() {
    document.getElementById('salle1').style.top = "5vh";
    document.getElementById('salle2').style.top = "5vh";
    document.getElementById('salle3').style.top = "5vh";
    document.getElementById('salle4').style.top = "5vh";
    document.getElementById('salle5').style.top = "5vh";
    document.getElementById('salle6').style.top = "5vh";
    document.getElementById('salle-close').style.top = "5vh";
    document.getElementById('btn-salles').style.opacity = "1";
}


//EXPLICATION DU JEU
function passerInfo(){
    document.getElementById('exp1').style.top = "-110vh";
    document.getElementById('exp2').style.top = "-110vh";
    document.getElementById('exp3').style.top = "-110vh";
    document.getElementById('exp4').style.top = "-110vh";
}

function ex(){
    document.getElementById('exp1').style.top = "0vh";
}

function backExp1(){
    document.getElementById('exp1').style.top = "0vh";
    document.getElementById('exp2').style.top = "-110vh";
}
function backExp2(){
    document.getElementById('exp2').style.top = "0vh";
    document.getElementById('exp3').style.top = "-110vh";
}
function toExp2(){
    document.getElementById('exp1').style.top = "-110vh";
    document.getElementById('exp2').style.top = "0vh";
}
function toExp3(){
    document.getElementById('exp2').style.top = "-110vh";
    document.getElementById('exp3').style.top = "0vh";
}
function toExp4(){
    document.getElementById('exp1').style.top = "-110vh";
    document.getElementById('exp2').style.top = "-110vh";
    document.getElementById('exp3').style.top = "-110vh";
    document.getElementById('exp4').style.top = "-110vh";
}



