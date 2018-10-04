import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SearchBar from "../../components/SeacrhBar";
import DisplayTable from "../../components/DispalyTable";
import {BrowserRouter, Route} from 'react-router-dom';
import Foot from "../../components/Foot";

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUser();
    }
    selectPage = (num) => {
        this.props.selectPage(num);
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
        let dataArr = [], pageArr = [];
        let i = 0, counter = 0;
        while (i < data.length) {
            counter++;
            pageArr.push(counter);
            dataArr.push(data.slice(i, i + 10));
            i += 10;
        }
        let canbeLeft = this.props.page.num === 1 ? false : true;
        let canbeRight = this.props.page.num === counter ? false : true;
        return (
            <div>
                <SearchBar/>
                <BrowserRouter>
                    <Route exact={true} path='/' render={()=> <DisplayTable users={dataArr[this.props.page.num - 1]}/>}/>
                </BrowserRouter>
                <Foot canbeLeft={canbeLeft}
                      canbeRight={canbeRight}
                      leftPage={this.props.leftPage}
                      rightPage={this.props.rightPage}
                      pageArr={pageArr}
                      selectPage={this.selectPage}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      users: state.users,
      page: state.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
      getUser: () => {
          dispatch(actions.getData());
      },
      leftPage: () => {
          dispatch({type: 'LeftPage'});
      },
      rightPage: () => {
          dispatch({type: 'RightPage'});
      },
      selectPage: (num) => {
          dispatch(actions.selectPage(num));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
