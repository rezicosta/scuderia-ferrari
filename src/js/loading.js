window.onload = startAnimation();

var formulaImage = document.querySelector("#formula");

var imagesArray = [
  "formula-1",
  "formula-1-1",
  "formula-1-2",
  "formula-1-3",
  "formula-1-4",
  "formula-1-5",
  "formula-1-6",
  "formula-1-7",
  "formula-1-8"
];

var position = 0;

var halfWindowWidth = window.innerWidth / 2;

function changeImage() {
  var leftPosition = formulaImage.getBoundingClientRect().left;
  if (
    leftPosition > halfWindowWidth - formulaImage.offsetWidth / 1.7 &&
    leftPosition < halfWindowWidth - formulaImage.offsetWidth / 2.05
  ) {
    return;
  }
  position++;
  formulaImage.src = "src/images/formula-gif/" + imagesArray[position] + ".png";
  if (position === 8) {
    position = 0;
  }
}

function startAnimation() {
  setInterval(changeImage, 50);
}
