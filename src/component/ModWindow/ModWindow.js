import React from 'react'
import './modWindow.css'
import ModItem from '../ModItem/ModItem'

 const ModWindow = () => {
    let id = [237,238,239,240,241,242]
    return (
        <div className='window_photo'>
            <div className='container'>
            <div className='head_style'>
            <div className='logo'>Test app</div>
            <div className='fram'></div>
            </div>
            </div>
            <div className='Gallery'>
            <div className='row_1'>
          {
              id.map(id=>
               <ModItem id={id} key={id}/>
              )
          }
           </div>
           </div>
        </div>
    )
}
export default ModWindow