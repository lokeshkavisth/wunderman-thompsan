const pivotItems = document.querySelectorAll(".pivot__item");
const pivotContents = document.querySelectorAll(".pivot__content");

pivotItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove active class from all pivot items and pivot contents
    pivotItems.forEach((p) => p.classList.remove("active"));
    pivotContents.forEach((c) => c.classList.remove("active"));

    // Add active class to the clicked pivot item and corresponding pivot content
    item.classList.add("active");
    pivotContents[index].classList.add("active");
  });
});

const scrollBtn = document.querySelector(".scroll__top__btn");

// Show the scroll button when the user scrolls down from the top of the document
window.onscroll = function () {
  toggleScrollBtn();
};

function toggleScrollBtn() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "grid";
  } else {
    scrollBtn.style.display = "none";
  }
}
