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


document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', gif);
    document.getElementById('btnAnim').addEventListener('click', animation);
    document.getElementById('btnMoveUp').addEventListener('click', mover_arri);
    document.getElementById('btnMoveDown').addEventListener('click', mover_aba);
    document.getElementById('btnMoveLeft').addEventListener('click', mover_izq);
})