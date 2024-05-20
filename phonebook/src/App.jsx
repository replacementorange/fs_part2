import { useState } from 'react'
// importing components
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

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

  const displayPerson = newFilter ? persons.filter(person => person.name.toLowerCase().search(newFilter.toLowerCase()) !== -1) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter
        setNewFilter={setNewFilter}
        handleFilterChange={handleFilterChange}
      />

      <h2>add a new</h2>

      <Form
        addPerson = {addPerson}
        newName = {newName}
        handlePersonChange = {handlePersonChange}
        newNumber = {newNumber}
        handleNumberChange = {handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons displayPerson={displayPerson}/>

    </div>
  )
}

export default App