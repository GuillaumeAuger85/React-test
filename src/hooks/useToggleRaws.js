import { useState } from "react";


export default function useToggleRaws(initialVals) {
    const [state, setState] = useState(initialVals);
    const toggle = (id) => {
        setState(prevSt => prevSt.map(st => st.id === id ? { id: st.id, opened: !st.opened } : st));
    };
    return [state, toggle];
}

