import React from 'react'
import SearchIcon from './img/search.png'

function Footer() {
  return (
    <div className='w-1/4 min-h-screen px-2'>
        {/* searchBox */}
        <div className='flex rounded-full border-2 m-4 px-4 py-2 bg-gray-200'>
          <div className='p-1'><img src={SearchIcon} className='w-4'/></div>
          <input className='ml-4 w-full bg-transparent'></input>
        </div>

        <hr></hr>
        {/* login form */}
        <form className='p-4 pb-0'>
          <input value="id" className='w-full bg-gray-200 my-2 p-2 rounded-xl'></input>
          <input value="password" className='w-full bg-gray-200 my-2 p-2 rounded-xl'></input>
          <input type="submit" value="로그인" className='w-full bg-sky-300 my-2 p-2 rounded-full'></input>
        </form>
        <hr></hr>
        <div className='px-4'>
          <button className='w-full bg-gray-300 my-2 p-2 rounded-full'>회원가입</button>
        </div>
    </div>
  )
}

export default Footer