const getFromLocal = (key) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

const setToLocal = (key, value) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
};

const openMenu = (menu) => {
  menu.classList.add("open");
};

const closeMenu = (menu) => {
  menu.classList.remove("open");
};

const closeOtherMenuItems = (mobileMenuItems, menuItem) => {
  mobileMenuItems.forEach(
    (item) =>
      menuItem.classList.contains("active") || item.classList.remove("active")
  );
};

const toggleMenuItem = (menuItem) => {
  menuItem.classList.toggle("active");
};

const setDefaultTheme = () => {
  const htmlEl = document.querySelector("html");
  const darkTheme = getFromLocal("dark-theme")?.dark;
  if (darkTheme) htmlEl.classList.add("dark");
};

const setNewTheme = () => {
  const htmlEl = document.querySelector("html");
  htmlEl.classList.toggle("dark");
  if (htmlEl.classList.contains("dark")) {
    setToLocal("dark-theme", { dark: true });
  } else {
    setToLocal("dark-theme", { dark: false });
  }
};

const showElem = (el, display = "block") => {
  el.style.display = display;
};

const hideElem = (el) => {
  el.style.display = "none";
};

const showModal = (modalID, display = "block") => {
  const modal = document.querySelector(`#${modalID}`);
  showElem(modal, display);
};

const hideModal = (modalID) => {
  const modal = document.querySelector(`#${modalID}`);
  hideElem(modal);
};

export {
  openMenu,
  closeMenu,
  closeOtherMenuItems,
  toggleMenuItem,
  getFromLocal,
  setToLocal,
  setDefaultTheme,
  setNewTheme,
  showElem,
  hideElem,
  showModal,
  hideModal
};
