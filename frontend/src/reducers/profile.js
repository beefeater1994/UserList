const initState = {
    firstName: "",
    lastName: "",
    sex: "",
    age: "",
    password: "",
    repeatPassword: ""
};

const reducer = (state=initState, action) => {
    switch (action.type) {
        case "CHANGE_FIRST_NAME":
            return {
                ...state,
                firstName: action.text
            };
        case "CHANGE_LAST_NAME":
            return {
                ...state,
                lastName: action.text
            };
        case "CHANGE_SEX":
            return {
                ...state,
                sex: action.text
            };
        case "CHANGE_AGE":
            return {
                ...state,
                age: Number(action.text)
            };
        case "CHANGE_PASSWORD":
            return {
                ...state,
                password: action.text
            };
        case "CHANGE_REPEAT_PASSWORD":
            return {
                ...state,
                repeatPassword: action.text
            };
        case "CLEAR_PROFILE_STATE":
            return initState;
        case "OBJECT_TO_STATE":
            return action.preload;
        default:
            return state;
    }
};

export default reducer;