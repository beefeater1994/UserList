import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SearchBar from "../../components/SeacrhBar";
import TableDisplay from "../../components/TableDisplay";
import Grid from "@material-ui/core/Grid/Grid";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SimpleList from "../../components/Form";
import EditForm from "../../components/EditForm";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/createUser' render={() =>
                            <Grid container justify="center" alignItems="center" width='100%'>
                                <SimpleList
                                    profile={this.props.profile}
                                    changeFirstName={this.props.changeFirstName}
                                    changeLastName={this.props.changeLastName}
                                    changeSex={this.props.changeSex}
                                    changeAge={this.props.changeAge}
                                    changePassword={this.props.changePassword}
                                    changeRepeatPassword={this.props.changeRepeatPassword}
                                    createUser={this.props.createUser}
                                    clearProfileState={this.props.clearProfileState}
                                />
                            </Grid>
                        }/>
                        <Route exact={true} path="/" render={()=>
                            <Grid container justify="center" alignItems="center" width='92%'>
                                <SearchBar
                                    changeSearchWord={this.props.changeSearchWord}
                                    searchUser={this.props.searchUser}
                                    changeToShowSearch={this.props.changeToShowSearch}
                                />
                                <TableDisplay
                                    searchUser={this.props.searchUser}
                                    users={this.props.users}
                                    getUsers={this.props.getUsers}
                                    page={this.props.page}
                                    changeSortRule={this.props.changeSortRule}
                                    changePage={this.props.changePage}
                                    changeRowsPerPage={this.props.changeRowsPerPage}
                                    objectToState={this.props.objectToState}
                                    deleteUser={this.props.deleteUser}
                                />
                            </Grid>
                        }/>
                        <Route path='/editUser' render={() =>
                            <Grid container justify="center" alignItems="center" width='92%'>
                                <EditForm
                                    profile={this.props.profile}
                                    changeFirstName={this.props.changeFirstName}
                                    changeLastName={this.props.changeLastName}
                                    changeSex={this.props.changeSex}
                                    changeAge={this.props.changeAge}
                                    changePassword={this.props.changePassword}
                                    changeRepeatPassword={this.props.changeRepeatPassword}
                                    clearProfileState={this.props.clearProfileState}
                                    updateUser={this.props.updateUser}
                                />
                            </Grid>
                        }/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
  return {
      users: state.users,
      page: state.page,
      profile: state.profile,
      searchUser: state.searchUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      // Action to get all the users
      getUsers: () => {
          dispatch(actions.getData());
      },
      // Action to create a user
      createUser: (newUser) => {
          dispatch(actions.createData(newUser));
      },
      // Action to change the search word
      changeSearchWord: (text) => {
          dispatch(actions.changeSearchWord(text));
      },
      // Action determine to show all the users or search user
      changeToShowSearch: () => {
          dispatch({type: "CHANGE_TO_SHOW_SEARCH"});
      },
      // Actions about pagination
      changeSortRule: (order, orderBy) => {
          dispatch(actions.changeSortRule(order, orderBy));
      },
      changePage: (page) => {
          dispatch(actions.changePage(page));
      },
      changeRowsPerPage: (rowsPerPage) => {
          dispatch(actions.changeRowsPerPage(rowsPerPage));
      },
      // Actions about create new user
      changeFirstName: (text) => {
          dispatch(actions.changeFirstName(text));
      },
      changeLastName: (text) => {
          dispatch(actions.changeLastName(text));
      },
      changeSex: (text) => {
          dispatch(actions.changeSex(text));
      },
      changeAge: (text) => {
          dispatch(actions.changeAge(text));
      },
      changePassword: (text) => {
          dispatch(actions.changePassword(text));
      },
      changeRepeatPassword: (text) => {
          dispatch(actions.changeRepeatPassword(text));
      },
      clearProfileState: () => {
          dispatch(actions.clearProfileState());
      },
      objectToState: (obj) => {
          dispatch(actions.objectToState(obj));
      },
      // Action to delete user
      deleteUser: (id) => {
          dispatch(actions.deleteUser(id));
      },
      // Actions to update user
      updateUser: (id, obj) => {
          dispatch(actions.updateData(id, obj));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
