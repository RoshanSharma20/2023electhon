import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import badges from './badges.jpg'
import Demoboard from './Demoboard';


function Leaderboard() {
    return (
        <>
            <br />
            <center>
                <div className='w-5/6'>
                    <img src={badges} alt="" className='border-double border-8 border-gray-600' />
                </div></center>
            <br />
            <br />
            <center>
                <div className='w-5/6'>
                    <h1 className='text-5xl'>Democracy is not a spectator sport</h1>
                    <h1 className='text-5xl'>get in the game and vote!</h1>
                </div></center>
            <center>
                <div className='w-5/6'>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" className="px-6 py-4">Ranking</th>
                                                <th scope="col" className="px-6 py-4">Username</th>
                                                <th scope="col" className="px-6 py-4">Points</th>
                                                <th scope="col" className="px-6 py-4">Badge</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* its moving row wise ensure while rendering things */}
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                                <td className="whitespace-nowrap px-6 py-4">15</td>
                                                <td className="whitespace-nowrap px-6 py-4">Gold</td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                                <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                                <td className="whitespace-nowrap px-6 py-4">10</td>
                                                <td className="whitespace-nowrap px-6 py-4">Silver</td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                                <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                                <td className="whitespace-nowrap px-6 py-4">5</td>
                                                <td className="whitespace-nowrap px-6 py-4">Bronze</td>
                                            </tr>
                                            {/* <Demoboard /> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}


export default Leaderboard
