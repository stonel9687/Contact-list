import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Formulario = (props) => {

    const { nombre, phone, direction, mail, handleChangeName, handleChangeMail, handleChangePhone, handleChangeDirection, handleSubmit } = props

    return (
        <>
            <section className='d-flex container'>
                <div className='w-50 container'>
                    <div>
                        <div className='input-add container'>
                            <div className=' container border border-secondary'>
                                <div className='text-align-center'>
                                    <h4>Add New Contact</h4>
                                </div>
                                <form className="form-horizontal" onSubmit={handleSubmit}>
                                    <label for="inputPassword" className="col-lg-2 control-label">Nombre Completo</label>
                                    <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange={handleChangeName} value={nombre} />
                                    <label for="inputPassword" className="col-lg-2 control-label">Email</label>
                                    <input required type="text" className="form-control " placeholder="Email" aria-label="Recipient's username" onChange={handleChangeMail} value={mail} />
                                    <label for="inputPassword" className="col-lg-2 control-label">Telefono</label>
                                    <input required type="text" className="form-control " placeholder="Telefono" aria-label="Recipient's username" onChange={handleChangePhone} value={phone} />
                                    <label for="inputPassword" className="col-lg-2 control-label">Direccion</label>
                                    <input required type="text" className="form-control " placeholder="Direccion" aria-label="Recipient's username" onChange={handleChangeDirection} value={direction} />
                                    <div className='m-top'>
                                        <button type='submit' className="btn btn-primary btn-lg btn-block">Agregar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Formulario