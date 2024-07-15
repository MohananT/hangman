
export default function ClueContainer() {
    const clues = [1, 2, 3];
    const handleClick = () => {

    }
    return (
        <div className="hangman-border">
            <div className="text-2xl font-bold mb-3">Clues</div>
            {clues.map((item) => {
                return <button key={item} className="border border-slate-500 border-solid rounded-full p-3 m-2 shadow-lg ease-in duration-100 
                 hover:border-slate-200 
                active:p-2"
                    onClick={handleClick}>{item}</button>
            })}
            <div className="ml-3 mt-2">Under Construction ...</div>
        </div>
    )
}