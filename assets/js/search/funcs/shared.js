import { getUrlParam } from "../../funcs/utils.js";
import { generateSearchedItem, getSearchedData } from "./utils.js";

const pageSearchInput = document.querySelector('#page-search-input');

const renderSearchedData = async searchedValue => {
  const dataWrapper = document.querySelector('#searched-data-wrapper')
  dataWrapper.innerHTML = ''

  const searchedData = await getSearchedData(searchedValue)
  searchedData.forEach(item => {
    dataWrapper.insertAdjacentHTML('beforeend', generateSearchedItem(item))
  });
}

const searchAsUrlParam = () => {
  const searchedValue = getUrlParam('searchedValue');
  if (!searchedValue) return false;

  renderSearchedData(searchedValue)
}

const loadSearchedValue = () => {
  pageSearchInput.value = getUrlParam('searchedValue')
}

const renderSearching = () => {
  const pageSearchBtn = document.querySelector('#page-search-btn');

  pageSearchInput.addEventListener('keyup', e => {
    const searchedValue = pageSearchInput.value.trim()
    if (e.keyCode === 13 && searchedValue) {
      renderSearchedData(searchedValue)
    }
  })

  pageSearchBtn.addEventListener('click', () => {
    const searchedValue = pageSearchInput.value.trim()
    if (searchedValue) {
      renderSearchedData(searchedValue)
    }
  })
}

export{
  searchAsUrlParam,
  loadSearchedValue,
  renderSearching,
}