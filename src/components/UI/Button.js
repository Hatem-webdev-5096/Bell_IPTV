import styles from "./Button.module.css";

const Button = (props) => {
return (
    <a className={`${styles[props.classNameOne]} ${styles[props.classNameTwo]}`} href={props.to}>
        {props.text}
    </a>
)

}


export default Button;