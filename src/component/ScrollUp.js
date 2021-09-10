import React, { useEffect, useState } from "react";
import {useWindowScroll} from "react-use"
const ScrollUp =() =>{
    const { y : pageYOffset } = useWindowScroll();
    const [visible, setVisible ] = useState(false);

    useEffect(() => {
        if(pageYOffset> 600) {
            setVisible(true)
        }else{
            setVisible(false)
        }
    }, [pageYOffset]);

    const scrollToTop=() =>window.scrollTo({top:0, behavior:"smooth"})
     
    if(!visible){
        return false;
    }
    return (
        <div className="scrollup" onClick={scrollToTop}>
            <i id="chevron"className="icon fas fa-chevron-up"></i>
        </div>
    );
};

export default ScrollUp