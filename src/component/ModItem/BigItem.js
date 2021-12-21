import React,{useState,useEffect} from 'react'
import {useSelector} from  'react-redux'
import {fetchPhoto,removePhoto} from '../../store/MobSlice'
import {useDispatch} from 'react-redux'
import { element } from 'prop-types'





const BigItem = ({id}) => {
    let photo = useSelector(state => state.photo)
    const dispatch = useDispatch()
    let comments = []
  
     const f=()=>{
        if(photo.arr.comments === undefined ){
          return comments[0] = ['No comments']
        }else if( photo.arr.comments.length === 0){
        return 'No comments'
      }else{
        return comments =[ photo.arr.comments[0].text,`${new Date(photo.arr.comments[0].date)}`]
      }
    }
     f()
     const [comment,setComment] =useState()
    
     const addComment =(e)=>{
       e.preventDefault()
       console.log(comment)
     }
     const handleInput =(e)=>{
       console.log(e.target.value)
      setComment(e.target.value)
     }
     

      const closePhoto=(target)=>{
        // dispatch(removePhoto())
        if(target.className=='overLay' ||target.className=='close' ){
          dispatch(removePhoto())
        }
      }
    if(photo.photo.length===0){
        return null
     }else {
    return (
        <div className='overLay' onClick={(e)=>closePhoto(e.target)} > 
        <div className='comment' >   
        <span className='close'>&times;</span> 
        <div className='asd'>
            <img className='BigItem' src={`https://picsum.photos/id/${photo.photo}/600/400`} ></img>
        </div>
        
        <div className='for_comment'>
        <span className='for_date'>{comments[1]}</span>
        <span className='textComment'>{comments[0]}</span>
        </div>

        <form className='container_Submit' onSubmit={addComment}>
        <input className='cont_Comment'/>
        <input className='cont_Comment'  onChange={handleInput}/>
        <input type='submit' className='button_Comment' value='добавить коментарий' />
        </form>
        </div>
        </div>
        
    )
      }
}
export default BigItem