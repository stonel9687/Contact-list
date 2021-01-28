const index2 = () => {

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
                id: currentContact.id,
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

    }
    const deleteContact = (item) => {
        const eraseContact = contactList.filter((tarea) => {
            return tarea !== item
        })
        setContactList(eraseContact)
    }

    const setEditContact = (task) => {
        setMail(task.mail)
        setNombre(task.nombre)
        setPhone(task.phone)
        setDirection(task.direction)
        setEdit(true)
        setCurrentContact(task)
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
                        deleteTask={deleteContact}
                        setEditContact={setEditContact}
                    />
                </Route>
            </Switch>
        </>
    )
}

export default index2













// const Index2 = () => {
//     const history = useHistory()

//     const [contactData, setContactData] = useState({
//         nombre: '',
//         mail: '',
//         phone: '',
//         direction: '',
//         contact: [],
//     })
//     const [contactList, setContactList] = useState([])

//     const [contactEdit, setContactEdit] = useState({})

//     const handleChangeName = (e) => {
//         setContactData({ ...contactData, nombre: e.target.value })
//     }

//     const handleChangeMail = (e) => {
//         setContactData({ ...contactData, mail: e.target.value })
//     }
//     const handleChangePhone = (e) => {
//         setContactData({ ...contactData, phone: e.target.value })
//     }
//     const handleChangeDirection = (e) => {
//         setContactData({ ...contactData, direction: e.target.value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (isEdit) {
//             const newContactList = contactList.map((item) => {
//                 if (item.id === currentContact.id) {
//                     const newtask = {
//                         id: currentContact.id,
//                         nombre: contactData.nombre,
//                         mail: contactData.mail,
//                         phone: contactData.phone,
//                         direction: contactData.direction,
//                     }
//                     return newtask
//                 } else {
//                     return item
//                 }
//             })
//             setContactList(newContactList)
//             setContactData({
//                 nombre: '',
//                 mail: '',
//                 phone: '',
//                 direction: '',
//             })
//             setIsEdit(false)
//             setCurrentContact({})
//         } else {
//             const id = new Date().getTime()
//             const newtask = {
//                 id: id,
//                 nombre: contactData.nombre,
//                 mail: contactData.mail,
//                 phone: contactData.phone,
//                 direction: contactData.direction,

//             }
//             const concatArray = contactList.concat(newtask)
//             setContactData(concatArray)
//             setContactData({
//                 nombre: '',
//                 mail: '',
//                 phone: '',
//                 direction: '',
//             })
//         }
//     }

//     //     const id = new Date().getTime()
//     //     const newContact = {
//     //         id: id,
//     //         nombre: contactData.nombre,
//     //         mail: contactData.mail,
//     //         phone: contactData.phone,
//     //         direction: contactData.direction
//     //     }
//     //     const contact = contactList.concat(newContact)
//     //     setContactList(contact)
//     //     setContactData({
//     //         nombre: '',
//     //         mail: '',
//     //         phone: '',
//     //         direction: '',
//     //         contact: [],
//     //     })
//     //     history.push('/contact-list-usehistory/listas')
//     // }
//     const deleteContact = (item) => {
//         const eraseContact = contactList.filter((name) => {
//             return name !== item
//         })
//         setContactList(eraseContact)
//     }
//     const setEditTask = (nombre) => {
//         setContactList
//         setContactData({
//             nombre: '',
//             mail: '',
//             phone: '',
//             direction: '',
//         })
//         setIsEdit(true)
//         setCurrentContact(contactEdit)
//     }



//     return (
