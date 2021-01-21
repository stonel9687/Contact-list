import React from 'react'

function Form(props) {
    const { handleSubmit, handleChangeDirection, handleChangeMail, handleChangeName, handleChangePhone, nombre, mail, phone, direction}=props

    return (

            <form className="form-horizontal" onSubmit={handleSubmit}>
                <label className="col-lg-2 control-label">Nombre Completo</label>
                <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange={handleChangeName} value={nombre} />
                <label className="col-lg-2 control-label">Email</label>
                <input required type="email" className="form-control " placeholder="Em@il" aria-label="Recipient's username" onChange={handleChangeMail} value={mail} />
                <label className="col-lg-2 control-label">Telefono</label>
                <input required type="number" className="form-control " placeholder="#" aria-label="Recipient's username" onChange={handleChangePhone} value={phone} />
                <label className="col-lg-2 control-label">Direccion</label>
                <input required type="text" className="form-control " placeholder="Direccion" aria-label="Recipient's username" onChange={handleChangeDirection} value={direction} />
                <div className='m-top'>
                    <button type='submit' className="btn btn-primary btn-lg btn-block">Agregar</button>
                </div>
            </form>
        
    )
}

export default Form
