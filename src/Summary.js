import { useContext } from 'react';
import { CheckBoxContext } from './contexts/CheckBoxContext';
import { getHighestNodeIds } from './lib/helpers';
import './styles/summary.css'

function Summary() {
    const areAllInputsChecked = useContext(CheckBoxContext);
    const allCheckedInputRead = areAllInputsChecked.filter(i => !!i.checkedRead);
    const allCheckedInputWrite = areAllInputsChecked.filter(i => !!i.checkedWrite);
    const shops = areAllInputsChecked.filter(i => i.model_code === 'SHOP');
    const readSummaryShop = shops.filter(shop => shop.checkedRead === true).map(s => <li className="Summary-li-ids" key={s.id}>"{s.id}",</li>);
    const writeSummaryShop = shops.filter(shop => shop.checkedWrite === true).map(s => <li className="Summary-li-ids" key={s.id}>"{s.id}",</li>);
    const highestReadNodeIds = getHighestNodeIds(allCheckedInputRead).map(id => <li className="Summary-li-ids" key={id}>"{id}",</li>);
    const highestWriteNodeIds = getHighestNodeIds(allCheckedInputWrite).map(id => <li className="Summary-li-ids" key={id}>"{id}",</li>);
    return (
        <div className="Summary" >
            <h1 className="Summary-title">Récapitulatif</h1>
            <div className="Summary-ids">
                <div className='Summary-shops'>
                    <h3 >Tous les ids de secteurs autorisés</h3>
                    <ul>
                        <li className='Summary-first-li'>{String.fromCodePoint(0x007B)}</li>
                        <li className='Summary-read'>"perm_0_Voir les brouillons": {String.fromCodePoint(0x005B)}</li>
                        {readSummaryShop}
                        <li className='Summary-read'>{String.fromCodePoint(0x005D)},</li>
                        <li className='Summary-write'>"perm_1_Modifier les brouillons": {String.fromCodePoint(0x005B)}</li>
                        {writeSummaryShop}
                        <li className='Summary-read'>{String.fromCodePoint(0x005D)},</li>
                        <li className='Summary-last-li'>{String.fromCodePoint(0x007D)}</li>
                    </ul>
                </div>
                <div className='Summary-nodes'>
                    <h3>Ids des noeuds de plus haut niveau</h3>
                    <ul>
                        <li className='Summary-first-li'>{String.fromCodePoint(0x007B)}</li>
                        <li className='Summary-read'>"perm_0_Voir les brouillons": {String.fromCodePoint(0x005B)}</li>
                        {highestReadNodeIds}
                        <li className='Summary-read'>{String.fromCodePoint(0x005D)},</li>
                        <li className='Summary-write'>"perm_1_Modifier les brouillons": {String.fromCodePoint(0x005B)}</li>
                        {highestWriteNodeIds}
                        <li className='Summary-read'>{String.fromCodePoint(0x005D)},</li>
                        <li className='Summary-last-li'>{String.fromCodePoint(0x007D)}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default Summary;