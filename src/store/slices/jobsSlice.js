import { createSlice} from "@reduxjs/toolkit";
import jobs from "../../dummyData";

const jobsSlice = createSlice({
    name:"jobs",
    initialState :{
        listings: jobs,
        role:"",
        numberOfEmployees:"",
        experience:"",
        remote:"",
        minSalary:"",
        company:"",
         } 
     ,
       reducers:{
         setFilter (state, action)  {
            const { filter, value } = action.payload;
            state[filter] = value;
          },
    
        


            }
        });


      

    export const { setFilter} = jobsSlice.actions;
    export const jobsReducer= jobsSlice.reducer;