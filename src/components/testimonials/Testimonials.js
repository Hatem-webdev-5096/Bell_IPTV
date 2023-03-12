import Carousel from "react-bootstrap/Carousel";
import styles from "./testimonials.module.css";
import SingleReview from "./singleReview";
import { useState } from "react";

const Testimonials = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setScreenWidth(screenWidth);
  });
  return (
    <div className={styles.container}>
      <Carousel indicators={false} controls={screenWidth <= 770 && false}>
        <Carousel.Item>
          <SingleReview
            name="Ali Almafrachi"
            imageUrl={require("./images/Ali Almafrachi.jpg")}
            review="It's one of the best services I've seen 10/10 🌟"
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleReview
            name="Muqdam Jubouri"
            imageUrl={require("./images/Muqdam Jubouri.jpg")}
            review="Excellent, 10/10"
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleReview
            name="Eman Almouna"
            imageUrl={require("./images/female.png")}
            review="% شكرا لكم علي الخدمه الممتازه 100 "
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleReview
            name="Samer Hamdan"
            imageUrl={require("./images/male.png")}
            review="Best service, 
            Quick servers,
            Extreme satisfaction"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
