import React, { useState } from 'react'
import { Switch, Route, useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'
import Formulario from './formulario'
import Lista from './listas'

const Index2 = () => {
    
   const history=useHistory()

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
        history.push('/contact-list-usehistory/listas')

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
        history.push('/contact-list-usehistory/formulario')
    }


    return (
        <>
            <Link to='/'>
                <button type="button" className="btn " >Volver</button>
            </Link>

            <Switch>
                <Route path='/contact-list-usehistory/formulario'>
                    <Formulario
                        nombre={nombre}
                        mail={mail}
                        phone={phone}
                        direction={direction}
                        handleChangeName={handleChangeName}
                        handleChangeDirection={handleChangeDirection}
                        handleChangeMail={handleChangeMail}
                        handleChangePhone={handleChangePhone}
                        handleSubmit={handleSubmit}
                    />
                </Route>
                <Route path='/contact-list-usehistory/listas'>
                    <Lista
                        contactList={contactList}
                        deleteContact={deleteContact}
                        setEditContact={setEditContact}
                    />
                </Route>
            </Switch>
        </>
    )
}

export default Index2

