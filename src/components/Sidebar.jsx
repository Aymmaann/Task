import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import assets from "../assets/assets.js"

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogout = ()  => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className="fixed overflow-y-auto w-64 h-screen flex flex-col justify-between p-2">
        <div className='p-4 bg-darkBlue rounded-xl h-full'>
            <div>
                <div className='flex gap-2 items-center w-[100px] pl-2'>
                    <img src={assets.noBgLogo} alt="" className='w-[25px]'/>
                    <p className='text-lg font-light'>Deet<span className='font-semibold'>X</span></p>
                </div>
                <hr className="my-3 h-[1px] bg-gradient-to-r from-[#1c1e39] via-[#343850] to-[#1c1e39] border-0 mx-3" />

                <div className='mt-4 h-full'>
                    <Link to='/details' className={`flex items-center gap-2 p-1.5 rounded-lg ${location.pathname === '/details'? 'bg-[#1a1f37]' : 'bg-transparent'}`}>
                        <div className="p-2 rounded-xl">
                            <assets.FaHome className='text-[18px]' />
                        </div>
                        <p className='text-sm font-semibold'>Details</p>
                    </Link>
                </div>
            </div>
            
            <div className='flex items-center gap-2 p-1.5 rounded-lg cursor-pointer' onClick={handleLogout}>
                <div className="p-2 rounded-md">
                    <assets.IoMdLogOut className="text-[18px]" />
                </div>
                <p className="text-sm font-semibold">Log out</p>
            </div>
        </div>
    </div> 
  )
}

export default Sidebar