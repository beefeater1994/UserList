import axios from 'axios';
function requestStart() {
  return {
    type: 'USER_FETCH_START'
  };
}
function requestSuccess(response) {
  return {
    type: 'USER_FETCH_SUCCESS',
    data: response.data
  };
}
function requestFail(error) {
  return {
    type: 'USER_FETCH_FAIL',
    error
  };
}
export const getData = () => {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .get('/users')
      .then(response => {
        dispatch(requestSuccess(response));
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
};

export const changeSortRule = (order, orderBy) => {
    return {
        type: 'CHANGE_SORT_RULE',
        order,
        orderBy
    }
};

export const changePage = (page) => {
    return {
        type: 'CHANGE_PAGE',
        page
    }
};

export const changeRowsPerPage = (rowsPerPage) => {
    return {
        type: 'CHANGE_ROWS_PER_PAGE',
        rowsPerPage
    }
};

