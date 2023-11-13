import React from 'react'

import PropTypes from 'prop-types'

import './second-search-job-banner.css'

const SecondSearchJobBanner = (props) => {
  return (
    <div className="second-search-job-banner-container">
      <div className="second-search-job-banner-subscribe">
        <div className="second-search-job-banner-frame1279">
          <div className="second-search-job-banner-frame528">
            <span className="second-search-job-banner-text">
              {props.Content}
            </span>
          </div>
          <div className="second-search-job-banner-frame542">
            <a
              href={props.button_link}
              target="_blank"
              rel="noreferrer noopener"
              onClick={props.button_click}
              className="second-search-job-banner-buttons"
            >
              <span className="second-search-job-banner-text1">
                {props.Button}
              </span>
            </a>
          </div>
        </div>
        <div className="second-search-job-banner-container1">
          <div className="second-search-job-banner-img">
            <img
              src={props.image_src}
              alt={props.image_alt}
              className="second-search-job-banner-image"
            />
          </div>
        </div>
        <span className="second-search-job-banner-text2">{props.Title}</span>
      </div>
    </div>
  )
}

SecondSearchJobBanner.defaultProps = {
  image_src: '/smilinggirl.png',
  image_alt: 'image',
  Title: 'Üdv! A nevem Dóra, én vagyok \u2028a személyes toborzója',
  Content:
    'Hagyja meg a telefonszámát, s én megtalálom a megfelelő állásokat Önnek.',
  Button: 'Profil létrehozása',
  button_link: '',
  button_click: () => {},
}

SecondSearchJobBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Title: PropTypes.string,
  Content: PropTypes.string,
  Button: PropTypes.string,
  button_link: PropTypes.string,
  button_click: PropTypes.func,
}

export default SecondSearchJobBanner
