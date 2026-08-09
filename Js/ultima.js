console.log("ultima.js cargado");

reproducirMusica("fondo.mp3");

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
const gracias=document.getElementById("graciasFinal");
const firma=document.getElementById("firmaFinal");

/*==============================
        CLICK
==============================*/

boton.addEventListener("click",iniciarFinal);

function iniciarFinal(){

    boton.disabled=true;

    boton.style.opacity="0";

    /* Oscurece la pantalla */
    despedida.classList.add("visible");

    /* Después de que el fondo ya casi terminó de aparecer */
    setTimeout(()=>{

        gracias.style.opacity="1";
        firma.style.opacity="1";

setTimeout(()=>{

    gracias.style.opacity="0";
    firma.style.opacity="0";

},12000);

    },5000);

}
