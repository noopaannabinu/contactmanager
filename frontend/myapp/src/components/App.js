import React,{useState,useEffect} from "react"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import {uuid} from 'uuidv4'
import api from '../api/contacts'
import './App.css';
import Login from "./Login"
import Register from "./Register"
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts,setContacts]=useState([])

  //retrieve contacts
  const retrieveContacts= async ()=>{
   const response=await api.get("/contacts")
    return response.data
  }
  
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request={
      id:uuid(),...contact,
    }
    const response = await api.post("/contacts",request);
    console.log(response)
    setContacts([...contacts,response.data]);
    
  };

  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    }
  )
  setContacts(newContactList)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  }
  useEffect(()=>{
   //const retriveContacts=JSON.parse(
   // localStorage.getItem(LOCAL_STORAGE_KEY));
   // if(retriveContacts) setContacts(retriveContacts);
    const getAllContacts=async ()=>{
     const allContacts=await retrieveContacts()
      if(allContacts) setContacts(allContacts)
    }
  getAllContacts();
  },[])
  useEffect(()=>{
    /*if (contacts.length){
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }*/ },[contacts]);
  return (
    <div className='ui container'>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}>
</Route>
<Route path="/register" element={<Register/>}>
</Route>


      <Route 
      path="/home" 
      element={(
        <ContactList
          contacts={contacts} 
          getContactId={removeContactHandler}
        />
      )}
    />
        <Route
      path="/add"
      element={<AddContact addContactHandler={addContactHandler} />}
    />

        </Routes>
      
      </Router>
  
    </div>

  );
}

export default App;
