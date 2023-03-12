import styles from "./footer.module.css";
import SentimentSatisfiedAltSharpIcon from "@mui/icons-material/SentimentSatisfiedAltSharp";

const Footer = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.try}>
          <p className={styles.CTA}>Try Bell-IPTV today</p>
          <a
            className={`btn ${styles.tryNowBTN}`}
            href="https://wa.me/17789010266"
          >
            Let's have fun <SentimentSatisfiedAltSharpIcon />
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <img className={styles.footerLogo} src={require("./logo (1).png")} />
          <p className={styles.footerText}>
            Bell-IPTV <br /> All rights reserved. 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
