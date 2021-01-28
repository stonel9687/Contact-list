const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            nombre: '',
            mail: '',
            phone: '',
            direction: '',
            contacts: [],
            isEdit: false,
            currentContacts: {}
        },
        actions: {

            handleSubmit: (e) => {
                e.preventDefault()
                const store = getStore()
                if (store.isEdit) {
                    const store = getStore()
                    const newContactlist = store.contacts.map((item) => {
                        if (item.id === store.currentContacts.id) {
                            const newContact = {
                                id: store.currentContacts.id,
                                nombre: store.nombre,
                                mail: store.mail,
                                phone: store.phone,
                                direction: store.direction
                            }
                            return newContact
                        } else {
                            return item
                        }
                    })
                    setStore({
                        contacts: newContactlist,
                        nombre: '',
                        mail: '',
                        phone: '',
                        address: '',
                        isEdit: false,
                        currentContact: {}
                    })
                } else {
                    const store = getStore()
                    const id = new Date().getTime()
                    const newContact = {
                        id: id,
                        nombre: store.nombre,
                        mail: store.mail,
                        phone: store.phone,
                        direction: store.direction
                    }
                    const addContact = store.contacts.concat(newContact)
                    setStore({
                        contacts: addContact,
                        nombre: '',
                        mail: '',
                        phone: '',
                        direction: '',
                    })
                }
            },
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
            editContact: (item) => {
                setStore({
                    nombre: item.nombre,
                    mail: item.mail,
                    phone: item.phone,
                    direction: item.direction,
                    isEdit: true,
                    currentContacts: item
                })
            },
            deleteContact: (item) => {
                const store = getStore()
                const eraseContact = store.contacts.filter((tarea) => {
                    return tarea.id !== item.id
                })
                setStore({
                    contacts: eraseContact,
                })
            },
        }
    }
}

export default getState