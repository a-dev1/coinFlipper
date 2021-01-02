let second_img = document.querySelector(".second-img");

let rotate2021 = () => {
  console.log('animate')
  second_img.style.animationName = "rotate2021";
  second_img.style.animationDuration = "2s";

  setTimeout(() => {
    second_img.style.animationName = "";
  }, 2000);
}