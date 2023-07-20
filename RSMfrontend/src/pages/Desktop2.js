import { useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop2.module.css";
import styles2 from "../components/UserContainer.module.css";
import {useDispatch, useSelector} from 'react-redux'
import {login} from "../redux/apiCalls"

const Desktop2 = () => {
  const navigate = useNavigate();

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const dispatch = useDispatch()

  const onFrameButtonClick = (e) => {
    e.preventDefault()
    console.log(username,password)
    login(dispatch,{username,password})
    navigate("/desktop-1");
  };

  const handleChange=(e)=>{
      console.log(e.target.value)
      setPassword(e.target.value)
      console.log(password)
  }

  return (
    <div className={styles.desktop2}>
      <div className={styles.desktop2Child} />
      <div className={styles2.rectangleParent}>
        <div className={styles2.frameChild} />
        <div className={styles2.vectorParent}>
          <img
            className={styles2.instanceChild}
            alt=""
            src="/rectangle-78.svg"
          />
          <input className={styles2.username} placeholder="Username" onChange={(e)=>{setUsername(e.target.value);console.log(username)}}/>
        </div>
        <div className={styles2.vectorGroup}>
          <img
            className={styles2.instanceChild}
            alt=""
            src="/rectangle-78.svg"
          />
          <input placeholder="Password" className={styles2.username} type="password" onChange={handleChange}/>
        </div>
      </div>
      <button className={styles.logInWrapper} onClick={onFrameButtonClick}>
        <div className={styles.logIn}>Log In</div>
      </button>
      <div className={styles.logIn1}>Log In</div>
      <div className={styles.iForgotMy}>
        I forgot my password Click Here to reset
      </div>
      <div className={styles.weAlsoMake}># WE ALSO MAKE TOMORROW</div>
      <div className={styles.tataSteel}>TATA STEEL</div>
    </div>
  );
};

export default Desktop2;
