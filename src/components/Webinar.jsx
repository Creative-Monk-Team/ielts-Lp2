import styles from "../styles/Webinar.module.css";
import Button from "./Button";

const Webinar = () => {
  return (
    <>
      <div className={styles.containerParent}>
        <div className={styles.containerInside}>
          <h1>Only 50 Seats Left!</h1>  
          <p>The webinar seats are filling fast! Don’t miss out on this limited-time ₹99 offer.</p>
          <Button text={"Register Now"}/>
        </div>
      </div>
    </>
  );
};

export default Webinar;
