import React from 'react'
import { Link } from 'react-router-dom'

const Register = (props) => {

    const { handlePass, handleChangeName, handleChangeMail, handleChangePhone, handleChangePass, password, phone, mail, nombre, handleChangeRetryPass, repeatPass } = props
    return (
        <>
            <div className='w-50 container'>
                <div>
                    <div className='input-add container'>
                        <div className=' container border border-secondary'>
                            <div className='text-align-center'>
                                <h4>Registro</h4>
                            </div>
                            <form className="form-horizontal" onSubmit={handlePass}>
                                <label for="inputPassword" className="col-lg-2 control-label">Nombre Usuario</label>
                                <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange={handleChangeName} value={nombre} />
                                <label for="inputPassword" className="col-lg-2 control-label">Email</label>
                                <input required type="text" className="form-control " placeholder="Email" aria-label="Recipient's username" onChange={handleChangeMail} value={mail} />
                                <label for="inputPassword" className="col-lg-2 control-label">Telefono</label>
                                <input required type="text" className="form-control " placeholder="Password" aria-label="Recipient's username" onChange={handleChangePhone} value={phone} />
                                <label for="inputPassword" className="col-lg-2 control-label">Password</label>
                                <input required type="text" className="form-control " placeholder="New Password" aria-label="Recipient's username" onChange={handleChangePass} value={password} />
                                <label for="inputPassword" className="col-lg-2 control-label">Retry Password</label>
                                <input required type="text" className="form-control " placeholder="New Password" aria-label="Recipient's username" onChange={handleChangeRetryPass} value={repeatPass} />
                                <div className='m-top'>
                                    <button type='submit' className="btn btn-primary btn-lg btn-block">Completar Registro</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Link to='/contact_list_fetch/login'>
                    <button type="submit" className="button-add-ut btn btn-success">Regresar a LogIn</button>
                </Link>
            </div>
        </>
    )
}

export default Register
