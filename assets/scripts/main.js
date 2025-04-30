// Inspiration carousel

const stack = document.querySelector(".carousel-stack");
const cards = Array.from(stack.children);
const paginationContainer = document.querySelector(".pagination");
const prevBtn = document.querySelector(".nav.prev");
const nextBtn = document.querySelector(".nav.next");

let currentCards = [...cards];
const visibleCount = 3;

function renderCarousel() {
  stack.innerHTML = "";
  currentCards.forEach((card, index) => {
    card.classList.remove("focused");
    if (index === 0) card.classList.add("focused");
    stack.appendChild(card);
  });

  updatePagination();
}

function moveNext() {
  const first = currentCards.shift(); // remove first
  currentCards.push(first); // add it to end
  renderCarousel();
}

function movePrev() {
  const last = currentCards.pop(); // remove last
  currentCards.unshift(last); // add to beginning
  renderCarousel();
}

function updatePagination() {
  paginationContainer.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("pagination-dot");
    if (currentCards[0].dataset.index == i) {
      dot.classList.add("active");
    }
    paginationContainer.appendChild(dot);
  }
}

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);

window.addEventListener("load", () => {
  // Tag each original card with index for pagination tracking
  currentCards.forEach((card, i) => (card.dataset.index = i));
  renderCarousel();
});
