import "./App.css";
import ExtraButton from "./ExtraButton";
import React from "react";

const { useState } = React;

const Button = ({ increment, onClickFunction }) => {
    const handleClick = () => {
        onClickFunction(increment);
    };
    return <button onClick={handleClick}>+{increment}</button>;
};

function App() {
    const [count, setCount] = useState(0);
    // let count = 0;
    const incrementCount = (increment) => {
        setCount(count + increment);
        // stuff
    };
    return (
        <div>
            <Button increment={1} onClickFunction={incrementCount} />
            <Button increment={10} onClickFunction={incrementCount} />
            <Button increment={100} onClickFunction={incrementCount} />
            <Button increment={1000} onClickFunction={incrementCount} />
            <span className="count_display">{count}</span>
            <div>
                <ExtraButton arbitrary="Extra Big Button" />
            </div>
        </div>
    );
}

export default App;
