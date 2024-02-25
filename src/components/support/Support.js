import styles from "./support.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Support = (props) => {
  // return (
  //   <div id="support" className={styles.container}>
  //     <div className={styles.left}>
  //       <h1 className={`display-2 ${styles.header}`}>Need help?</h1>
  //       <p className={styles.text}>
  //         Our team is here to help you every step of the way, so you can start
  //         watching your favorite shows and movies in no time. <br />

  //       </p>
  //       <div className={styles.buttons}>
  //         <a type="button" className={styles.whatsapp} href="https://wa.me/17789010266">
  //           <WhatsAppIcon /> whatsapp{" "}
  //         </a>
  //         <a
  //           type="button"
  //           className={styles.callUs}
  //           href="tel:+1(778) 901-0266"
  //         >
  //           <LocalPhoneIcon /> call us
  //         </a>
  //       </div>
  //     </div>
  //     <img src={require("./images/support.png")} />
  //   </div>
  // );
  return (
    <div id="support" className={styles.containerNew}>
      <div className={styles.contentNew}>
        <h1 className={`display-2 ${styles.headerNew}`}>Need help?</h1>
        <p className={styles.textNew}>
          <span>
            Our team is here to help you every step of the way, so you can start
            watching your favorite shows and movies in no time.{" "}
          </span>{" "}
          <br />
          <br />
          <br />
          Phone no:+1(778) 901-0266
        </p>
        <div className={styles.buttonsNew}>
          <a
            type="button"
            className={styles.whatsapp}
            href="https://wa.me/9495453111"
          >
            <WhatsAppIcon /> whatsapp{" "}
          </a>
          <a
            type="button"
            className={styles.callUs}
            href="tel:+1(949) 545-3111"
          >
            <LocalPhoneIcon /> call us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
