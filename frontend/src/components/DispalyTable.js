import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from './UI/EditIcon';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const DisplayTable = (props) => {
    const { classes } = props;
    console.log(props);
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                        <TableCell>FirstName</TableCell>
                        <TableCell>LastName</TableCell>
                        <TableCell>Sex</TableCell>
                        <TableCell numeric>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <Button variant="contained" color="primary" className={classes.button}>
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
                                <TableCell>{row.firstName}</TableCell>
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell>{row.sex}</TableCell>
                                <TableCell numeric>{row.age}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

DisplayTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayTable);
