

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

    // If slidePosition = 2, which in the case of 3 slides is same as (totalSlides - 1) then set slidePosition = 0, meaning return to 
    // first slide, else move to next slide. Make that slide visible
function moveToNextSlide() {
    hideAllSlides ()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

    // If we move backwards through the slides and get to slidePosition === 0, then set (slidePosition = totalSlides -1) meaning set 
    // it to the last slide in the array. Otherwise continue to step backwards in the slidePosition (slidePosition--). Finally make
    // the selected slide only, visible.
function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

    // Use a (For Of) loop to make all the slides hidden. For Of loop loops through the slides array and adds then to the const number
function hideAllSlides () {
    for (const number of slides) {
        number.classList.remove("carousel-item-visible")
        number.classList.add("carousel-item-hidden")
    }
}



