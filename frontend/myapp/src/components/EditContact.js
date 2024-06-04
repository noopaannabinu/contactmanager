import React from "react"
import {Link} from "react-router-dom"

class EditContact extends React.Component{
    state={
        name:"",
        phone:"",
        email:""
    }
    update = (e)=>{
        e.preventDefault();
        if(this.state.name ==="" || this.state.phone==="" || this.state.email===""){
        alert("all the fields are mandatory")
        return
       }
       this.props.addContactHandler(this.state)
       this.setState({name:"",phone:"",email:""})
    
        
    
    }
    
    render(){
        return(
            <div className="ui main">
                <br />
                <br />
                
            <h2>Add Contact </h2>
            <form className="ui form" onSubmit={this.update}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholde="Name"
                     value={this.state.name}
                     onChange={(e)=>this.setState({name:e.target.value})

                    }/>
                </div>

                <div className="field">
                    <label>Phone</label>
                    <input type="text" name="phone" placeholde="Phone"
                    value={this.state.phone} 
                    onChange={(e)=>this.setState({phone:e.target.value})
                }/>
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholde="Email"
                    value={this.state.email} 
                    onChange={(e)=>this.setState({email:e.target.value})
                }/>
                </div>
                

                <button className="ui button blue">ADD</button>
               
            </form>
            </div>    
        )
    }

}
export default EditContact
