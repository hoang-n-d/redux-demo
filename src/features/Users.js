import { createSlice } from "@reduxjs/toolkit";
import UserData from "../ListOfUsers";
export const userSlice = createSlice({
    name: "users",
    initialState: { value: UserData },
    reducers: {
        addUser: (state, action) => {
            // Write code for addUser function
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            // Write code for deleteUser fuction
            state.value = state.value.filter((user)=> user.id == action.payload.id);
        },
        updateMessage: (state, action) => {
            // Write code for updateUsername function
            state.value.map((user)=>{if(user.id === action.payload.id){
                user.message = action.payload.message;}
             });
           
        },
    },
});
export default userSlice.reducer;
export const { addUser, deleteUser, updateMessage } = userSlice.actions;
