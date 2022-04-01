import { useState, useEffect } from "react"
import useEventListener from './useEventListener'

export default function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = useState(false)
    const [mediaQueryList, setMediaQueryList] = useState(null)

    useEffect(() => {
        const list = window.matchMedia(mediaQuery) // mediaQuery is a string
        setMediaQueryList(list)

        setIsMatch(list.matches) // regExp 
    }, [mediaQuery])

    return isMatch
}

