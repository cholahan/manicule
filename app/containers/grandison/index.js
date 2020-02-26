import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

import SiteContainer from '../SiteContainer'


export default class Grandison extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SiteContainer>
        <Grid
          className="home"
        >
          <Row>
            <Col>
              <Row>
                <Col sm={6}>
                  <div className="index-text">
                    <h1>Index by Novel</h1>
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
