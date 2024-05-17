import { useState } from 'react'

// Person
// Returns person's name & number
const Person = ({ person }) => {
  return(
    <p>{person.name} {person.number}</p>
  )
}

// Main app
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  // Add new person
  const addPerson = (event) => {
        event.preventDefault()    
        const personObject = {
          name: newName,
          number: newNumber,
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
          setNewNumber('')
        }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with<input value={newFilter} onChange={handleFilterChange} /></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handlePersonChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
            <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.filter(char => char.name.toLowerCase() // filters name with chars trough filet
        .includes(newFilter.toLocaleLowerCase()))
        .map(person => <Person key={person.name} person={person}/> // map filtered names & show them 
        )}
      </div>
    </div>
  )
}

export default App