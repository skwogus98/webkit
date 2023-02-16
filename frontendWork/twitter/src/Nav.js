import React from 'react'
import Icon from "./img/twitter.png";

function Nav() {
  return (
    <div className='w-1/4 min-h-screen px-8 py-12 '>
        <div className="w-16 rounded-full p-2 hover:bg-blue-100 duration-500 my-4">
            <img src={Icon} ></img>
        </div>
        <div className="px-4 rounded-full p-2 hover:bg-blue-100 duration-500 my-4">
            # 탐색하기
        </div>
        <div className="px-4 rounded-full p-2 hover:bg-blue-100 duration-500 my-4">
            설정
        </div >
    </div>
  )
}

export default Nav