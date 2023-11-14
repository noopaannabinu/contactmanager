import React,{useState,useEffect} from "react"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import {uuid} from 'uuidv4'
import './App.css';
import Login from "./Login"
import Register from "./Register"
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts,setContacts]=useState([])
  
  const addContactHandler = (contact) => {
    console.log(contact);
    const newContactList = [...contacts, { id: uuid(), ...contact }];
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
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
    const retriveContacts=JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[])
  useEffect(()=>{
    if (contacts.length){
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    } },[contacts]);
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
