import React, {useState,useEffect} from 'react'
import BigItem from './BigItem'
import {setPhoto,fetchPhoto,removePhoto} from '../../store/MobSlice'
// import {store} from '../../store'
import {useDispatch} from 'react-redux'



const ModItem = ({id}) => {
    const dispatch = useDispatch() 
    const show =(qwe)=> {
      // console.log(dispatch(fetchPhoto(qwe)))
      dispatch(fetchPhoto(qwe))
      dispatch(setPhoto(qwe))
    }
   
    
    return (
      <>
        <div>
            <img className='rectangle' onClick={(e)=>show(e.target.id)} src={`https://picsum.photos/id/${id}/300/200`} id={id}/>
      </div>
       <BigItem />
       </>
    )
}
export default ModItem
