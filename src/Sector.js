import { useContext } from 'react';
import { OpenedLocationsContext } from './contexts/OpenRawContext';

import RowLayout from "./RowLayout";
import Shop from "./Shop";


const Sector = ({ name, sectorData, id }) => {
    const areLocationsOpened = useContext(OpenedLocationsContext);
    const isSectorOpened = areLocationsOpened.find(a => id === a.id).opened;
    const arrowStyles = isSectorOpened ? { transform: 'rotate(45deg)', marginLeft: '1.8rem' } : { transform: 'rotate(-45deg)', marginLeft: '1.8rem' };
    const shops = sectorData.map(s => <Shop
        key={s.id}
        id={s.id}
        name={s.name}
        shopData={s.children}
    />)
    return (
        <div>
            <RowLayout
                id={id} name={name}
                arrowStyles={arrowStyles}
                key={`${name}${id}`}
            />
            {isSectorOpened && shops}
        </div>
    )
}

export default Sector;