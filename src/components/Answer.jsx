import { useState } from "react"

function Answer({ onNext }) {
    return (
        <>
            <h1>回答する</h1>
            <button type="button" onClick={onNext}>
                この色で進む
            </button>
        </>
    )
}

export default Answer;