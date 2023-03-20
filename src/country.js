import { useContext } from 'react';
import { OpenedLocationsContext } from './contexts/OpenRawContext';

import RowLayout from "./RowLayout";
import Area from "./Area";

function Country({ countryData, name, id }) {
    const areLocationsOpened = useContext(OpenedLocationsContext);
    const isCountryOpened = areLocationsOpened.find(a => id === a.id).opened;
    const arrowStyles = isCountryOpened ? { transform: 'rotate(45deg)' } : { transform: 'rotate(-45deg)' };
    const areas = countryData.map(c => <Area
        key={c.id}
        id={c.id}
        name={c.name}
        areaData={c.children}
    />);
    return (
        <div>
            <RowLayout
                id={id}
                name={name}
                arrowStyles={arrowStyles}
                key={`${name}${id}`}
            />
            {isCountryOpened && areas}
        </div>
    )
}

export default Country;