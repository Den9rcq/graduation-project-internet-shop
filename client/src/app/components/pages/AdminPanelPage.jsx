import React from 'react'
import AdminForm from '../ui/AdminForm'
import TableProducts from '../ui/TableProducts'

const AdminPanelPage = () => {
    return (
        <div className='container mt-7'>
            <div className='row'>
                <div className='col l3 card'>
                    <h5 className='center mb-3'>Добавление товара</h5>
                    <AdminForm/>
                </div>
                <div className='col l9'>
                    <TableProducts/>
                </div>
            </div>
        </div>
    )
}

export default AdminPanelPage
