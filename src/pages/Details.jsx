import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import assets from '../assets/assets'
import { useUserContext } from '../context/UserContext'

const Details = () => {
  const { state, dispatch } = useUserContext();
  const [sortOrder, setSortOrder] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    dispatch({type: 'SEARCH', payload: searchTerm})
  }

  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSortOrder(sortValue);
    dispatch({type: 'SORT', payload: sortValue})
  }

  const totalPages = Math.ceil(state.users.length / usersPerPage)
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = state.users.slice(indexOfFirstUser, indexOfLastUser)

  return (
    <div className='flex text-zinc-300 min-h-screen overscroll-none'>
        <div className='hidden mdx:block'>
            <Sidebar />
        </div>

        <div className='flex-1 mdx:pl-64 bg-darkGray'>
            <div className='p-2 mdx:pl-0'>
                <Navbar />
            </div>

            <p className='text-xl font-semibold mt-8 pl-4 mdx:pl-6'>User Details</p>

            <div className='flex justify-between items-center mx-4 mt-8 mdx:mx-6'>
                <div className="flex items-center justify-between border border-zinc-700 rounded-md py-2 px-3 w-[200px] mdx:w-[300px] gap-3">
                    <input type="text" 
                        placeholder="Search..." 
                        className="bg-transparent outline-none text-sm placeholder:text-zinc-400 flex-1" 
                        value={search}
                        onChange={handleSearch} 
                    />
                    <assets.IoSearch className="text-zinc-400 cursor-pointer" />
                </div>

                <div className="relative flex items-center justify-between gap-3 border border-zinc-700 bg-darkGray px-4 rounded-md min-w-[172px]">
                    <select
                        className="bg-transparent py-2 text-zinc-300 text-sm rounded-md cursor-pointer outline-none"
                        value={sortOrder}
                        onChange={handleSort}
                    >
                        <option value="">Sort by</option>
                        <option value="ageAsc">Age (Ascending)</option>
                        <option value="ageDesc">Age (Descending)</option>
                        <option value="name">Name (A-Z)</option>
                        <option value="">Reset</option>
                    </select>
                </div>
            </div>
            
            <div className='mx-4 my-2 px-2 mdx:mx-6 mdx:px-6 border border-1 border-zinc-700 rounded-md mt-4'>
                <table className='w-full text-left'>
                    <thead>
                        <tr className='uppercase font-semibold text-gray-400 text-xs'>
                        <th className='p-4'>User</th>
                        <th className='p-4'>Age</th>
                        <th className='p-4'>Designation</th>
                        <th className='p-4'>Phone</th>
                        </tr>
                    </thead>
                    {state.users.length > 0 && (
                        <tbody className='text-white'>
                            {currentUsers.map((user) => (
                            <tr key={user.id} className='border-t border-slate-700'>
                                <td className='mt-5 smx:mt-0 pr-4 py-4 flex items-center gap-3'>
                                    <img src={user.image} className='w-8 rounded-lg' alt={user.firstName} />
                                    <div className='text-xs'>
                                        <p className='text-zinc-300 text-[13px] font-semibold'>{user.firstName} {user.lastName}</p>
                                    </div>
                                </td>
                                <td className='px-4 py-3 text-zinc-300 text-sm font-semibold'>{user.age}</td>
                                <td className='px-4 py-3 text-gray-400 text-sm'>{user.company.title}</td>
                                <td className='px-4 py-3 text-gray-400 text-sm'>{user.phone}</td>
                            </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
            <div className="flex justify-center my-6">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`mx-1 px-4 py-2 text-sm font-semibold border border-1 border-zinc-300 rounded-md smoothTransition ${
                        currentPage === i + 1 ? "bg-teal-900 text-white" : "bg-darkBlue text-white"
                    } hover:darkBlue`}
                    >
                    {i + 1}
                    </button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Details