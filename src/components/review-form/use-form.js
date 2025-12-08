import {useReducer} from "react";

const DEFAULT_FORM_VALUE = {
    name: '',
    address: '',
    review: ''
}

const SET_NAME_ACTION_TYPE = 'setName';
const SET_ADDRESS_ACTION_TYPE = 'setAddress';
const SET_REVIEW_ACTION_TYPE = 'setReview';

export const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_NAME_ACTION_TYPE: return {
            ...DEFAULT_FORM_VALUE,
            name: payload
        };
        case SET_ADDRESS_ACTION_TYPE: return {
            ...state,
            address: payload
        };
        case SET_REVIEW_ACTION_TYPE: return {
            ...state,
            review: payload
        };
        default: return state;
    }
};

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
    const {name, address, review} = form;

    const setName = value => {
        dispatch({type: SET_NAME_ACTION_TYPE, payload: value});
    };

    const setAddress = value => {
        dispatch({type: SET_ADDRESS_ACTION_TYPE, payload: value});
    };

    const setReview = value => {
        dispatch({type: SET_REVIEW_ACTION_TYPE, payload: value});
    };

    return {
        name,
        address,
        review,
        setName,
        setAddress,
        setReview
    };
}
