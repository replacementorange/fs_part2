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
        // Checking if there is same person
        // "Checks whole thing if there is one instance of it returns true"
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
        if (persons.some(person => person.name === newName)) {
          // Alerting user of duplicate
          // Pops up and alerting window with text
          // https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
          window.alert(`${newName} is already added to phonebook`)
        }
        else {
          setPersons(persons.concat(personObject))
          setNewName('')
        }
  }

  const handlePersonChange = (event) => {
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