import { useState } from 'react'
import { supabase } from 'lib/Store'
import Image from 'next/image'

const Home = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (type, username, password) => {
    try {
      const { error, user } =
        type === 'LOGIN'
          ? await supabase.auth.signIn({ email: username, password })
          : await supabase.auth.signUp({ email: username, password })
      // If the user doesn't exist here and an error hasn't been raised yet,
      // that must mean that a confirmation email has been sent.
      // NOTE: Confirming your email address is required by default.
      if (error) {
        alert('Error with auth: ' + error.message)
      } else if (!user) alert('Signup successful, confirmation mail should be sent soon!')
    } catch (error) {
      console.log('error', error)
      alert(error.error_description || error)
    }
  }

  return (
    <div className="w-full h-full justify-center items-center p-4 bg-gradient-to-t from-indigo-100 to-white">
    <div className="w-full h-14 border-b flex items-center px-6">
        <a href="/" className="flex items-center space-x-1 mr-4">
          <div className="rounded-lg bg-gray-800 text-white text-lg flex items-center justify-center font-semibold w-8 h-8"> AA </div>
          <div className="font-medium text-xl tracking-normal"> Sponsio </div>
          </a>
          {/*<div className="text-sm text-gray-400 hidden sm:block">
            <a href="https://twitter.com/metastash" target="_blank">@metastash</a>
          </div>*/}
          <div className="ml-auto flex items-center">
            <a href="/mission" className="router-link-active router-link-exact-active router-link" aria-current="page">Mission</a>
            <a href="/schedule" className="router-link ml-6 mr-4">Schedule</a>
          {/*<button className="text-sm px-8 py-2 rounded-lg bg-gray-800 text-white ml-6 cursor-not-allowed"> Save </button>*/}
        </div>
      </div>
    <div className="w-full h-full flex justify-center items-center p-4 transparent">
      {/*<Image src="/beams-home@95.jpeg" alt="bg" layout="fill" className='fixed z-0' />*/}
      <div className="w-full h-full flex flex-col justify-center sm:w-1/2 xl:w-1/3 z-10">
        {/*<div className="w-full flex flex-grow justify-center items-center text-6xl font-extrabold tracking-tight text-slate-900">Sponsio</div>*/}
        <div className="border-teal p-8 border-t-12 mb-6 rounded-lg shadow-xl bg-white dark:bg-black">
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">Email</label>
            <input
              type="text"
              className="px-6 h-14 border border-gray-300 rounded-xl shadow-xl md:shadow-md w-full bg-gray-50"
              //className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">Password</label>
            <input
              type="password"
              className="px-6 h-14 border border-gray-300 rounded-xl shadow-xl md:shadow-md w-full bg-gray-50"
              //className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4">
            <a
              onClick={(e) => {
                e.preventDefault()
                handleLogin('SIGNUP', username, password)
              }}
              href={'/channels'}
              className="bg-indigo-700 hover:bg-teal text-white py-4 px-6 h-14 rounded-xl text-center transition duration-150 hover:bg-indigo-500 hover:text-white"
            >
              Sign up
            </a>
            <a
              onClick={(e) => {
                e.preventDefault()
                handleLogin('LOGIN', username, password)
              }}
              href={'/channels'}
              className="border border-indigo-700 text-indigo-700 py-4 px-6 h-14 rounded-xl w-full text-center transition duration-150 hover:bg-indigo-700 hover:text-white"
            >
              Login
            </a>
          </div>
        </div>
        {/*<div className="w-full flex flex-grow justify-center items-center text-6xl text-white font-bold"></div>*/}
      </div>
    </div>
    </div>
  )
}

export default Home
