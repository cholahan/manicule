import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

import SiteContainer from '../SiteContainer'


export default class Networks extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SiteContainer>
        <Grid
          className="home"
        >
          <Row>
            <Col>
              <Row>
                <Col sm={8}>
                  <div className="index-text">
                    <h1>Network Visualizaitons</h1>
                    This index is divided by novel, replicating Richardson&apos;s index, which can be found <a href="moralsentiments/reader/penn/408" target="_blank">here</a>.
                    <h2>Pamela</h2>
                    <script src="./build/sigma.min.js"></script>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </SiteContainer>
    )
  }
}
