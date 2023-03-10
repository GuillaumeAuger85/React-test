import RowLayout from "./RowLayout";
import Sector from "./Sector";
import Arrow from "./Arrow";

function Area({ areaData, name, toggleArea, areAreasToggled, toggleSector, areSectorsToggled, id }) {
    const isAreaToggled = areAreasToggled.filter(a => id === a.id)[0].toggled;
    const arrowStyles = isAreaToggled ? { transform: 'rotate(45deg)', marginLeft: '1.2rem' } : { transform: 'rotate(-45deg)', marginLeft: '1.2rem' }
    const handleToggle = () => toggleArea(id);
    const sectors = areaData.map(a => <Sector
        key={a.id}
        id={a.id}
        name={a.name}
        sectorData={a.children}
        toggleSector={toggleSector}
        areSectorsToggled={areSectorsToggled}
    />)
    return (
        <div>
            <RowLayout >
                <div className="rowLayout-localisation" onClick={handleToggle}><Arrow arrowStyles={arrowStyles} /><span>{name}</span></div>
                <div className="rowLayout-read"><input type="checkbox" /></div>
                <div className="rowLayout-write"><input type="checkbox" /></div>
            </RowLayout >
            {!isAreaToggled ? null : sectors}
        </div>
    )
}

export default Area;




