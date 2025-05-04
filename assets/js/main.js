document.getElementById("guest").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("host").classList.remove("active");
  });

document.getElementById("host").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("guest").classList.remove("active");
});