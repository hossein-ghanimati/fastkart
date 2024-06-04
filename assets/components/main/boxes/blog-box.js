const template = document.createElement("template")
template.innerHTML = `
  <a href="#" class="blogLink block w-full sm:w-[250px] lg:w-[410px] 3xl:w-full rounded-md overflow-hidden">
    <img src="./assets/image/blog/1.jpg" class="blogImg w-full"/>
  </a>

  <div class="p-2">
    <!-- Subtitle -->
    <p class="blogSubtitle line-clamp-1 text-gray-600 dark:text-gray-300 text-sm mt-2 md:mt-4">فارمات</p>
    <a href="#" class="blogLink blogTitle line-clamp-1 text-lg mt-1 font-bold">گیاه مغذی</a>
  </div>
`

class BlogBox extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "swiper-slide block w-full sm:w-max bg-gray-100 dark:bg-gray-800"

    this.querySelectorAll('.blogLink').forEach(link => link.setAttribute('href', `./posts.html?id=${this.getAttribute('id')}`))
    this.querySelector('.blogImg').setAttribute('src', `./assets/image/${this.getAttribute('src')}`)
    this.querySelector('.blogSubtitle').innerHTML = this.getAttribute('subtitle');
    this.querySelector('.blogTitle').innerHTML = this.getAttribute('title');
  }

  observedAttributes(){
    return [
      id,
      src,
      subtitle, 
      title
    ]
  }
}

export {
  BlogBox
}