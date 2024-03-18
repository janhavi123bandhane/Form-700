import React, { useState } from 'react';
import { IoMdContact } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        setUsername('');
        setPassword('');
    };

    return (
        <div className=' bg-slate-600 lg:w-full w-[60rem] md:w-[70rem] h-[60rem] flex justify-center items-center'>
          
            <form onSubmit={handleSubmit}>
                <hr className=' border-white mb-16'></hr>
                <div className='flex md:ml-0 ml-[2rem]'>
                    <label htmlFor="username" className=' w-12 bg-green-500 text-white'><IoMdContact className='text-3xl  md:mt-2 mt-1 ml-2' ></IoMdContact></label>
                    <input
                        type="text"
                        id="username"
                        className=' w-[20rem] h-[3rem]  ml-1'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='flex mt-10 md:ml-0 ml-[2rem]'>
                    <label htmlFor="password" className=' w-12  bg-orange-500 text-white'><IoLockClosedSharp className='text-3xl md:mt-2 mt-1 ml-2' ></IoLockClosedSharp></label>
                    <input
                        className=' w-[20rem] h-[3rem] ml-1'
                        type="password"
                        id="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <hr className=' border-white mt-16'></hr>
                <button type="submit" className='bg-green-500 hover:bg-green-300 md:w-[8rem] md:h-[3rem] w-[6rem] h-[3rem] mt-16 ml-[16rem] text-white font-semibold rounded-lg'>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
