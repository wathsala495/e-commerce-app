import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState={
     user:{
         name:'default'
     }
}

const userSlice=createSlice({
    name:"useSlice",
    initialState,
    reducers:{
    adduser:(state,action)=>{
   state.user=action.payload
    },
    removeUser:(state,action)=>{
     state.user={}
    }}
})

export const {adduser,removeUser}=userSlice.actions
export const userSeletor=createSelector([(store)=>store.user.user],(user)=>user)

export default userSlice.reducer

