import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 各コンテンツがブラウザ内に入ったタイミングでフェードインさせる
 export const FadeContent = ( {children} ) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
             threshold: [0.25],
            triggerOnce: true
        })
    
    const contentVariants = {
        hidden: {
            opacity:0,
            y : 20
            },
        visible: {
            opacity:1,
            y:0,
            transition: {
                duration:1
            }
        }
    }
    
    useEffect(()=>{
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [controls, inView]
    )
    
    return (
        <motion.div
            className="contentDiv" 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={contentVariants}
        >
        {children}
        </motion.div>
        )
 }