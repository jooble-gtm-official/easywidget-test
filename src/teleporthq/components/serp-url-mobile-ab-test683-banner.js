import React from 'react'

import PropTypes from 'prop-types'

import './serp-url-mobile-ab-test683-banner.css'

const SerpUrlMobileABTest683Banner = (props) => {
  return (
    <div className="serp-url-mobile-ab-test683-banner-container">
      <div className="serp-url-mobile-ab-test683-banner-frame206886">
        <div className="serp-url-mobile-ab-test683-banner-frame206826">
          <div className="serp-url-mobile-ab-test683-banner-frame206816">
            <span className="serp-url-mobile-ab-test683-banner-text MobileH3">
              {props.title_text}
            </span>
            <span className="serp-url-mobile-ab-test683-banner-text1">
              {props.paragraph_text}
            </span>
          </div>
          <div className="serp-url-mobile-ab-test683-banner-frame206880">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="serp-url-mobile-ab-test683-banner-image"
            />
          </div>
        </div>
        <a
          href={props.create_profile_url}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.mobile_create_profile_click}
          className="serp-url-mobile-ab-test683-banner-buttons"
        >
          <span className="serp-url-mobile-ab-test683-banner-text2">
            {props.button_text}
          </span>
        </a>
      </div>
    </div>
  )
}

SerpUrlMobileABTest683Banner.defaultProps = {
  create_profile_url: 'https://ua.jooble.org/auth/registration/phone',
  title_text: 'Tired of searching? Start working!',
  button_text: 'Create a profile',
  image_alt1: 'image',
  mobile_create_profile_click: () => {},
  image_src1: '/mechanik_serp365.png',
  paragraph_text: 'Create a profile on Jooble and we will find you a job.',
}

SerpUrlMobileABTest683Banner.propTypes = {
  create_profile_url: PropTypes.string,
  title_text: PropTypes.string,
  button_text: PropTypes.string,
  image_alt1: PropTypes.string,
  mobile_create_profile_click: PropTypes.func,
  image_src1: PropTypes.string,
  paragraph_text: PropTypes.string,
}

export default SerpUrlMobileABTest683Banner
