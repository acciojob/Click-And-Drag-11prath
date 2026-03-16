const items = document.querySelectorAll(".items");
const container = document.querySelector(".container");

let current = null;
let offsetX = 0;
let offsetY = 0;

items.forEach(item => {

  item.addEventListener("mousedown", function(e){

    current = item;

    const rect = item.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    item.style.position = "absolute";

  });

});

document.addEventListener("mousemove", function(e){

  if(current){

    const containerRect = container.getBoundingClientRect();

    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    // boundary control
    x = Math.max(0, Math.min(x, container.clientWidth - current.offsetWidth));
    y = Math.max(0, Math.min(y, container.clientHeight - current.offsetHeight));

    current.style.left = x + "px";
    current.style.top = y + "px";

  }

});

document.addEventListener("mouseup", function(){

  current = null;

});
