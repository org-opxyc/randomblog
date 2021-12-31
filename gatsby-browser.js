const getCookie = (name) => {
  // Get name followed by anything except a semicolon
  var cookiestring = RegExp(name + '=[^;]+').exec(document.cookie)
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(
    !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, '') : ''
  )
}

const COOKIE_NAME = "_redirect_to"
const SESSION_STORAGE_KEY = "_redirected"

export const onClientEntry = () => {
  window.onload = () => {
    console.log("---------------------INSIDE ONLOAD-----------------------")
    const redirected = sessionStorage.getItem(SESSION_STORAGE_KEY)
    let redirect_to = getCookie(COOKIE_NAME)
    if(redirected === null && redirect_to !== '') {
        sessionStorage.setItem(SESSION_STORAGE_KEY, true)
        document.cookie = COOKIE_NAME +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location = redirect_to
    } else {
        console.log("not redirecting since", redirected ? "already redirected" : "cookie is not set")
    }
  }
}