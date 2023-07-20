import RoadSafetyContainer from "../components/RoadSafetyContainer";
import FAQContainer from "../components/FAQContainer";
import HomeContainer from "../components/HomeContainer";
import PPEContainer from "../components/PPEContainer";
import styles from "./Desktop1.module.css";
const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <RoadSafetyContainer />
      <FAQContainer />
      <div className={styles.desktop1Child} />
      <HomeContainer />
      <PPEContainer />
      <div className={styles.desktop1Item} />
      <div className={styles.newsAndAlerts}>{`NEWS AND ALERTS `}</div>
      <img className={styles.desktop1Inner} alt="" src="/rectangle-67@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-68@2x.png" />
      <img
        className={styles.desktop1Child1}
        alt=""
        src="/rectangle-68@2x.png"
      />
      <img
        className={styles.desktop1Child2}
        alt=""
        src="/rectangle-68@2x.png"
      />
      <img
        className={styles.desktop1Child3}
        alt=""
        src="/rectangle-68@2x.png"
      />
      <div className={styles.tataSteelKalinganagar}>
        Tata Steel Kalinganagar Launches Road Safety Awareness Campaign
      </div>
      <div className={styles.employeeTrainingProgram}>
        Employee Training Program on Defensive Driving Successfully Conducted
      </div>
      <div className={styles.tataSteelKalinganagar1}>
        Tata Steel Kalinganagar Installs High-Tech Traffic Monitoring System
      </div>
      <div className={styles.roadSafetyWeek}>
        Road Safety Week: Tata Steel Kalinganagar Organizes Awareness Campaigns
      </div>
      <img
        className={styles.desktop1Child4}
        alt=""
        src="/rectangle-72@2x.png"
      />
    </div>
  );
};

export default Desktop1;
