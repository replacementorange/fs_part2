import { useState } from 'react'

// Person
// Returns person's name
const Person = ({ person }) => {
  return(
    <p>{person.name}</p>
  )
}

// Main app
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // Add new person
  const addPerson = (event) => {
        event.preventDefault()    
        const personObject = {
          name: newName,
          id: persons.length + 1,
        }
        //console.log('button clicked', event.target)  
        setPersons(persons.concat(personObject))
        setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person key={person.name} person={person}/>  
        )}
      </div>
    </div>
  )
}

export default App