import {useState, useEffect} from "react";
import List from './List'
import Form from './Form'
import './style.css'

function Contacts(){

    const [contacts, setContacts] = useState([
        { fullName: "Ferhat", phoneNumber: "5555555555" },
        { fullName: "Eroğlu", phoneNumber: "1232542141" }
    ]);

    return(
        <div id="container">
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;