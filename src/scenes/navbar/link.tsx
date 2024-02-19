import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page:string
}

function Link({page,}: Props) {
    const lowerPage=page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink
        className={}
        href={`#${lowerPage}`}
        onClick={}
    >
        {page}
    </AnchorLink>
  )
}

export default Link