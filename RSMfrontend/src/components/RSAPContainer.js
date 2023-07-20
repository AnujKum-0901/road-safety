import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RSAPContainer.module.css";
const RSAPContainer = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className={styles.desktop1}>
      <div className={styles.rsap}>RSAP</div>
      <div className={styles.desktop1Child} />
      <div className={styles.desktop1Item} />
      <div className={styles.desktop1Inner} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-10.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop1Child1} />
      <div className={styles.desktop1Child2} />
      <div className={styles.desktop1Child3} />
      <div className={styles.desktop1Child4} />
      <div className={styles.desktop1Child5} />
      <div className={styles.desktop1Child6} />
      <div className={styles.desktop1Child7} />
      <div className={styles.desktop1Child8} />
      <div className={styles.desktop1Child9} />
      <div className={styles.desktop1Child10} />
      <div className={styles.desktop1Child11} />
      <div className={styles.desktop1Child12} />
      <div className={styles.desktop1Child13} />
      <div className={styles.desktop1Child14} />
      <div className={styles.desktop1Child15} />
      <div className={styles.desktop1Child16} />
      <div className={styles.refNo}>REF NO :</div>
      <div className={styles.date}>DATE :</div>
      <div className={styles.violatorName}>VIOLATOR NAME :</div>
      <div className={styles.typeOfVehicle}>TYPE OF VEHICLE :</div>
      <div className={styles.drivingLicenseNo}>DRIVING LICENSE NO :</div>
      <div className={styles.violatorName1}>VIOLATOR NAME :</div>
      <div className={styles.woNo}>W/O NO :</div>
      <div className={styles.time}>TIME :</div>
      <div className={styles.violatorPhNo}>VIOLATOR PH NO :</div>
      <div className={styles.vehicleRegNo}>VEHICLE REG NO :</div>
      <div className={styles.pnogpnospno}>P.NO/GP.NO/SP.NO :</div>
      <div className={styles.vendorCode}>VENDOR CODE :</div>
      <img className={styles.lineIcon} alt="" src="/line-11.svg" />
      <img
        className={styles.desktop1Child17}
        alt=""
        src="/rectangle-47@2x.png"
        onClick={onRectangleImageClick}
      />
    </div>
  );
};

export default RSAPContainer;
