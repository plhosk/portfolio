import React from 'react'
import PropTypes from 'prop-types'

import './SectionHeader.css'


const SectionHeader = (props) => {
  const HeaderLine = () => (
    <div className="SectionHeader-background">
      <div
        className="SectionHeader-background-color"
        style={{ backgroundColor: props.color }}
      />
    </div>
  )

  return (
    <div className="SectionHeader-main">
      <HeaderLine />
      <HeaderLine />
      <div
        className="SectionHeader-title"
        style={{ borderColor: props.color }}
      >{props.text}</div>
      <HeaderLine />
      <div
        className="SectionHeader-ph"
        onClick={props.handleClickTop}
        role="button"
        tabIndex={0}
      >
        <span className="SectionHeader-ph-p">p</span>
        <span className="SectionHeader-ph-h">h</span>
        <span className="SectionHeader-ph-arrow">&uarr;</span>
      </div>
      <HeaderLine />
    </div>
  )
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleClickTop: PropTypes.func.isRequired,
}

export default SectionHeader
