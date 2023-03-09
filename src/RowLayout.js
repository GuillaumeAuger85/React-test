import React from "react";
import './rowLayout.css'

function RowLayout(props) {
    return (
        <div className="rowLayout" >
            {props.children}
        </div>
    )
}

export default RowLayout;