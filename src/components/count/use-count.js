import {useCallback, useState} from "react";

export const useCount = ({minValue, maxValue}) => {
    const [value, setValue] = useState({value: 0});

    const increase = useCallback(
        () => {
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
        }, [value]
    ) ;
    const decrease = useCallback(
        () => {
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
        }, [value]
    );

    return {
        value: value.value,
        increase,
        decrease
    };
}
