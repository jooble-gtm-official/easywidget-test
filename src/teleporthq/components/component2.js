import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <div className="component2-frame1427">
        <div className="component2-frame1425">
          <div className="component2-img">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="component2-image"
            />
          </div>
          <div className="component2-frame1421">
            <div className="component2-frame1418">
              <span className="component2-text">{props.titleText}</span>
              <span className="component2-text1">
                Take a quick free test to discover your ideal career and receive
                a personalized Job Report
              </span>
            </div>
          </div>
        </div>
        <div className="component2-frame1426">
          <button className="component2-buttons">
            <span className="component2-text2">Start free test</span>
            <img
              alt="arrow-career-test"
              src="/arrow-career-test.svg"
              className="component2-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  image_src: '/career-test.png',
  onClick: () => {},
  image_alt: 'image',
  titleText: 'title',
}

Component2.propTypes = {
  image_src: PropTypes.string,
  onClick: PropTypes.func,
  image_alt: PropTypes.string,
  titleText: PropTypes.string,
}

export default Component2
