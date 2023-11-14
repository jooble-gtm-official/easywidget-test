import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <div className="component3-frame1427">
        <div className="component3-frame1425">
          <div className="component3-img">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="component3-image"
            />
          </div>
          <div className="component3-frame1421">
            <div className="component3-frame1418">
              <span className="component3-text">
                Can&apos;t choose the right career path for you?
              </span>
              <span className="component3-text1">
                Take a quick free test to discover your ideal career and receive
                a personalized Job Report
              </span>
            </div>
          </div>
        </div>
        <div className="component3-frame1426">
          <button className="component3-buttons">
            <span className="component3-text2">Start free test</span>
            <img
              alt="arrow-career-test"
              src="/arrow-career-test.svg"
              className="component3-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

Component3.defaultProps = {
  image_src: '/career-test.png',
  onClick: () => {},
  image_alt: 'image',
}

Component3.propTypes = {
  image_src: PropTypes.string,
  onClick: PropTypes.func,
  image_alt: PropTypes.string,
}

export default Component3
