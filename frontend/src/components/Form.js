import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {withRouter} from 'react-router-dom';
import {compose} from "recompose";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 560,
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
});

function SimpleList(props) {
    const { classes } = props;

    const changeHandler = (event) => {
        const text = event.target.value;
        const name = event.target.name;
        if (name === "firstName") {
            props.changeFirstName(text);
        } else if (name === "lastName") {
            props.changeLastName(text);
        } else if (name === 'sex') {
            props.changeSex(text);
        } else if (name === "age") {
            props.changeAge(text);
        } else if (name === "password") {
            props.changePassword(text);
        } else if (name === "repeatPassword") {
            props.changeRepeatPassword(text);
        }
    }

    const submitHandler = () => {
        const p = props.profile;
        let err = [], count = 0;
        if (p.firstName === "") {
            err.push("First Name is empty!");
            count++;
        }
        if (p.lastName === "") {
            err.push("Last Name is empty!");
            count++;
        }
        if (p.sex === "") {
            err.push("Sex is empty!");
            count++;
        }
        if (isNaN(p.age)) {
            err.push("Age format is not correct!");
            count++;
        }
        if (p.password === "") {
            err.push("Password is empty!");
            count++;
        }
        if (p.repeatPassword === "" || p.repeatPassword !== p.password) {
            err.push("Repeat password is not correct!");
            count++;
        }
        if (count !== 0) {
            err.forEach((el) => {
                alert(el);
            });
        } else {
            props.createUser(props.profile);
            props.clearProfileState();
            props.history.push('/');
        }
    };
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button>
                    <TextField
                        id="standard-dense"
                        label="First Name"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                        name="firstName"
                        onChange={changeHandler}
                    />
                </ListItem>
                <Divider />
                <ListItem button>
                    <TextField
                        id="standard-dense"
                        label="Last Name"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                        name="lastName"
                        onChange={changeHandler}
                    />
                </ListItem>
                <Divider />
                <ListItem button>
                    <TextField
                        id="standard-dense"
                        label="Sex"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                        name="sex"
                        onChange={changeHandler}
                    />
                </ListItem>
                <Divider />
                <ListItem button>
                    <TextField
                        id="standard-dense"
                        label="Age"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                        name="age"
                        onChange={changeHandler}
                    />
                </ListItem>
                <Divider />
                <ListItem button>
                    <TextField
                        id="standard-dense"
                        label="Password"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                        name="password"
                        onChange={changeHandler}
                    />
                </ListItem>
                <Divider />
                <ListItem button>
                    <TextField
                        id="standard-dense"
                        label="Repeat Password"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                        name="repeatPassword"
                        onChange={changeHandler}
                    />
                </ListItem>
                <Button variant="outlined" color="primary" className={classes.button} onClick={submitHandler}>
                    Submit
                </Button>
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
//export default withRouter(SimpleList);
