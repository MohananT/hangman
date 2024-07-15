import { useEffect, useState, useCallback } from "react";
import HangManDrawing from "../components/HangMan/HangManDrawing";
import useFileHook from "../hooks/useFileHook";
import { useTextStore } from "../store/store";
import "./HomeContainer.css"



export const HomeContainer = () => {
    let [text, setText] = useState('Welcome to Hangman');
    const [toggle, setToggle] = useState(false);
    const setSource = useTextStore(state => state.updateSource);
    const count = useTextStore(state => state.wrongCount);
    const setCounter = useTextStore(state => state.setCounter);
    const [sourceArr, setSourceArr] = useState<string[]>([]);
    const { data } = useFileHook('english.txt');

    useEffect(() => {
        // things to do for new game
        if (count > 5) {
            setToggle(toggle => !toggle)
            setCounter();
            setText('Game Over')
        }
        text = 'Welcome to Hangman'
    }, [count])
    useEffect(() => {
        (() => {
            if (data) {
                const split = data.split("\n");
                // console.log(split);
                setSourceArr(split);
            }
        })();
    }, [data])
    const handleNewGame = () => {
        setToggle(true)
        const index = Math.floor(Math.random() * sourceArr.length)
        setSource(sourceArr[index].toUpperCase())
    }

    if (toggle) {
        return (
            <div className="container-home">
                {/* <button onClick={handleNewGame}>New game</button> */}
                <HangManDrawing />
            </div>
        );
    } else {
        return (
            <div>
                <div className="container-sec-home">
                    <div className="mb-10 text-2xl font-bold">{text}</div>
                    <button className="button" onClick={handleNewGame}>New game</button>
                    {/* <HangManDrawing /> */}
                </div>
            </div>

        );
    }

};


