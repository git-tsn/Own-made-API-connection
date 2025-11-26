import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedCountriesRemove, handleVisitedFlag}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        if (visited) {
            setVisited(false);
            handleVisitedCountriesRemove(country);
        }
        else {
            setVisited(true);
            handleVisitedCountries(country);
        }
        // setVisited(!visited);
        // handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3><img src={country.flag} alt="flag" /><hr />
            <span>{country.id}.  </span>Name : {country.name} </h3> 
            <h3>Native Name : {country.nativeName}</h3>
            <h3>Capital : {country.capital}</h3>
            <h4>Languages : {country.languages[0].name}</h4>
            <p>Area : {country.area}</p>
            <p>Population : {country.population}</p>
            <p>Region : {country.region}</p>
            <p>Borders : {country.borders && country.borders.length > 0 ?
                country.borders.map( border => <span key={border}>  '{border}' </span> ) 
            : "No border"}</p>
            <h4>Other Names : {country.altSpellings.join(', ')}</h4>
            <button 
            onClick={handleVisited} 
            className={visited ? 'btn-visited':'btn-not-visited'}
            >{
                visited ? 'Visited' : 'Not Visited'
                }</button><br /><br />
            <button onClick={() => handleVisitedFlag(country.flag)}>Add visited Flag</button>
        </div>
    )
}

export default Country;