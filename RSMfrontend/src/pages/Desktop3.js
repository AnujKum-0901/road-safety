import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop3.module.css";
const Desktop3 = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className={styles.desktop3}>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.tataSteelKalinganagarContainer}>
        <p className={styles.tataSteelKalinganagar}>
          Tata Steel Kalinganagar is a leading integrated steel plant in India.
          We are committed to providing a safe and healthy workplace for our
          employees, contractors, and visitors. Road safety is a top priority
          for us, and we are constantly working to improve our road safety
          performance.
        </p>
        <p className={styles.tataSteelKalinganagar}>
          Our road safety initiatives include
        </p>
        <p className={styles.tataSteelKalinganagar}>&nbsp;</p>
        <p className={styles.tataSteelKalinganagar}>
          We are committed to making our roads safer for everyone. We invite you
          to learn more about our road safety initiatives and to get involved.
        </p>
        <p className={styles.tataSteelKalinganagar}>
          Thank you for your interest in Tata Steel Kalinganagar's road safety
          program.
        </p>
      </div>
      <div className={styles.desktop3Child} />
      <img
        className={styles.desktop3Item}
        alt=""
        src="/rectangle-76@2x.png"
        onClick={onRectangleImageClick}
      />
      <div className={styles.desktop3Inner} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-73@2x.png" />
    </div>
  );
};

export default Desktop3;
