import { useTextStore } from "../store/store"

export default function Text() {
    const text = useTextStore(state => state.sourceText)
    const guessedText = useTextStore(state => state.targetText)
    console.log(text)
    // const guessedText = ['T']
    return (
        <div className="text-container">
            {text.split('').map((letter: string) => (
                <span style={{ borderBottom: ".1em solid #cdcdcd" }}>
                    <span style={{ visibility: guessedText.includes(letter) ? "visible" : "hidden" }}>{letter}</span>
                </span>
            ))}
        </div>
    )
}