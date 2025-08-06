const teamFilter = document.querySelector(".teamsearch-filter");
const teamFilterList = document.querySelector(".teamsearch-filterList");
const filterItems = teamFilterList.querySelectorAll("li");
const categoryFilter = document.getElementById("category-filter");

let filterStatus = false;

teamFilter.addEventListener("click", () => {
  if (!filterStatus) {
    teamFilterList.style.height = "80px";
    teamFilterList.style.opacity = 1;
    filterStatus = true;
  } else {
    teamFilterList.style.height = "0px";
    teamFilterList.style.opacity = 0;
    filterStatus = false;
  }
});

filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedValue = item.dataset.value;
    categoryFilter.textContent = selectedValue;

    setTimeout(() => {
      teamFilterList.style.height = "0px";
      teamFilterList.style.opacity = 0;
      filterStatus = false;
    });
  });
});
