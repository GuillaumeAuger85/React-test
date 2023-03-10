import RowLayout from "./RowLayout";
import Arrow from "./Arrow";
import Shop from "./Shop";

const Sector = ({ name, sectorData, toggleSector, areSectorsToggled, id }) => {
    const isSectorToggled = areSectorsToggled.filter(a => id === a.id)[0].toggled;
    const arrowStyles = areSectorsToggled ? { transform: 'rotate(45deg)', marginLeft: '1.8rem' } : { transform: 'rotate(-45deg)', marginLeft: '1.8rem' }
    const handleToggle = () => {
        toggleSector(id)
    }
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
            {!isSectorToggled ? null : shops}
        </div>
    )
}

export default Sector;