import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-20 transition-all ease-in-out duration-300 bg-white'>
    <nav className='montserrat m-auto flex max-w-screen-2xl justify-between p-5 md:py-5 md:px-10 xl:py-5 xl:px-11 bg-[#004733]'>
        <div className='flex flex-row'>
            <ul className='flex items-center'>
                <li className='mr-2'>
                    <a className="font-normal transition-all ease-in-out duration-300 group-hover:bg-backgroundSecondary group-hover:text-white text-blck hover:text-blck hover:bg-inherit" href="/">
                        <svg role="img" className="icon icon-LogoBetter2021" width="65px" height="20px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Better</title>
                            <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </li>
                <li className='mx-5 hidden xl:block'>
                    <div className='group relative'>
                    <button className="rounded-full py-1 font-medium transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black"
                        >Buy</button>
                    </div>
                </li>
                <li className='mx-5 hidden xl:block'>
                    <div className='group relative'>
                    <button className="rounded-full py-1 font-medium transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black"
                        >Refinance</button>
                    </div>
                </li>
                <li className='mx-5 hidden xl:block'>
                    <div className='group relative'>
                    <Link className="rounded-full py-3 font-medium transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black"
                        href="/start"
                        >Start</Link>
                    </div>
                </li>
                <li className='mx-5 hidden xl:block'>
                    <div className='group relative'>
                    <Link className="rounded-full py-3 font-medium transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black"
                        href="/about-us"
                        >About Us</Link>
                    </div>
                </li>
                <li className='mx-5 hidden xl:block'>
                    <div className='group relative'>
                    <Link className="rounded-full py-3 font-medium transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black"
                        href="/mortgage-calculator"
                        >Mortgage Calculator</Link>
                    </div>
                </li>
            </ul>
        </div>
        <ul className='flex items-center gap-3 lg:gap-6'>
            <li>
                <div className='group min-[520px]:relative'>
                    <div className='transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 border-strokeBorder group-hover:bg-white group-hover:border-white'>
                        <svg width="19" height="18" viewBox="0 0 19 18" className="transition-all fill-white ease-in-out group-hover:[&_path]:fill-black [&_path]:fill-white h-3 w-3 md:h-4 md:w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z" fill="white"></path>
                        </svg>

                        <div className='absolute invisible left-1 min-[520px]:left-auto right-0 pt-6 group-hover:visible'>
                            <div className=' bg-white text-black px-10 py-7 rounded-lg w-80 shadow-md'>
                                Call us anytime at
                                <Link className="underline hover:text-textHighlight pl-1" href="tel:4155238837">415-523-8837</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className='hidden md:block'>
            <Link 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 bg-transparent py-5 w-auto font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-white hover:text-[#004733] group-hover:bg-white group-hover:text-[#004733]" 
                href="#"
                >Sign in</Link>
            </li>
            <li className='transition-all duration-500 ease-in block'>
            <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-[#1EE07F] text-black hover:bg-[#004733] hover:text-white py-3 w-auto h-8 px-4 md:px-6 md:h-12" href="#">Continue</Link>
            </li>
            <li>

            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar