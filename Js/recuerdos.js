reproducirMusica("fondo.mp3");
const params = new URLSearchParams(window.location.search);
const persona = params.get("persona");

console.log("Persona:", persona);
console.log("Recuerdos:", recuerdos);
console.log("Fotos de esta persona:", recuerdos[persona]);

const galeria = document.querySelector(".galeria");

// Si no existe la persona o la galería, no hace nada
if (!galeria) {

    console.error("No se encontró la galería.");

} else if (!(persona in recuerdos)) {

    console.error("No existe esa persona.");

} else {

    recuerdos[persona].forEach(archivo => {

        if (archivo.endsWith(".mp4")) {

            galeria.innerHTML += `
                <video
                    controls
                    autoplay
                    loop
                    muted
                    playsinline
                >
                    <source src="../Imagenes/${archivo}" type="video/mp4">
                </video>
            `;

        } else {

            galeria.innerHTML += `
                <img src="../Imagenes/${archivo}" alt="">
            `;

        }

    });

}

const botonFinal = document.getElementById("ultimaCosa");

if(botonFinal){

    setTimeout(()=>{

        botonFinal.classList.remove("oculto");
        botonFinal.classList.add("visible");

    },800);

    botonFinal.addEventListener("click",()=>{

        window.location.href=`ultima.html?persona=${persona}`;

    });

}