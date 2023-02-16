import React from 'react'
import Twit from './component/Twit';
import twits from './json/twits.json'

function Main() {
  return (
    <div className='w-1/2 border-l-2 border-r-2 min-h-screen p-4'>
        {
          twits.map((twitData, idx)=>{
            return <Twit twitData={twitData} key={idx}></Twit>
          })
        }
    </div>
  )
}

export default Main