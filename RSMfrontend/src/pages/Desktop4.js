import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop4.module.css";
const Desktop4 = () => {
  const navigate = useNavigate();

  const onEnterYourMessageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMessageTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleIconClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className={styles.desktop4}>
      <div className={styles.desktop4Inner}>
        <div className={styles.frameChild} data-scroll-to="rectangle" />
      </div>
      <div className={styles.desktop4Child} />
      <div className={styles.desktop4Item} />
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop4Child1} />
      <b className={styles.address}>Address</b>
      <b className={styles.name}>Name</b>
      <b className={styles.name}>Name</b>
      <b className={styles.date}>Date</b>
      <b className={styles.phoneNo}>Phone No</b>
      <div className={styles.enterYourPhone}>
        Enter your phone no.(Eg-9112366699)
      </div>
      <div className={styles.enterYourName}>Enter your name here</div>
      <div className={styles.enterYourAddress}>Enter your Address here</div>
      <div className={styles.mmddyyyy}>mm/dd/yyyy</div>
      <div className={styles.desktop4Child2} data-scroll-to="rectangle1" />
      <div className={styles.desktop4Child3} />
      <div
        className={styles.enterYourMessage}
        onClick={onEnterYourMessageClick}
      >
        Enter your message here
      </div>
      <div className={styles.contactUs}>Contact Us</div>
      <b className={styles.message} onClick={onMessageTextClick}>
        Message
      </b>
      <b className={styles.submit}>Submit</b>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-51@2x.png"
        onClick={onRectangleIconClick}
      />
      <div className={styles.back}>BACK</div>
    </div>
  );
};

export default Desktop4;
