const template = document.createElement('template');
template.innerHTML = `

<!-- Section Title -->
<h4 class="font-aviny text-3xl md:text-4xl dark:text-stone-50">مروری بر دسته ها</h4>

<!-- Section Line -->
<span class="section__header-line">
  <svg class="size-6 md:size-9 mx-2 md:mx-4">
    <use xlink:href="#leaf" class="p-1 fill-theme-color-dark dark:fill-theme-color-light"></use>
  </svg>
</span>

<!-- Section Subtitle -->
<p class="text-gray-500 dark:text-gray-300"></p>

`


class SectionHeader extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.querySelector('h4').innerHTML = this.getAttribute('title')
    this.querySelector('p').innerHTML = this.getAttribute('subTitle')
  }

  observedAttributes(){
    return [title, subTitle]
  }
}

export {
  SectionHeader
}