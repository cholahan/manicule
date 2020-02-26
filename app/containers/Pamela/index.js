import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

import SiteContainer from '../SiteContainer'


export default class Pamela extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SiteContainer>
        <Grid
          className="home"
        >
          <Row>
            <Col>
              <Row>
                <div className="index-text">
                  <h1>Pamela</h1>
                  <p><i>Pamela: Or, Virtue Rewarded</i> was first published in 1740. The following is a digitized version of the third edition, published in 1741 by C. Rivington and J. Osborn in London. All external links in this digital project link to this edition. Rights: Public Domain, <a href="https://www.hathitrust.org/access_use#pd-google"target="_blank">Google-digitized</a>.</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Grid>
      </SiteContainer>
    )
  }
}
