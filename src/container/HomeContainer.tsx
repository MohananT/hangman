import { useEffect, useState, useCallback } from "react";
import HangManDrawing from "../components/HangMan/HangManDrawing";
import useFileHook from "../hooks/useFileHook";
import { useTextStore } from "../store/store";
import "./HomeContainer.css"



export const HomeContainer = () => {
    const [toggle, setToggle] = useState(false);
    const setSource = useTextStore(state => state.updateSource);
    const [sourceArr, setSourceArr] = useState<string[]>([]);
    const { data } = useFileHook('english.txt');

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
            <div className="container-home">
                <button className="button" onClick={handleNewGame}>New game</button>
                {/* <HangManDrawing /> */}
            </div>
        );
    }

};


