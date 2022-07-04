const rotateXSlider = document.querySelector("#rotateX");
const rotateYSlider = document.querySelector("#rotateY");
const resetBtn = document.querySelector(".reset");
const cube = document.querySelector(".cube");

resetBtn.addEventListener("click", () => {
  rotateXSlider.value = 0;
  rotateYSlider.value = 0;
  cube.style.transform = `translateZ(-50px) rotateY(${0}deg) rotateX(${0}deg)`;
});

rotateXSlider.addEventListener("input", (e) => {
  let degreesX = e.target.value;
  let degreesY = rotateYSlider.value;
  cube.style.transform = `translateZ(-50px) rotateY(${degreesX}deg) rotateX(${degreesY}deg)`;
});

rotateYSlider.addEventListener("input", (e) => {
  let degreesY = e.target.value;
  let degreesX = rotateXSlider.value;
  cube.style.transform = `translateZ(-50px) rotateX(${degreesY}deg) rotateY(${degreesX}deg)`;
});

document.addEventListener("keydown", (e) => {
  rotateCubeByKeys(e.key);
});

function rotateCubeByKeys(key) {
  let degreesX = Number(rotateXSlider.value);
  let degreesY = Number(rotateYSlider.value);
  const step = 5;

  if (key == "ArrowRight") degreesX += step;
  if (key == "ArrowLeft") degreesX -= step;
  if (key == "ArrowUp") degreesY += step;
  if (key == "ArrowDown") degreesY -= step;

  rotateXSlider.value = degreesX;
  rotateYSlider.value = degreesY;
  cube.style.transform = `translateZ(-50px) rotateX(${rotateYSlider.value}deg) rotateY(${rotateXSlider.value}deg)`;
}
