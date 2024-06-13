import {
  showModal,
  hideModal,
  setStyle,
} from "./utils.js";


import {
  openMenu,
  closeMenu,
  closeOtherMenuItems,
  toggleMenuItem,
  setDefaultTheme,
  setNewTheme,
  searchHandel
} from "./shared-utils.js"

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

const renderMobileCatMenuOpention = () => {
  const mobileCatMenu = document.querySelector(".mobile-cat-menu");
  const openCatMenuBtn = document.querySelector("#open-cat-menu-btn");
  const closeCatMenuBtn = document.querySelector("#close-cat-menu-btn");

  openCatMenuBtn.addEventListener("click", () => {
    openMenu(mobileCatMenu);
  });
  closeCatMenuBtn.addEventListener("click", () => {
    closeMenu(mobileCatMenu);
  });
}

const renderMobileMenuItemOpention = () => {
  const mobileMenuItems = document.querySelectorAll(".mobile-menu__item");

  mobileMenuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      closeOtherMenuItems(mobileMenuItems, menuItem);
      toggleMenuItem(menuItem);
    });
  });
};

const renderMobileFooterItemOpention = () => {
  const footerMenuItems = document.querySelectorAll(".footer-main__content-part");

  footerMenuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      closeOtherMenuItems(footerMenuItems, menuItem);
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
  const overlys = document.querySelectorAll(".modal-overly");
  const closeModalBtns = document.querySelectorAll(".close-modal-btn");

  openModalBtns.forEach((openBtn) => {
    openBtn.addEventListener("click", () => {
      const modalID = openBtn?.dataset?.target;
      setStyle(document.body, 'overflow', 'hidden');
      showModal(modalID);
    });
  });

  closeModalBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const modalID = closeBtn?.dataset?.target;
      setStyle(document.body, 'overflow', 'auto');
      hideModal(modalID);
    });
  });

  overlys.forEach((overly) => {
    overly.addEventListener('click', () => {
      console.log(overly)
    })
  })
};

const renderSearching = () => {
  const searchInput = document.querySelector('#search-input')
  const searchBtn = document.querySelector('#search-btn')

  searchInput.addEventListener('keyup', e => {
    const searchedValue = searchInput.value.trim()
    if (e.keyCode === 13 && searchedValue) {
      searchHandel(searchedValue)
    }
  })

  searchBtn.addEventListener('click', () => {
    const searchedValue = searchInput.value.trim()
    if (searchedValue) {
      searchHandel(searchedValue)
    }    
  })
}

export {
  renderSearching,
  renderMobileMenuOpention,
  renderMobileCatMenuOpention,
  renderMobileMenuItemOpention,
  renderToggleTheme,
  renderModalsOpention,
  renderMobileFooterItemOpention
};
