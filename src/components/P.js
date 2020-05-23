import React from 'react'
import {Route, Redirect} from "react-router-dom"


export default function P({component:Comp, ...props}) {
    return props.user ? 
    <Route {...props} render={()=><Comp {...props} />} /> : <Redirect  to="/"/>
}   