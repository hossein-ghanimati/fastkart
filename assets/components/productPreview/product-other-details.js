const template = document.createElement('template');
template.innerHTML = `
<!-- Other Details List -->
<ul
  class="other-details__tab-list overflow-x-auto overflow-y-hidden flex items-center justify-start sm:border-b border-[#808080] dark:border-white sm:text-lg font-medium">
  <li
    class="other-details__tab-item w-max relative bg-gray-200 dark:bg-gray-700 cursor-grab active">
    <i
      class="transition absolute top-0 right-0 opacity-0 w-0 h-[2px] sm:h-[3px] bg-theme-color-dark dark:bg-theme-color-light block"></i>
    <label
      class="other-details__tab-label block whitespace-nowrap text-nowrap cursor-grab"
      for="comments">بازخورد</label>
  </li>

  <li
    class="other-details__tab-item w-max relative bg-gray-200 dark:bg-gray-700 cursor-grab">
    <i
      class="transition absolute top-0 right-0 opacity-0 w-0 h-[2px] sm:h-[3px] bg-theme-color-dark dark:bg-theme-color-light block"></i>
    <label
      class="other-details__tab-label block whitespace-nowrap text-nowrap cursor-grab"
      for="product-description">توضیحات</label>
  </li>

  <li
    class="other-details__tab-item w-max relative bg-gray-200 dark:bg-gray-700 cursor-grab">
    <i
      class="transition absolute top-0 right-0 opacity-0 w-0 h-[2px] sm:h-[3px] bg-theme-color-dark dark:bg-theme-color-light block"></i>
    <label
      class="other-details__tab-label block whitespace-nowrap text-nowrap cursor-grab"
      for="fields">ویژگی محصول</label>
  </li>

  <li
    class="other-details__tab-item w-max relative bg-gray-200 dark:bg-gray-700 cursor-grab">
    <i
      class="transition absolute top-0 right-0 opacity-0 w-0 h-[2px] sm:h-[3px] bg-theme-color-dark dark:bg-theme-color-light block"></i>
    <label
      class="other-details__tab-label block whitespace-nowrap text-nowrap cursor-grab"
      for="guide">راهنمای استفاده</label>
  </li>
</ul>

<!-- Other Details Bodys -->
<div
  class="other-details__bodys-wrapper">
  <!-- Body Sample-->
  <div>
    <input type="radio" name="other-details"
      id="product-description"
      class="hidden other-details__tab-input">
    <!-- Content -->
    <div
      class="product-description__container hidden w-full transition text-gray-500 dark:text-gray-300">
      <!-- Details Content -->
      <div>
        <p>
          کیک هویج ژله ای کیک بیسکویت جو دوسر کیک گومی خرس تارت.
          پودینگ کیک هویج قطره لیمو خرس شیرین گومی. شکلات تارت کیک
          شکلاتی کیک کیک دونات شیرین بیان آلو شکر. لوبیا ژله
          تیرامیسو کارامل عناب بیسکویت شیرین بیان شکلات. پودینگ
          تافی عناب کیک جو دوسر رول شیرین. رویه حلوای براونی رول
          کروسان دسر قطره لیمو. آب نبات پودر گل ختمی، کنجد، ژله
          لوبیا، نبات، پای شیرینی زنجبیلی.
        </p>
      </div>

      <div>
        <h5>اورگانیک :</h5>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
          و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
          برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
          سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
          دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>

      <div>
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/14.jpg"
          alt="کیک شکلات خامه ای">
      </div>

      <div>
        <h5>سازنده محصول کیست :</h5>
        <p>
          <div>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
              و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
              باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
              آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
              نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
              علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد.
            </p>
          </div>

          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
          و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
          برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>

    </div>
  </div>

  <div>
    <input type="radio" name="other-details" id="fields"
      class="hidden other-details__tab-input">
    <!-- Content -->
    <div class="hidden w-full transition">
      <!-- Details Content -->
      <table class="w-full">
        <tbody class="w-full">
          <tr class="w-full">
            <td
              class="border border-grya-300 dark:border-gray-500 w-2/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">سازنده</span>
            </td>
            <td
              class="border border-grya-300 dark:border-gray-500 w-3/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">امین
                احمدی</span>
            </td>
          </tr>
          <tr class="w-full">
            <td
              class="border border-grya-300 dark:border-gray-500 w-2/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">میزان
                قند</span>
            </td>
            <td
              class="border border-grya-300 dark:border-gray-500 w-3/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">100
                گرم</span>
            </td>
          </tr>
          <tr class="w-full">
            <td
              class="border border-grya-300 dark:border-gray-500 w-2/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">نوشته
                روی کیک</span>
            </td>
            <td
              class="border border-grya-300 dark:border-gray-500 w-3/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">امین
                تولدت مبارک</span>
            </td>
          </tr>
          <tr class="w-full">
            <td
              class="border border-grya-300 dark:border-gray-500 w-2/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">میزان
                چربی</span>
            </td>
            <td
              class="border border-grya-300 dark:border-gray-500 w-3/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">120
                گرم</span>
            </td>
          </tr>
          <tr class="w-full">
            <td
              class="border border-grya-300 dark:border-gray-500 w-2/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">نوع
                خمیر</span>
            </td>
            <td
              class="border border-grya-300 dark:border-gray-500 w-3/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">تهیه
                شده با آرد معمولی</span>
            </td>
          </tr>
          <tr class="w-full">
            <td
              class="border border-grya-300 dark:border-gray-500 w-2/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">نوع
                خامه</span>
            </td>
            <td
              class="border border-grya-300 dark:border-gray-500 w-3/5">
              <span
                class="px-4 py-2 2xs:px-8 2xs:py-4 sm:px-10 sm:py-5 line-clamp-2 overflow-hidden">شکلاتی</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <input type="radio" name="other-details" id="guide"
      class="hidden other-details__tab-input">
    <!-- Content -->
    <div class="hidden w-full transition">
      <!-- Details Content -->
      <ul
        class="text-gray-500 dark:text-gray-300 list-disc space-y-2 sm:space-y-4">
        <li>کیک های خامه ای را در یخچال نگهداری کنید. کیک های
          فوندانت باید در محیطی با تهویه مطبوع نگهداری شوند.</li>

        <li>کیک را برش بزنید و در دمای اتاق سرو کنید و مطمئن شوید
          که در معرض حرارت نباشد.</li>

        <li>از یک چاقوی دندانه دار برای برش کیک فوندانت استفاده
          کنید.</li>

        <li>عناصر مجسمه سازی و مجسمه ها ممکن است حاوی تکیه گاه های
          سیمی یا خلال دندان یا سیخ های چوبی برای حمایت
          باشند.</li>

        <li>لطفاً محل قرارگیری این اقلام را قبل از ارائه به کودکان
          کوچک بررسی کنید.</li>

        <li>کیک باید ظرف 24 ساعت مصرف شود.</li>

        <li>از کیک خود لذت ببرید!</li>
      </ul>
    </div>
  </div>

  <div>
    <input type="radio" name="other-details" id="comments" checked
      class="hidden other-details__tab-input">
    <!-- Content -->
    <div class="hidden w-full transition">
      <!-- Details Content -->
      <div class="grid grid-cols-1 xl:grid-cols-2">
        <!-- Cooments Points -->
        <div class="col-span-1">
          <!-- Points To Number -->
          <div
            class="text-gray-500 dark:text-gray-300 flex items-start 2xl:items-center md:text-lg">
            <span
              class="font-medium text-2xl md:tex-2xl 2xl:text-4xl text-black dark:text-white ml-2 flex items-start 2xl:items-center">
              <span>2.42</span>
              <img src="./assets/image/svg/star_fill.svg"
                alt="star" class="inline-block size-6">
            </span>
            از5
          </div>

          <!-- Point In Chart -->
          <ul
            class="pt-2 md:pt-3 2xl:pt-4 mb-4 md:mb-6 2xl:mb-8 pb-4 md:pb-6 2xl:pb-8 border-b border-gray-300 dark:border-x-gray-500">
            <li class="flex items-center justify-between">
              <div class="flex items-center justify-between w-1/12">
                <span>5</span>
                <img src="./assets/image/svg/star_fill.svg"
                  alt="star">
              </div>

              <div
                class="w-full bg-gray-200 rounded-full h-2 xs:h-2.5 dark:bg-gray-700 mx-2 sm:mx-3">
                <div class="bg-theme-color-light h-2 xs:h-2.5 rounded-full"
                  style="width: 50%"></div>
              </div>

              <span>5</span>
            </li>

            <li class="flex items-center justify-between">
              <div class="flex items-center justify-between w-1/12">
                <span>4</span>
                <img src="./assets/image/svg/star_fill.svg"
                  alt="star">
              </div>

              <div
                class="w-full bg-gray-200 rounded-full h-2 xs:h-2.5 dark:bg-gray-700 mx-2 sm:mx-3">
                <div class="bg-theme-color-dark h-2 xs:h-2.5 rounded-full"
                  style="width: 20%"></div>
              </div>

              <span>2</span>
            </li>

            <li class="flex items-center justify-between">
              <div class="flex items-center justify-between w-1/12">
                <span>3</span>
                <img src="./assets/image/svg/star_fill.svg"
                  alt="star">
              </div>

              <div
                class="w-full bg-gray-200 rounded-full h-2 xs:h-2.5 dark:bg-gray-700 mx-2 sm:mx-3">
                <div class="bg-blue-600 h-2 xs:h-2.5 rounded-full"
                  style="width: 10%"></div>
              </div>

              <span>1</span>
            </li>

            <li class="flex items-center justify-between">
              <div class="flex items-center justify-between w-1/12">
                <span>2</span>
                <img src="./assets/image/svg/star_fill.svg"
                  alt="star">
              </div>

              <div
                class="w-full bg-gray-200 rounded-full h-2 xs:h-2.5 dark:bg-gray-700 mx-2 sm:mx-3">
                <div class="bg-orange-400 h-2 xs:h-2.5 rounded-full"
                  style="width: 20%"></div>
              </div>

              <span>2</span>
            </li>

            <li class="flex items-center justify-between">
              <div class="flex items-center justify-between w-1/12">
                <span>1</span>
                <img src="./assets/image/svg/star_fill.svg"
                  alt="star">
              </div>

              <div
                class="w-full bg-gray-200 rounded-full h-2 xs:h-2.5 dark:bg-gray-700 mx-2 sm:mx-3">
                <div class="bg-red-600 h-2 xs:h-2.5 rounded-full"
                  style="width: 10%"></div>
              </div>

              <span>1</span>
            </li>
          </ul>

          <!-- Enter The Comment Btn -->
          <div>
            <p class="font-bold sm:text-lg">بازخورد این محصول</p>
            <p
              class="text-gray-500 dark:text-gray-300 mt-1 lg:mt-2 text-sm sm:text-base">با
              ثبت بازخورد خود در خرید دیگران راهنمایی خوبی باشید</p>

            <button
              class="w-full rounded xs:rounded-md flex items-center gap-1 justify-center py-[10px] bg-gray-200 dark:bg-gray-700 mt-1 lg:mt-2 shadow">
              ثبت دیدگاه <span class="hidden 3xs:inline-block"> شما</span>
            </button>
          </div>
        </div>

        <!-- Comment Content -->
        <div
          class="col-span-1 h-[420px] overflow-x-hidden overflow-y-auto pl-3 xl:pl-5 xl:pr-3 mt-4 md:mt-6 xl:mt-0 space-y-2 sm:space-y-3">
          <comment-box
            src="2 (1).jpg"
            name="حسین غنیمتی"
            date="3 روز پیش"
            stars="4"
            content="
           کامنت حسین غنیمتی 
            چاپ و با استفاده از
           طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
           لازم است"></comment-box>
          <comment-box
            src="2 (1).jpg"
            name="حسین غنیمتی"
            date="3 روز پیش"
            stars="4"
            content="
           کامنت حسین غنیمتی 
            چاپ و با استفاده از
           طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
           لازم است"></comment-box>
          <comment-box
            src="2 (1).jpg"
            name="حسین غنیمتی"
            date="3 روز پیش"
            stars="4"
            content="
           کامنت حسین غنیمتی 
            چاپ و با استفاده از
           طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
           لازم است"></comment-box>
          <comment-box
            src="2 (1).jpg"
            name="حسین غنیمتی"
            date="3 روز پیش"
            stars="4"
            content="
           کامنت حسین غنیمتی 
            چاپ و با استفاده از
           طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
           لازم است"></comment-box>
          <comment-box
            src="2 (1).jpg"
            name="حسین غنیمتی"
            date="3 روز پیش"
            stars="4"
            content="
           کامنت حسین غنیمتی 
            چاپ و با استفاده از
           طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
           لازم است"></comment-box>
          <comment-box
            src="2 (1).jpg"
            name="حسین غنیمتی"
            date="3 روز پیش"
            stars="4"
            content="
           کامنت حسین غنیمتی 
            چاپ و با استفاده از
           طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
           لازم است"></comment-box>
        </div>
      </div>
    </div>
  </div>
</div>
`

export default class ProductOtherDetails extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block"
  }
}