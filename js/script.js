const items = document.querySelectorAll(".list li");
const itemsPerPage = 4;
let currentPage = 1;

function showItems(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = 0; i < items.length; i++) {
    if (i >= startIndex && i < endIndex) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}

function setActivePage(page) {
  const links = document.querySelectorAll(".pagination a");
  for (let i = 0; i < links.length; i++) {
    if (i + 1 === page) {
      links[i].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  }
}

function showPage(page) {
  showItems(page);
  setActivePage(page);
}

showPage(currentPage);

const paginationLinks = document.querySelectorAll(".pagination a");
for (let i = 0; i < paginationLinks.length; i++) {
  paginationLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    currentPage = parseInt(this.innerHTML);
    showPage(currentPage);
  });
}
