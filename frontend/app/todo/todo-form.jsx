import React from 'react'
import IconButton from '../template/icon-button'

export default props => (
    <div id='todoForm'>
        <input className='description' 
            placeholder='Adicione uma tarefa'
            onChange={props.handleChange}
            value = {props.description}></input>
        <IconButton 
            onClick={props.handleAdd}
            function = 'ADD'>
        </IconButton>
    </div>

)