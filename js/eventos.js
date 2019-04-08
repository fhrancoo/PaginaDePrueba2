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