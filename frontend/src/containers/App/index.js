import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SearchBar from "../../components/SeacrhBar";
import TableDisplay from "../../components/TableDisplay";
import Grid from "@material-ui/core/Grid/Grid";
import {BrowserRouter, Route} from 'react-router-dom';
import SimpleList from "../../components/Form";

class App extends Component {
    componentDidMount() {
        this.props.getUser();
    }
    render() {
        const { isFetching, data, err } = this.props.users;
        if (isFetching) {
            return <div>Loading the data....</div>;
        }
        if (err) {
            return <div>This was an error to get the data.</div>;
        }
        if (data.length === 0) {
            return <div>Loading the data....</div>;
        }
        return (
            <div>
                <SearchBar/>
                <BrowserRouter>
                    <div>
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
                                <TableDisplay
                                    users={data}
                                    page={this.props.page}
                                    changeSortRule={this.props.changeSortRule}
                                    changePage={this.props.changePage}
                                    changeRowsPerPage={this.props.changeRowsPerPage}
                                />
                            </Grid>
                        }/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      users: state.users,
      page: state.page,
      profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
      getUser: () => {
          dispatch(actions.getData());
      },
      createUser: (newUser) => {
          dispatch(actions.createData(newUser));
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
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
