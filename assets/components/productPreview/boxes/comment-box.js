const template = document.createElement('template');
template.innerHTML = `
<div class="w-20">
  <div class="group size-20 rounded-md overflow-hidden">
    <img src="./assets/image/user/2 (1).jpg" alt="user-1"
      class="userImg transition group-hover:scale-125 w-full">
  </div>
</div>

<!-- Info Wrapper -->
<div class="text-gray-500 dark:text-gray-300 text-sm w-full overflow-hidden">
  <!-- Info Header -->
  <div class="flex items-center xs:items-end justify-between">
    <!-- Right -->
    <div
      class="flex items-center justify-start gap-2 max-w-[60%] overflow-hidden line-clamp-1">
      <!-- Name -->
      <span
        class="userName font-medium text-theme-color-dark dark:text-theme-color-light whitespace-nowrap text-nowrap">محمد
        امین سعیدی</span>

      <!-- Date -->
      <span class="commentDate whitespace-nowrap text-nowrap text-xs">سه هفته پیش
      </span>
    </div>

    <!-- Left -->
    <div class="commentStars w-max flex items-center">
      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px] xs:size-4">

      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px] xs:size-4">

      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px] xs:size-4">

      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px] xs:size-4">

      <img src="./assets/image/svg/star.svg" alt="star"
        class="size-[14px] xs:size-4">
    </div>
  </div>

  <!-- Info Content -->
  <p class="commentContent w-full mt-2 md:mt-3 2xl:mt-4">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
    لازم است
  </p>
</div>
`

export default class CommentBox extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  renderStars(){
    const starsContainer = this.querySelector('.commentStars')
    starsContainer.innerHTML = ""
    const stars = 5 - this.getAttribute('stars')
    const fillStars = 5 - stars
    
    for (let i = 0; i < fillStars; i++) {
      starsContainer.insertAdjacentHTML('beforeend', `
        <img src="./assets/image/svg/star_fill.svg" alt="star" class="size-[14px]">
      `)      
    }
    for (let i = 0; i < stars; i++) {
      starsContainer.insertAdjacentHTML('beforeend', `
        <img src="./assets/image/svg/star.svg" alt="star" class="size-[14px]">
      `)      
    }
  }

  connectedCallback(){
    this.className = "comment-box w-full rounded sm:rounded-[10px] flex items-center xs:items-start xl:items-center 2xl:items-start flex-col xs:flex-row xl:flex-col 2xl:flex-row bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 gap-2 2xs:gap-4"
    this.querySelector(".userImg").setAttribute('src', `./assets/image/user/${this.getAttribute('src')}`)
    this.querySelector('.userName').innerHTML = this.getAttribute('name')
    this.querySelector('.commentDate').innerHTML = this.getAttribute('date')
    this.querySelector('.commentContent').innerHTML = this.getAttribute('content')

    this.renderStars()
  }

  observedAttributes(){
    return[
      src,
      name,
      date,
      stars,
      content
    ]
  }
}