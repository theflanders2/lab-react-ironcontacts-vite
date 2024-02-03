import "./App.css";
import contacts from './contacts.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // declare the state variable "contacts" and set the 
  // first 5 contacts of the contacts list as the initial state
  const [contacts, setContacts] = useState(
    [
      {
        "name": "Arnold Schwarzenegger",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg",
        "popularity": 18.216362,
        "id": "4fe4d8ef-0fac-4bd9-8c02-ed89b668b2a9",
        "wonOscar": false,
        "wonEmmy": true
      },
      {
        "name": "Ben Affleck",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/cPuPt6mYJ83DjvO3hbjNGug6Fbi.jpg",
        "popularity": 9.157077,
        "id": "1599707e-5f49-4529-b920-db3831419b04",
        "wonOscar": true,
        "wonEmmy": false
      },
      {
        "name": "Idris Elba",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        "popularity": 11.622713,
        "id": "11731993-0604-4bee-80d5-67ad845d0a38",
        "wonOscar": false,
        "wonEmmy": false
      },
      {
        "name": "Johnny Depp",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        "popularity": 15.656534,
        "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
        "wonOscar": false,
        "wonEmmy": false
      },
      {
        "name": "Monica Bellucci",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
        "popularity": 16.096436,
        "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
        "wonOscar": false,
        "wonEmmy": false
      }
    ]
  );

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th scope='col'><h2>Picture</h2></th>
            <th scope='col'><h2>Name</h2></th>
            <th scope='col'><h2>Popularity</h2></th>
          </tr>
        </thead>

            {contacts.map(contact => {
              return (
                <tbody>
                  <tr>
                    <td scope='row'><img src={contact.pictureUrl}/></td>
                    <td scope='row'>{contact.name}</td>
                    <td scope='row'>{contact.popularity}</td>
                  </tr>
                </tbody>  
              )
            })}
      </table>
    </div>
  );
}

export default App;
