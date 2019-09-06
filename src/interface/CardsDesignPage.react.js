// @flow

import * as React from "react";

import { Page, Grid, Card, Button, Form, Dimmer } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";
import all_data from '../utils/data'
function CardsDesignPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content>
        <Grid.Row>
          {all_data.map(e => (<Grid.Col lg={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title>{e.name}</Card.Title>
                <Card.Options>
                  <Form.Switch value="1" className="m-0" />
                </Card.Options>
              </Card.Header>
              <Card.Body>
                {e.description}
              </Card.Body>
            </Card>
          </Grid.Col>))}
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default CardsDesignPage;
