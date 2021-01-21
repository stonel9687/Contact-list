import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [direction, setDirection] = useState('')
    const [lista, setLista] = useState([])

    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeMail = (e) => {
        setMail(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleChangeDirection = (e) => {
        setDirection(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = new Date().getTime()
        const newContact = {
            id: id,
            name: nombre,
            email: mail,
            phone: phone,
            direction: direction
        }
        const contact = lista.concat(newContact)
        setLista(contact)

    }
    console.log(lista)

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
                                    <input required type="text" className="form-control " placeholder="Tarea" aria-label="Recipient's username" onChange={handleChangeMail} value={mail} />
                                    <label for="inputPassword" className="col-lg-2 control-label">Telefono</label>
                                    <input required type="text" className="form-control " placeholder="Tarea" aria-label="Recipient's username" onChange={handleChangePhone} value={phone} />
                                    <label for="inputPassword" className="col-lg-2 control-label">Direccion</label>
                                    <input required type="text" className="form-control " placeholder="Tarea" aria-label="Recipient's username" onChange={handleChangeDirection} value={direction} />
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


