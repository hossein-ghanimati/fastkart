import {
  openMenu,
  closeMenu,
  closeOtherMenuItems,
  toggleMenuItem,
  getFromLocal,
  setDefaultTheme,
  setNewTheme,
  hideElem,
  showElem,
  showModal,
  hideModal,
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
  toggleThemeBtns.forEach((btn) => {
    btn.addEventListener("click", setNewTheme);
  });
};

const renderModalsOpention = () => {
  const openModalBtns = document.querySelectorAll(".open-modal-btn");
  const modals = document.querySelectorAll(".modal");
  const closeModalBtns = document.querySelectorAll(".close-modal-btn");

  openModalBtns.forEach((openBtn) => {
    openBtn.addEventListener("click", () => {
      const modalID = openBtn?.dataset?.target;
      showModal(modalID);
    });
  });

  closeModalBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const modalID = closeBtn?.dataset?.target;
      hideModal(modalID);
    });
  });
};

export {
  renderMobileMenuOpention,
  renderMobileMenuItemOpention,
  renderToggleTheme,
  renderModalsOpention,
};
