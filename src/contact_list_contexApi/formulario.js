import React, { useContext } from 'react'
import { Context } from '../store/appContex'

const Formulario = () => {
    const { store, actions } = useContext(Context)
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
                                <form className="form-horizontal" onSubmit={actions.handleSubmit}>
                                    <label for="inputPassword" className="col-lg-2 control-label">Nombre Completo</label>
                                    <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange={actions.handleChangeName} value={store.nombre} />
                                    <label for="inputPassword" className="col-lg-2 control-label">Email</label>
                                    <input required type="text" className="form-control " placeholder="Mail" aria-label="Recipient's username" onChange={actions.handleChangeMail} value={store.mail} />
                                    <label for="inputPassword" className="col-lg-2 control-label">Telefono</label>
                                    <input required type="text" className="form-control " placeholder="Telefono" aria-label="Recipient's username" onChange={actions.handleChangePhone} value={store.phone} />
                                    <label for="inputPassword" className="col-lg-2 control-label">Direccion</label>
                                    <input required type="text" className="form-control " placeholder="Direccion" aria-label="Recipient's username" onChange={actions.handleChangeDirection} value={store.direction} />
                                    <div className='m-top'>
                                        <button type='submit' className="btn btn-primary btn-lg btn-block">Agregar</button>
                                    </div>
                                </form>
                            </div>
                            <hr></hr>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Formulario


