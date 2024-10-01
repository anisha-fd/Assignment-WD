import { createSlice } from "@reduxjs/toolkit";
import {users} from './users'


const userSlice = createSlice({
    name:"users",
    initialState:users,
    reducers:{
        addUser:(state,action)=>{
            // console.log(state);
            state.push(action.payload);
            
            
        },
        editUser:(state,action)=>{
            // console.log(state)
            const {id,name} = (action.payload)
            // console.log(name)
            let user = state.find((user)=>{return user.id == id});

            if(user)
            {
                user.name =name
            }
           
        }
    }
})

export const {addUser,editUser} = userSlice.actions
export default userSlice.reducer;