
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import React from 'react'


import { Link } from 'react-router-dom'
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap'


import SiteContainer from '../SiteContainer'


export default class Tours extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
                    <h1>Tours</h1>
                    <p>Begin with the introduction or jump to a specific tour topic. Once the book browser is open, click on the bookmark icon to start the tour.</p>
                    <ListGroup>
                      <ListGroupItem> <Link to="/reader/penn/3">
                        <Glyphicon glyph="bookmark" />1. Introduction</Link>
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem> <Link to="/reader/penn/97">
                        <Glyphicon glyph="bookmark" />2. Organization: <i>Sentiments</i> as reference tool</Link>
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem> <Link to="/reader/penn/230">
                        <Glyphicon glyph="bookmark" />3. Quotation, Misquotation, Summary: Linking back to the novels</Link>
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem> <Link to="/reader/penn/85">
                        <Glyphicon glyph="bookmark" />4. The Form of the Maxim</Link>
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                      <ListGroupItem> <Link to="/reader/penn/53">
                        <Glyphicon glyph="bookmark" />5. Beyond the Maxim</Link>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </Col>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroupItem> <Link to="/reader/penn/3">
                      <Glyphicon glyph="book" /> Full tour</Link>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </SiteContainer>
    )
  }
}
