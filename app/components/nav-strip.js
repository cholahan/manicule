import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import { Well, OverlayTrigger, Tooltip, Button, ButtonGroup } from 'react-bootstrap'

class NavStrip extends React.Component {

  constructor(props) {
    super(props)
    const { currentPage, data } = props

    const before = Array.from({ length: currentPage - 1 }, (v, k) => data[currentPage - k - 1]).reverse()
    const after = Array.from({ length: data.length - currentPage - 2 }, (v, k) => data[currentPage + 2 + k])

    const current = [data[currentPage], data[currentPage + 1]]
    const items = before.concat(current).concat(after)
    this.state = {
      items,
      current,
    }
  }
  componentDidUpdate() {
    // Take the natural horizontal position of the current page element...
    let offset = $(`.thumbnail-${this.props.currentPage + 1}`).position().left
    offset -= ($('.nav-group').width() / 2)  // divide the current filmstrip in half
    $('.nav-group').scrollLeft(offset)
  }
  render() {
    return (<Well bsClass="nav-group">
      <NavGroup data={this.state.items} setPage={this.props.setPage} currentPage={this.props.currentPage} />
    </Well>
    )
  }
}

NavStrip.propTypes = {
  data: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
}
NavStrip.defaultProps = {
  currentPage: 10,
  window: -1, // The length of the window of pages before/after. -1 is infinite
}

const NavGroup = ({ data, setPage, currentPage }) => (<ButtonGroup >
  {data.map((p) => {
    const page = parseInt(p.index, 10)
    const pos = page % 2 === 0 ? 'recto' : 'verso'
    const pad = (`0000${p.index}`).substr(-4, 4)
    const edition = 'penn' // FIXME make this something switchable
    const img = require(`../images/book/${edition}/thumbnails/${pad}.jpg`) // eslint-disable-line global-require
    const cls = `nav-thumbnail thumbnail-${p.index} ${pos} ${page === currentPage || page === currentPage + 1 ? 'is-current' : ''}`

    return (<OverlayTrigger key={p.index} placement="top" overlay={<Tooltip id={p.index}>{p.signatures} - {p.category}</Tooltip>}>
      <div
        className={cls}
        style={{ borderBottom: `10px solid ${p.color}` }}
      >
        <Button
          style={{ backgroundImage: `url(${img})`,
          }}
          onClick={() => setPage(parseInt(p.index, 10))}
        >
        </Button>
      </div>

    </OverlayTrigger>)
  })}
</ButtonGroup>)


NavGroup.propTypes = {
  data: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default NavStrip
