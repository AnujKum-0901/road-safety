import { useCallback } from "react";
import styles from "./FAQContainer.module.css";
const FAQContainer = () => {
  const onFrameImage2Click = useCallback(() => {
    window.open("facebook.com");
  }, []);

  const onFrameIconClick = useCallback(() => {
    window.open("linkedin.com");
  }, []);

  const onRectangleIconClick = useCallback(() => {
    window.open("twitter.com");
  }, []);

  const onFrameIcon1Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/search/road+safety+office+tata+steel+kalinganagar/@20.977388,86.0108624,14.61z?entry=ttu"
    );
  }, []);

  return (
    <div className={styles.desktop3}>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/frame-7@2x.png"
          onClick={onFrameImage2Click}
        />
        <img
          className={styles.frameItem}
          alt=""
          src="/frame-8@2x.png"
          onClick={onFrameIconClick}
        />
        <img
          className={styles.frameInner}
          alt=""
          src="/rectangle-1@2x.png"
          onClick={onRectangleIconClick}
        />
        <div className={styles.copyrights2023}>
          Copyrights © 2023 All rights reserved
        </div>
        <img
          className={styles.frameIcon}
          alt=""
          src="/frame-9@2x.png"
          onClick={onFrameIcon1Click}
        />
        <div className={styles.x2g4g3cKalingaNagar}>
          X2G4+G3C, Kalinga Nagar, Gobara Ghati, Odisha 755026
        </div>
        <div className={styles.frameDiv} />
        <img className={styles.frameChild1} alt="" src="/frame-11@2x.png" />
        <div className={styles.div}>+223 4455 88899</div>
      </div>
      <div className={styles.desktop3Child} />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image2Icon1} alt="" src="/image-21@2x.png" />
      <div className={styles.desktop3Item} />
      <div className={styles.desktop3Inner} />
      <div className={styles.rectangleDiv} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-66.svg" />
      <b className={styles.mostFrequentlyAsked}>
        Most Frequently asked questions
      </b>
      <b className={styles.whatIsThe}>
        What is the process for obtaining an oversize/overweight permit?
      </b>
      <b className={styles.whatAreThe}>
        What are the key elements considered during a road safety audit, and how
        are the findings addressed?
      </b>
      <b className={styles.areThereAny}>
        Are there any specific guidelines or checklists available for conducting
        internal vehicle checks?
      </b>
      <b className={styles.whatResourcesOr}>
        What resources or training materials are available to educate
        individuals about road safety best practices?
      </b>
    </div>
  );
};

export default FAQContainer;
