import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
// import classnames from 'classnames';

class Logout extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.logoutUser(this.props.history);
        }
    }
    render() {
        return (
            <div>Bye</div>
        )
    }
}

Logout.propTypes = {
    loginUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { logoutUser })(Logout)
