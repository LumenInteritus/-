const bienvenida = document.querySelector(".contenedor");
const login = document.querySelector(".login");

const boton = document.getElementById("continuar");
const entrar = document.getElementById("entrar");

const textoBienvenida = document.getElementById("textoBienvenida");

const mensaje = `Si llegaron hasta aquí,
es porque alguna vez compartimos un pedacito del mismo camino.

Antes de que cada quien siga escribiendo su propia historia,
quería dejarles un pequeño recuerdo.

No es un gran regalo.

Pero sí está hecho con todo el cariño del mundo.`;

let i = 0;

function escribir() {

    if (i < mensaje.length) {

        textoBienvenida.innerHTML += mensaje.charAt(i);

        i++;

        setTimeout(escribir, 55);

    } else {

        setTimeout(() => {

            boton.classList.remove("boton-oculto");
            boton.classList.add("boton-visible");

        }, 1000);

    }

}

setTimeout(escribir, 1500);

// Mostrar login
boton.addEventListener("click", () => {

    bienvenida.style.display = "none";
    login.classList.remove("oculto");

});

// Entrar
entrar.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim().toLowerCase();

    const usuarios = {

        alison: "cucaracha",
        cecilia: "enana",
        elissa: "pendeja",
        kevin: "chichico",
        nare: "peruana",
        rosa: "tomboi",
        sofía: "acosadora",
        sofia: "acosadora"

    };

    if (usuarios[nombre] && usuarios[nombre] === password) {

        // Inicia la música
        reproducirMusica("fondo.mp3");

        login.style.display = "none";

        switch (nombre) {

            case "alison":
                window.location.href = "Cartas/alison.html?persona=alison";
                break;

            case "cecilia":
                window.location.href = "Cartas/cecilia.html?persona=cecilia";
                break;

            case "elissa":
                window.location.href = "Cartas/elissa.html?persona=elissa";
                break;

            case "kevin":
                window.location.href = "Cartas/kevin.html?persona=kevin";
                break;

            case "nare":
                window.location.href = "Cartas/nare.html?persona=nare";
                break;

            case "rosa":
                window.location.href = "Cartas/rosa.html?persona=rosa";
                break;

            case "sofia":
            case "sofía":
                window.location.href = "Cartas/sofia.html?persona=sofia";
                break;

        }

    } else {

        alert("Nombre o contraseña incorrectos.");

    }

});

const estrella = document.querySelector(".estrella-fugaz");

function lanzarEstrella() {

    const x = window.innerWidth + Math.random() * 250;
    const y = -50 - Math.random() * 150;

    estrella.style.transition = "none";

    estrella.style.left = x + "px";
    estrella.style.top = y + "px";
    estrella.style.opacity = "1";

    setTimeout(() => {

        estrella.style.transition =
            "left 1.2s linear, top 1.2s linear, opacity .5s";

        estrella.style.left = "-250px";
        estrella.style.top = window.innerHeight + 150 + "px";

    }, 30);

    setTimeout(() => {

        estrella.style.opacity = "0";

    }, 1200);

}

function iniciarEstrellas() {

    lanzarEstrella();

    const siguiente = 8000 + Math.random() * 15000;

    setTimeout(iniciarEstrellas, siguiente);

}

iniciarEstrellas();