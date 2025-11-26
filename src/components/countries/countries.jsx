import React, { use, useState } from "react";
import Country from "../country/country";
import "./Countries.css";

const Countries = ({ countriesPromis }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const countries = use(countriesPromis);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedCountriesRemove = (country) => {
    const newVisitedCountries = visitedCountries.filter(
      (c) => c.id !== country.id
    );
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h1>Traveling Countries : {countries.length}</h1>
      <h2>Travel so Far : {visitedCountries.length}</h2>
      <div className="visited-flags-container">
        {
            visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.id}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedCountriesRemove={handleVisitedCountriesRemove}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
