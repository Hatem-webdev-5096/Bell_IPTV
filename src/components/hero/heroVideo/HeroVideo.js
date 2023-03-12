import styles from "./heroVideo.module.css";

import video from "../../../video/2.mp4";

const HeroVideo = (props) => {
  return (

        <video autoPlay muted controls={true} loop>
          <source src={video} type="video/mp4" />
        </video>
   

  );
};

export default HeroVideo;
