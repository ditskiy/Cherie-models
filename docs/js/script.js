let slider = tns({
  container: ".my-slider",
  fixedWidth: 412,
  swipeAngle: false,
  mouseDrag: true,
  nav: false,
  controls: false,
});

document.querySelector(".down__prew").addEventListener("click", function () {
    slider.goTo("prev");
    });

    
document.querySelector(".down__next").addEventListener("click", function () {
    slider.goTo("next");
    });
