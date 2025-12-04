import {useState} from "react";

export const useCount = ({minValue, maxValue}) => {
    const [value, setValue] = useState({value: 0});

    const increase = () => {
        setValue((current) => {
            if (current.value === maxValue) {
                return {
                    value: current.value
                };
            }
            return {
                value: current.value + 1
            };
        })
    };
    const decrease = () => {
        setValue((current) => {
            if (current.value === minValue) {
                return {
                    value: current.value
                };
            }
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
