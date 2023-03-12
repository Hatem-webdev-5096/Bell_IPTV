import styles from "./multiplatform.module.css";

import { useState } from "react";

const Multiplatform = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={`display-2 ${styles.header}`}>Multiplatform</h1>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            With Bell-IPTV services, you can watch your favorite TV shows and
            movies in high-definition from <span>anywhere</span>, <span>anytime.</span>
          </p>
          <p>
            Our services provide you with endless entertainment options,
            allowing you to <span>customize your viewing experience.</span>
          </p>
        </div>
        <img src={require("./images/multi platform.png")} />
      </div>
    </div>
  );
};

export default Multiplatform;
