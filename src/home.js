import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div class="btn-group-vertical">
        <h1 className='text-success'>Lista de ejercicios</h1>
        <Link to='/contact-list-simple' className='w-100'>
          <button className="btn btn-success my-2 w-100">
            Contact list simple
              </button>
        </Link>

        <Link to='/contact-list-contex' className='w-100'>
          <button className="btn btn-primary my-2 w-100">
            Contact list Contex
              </button>
        </Link>

        <Link to='/contact-list-usehistory' className='w-100'>
          <button class="btn btn-secondary my-2 w-100">
            Contact List useHistory
              </button>
        </Link>
      </div>
    </div>

  )
}

export default Home