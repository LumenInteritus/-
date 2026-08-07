console.log("ultima.js cargado");

/*==============================
        PERSONA
==============================*/

const params = new URLSearchParams(window.location.search);
const persona = params.get("persona");

/*==============================
        SPOTIFY
==============================*/

const contenedor = document.getElementById("spotify-contenedor");

if(persona==="rosa"){

    contenedor.innerHTML=`
        <img src="../Imagenes/Spotify/rosa1.png" id="spotify">
        <br><br>
        <img src="../Imagenes/Spotify/rosa2.png" id="spotify">
    `;

}else{

    contenedor.innerHTML=`
        <img src="../Imagenes/Spotify/${persona}.png" id="spotify">
    `;

}

/*==============================
        ELEMENTOS
==============================*/

const boton=document.getElementById("gracias");
const despedida=document.getElementById("despedida");

console.log("Botón:",boton);
console.log("Despedida:",despedida);

/*==============================
        CLICK
==============================*/

boton.addEventListener("click",()=>{

    console.log("CLICK");

    despedida.classList.add("visible");

});