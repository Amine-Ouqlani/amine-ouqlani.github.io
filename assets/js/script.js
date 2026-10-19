'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// show one tab: each nav button names its page in data-nav-target,
// which must match the data-page attribute of an <article>
const showPage = function (target, updateHash) {

  // ignore anything that is not a tab name (e.g. #le-colle), so no tab gets hidden by mistake
  let found = false;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].dataset.page === target) found = true;
  }

  if (!found) return false;

  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.toggle("active", pages[i].dataset.page === target);
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].classList.toggle("active", navigationLinks[i].dataset.navTarget === target);
  }

  window.scrollTo(0, 0);

  // keep the tab in the address bar, so a link like index.html#careers opens that tab
  if (updateHash && history.replaceState) {
    history.replaceState(null, "", "#" + target);
  }

  return true;

}

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    showPage(this.dataset.navTarget, true);
  });
}

// open the tab named in the address bar (index.html#mobility, ...)
const openFromHash = function () {
  const target = decodeURIComponent(window.location.hash.replace("#", ""));
  if (target) showPage(target, false);
}

openFromHash();
window.addEventListener("hashchange", openFromHash);