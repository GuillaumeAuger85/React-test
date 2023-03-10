import { useContext } from 'react';
import RowLayout from "./RowLayout";
import Sector from "./Sector";
import Arrow from "./Arrow";
import { OpenAreaContext } from './contexts/OpenRawContext';

function Area({ areaData, name, id }) {
    const {areAreasOpened, toggleOpenArea} = useContext(OpenAreaContext);
    const isAreaOpened = areAreasOpened.filter(a => id === a.id)[0].toggled;
    const arrowStyles = isAreaOpened ? { transform: 'rotate(45deg)', marginLeft: '1.2rem' } : { transform: 'rotate(-45deg)', marginLeft: '1.2rem' }
    const handleToggle = () => toggleOpenArea(id);
    const sectors = areaData.map(a => <Sector
        key={a.id}
        id={a.id}
        name={a.name}
        sectorData={a.children}
    />)
    return (
        <div>
            <RowLayout >
                <div className="rowLayout-localisation" onClick={handleToggle}><Arrow arrowStyles={arrowStyles} /><span>{name}</span></div>
                <div className="rowLayout-read"><input type="checkbox" /></div>
                <div className="rowLayout-write"><input type="checkbox" /></div>
            </RowLayout >
            {!isAreaOpened ? null : sectors}
        </div>
    )
}

export default Area;




