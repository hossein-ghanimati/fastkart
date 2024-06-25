import {getUrlParam, handleBreadcrumb, setParamWithotRefresh} from"../../funcs/utils.js"
const renderBreadcrumb = () => {
  const title = getUrlParam('label');
  const form = getUrlParam('form');
  const list = [
    {href: "./auth.html", value: "احراز هویت"},
  ]

  if (title && form) {
    list.push(
      {href: `./auth.html?label=${title}&form=${form}`, value: title}
    )
  }

  handleBreadcrumb(title || 'احراز هویت', list)
}

const showForm = () => {
  const mainFormID = getUrlParam('form') || 'login';

  const forms = document.querySelectorAll('.form')
  forms.forEach(form => {
    const formID = form.getAttribute('id')
    if (formID == mainFormID) {
      form.classList.replace('hidden', "flex")
    }else{
      form.classList.replace('flex', "hidden")
    }
  })

}

const changeForm = formID => {
  setParamWithotRefresh("form", formID)
  showForm()
}

export {
  renderBreadcrumb,
  showForm,
  changeForm
}