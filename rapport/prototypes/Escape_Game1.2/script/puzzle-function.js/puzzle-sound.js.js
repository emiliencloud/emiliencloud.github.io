/*HOWLER PLAYER POUR PISTE*/

let sound = new Howl({
    src: ['medias/audio/01.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound2 = new Howl({
    src: ['medias/audio/02.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound3 = new Howl({
    src: ['medias/audio/03.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound4 = new Howl({
    src: ['medias/audio/04.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound5 = new Howl({
    src: ['medias/audio/05.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound6 = new Howl({
    src: ['medias/audio/06.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound7 = new Howl({
    src: ['medias/audio/07.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound8 = new Howl({
    src: ['medias/audio/08.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound9 = new Howl({
    src: ['medias/audio/09.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});
let sound10 = new Howl({
    src: ['medias/audio/10.ogg'],
    loop: false,
    autoplay: false,
    volume: 1,
});

function play() {
    sound.play();
};

function pause() {
    sound.pause();
};

function stop() {
    sound.stop();
};

function play2() {
    sound2.play();
};

function pause2() {
    sound2.pause();
};

function stop2() {
    sound2.stop();
};

function play3() {
    sound3.play3();
};

function pause3() {
    sound3.pause3();
};

function stop3() {
    sound3.stop3();
};

function play4() {
    sound4.play4();
};

function pause4() {
    sound4.pause4();
};

function stop4() {
    sound4.stop4();
};

function play5() {
    sound5.play5();
};

function pause5() {
    sound5.pause5();
};

function stop5() {
    sound5.stop5();
};

// POUR LECTURE MULTIPLE
/*
let sound = new Howl({
    src: ['medias/audio/01.ogg'],
    loop: false,
    autoplay: false,
    volume: 0.5,
    onend: function(){
        var sound = new Howl({
            src: ['medias/audio/02.ogg'],
            autoplay: true,
            loop: false,
        })
    }
});
*/
