const ContactSimple = () => {

    const history = useHistory()

    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [direction, setDirection] = useState('')
    const [contactList, setContactList] = useState([])
    const [edit, setEdit] = useState(false)
    const [currentContact, setCurrentContact] = useState({})

    handleChangeName: (e) => {
        setStore({ nombre: e.target.value })
    },
        handleChangeMail: (e) => {
            setStore({ mail: e.target.value })
        },
            handleChangePhone: (e) => {
                setStore({ phone: e.target.value })
            },
                handleChangeDirection: (e) => {
                    setStore({ direction: e.target.value })
                },

    const handleSubmit = (e) => {
        e.preventDefault()
        const store = getStore()
        if (store.isEdit) {
            const store = getStore()
            const newContactlist = store.contact.map((item) => {
                if (item.id === store.currentContact.id) {
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
            setStore({
                contact: newContactlist,
                nombre: '',
                mail: '',
                phone: '',
                address: '',
                isEdit: false,
                currentContacts: {}
            })
        } else {
            const id = new Date().getTime()
            const newContact = {
                id: id,
                name: store.nombre,
                email: store.contact.mail,
                phone: store.contact.phone,
                direction: store.contact.direction
            }

            const addContact = store.contact.concat(newContact)
            setStore({
                contacts: addContact,
                nombre: '',
                mail: '',
                phone: '',
                direction: '',

        }
    }
    const deleteContact = (item) => {
        const store = getStore()
        const eraseContact = store.contact.filter((tarea) => {
            return tarea.id !== item.id
        })
        setStore({
            contact: eraseContact,
        })
    }
    editContact: (task) => {
        const store = getStore()
        setStore({
            contact:task.contact,
            nombre: task.nombre,
            mail: task.mail,
            phone: task.phone,
            direction: task.direction,
            isEdit:true,
            currentContact:{}
        })
    }