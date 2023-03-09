import RowLayout from "./RowLayout";
import Sector from "./Sector";
import Arrow from "./Arrow";

function Area({ area, sector, shop, toggleArea, isAreaToggled, toggleSector, isSectorToggled }) {
    const arrowStyles = isAreaToggled? {transform:'rotate(45deg)',marginLeft: '1.2rem'} : {transform:'rotate(-45deg)',marginLeft: '1.2rem'}
    return (
        <div>
            <RowLayout >
                <div className="rowLayout-localisation" onClick={toggleArea}><Arrow arrowStyles={arrowStyles}/><span>{area}</span></div>
                <div className="rowLayout-read"><input type="checkbox" /></div>
                <div className="rowLayout-write"><input type="checkbox" /></div>
            </RowLayout >
            {!isAreaToggled ? null :
                <Sector
                    sector={sector}
                    shop={shop}
                    toggleSector={toggleSector}
                    isSectorToggled={isSectorToggled}
                />
            }
        </div>
    )
}

export default Area;




