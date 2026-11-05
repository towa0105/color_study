import { useState } from "react"


function ColorPicker() {
    const [color, setColor] = useState('#000000')
    return (
        <>
            <label>色を選択
                <input type="color" className="pick_color"
                    onChange={(event) => setColor(event.currentTarget.value)}
                />
            </label>
            <span>{color}</span>
        </>
    )
}

export default ColorPicker