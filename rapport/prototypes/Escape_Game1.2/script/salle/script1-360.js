pannellum.viewer('panorama', {
    "default": {
        "firstScene": "Bureau de Beltchley Park",
        "autoLoad": true,
        "autoRotate": -2,
        "title": "LA MACHINE DE TURING",
    },
    "type": "equirectangular",
    "panorama": "../medias/three-images/salle-turing-01.jpg",

    "hotSpots": [{
            "pitch": 5,
            "yaw": -2,
            "type": "info",
            "text": "<div id=\"titre-gamme1\"><br>GAMME #1</div> <br> <button onclick=\"displayAtelier1()\" id=\"btn-gamme1\">Accéder à l'atelier</button>",
        },
        {
            "pitch": -5,
            "yaw": -50,
            "type": "info",
            "text": "<div id=\"titre-gamme2\"><br>GAMME #2</div> <br> <button onclick=\"displayAtelier2()\" id=\"btn-gamme1\">Accéder à l'atelier</button>",
        },
        {
            "pitch": -5,
            "yaw": 135,
            "type": "info",
            "text": "<div id=\"titre-gamme3\"><br>GAMME #3</div> <br> <button onclick=\"displayAtelier3()\" id=\"btn-gamme1\">Accéder à l'atelier</button>",
        },
        {
            "pitch": -5,
            "yaw": 220,
            "type": "info",
            "text": "<div id=\"titre-puzzle1\"><br>PUZZLE #1</div> <br> <button onclick=\"displayAtelier4()\" id=\"btn-gamme1\">Accéder à l'atelier</button>",
        },
        {
            "pitch": 10,
            "yaw": 71,
            "type": "info",
            "text": "<div id=\"titre-puzzle1\"><br>PROCHAINE SALLE</div> <br> <button onclick=\"displayCode()\" id=\"btn-salle\">Entrer un code</button>",
        },
    ]
});