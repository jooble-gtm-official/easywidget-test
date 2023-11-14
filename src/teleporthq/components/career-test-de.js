import React from 'react'

import PropTypes from 'prop-types'

import './career-test-de.css'

const CareerTestDe = (props) => {
  return (
    <div className="career-test-de-container">
      <div className="career-test-de-frame1427">
        <div className="career-test-de-frame1425">
          <div className="career-test-de-img">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="career-test-de-image"
            />
          </div>
          <div className="career-test-de-frame1421">
            <div className="career-test-de-frame1418">
              <span className="career-test-de-text">
                Sie können sich nicht für den richtigen Karriereweg entscheiden?
              </span>
              <span className="career-test-de-text1">
                Mit einem kostenlosen Schnelltest können Sie Ihren Traumberuf
                herausfinden und erhalten einen personalisierten Job Report
              </span>
            </div>
          </div>
        </div>
        <div className="career-test-de-frame1426">
          <button onClick={props.onClick} className="career-test-de-buttons">
            <span className="career-test-de-text2">Test starten</span>
            <img
              alt="arrow-career-test"
              src="/arrow-career-test.svg"
              className="career-test-de-arrowrightup"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

CareerTestDe.defaultProps = {
  image_alt: 'image',
  onClick: () => {},
  rootClassName: '',
  image_src: '/career-test.png',
}

CareerTestDe.propTypes = {
  image_alt: PropTypes.string,
  onClick: PropTypes.func,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default CareerTestDe
