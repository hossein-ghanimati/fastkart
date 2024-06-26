const template = document.createElement('template');
template.innerHTML =`
<!-- Form -->
<div class=" col-span-2 lg:col-span-1 2xs:px-6 2xs:py-8">
  <div
    class="mx-auto mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-theme-color-light ">
    <div class="p-4 sm:p-7 w-full">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">رمزت
          رو فراموش کردی؟</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          رمزت یادت اومد؟
          <button
            onclick="changeForm('login', 'ورود به حساب')"
            class="text-theme-color-dark decoration-2 hover:underline font-medium">
            برو به حسابت
          </button>
        </p>
      </div>

      <div class="mt-5">
        <div>
          <div class="grid gap-y-4">
            <div>
              <label for="forgot-email"
                class="block text-sm font-bold ml-1 mb-2 dark:text-white">آدرس
                ایمیل</label>
              <div class="relative">
                <input type="email" id="forgot-email" name="forgot-email"
                  class="dark:bg-gray-800 py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-theme-color-dark focus:ring-theme-color-dark shadow-sm"
                  required aria-describedby="email-error">
              </div>
              <p class="hidden text-xs text-red-600 mt-2"
                id="forgot-email-error">لطفا یک ایمیل معتبر وارد کنید.</p>
            </div>
            <button
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-theme-color-dark text-white hover:bg-theme-color-light focus:outline-none focus:ring-2 focus:ring-theme-color-dark focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">تغیر
              گذرواژه</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Picture -->
<div class="hidden lg:block col-span-1">
  <img src="./assets/image/auth/forgot.png" alt="login-pg">
</div>
`

export default class ForgotPassword extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "form hidden grid-cols-2 items-center justify-center"
    this.setAttribute('id', 'forgot-password')
  }
}
