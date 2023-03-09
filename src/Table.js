import Country from './country';
import useToggle from "./hooks/useToggle";
import './table.css';

function Table({COUNTRY = 'France'}) {
    const [isCountryToggled, toggleCountry] = useToggle(true);
    const[isAreaToggled, toggleArea]= useToggle(false);
    const [isSectorToggled, toggleSector] = useToggle(false);
    return (
        <div className='table'>
            <div className='table-firstRow'>
                <div></div>
                <div className="table-firstRow-read">Read</div>
                <div className="table-firstRow-write">Write</div>
            </div>
            <Country 
            name={COUNTRY} 
            area={'nord'} 
            sector={'nord-pas-de-calais'} 
            shop= {'centre ville'} 
            isCountryToggled={isCountryToggled} 
            toggleCountry={toggleCountry}
            isAreaToggled={isAreaToggled}
            toggleArea={toggleArea}
            isSectorToggled={isSectorToggled}
            toggleSector={toggleSector}
            /> 
        </div>
    )
}

export default Table;