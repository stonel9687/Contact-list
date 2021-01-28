import React, { useContext } from 'react'
import { Context } from '../store/appContex'


const Lista = () => {
    const { store, actions } = useContext(Context)
    return (

        <div>
            <h5 className="card-title">Contact List</h5>
            
            {store.contacts.map((item) => {
                return (
                    <div className="card mb-3" style={{ width: '463px' }} >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src='' class="card-img" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex">
                                <div className="card-body">
                                    <p className="card-text">
                                        <ul className="list-group">
                                            <li className=" d-flex justify-content-between align-items-center">
                                                Nombre:{item.nombre}
                                            </li>
                                            <li className="d-flex justify-content-between align-items-center">
                                                Correo:{item.mail}
                                            </li>
                                            <li className=" d-flex justify-content-between align-items-center">
                                                Telefono:{item.phone}
                                            </li>
                                            <li className=" d-flex justify-content-between align-items-center">
                                                Direccion:{item.direction}
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <div className='btn-group-vertical'>
                                    <button type="button" className="btn" onClick={() => {actions.editContact(item)}} ><i class="fas fa-user-edit"></i></button>
                                    <button type="button" className="btn " onClick={() => {actions.deleteContact(item)}}  ><i class="fas fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Lista

