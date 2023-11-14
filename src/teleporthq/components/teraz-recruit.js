import React from 'react'

import PropTypes from 'prop-types'

import './teraz-recruit.css'

const TerazRecruit = (props) => {
  return (
    <div className="teraz-recruit-container">
      <div className="teraz-recruit-frame1427">
        <div className="teraz-recruit-frame1425">
          <div className="teraz-recruit-img">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="teraz-recruit-image"
            />
          </div>
          <div className="teraz-recruit-frame1421">
            <div className="teraz-recruit-frame1418">
              <span className="teraz-recruit-text">
                Працюй рекрутером віддалено
              </span>
              <span className="teraz-recruit-text1 ParagraphP16(default)">
                <span>
                  Заробляй до 8000 грн за кожного працевлаштованого кандидата
                </span>
              </span>
            </div>
          </div>
        </div>
        <a
          href={props.Link_URL}
          target="_blank"
          rel="noreferrer noopener"
          onClick={props.Link_Click}
          className="teraz-recruit-buttons"
        >
          <span className="teraz-recruit-text3">
            <span>Стати рекрутером</span>
          </span>
        </a>
      </div>
    </div>
  )
}

TerazRecruit.defaultProps = {
  Link_Click: () => {},
  Link_URL: '',
  image_src1: '/teraz_recruit_banner.png',
  image_alt1: 'image',
}

TerazRecruit.propTypes = {
  Link_Click: PropTypes.func,
  Link_URL: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default TerazRecruit
