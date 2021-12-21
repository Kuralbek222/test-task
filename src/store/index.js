import {configureStore} from '@reduxjs/toolkit'
import MobSlice from './MobSlice'
export default configureStore({
    reducer:{
        photo:MobSlice,
    }
})