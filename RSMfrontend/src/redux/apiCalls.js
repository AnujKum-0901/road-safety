import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux"
import { addAuditStart,addAuditSuccess,addAuditFailure } from "./auditRedux";

export const login = async(dispatch,user)=>{
    dispatch(loginStart());
    console.log("apiCalls")
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }
    catch(e){
        dispatch(loginFailure())
    }
} 

export const register = async(user,dispatch)=>{
    dispatch(registerStart());
    console.log("apiCall Register")
    try{
        const res = await publicRequest.post("/auth/register",user)
        dispatch(registerSuccess(res.data))
    }
    catch(e){
        dispatch(registerFailure())
    }
} 

// export const pay = async(user,dispatch)=>{
//     dispatch(payStart());
//     console.log("apiCall pay")
//     try{
//         const res = await publicRequest.post("/auth/pay",user)
//         dispatch(paySuccess(res.data))
//     }
//     catch(e){
//         dispatch(payFailure())
//     }
// } 

export const addAudit = async(dispatch,Audit)=>{
    dispatch(addAuditStart());
    console.log("hit")
    console.log("apiCalls")
    try{
        const res = await publicRequest.post(`/user/audit`,Audit)
        dispatch(addAuditSuccess(res.data))
    }
    catch(e){
        console.log(e)
        dispatch(addAuditFailure())
    }
} 