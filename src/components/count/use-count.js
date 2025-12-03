import {useState} from "react";

export const useCount = () => {
    const [value, setValue] = useState({value: 0});

    const increase = () => {
        setValue((current) => {
            return {
                value: current.value + 1
            };
        })
    };
    const decrease = () => {
        setValue((current) => {
            return {
                value: current.value - 1
            };
        })
    };

    return {
        value: value.value,
        increase,
        decrease
    };
}
