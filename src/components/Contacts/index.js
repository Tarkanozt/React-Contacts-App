import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import './style.css'

function Contacts() {

    const [contacts, setContacts] = useState([
    
    {
        fullname : "Tarkan",
        phone_number : 123123
    },
    {
        fullname : "Ahmet",
        phone_number : 111222
    },
    {
        fullname : "Ayşe",
        phone_number : 456456
    }
])

    useEffect(() => {
      
        console.log(contacts)
      
    }, [contacts])
    
  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts