import React from 'react'
import {Link} from "react-router-dom"
import user from "../images/new.jpg"
const ContactCard =(props)=>{
    const {id,name,phone,email}=props.contact
    return(
          <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src="" alt="user" />
                </div>
            </div>

          </div>
    )

}
export default ContactCard