import React from 'react'
import IconButton from '../template/icon-button'
import IconDeleteButton from '../template/icon-del-button'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconDeleteButton
                        onClick={() => props.handleRemove(todo)}>
                    </IconDeleteButton>

                </td>
            </tr>
        ))
        
    }
     return(
        <table className='table'>

            <thead>
                <tr>
                    <th> Descrição </th>
                    <th> Ações </th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}