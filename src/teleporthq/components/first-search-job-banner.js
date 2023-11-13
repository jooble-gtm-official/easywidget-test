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
            src="/image10170-44k.png"
            alt="image10170"
            className="first-search-job-banner-image1"
          />
          <img
            src={props.image_src1}
            alt={props.image_alt1}
            className="first-search-job-banner-image"
          />
        </div>
        <div className="first-search-job-banner-frame1279">
          <div className="first-search-job-banner-frame528">
            <span className="first-search-job-banner-text1">
              {props.BenefitsTitle}
            </span>
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
        <img
          src="/Rectangle12550171-klds.png"
          alt="Rectangle12550171"
          className="first-search-job-banner-rectangle1255"
        />
      </div>
    </div>
  )
}

FirstSearchJobBanner.defaultProps = {
  image_src: '05cbfbdc-5f0a-42b5-b46f-c6214eafe031',
  image_alt: 'image',
  image_src1: '/threepeople.png',
  image_alt1: 'image',
  Title: 'Szeretné, hogy a munka találja meg Önt? Hozzon létre egy profilt',
  BenefitsTitle: 'A profillal kap egy',
  FirstBenefit: 'Személyi segítőt, aki munkát keres Ön helyett',
  SecondBenefit: 'Napi álláspostát',
  ThirdBenefit: 'Gyors jelentkezést',
  Button: 'Profil létrehozása',
  button_link: '',
  button_cllick: () => {},
}

FirstSearchJobBanner.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  Title: PropTypes.string,
  BenefitsTitle: PropTypes.string,
  FirstBenefit: PropTypes.string,
  SecondBenefit: PropTypes.string,
  ThirdBenefit: PropTypes.string,
  Button: PropTypes.string,
  button_link: PropTypes.string,
  button_cllick: PropTypes.func,
}

export default FirstSearchJobBanner
