window.addEventListener("scroll", Scroll);

function Scroll() {

    var Subiir = document.getElementById('Subir');
    var Ycursor = window.pageYOffset;

    if (Ycursor > 100) {
        Subiir.style.display = "inline-block";
        Subiir.style.animationDuration = "4s";
        Subiir.style.animationName = "SubirAnimacion"
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
        barra.style.animationDuration = "2s";
        barra.style.animationName = "BarraAnimacion"
    }
    else if (Ycursor < 100) {
        barra.style.display = "none";
    }
}
function traduccion() {
    var tra = document.getElementById("tracc");
    tra.style.display = "flex";
    setTimeout(traduccionCierre, 3000);
}
function traduccionCierre() {
    var trad = document.getElementById("tracc");
    trad.style.display = "none";
}