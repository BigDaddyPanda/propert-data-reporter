import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Button, Form, Grid } from 'tabler-react';
class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = { complete: false };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        let { token } = await this.props.stripe.createToken({ name: "Name" });
        let response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        });

        if (response.ok) this.setState({ complete: true });
    }


    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;

        return (
            <Form.FieldSet>
                <Form.Group label="Credit or debit card">
                    <Grid.Row gutters="xs">
                        <Grid.Col>
                            <CardElement />
                        </Grid.Col>
                    </Grid.Row>
                </Form.Group>
                <Button.List align="right">
                    <Button onClick={this.submit} color="primary">Confirm</Button>
                </Button.List>
            </Form.FieldSet>
            // <div className="checkout">
            //     <p>Would you like to complete the purchase?</p>
            //     <CardElement />
            //     <Button color="primary">Button</Button>
            // </div>
        );
    }
}

export default injectStripe(CheckoutForm);
