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
                <Col sm={10}>
                  <div className="index-text">
                    <h1>Sir Charles Grandison</h1>
                    <p><i>The History of Sir Charles Grandison</i> was  published in 1753. The following is a digitized version of the second edition, published in 1755 and sold by C. Hitch and L. Hawes, J. and J. Rivington, Andrew Millar, R. and J. Dodsley, J. Leake, and R. Main. All external links in this digital project link to this edition. Rights: Public Domain, <a href="https://www.hathitrust.org/access_use#pd-google"target="_blank">Google-digitized</a>. Find the catalog record <a href="https://catalog.hathitrust.org/Record/100216237"target="_blank">here</a>.</p>
                    <p><iframe width="450" height="700" title="v.1" src="https://hdl.handle.net/2027/osu.32435027142181?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.2" src="https://hdl.handle.net/2027/nyp.33433112043314?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.3" src="https://hdl.handle.net/2027/osu.32435027142165?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.4" src="https://hdl.handle.net/2027/osu.32435027142157?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.5" src="https://hdl.handle.net/2027/osu.32435027142140?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.6" src="https://hdl.handle.net/2027/osu.32435027142132?urlappend=%3Bui=embed"></iframe></p>
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
