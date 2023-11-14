import React from 'react'

import PropTypes from 'prop-types'

import './skillify-hackathon-banner.css'

const SkillifyHackathonBanner = (props) => {
  return (
    <a href={props.link_container} target="_blank" rel="noreferrer noopener">
      <div className="skillify-hackathon-banner-container">
        <div
          onClick={props.Frame_LinkClickS}
          className="skillify-hackathon-banner-frame206871"
        >
          <div className="skillify-hackathon-banner-container1">
            <div className="skillify-hackathon-banner-info-wrapper">
              <p className="skillify-hackathon-banner-title DesktopH3">
                {props.Title}
              </p>
              <p className="skillify-hackathon-banner-subtitle">
                {props.Description}
              </p>
            </div>
            <button className="skillify-hackathon-banner-buttons">
              <span className="skillify-hackathon-banner-text">
                {props.Button}
              </span>
            </button>
          </div>
          <img
            src="/external/zbudzhimg-200h.png"
            className="skillify-hackathon-banner-zbudzhicon"
          />
        </div>
      </div>
    </a>
  )
}

SkillifyHackathonBanner.defaultProps = {
  Description:
    'Acquire tailored development plans crafted just for you, accompanied by seasoned mentors prepared to guide you through each step.',
  Frame_LinkClickS: () => {},
  Frame_LinkS: '',
  Button: 'Begin your free journey',
  Title: 'Unleash your growth!',
  link_container: '',
}

SkillifyHackathonBanner.propTypes = {
  Description: PropTypes.string,
  Frame_LinkClickS: PropTypes.func,
  Frame_LinkS: PropTypes.string,
  Button: PropTypes.string,
  Title: PropTypes.string,
  link_container: PropTypes.string,
}

export default SkillifyHackathonBanner
