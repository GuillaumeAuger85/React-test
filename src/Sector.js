import { useContext } from 'react';
import RowLayout from "./RowLayout";
import Arrow from "./Arrow";
import Shop from "./Shop";
import{ OpenSectorContext} from './contexts/OpenRawContext';

const Sector = ({ name, sectorData, id }) => {
    const {areSectorsOpened, toggleOpenSector} = useContext(OpenSectorContext);
    const isSectorOpened = areSectorsOpened.filter(a => id === a.id)[0].toggled;
    const arrowStyles = areSectorsOpened ? { transform: 'rotate(45deg)', marginLeft: '1.8rem' } : { transform: 'rotate(-45deg)', marginLeft: '1.8rem' }
    const handleToggle = () =>toggleOpenSector(id);
 const shops = sectorData.map(s => <Shop
        key={s.id}
        id={s.id}
        name={s.name}
        shopData={s.children}
    />)
    return (
        <div>
            <RowLayout >
                <div className="rowLayout-localisation" onClick={handleToggle}><Arrow arrowStyles={arrowStyles} /><span>{name}</span></div>
                <div className="rowLayout-read"><input type="checkbox" /></div>
                <div className="rowLayout-write"><input type="checkbox" /></div>
            </RowLayout >
            {!isSectorOpened ? null : shops}
        </div>
    )
}

export default Sector;