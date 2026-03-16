const item = document.querySelector(".items");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

item.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  item.style.position = "absolute";
  item.style.left = (e.pageX - offsetX) + "px";
  item.style.top = (e.pageY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
