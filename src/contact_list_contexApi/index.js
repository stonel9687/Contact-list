import React from 'react'
import { Link } from 'react-router-dom'
import Formulario from './formulario'
import Lista from './lista'

const Index = () => {
    return (
        <>
            <div className='container'>
                <Link to='/'>
                    <button type="button" className="btn " >Volver</button>
                </Link>
                <Formulario />
                <Lista />
            </div>
        </>
    )
}

export default Index
