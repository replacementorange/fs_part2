// Person
// Returns person's name & number
const Person = ({ name, number }) => {
    return(
      <p>{name} {number}</p>
    )
  }

// Displays persons in list 
const Persons = ({ displayPerson }) => {
    return(
        <>
            {displayPerson.map(person => <Person key={person.id} name={person.name} number={person.number} />)}
        </>
    )
}

export default Persons