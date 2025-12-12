import { useEffect } from "react";
import {useCount} from "./use-count.js";

export function Count() {
    const {value, increase, decrease} = useCount({minValue: 0, maxValue: 5});

    useEffect(() => {
        increase()
    }, [increase])

    useEffect(() => {
        console.log(value);
        return () => console.log('unmount');
    }, [value])
    return (
        <div>
            <button onClick={increase}>+</button>
            {value}
            <button onClick={decrease}>-</button>
        </div>
    );
};
