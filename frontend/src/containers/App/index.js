import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SearchBar from "../../components/SeacrhBar";
import TableDisplay from "../../components/TableDisplay";
import Grid from "@material-ui/core/Grid/Grid";

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
                <Grid container justify="center" alignItems="center" width='92%'>
                    <TableDisplay
                        users={data}
                        page={this.props.page}
                        changeSortRule={this.props.changeSortRule}
                        changePage={this.props.changePage}
                        changeRowsPerPage={this.props.changeRowsPerPage}
                    />
                </Grid>
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
      changeSortRule: (order, orderBy) => {
          dispatch(actions.changeSortRule(order, orderBy));
      },
      changePage: (page) => {
          dispatch(actions.changePage(page));
      },
      changeRowsPerPage: (rowsPerPage) => {
          dispatch(actions.changeRowsPerPage(rowsPerPage));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
