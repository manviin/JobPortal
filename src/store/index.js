import { configureStore } from "@reduxjs/toolkit";
import { setFilter , jobsReducer} from "./slices/jobsSlice";


const store = configureStore({
    reducer : {
        jobs : jobsReducer
    }
    
});

export {store , setFilter};