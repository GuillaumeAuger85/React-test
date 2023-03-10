import Country from './country';
import useToggleInArray from './hooks/useToggleInArray';
import useToggle from "./hooks/useToggleInArray";
import Sectorisation from './seeds-json/Sectorisation.json';
import './table.css';

const data = Sectorisation.data.roots;
const countries = data.map(d => d);
const areas = data.map(d => d.children)[0];
const sectors = areas.map(a => a.children);
const toggledCountries = countries.map(c => [c.id, false]).map(([id, toggled]) => ({ id, toggled }));
const toggledAreas = data.map(d => d.children.map(c => [c.id, false])).map(aid => aid.map(([id, toggled]) => ({ id, toggled })))[0];
const toggledSectors = sectors.map(s => s.map(s => [s.id, false])).map(a => a.map(([id, toggled]) => ({ id, toggled }))).flat();

function Table() {
    const [areCountriesToggled, toggleCountry] = useToggle(toggledCountries);
    const [areAreasToggled, toggleArea] = useToggleInArray(toggledAreas);
    const [areSectorsToggled, toggleSector] = useToggleInArray(toggledSectors);
    return (
        <div className='table'>
            <div className='table-firstRow'>
                <div></div>
                <div className="table-firstRow-read">Read</div>
                <div className="table-firstRow-write">Write</div>
            </div>
            {data.map(d => <Country
                key={d.id}
                id={d.id}
                areCountriesToggled={areCountriesToggled}
                toggleCountry={toggleCountry}
                areAreasToggled={areAreasToggled}
                toggleArea={toggleArea}
                areSectorsToggled={areSectorsToggled}
                toggleSector={toggleSector}
                name={d.name}
                countryData={d.children}
            />)}
        </div>
    )
}

export default Table;