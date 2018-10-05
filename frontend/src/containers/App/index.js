import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SearchBar from "../../components/SeacrhBar";
import TableDisplay from "../../components/TableDisplay";
import Grid from "@material-ui/core/Grid/Grid";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SimpleList from "../../components/Form";

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
      searchUser: state.searchUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
      getUsers: () => {
          dispatch(actions.getData());
      },
      createUser: (newUser) => {
          dispatch(actions.createData(newUser));
      },
      changeSearchWord: (text) => {
          dispatch(actions.changeSearchWord(text));
      },
      changeSortRule: (order, orderBy) => {
          dispatch(actions.changeSortRule(order, orderBy));
      },
      changePage: (page) => {
          dispatch(actions.changePage(page));
      },
      changeRowsPerPage: (rowsPerPage) => {
          dispatch(actions.changeRowsPerPage(rowsPerPage));
      },
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
      changeToShowSearch: () => {
          dispatch({type: "CHANGE_TO_SHOW_SEARCH"});
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
