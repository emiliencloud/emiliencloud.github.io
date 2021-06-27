/*function cpt1(){
    document.getElementById('case1').style.gridColumnStart = "1";
    document.getElementById('case1').style.gridColumnEnd = "3";
    document.getElementById('case1').style.gridRowStart = "1";
    document.getElementById('case1').style.gridRowEnd = "3";

    document.getElementById('case1').style.background = "white";

    document.getElementById('case2').style.display = "none";
    document.getElementById('case3').style.display = "none";
}
*/

function cpt1(){
    document.getElementById('case1').style.width = "210%";
    document.getElementById('case1').style.zIndex = "10";

    document.getElementById('case2').style.opacity = "0%";
    document.getElementById('case3').style.opacity = "0%";

    document.getElementById('close-menu1').style.display = "block";
    document.getElementById('button1').style.display = "none";
    document.getElementById('all1').style.display = "inline-block";
    document.getElementById('ex-content1').style.display = "flex";

    document.getElementById('case2').style.height = "90%";
    document.getElementById('case2').style.zIndex = "0";

    document.getElementById('close-menu2').style.display = "none";
    document.getElementById('button2').style.display = "inline-block";
    document.getElementById('all2').style.display = "none";

    document.getElementById('exempledeux').style.display = "none";
}

function close1(){
    document.getElementById('case1').style.width = "100%";
    document.getElementById('case1').style.zIndex = "0";

    document.getElementById('case2').style.opacity = "100%";
    document.getElementById('case3').style.opacity = "100%";

    document.getElementById('close-menu1').style.display = "none";
    document.getElementById('button1').style.display = "inline-block";
    document.getElementById('all1').style.display = "none";
    document.getElementById('ex-content1').style.display = "none";
}

function cpt2(){
    document.getElementById('case2').style.height = "200%";
    document.getElementById('case2').style.zIndex = "10";

    document.getElementById('case3').style.opacity = "0";

    document.getElementById('close-menu2').style.display = "block";
    document.getElementById('button2').style.display = "none";
    document.getElementById('all2').style.display = "inline-block";

    document.getElementById('exempledeux').style.display = "flex";
}

function close2(){
    document.getElementById('case2').style.height = "90%";
    document.getElementById('case2').style.zIndex = "0";

    document.getElementById('case1').style.opacity = "100%";
    document.getElementById('case3').style.opacity = "100%";

    document.getElementById('close-menu2').style.display = "none";
    document.getElementById('button2').style.display = "inline-block";
    document.getElementById('all2').style.display = "none";

    document.getElementById('exempledeux').style.display = "none";
}




