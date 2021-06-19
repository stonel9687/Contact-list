import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'
import Formulario from './formulario'
import Lista from './listas'
import Login from './login'
import Register from './register'

const IndexFetch = () => {

    const history = useHistory()

    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [direction, setDirection] = useState('')
    const [contactList, setContactList] = useState([])
    const [contactToEdit, setContactToEdit] = useState(undefined)
    const [password, setPassword] = useState('')
    const [repeatPass, setRepeatPass] = useState('')

    //const [currentContact, setCurrentContact] = useState({})

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

    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeRetryPass = (e) => {
        setRepeatPass(e.target.value)
    }

    const handlePass = (e) => {
        e.preventDefault()
        const newRegister = {
            name: nombre,
            email: mail,
            phone: phone,
            password: password
        }
        if (password === repeatPass) {
            fetch('https://crud-placeholder.herokuapp.com/api/v1/post_user/', {
                method: "POST",
                body: JSON.stringify(newRegister),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => { return resp.json() })
                .then((data) => {
                    if (data.status === 'error') {
                        alert('Usuario Registrado')
                    } else {
                        setNombre('')
                        setMail('')
                        setPhone('')
                        setPassword('')
                        history.push('/contact_list_fetch/login')
                    }
                })
                .catch((error) => console.log('Error:', error));
        } else {
            alert('Las Contraseñas no coinciden')
        }

    }

    const handleSingin = (e) => {
        e.preventDefault()
        const userLog = {
            email: mail,
            password:password
        }
        fetch('https://crud-placeholder.herokuapp.com/api/v1/login_user/', {
            method: "POST",
            body: JSON.stringify(userLog),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                if (data.status === 'error') {
                    alert('Usuario no Existe')
                    setMail('')
                    setPassword('')
                } else {
                    setMail('')
                    setPassword('')
                    history.push('/contact_list_fetch/listas')
                    showContact()
                }
            })
            .catch((error) => console.log('Error:', error));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (contactToEdit !== undefined) {
            const editCont = {
                name: nombre,
                email: mail,
                phone: phone,
                address: direction
            }
            fetch(`http://localhost:5000/put-contactlist/${contactToEdit._id}`, {
                method: "PUT",
                body: JSON.stringify(editCont),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => { return resp.json() })
                .then((data) => {
                    setNombre('')
                    setMail('')
                    setPhone('')
                    setDirection('')
                    setContactToEdit(undefined)
                    history.push('/contact_list_fetch/listas')
                    showContact()
                })
                .catch((error) => console.log('Error:', error));
        } else {
            const newContact = {
                name: nombre,
                email: mail,
                phone: phone,
                address: direction
            }
            fetch('http://localhost:5000/post-contactlist', {
                method: "POST",
                body: JSON.stringify(newContact),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => { return resp.json() })
                .then((data) => {
                    if (data.status === 'error') {
                        alert('Nombre ya Registrado')
                    } else {
                        setNombre('')
                        setMail('')
                        setPhone('')
                        setDirection('')
                        history.push('/contact_list_fetch/listas')
                        showContact()
                    }
                })
                .catch((error) => console.log('Error:', error));
        }
    }

    const showContact = () => {
        fetch('http://localhost:5000/get-contactlist', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => { return resp.json() })
            .then(data => {
                console.log(data)
                setContactList(data)

            })
            .catch(error => console.log('Error:', error));
    }

    const deleteContact = (item) => {
        fetch(`http://localhost:5000/delete-contactlist/${item._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                if (data.status === 'error') {
                    alert('Intentalo Nuevamente')
                } else {
                    showContact()
                }
            })
            .catch((error) => console.log('Error:', error));
    }

    const setEditContact = (item) => {
        history.push('/contact_list_fetch/formulario')
        setNombre(item.name)
        setMail(item.email)
        setPhone(item.phone)
        setDirection(item.address)
        setContactToEdit(item)
    }

    useEffect(() => {
        showContact()
    }, [])

    return (
        <>
            <Link to='/'>
                <button type="button" className="btn " >Volver</button>
            </Link>

            <Switch>
                <Route path='/contact_list_fetch/login'>
                    <Login
                        mail={mail}
                        password={password}
                        handleChangeMail={handleChangeMail}
                        handleSingin={handleSingin}
                        handleChangePass={handleChangePass}
                    />
                </Route>
                <Route path='/contact_list_fetch/register'>
                    <Register
                        handlePass={handlePass}
                        handleChangeName={handleChangeName}
                        handleChangeMail={handleChangeMail}
                        handleChangePhone={handleChangePhone}
                        handleChangePass={handleChangePass}
                        handleChangeRetryPass={handleChangeRetryPass}
                        password={password}
                        phone={phone}
                        mail={mail}
                        nombre={nombre}
                    />
                </Route>

                <Route path='/contact_list_fetch/formulario'>
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
                <Route path='/contact_list_fetch/listas'>
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

export default IndexFetch

