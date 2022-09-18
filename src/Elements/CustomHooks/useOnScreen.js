import { useState, useRef, useEffect } from "react"
const useOnScreen = (callback, intersectionRatio) => {
    const elementRef = useRef(null)
    const options = {
        root: null,
        rootmargin:"0px",
        threshold: intersectionRatio
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        console.log(elementRef.current)
        if(elementRef.current) observer.observe(elementRef.current)
        return () => {
            if(elementRef.current) observer.unobserve(elementRef.current)
        }
    },[elementRef])

    return [elementRef]
}

export default useOnScreen