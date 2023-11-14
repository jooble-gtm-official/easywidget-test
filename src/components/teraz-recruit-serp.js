import React from 'react'

import PropTypes from 'prop-types'

import './teraz-recruit-serp.css'

const TerazRecruitSerp = (props) => {
  return (
    <div className="teraz-recruit-serp-container">
      <a
        href={props.bannerUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="teraz-recruit-serp-link"
      >
        <div
          onClick={props.bannerClick}
          className="teraz-recruit-serp-frame637"
        >
          <div className="teraz-recruit-serp-frame632">
            <img
              alt="Logo41113"
              src="/external/teraz_recruit_serp_banner_logo-200h.png"
              className="teraz-recruit-serp-logo41"
            />
            <span className="teraz-recruit-serp-text">Teraz Work</span>
            <span className="teraz-recruit-serp-text01">
              • Робота для рекрутерів
            </span>
          </div>
          <span className="teraz-recruit-serp-text02">
            <span>Працюй рекрутером віддалено</span>
          </span>
          <span className="teraz-recruit-serp-text04">
            <span>
              Отримуй до 8000 грн. за кожного працевлаштованого кандидата
            </span>
          </span>
          <div className="teraz-recruit-serp-frame635">
            <div className="teraz-recruit-serp-frame633">
              <img
                alt="check119"
                src="/external/teraz_recruit_serp_banner_check1.svg"
                className="teraz-recruit-serp-check"
              />
              <span className="teraz-recruit-serp-text06">
                <span>Працюй, коли зручно</span>
              </span>
            </div>
            <div className="teraz-recruit-serp-frame634">
              <img
                alt="check122"
                src="/external/teraz_recruit_serp_banner_check2.svg"
                className="teraz-recruit-serp-check1"
              />
              <span className="teraz-recruit-serp-text08">
                <span>Ти обираєш вакансії</span>
              </span>
            </div>
            <div className="teraz-recruit-serp-frame6351">
              <img
                alt="check125"
                src="/external/teraz_recruit_serp_banner_check3.svg"
                className="teraz-recruit-serp-check2"
              />
              <span className="teraz-recruit-serp-text10">
                <span>Доступ до навчання</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

TerazRecruitSerp.defaultProps = {
  bannerClick: () => {},
  bannerUrl: 'https://www.teraz.work/recruiters-ua',
}

TerazRecruitSerp.propTypes = {
  bannerClick: PropTypes.func,
  bannerUrl: PropTypes.string,
}

export default TerazRecruitSerp
