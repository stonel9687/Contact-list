import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContex'

const Index = () => {

    const { store, actions } = useContext(Context)

    return (
        <>
            <Link to='/'>
                <button type="button" className="btn " >Volver</button>
            </Link>
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
                            <div>
                                <h5 className="card-title">Contact List</h5>
                                {store.contact.map((store) => {
                                    return (
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
                                                                    Nombre:{store.nombre}
                                                                </li>
                                                                <li className="d-flex justify-content-between align-items-center">
                                                                    Correo:{store.mail}
                                                                </li>
                                                                <li className=" d-flex justify-content-between align-items-center">
                                                                    Telefono:{store.phone}
                                                                </li>
                                                                <li className=" d-flex justify-content-between align-items-center">
                                                                    Direccion:{store.direction}
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
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Index
