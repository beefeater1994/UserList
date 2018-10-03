const initialState = {num: 1};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LeftPage':
            return {
                num: state.num - 1
            };
        case 'RightPage':
            return {
                num: state.num + 1
            }
        default:
            return state
    }
}

export default reducer;