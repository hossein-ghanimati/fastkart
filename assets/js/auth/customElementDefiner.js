import Login from "../../components/auth/login.js"
import Register from "../../components/auth/register.js"
import ForgotPassword from "../../components/auth/forgot-password.js"

customElements.define('login-form', Login)
customElements.define('register-form', Register)
customElements.define('forgot-password', ForgotPassword)