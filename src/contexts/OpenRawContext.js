import { createContext } from "react";
import {  openedAll } from '../seeds/data';
import useToggleRaws from "../hooks/useToggleRaws";

export const OpenedLocationsContext = createContext();
export const ToggleLocationsContext = createContext();

export function OpenedLocationsProvider(props) {
    const [areLocationsOpened, toggleLocations] = useToggleRaws(openedAll)
    return (
        < OpenedLocationsContext.Provider value={areLocationsOpened}>
            <ToggleLocationsContext.Provider value={toggleLocations}>
                {props.children}
            </ToggleLocationsContext.Provider>
        </OpenedLocationsContext.Provider>

    )
}

