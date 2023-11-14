import React from 'react'

import PropTypes from 'prop-types'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className="component5-container">
      <div className="component5-frame1427">
        <div className="component5-frame1425">
          <div className="component5-img">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="component5-image"
            />
          </div>
          <div className="component5-frame1421">
            <div className="component5-frame1418">
              <span className="component5-text">
                Can&apos;t choose the right career path for you?
              </span>
              <span className="component5-text1">
                Take a quick free test to discover your ideal career and receive
                a personalized Job Report
              </span>
            </div>
          </div>
        </div>
        <div className="component5-frame1426">
          <button className="component5-buttons">
            <span className="component5-text2">Start free test</span>
            <img
              alt="arrow-career-test"
              src="/arrow-career-test.svg"
              className="component5-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

Component5.defaultProps = {
  image_alt: 'image',
  onClick: () => {},
  image_src: '/career-test.png',
}

Component5.propTypes = {
  image_alt: PropTypes.string,
  onClick: PropTypes.func,
  image_src: PropTypes.string,
}

export default Component5
