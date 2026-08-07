reproducirMusica("fondo.mp3");

const params = new URLSearchParams(window.location.search);

const persona = params.get("persona");

const contenedor = document.getElementById("spotify-contenedor");

if(persona === "rosa"){

    contenedor.innerHTML = `
        <img src="../Imagenes/Spotify/rosa1.png" id="spotify">
        <br><br>
        <img src="../Imagenes/Spotify/rosa2.png" id="spotify">
    `;

}else{

    contenedor.innerHTML = `
        <img src="../Imagenes/Spotify/${persona}.png" id="spotify">
    `;

}

const boton = document.getElementById("gracias");

const despedida = document.getElementById("despedida");

const textoFinal = document.getElementById("textoFinal");

boton.addEventListener("click",()=>{

    boton.animate([

        {transform:"scale(1)"},
        {transform:"scale(1.08)"},
        {transform:"scale(1)"}

    ],{

        duration:500

    });

    document.body.classList.add("finalizando");

    // La pantalla se pone negra
    despedida.classList.add("visible");

    // Espera un segundo antes de escribir
    setTimeout(()=>{

        escribirGracias();

    },1000);

});

function escribirGracias(){

    const palabra="Gracias";

    let i=0;

    const intervalo=setInterval(()=>{

        textoFinal.textContent+=palabra[i];

        i++;

        if(i>=palabra.length){

            clearInterval(intervalo);

            // Espera 3 segundos con la palabra completa
            setTimeout(()=>{

                textoFinal.style.opacity="0";

            },3000);

        }

    },140);

}

    // oscurece la página

    document.body.classList.add("finalizando");

    // aparece el mensaje

    setTimeout(()=>{

    despedida.classList.add("visible");

},1500);

// Después de 2.5 segundos empieza a desaparecer

setTimeout(()=>{

    despedida.style.transition = "opacity 4s";

    despedida.innerHTML="";
},4500);

/*==========================
        FLOR
==========================*/

setTimeout(()=>{

    mostrarFlor();

},6500);



