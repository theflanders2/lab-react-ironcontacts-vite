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
  
  // remainingContacts includes all contacts starting from the 5 element of the allContacts array
  const remainingContacts = allContacts.slice(5);

  /*-----ADD NEW RANDOM CONTACT FROM remainingContacts ARRAY-----*/
  const addRandomContact = () => {
    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = remainingContacts[randomNum];
    // console.log(randomContact);

    // add random contact to array that lives in useState()
    let newContactsList = [...contacts];

    // if list is empty, alert user no no more contacts can be added
    if (newContactsList.length === allContacts.length) {
      console.log("There are no more contacts that can be added.")
      alert("There are no more contacts that can be added.");
      return;
    }
    else {
      // check to see if contact is already displayed in the list
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

  /*-----SORT CONTACTS BY NAME (ASCENDING) AND UPDATE STATE-----*/
  const sortByNameAscend = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  /*-----SORT CONTACTS BY NAME (DESCENDING) AND UPDATE STATE-----*/
  const sortByNameDescend = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.name.localeCompare(a.name));
    setContacts(sortedContacts);
  };

  /*-----SORT CONTACTS BY POPULARITY (DESCENDING) AND UPDATE STATE-----*/
  const sortByPopularityDescend = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  /*-----SORT CONTACTS BY POPULARITY (ASCENDING) AND UPDATE STATE-----*/
  const sortByPopularityAscend = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.popularity - b.popularity);
    setContacts(sortedContacts);
  };

  /*-----REMOVE CONTACT AND UPDATE STATE-----*/ 
  const removeContact = (id) => {
    // all contacts, whose id does not match the id clicked on will remain in the list
    const contactListAfterDelete = contacts.filter(contact => contact.id !== id);
    setContacts(contactListAfterDelete);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <br />
      <button onClick={sortByNameAscend}>Sort Contacts by Name - A-Z</button>
      <button onClick={sortByNameDescend}>Sort Contacts by Name - Z-A</button>
      <br />
      <button onClick={sortByPopularityDescend}>Sort Contacts by Popularity - Highest First</button>
      <button onClick={sortByPopularityAscend}>Sort Contacts by Popularity - Lowest First</button>
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
                    <td><button onClick={() => removeContact(contact.id)}>Delete</button></td>
                  </tr>
                </tbody>  
              )
            })}
      </table>
    </div>
  );
}

export default App;
