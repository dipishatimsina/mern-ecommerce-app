import React from 'react'
import loginIcons from '../assest/assest/signin.gif'

const Login = () => {
  return (
    <section id='login'>
      <div className='mx-auto container p-4'>

        <div className='bg-white p-6 w-full max-w-sm mx-auto shadow-lg rounded-lg'>
          
          {/* Icon */}
          <div className='w-20 h-20 mx-auto mb-4'>
            <img src={loginIcons} alt='Login icons' className='w-full h-full object-cover rounded-full' />
          </div>

          <form className='flex flex-col gap-4'>
            
            {/* Email */}
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-semibold text-gray-600'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-red-400 w-full'
              />
            </div>

            {/* Password */}
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-semibold text-gray-600'>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-red-400 w-full'
              />
            </div>

            {/* Login Button */}
            <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded w-full mt-2 transition-colors'>
              Login
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Login