import React from 'react'
import login from './firebase/login'
import SearchIcon from './img/search.png'

function Footer() {
  async function loginSubmit(e){
    e.preventDefault();
    let userData = await login(e.target.id.value, e.target.password.value);
    console.log(userData)
    if(userData == null){
      alert("아이디와 비밀번호를 확인하여 주세요.")
    }
    else{
      console.log(userData.nickname)
    }
  }
  return (
    <div className='w-1/4 min-h-screen px-2'>
        {/* searchBox */}
        <div className='flex rounded-full border-2 m-4 px-4 py-2 bg-gray-200'>
          <div className='p-1'><img src={SearchIcon} className='w-4'/></div>
          <input className='ml-4 w-full bg-transparent'></input>
        </div>

        <hr></hr>
        {/* login form */}
        <form onSubmit={loginSubmit} className='p-4 pb-0'>
          <input placeholder="id" name="id" className='w-full bg-gray-200 my-2 p-2 rounded-xl'></input>
          <input placeholder="password" name="password" type="password" className='w-full bg-gray-200 my-2 p-2 rounded-xl'></input>
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