const initState = {
    order: 'asc',
    orderBy: 'firstName',
    page: 0,
    rowsPerPage: 10,
};

const reducer = (state=initState, action) => {
    switch (action.type) {
        case 'CHANGE_SORT_RULE':
            return {
                ...state,
                order: action.order,
                orderBy: action.orderBy
            };
        case 'CHANGE_PAGE':
            return {
                ...state,
                page: action.page
            }
        case 'CHANGE_ROWS_PER_PAGE':
            return {
                ...state,
                rowsPerPage: action.rowsPerPage
            }
        default:
            return state;
    }
};

export default reducer;