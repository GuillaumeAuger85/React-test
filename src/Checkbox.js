import React, { useContext, memo } from "react";
import { CheckBoxContext, ToggleCheckboxContext } from "./contexts/CheckBoxContext";

function Checkbox({ action, id}) {
    const areAllInputsChecked = useContext(CheckBoxContext);
    const setInputs = useContext(ToggleCheckboxContext);
    const isInputChecked =action ==='read'? areAllInputsChecked.find(i => i.id === id).checkedRead:areAllInputsChecked.find(i => i.id === id).checkedWrite;
    const handleInputs = (e) => {
        setInputs(e, id) ;
    };
    return (
        <input name={action} type="checkbox" checked={isInputChecked} onChange={handleInputs} />
    )
}

export default memo(Checkbox);