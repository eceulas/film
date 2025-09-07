document.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".toggle-ball");
  const toggle = document.querySelector(".toggle");
  const body = document.body;
  const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const movieList = movieLists[i];
  const items = movieList.querySelectorAll(".movie-item");
  const itemCount = items.length;

  let clickCounter = 0;
  const itemWidth = 300;
  const maxVisibleItems = Math.floor(window.innerWidth / itemWidth);
  const maxClicks = itemCount - maxVisibleItems;

  arrow.addEventListener("click", () => {
    if (clickCounter < maxClicks) {
      clickCounter++;
      movieList.style.transform = `translateX(${-itemWidth * clickCounter}px)`;
    } else {
      // Başa dön
      clickCounter = 0;
      movieList.style.transform = "translateX(0px)";
    }
  });
});

  ball.addEventListener("click", () => {
    // Body'e dark-mode sınıfı ekle/çıkar
    body.classList.toggle("dark-mode");

    // Toggle ve top ball'a dark-mode class'ı ekle/çıkar (animasyon için)
    toggle.classList.toggle("dark-mode");
    ball.classList.toggle("dark-mode");

    // Tema uyumlu olması gereken elemanlar (istenirse genişletilebilir)
    document.querySelectorAll(
      ".container, .navbar, .sidebar, .sidebar i, .movie-list-title, .movie-list-container, .movie-list-filter select"
    ).forEach((el) => {
      el.classList.toggle("dark-mode");
    });
  });
});