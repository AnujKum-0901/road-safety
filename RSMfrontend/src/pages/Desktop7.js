import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop7.module.css";
import { useDispatch } from "react-redux";
import { addAudit } from "../redux/apiCalls";
const Desktop7 = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);
  const [refId,setRefId]=useState() 
  const [location,setLocation]=useState()
  const [time,setTime]=useState()
  const [email,setEmail]=useState()
  const [auditOfficial,setAuditOfficial]=useState()
  const dispatch = useDispatch()

  const handleClick = (e)=>{
    e.preventDefault()
    console.log(email,refId,time,location,auditOfficial)
    addAudit(dispatch,{refId, time, location, email, auditOfficial})
    navigate("/desktop-1");
  };



  return (
    <div className={styles.desktop7}>
      <div className={styles.audit}>AUDIT</div>
      <div className={styles.desktop7Child} />
      <div className={styles.desktop7Item} />
      <div className={styles.desktop7Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop7Child1} />
      <div className={styles.desktop7Child2} />
      <div className={styles.refno}>REF.NO :</div>
      <div className={styles.date}>DATE :</div>
      <div className={styles.location}>LOCATION :</div>
      <div className={styles.mailTo}>MAIL TO :</div>
      <div className={styles.time}>TIME :</div>
      <div className={styles.auditDoneBy}>AUDIT DONE BY :</div>
      <input className={styles.desktop7Child4} onChange={(e)=>{setRefId(e.target.value);console.log(refId)}}/>
      <input className={styles.desktop7Child7} onChange={(e)=>{setLocation(e.target.value);console.log(location)}}/>
      <input className={styles.desktop7Child8} onChange={(e)=>{setEmail(e.target.value);console.log(email)}}/>
      <input className={styles.desktop7Child9} onChange={(e)=>{setTime(e.target.value);console.log(time)}}/>
      <input className={styles.desktop7Child5} onChange={(e)=>{setAuditOfficial(e.target.value);console.log(auditOfficial)}}/>
      <input className={styles.desktop7Child6} />
      <input className={styles.desktop7Child10} />
      <input className={styles.desktop7Child11} />
      <input className={styles.desktop7Child12} />
      <input className={styles.desktop7Child13} />
      <input className={styles.desktop7Child14} />
      <input className={styles.desktop7Child15} />
      <b className={styles.chooseFile}>Choose File</b>
      <b className={styles.chooseFile1}>Choose File</b>
      <b className={styles.chooseFile2}>Choose File</b>
      <b className={styles.chooseFile3}>Choose File</b>
      <b className={styles.chooseFile4}>Choose File</b>
      <b className={styles.chooseFile5}>Choose File</b>
      <b className={styles.noFileChoosen}>No File Choosen</b>
      <b className={styles.noFileChoosen1}>No File Choosen</b>
      <b className={styles.noFileChoosen2}>No File Choosen</b>
      <b className={styles.noFileChoosen3}>No File Choosen</b>
      <b className={styles.noFileChoosen4}>No File Choosen</b>
      <b className={styles.noFileChoosen5}>No File Choosen</b>
      <div className={styles.desktop7Child16} />
      <div className={styles.submit} onClick={handleClick}>SUBMIT</div>
      <img className={styles.lineIcon} alt="" src="/line-1.svg" />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-47@2x.png"
        onClick={onRectangleImageClick}
      />
    </div>
  );
};

export default Desktop7;
