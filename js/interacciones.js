const figuras = document.getElementById('figure');

function circulo(){
        figuras.style.borderRadius = '50%';
        figuras.style.backgroundColor = 'gray';
}

function estrella(){
    figuras.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    figuras.style.backgroundColor = "gold";
}

function gif(){
    figuras.style.backgroundImage = "url('img/gif1.gif')";
    figuras.style.backgroundColor = "white";
    figuras.style.backgroundSize = "cover";
    figuras.style.backgroundPosition = "center"
}

function animation(){
    figuras.classList.add("giro");
    figuras.style.backgroundColor = "yellow";
}

function mover_arri(){
    figuras.classList.toggle("topp");
}

function mover_aba(){
    figuras.classList.toggle("bottom");
    figuras.style.backgroundColor = "green";
}

function mover_izq(){
    figuras.classList.toggle("left");
    figuras.style.backgroundColor = "red";
}

function mover_der(){
    figuras.classList.toggle("right");
}

// funciones de contenido

function nTitulo(){
    const nuevoT = document.getElementById('mainTitle');
    const add_titulo = prompt('Agregue un nuevo Titulo');

    if (add_titulo) {
        nuevoT.textContent = add_titulo;
    }
}

function nParrafo(){
    const nuevoP = document.getElementById('mainParagraph');
    const add_parrafo = prompt('Agregur un Parrafo Nuevo');

    switch (add_parrafo) {
        case null:
        case "":
            alert('Hubo un error, no ingreso nada, Vuelva a intentar');
            break;
        default:
            nuevoP.textContent = add_parrafo;
            break;
    }
}

function agregarParr(){
    const otroParrafo = document.getElementById('extraParagraphs');
    const new_parrafo = prompt('Ingrese un parrafo, el que quiera.');

    switch (new_parrafo) {
        case null:
        case "":
            alert('No ingresaste nada, ponga algo o no le servira.');
            break;
        default:
            otroParrafo.textContent = new_parrafo;
            break;
    }
}

function eliminarParr() {
    const otroParrafo = document.getElementById('extraParagraphs');
    otroParrafo.textContent = "";
}

// funciones de atributos

function cColor(){
    const figura2 = document.getElementById('figure');
    const color = prompt('ingresa un color en formato #HEX.');

    switch (color) {
        case null:
        case "":
            alert('Ingrese algo valido');
            return;
    }
    const valor = color.trim();
    figura2.style.backgroundColor = valor;
}

function elegirFigura(){
    const figura = document.getElementById('figure');
    const elegir = prompt('Elige cualquiera de las siguientes figuras: ciiculo, estrella triangulo.');

    switch (elegir) {
        case "circulo":
            figura.style.borderRadius = '50%';
            break;

        case "estrella":
            figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            break;
    
        case "triangulo":
            figura.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
            break;

        default:
            alert('No selecciono alguna de las opciones.')
            break;
    }
}

const imagenes = [
        "img/imagen.jpg",
        "img/imagen2.jpg",
        "img/imagen3.jpg"
    ];
let indice = 0;    

function cambiarImgSig(){
    const imagenesS = document.getElementById('mainImage').src = imagenes[indice];
    indice++;

    if (indice >= imagenes.length){
        indice = 0;
    }
}

function cambiarImgAtr(){
    const imagenesS = document.getElementById('mainImage').src = imagenes[indice];
    indice--;

    if (indice < 0){
        indice = imagenes.length - 1;
    }
}

function mostrarYOcultar() {
  const img = document.getElementById("mainImage");

  if (img.style.display === "none") {
    img.style.display = "block"; //este es el de mostrar
  } else {
    img.style.display = "none"; // y este es de ocultar
  }
}


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', gif);
    document.getElementById('btnAnim').addEventListener('click', animation);
    document.getElementById('btnMoveUp').addEventListener('click', mover_arri);
    document.getElementById('btnMoveDown').addEventListener('click', mover_aba);
    document.getElementById('btnMoveLeft').addEventListener('click', mover_izq);
    document.getElementById('btnMoveRight').addEventListener('click', mover_der);
    document.getElementById('btnChangeTitle').addEventListener('click', nTitulo);
    document.getElementById('btnChangeParagraph').addEventListener('click', nParrafo);
    document.getElementById('btnAddParagraph').addEventListener('click', agregarParr);
    document.getElementById('btnRemoveParagraph').addEventListener('click', eliminarParr);
    document.getElementById('btnHexColor').addEventListener('click', cColor);
    document.getElementById('btnChooseFigure').addEventListener('click', elegirFigura);
    document.getElementById('btnChangeImageNext').addEventListener('click', cambiarImgSig);
    document.getElementById('btnChangeImagePrev').addEventListener('click', cambiarImgAtr);
    document.getElementById('btnToggleImage').addEventListener('click', mostrarYOcultar);
})