import "./App.css";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  

  useEffect(() =>{
    async function fetchData()  {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        const result = await response.json();
        if (!ignore) {
        }
      } catch (error) {
        console.error(error);
      }
    }  
  let ignore = false;
  fetchData () ;
  return ()  => { ignore = true}; 
}, []) ;  
  

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} /> 
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}