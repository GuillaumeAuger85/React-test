import RowLayout from "./RowLayout";
import Arrow from "./Arrow";
import Shop from "./Shop";

const Sector = ({ sector, shop, toggleSector, isSectorToggled }) => {
    const arrowStyles = isSectorToggled ? { transform: 'rotate(45deg)', marginLeft: '1.8rem' } : { transform: 'rotate(-45deg)', marginLeft: '1.8rem' }
    return (
        <div>
            <RowLayout >
                <div className="rowLayout-localisation" onClick={toggleSector}><Arrow arrowStyles={arrowStyles} /><span>{sector}</span></div>
                <div className="rowLayout-read"><input type="checkbox" /></div>
                <div className="rowLayout-write"><input type="checkbox" /></div>
            </RowLayout >
            {!isSectorToggled ? null :
                <Shop
                    shop={shop}
                />
            }
        </div>
    )
}

export default Sector;