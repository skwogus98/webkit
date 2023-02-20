import React from 'react'
import login from '../firebase/login'
import User from '../img/user.png'
function Login() {
    async function loginSubmit(e){
        e.preventDefault();
        let userData = await login(e.target.id.value, e.target.password.value);
        console.log(userData)
        if(userData == null){
          alert("아이디와 비밀번호를 확인하여 주세요.")
        }
        else{
          console.log(userData.nickname)
          localStorage.setItem("id", userData.id)
          localStorage.setItem("nickname", userData.nickname)
          localStorage.setItem("isLogin", true)
          window.location.reload()
        }
    }
    function logout(){
        localStorage.clear()
        alert("로그아웃 하였습니다.")
        window.location.reload()
    }
    if(localStorage.getItem("isLogin")){
        return (
            <div className='text-sm'>
                <div className='flex p-2 my-4 justify-between'>
                    <div className='flex'>
                        <div className='w-10 pr-2'>
                            <img src={User}/>
                        </div>
                        <div >
                            <div>{localStorage.getItem("nickname")}</div>
                            <div className='text-gray-500'>@{localStorage.getItem("id")}</div>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <button className='bg-red-300 my-2 p-2 rounded-full text-white' onClick={logout}>로그아웃</button>
                    </div>
                </div>
                
            </div>
        )
    }
    else{
        return (
            <div>
                <form onSubmit={loginSubmit} className='p-4 pb-0'>
                    <input placeholder="id" name="id" className='w-full bg-gray-200 my-2 p-2 rounded-xl'></input>
                    <input placeholder="password" name="password" type="password" className='w-full bg-gray-200 my-2 p-2 rounded-xl'></input>
                    <input type="submit" value="로그인" className='w-full bg-sky-300 my-2 p-2 rounded-full'></input>
                </form>
                <hr></hr>
                <div className="px-4">
                    <button className="w-full bg-gray-300 my-2 p-2 rounded-full">
                    회원가입
                    </button>
                </div>
            </div>
            )
    }
}

export default Login