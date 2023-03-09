import RowLayout from "./RowLayout";
import Arrow from "./Arrow";
import Area from "./Area";

function Country({ name, area, sector, shop, toggleCountry, isCountryToggled, toggleArea, toggleSector, isAreaToggled, isSectorToggled }) {
    const arrowStyles = isCountryToggled? {transform:'rotate(45deg)'} : {transform:'rotate(-45deg)'}
    return (
        <div>
            <RowLayout >
                <div className="rowLayout-localisation" onClick={toggleCountry}><Arrow const arrowStyles={arrowStyles}/><span>{name}</span></div>
                <div className="rowLayout-read"><input type="checkbox" /></div>
                <div className="rowLayout-write"><input type="checkbox" /></div>
            </RowLayout >
            {!isCountryToggled ? null :
                <Area
                    area={area}
                    sector={sector}
                    shop={shop}
                    isAreaToggled={isAreaToggled}
                    toggleArea={toggleArea}
                    isSectorToggled={isSectorToggled}
                    toggleSector={toggleSector}

                />
            }
        </div>
    )
}

export default Country;