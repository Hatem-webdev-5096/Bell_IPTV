import styles from "./priceCard.module.css";

const PriceCard = (props) => {
  return (
    <div className={`container-fluid ${styles.cardContainer}`}>
      <p className={styles.period}>{props.period}</p>
      <p className={styles.price}>
        <sup>$</sup>
        {props.price}
      </p>
      <a
        type="button"
        className={`${styles.subscribe}`}
        href="https://wa.me/17789010266"
      >
        subscribe
      </a>
    </div>
  );
};

export default PriceCard;
