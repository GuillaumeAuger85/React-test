import Country from './country';
import Sectorisation from './seeds-json/Sectorisation.json';
import './table.css';
import { OpenCountryProvider } from './contexts/OpenRawContext';

const data = Sectorisation.data.roots;

function Table() {
return (
        <OpenCountryProvider>
            <div className='table'>
                <div className='table-firstRow'>
                    <div></div>
                    <div className="table-firstRow-read">Read</div>
                    <div className="table-firstRow-write">Write</div>
                </div>
                {data.map(d => <Country
                    key={d.id}
                    id={d.id}
                    name={d.name}
                    countryData={d.children}
                />)}
            </div>
        </OpenCountryProvider>
    )
}

export default Table;