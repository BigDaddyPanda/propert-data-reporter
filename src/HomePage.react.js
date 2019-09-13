// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from "react";
import { Grid, Page, ProgressCard, StampCard } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";




function Home() {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Grid.Row cards={true}>
          <Grid.Col sm={6}>
            <ProgressCard
              header="New feedback"
              content="62"
              progressColor="red"
              progressWidth={28}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <ProgressCard
              header="Today profit"
              content="$652"
              progressColor="green"
              progressWidth={84}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <ProgressCard
              header="Users online"
              content="76"
              progressColor="yellow"
              progressWidth={34}
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="blue"
              icon="dollar-sign"
              header={
                <a href="#">
                  132 <small>Sales</small>
                </a>
              }
              footer={"12 waiting payments"}
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper >
  );
}

export default Home;
