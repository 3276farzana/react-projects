import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice'

const store=configureStore({
    reducer:{
        auth:authReducer,
        // add post:postslice here.
    }
});
export default store;