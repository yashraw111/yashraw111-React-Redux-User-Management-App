import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState ={
    userList:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log("state",state);
            console.log("action",action);
state.userList.push(action.payload)
        },
        DeleteUser:(state,action)=>{
            console.log(action);
            const{payload:id} =action
            if(confirm("do you want to delete?")){
                const newData = state.userList.filter((user)=>{
                    return user.id !== id
                })
                state.userList = newData
            }
        },
        UpdateUser:(state,action)=>{
            const {id} =action.payload

            const indexNo=state.userList.findIndex((user)=>{
                return user.id == id
            })

        if(indexNo != -1){
            state.userList[indexNo]=action.payload
        }

        }
        
    }
})




export default userSlice.reducer
export const {addUser,DeleteUser,UpdateUser} = userSlice.actions
