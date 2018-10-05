import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import EnhancedTableHead from './TableHead';
import EditIcon from "./UI/EditIcon";
import Button from "@material-ui/core/Button/Button";
import DeleteIcon from "@material-ui/icons/Delete";

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const styles = theme => ({
    root: {
        width: '90%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class EnhancedTable extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.props.page.orderBy === property && this.props.page.order === 'desc') {
            order = 'asc';
        }
        this.props.changeSortRule(order, orderBy);
    };

    handleChangePage = (event, page) => {
        this.props.changePage(page);
    };

    handleChangeRowsPerPage = event => {
        this.props.changeRowsPerPage(event.target.value);
    };

    editHandler = (el) => {
        console.log(el);
    };

    render() {
        const { classes } = this.props;
        const { order, orderBy, rowsPerPage, page } = this.props.page;
        const users = this.props.users;
        const searchUser = this.props.searchUser;
        let data = users.data;

        if (users.isFetching) {
            return <div>Loading the data....</div>;
        }
        if (users.err) {
            return <div>This was an error to get the data.</div>;
        }
        if (data.length === 0) {
            return <div>Loading the data....</div>;
        }
        if (searchUser.showSearch) {
            data = users.data.filter(el => el.firstName === searchUser.searchWord);
        }

        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={this.handleRequestSort}
                            rowCount={data.length}
                        />
                        <TableBody>
                            {stableSort(data, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(n => {
                                    return (
                                        <TableRow
                                            hover
                                            key={n._id}
                                        >
                                            <TableCell>
                                                <Button variant="contained" color="primary" className={classes.button} onClick={() => {
                                                    console.log(n);
                                                }}>
                                                    <EditIcon />
                                                    EDIT
                                                </Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="primary" className={classes.button}>
                                                    <DeleteIcon className={classes.rightIcon} />
                                                    Delete
                                                </Button>
                                            </TableCell>
                                            <TableCell>{n.firstName}</TableCell>
                                            <TableCell>{n.lastName}</TableCell>
                                            <TableCell>{n.sex}</TableCell>
                                            <TableCell numeric>{n.age}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
