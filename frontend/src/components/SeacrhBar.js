import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button/Button";
import RollingPage from "./RollingPage";

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }
    handleLeftPage = () => {
        if (!this.props.canbeLeft) return;
        this.props.leftPage();
    }
    handleRightPage = () => {
        if (!this.props.canbeRight) return;
        this.props.rightPage();
        console.log("ssss");
    }
    handleChange = (event) => {
        this.setState({inputValue: event.target.value});
    };
    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="title" color="inherit" noWrap>
                            User List
                        </Typography>
                        <div className={classes.search} onSubmit={this.handleSubmit}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <Input
                                placeholder="Search…"
                                disableUnderline
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                value={this.state.inputValue}
                                onChange={this.handleChange}
                            />
                        </div>
                        <Button variant="contained" color="primary" className={classes.button}>
                            SORT
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleLeftPage}>
                            PREV PAGE
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleRightPage}>
                            NEXT PAGE
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button}>
                            CREATE NEW USER
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
