const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

let currentCube = null;
let offsetX = 0;
let offsetY = 0;

// Set initial positions (grid)
cubes.forEach((cube, index) => {
  cube.style.left = `${(index % 4) * 120}px`;
  cube.style.top = `${Math.floor(index / 4) * 120}px`;

  cube.addEventListener("mousedown", (e) => {
    currentCube = cube;

    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    cube.style.cursor = "grabbing";
  });
});

document.addEventListener("mousemove", (e) => {
  if (!currentCube) return;

  const containerRect = container.getBoundingClientRect();

  let newLeft = e.clientX - containerRect.left - offsetX;
  let newTop = e.clientY - containerRect.top - offsetY;

  // Boundary limit
  const maxLeft = container.clientWidth - currentCube.offsetWidth;
  const maxTop = container.clientHeight - currentCube.offsetHeight;

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  currentCube.style.left = newLeft + "px";
  currentCube.style.top = newTop + "px";
});

document.addEventListener("mouseup", () => {
  if (currentCube) {
    currentCube.style.cursor = "grab";
  }
  currentCube = null;
});
