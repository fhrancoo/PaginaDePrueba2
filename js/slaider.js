//Set the slideIndex to 1 i.e 1st image
var slideIndex = 1;

//showImage() to display the 1st image
showImage(slideIndex);

/*When the user clicks one of the buttons call plusIndex(). The plusIndex() function subtracts one or adds one to the slideIndex*/
function plusIndex(n) {
    showImage(slideIndex += n);
}
function showImage(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    
/*If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to zero*/
    if (n > x.length) {
    slideIndex = 1
    }
    
/*If the slideIndex is less than 1 it is set to number of elements (x.length) */
    if (n < 1) {
    slideIndex = x.length
    } ;  
    for (i = 0; i < x.length; i++) {
    
/*The showImage() function hides (display="none" ) all elements with the class name "slides"*/
    x[i].style.display = "none";
    }  
/*displays (display="block" ) the element with the given slideIndex*/
    x[slideIndex-1].style.display = "block";
}

//AutoSlide animation
var slideIndex = 0;
autoSlide();
function autoSlide() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
    slideIndex = 1
    }
    x[slideIndex-1].style.display = "block";

// Change image every 5 seconds
setTimeout(autoSlide, 5000);
}