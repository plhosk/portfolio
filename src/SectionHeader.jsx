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
      <div
        className="SectionHeader-title"
        style={{ borderColor: props.color }}
      >{props.text}</div>
      <HeaderLine />
    </div>
  )
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default SectionHeader
