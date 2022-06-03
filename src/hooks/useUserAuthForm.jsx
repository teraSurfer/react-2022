import { useMemo, useReducer } from "react";
import { validate } from "../util/validator";

const ValidationModel = {
    email: [
        {   
            validation: 'type',
            type: 'string',
            error: 'Email is not string'
        },
        {
            validation: 'maxLength',
            maxLength: 20,
            error: 'Length greater than 20'
        },
        {
            validation: 'regex',
            regex: '',
            error: 'Does not match email format'
        }
    ]
}

const initialState = {
    email: {
        initialValue: '',
        value: '',
        errors: []
    },
    password: {
        initialValue: '',
        value: '',
        errors: []
    },
    confirmPassword: {
        initialValue: '',
        value: '',
        errors: []
    },
    name: {
        initialValue: '',
        value: '',
        errors: []
    },
    dob: {
        initialValue:  new Date(Date.now()),
        value: new Date(Date.now()),
        errors: []
    }
};

const UserActions = {
    editUserEmail: 'editUserEmail',
    editPassword: 'editPassword',
    editConfirmPassword: 'editConfirmPassword',
    editUserName: 'editUserName',
    editDob: 'editDob'
}

const formReducer = (state, action) => {
    switch(action.type) {
        case UserActions.editUserEmail:
            const errors = validate(ValidationModel.email, action.email);
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.email,
                    errors,
                }
            };
        case UserActions.editUserName:
            return {
                ...state,
                name: {
                    ...state.name,
                    value: action.name,
                }
            };
        case UserActions.editPassword:
            return {
                ...state,
                password: {
                    ...state.password,
                    value: action.password
                }
            };
        case UserActions.editConfirmPassword:
            return {
                ...state,
                confirmPassword: {
                    ...state.confirmPassword,
                    value: action.confirmPassword
                },
            };
        case UserActions.editDob:
            return {
                ...state,
                dob: {
                    ...state.dob,
                    value: action.dob
                }
            }
        default:
            return state;
    }
}

const getActions = (dispatch) => {
    const updateUserEmail = (email) => dispatch({type: UserActions.editUserEmail, email});
    const updateUserName = (name) => dispatch({type: UserActions.editUserName, name});
    const updatePassword = (password) => dispatch({type: UserActions.editPassword, password});
    const updateConfirmPassword = (confirmPassword) => dispatch({type: UserActions.editConfirmPassword, confirmPassword});
    const updateDob = (dob) => dispatch({type: UserActions.editDob, dob});

    return {
        updateUserEmail,
        updateUserName,
        updatePassword,
        updateConfirmPassword,
        updateDob,
    }
}

export const useUserAuthForm = () => {
    const [formState, dispatch] = useReducer(formReducer, initialState);

    const actions = useMemo(() => getActions(dispatch), []);

    return {formState, actions};
};

