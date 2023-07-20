import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop5.module.css";
const Desktop5 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  return (
    <div className={styles.desktop5}>
      <img
        className={styles.desktop5Child}
        alt=""
        src="/rectangle-15.svg"
        onClick={onRectangleClick}
      />
      <b className={styles.rsap}>RSAP</b>
      <div className={styles.back}>BACK</div>
      <img
        className={styles.desktop5Item}
        alt=""
        src="/rectangle-48@2x.png"
        onClick={onRectangleImageClick}
      />
      <div className={styles.desktop5Inner} />
      <div className={styles.internalVehicleCheckContainer}>
        <p className={styles.internal}>{`Internal `}</p>
        <p className={styles.internal}>{`Vehicle `}</p>
        <p className={styles.internal}>Check</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.checklistForFourContainer}>
        <p className={styles.internal}>Checklist</p>
        <p className={styles.internal}>for four wheelers</p>
      </div>
      <div className={styles.desktop5Child1} onClick={onRectangle3Click} />
      <div className={styles.audit}>Audit</div>
    </div>
  );
};

export default Desktop5;
