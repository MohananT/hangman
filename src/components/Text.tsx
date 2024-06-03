

export default function Text() {
    const text = "TEXT"
    return (
        <div className="text-container">
            {text.split('').map((letter) => (
                <span>{letter}</span>
            ))}
        </div>
    )
}