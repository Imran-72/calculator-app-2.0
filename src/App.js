import React, {useState} from 'react';
import "./index.css"
import {Display} from "./Components/Display";
import {Operators} from "./Components/Operators";
import {Digits} from "./Components/Digits";

const App = () => {
    const [calc, setCalc] = useState('')
    const [result, setResult] = useState('')


    const ops = ['/', '*', '-', '+', '.']

    const updateCalc = value => {
        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1)
            )
        ) {
            return
        }
        setCalc(calc + value)
        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString())
        }
    }
    const calculate = () => {
        setCalc(eval(calc.toString()))
    }
    const clearCalc = () => {
        if (calc === '') {
            return
        }

        const value = calc.slice(0, -1)

        setCalc(value)
    }

    const deleteCalc = () => {
        if (calc) {
            return setCalc('')
        }
    }
    const createDigits = () => {
        const digits = []

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button
                    onClick={() => updateCalc(i.toString())}
                    key={i}>
                    {i}
                </button>
            )
        }
        return digits
    }

    return (
        <div className="App">
            <div className="calculator">
                <Display result={result}
                         calc={calc}/>
                <Operators updateCalc={updateCalc}
                           clearCalc={clearCalc}
                           deleteCalc={deleteCalc}/>
                <Digits
                    createDigits={createDigits}
                    updateCalc={updateCalc}
                    calculate={calculate}/>
            </div>
        </div>
    )
}


export default App;