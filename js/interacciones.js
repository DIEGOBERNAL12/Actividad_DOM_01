const figuras = document.getElementById('figure');

function circulo(){
        figuras.style.borderRadius = '50%';
        figuras.style.backgroundColor = 'gray';
}



document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
})