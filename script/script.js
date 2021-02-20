/******************CAROUSEL************/
/******************Carousel d'images************/
/* Une version d'un carousel automatisé qui permet de changer d'image après la variable "time" */

var i = 0;
var images = [
              '../medias/images/3D/deep_leep/houses1.png',
              '../medias/images/3D/deep_leep/houses3.png',
              '../medias/images/3D/deep_leep/intérieur1.png',
              '../medias/images/3D/deep_leep/main_character.png',
              '../medias/images/3D/deep_leep/trees1.png'] ;
var time = 3000;

function changeImg(){

document.slide.src = images[i];

if (i < images.length - 1) {
i++;
} else {
i = 0;
}
setTimeout("changeImg()", time);
}
window.onload = changeImg;
