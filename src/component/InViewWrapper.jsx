import { motion, useInView } from 'motion/react'
import React, {useRef} from 'react'

function InViewWrapper({children, once=false, className= ''}) {
  const ref= useRef(null)
  const isInView = useInView(ref,{margin:'-100px', once: once })
  return (
    <motion.div ref={ref} 
                initial={{opacity: 0, y:30}}
                animate={isInView ? {opacity: 1,y:0} : {}}
                transition={{duration: 0.8, ease: 'easeOut'}}
                className={className}>
      {children}
    </motion.div>
  )
}

export default InViewWrapper