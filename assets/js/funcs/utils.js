const getFromLocal = key => {
  const value = localStorage.getItem(`fastkart-${key}`);
  return JSON.parse(value);
};

const setToLocal = (key, value) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(`fastkart-${key}`, jsonValue);
};

const getFromSession = key => {
  const value = sessionStorage.getItem(`fastkart-${key}`);
  return JSON.parse(value);
};

const setToSession = (key, value) => {
  const jsonValue = JSON.stringify(value);
  sessionStorage.setItem(`fastkart-${key}`, jsonValue);
};

const showElem = (el, display = "block") => {
  el.style.transform = "translateY(40px)"
  el.style.transition = "300ms"
  el.style.display = display;
  el.style.transform = "translateY(0)"
  setTimeout(() => el.style.transition = 0, 300)
};

const hideElem = el => {
  el.style.display = "none";
};

const showModal = modalID => {
  const modal = document.querySelector(`#${modalID}`);
  modal.classList.remove("modal-close")
  modal.classList.add("modal-open")
};

const hideModal = modalID => {
  const modal = document.querySelector(`#${modalID}`);
  modal.classList.add("modal-close")
  modal.classList.remove("modal-open")
};

const setStyle = (el, prop, value) => {
  el.style[prop] = value
}

const getUrlParam = param => {
  const urlParams = new URLSearchParams(location.search)
  return urlParams.get(param)
}

const setUrlParam = (param, value) => {
  const url = new URL(location.href)
  const searchParams = url.searchParams;

  searchParams.set(param, value)
  url.search = searchParams.toString()

  location.href = url.toString()
}

const removeParam = param => {
  const searchParams = new URLSearchParams(location.search)
  const url = new URL(location.href)

  searchParams.delete(param)
  url.search = searchParams.toString()

  location.href = url.toString()
}

const removeParamWithotRefresh = param => {
  const searchParams = new URLSearchParams(location.search)
  const url = new URL(location.href)

  searchParams.delete(param)
  url.search = searchParams.toString()

  history.pushState({}, "", url.toString())
}

const setParamWithotRefresh = (param, value) => {
  const url = new URL(location.href)
  const searchParams = url.searchParams;

  searchParams.set(param, value)
  url.search = searchParams.toString()

  history.pushState({}, "", url.toString())
}

const handleBreadcrumb = (title, list) => {
  const breadcrumbTitle = document.querySelector('#breadcrumb-title')
  const breadcrumbList = document.querySelector('#breadcrumb-list')
  
  breadcrumbTitle.innerHTML = title;
  breadcrumbList.innerHTML = ''
  
  list.forEach(item => {
    breadcrumbList.insertAdjacentHTML('beforeend', ` 
      <li class="flex items-center gap-1 text-sm sm:text-base font-medium text-nowrap w-max">
        <svg class="size-5">
          <use xlink:href="#angle"></use>
        </svg>
        <a href="${item.href}">${item.value}</a>
      </li>
    `)
  });
}

export {
  getFromLocal,
  setToLocal,
  getFromSession,
  setToSession,
  showElem,
  hideElem,
  showModal,
  hideModal,
  setStyle,
  getUrlParam,
  setUrlParam,
  removeParam,
  removeParamWithotRefresh,
  setParamWithotRefresh,
  handleBreadcrumb
};
