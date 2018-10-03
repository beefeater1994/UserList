import React, { Component } from 'react';
import { connect } from 'react-redux';

import getUserRequest from '../../actions';
import SearchBar from "../../components/SeacrhBar";
import DisplayTable from "../../components/DispalyTable";
import {BrowserRouter, Route} from 'react-router-dom';
import MaterialUiForm from "../../components/Form";

class App extends Component {
    constructor(props) {
        super(props);

    }
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { isFetching, data, err } = this.props.users;
    if (isFetching) {
      return <div>Loading the data....</div>;
    } else {
      if (err) {
        return <div>This was an error to get the data.</div>;
      } else {
        return (
            <div>
                <SearchBar/>
                <BrowserRouter>
                    <Route exact={true} path='/' render={()=> <DisplayTable users={data}/>}/>
                </BrowserRouter>
            </div>
        );
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(getUserRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
