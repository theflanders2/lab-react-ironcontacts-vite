import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import allContacts from './contacts.json';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Button variant="outline-success" onClick={addRandomContact}>Add Random Contact</Button>{' '}
      <br />
      <br />
      <Button variant="outline-secondary" size="sm" onClick={sortByNameAscend}>Sort Contacts by Name - A-Z</Button>{' '}
      <Button variant="outline-secondary" size="sm" onClick={sortByNameDescend}>Sort Contacts by Name - Z-A</Button>{' '}
      <br />
      <br />
      <Button variant="outline-primary" size="sm" onClick={sortByPopularityDescend}>Sort Contacts by Popularity - Highest First</Button>{' '}
      <Button variant="outline-primary" size="sm" onClick={sortByPopularityAscend}>Sort Contacts by Popularity - Lowest First</Button>{' '}
      <br />
      <br />
      <Table>
        <Row>
          <Col  xs={6} md={4}>
            <thead>
              <tr>
                <th scope='col'><h3>Picture</h3></th>
                <th scope='col'><h3>Name</h3></th>
                <th scope='col'><h3>Popularity</h3></th>
                <th scope='col'><h3>Won Oscar</h3></th>
                <th scope='col'><h3>Won Emmy</h3></th>
              </tr>
            </thead>

            {contacts.map(contact => {
              return (
                <tbody>
                  <tr key={contact.id} >
                      <td scope='row'><Image src={contact.pictureUrl} thumbnail/></td>
                      <td scope='row'>{contact.name}</td>
                      <td scope='row'>{contact.popularity}</td>
                      {contact.wonOscar ? <td scope='row'><span role="img" aria-label="trophy">🏆</span></td> : <td></td>}
                      {contact.wonEmmy ? <td scope='row'><span role="img" aria-label="trophy">🌟</span></td> : <td></td>}
                      <td><Button variant="outline-danger" size="sm" onClick={() => removeContact(contact.id)}>Delete</Button></td>
                  </tr>
                </tbody>  
              )
            })}
          </Col>
        </Row>
      </Table>
    </div>
  );
}

export default App;
