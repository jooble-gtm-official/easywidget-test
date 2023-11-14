import React from 'react'

import PropTypes from 'prop-types'

import './vchasno-banner.css'

const VchasnoBanner = (props) => {
  return (
    <div className="vchasno-banner-container">
      <a
        href={props.vchasno_image_link}
        target="_blank"
        rel="noreferrer noopener"
        className="vchasno-banner-link"
      >
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          onClick={props.vchasno_image_click}
          className="vchasno-banner-image"
        />
      </a>
    </div>
  )
}

VchasnoBanner.defaultProps = {
  vchasno_image_link: '',
  vchasno_image_click: () => {},
  vchasno_img_click: () => {},
  image_src2: '/vhasno_banner-300w.jpg',
  image_alt2: 'image',
}

VchasnoBanner.propTypes = {
  vchasno_image_link: PropTypes.string,
  vchasno_image_click: PropTypes.func,
  vchasno_img_click: PropTypes.func,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default VchasnoBanner
