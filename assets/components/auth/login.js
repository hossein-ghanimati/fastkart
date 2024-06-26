const template = document.createElement('template');
template.innerHTML =`
<!-- Form -->
<div class="w-full col-span-2 lg:col-span-1">
  <div
    class="flex flex-col items-center justify-center 2xs:px-6 2xs:py-8  mx-auto lg:py-0">
    <div
      class="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-md">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          ورود به حساب شما
        </h1>
        <div class="space-y-4 md:space-y-6">
          <div>
            <label for="login-email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس
              ایمیل</label>
            <input dir="ltr" type="email" name="login-email" id="login-email"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-theme-color-dark focus:border-theme-color-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme-color-light dark:focus:border-theme-color-light"
              placeholder="example.com..." required>
          </div>
          <div>
            <label for="login-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">گذرواژه</label>
            <input dir="ltr" type="password" name="login-password"
              id="login-password" placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-theme-color-dark focus:border-theme-color-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme-color-light dark:focus:border-theme-color-light"
              required>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start gap-1">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox"
                  clFass="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-theme-color-dark dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-theme-color-dark dark:ring-offset-gray-800">
              </div>
              <div class="ml-3 text-sm">
                <label for="remember"
                  class="text-gray-500 dark:text-gray-300">مرا به
                  خاطر بسپار</label>
              </div>
            </div>
            <button
              onclick="changeForm('forgot-password', 'فراموشی رمز عبور')"
              class="text-sm font-medium text-theme-color-dark hover:underline dark:text-theme-color-light">فراموشی
              رمز عبور</button>
          </div>
          <button
            class="w-full text-white bg-theme-color-dark hover:bg-theme-color-light ring-4 outline-none ring-theme-color-dark hover:ring-theme-color-light font-medium rounded-lg text-sm px-5 py-2.5 text-center">ورود
            به حساب</button>
          <p
            class="text-sm font-light text-gray-500 dark:text-gray-400">
            هیچ حسابی ندارید؟
            <button
              onclick="changeForm('register', 'عضویت در سایت')"
              class="font-medium text-theme-color-dark hover:underline dark:text-theme-color-light">ثبت
              نام
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Picture -->
<div class="hidden lg:block col-span-1">
  <img src="./assets/image/auth/log-in.png" alt="login-pg">
</div>
`

export default class Login extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "form hidden grid-cols-2 items-center"
    this.setAttribute('id', 'login')
  }
}
