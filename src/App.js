import countryList from './countries.json';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  // const [countries, setCountries] = useState(countryList);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        // setCountries(data);
        const list = [...data];
        list.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(list);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col">
            <CountriesList countries={countries} />
          </div>
          <div className="col">
            <Routes>
              {/* <Route path="/" element={<CountriesList countries={countries} />} /> */}
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
