import React from 'react'
import AgeCtrl from './component/AgeCtrl'
import CntCtrl from './component/CntCtrl'

function StateController(props) {
  return (
    <div>
        <CntCtrl></CntCtrl>
        <AgeCtrl></AgeCtrl>
    </div>
  )
}

export default StateController