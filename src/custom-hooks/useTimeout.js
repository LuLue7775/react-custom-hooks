import { useCallback, useEffect, useRef } from 'react'

export default function useTimeout(callback, delay) {
    const callbackRef = useRef(callback) //to avoid referential rerendering issue
    const timeoutRef = useRef()

    useEffect(() => {
        callbackRef.current = callback // to avoid reupdating timer when only callback changes. so we deal with callback and timeout function separately.
    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => { callbackRef.current() }, delay);
    }, [delay])
    
    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, []) 

    useEffect(() => { //so if any of [delay, set, clear] changes, we clearTimeout and restart it again
        set()
        return clear //this will only do once afer renewed
    }, [delay, set, clear])

    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set])

    return { reset, clear } // no need to return function if we dont clear or reset on the top level
}