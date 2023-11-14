import React from "react"
import {Link} from "react-router-dom"
//import { useHistory } from 'react-router-dom';

class Login extends React.Component{
    state={
        username:"",
        password:""
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.username ==="" || this.state.password==="" ){
        alert("all the fields are mandatory")
        return
       }
       //this.props.addContactHandler(this.state)
       this.setState({username:"",password:""})
    
        
    
    }
    
    render(){
        return(
            <div className="ui main">
                <br />
                <br />
                
            <h2>Login</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Userame"
                     value={this.state.user}
                     onChange={(e)=>this.setState({username:e.target.value})

                    }/>
                </div>

                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" placeholde="Password"
                    value={this.state.phone} 
                    onChange={(e)=>this.setState({password:e.target.value})
                }/>
                </div>

                <Link to="/home">
                <button className="ui button blue">Login</button>
                    </Link>
                    <br />
                    <br />
                
            </form>
            <Link to="/register">
                <button className="ui button blue">Register</button>
                    </Link> 

            </div>    
        )
    }

}
export default Login
