import "./button.css";
import { useState } from "react";

const DinamicButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = (value) => {
        if (value === "increase") {
            setCount(count + 1);
        } else {
            count > 0 ? setCount(count - 1) : setCount(0);
        }
    };

    return (
        <div className="container">
            <div className="buttonsBox">
                <button onClick={() => handleClick("decrease")}>-</button>
                <button>i was Clicked {count} times</button>
                <button onClick={() => handleClick("increase")}>+</button>
            </div>
        </div>
    );
};

export default DinamicButton;
