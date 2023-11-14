import React from 'react'

import PropTypes from 'prop-types'

import './serp-call-us-ua-mobile-ab-test683-banner.css'

const SerpCallUsUaMobileABTest683Banner = (props) => {
  return (
    <div className="serp-call-us-ua-mobile-ab-test683-banner-container">
      <div className="serp-call-us-ua-mobile-ab-test683-banner-frame206890">
        <div className="serp-call-us-ua-mobile-ab-test683-banner-frame206826">
          <div className="serp-call-us-ua-mobile-ab-test683-banner-frame206816">
            <span className="serp-call-us-ua-mobile-ab-test683-banner-text MobileH3">
              {props.title_text}
            </span>
            <span className="serp-call-us-ua-mobile-ab-test683-banner-text1">
              {props.paragraph_text}
            </span>
          </div>
          <div className="serp-call-us-ua-mobile-ab-test683-banner-frame206881">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="serp-call-us-ua-mobile-ab-test683-banner-image"
            />
          </div>
        </div>
        <a
          href={props.call_button}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.mobile_call_click}
          className="serp-call-us-ua-mobile-ab-test683-banner-buttons"
        >
          <span className="serp-call-us-ua-mobile-ab-test683-banner-text2">
            {props.button_text}
          </span>
        </a>
      </div>
    </div>
  )
}

SerpCallUsUaMobileABTest683Banner.defaultProps = {
  image_src: '/bell1.png',
  button_text: 'Call',
  image_alt: 'image',
  call_button: '',
  paragraph_text: 'Dial if you are looking for a job - we will do the rest',
  mobile_call_click: () => {},
  title_text: 'One call - and you are at a new job',
}

SerpCallUsUaMobileABTest683Banner.propTypes = {
  image_src: PropTypes.string,
  button_text: PropTypes.string,
  image_alt: PropTypes.string,
  call_button: PropTypes.string,
  paragraph_text: PropTypes.string,
  mobile_call_click: PropTypes.func,
  title_text: PropTypes.string,
}

export default SerpCallUsUaMobileABTest683Banner
