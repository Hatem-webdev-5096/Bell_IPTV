import styles from "./featureOne.module.css";
import { Banner } from "./Banner";
import { useState } from "react";


const Channels = (props) => {

  const [screenWidth, setWidth] = useState(window.screen.width);

  const imagesLG = [
    require("./images/bein.png"),
    require("./images/netflix.png"),
    require("./images/shahid-logo-final.png"),
    require("./images/AMC+_logo.png"),
    require("./images/bbc.png"),
    require("./images/disnep.jpeg"),
    require("./images/OSN.png"),
    require("./images/Sky_News_PRIMARY_RGB.webp"),
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  const imagesSM = [
    require("./images-small/bein.png"),
    require("./images-small/netflix.png"),
    require("./images-small/shahid-logo-final.png"),
    require("./images-small/AMC+_logo.png"),
    require("./images-small/bbc.png"),
    require("./images-small/disnep.jpg"),
    require("./images-small/OSN.png"),
    require("./images-small/Sky_News_PRIMARY_RGB.webp"),
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  })); 


  return (
    <div className={styles.featureOneContainer}>
      <h1 className={`display-2 ${styles.header}`}>
        All your favourite shows in one place<span>Live and On demand</span>{" "}
      </h1>
      <Banner images={screenWidth > 800? imagesLG :imagesSM } speed={22000} />
    </div>
  );
};

export default Channels;
