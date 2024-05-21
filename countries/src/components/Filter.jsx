// Filter input field
const Filter = ({newSearch, handleSearchChange}) => {
    return (
        <>Search countries:<input type="search" value={newSearch} onChange={handleSearchChange}/></>
    )
}

export default Filter