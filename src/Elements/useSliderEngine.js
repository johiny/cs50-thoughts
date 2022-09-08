import React, { useEffect } from "react";
import { useAnimate } from 'react-simple-animate';
import { useState } from "react";

const useSliderEngine = () => {
    const goOutLeft = useAnimate({
		start:{
			transform: "translateX(0) scaleX(1) scaleY(1)",
			transformOrigin: "50% 50%",
			filter: "blur(0)",
    		opacity: "1"
		},
		end: {
			transform: "translateX(-100vw) scaleX(2) scaleY(0.2)",
			transformOrigin: "100% 50%",
			filter: "blur(40px)",
    		opacity: "0"
		},
		duration: 0.6,
		easeType: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        onComplete: () => {
            goInRight.play(true)
        }
	})
    const goInLeft = useAnimate({
		start:{
			transform: "translateX(-100vw) scaleX(2.5) scaleY(0.2)",
			transformOrigin: "100% 50%",
			filter: "blur(40px)",
    		opacity: "0"
		},
		end: {
			transform: "translateX(0) scaleX(1) scaleY(1)",
			transformOrigin: "50% 50%",
			filter: "blur(0)",
    		opacity: "1"
		},
		duration: 0.6,
		easeType: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
	})
    const goOutRight = useAnimate({
		start:{
			transform: "translateX(0) scaleX(1) scaleY(1)",
			transformOrigin: "50% 50%",
			filter: "blur(0)",
    		opacity: "1"
		},
		end: {
			transform: "translateX(100vw) scaleX(2) scaleY(0.2)",
			transformOrigin: "100% 50%",
			filter: "blur(40px)",
    		opacity: "0"
		},
		duration: 0.6,
		easeType: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
            onComplete: () => {
                goInLeft.play(true)
            }
	})
    const goInRight = useAnimate({
		start:{
			transform: "translateX(100vw) scaleX(2.5) scaleY(0.2)",
			transformOrigin: "100% 50%",
			filter: "blur(40px)",
    		opacity: "0"
		},
		end: {
			transform: "translateX(0) scaleX(1) scaleY(1)",
			transformOrigin: "50% 50%",
			filter: "blur(0)",
    		opacity: "1"
		},
		duration: 0.6,
		easeType: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
	})
    const ArrowHandler = (direction) => {
        if(direction === 'left'){
            goOutRight.play(true)
        }
        else{
            goOutLeft.play(true)
        }
    }

    return {styles: [goOutLeft.style, goInLeft.style, goOutRight.style, goInRight.style], ArrowHandler}
}

export {useSliderEngine}