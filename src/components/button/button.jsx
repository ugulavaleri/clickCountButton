import "./button.css";
import { useState } from "react";

const DinamicButton = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <div className="buttonsBox">
                <button
                    onClick={
                        count > 0
                            ? () => setCount(count - 1)
                            : () => setCount(0)
                    }
                >
                    -
                </button>
                <button>i was Clicked {count} times</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
};

export default DinamicButton;
