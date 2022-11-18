const postX = document.getElementById("PostX");
const postY = document.getElementById("PostY");
const coordinates = document.getElementById("HWtwo");
coordinates.addEventListener("mousemove", (e) => {
  postX.innerText = e.screenX;
  postY.innerHTML = e.screenY;
});
