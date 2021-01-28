import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Form from './contact-form'
import List from './contact-list'

const ContactSimple = () => {

    const history = useHistory()

    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [direction, setDirection] = useState('')
    const [contactList, setContactList] = useState([])
    const [edit, setEdit] = useState(false)
    const [currentContact, setCurrentContact] = useState({})

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
        if (edit) {
            const newContactlist = contactList.map((item) => {
                if (item.id === currentContact.id) {
                    const newContact = {
                        id: currentContact.id,
                        name: nombre,
                        mail: mail,
                        phone: phone,
                        direction: direction
                    }
                    return newContact
                } else {
                    return item
                }
            })
            setContactList(newContactlist)
            setEdit(false)
            setMail('')
            setNombre('')
            setPhone('')
            setDirection('')
            setCurrentContact({})
        } else {
            const id = new Date().getTime()
            const newContact = {
                id: id,
                name: nombre,
                mail: mail,
                phone: phone,
                direction: direction
            }

            const addContact = contactList.concat(newContact)
            setContactList(addContact)
            setMail('')
            setNombre('')
            setPhone('')
            setDirection('')

        }
        history.push('/contact-list-simple/contact-list')

    }
    const deleteContact = (item) => {
        const eraseContact = contactList.filter((tarea) => {
            return tarea.id !== item.id
        })
        setContactList(eraseContact)
    }

    const setEditContact = (task) => {
        setMail(task.mail)
        setNombre(task.name)
        setPhone(task.phone)
        setDirection(task.direction)
        setEdit(true)
        setCurrentContact(task)
        history.push('/contact-list-simple/contact-form')
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
                                    contactList={contactList}
                                    deleteContact={deleteContact}
                                    setEditContact={setEditContact} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ContactSimple