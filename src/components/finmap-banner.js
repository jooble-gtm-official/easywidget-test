import React from 'react'

import PropTypes from 'prop-types'

import './finmap-banner.css'

const FinmapBanner = (props) => {
  return (
    <div className="finmap-banner-container">
      <a
        href={props.finmap_image_link}
        target="_blank"
        rel="noreferrer noopener"
        className="finmap-banner-link"
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          onClick={props.finmap_image_click}
          className="finmap-banner-image"
        />
      </a>
    </div>
  )
}

FinmapBanner.defaultProps = {
  image_alt: 'image',
  image_src: '/finmap-300w.png',
  finmap_image_link:
    'https://finmap.online?utm_source=email&utm_medium=partner&utm_campaign=jooble',
  finmap_image_click: () => {},
}

FinmapBanner.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  finmap_image_link: PropTypes.string,
  finmap_image_click: PropTypes.func,
}

export default FinmapBanner
