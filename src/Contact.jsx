import React from 'react'

import './Contact.css'

const abc = 'mai'
const use = 'plhosk'
const ser = '@gm'
const tld = 'om'

const Contact = () => (
  <div className="Contact-outer-div">
    <div className="Contact-email">
      I can be reached by email at the following address: <a
        className="Contact-email-link"
        href={`${abc}lto:${use}${ser}ail.c${tld}`}
        target="_blank"
      >
        {`${use}${ser}ail.c${tld}`}
      </a>
    </div>
  </div>
)

export default Contact
