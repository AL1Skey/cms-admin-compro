import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const DashCodeLogo = (props:any) => {
  return (
    <Image src="/logo.png" alt="DashCode Logo" width={40} height={40} />
  )
}

export default DashCodeLogo
