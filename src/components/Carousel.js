import React from 'react'
import Table from './Table'
import first from '../img/first.jpeg'
import second from '../img/second.jpeg'
import third from '../img/third.jpeg'

function Carousel() {
    return (
        <>
            <center>
                <br />
                <div
                    id="carouselExampleCaptions"
                    className="relative w-5/6 border-double border-8 border-gray-400"
                    data-te-carousel-init
                    data-te-carousel-slide>
                    <div
                        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                        data-te-carousel-indicators>
                        <button
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide-to="0"
                            data-te-carousel-active
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-current="true"
                            aria-label="Slide 1"></button>
                        <button
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide-to="1"
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide 2"></button>
                        <button
                            type="button"
                            data-te-target="#carouselExampleCaptions"
                            data-te-slide-to="2"
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide 3"></button>
                    </div>
                    <div
                        className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <div
                            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-active
                            data-te-carousel-item
                            align="backface-visibility: hidden">
                            <img
                                src={third}
                                className="block w-full"
                                alt="..." />
                        </div>
                        <div
                            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-item
                            align="backface-visibility: hidden">
                            <img
                                src={first}
                                className="block w-full"
                                alt="..." />
                        </div>
                        <div
                            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-item
                            align="backface-visibility: hidden">
                            <img
                                src={second}
                                className="block w-full"
                                alt="..." />
                        </div>
                    </div>
                    <button
                        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide="prev">
                        <span className="inline-block h-8 w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)">Previous</span>
                    </button>
                    <button
                        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide="next">
                        <span className="inline-block h-8 w-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
                    </button>
                </div>
            </center>


            <br />
            <br />
            <center>
                <div className='bg-sky-200 rounded-full w-5/6'>
                    <h1 className='text-5xl font-serif pt-3'>"Join the ranks of responsible voters-register now"</h1>
                    <br />
                    <br />
                    <button className='rounded-full bg-sky-500 text-white text-3xl px-4 py-4 animate-bounce font-serif' >Call To Action</button>
                </div>
            </center>
            <br />
            <br />
            <center>
                <div className='w-5/6'>
                    <hr />
                </div>
            </center>
            <br />
            <center>
                <h1 className='text-5xl w-5/6 pt-8 font-Helvetica'>
                    Our Leadership is more than just a ranking system-it's community of people who care about making their voice heard and shaping the future of our society.
                </h1>
            </center>

            <center>
                <div className='w-5/6 py-16'>
                    <Table />
                </div>
            </center>
        </>
    )
}
export default Carousel

