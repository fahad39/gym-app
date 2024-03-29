import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
    children:React.ReactNode,
    setSelectedPage:(value:SelectedPage)=>void
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className='text-gray-500 w-13 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white no-underline'
        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
    >{children}</AnchorLink>
  )
}

export default ActionButton