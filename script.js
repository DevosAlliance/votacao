const header = document.getElementById("header");
const searchBar = document.getElementById("search-bar");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Rolando para baixo
    header.classList.add("header-blur");
    searchBar.classList.add("hidden-search-bar");
  } else {
    // Rolando para cima ou chegou ao topo
    if (currentScroll === 0) {
      header.classList.remove("header-blur");
    }
    searchBar.classList.remove("hidden-search-bar");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
