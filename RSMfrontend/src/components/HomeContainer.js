import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/userRedux";
const HomeContainer = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);
  const dispatch = useDispatch()
  const onContactUsTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);
  const user = useSelector(state=>state.user.currentUser)
  const handleLogout=()=>{
    console.log("Logging out")
    dispatch(Logout())
  }
  return (
    <div className={styles.desktop1}>
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <div className={styles.contactUs} onClick={onContactUsTextClick}>
        Contact us
      </div>
      {user?<div className={styles.home}>
      {user.username}
      </div>:<div className={styles.home}>Home</div>}
      <div className={styles.desktop1Child} />
      <div className={styles.roadSafety}>
        <p className={styles.roadSafety1}>ROAD SAFETY</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.roadSafety1}>&nbsp;</p>
      </div>
      <img className={styles.desktop1Item} alt="" src="/rectangle-61@2x.png" />
      {user?<div className={styles.learnMore} onClick={handleLogout}>Logout</div>:<div className={styles.learnMore}>Learn more</div>}
      <div className={styles.tataSteel}>TATA STEEL</div>
      <div className={styles.desktop1Inner} />
      <div className={styles.weBelieveIn}>
        WE BELIEVE IN SAFETY FOR EVERYONE
      </div>
      <div className={styles.empoweringRoadSafetyContainer}>
        <p className={styles.empoweringRoadSafety}>
          Empowering road safety for Everyone,
        </p>
        <p className={styles.empoweringRoadSafety}>
          Ensure secure roads for all
        </p>
      </div>
    </div>
  );
};

export default HomeContainer;
