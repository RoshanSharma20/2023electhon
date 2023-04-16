import React from 'react'
import { Link } from "react-router-dom";
import ec from './electioncommision (1).jpg'

function Navbar() {
    return (
        <>
            <nav className="bg-sky-200 font-serif font-bold">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="block h-14 w-auto lg:hidden" src={ec} alt="Election Commission" />
                                <img className="hidden h-14 w-auto lg:block" src={ec} alt="Election Commission" />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to="/" className="hover:bg-gray-700 hover:rounded-full hover:text-white text-xl rounded-md pl-3 py-2 font-bold">Home</Link>

                                    <Link to="/aboutus" className="hover:bg-gray-700 hover:rounded-full hover:text-white text-xl rounded-md pl-3 py-2 font-bold">About US</Link>

                                    <Link to="/votingmadesimple" className="hover:bg-gray-700 hover:rounded-full hover:text-white text-xl rounded-md pl-3 py-2 font-bold">Voting Made Simple</Link>

                                    <Link to="/knowyourparty" className="hover:bg-gray-700 hover:rounded-full hover:text-white text-xl rounded-md pl-3 py-2 font-bold">Know Your Party</Link>

                                    <Link to="/activities" className="hover:bg-gray-700 hover:rounded-full hover:text-white text-xl rounded-md pl-3 py-2 font-bold">Activities</Link>

                                    <Link to="/leaderboard" className="hover:bg-gray-700 hover:rounded-full hover:text-white text-xl rounded-md pl-3 py-2 font-bold">LeaderBoard</Link>

                                    <Link to="/login" className="hover:bg-gray-700 hover:rounded-full hover:text-white text-xl rounded-md pl-3 py-2 font-bold">Login/Register</Link>
                                    <Link to="/profile" className="bg-sky-300">&nbsp;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">

                        <a href="/" className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold" aria-current="page">Home</a>

                        <a href="/aboutus" className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold">About Us</a>

                        <a href="/votingmadesimple" className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold">Voting Made Simple</a>

                        <a href="/knowyourparty" className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold">Know Your Party</a>

                        <a href="/activities" className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold">Activities</a>

                        <a href="/leaderboard" className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold">LeaderBoard</a>

                        <a href="/login" className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-bold">Login/Register</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
