import { useTextStore } from "../../store/store";
import "./HangMan.css"

const HEAD = (
    <div style={{
        height: "40px",
        width: "40px",
        borderRadius: "100%",
        position: "absolute",
        top: "40px",
        left: "289px",
        border: "4px solid #cdcdcd"
    }}>
    </div>
);

const BODY = (
    <div style={{
        height: "130px",
        width: "10px",
        backgroundColor: "#cdcdcd",
        position: "absolute",
        top: "85px",
        left: "308px"
    }}>

    </div>
)

const RIGHT_ARM = (
    <div style={{
        height: "4px",
        width: "100px",
        backgroundColor: "#cdcdcd",
        position: "absolute",
        top: "122px",
        left: "310px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}></div>
);

const LEFT_ARM = (
    <div style={{
        height: "4px",
        width: "100px",
        backgroundColor: "#cdcdcd",
        position: "absolute",
        top: "120px",
        left: "212px",
        rotate: "30deg",
        transformOrigin: "right top"
    }}></div>
);

const LEFT_LEG = (
    <div style={{
        height: "4px",
        width: "100px",
        backgroundColor: "#cdcdcd",
        position: "absolute",
        top: "210px",
        left: "212px",
        rotate: "-30deg",
        transformOrigin: "right top"
    }}></div>
);

const RIGHT_LEG = (
    <div style={{
        height: "4px",
        width: "100px",
        backgroundColor: "#cdcdcd",
        position: "absolute",
        top: "210px",
        left: "310px",
        rotate: "30deg",
        transformOrigin: "left bottom"
    }}></div>
);
const arr = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export default function HangManDrawing() {
    const count = useTextStore(state => state.wrongCount)
    const elements = [];
    for (let i = 0; i < count; i++) {
        elements.push(arr[i])
    }
    console.log(count)
    return (
        <div className="hangman-container">
            {elements.map((item) => {
                return item
            })}
            <div className="top-to-bottom"></div>
            <div className="top-line"></div>
            <div className="horizontal"></div>
            <div className="bottom-line"></div>
        </div>
    )
}