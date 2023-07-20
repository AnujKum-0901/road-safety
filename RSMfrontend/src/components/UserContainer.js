import styles from "./UserContainer.module.css";
const UserContainer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.vectorParent}>
        <img className={styles.instanceChild} alt="" src="/rectangle-78.svg" />
        <div className={styles.username}>Username</div>
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.instanceChild} alt="" src="/rectangle-78.svg" />
        <div className={styles.username}>Password</div>
      </div>
    </div>
  );
};

export default UserContainer;
