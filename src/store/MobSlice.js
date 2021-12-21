import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchPhoto = createAsyncThunk(
    'photo/fetchPhoto',
    async function(id,{rejectWithValue}){
  try {
    const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
    if(!response.ok){
        throw new Error('Server Error')
    }
    const data = await response.json()
    return data
  }catch(error){
    return rejectWithValue (error.message)
  }
    }
)

const MobSlice = createSlice({
    name: 'photo',
    initialState:{
        photo:[],
        arr:[],
        status:null,
        error:null
    },
    reducers: {
        setPhoto(state,action){
            state.photo[0]= action.payload
        },
        removePhoto(state,action){
            state.photo = [];
        }
    },
    extraReducers: {
        [fetchPhoto.pending]: (state) => {
           state.status = 'loading';
           state.error = null ;
        },
        [fetchPhoto.fulfilled]:(state,action) => {
           state.status = 'resolved';
           state.arr = action.payload;
        },
        [fetchPhoto.rejected]:(state,action) =>{},
    },
})

export const {setPhoto,removePhoto} = MobSlice.actions

export default MobSlice.reducer