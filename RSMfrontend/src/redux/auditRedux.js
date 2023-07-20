import {createSlice} from "@reduxjs/toolkit"

export const auditSlice = createSlice({
    name:"audit",
    initialState:{
        audit:null,
        isFetching: false,
        error: false,
    },
    reducers :{ 
        addAuditStart:(state)=>{
        state.isFetching = true;
        state.error = false;
    },
    addAuditSuccess:(state,action)=>{
        state.isFetching = false;
        state.products.push(action.payload)
    },
    addAuditFailure:(state)=>{
        state.isFetching = false;
        state.error = true;
    }
},
})

export const {
addAuditFailure,addAuditSuccess,addAuditStart
} = auditSlice.actions;


export default auditSlice.reducer;