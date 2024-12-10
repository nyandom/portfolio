document.addEventListener("DOMContentLoaded", () => {
  const gif = document.getElementById("loading-gif");

  setTimeout(() => {
    gif.style.opacity = "0";
  }, 1500);

  gif.addEventListener("transitionend", () => {
    gif.remove();
  });
});