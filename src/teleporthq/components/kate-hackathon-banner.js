import React from 'react'

import PropTypes from 'prop-types'

import './kate-hackathon-banner.css'

const KateHackathonBanner = (props) => {
  return (
    <div className="kate-hackathon-banner-container">
      <a
        href={props.Frame_Link}
        target="_blank"
        rel="noreferrer noopener"
        className="kate-hackathon-banner-link"
      >
        <div
          onClick={props.Frame_LinkClick}
          className="kate-hackathon-banner-frame206871"
        >
          <div className="kate-hackathon-banner-container1">
            <div className="kate-hackathon-banner-info-wrapper">
              <p className="kate-hackathon-banner-title DesktopH3">
                {props.Title}
              </p>
              <p className="kate-hackathon-banner-subtitle">
                {props.Description}
              </p>
            </div>
            <button className="kate-hackathon-banner-buttons">
              <span className="kate-hackathon-banner-text">{props.Button}</span>
            </button>
          </div>
          <img
            alt={props.pastedImage_alt1}
            src={props.img_src}
            className="kate-hackathon-banner-pregnatwomen"
          />
        </div>
      </a>
    </div>
  )
}

KateHackathonBanner.defaultProps = {
  Frame_LinkClick: () => {},
  Button: 'Доєднатись',
  Description:
    'Долучайтесь до нашої спільноти матусь для підтримки і консультацій 24/7!',
  Title: 'Секс та вагітність. Безкоштовні консультації!',
  image_src: 'b6c2c951-4923-45d7-9864-2ac299ae9b7c',
  img_src: '/pastedImage-6ans.png',
  pastedImage_alt1: 'pastedImage',
  image_alt: 'image',
  Frame_Link: '',
}

KateHackathonBanner.propTypes = {
  Frame_LinkClick: PropTypes.func,
  Button: PropTypes.string,
  Description: PropTypes.string,
  Title: PropTypes.string,
  image_src: PropTypes.string,
  img_src: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  Frame_Link: PropTypes.string,
}

export default KateHackathonBanner
