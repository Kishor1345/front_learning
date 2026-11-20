import { configureStore } from "@reduxjs/toolkit";
import employeeslice from "../feature/employeeSlice"
export const store = configureStore({
  reducer:{
    employee:employeeslice
  }
})