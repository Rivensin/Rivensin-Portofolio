import { useEffect } from "react";
import { useLocation } from "react-router-dom";;

function UseScrollTop() {
  const {pathname, hash} = useLocation()
  
  useEffect(() => {
    setTimeout(() => {
      if(hash){
        const getHash = document.querySelector(hash)

        if(getHash){
          getHash.scrollIntoView({behavior: 'smooth'})
        }
      } else {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }
    },100)
  },[pathname,hash])
}

export default UseScrollTop