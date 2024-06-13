const template = document.createElement('template');
template.innerHTML = `
<div class="breadcrumb container mx-auto text-black dark:text-white">
  <div class="relative flex flex-col sm:flex-row-reverse justify-center items-center gap-2">
    <!-- Breadcrumb Title -->
    <h4 class="sm:absolute right-0 font-medium font-aviny" id="breadcrumb-title">
      جستجو
    </h4>

    <ul class="breadcrumb__main-list w-full sm:w-max flex item-center justify-start 2xs:justify-center line-clamp-1  overflow-x-auto overflow-y-hidden">
      <li class="flex items-center gap[2px] w-max">
        <a href="./">
          <svg class="size-5">
            <use xlink:href="#home-icon" class="text-black dark:text-white font-bold"></use>
          </svg>
        </a>
      </li>

      <li>
        <ul class="flex item-center justify-start 2xs:justify-center line-clamp-1" id="breadcrumb-list"">
        </ul>
      </li>
    </ul>
  </div>
</div>
`

class Breadcrumb extends HTMLElement{
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block bg-gray-200 dark:bg-gray-700"
  }
}

export {
  Breadcrumb
}
