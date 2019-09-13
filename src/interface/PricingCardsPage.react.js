// @flow

import * as React from "react";
import { Grid, Page, PricingCard } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import CheckoutForm from './CheckoutForm.react';
import { Elements, StripeProvider } from 'react-stripe-elements';

function PricingCardsPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content title="Billing Plan">
        <Grid.Row justifyContent="center">
          <h1>You seem to be out of credits, Select a new Plan to extend your credits.</h1>
        </Grid.Row>
        <Grid.Row cards justifyContent="around" alignItems="center">
          <Grid.Col sm={6} lg={3}>
            <PricingCard active>
              <PricingCard.Category>{"Standard"}</PricingCard.Category>
              <PricingCard.Price>{"$9.99"} </PricingCard.Price>
              <PricingCard.AttributeList>
                <PricingCard.AttributeItem>
                  <strong>1 </strong>
                  {"Report"}
                </PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button active> {"Choose plan"} </PricingCard.Button>
            </PricingCard>
          </Grid.Col>

          <Grid.Col sm={6} lg={3}>
            <PricingCard>
              <PricingCard.Category>{"Advanced"}</PricingCard.Category>
              <PricingCard.Price>{"$19.99"} </PricingCard.Price>
              <PricingCard.AttributeList>
                <PricingCard.AttributeItem>
                  <strong>2 </strong>
                  {"Reports"}
                </PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button> {"Choose plan"} </PricingCard.Button>
            </PricingCard>
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <PricingCard>
              <PricingCard.Category>{"Professional"}</PricingCard.Category>
              <PricingCard.Price>{"$199.99"} </PricingCard.Price>
              <PricingCard.AttributeList>
                <PricingCard.AttributeItem>
                  <strong>100 </strong>
                  {"Reports"}
                </PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button> {"Choose plan"} </PricingCard.Button>
            </PricingCard>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row justifyContent="center">
          <Grid.Col xs={12} md={6}>
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
              <>
                <h1>Finalize Your Purchase</h1>
                <Elements>
                  <CheckoutForm />
                </Elements>
              </>
            </StripeProvider>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default PricingCardsPage;
