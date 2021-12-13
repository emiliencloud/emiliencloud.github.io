window.addEventListener('scroll', () => { 

    if(window.scrollY < 400) {
        $("#progress").removeClass("display");
    } else if(window.scrollY > 450) {
        $("#progress").addClass("display");
    } 

    if(window.scrollY < 650) {
        $("#design").removeClass("encre");
    } else if(window.scrollY > 650) {
        $("#design").addClass("encre");
    }

    if(window.scrollY < 2400) {
        $("#graphisme").removeClass("encre");
    } else if(window.scrollY > 2400) {
        $("#graphisme").addClass("encre");
    }

    if(window.scrollY < 5500) {
        $("#troisd").removeClass("encre");
    } else if(window.scrollY > 5500) {
        $("#troisd").addClass("encre");
    }

    if(window.scrollY < 6900) {
        $("#about").removeClass("encre");
    } else if(window.scrollY > 6900) {
        $("#about").addClass("encre");
    }
});

function activeMenu() {
    var element = document.getElementById("trait1");
    element.classList.toggle("active1");

    var element = document.getElementById("trait2");
    element.classList.toggle("active2");

    var element = document.getElementById("navbar");
    element.classList.toggle("move");
} 

function remove() {
    var element = document.getElementById("navbar");
    element.classList.toggle("move");

    var element = document.getElementById("trait1");
    element.classList.toggle("active1");

    var element = document.getElementById("trait2");
    element.classList.toggle("active2");
}