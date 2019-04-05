window.addEventListener("scroll", Scroll);

function Scroll() {

    var Subiir = document.getElementById('Subir');
    var Ycursor = window.pageYOffset;

    if (Ycursor > 100) {
        Subiir.style.display = "inline-block";
        Subiir.style.animationDuration = "5000";
    }
    else {
        Subiir.style.display = "none";
    }

}

window.addEventListener("scroll", MostrarBarra);
function MostrarBarra() {

    var barra = document.getElementById('nav-cambio');
    var Ycursor = window.pageYOffset;

    if (Ycursor > 100) {
        barra.style.display = "flex";
        barra.style.animationDuration = "5000";
    }
    else {
        barra.style.display = "none";
    }

}