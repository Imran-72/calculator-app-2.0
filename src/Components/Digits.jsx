import React from "react"

export const Digits = ({createDigits, updateCalc, calculate}) => {
    return (
        <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calculate}>=</button>
        </div>
    )
}