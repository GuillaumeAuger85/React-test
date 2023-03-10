import RowLayout from "./RowLayout";
import Arrow from "./Arrow";
import Area from "./Area";

function Country({ countryData, name, toggleCountry, areCountriesToggled, toggleArea, toggleSector, areAreasToggled, areSectorsToggled,id }) {
    const isCountryToggled = areCountriesToggled.filter(a => id === a.id)[0].toggled;
    const arrowStyles = isCountryToggled ? { transform: 'rotate(45deg)' } : { transform: 'rotate(-45deg)' };
    const handleToggle = () =>{
        toggleCountry(id)
    }
    const areas = countryData.map(c => <Area
        key={c.id}
        id={c.id}
        name={c.name}
        areaData={c.children}
        areAreasToggled={areAreasToggled}
        toggleArea={toggleArea}
        areSectorsToggled={areSectorsToggled}
        toggleSector={toggleSector}
    />)
    return (
        <div>
            <RowLayout >
                <div className="rowLayout-localisation" onClick={handleToggle}><Arrow const arrowStyles={arrowStyles} /><span>{name}</span></div>
                <div className="rowLayout-read"><input type="checkbox" /></div>
                <div className="rowLayout-write"><input type="checkbox" /></div>
            </RowLayout >
            {!isCountryToggled ? null : areas}
        </div>
    )
}

export default Country;