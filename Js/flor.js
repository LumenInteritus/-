console.log("FLOR NUEVA CARGADA");

function mostrarFlor(){

    const tallo=document.querySelector(".tallo");

    const izquierda=document.querySelector(".hoja-izquierda");

    const derecha=document.querySelector(".hoja-derecha");

    tallo.classList.add("crecer");

    setTimeout(()=>{

        izquierda.classList.add("aparecer");

    },5200);

    setTimeout(()=>{

        derecha.classList.add("aparecer");

    },8200);

}