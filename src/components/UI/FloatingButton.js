import styles from "./FloatingButton.module.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState } from "react";

const FLoatingButton = (props) => {
    const[scrollTop, setScrollTop] = useState(document.body.scrollTop);

    window.addEventListener("scroll", (e)=> {
        setScrollTop(document.documentElement.scrollTop);
        
    })

    const backToTop = (e) => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    
    if (scrollTop > 20) {
        return (
            <button type="button" id={styles["btn-back-to-top"]} className={styles["btn-back-to-top"]} onClick={backToTop} >
            <ArrowUpwardIcon />
          </button>
        )
    } else {
        return;
    }


}

export default FLoatingButton;