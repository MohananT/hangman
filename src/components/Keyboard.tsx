import { useEffect } from "react";

export default function Keyboard() {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    const handleKey = (item: string) => {
        console.log(item);
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log(event.key.toUpperCase())
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