import { useEffect } from "react";
import { useTextStore } from "../store/store";

export default function Keyboard() {
    const updateKey = useTextStore(state => state.updateTarget);
    const updateCount = useTextStore(state => state.updateCount);
    const text = useTextStore(state => state.sourceText);
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const updateAlg = (key) => {
        if (text.includes(key)) {
            updateKey(key);
        } else {
            updateCount()
        }
    }

    const handleKey = (item: string) => {
        // console.log(item);
        updateAlg(item.toUpperCase());
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log(event.key.toUpperCase())
            updateAlg(event.key.toUpperCase());
        }

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [])

    return (
        <div className="keyboard">
            {keys.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {row.map((item) => (
                        <div className="key" key={item} onClick={() => handleKey(item)}>{item}</div>
                    ))}
                </div>
            ))}
        </div>
    )
}