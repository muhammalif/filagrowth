new Vue({
  el: "#app",
  mounted() {
    // Menerapkan animasi fade-in pada elemen dengan class "fade-in"
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element, index) => {
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.transition = "opacity 1s ease-in-out";
        element.style.opacity = 1;
      }, index * 200); // Menyesuaikan penundaan antara setiap elemen
    });
  },
});
