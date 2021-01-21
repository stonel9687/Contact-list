import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from './contact-form'
import List from './contact-list'

const ContactSimple = () => {

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
        setNombre('')
        setPhone('')
        setMail('')
        setDirection('')
        
    }

    const deleteContact = (item) => {
        const eraseContact = lista.filter((name)=>{
            return name !==item
        })
        setLista(eraseContact)
    }



    return (
        <>
            <section className='d-flex container'>
                <Link to='/'>
                    <button type="button" className="btn " >Volver</button>
                </Link>
                <div className='w-50 container'>
                    <div>
                        <div className='input-add container'>
                            <div className=' container border border-secondary'>
                                <div className='text-align-center'>
                                    <h4>Add New Contact</h4>
                                </div>
                                <Form
                                    nombre={nombre}
                                    mail={mail}
                                    phone={phone}
                                    direction={direction}
                                    handleChangeName={handleChangeName}
                                    handleChangeDirection={handleChangeDirection}
                                    handleChangeMail={handleChangeMail}
                                    handleChangePhone={handleChangePhone}
                                    handleSubmit={handleSubmit} />

                                <hr></hr>
                                <List
                                    lista={lista}
                                    deleteTask={deleteContact} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ContactSimple