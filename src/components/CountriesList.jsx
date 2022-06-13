import { Link } from 'react-router-dom';
// import { useState } from 'react/cjs/react.production.min';
import countries from './../countries.json';

const CountriesList = (props) => {
  //   const [countries, setCountries] = useState(countriesList);
  return (
    <div>
      <ul>
        {props.countries.map((country) => (
          <li key={country.alpha3Code}>
            {/* {' '} */}
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
