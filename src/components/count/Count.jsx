import {useState} from "react";

export function Count() {
    const [value, setValue] = useState(0);

    const increase = () => setValue(value + 1);
    const decrease = () => setValue(value - 1);
    return (
        <div>
            <button onClick={increase}>+</button>
            {value}
            <button onClick={decrease}>-</button>
        </div>
    );
};
