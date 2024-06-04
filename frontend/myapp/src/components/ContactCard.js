import React from 'react'
import {Link} from "react-router-dom"
import user from "../images/user.png"
const ContactCard =(props)=>{
    const {id,name,phone,email}=props.contact
    return(
        <div className="item">
            <img className="ui avatar image"src={user} alt="user" />
                <div className="content">
                    <Link to={`/contact/${id}`}>
                    <div className="header">{name}</div>
                    <div>{phone}</div>
                    <div>{email}</div>
                    </Link>
                    
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <i className='trash alternate outline icon' style={{ color: 'red', marginTop: '7px',marginLeft:"10px" }}
                onClick={()=>props.clickHandler(id)}
                ></i>
                <i className='edit alternate outline icon' style={{ color: 'blue', marginTop: '7px' }}
                onClick={()=>props.clickHandler(id)}
                ></i>
                </div>
            </div>
    )

}
export default ContactCard