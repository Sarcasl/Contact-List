import React from 'react'
import {useState, useEffect } from "react";
import ContactRow from "./ContactRow";


function SelectedContact(props) {
    let {selectedContactId,setSelectedContactId} = props
    const [contact, setContact] = useState(null)
    
    useEffect(()=> {
        async function fetchContact() {
            try {
              const response = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
              );
              const result = await response.json();
              setContact(result);
              console.log(contact);
            } catch (error) {
              console.error(error);
            }
          }
          fetchContact();
    },[])


    return (
        <div>
            {contact && (
                <ContactRow setSelectedContactId={setSelectedContactId} contact={contact}/>
            )}
        </div>
          
    )
}

export default SelectedContact
