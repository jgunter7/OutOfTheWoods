var mus = 1;

function init() {
    // Initialize impress.js to allow scrolling animation between slides
    impress().init();
}

function SeeMore() {
    //display overlay
    document.getElementById("loader").style.display = "block";
}

function SeeNoMore() {
    //'close' overlay
    document.getElementById("loader").style.display = "none";
}

function ToggleMusic() {
    //Toggle music on/off after page load
    var audio = document.getElementById('audioEm');
    var but = document.getElementById('mustog');
    if (mus == 1) {
        audio.pause();
        but.textContent = "Turn Music On";
        mus = 0;
    }
    else {
        audio.play();
        but.textContent = "Turn Music Off";
        mus = 1;
    }
}