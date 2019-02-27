window.addEventListener("scroll",Scroll);

function Scroll(){
    
    var Subiir = document.getElementById('Subir');
    var Ycursor = window.pageYOffset;

    if (Ycursor > 100) {
        Subiir.style.display = "inline-block";
        Subiir.style.animationDuration = "5000";
    }
    else{
        Subiir.style.display = "none";
        }

    }


/* function Scroll(){
    var top = document.getElementById('header');
    var ypos = window.pageYOffset;
    if(ypos > 587) {
        top.style.opacity = "0";
    }
    else{
        top.style.opacity = "1";
        }
    } */