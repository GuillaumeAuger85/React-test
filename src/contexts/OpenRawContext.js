import Sectorisation from '../seeds-json/Sectorisation.json';
import { createContext } from "react";
import useToggleInArray from "../hooks/useToggleInArray";


const data = Sectorisation.data.roots;
const countries = data.map(d => d);
const areas = data.map(d => d.children)[0];
const sectors = areas.map(a => a.children);
const openedCountries = countries.map(c => [c.id, false]).map(([id, toggled]) => ({ id, toggled }));
const openedAreas = data.map(d => d.children.map(c => [c.id, false])).map(aid => aid.map(([id, toggled]) => ({ id, toggled })))[0];
const openedSectors = sectors.map(s => s.map(s => [s.id, false])).map(a => a.map(([id, toggled]) => ({ id, toggled }))).flat();

export const OpenCountryContext = createContext();
export const OpenAreaContext = createContext();
export const OpenSectorContext = createContext();

export function OpenCountryProvider(props) {
    const [areCountriesOpened, toggleOpenCountry] = useToggleInArray(openedCountries);
    const [areAreasOpened, toggleOpenArea] = useToggleInArray(openedAreas);
    const [areSectorsOpened, toggleOpenSector] = useToggleInArray(openedSectors);
    return (
        <OpenCountryContext.Provider value={{ areCountriesOpened, toggleOpenCountry }}>
            <OpenAreaContext.Provider value={{ areAreasOpened, toggleOpenArea }}>
                <OpenSectorContext.Provider value={{ areSectorsOpened, toggleOpenSector }}>
                    {props.children}
                </OpenSectorContext.Provider>
            </OpenAreaContext.Provider>
        </OpenCountryContext.Provider>
    )
}