import React, { useContext } from 'react'
import { Biodata } from './ComA'

const ComC = ({name}) => {
   const channelName=useContext(Biodata)

  return (
    <div>Hello,{channelName} </div>
  )
}
export default ComC