import { configureStore } from "@reduxjs/toolkit";
import {x} from './Reduser'


export const z = configureStore({
    reducer:{
        xyz:x//12
    }
})