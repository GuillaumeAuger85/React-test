import { useContext } from 'react';
import { OpenedLocationsContext } from './contexts/OpenRawContext';

import RowLayout from "./RowLayout";
import Sector from "./Sector";

function Area({ areaData, name, id }) {
    const areLocationsOpened = useContext(OpenedLocationsContext);
    const isAreaOpened = areLocationsOpened.find(a => id === a.id).opened;
    const arrowStyles = isAreaOpened ? { transform: 'rotate(45deg)', marginLeft: '1.2rem' } : { transform: 'rotate(-45deg)', marginLeft: '1.2rem' }
    const sectors = areaData.map(a => <Sector
        key={a.id}
        id={a.id}
        name={a.name}
        sectorData={a.children}
    />)
    return (
        <div>
            <RowLayout
                id={id} name={name}
                arrowStyles={arrowStyles}
                key={`${name}${id}`}
            />
            {isAreaOpened && sectors}
        </div>
    )
}

export default Area;




