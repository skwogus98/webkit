import React from 'react'
import User from '../img/user.png'
import Retweet from '../img/retweet.png'
import Heart from '../img/heart-red.png'
import HeartOutline from '../img/heart-outline.png'
import Edit from '../img/edit.png'
//https://icon-icons.com/

function twit({twitData}) {
    //console.log(twitData)
    return (
    <div className='flex p-4 border-b-2'>
        <div className='w-10 pr-2'>
            <img src={User}/>
        </div>
        <div className='flex-1'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='mx-2'>
                        {twitData.nickname}
                    </div>
                    <div className='mx-2 text-gray-500'>
                        @{twitData.id}
                    </div>
                </div>
                <div>:</div>
            </div>
            <div className='m-2 py-4'>
                {twitData.content}
            </div>
            <div className='flex justify-between mx-12'>
                <button className='hover:bg-gray-300 p-2 duration-300 rounded-full'>
                    <img src={Edit} className="w-6"/>
                </button>
                <button className='hover:bg-gray-300 p-2 duration-300 rounded-full'>
                    <img src={Retweet} className="w-6"/>
                </button>
                <button className='hover:bg-red-300 p-2 duration-300 rounded-full'>
                    <img src={twitData.liked ? Heart : HeartOutline} className="w-6"/>
                </button>
            </div>
        </div>
    </div>
    )
}

export default twit