const getCookie = (name) => {
    // Get name followed by anything except a semicolon
    var cookiestring = RegExp(name + '=[^;]+').exec(document.cookie)
    // Return everything after the equal sign, or an empty string if the cookie name not found
    return decodeURIComponent(
      !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, '') : ''
    )
}

module.exports = getCookie