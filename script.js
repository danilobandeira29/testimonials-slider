const sectionElements = document.getElementsByClassName("content");
const buttonPrevElements = document.getElementsByClassName("prev-button");
const buttonNextElements = document.getElementsByClassName("next-button");

for(let i = 0; i < buttonPrevElements.length; i++) {
  buttonPrevElements[i].addEventListener("click", () => {
    switch(true) {
      case (i === 0): 
        sectionElements[i].classList.toggle("show");
        sectionElements[sectionElements.length - 1].classList.toggle("show");
        break;

      case (i >= 1):
        sectionElements[i].classList.toggle("show");
        sectionElements[i - 1].classList.toggle("show");
        break;

      default: break;
    }
  });
}

for(let i = 0; i < buttonNextElements.length; i++) {
  buttonNextElements[i].addEventListener("click", () => {
    switch(true){
      case (i === buttonPrevElements.length - 1):
        sectionElements[0].classList.toggle("show");
        sectionElements[i].classList.toggle("show");
        break;

      case (i < buttonNextElements.length):
        sectionElements[i].classList.toggle("show");
        sectionElements[i + 1].classList.toggle("show");
        break;

      default: break;
    }
  });
}
