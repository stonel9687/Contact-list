import React, { useState } from 'react'


const Lista = () => {
    return (
        <>
            <div>
                <h5 className="card-title">Contact List</h5>

                <div className="card mb-3" style={{ width: '463px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src='' class="card-img" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body">
                                <p className="card-text">
                                    <ul className="list-group">
                                        <li className=" d-flex justify-content-between align-items-center">
                                            Nombre:
                                                </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            Correo:
                                                </li>
                                        <li className=" d-flex justify-content-between align-items-center">
                                            Telefono:
                                                </li>
                                        <li className=" d-flex justify-content-between align-items-center">
                                            Direccion:
                                                </li>
                                    </ul>
                                </p>
                            </div>
                            <div className='btn-group-vertical'>
                                <button type="button" className="btn"  ><i class="fas fa-user-edit"></i></button>
                                <button type="button" className="btn " ><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lista

