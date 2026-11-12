import { useState } from "react"
import './ColorPicker.css'


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
            <h2>回答カラー</h2>
            <div className="Color_Box" style={{ backgroundColor: color }} />
        </>
    )
}

export default ColorPicker