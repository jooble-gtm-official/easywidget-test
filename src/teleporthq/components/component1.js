import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <div className="component1-frame1427">
        <div className="component1-frame1425">
          <div className="component1-img">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="component1-image"
            />
          </div>
          <div className="component1-frame1421">
            <div className="component1-frame1418">
              <span className="component1-text">
                Sie können sich nicht für den richtigen Karriereweg entscheiden?
              </span>
              <span className="component1-text1">
                Mit einem kostenlosen Schnelltest können Sie Ihren Traumberuf
                herausfinden und erhalten einen personalisierten Job Report
              </span>
            </div>
          </div>
        </div>
        <div className="component1-frame1426">
          <button className="component1-buttons">
            <span className="component1-text2">Test starten</span>
            <img
              alt="arrow-career-test"
              src="/arrow-career-test.svg"
              className="component1-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

Component1.defaultProps = {
  image_src: '/career-test.png',
  onClick: () => {},
  image_alt: 'image',
}

Component1.propTypes = {
  image_src: PropTypes.string,
  onClick: PropTypes.func,
  image_alt: PropTypes.string,
}

export default Component1
