//Vérification du code entrée dans l'input
function code() {
    let input = document.getElementById('number').value;
    let inputBox = document.getElementById('number');
    let vcode = document.getElementById('verif').value;
    let vpage = document.getElementById('code');

    if (input === vcode) {
        inputBox.style.background = 'rgba( 0, 255, 0, 0.75)';
        vpage.style.top = '-100vh';
        vpage.style.opacity = '0';
    } else {
        inputBox.style.background = 'rgba( 255, 0, 0, 0.75)';
        run.style.marginTop = '2rem';
        run.style.opacity = '0';
        run.style.display = 'none';
    }
    console.log('ok')
};