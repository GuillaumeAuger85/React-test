import RowLayout from "./RowLayout";
import { useContext } from 'react';
import Arrow from "./Arrow";
import Area from "./Area";
import { OpenCountryContext} from './contexts/OpenRawContext';

function Country({ countryData, name, id }) {
    const { areCountriesOpened, toggleOpenCountry} = useContext(OpenCountryContext);
    const isCountryOpened = areCountriesOpened.filter(a => id === a.id)[0].toggled;
    const arrowStyles = isCountryOpened? { transform: 'rotate(45deg)' } : { transform: 'rotate(-45deg)' };
    const handleToggle = () => toggleOpenCountry(id);
    const areas = countryData.map(c => <Area
        key={c.id}
        id={c.id}
        name={c.name}
        areaData={c.children}
    />)
    return (
        <div>
            <RowLayout >
                <div className="rowLayout-localisation" onClick={handleToggle}><Arrow const arrowStyles={arrowStyles} /><span>{name}</span></div>
                <div className="rowLayout-read"><input type="checkbox" /></div>
                <div className="rowLayout-write"><input type="checkbox" /></div>
            </RowLayout >
            {!isCountryOpened ? null : areas}
        </div>
    )
}

export default Country;