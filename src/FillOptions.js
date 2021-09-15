import React from "react";

export default function FillOptions() {
    const optionNumbers = [];
    for (let i = 0; i<=100; i = i + 1) {
    optionNumbers.push(i)
    }

    return (
        optionNumbers.map(optionNumber => {
            return <option value={optionNumber}>{optionNumber}</option>
        })
    )
}