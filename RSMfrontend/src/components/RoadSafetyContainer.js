import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RoadSafetyContainer.module.css";
const RoadSafetyContainer = () => {
  const navigate = useNavigate();

  const onFrameContainer5Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.roadSafetyDepartmentWrapper}>
            <b className={styles.roadSafetyDepartment}>
              Road safety department
            </b>
          </div>
          <div className={styles.roadSafetyDepartmentContainer}>
            <b className={styles.roadSafetyDepartment1}>
              Road Safety Department
            </b>
          </div>
          <div className={styles.roadSafetyDepartmentFrame}>
            <b className={styles.roadSafetyDepartment}>
              Road Safety Department
            </b>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <b className={styles.learnMore}>Permits</b>
      </div>
      <img className={styles.desktop1Child} alt="" src="/rectangle-2.svg" />
      <img className={styles.desktop1Item} alt="" src="/frame-5@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-3@2x.png" />
      <div className={styles.roadSafetyManagement}>
        Road safety management can help to reduce the number of road accidents
        by identifying and addressing the most common causes of accidents
      </div>
      <div
        className={styles.roadSafetyManagementWrapper}
        onClick={onFrameContainer5Click}
      >
        <b className={styles.roadSafetyManagement1}>Road Safety Management</b>
      </div>
      <b className={styles.permitsAreAn}>
        Permits are an important part of road safety because they help to ensure
        that drivers are qualified to operate a vehicle and that the vehicle is
        in safe condition
      </b>
      <img className={styles.desktop1Child1} alt="" src="/rectangle-4.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop1Child2} />
      <div className={styles.desktop1Child3} />
      <img className={styles.desktop1Child4} alt="" src="/rectangle-9@2x.png" />
      <div className={styles.totalAppliedPermitsContainer}>
        <p className={styles.totalAppliedPermits}>Total applied permits</p>
        <p className={styles.totalAppliedPermits}> 910</p>
      </div>
      <img
        className={styles.desktop1Child5}
        alt=""
        src="/rectangle-101@2x.png"
      />
      <img className={styles.frameIcon} alt="" src="/frame-3@2x.png" />
      <div className={styles.totalApprovedPermitsContainer}>
        <p className={styles.totalAppliedPermits}> Total Approved Permits</p>
        <p className={styles.totalAppliedPermits}> 860</p>
      </div>
      <div className={styles.totalPendingPermitsContainer}>
        <p className={styles.totalAppliedPermits}> Total pending permits</p>
        <p className={styles.totalAppliedPermits}> 50</p>
      </div>
    </div>
  );
};

export default RoadSafetyContainer;
