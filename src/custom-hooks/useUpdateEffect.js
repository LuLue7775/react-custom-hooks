import { useEffect, useRef } from "react"

export default function useUpdateEffect( callback, dependencies ) {
    const isFirstRenderRef = useRef(true)

    useEffect(() => {
        if(isFirstRenderRef.current) {
            isFirstRenderRef.current = false;
            return
        }
        return callback()
    }, [...dependencies])

}