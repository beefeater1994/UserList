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

export const createData = (newUser) => {
    return (dispatch, store) => {
        dispatch(requestStart());
        axios
            .post('/users', newUser)
            .then(response => {
                //dispatch(requestSuccess(response));
            })
            .catch(err => {
                dispatch(requestFail(err));
            });
    };
};

export const updateData = (id, newUser) => {
    return (dispatch, store) => {
        dispatch(requestStart());
        axios
            .put(`/users/${id}`, newUser)
            .then(response => {
                //dispatch(requestSuccess(response));
            })
            .catch(err => {
                dispatch(requestFail(err));
            });
    };
};

export const deleteUser = (id) => {
    return (dispatch, store) => {
        axios
            .delete('/users/'+ id)
            .then(response => {
                dispatch(getData());
            })
            .catch(err => {
                dispatch(requestFail(err));
            });
    }
}

export const changeSearchWord = (text) => {
    return {
        type: "CHANGE_SEARCH_WORD",
        text
    }
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

export const changeFirstName = (text) => {
    return {
        type: "CHANGE_FIRST_NAME",
        text
    }
};
export const changeLastName = (text) => {
    return {
        type: "CHANGE_LAST_NAME",
        text
    }
};
export const changeSex = (text) => {
    return {
        type: "CHANGE_SEX",
        text
    }
};
export const changeAge = (text) => {
    return {
        type: "CHANGE_AGE",
        text
    }
};
export const changePassword = (text) => {
    return {
        type: "CHANGE_PASSWORD",
        text
    }
};
export const changeRepeatPassword = (text) => {
    return {
        type: "CHANGE_REPEAT_PASSWORD",
        text
    }
};

export const clearProfileState = () => {
    return {
        type: "CLEAR_PROFILE_STATE"
    }
};

export const objectToState = (obj) => {
    return {
        type: "OBJECT_TO_STATE",
        preload: obj
    }
}



