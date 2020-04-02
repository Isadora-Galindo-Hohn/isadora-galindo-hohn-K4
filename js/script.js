const selectElement = (s) => document.querySelector(s);

//open nav bar
selectElement('.open').addEventListener('click', () =>{
    selectElement('.nav-list').classList.add('active');
})

//close nav bar
selectElement('.colse').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
})

selectElement('.link-1').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
})

selectElement('.link-2').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
})

selectElement('.link-3').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
})

selectElement('.link-4').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
})

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

//funktion Restart(){
//    location.relod();
//}