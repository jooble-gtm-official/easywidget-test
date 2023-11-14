import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <div className="component4-frame1427">
        <div className="component4-frame1425">
          <div className="component4-img">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="component4-image"
            />
          </div>
          <div className="component4-frame1421">
            <div className="component4-frame1418">
              <span className="component4-text">
                Can&apos;t choose the right career path for you?
              </span>
              <span className="component4-text1">
                Take a quick free test to discover your ideal career and receive
                a personalized Job Report
              </span>
            </div>
          </div>
        </div>
        <div className="component4-frame1426">
          <button className="component4-buttons">
            <span className="component4-text2">Start free test</span>
            <img
              alt="arrow-career-test"
              src="/arrow-career-test.svg"
              className="component4-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

Component4.defaultProps = {
  onClick: () => {},
  image_alt: 'image',
  image_src: '/career-test.png',
}

Component4.propTypes = {
  onClick: PropTypes.func,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component4
