// Don't edit this page; edit about.html at the top of the project
import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import SiteContainer from '../SiteContainer'

export default class MoralSentiments extends React.Component {

  render() {
    return (
      <SiteContainer>
        <Grid>
          <Row>
            <Col>
              <div className="about"></div>
            </Col>
          </Row>
        </Grid>
      </SiteContainer>
    )
  }
}
