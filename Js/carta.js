const boton = document.getElementById("abrirCarta");
const inicio = document.querySelector(".inicio");
const carta = document.querySelector(".carta");
const texto = document.getElementById("texto");
const tituloCarta = document.getElementById("tituloCarta");
const destello = document.querySelector(".destello");

const botonRecuerdo = document.getElementById("recuerdo");

const parametros = new URLSearchParams(window.location.search);

const PERSONA = parametros.get("persona");

const datos = cartas[PERSONA];

console.log("Persona:", PERSONA);

console.log("Datos:", datos);

console.log("Canción:", datos.musica);

const nombre = datos.nombre;

const mensaje = datos.mensaje;

tituloCarta.textContent = `Para ${nombre} ♡`;

let i = 0;

function escribirCarta() {

    if (i < mensaje.length) {

        texto.innerHTML += mensaje.charAt(i);

        i++;

        setTimeout(escribirCarta, 45);

    } else {

        const tieneRecuerdos =
            recuerdos[PERSONA] &&
            recuerdos[PERSONA].length > 0;

        botonRecuerdo.classList.remove("oculto");

        setTimeout(() => {
            botonRecuerdo.classList.add("visible");
        }, 300);

        if (tieneRecuerdos) {

            botonRecuerdo.textContent = "✧ Continuar ✧";

            botonRecuerdo.onclick = () => {
                window.location.href = `recuerdo.html?persona=${PERSONA}`;
            };

        } else {

            botonRecuerdo.textContent = "✧ Última cosa ✧";

            botonRecuerdo.onclick = () => {
                window.location.href = `ultima.html?persona=${PERSONA}`;
            };

        }

    }

}

boton.addEventListener("click",()=>{
    document.body.classList.add("abriendo");
document.body.style.transform="scale(1.04)";
// Oculta la portada con animación
inicio.classList.add("ocultar");

    // Inicia música
   reproducirMusica(datos.musica);

    // Muestra la carta
    setTimeout(()=>{

    carta.classList.add("visible");

    destello.classList.add("activo");

    setTimeout(()=>{

        destello.classList.remove("activo");

    },450);

    escribirCarta();

},700);

});

const cielo=document.getElementById("meteoritos");

function crearMeteorito(){

    const m=document.createElement("div");

    m.className="meteorito";

    m.style.top=Math.random()*40+"%";

    m.style.left=(60+Math.random()*35)+"%";

    cielo.appendChild(m);

    setTimeout(()=>{

        m.remove();

    },1400);

}

setInterval(()=>{

    crearMeteorito();

},9000+Math.random()*10000);

/*==================================
      EFECTO 3D
==================================*/

const hoja = document.querySelector(".hoja");

document.addEventListener("mousemove",(e)=>{

    if(!carta.classList.contains("visible")) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;

    hoja.style.transform = `
        perspective(1200px)
        rotateX(${-y}deg)
        rotateY(${x}deg)
    `;

});
