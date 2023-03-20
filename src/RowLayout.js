import React, { useContext} from 'react';
import { ToggleLocationsContext } from './contexts/OpenRawContext';

import Checkbox from './Checkbox';
import Arrow from "./Arrow";

import './styles/rowLayout.css';

function RowLayout({ id, name, arrowStyles }) {
    const toggleLocations = useContext(ToggleLocationsContext);
    const handleToggle = () => toggleLocations(id);
    return (
        <div className="rowLayout" >
            <div className="rowLayout-localisation" onClick={handleToggle}>
                <Arrow arrowStyles={arrowStyles} key={`${name}${id}`} />
                <span>{name}</span>
            </div>
            <div className="rowLayout-read">
                <Checkbox action={'read'} id={id} key={`read${id}`} />
            </div>
            <div className="rowLayout-write">
                <Checkbox action={'write'} id={id} key={`write${id}`} />
            </div>
        </div>
    )
}


export default  RowLayout;