import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div class="btn-group-vertical">
        <h1 className='text-success'>Ejercicios ContactList</h1>

        <Link to='/contact-list-simple/contact-list' className='w-100'>
          <button className="btn btn-success my-2 w-100">
            Contact list simple
              </button>
        </Link>

        <Link to='/contact-list-contex' className='w-100'>
          <button className="btn btn-primary my-2 w-100">
            Contact list Contex
              </button>
        </Link>

        <Link to='/contact-list-usehistory/formulario' className='w-100'>
          <button class="btn btn-secondary my-2 w-100">
            Contact List useHistory
              </button>
        </Link>

        <Link to='/contact_list_fetch/login' className='w-100'>
          <button class="btn btn-secondary my-2 w-100">
            Contact List Fetch
              </button>
        </Link>
        
      </div>
    </div>

  )
}

export default Home