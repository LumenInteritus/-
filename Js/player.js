console.log("Player cargado");

let audio = window.audioGlobal;

if (!audio) {

    audio = new Audio();

    audio.loop = true;
    audio.preload = "auto";

    window.audioGlobal = audio;

}

window.reproducirMusica = function(cancion){

    if(audio.src.includes(cancion) && !audio.paused){
        return;
    }

    audio.src = "../Musica/" + cancion;

    audio.play().catch(console.error);

};