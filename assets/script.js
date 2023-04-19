const accItem = document.getElementsByClassName("accordionItem");
const accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  const itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}
window.addEventListener("scroll" , function() {
  if(window.scrollY > 350){
   document.querySelector(".navbar").classList.add("sticky")
  }
  else{
   document.querySelector(".navbar").classList.remove("sticky")
  }
})
// tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// // testimonial slider 
// // const slider = () => {

//   const sliderElm = document.querySelector(".slider-container .slider");
//   const btnLeft = document.querySelector(".slider-container .btn-left");
//   const btnRight = document.querySelector(".slider-container .btn-right");
//   const numberSliderBoxs = sliderElm.children.length;
//   let idxCurrentSlide = 0;

//   // Functions:
//   function moveSlider() {
//     let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
//     sliderElm.style.marginLeft = -leftMargin + "px";
//     console.log(sliderElm.clientWidth, leftMargin);
//   }
//   function moveLeft() {
//     if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
//     else idxCurrentSlide--;

//     moveSlider();
//   }
//   function moveRight() {
//     if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
//     else idxCurrentSlide++;

//     moveSlider();
//   }

//   // Event Listeners:
//   btnLeft.addEventListener("click", moveLeft);
//   btnRight.addEventListener("click", moveRight);
//   window.addEventListener("resize", moveSlider);

//   // testimonial slider // }
var slide_index = 1;
  displaySlides(slide_index);
  function nextSlide(n) {
      displaySlides(slide_index += n);
  }
  function currentSlide(n) {
      displaySlides(slide_index = n);
  }
  function displaySlides(n) {
      var i;
      var slides = document.getElementsByClassName("slide-box");
      if (n > slides.length) { slide_index = 1 }
      if (n < 1) { slide_index = slides.length }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          slides[i].classList.remove("moveslider")
      }
      slides[slide_index - 1].style.display = "block";
      slides[slide_index - 1].classList.add("moveslider");
  }
  // hovercard
  let toggle = document.querySelector(".notactive");
  let submenu = document.querySelector("#hovercard");
  toggle.addEventListener('mouseover', function() {
  submenu.classList.remove('active-card');
  });
  