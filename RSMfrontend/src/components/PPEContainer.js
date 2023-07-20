import styles from "./PPEContainer.module.css";
const PPEContainer = () => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src="/frame-71@2x.png" />
      <img className={styles.frameItem} alt="" src="/rectangle-21@2x.png" />
      <img className={styles.frameInner} alt="" src="/rectangle-31@2x.png" />
      <div className={styles.wearPpeAnd}>Wear PPE and Helmet</div>
      <div className={styles.maintainSpeedLimit}>Maintain Speed Limit</div>
      <div className={styles.wearSeatbeltWhile}>
        Wear Seatbelt While Driving
      </div>
      <img className={styles.lineIcon} alt="" src="/line-2.svg" />
    </div>
  );
};

export default PPEContainer;
