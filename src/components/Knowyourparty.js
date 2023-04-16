import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Knowyourparty() {
    return (
        <div>
            <center>
                <div className='w-5/6'>
                    <div>
                        <br />
                        <br />
                        <h1 className='text-5xl font-bold font-serif'>Know Your Party</h1>
                    </div>
                    <br />
                    <br />
                    <div className='flex justify-evenly'>
                        <button className='text-3xl bg-red-700 p-4 text-white rounded-full'>
                            Party A
                        </button>
                        <button className='text-3xl bg-blue-700 p-4 text-white rounded-full'>
                            Party B
                        </button>
                        <button className='text-3xl bg-green-700 p-4 text-white rounded-full'>
                            Party C
                        </button>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </center>
        </div>
    )
}

export default Knowyourparty
