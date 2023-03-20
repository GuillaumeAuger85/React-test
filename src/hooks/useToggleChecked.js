import { useState } from 'react';
import { getFullFamilyLineIds, getAllDescendantIds } from '../lib/helpers';


const useToggleChecked = (initialVal) => {
    const [state, setState] = useState(initialVal);
    const toggle = (e, id) => {
        const node = state.find(st => st.id === id);
        const countries = state.filter(st => st.model_code === 'COUNTRY');
        if (e.target.name === 'read') {
            if (!node.checkedRead) {
                const idsToToggle = getFullFamilyLineIds(countries, node);
                setState(prevState => prevState.map(st => idsToToggle.has(st.id) ? { ...st, checkedRead: true } : st));
            } else {
                const idsToToggle = getFullFamilyLineIds(countries, node);
                setState(prevState => prevState.map(st => idsToToggle.has(st.id) ? { ...st, checkedRead: false } : st));
            }
        } else {
            if (!node.checkedWrite) {
                const idsToToggle = getFullFamilyLineIds(countries, node);
                setState(prevState => prevState.map(st => idsToToggle.has(st.id) ? { ...st, checkedWrite: true } : st));
            } else {
                const idsToToggle = getFullFamilyLineIds(countries, node);
                setState(prevState => prevState.map(st => idsToToggle.has(st.id) ? { ...st, checkedWrite: false } : st));
            }
        }
    };
    return [state, toggle];
};

export default useToggleChecked;




