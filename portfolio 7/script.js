document.querySelector(".order").addEventListener("mouseover", function () {
  this.innerText = "今すぐ注文!";
});

document.querySelector(".order").addEventListener("mouseout", function () {
  this.innerText = "Order Now!";
});

const gambar = document.querySelector(".quote-gambar");

document.querySelector(".click-sushi").addEventListener("click", function () {
  gambar.style.display = "inline-block";
});
