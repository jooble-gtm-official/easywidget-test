import React from 'react'

import PropTypes from 'prop-types'

import './zbudzh-banner2.css'

const ZbudzhBanner2 = (props) => {
  return (
    <div className="zbudzh-banner2-container">
      <a
        href={props.Frame_Link}
        target="_blank"
        rel="noreferrer noopener"
        className="zbudzh-banner2-link"
      >
        <div
          onClick={props.Frame_LinkClick}
          className="zbudzh-banner2-frame206871"
        >
          <div className="zbudzh-banner2-container1">
            <div className="zbudzh-banner2-info-wrapper">
              <p className="zbudzh-banner2-title DesktopH3">{props.Title}</p>
              <p className="zbudzh-banner2-subtitle">{props.Description}</p>
            </div>
            <button className="zbudzh-banner2-buttons">
              <span className="zbudzh-banner2-text">{props.Button}</span>
            </button>
          </div>
          <img
            src="/external/zbudzhimg-200h.png"
            className="zbudzh-banner2-zbudzhicon"
          />
        </div>
      </a>
    </div>
  )
}

ZbudzhBanner2.defaultProps = {
  Button: 'Try it for free',
  Title: 'Boost your career now!',
  Frame_LinkClick: () => {},
  Description:
    'Your personal 10-minute daily skill simulator. Take the first step to career growth and success today!',
  Frame_Link: '',
}

ZbudzhBanner2.propTypes = {
  Button: PropTypes.string,
  Title: PropTypes.string,
  Frame_LinkClick: PropTypes.func,
  Description: PropTypes.string,
  Frame_Link: PropTypes.string,
}

export default ZbudzhBanner2
