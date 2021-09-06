import React from "react"

export const Operators = ({updateCalc, clearCalc, deleteCalc}) => {
    return (
        <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('+')}>+</button>

            <button onClick={clearCalc}>DEL</button>
            <button onClick={deleteCalc}>AC</button>
        </div>
    )
}