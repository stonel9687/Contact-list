import React, { useState } from 'react'

const Contact3 = () => {

    return (
        <>
            <section className='d-flex container'>
                <div className='w-50 container'>
                    <form className="form-horizontal" role="form">
                        <div>
                            <div className='input-add container'>
                                <div className=' container border border-secondary'>
                                    <div className='text-align-center'>
                                        <h4>Add New Contact</h4>
                                    </div>
                                    <form >
                                        <label for="inputPassword" className="col-lg-2 control-label">Nombre Completo</label>
                                        <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username"  />
                                        <label for="inputPassword" className="col-lg-2 control-label">Email</label>
                                        <input required type="email" className="form-control " placeholder="Tarea" aria-label="Recipient's username" />
                                        <label for="inputPassword" className="col-lg-2 control-label">Telefono</label>
                                        <input required type="number" className="form-control " placeholder="Tarea" aria-label="Recipient's username"  />
                                        <label for="inputPassword" className="col-lg-2 control-label">Direccion</label>
                                        <input required type="text" className="form-control " placeholder="Tarea" aria-label="Recipient's username"  />
                                        <div className='m-top'>
                                            <button type='submit' className="btn btn-primary btn-lg btn-block">Agregar</button>
                                        </div>
                                    </form>
                                    <hr></hr>
                                    <div className="card mb-3" style={{ width: '463px' }}>
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src='' class="card-img" alt="..." />
                                            </div>
                                            <div className="col-md-8 d-flex">
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">
                                                        <ul className="list-group">
                                                            <li className=" d-flex justify-content-between align-items-center">
                                                                Nombre:
                                                            </li>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                tarea:
                                                            </li>
                                                            <li className=" d-flex justify-content-between align-items-center">
                                                                Fecha:
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

                                    <div className="card-body d-flex">
                                        <p className="card-text">


                                        </p>
                                        <hr></hr>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </section >
        </>
    )
}

export default Contact3