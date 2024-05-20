const getFromLocal = (key) => {
  const value = localStorage.getItem(`fastkart-${key}`);
  return JSON.parse(value);
};

const setToLocal = (key, value) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(`fastkart-${key}`, jsonValue);
};

const getFromSession = (key) => {
  const value = sessionStorage.getItem(`fastkart-${key}`);
  return JSON.parse(value);
};

const setToSession = (key, value) => {
  const jsonValue = JSON.stringify(value);
  sessionStorage.setItem(`fastkart-${key}`, jsonValue);
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
  el.style.transform = "translateY(40px)"
  el.style.transition = "300ms"
  el.style.display = display;
  el.style.transform = "translateY(0)"
  setTimeout(() => el.style.transition = 0, 300)
};

const hideElem = (el) => {
  el.style.display = "none";
};

const showModal = (modalID) => {
  const modal = document.querySelector(`#${modalID}`);
  modal.classList.remove("modal-close")
  modal.classList.add("modal-open")
};

const hideModal = (modalID) => {
  const modal = document.querySelector(`#${modalID}`);
  modal.classList.add("modal-close")
  modal.classList.remove("modal-open")
};

const setStyle = (el, prop, value) => {
  el.style[prop] = value
}

export {
  openMenu,
  closeMenu,
  closeOtherMenuItems,
  toggleMenuItem,
  getFromLocal,
  setToLocal,
  getFromSession,
  setToSession,
  setDefaultTheme,
  setNewTheme,
  showElem,
  hideElem,
  showModal,
  hideModal,
  setStyle
};
