import React from 'react'

import PropTypes from 'prop-types'

import './jay-jay-banner.css'

const JayJayBanner = (props) => {
  return (
    <a
      href="https://jayjay.co/cara-terbaik-memulai-karir-sukses-di-bidang-it-dari-awal?utm_source=jooble&amp;utm_medium=website&amp;utm_campaign=webinar_qa"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="jay-jay-banner-container container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="jay-jay-banner-image1240 image_1024"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="jay-jay-banner-image320 image_320"
        />
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="jay-jay-banner-image768 image_768"
        />
      </div>
    </a>
  )
}

JayJayBanner.defaultProps = {
  image_src2: '/jay_jay_banner_768.png',
  image_alt: 'image',
  image_alt2: 'image',
  image_alt1: 'image',
  image_src: '/jay_jay_banner_1024.png',
  image_src1: '/jay_jay_banner_320.png',
}

JayJayBanner.propTypes = {
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default JayJayBanner
