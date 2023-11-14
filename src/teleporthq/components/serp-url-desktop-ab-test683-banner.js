import React from 'react'

import PropTypes from 'prop-types'

import './serp-url-desktop-ab-test683-banner.css'

const SerpUrlDesktopABTest683Banner = (props) => {
  return (
    <div className="serp-url-desktop-ab-test683-banner-container">
      <div className="serp-url-desktop-ab-test683-banner-frame206885">
        <div className="serp-url-desktop-ab-test683-banner-frame206817">
          <div className="serp-url-desktop-ab-test683-banner-frame206816">
            <span className="serp-url-desktop-ab-test683-banner-text DesktopH3">
              {props.title_text}
            </span>
            <span className="serp-url-desktop-ab-test683-banner-text1 ParagraphP16(default)">
              {props.paragraph_text}
            </span>
          </div>
          <a
            href={props.create_profile_url}
            target="_blank"
            rel="noreferrer noopener"
            onClick={props.desktop_create_profile_click}
            className="serp-url-desktop-ab-test683-banner-buttons"
          >
            <span className="serp-url-desktop-ab-test683-banner-text2">
              {props.button_text}
            </span>
          </a>
        </div>
        <div className="serp-url-desktop-ab-test683-banner-frame206881">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="serp-url-desktop-ab-test683-banner-image"
          />
        </div>
      </div>
    </div>
  )
}

SerpUrlDesktopABTest683Banner.defaultProps = {
  title_text: 'Tired of searching? Start working!',
  create_profile_url: 'https://ua.jooble.org/auth/registration/phone',
  image_alt: 'image',
  paragraph_text: 'Create a profile on Jooble and we will find you a job.',
  image_src: '/mechanik_serp365.png',
  desktop_create_profile_click: () => {},
  button_text: 'Create a profile',
}

SerpUrlDesktopABTest683Banner.propTypes = {
  title_text: PropTypes.string,
  create_profile_url: PropTypes.string,
  image_alt: PropTypes.string,
  paragraph_text: PropTypes.string,
  image_src: PropTypes.string,
  desktop_create_profile_click: PropTypes.func,
  button_text: PropTypes.string,
}

export default SerpUrlDesktopABTest683Banner
