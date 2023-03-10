import { useState } from "react";


export default function useToggleInArray(initialVals) {
    const [state, setState] = useState(initialVals);
    const toggle = (id) => {
       setState(prevSt => prevSt.map(st => st.id ===id?{id:st.id, toggled: !st.toggled}: st));
    };
    return [state, toggle];
}

