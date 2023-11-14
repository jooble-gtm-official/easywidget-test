import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <div className="app-component-frame1427">
        <div className="app-component-frame1425">
          <div className="app-component-img">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="app-component-image"
            />
          </div>
          <div className="app-component-frame1421">
            <div className="app-component-frame1418">
              <span className="app-component-text">{props.titleText}</span>
              <span className="app-component-text1">
                Take a quick free test to discover your ideal career and receive
                a personalized Job Report
              </span>
            </div>
          </div>
        </div>
        <div className="app-component-frame1426">
          <button className="app-component-buttons">
            <span className="app-component-text2">Start free test</span>
            <img
              alt="arrow-career-test"
              src="/arrow-career-test.svg"
              className="app-component-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  titleText: 'Title',
  onClick1: () => {},
  image_alt: 'image',
  image_alt1: 'image',
  image_src1: '/career-test.png',
  onClick: () => {},
  image_src: '89141bdd-8202-4de5-b53f-f500e92e2d9f',
}

AppComponent.propTypes = {
  titleText: PropTypes.string,
  onClick1: PropTypes.func,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  onClick: PropTypes.func,
  image_src: PropTypes.string,
}

export default AppComponent
