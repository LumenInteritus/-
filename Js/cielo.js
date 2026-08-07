console.log("Cielo cargado correctamente");
const fondoEstrellas = document.querySelector(".estrellas");

const simbolos = [
    "·",
    "✦",
    "✧",
    "★",
    "☆"
];

/*const simbolos = ["🔥"];*/

for(let i=0;i<80;i++){

    const estrella=document.createElement("div");

    estrella.className="estrella";

    estrella.innerHTML=
    simbolos[Math.floor(Math.random()*simbolos.length)];

    estrella.style.left=Math.random()*100+"%";

    estrella.style.top=Math.random()*100+"%";

    estrella.style.fontSize=(10+Math.random()*18)+"px";

    estrella.style.animationDuration=
    (4+Math.random()*6)+"s";

    fondoEstrellas.appendChild(estrella);

}