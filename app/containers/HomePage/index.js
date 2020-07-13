
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap'
import SiteContainer from '../SiteContainer'
import MapView from '../../components/map-view'
import { setEdition } from '../../reducers/edition'

import im1 from '../../images/titlepage.png'
import im2 from '../../images/img_table.png'

export class HomePage extends React.Component {
  constructor(props) {
    super(props)
    props.setEdition(props.edition)
  }

  render() {
    return (
      <SiteContainer>
        <Grid
          className="home"
          style={{
            backgroundSize: 'cover',
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col sm={8}>
                  <div className="home-text">
                    <h1>Richardson&apos;s Moral Sentiments</h1>
                    <h2>A Collection Of the Moral and Instructive Sentiments, Maxims, Cautions, and Reflexions, Contained in the Histories of Pamela, Clarissa, and Sir Charles Grandison.</h2>

                    <img src={im1} width="260" alt="Title page" style={{ float: 'right' }} /> <p><i>“Why, Sir, if you were to read Richardson for the story, your impatience would be so much fretted that you would hang yourself. But you must read him for the sentiment, and consider the story as only giving occasion to the sentiment.”</i></p>
                    <p>So declared Samuel Johnson of Samuel Richardson’s long epistolary novels, a problem that was solved, one might say, by Richardson’s publication of a collection of sentiments from his three novels – <a href="/clarissa"target="_blank">Clarissa</a>, or, the History of a Young Lady; <a href="/clarissa"target="_blank">Pamela</a>, or, Virtue Rewarded; and The History of <a href="/clarissa"target="_blank">Sir Charles Grandison</a> – in a separate volume in 1755.</p>

                    <img src={im2} width="260" alt="drawing of the Man of Law" style={{ float: 'left' }} /><p>This site is a digital edition of that book, <i>A Collection of Moral Sentiments</i>. The volume, which was compiled, edited, and published by Richardson, is comprised of maxims, advice, and morals extracted from Richardson&apos;s novels.
                    Richardson described the collection as “the pith and marrow of nineteen volumes”: the very essense of &nbsp;
                    <span
                      style={{
                        backgroundColor: '#2550a1',
                      }}
                    >Pamela
                    </span>,&nbsp;
                    <span
                      style={{
                        backgroundColor: '#658539',
                      }}
                    >Clarissa
                    </span>, and&nbsp;
                    <span
                      style={{
                        backgroundColor: '#963f39',
                      }}
                    >Sir Charles Grandison
                    </span>.</p>
                    <p>
                    This digital edition is reproduced from a copy held at the Kislak Center for Special Collections, Rare Book Collection, at the University of Pennsylvania (<a href="https://franklin.library.upenn.edu/catalog/FRANKLIN_99750333503681#franklin-availability"target="_blank">PR3662 .H5</a>).
                    </p>
                    <p>You can learn more about the publication of Richardson&apos;s <i>Collection</i> <a href="moralsentiments/sentiments">here</a>. Browse the entire work <a href="/moralsentiments/reader/penn/3">here</a> or take a guided tour <a href="/moralsentiments/tours">here</a>. This digital edition also includes a hyperlinked version of the book&apos;s index, which can be found <a href="/toc">here</a>.</p>

                    <p className="clear"></p>

                  </div>
                </Col>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroupItem> <Link to="/reader/penn/3">
                      <Glyphicon glyph="bookmark" /> Tour this edition</Link>
                    </ListGroupItem>
                    <ListGroupItem >
                      <Link to="/toc"> <Glyphicon glyph="book" /> Index</Link>
                    </ListGroupItem>
                  </ListGroup>
                  <MapView currentPage={0} />

                </Col>
              </Row>


            </Col>
          </Row>
        </Grid>
      </SiteContainer>
    )
  }
}

HomePage.propTypes = {
  edition: PropTypes.string.isRequired,
  setEdition: PropTypes.func.isRequired,
}
const mapStateToProps = (state, ownProps) => ({
  edition: ownProps.edition,

})

export default connect(
  mapStateToProps,
  { setEdition },
)(HomePage)
