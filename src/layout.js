import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom"
import Index from './contact_list_contexApi'
import ContactSimple from './contact_list_simple'
import Index2 from './contact_list_useHistory'
import Home from './home'
import injectContext from './store/appContex'

const Layout =()=>{
    return(
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route  path='/contact-list-simple'>
                < ContactSimple/>
            </Route>
            <Route path='/contact-list-contex'>
                < Index/>
            </Route>
            <Route path='/contact-list-usehistory'>
                <Index2 />
            </Route>
            <Route path='/contact-list-usehistory'>
                <Index2 />
            </Route>
        </Switch>
    )
}

export default injectContext(Layout)