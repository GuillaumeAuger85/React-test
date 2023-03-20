import { createContext } from "react";
import { checkedInputsAll } from '../seeds/data';
import useToggleChecked from '../hooks/useToggleChecked';

export const CheckBoxContext = createContext();
export const ToggleCheckboxContext = createContext();

export function CheckBoxProvider(props) {
    const [areAllInputsChecked, setInputs] = useToggleChecked(checkedInputsAll);
    return (
        <CheckBoxContext.Provider value={ areAllInputsChecked }>
            <ToggleCheckboxContext.Provider value ={setInputs}>
                {props.children}
            </ToggleCheckboxContext.Provider>
        </CheckBoxContext.Provider>
    )
};

