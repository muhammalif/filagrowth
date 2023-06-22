var typed = new Typed(".auto-type", {
  strings: ["Jr. Front-End Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.classList.add("show");
  mainMenu.classList.remove("hidden2");
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.classList.remove("show");
  mainMenu.classList.add("hidden");
  mainMenu.style.top = "-200%";
}

gsap.from(".animated-element", { duration: 1, x: -100, opacity: 0 });

window.addEventListener("load", function () {
  var whatIDo = document.querySelector(".column.service h3");

  // change font color
  whatIDo.style.color = "crimson";
});
