import { useContext } from 'react';
import { CheckBoxContext } from './contexts/CheckBoxContext';
import { getHighestNodeIds } from './lib/helpers';
import './styles/summary.css'

function Summary() {
    const areAllInputsChecked = useContext(CheckBoxContext);
    const allCheckedInputRead = areAllInputsChecked.filter(i => !!i.checkedRead);
    const allCheckedInputWrite = areAllInputsChecked.filter(i => !!i.checkedWrite);
    const shops = areAllInputsChecked.filter(i => i.model_code === 'SHOP');
    const readSummaryShop = shops.filter(shop => shop.checkedRead === true).map(s => s.id);
    const writeSummaryShop = shops.filter(shop => shop.checkedWrite === true).map(s => s.id);
    const highestReadNodeIds = getHighestNodeIds(allCheckedInputRead, areAllInputsChecked);
    const highestWriteNodeIds = getHighestNodeIds(allCheckedInputWrite, areAllInputsChecked);
    const lowestNodeSummary = {
        'perm_0_Voir les brouillons': readSummaryShop,
        'perm_1_Modifier les brouillons': writeSummaryShop
    };
    const highestNodeSummary = {
        'perm_0_Voir les brouillons': highestReadNodeIds,
        'perm_1_Modifier les brouillons': highestWriteNodeIds
    };
    const srtingifiedLowestNodeSummary = JSON.stringify(lowestNodeSummary, null, 4);
    const stringifiedHighestNodeSummary = JSON.stringify(highestNodeSummary, null, 4);

    return (
        <div className="Summary" >
            <h1 className="Summary-title">Récapitulatif</h1>
            <div className="Summary-ids">
                <div className='Summary-shops'>
                    <h3 >Tous les ids de secteurs autorisés</h3>
                    <pre>
                        <code>
                            {srtingifiedLowestNodeSummary}
                        </code>
                    </pre>
                </div>
                <div className='Summary-nodes'>
                    <h3>Ids des noeuds de plus haut niveau</h3>
                    <pre>
                        <code>
                            {stringifiedHighestNodeSummary}
                        </code>
                    </pre>
                </div>
            </div>

        </div>
    )
};

export default Summary;