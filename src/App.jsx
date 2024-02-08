import "./App.css";
import allContacts from './contacts.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  // use allContacts.slice(0,5) to access the first 5 elements of the array
  // set useState to first 5 contacts (initialContacts) of allContacts list

  // declare the state variable "contacts" and set the 
  // first 5 contacts of the contacts list as the initial state
  const [contacts, setContacts] = useState(allContacts.slice(0,5));
  
  /*-----DECLARE+INIT remainingContacts-----*/
  // remainingContacts includes all contacts starting from the 5 element of the allContacts array
  const remainingContacts = allContacts.slice(5);

  /*-----ADD NEW RANDOM CONTACT FROM remainingContacts ARRAY-----*/
  const addRandomContact = () => {
    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = remainingContacts[randomNum];
    // console.log(randomContact);

    // add random contact to array that lives in useState()
    let newContactsList = [...contacts];
    if (newContactsList.length === allContacts.length) {
      console.log("There are no more contacts that can be added.")
      alert("There are no more contacts that can be added.");
      return;
    }
    else {
      if (newContactsList.some((alreadyListedContact) => alreadyListedContact.id === randomContact.id)) {
        addRandomContact();
      }
      else {
        newContactsList.push(randomContact);
        setContacts(newContactsList);
      }
    }
    console.log(newContactsList);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th scope='col'><h2>Picture</h2></th>
            <th scope='col'><h2>Name</h2></th>
            <th scope='col'><h2>Popularity</h2></th>
            <th scope='col'><h2>Won an Oscar</h2></th>
            <th scope='col'><h2>Won an Emmy</h2></th>
          </tr>
        </thead>

            {contacts.map(contact => {
              return (
                <tbody>
                  <tr key={contact.id} >
                    <td scope='row'><img src={contact.pictureUrl}/></td>
                    <td scope='row'>{contact.name}</td>
                    <td scope='row'>{contact.popularity}</td>
                    {contact.wonOscar ? <td scope='row'><span role="img" aria-label="trophy">🏆</span></td> : <td></td>}
                    {contact.wonEmmy ? <td scope='row'><span role="img" aria-label="trophy">🌟</span></td> : <td></td>}
                  </tr>
                </tbody>  
              )
            })}
      </table>
    </div>
  );
}

export default App;
