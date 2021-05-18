/*DRAG AND DROP*/

function drag1(event) {
    event.dataTransfer.setData("text", event.target.id);
    containerDisplay();
}

function drag2(event) {
    event.dataTransfer.setData("text", event.target.id);
    containerDisplay();
}

function drag3(event) {
    event.dataTransfer.setData("text", event.target.id);
    containerDisplay();
}

function drag4(event) {
    event.dataTransfer.setData("text", event.target.id);
    containerDisplay();
}

function drag5(event) {
    event.dataTransfer.setData("text", event.target.id);
    containerDisplay();
}

function dragover(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop1(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));

    if ($("#container1 > div").length > 0) {
        document.getElementById("btn-valid").style.display = "block";
    };
}

function drop2(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop3(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop4(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop5(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop6(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop7(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop8(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function drop9(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}


function validation() {
    let content1 = $("#container1 > div").attr("id");
    let content2 = $("#container2 > div").attr("id");
    let content3 = $("#container3 > div").attr("id");
    let content4 = $("#container4 > div").attr("id");
    let content5 = $("#container5 > div").attr("id");

    if ($("#container1 > div").length > 0) {
        document.getElementById('btn-valid').style.backgroundColor = 'rgb( 0, 200, 0)';
        document.getElementById('bulle-jeu-ok').style.bottom = "-13vh";
    } else {
        document.getElementById('btn-valid').style.background = 'rgb( 255, 0, 0)';
    }
}

/*AJOUTER UNE CASE AU DROP*/
function containerContent() {
    document.getElementById('container2').style.display = "block";
    document.getElementById('link2').style.display = "block";
};

function containerContent2() {
    document.getElementById('container3').style.display = "block";
    document.getElementById('link3').style.display = "block";
};

function containerContent3() {
    document.getElementById('container4').style.display = "block";
    document.getElementById('link4').style.display = "block";
};

function containerContent4() {
    document.getElementById('container5').style.display = "block";
    document.getElementById('link5').style.display = "block";
};

function containerContent5() {
    document.getElementById('container6').style.display = "block";
    document.getElementById('link6').style.display = "block";
};

function containerContent6() {
    document.getElementById('container7').style.display = "block";
    document.getElementById('link7').style.display = "block";
};

function containerContent7() {
    document.getElementById('container8').style.display = "block";
    document.getElementById('link8').style.display = "block";
};

function containerContent8() {
    document.getElementById('container9').style.display = "block";
    document.getElementById('link9').style.display = "block";
};

function containerContent9() {
    document.getElementById('container10').style.display = "block";
    document.getElementById('link10').style.display = "block";
};




function containerDisplay() {
    if ($("#container1 > div").length > 0) {
        document.getElementById("container2").style.display = "block";
        document.getElementById('link1').style.display = "block";
    };

    if ($("#container2 > div").length > 0) {
        document.getElementById("container3").style.display = "block";
        document.getElementById('link2').style.display = "block";
    };

    if ($("#container3 > div").length > 0) {
        document.getElementById("container4").style.display = "block";
        document.getElementById('link3').style.display = "block";
    };

    if ($("#container4 > div").length > 0) {
        document.getElementById("container5").style.display = "block";
        document.getElementById('link4').style.display = "block";
    };

    if ($("#container5 > div").length > 0) {
        document.getElementById("container6").style.display = "block";
        document.getElementById('link5').style.display = "block";
    };

    if ($("#container6 > div").length > 0) {
        document.getElementById("container7").style.display = "block";
        document.getElementById('link6').style.display = "block";
    };

    if ($("#container7 > div").length > 0) {
        document.getElementById("container8").style.display = "block";
        document.getElementById('link7').style.display = "block";
    };

    if ($("#container8 > div").length > 0) {
        document.getElementById("container9").style.display = "block";
        document.getElementById('link8').style.display = "block";
    };

    if ($("#container9 > div").length > 0) {
        document.getElementById("container10").style.display = "block";
        document.getElementById('link9').style.display = "block";
    };
};