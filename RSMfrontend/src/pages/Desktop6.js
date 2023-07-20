import RSAPContainer from "../components/RSAPContainer";
import FileChooserContainer from "../components/FileChooserContainer";
import WorkspaceContainer from "../components/WorkspaceContainer";
import styles from "./Desktop6.module.css";
const Desktop6 = () => {
  return (
    <div className={styles.desktop6}>
      <RSAPContainer />
      <FileChooserContainer />
      <WorkspaceContainer />
    </div>
  );
};

export default Desktop6;
