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
                <Col sm={10}>
                  <div className="index-text">
                    <h1>Pamela</h1>
                    <p><i>Pamela: Or, Virtue Rewarded</i> was first published in 1740. The following is a digitized version of the third edition, published in 1741 by C. Rivington and J. Osborn in London. All external links in this digital project link to this edition. Rights: Public Domain, <a href="https://www.hathitrust.org/access_use#pd-google"target="_blank">Google-digitized</a>. Find the catalog records for volume 1 and 2 <a href="https://catalog.hathitrust.org/Record/100024481"target="_blank">here</a> and volume 3 and 4 <a href="https://catalog.hathitrust.org/Record/100024502"target="_blank">here</a></p>
                    <p><iframe width="450" height="700" title="v.1" src="https://hdl.handle.net/2027/uc1.31175035201717?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.2" src="https://hdl.handle.net/2027/uc1.31175035201725?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.3" src="https://hdl.handle.net/2027/uc1.31175035201774?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.4" src="https://hdl.handle.net/2027/uc1.31175035201832?urlappend=%3Bui=embed"></iframe></p>
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
