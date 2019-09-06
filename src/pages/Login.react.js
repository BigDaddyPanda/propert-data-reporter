import { Formik } from "formik";
import React, { Component } from 'react';
import { LoginPage as TablerLoginPage } from "tabler-react";

export default class SimpleLogin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        return (
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validate={values => {
                    // same as above, but feel free to move this into a class method now.
                    let errors = {};
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors.email = "Invalid email address";
                    }
                    return errors;
                }}
                onSubmit={(
                    values,
                    { setSubmitting, setErrors /* setValues and other goodies */ }
                ) => {
                    this.handleSubmit(values);
                }}
                render={({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                        <TablerLoginPage
                            onSubmit={handleSubmit}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values}
                            errors={errors}
                            touched={touched}
                        />
                    )}
            />
        )
    }
}
