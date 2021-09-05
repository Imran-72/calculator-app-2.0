import React, {useState} from "react"

const numArr = ['AC', '.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


const Calculator = () => {
    const [currentValue, setCurrentValue] = useState()
    let value = []
    const buttonValue = (btnValue) => {
        value = btnValue
    }
    console.log(value)
    // const inputValue = (value) => {
    //     const inpValue = buttonValue()
    // }
    return <>
        <input type="text" value={value}/>
        <div>
            {
                numArr.map(calcNum => (
                    <div key={calcNum}>
                        <button onClick={() => buttonValue(calcNum)}>{calcNum}</button>
                    </div>
                ))
            }
        </div>
    </>
}

export default Calculator