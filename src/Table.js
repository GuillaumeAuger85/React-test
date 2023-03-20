import {OpenedLocationsProvider } from './contexts/OpenRawContext';
import { CheckBoxProvider } from './contexts/CheckBoxContext';
import { data } from './seeds/data';
import Summary from './Summary';
import Country from './country';
import './styles/table.css';


function Table() {
    return (
        <CheckBoxProvider>
            <OpenedLocationsProvider>
                <div className='table'>
                    <div className='table-firstRow'>
                        <div></div>
                        <div className="table-firstRow-read">Voir les brouillons</div>
                        <div className="table-firstRow-write">Modifier les brouillons</div>
                    </div>
                    {data.map(d => <Country
                        key={d.id}
                        id={d.id}
                        name={d.name}
                        countryData={d.children}
                    />)}
                     <Summary/>
                </div>
            </OpenedLocationsProvider>
        </CheckBoxProvider>
    )
}

export default Table;


