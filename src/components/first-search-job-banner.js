import React from 'react'

import PropTypes from 'prop-types'

import './first-search-job-banner.css'

const FirstSearchJobBanner = (props) => {
  return (
    <div className="first-search-job-banner-container">
      <div className="first-search-job-banner-subscribe">
        <div className="first-search-job-banner-rectangle1257">
          <span className="first-search-job-banner-text">{props.Title}</span>
          <img
            alt="image10170"
            src="/external/image10170-44k-200h.png"
            className="first-search-job-banner-image1"
          />
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="first-search-job-banner-image"
          />
        </div>
        <div className="first-search-job-banner-frame1279">
          <div className="first-search-job-banner-frame528">
            <h2 className="first-search-job-banner-text1">
              {props.BenefitsTitle}
            </h2>
            <span className="first-search-job-banner-text2">
              {props.FirstBenefit}
            </span>
            <span className="first-search-job-banner-text3">
              {props.SecondBenefit}
            </span>
            <span className="first-search-job-banner-text4">
              {props.ThirdBenefit}
            </span>
          </div>
          <div className="first-search-job-banner-frame542">
            <a
              href={props.button_link}
              target="_blank"
              rel="noreferrer noopener"
              onClick={props.button_cllick}
              className="first-search-job-banner-buttons"
            >
              <span className="first-search-job-banner-text5">
                {props.Button}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

FirstSearchJobBanner.defaultProps = {
  Button: 'Profil létrehozása',
  BenefitsTitle: 'A profillal kap egy',
  SecondBenefit: 'Napi álláspostát',
  image_alt: 'image',
  FirstBenefit: 'Személyi segítőt, aki munkát keres Ön helyett',
  Title: 'Szeretné, hogy a munka találja meg Önt? Hozzon létre egy profilt',
  image_src: '05cbfbdc-5f0a-42b5-b46f-c6214eafe031',
  image_src1: '/threepeople-200h.png',
  button_cllick: () => {},
  button_link: '',
  image_alt1: 'image',
  ThirdBenefit: 'Gyors jelentkezést',
}

FirstSearchJobBanner.propTypes = {
  Button: PropTypes.string,
  BenefitsTitle: PropTypes.string,
  SecondBenefit: PropTypes.string,
  image_alt: PropTypes.string,
  FirstBenefit: PropTypes.string,
  Title: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  button_cllick: PropTypes.func,
  button_link: PropTypes.string,
  image_alt1: PropTypes.string,
  ThirdBenefit: PropTypes.string,
}

export default FirstSearchJobBanner
