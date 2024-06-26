const template = document.createElement('template');
template.innerHTML =`
<!-- Form -->
<div class="w-full col-span-2 lg:col-span-1">
  <div
    class="flex flex-col items-center justify-center 2xs:px-6 2xs:py-8 mx-auto lg:py-0">
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          ایجاد حساب
        </h1>
        <div class="space-y-4 md:space-y-6" action="#">
          <div>
            <label for="register-email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس
              ایمیل</label>
            <input type="email" name="register-email" id="register-email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@gmail.com" required>
          </div>
          <div>
            <label for="register-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">گذرواژه</label>
            <input type="password" name="register-password"
              id="register-password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required>
          </div>
          <div class="flex items-start gap-1">
            <div class="flex items-center h-5">
              <input id="terms" aria-describedby="terms"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required>
            </div>
            <div class="ml-3 text-sm">
              <label for="terms"
                class="font-light text-gray-500 dark:text-gray-300">
                تمامی
                <button
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  مقررات
                </button>
                را میپذیرم
              </label>
            </div>
          </div>
          <button type="submit"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ایجاد
            حساب</button>
          <p
            class="text-sm font-light text-gray-500 dark:text-gray-400">
            اکانتی دارید ؟
            <button
              onclick="changeForm('login', 'ورود به حساب')"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500">
              ورود کنید
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Picture -->
<div class="hidden lg:block col-span-1">
  <img src="./assets/image/auth/sign-up.png" alt="login-pg">
</div>
`

export default class Register extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "form hidden grid-cols-2 items-center"
    this.setAttribute('id', 'register')
  }
}
