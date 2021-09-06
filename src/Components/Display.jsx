import React from "react"

export const Display = ({result, calc}) => {
    return (
        <div className="display">
            {result ? <span>({result}) </span> : ''}
            {calc || '0'}
        </div>
    )
}