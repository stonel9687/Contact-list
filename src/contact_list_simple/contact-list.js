import React from 'react'

function List(props) {

    const { contactList, deleteContact, setEditContact } = props
    return (
        <>
            <div>
                <h5 className="card-title">Contact List</h5>
                {contactList.map((item) => {
                    return (
                        <div key={item.id} className="card mb-3" style={{ width: '463px' }} >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src='' class="card-img" alt="..." />
                                </div>
                                <div className="col-md-8 d-flex">
                                    <div className="card-body">
                                        <p className="card-text">
                                            <ul className="list-group">
                                                <li className=" d-flex justify-content-between align-items-center">
                                                    Nombre:{item.name}
                                                </li>
                                                <li className="d-flex justify-content-between align-items-center">
                                                    Correo:{item.email}
                                                </li>
                                                <li className=" d-flex justify-content-between align-items-center">
                                                    Telefono:{item.phone}
                                                </li>
                                                <li className=" d-flex justify-content-between align-items-center">
                                                    Direccion:{item.direction}
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className='btn-group-vertical'>
                                        <button type="button" className="btn" onClick={() => { setEditContact(item) }} ><i class="fas fa-user-edit"></i></button>
                                        <button type="button" className="btn " onClick={() => { deleteContact(item) }}  ><i class="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default List
