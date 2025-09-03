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



document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', gif);
})