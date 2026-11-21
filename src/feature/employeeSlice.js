import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employeeslice",
  initialState: {
    employeeData: [],
  },
  reducers: {
    setEmployeeData: (state, action) => {
      state.employeeData.push(action.payload);
    },
    setRemoveEmployeeData:(state,action)=>{
       state.employeeData = state.employeeData.filter((user) => {
        return user.id !== action.payload;
      });
    },
    setUpdateEmployeeData:(state,action)=>{

    }
  },
});
export const { setEmployeeData,setRemoveEmployeeData,setUpdateEmployeeData } = employeeSlice.actions;
export default employeeSlice.reducer;
