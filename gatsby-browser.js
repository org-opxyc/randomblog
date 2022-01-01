// import getCookie from "./src/utils/getcookie"

// const COOKIE_NAME = "_redirect_to"
// const SESSION_STORAGE_KEY = "_redirected"

// export const onClientEntry = () => {
//   window.onload = () => {
//     const redirected = sessionStorage.getItem(SESSION_STORAGE_KEY)
//     let redirect_to = getCookie(COOKIE_NAME)
//     if(redirected === null && redirect_to !== '') {
//         sessionStorage.setItem(SESSION_STORAGE_KEY, true)
//         document.cookie = COOKIE_NAME +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//         window.location = redirect_to
//     }
//   }
// }