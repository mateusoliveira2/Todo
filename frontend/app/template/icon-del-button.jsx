import React from 'react'

export default props => { 
    if(props.hide){
        return null
    }else{
        return (
        <button className='button'
            onClick={props.onClick}> DEL 
            
         </button>)
    }
}
