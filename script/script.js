var i = 0;
var images = [
              'medias/images/3D/fin.jpg',
              'medias/images/3D/labo_scene1.jpg',
              'medias/images/3D/link3_scene.jpg',
              'medias/images/3D/japan_scene/japan_scene_1.jpg',
              'medias/images/3D/super_charger_insta.png'] ;
var time = 2500;

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
