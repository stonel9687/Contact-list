const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            nombre: '',
            mail: '',
            phone: '',
            direction: '',
            contact: []
        },
        actions: {

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
            handleSubmit: (e) => {
                e.preventDefault()
                const store = getStore()
                const id = new Date().getTime()
                const newContact = {
                    nombre: store.nombre,
                    mail: store.mail,
                    phone:store.phone,
                    direction:store.direction
                }
                const contact2=store.contact.concat(newContact)
                setStore({contact:contact2,nombre:'',mail:'', phone:'',direction:''})

            }

        }
    }
}
export default getState