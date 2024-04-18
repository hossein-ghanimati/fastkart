import {
  openMenu,
  closeMenu,
  closeOtherMenuItems,
  toggleMenuItem,
  getFromLocal,
  setDefaultTheme,
  setNewTheme
} from "./utils.js";

const renderMobileMenuOpention = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const openMenuBtn = document.querySelector("#open-menu-btn");
  const closeMenuBtn = document.querySelector("#close-menu-btn");

  openMenuBtn.addEventListener("click", () => {
    openMenu(mobileMenu);
  });
  closeMenuBtn.addEventListener("click", () => {
    closeMenu(mobileMenu);
  });
};

const renderMobileMenuItemOpention = () => {
  const mobileMenuItems = document.querySelectorAll(".mobile-menu__item");

  mobileMenuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      closeOtherMenuItems(mobileMenuItems, menuItem);
      toggleMenuItem(menuItem);
    });
  });
};

const renderToggleTheme = () => {
  setDefaultTheme();

  const toggleThemeBtns = document.querySelectorAll(".toggle-theme-btn");
  toggleThemeBtns.forEach(btn => {
    btn.addEventListener('click', setNewTheme)
  })
};

export {
  renderMobileMenuOpention,
  renderMobileMenuItemOpention,
  renderToggleTheme,
};
