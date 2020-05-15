import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

import SiteContainer from '../SiteContainer'


export default class Clarissa extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
                    <h1>Clarissa</h1>
                    <p><i>Clarissa; Or, The History of a Young Lady</i> was  published in 1748. The following is a digitized version of the fourth edition, published in 1751 and sold by J. Osborn, A. Millar, J. and J. Rivington, and J. Leake. All external links in this digital project link to this edition. Rights: Public Domain, <a href="https://www.hathitrust.org/access_use#pd-google"target="_blank">Google-digitized</a>. Find the catalog record <a href="https://catalog.hathitrust.org/Record/100218315?type%5B%5D=all&lookfor%5B%5D=clarissa%20richardson&sort=yearup&ft=ft"target="_blank">here</a>.</p>
                    <p><iframe width="450" height="700" title="v.1" src="https://hdl.handle.net/2027/osu.32435024779720?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.2" src="https://hdl.handle.net/2027/osu.32435024779712?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.3" src="https://hdl.handle.net/2027/osu.32435024779704?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.4" src="https://hdl.handle.net/2027/osu.32435024779696?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.5" src="https://hdl.handle.net/2027/osu.32435024779688?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.6" src="https://hdl.handle.net/2027/osu.32435024779670?urlappend=%3Bui=embed"></iframe></p>
                    <p><iframe width="450" height="700" title="v.7" src="https://hdl.handle.net/2027/osu.32435024779662?urlappend=%3Bui=embed"></iframe></p>
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
