import React from 'react';
import Pagination from "react-bootstrap/es/Pagination";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

const styles = theme => ({
    root: {
        width: '92%',
        marginTop: theme.spacing.unit * 10,
    },
    table: {
        minWidth: 700,
    },
});

const Foot  = (props) => {
    const { classes } = props;
    return (
        <Row className="show-grid">
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
                <Pagination className={classes.root}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Col>
            <Col xsHidden md={4}>
            </Col>
        </Row>

    );
}

Foot.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Foot);