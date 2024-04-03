import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
            <Link to='/'><label htmlFor="" class="fas fa-times" id="form-close" ></label> </Link>
            <form action="" className="bg-white m-2 shadow shadow-gray-500 rounded-lg w-5/12">
                <h2 className='text-center text-4xl text-bold text-black p-5 font-mono'>SIGNUP</h2>
                <div className='flex flex-wrap text-2xl m-8'>
                    <input type="text" placeholder="Enter your name" className="box border border-gray-400 p-4 w-96 grow mb-3" id="nameField" />
                    <input type="email" placeholder="Enter your email" className="box border border-gray-400 p-4 w-96 grow mb-3" />
                    <input type="password" placeholder="Enter your password" className="box border border-gray-400 p-4 w-96 grow mb-3" />
                    <input type="submit" id='btn' className="box border border-gray-400 p-3 w-96 grow mb-3" value="Submit" />
                    <div className='mt-2 text-gray-600'>
                        <input type="checkbox" id="remember" className='mr-2 cursor-pointer' />
                        <label htmlFor="remember" className='cursor-pointer'>Remember Me</label>
                        <p className='mt-2'>Forget password? <a className='text-orange-500 cursor-pointer hover:underline'>click here</a></p>
                        <p className='mt-2'>Already have an account? <a id="signin" className='text-orange-500 cursor-pointer hover:underline'>Sign in</a></p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;
