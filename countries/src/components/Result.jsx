// Country and language returning as list element
const Country = ({name}) => <li>{name}</li>
const Language = ({lang}) => <li>{lang}</li>

// Result
const Result = ({countries, filter}) => {

    const foundCountry = countries.filter(foundCountry => foundCountry.name.common.toLowerCase().includes(filter.toLowerCase()))

    // If there is more than 10 countries founded
    if (foundCountry.length > 10) return "Too many matches, specify another filter";

    // If there is less than 1 country
    if (foundCountry.length > 1)
    return (
        <ul>
            {foundCountry.map(foundCountry =>
            <Country key={foundCountry.name.common} name={foundCountry.name.common}/>)}
        </ul>
    )

    // If there exactly 1 country then show it
    if (foundCountry.length === 1) {
        const langs = Array.isArray(foundCountry[0].languages) ? foundCountry[0].languages : Object.values(foundCountry[0].languages)

        return (
            <>
            <h1>{foundCountry[0].name.common}</h1>
            <p>Capital: {foundCountry[0].capital}</p>
            <p>Area: {foundCountry[0].area} km²</p>
            <h3>Languages</h3>
            <ul>
                {langs.map(l => <Language key={l} lang={l}/>)}
            </ul>
            <img src={foundCountry[0].flags.png} height={125}/>
            </>
            ) 
        }
}

export default Result