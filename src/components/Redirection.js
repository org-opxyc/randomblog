import React, {useState, useEffect} from 'react'
import getCookie from '../utils/getcookie'
import RedirectionInfo from '../components/redirection-info'

const COOKIE_NAME = '_redirect_to'
const SESSION_STORAGE_KEY = '_redirected'

export default function Redirection() {
    const [redir, setRedir] = useState(false)

    useEffect(()=>{
        const redirected = sessionStorage.getItem(SESSION_STORAGE_KEY)
        let redirect_to = getCookie(COOKIE_NAME)

        if (redirected === null && redirect_to !== '') {
            setRedir(true)
            let timer = setTimeout(() => {
                sessionStorage.setItem(SESSION_STORAGE_KEY, true)
                // document.cookie = COOKIE_NAME + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
                window.location.href = redirect_to
            }, 1000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [])

    return <>{redir ? <RedirectionInfo /> : null}</>
}
