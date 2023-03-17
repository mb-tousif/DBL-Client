import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import '../Pages/Home/home.css'

export default function Navbar() {

  // RESPONSIVE NAVBAR USING TOGGALE
  // const [open, setOpen] = useState(false);
  // NAVBAR SCROLL UP AND DOWN
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  //  MOSUSE HOVER NEVBAR STYLE CAHNGE 
  const [hoverHide, setHoverHide] = useState(false)
  // console.log(hoverHide)

  const handleMouseEnter = () => {
    setHoverHide(true);
  };

  const handleMouseLeave = () => {
    setHoverHide(false);
  };




  return (
    <nav className="fixeds">
      <div className="mx-auto container">
        {/* nav one  */}
        <div className={`nav-1 lg:justify-between sm:hidden lg:flex ${show && 'nav-hidden'}`}>
          <div className='nav-icon-1 '>
            <div className='flex'>
              <AiOutlineInstagram className='text-white ml-3 pr-3 w-7 h-7 font-bold'></AiOutlineInstagram>
              <GrTwitter className='text-white pr-3 w-7 ml-3 h-7 font-bold '></GrTwitter>
              <AiOutlineLinkedin className='text-white pr-3 ml-3 w-7 h-7 font-bold ' ></AiOutlineLinkedin>
              <AiOutlineYoutube className='text-white pr-3 ml-3 w-7 h-7 font-bold ' ></AiOutlineYoutube>
            </div>
          </div>
          <div className='nav-manu-1'>
            <div className='text-white text-[13px] flex'>
              <h2 className='pl-3'>ONLINE BANKING</h2>
              <h2 className='pl-3'>FORMS</h2>
              <h2 className='pl-3 mr-3'>CONTACT</h2>
            </div>
          </div>
        </div>
        {/* nav two  */}
        <div className={`nav-2-fixed ${show && 'nav-2-top'} ${!show && 'nav-2-animation'}`}>

          <div onMouseEnter={handleMouseLeave} className={`flex nav-2 ${hoverHide && 'nav-Hide'} 
          bg-[#ffffffcc]  nav-border-left nav-border-right
           ${show && 'nav-border-left-none nav-border-right-none'}`}>

            <div className={`style-1 flex-none w-[4%] py-4  nav-border-left ${show && 'nav-border-left-none'}`}></div>
            <div className="logo flex-1 w-[24%] py-4 pl-4 ">
              <h1 className=" text-[#03A776] px-3  justify-end rounded-md text-lg md:text-xl font-medium">
                𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 𝕭𝖆𝖓𝖐 𝕷𝖙𝖉
              </h1>
            </div>
            <div className=" w-[70%] flex justify-end py-4 pr-4">
              <div onMouseEnter={handleMouseEnter} className={`nav-manu`}>
                <Link

                  to="/"
                  className="text-[#0D1519] px-3 justify-end rounded-md text-base md:text-[15px] link font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className=" text-[#0D1519] px-3 justify-end rounded-md link text-base md:text-[15px] font-medium"
                >
                  About
                </Link>
                <Link
                  to="/carriers"
                  className=" text-[#0D1519] px-3 justify-end rounded-md link text-base md:text-[15px] font-medium"
                >
                  Carriers
                </Link>
                <Link
                  to="/dashboard"
                  className="text-[#0D1519] px-3 justify-end rounded-md link text-base md:text-[15px] font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to=""
                  className="text-[#0D1519] px-3 justify-end rounded-md link text-base md:text-[15px] font-medium"
                >
                  En
                </Link>
                <Link
                  to="/login"
                  className="text-[#0D1519] px-3 justify-end rounded-md link text-base md:text-[15px] font-medium"
                >
                  Login
                </Link>
              </div>

            </div>

            <div className={`style-2 flex-none ${hoverHide && 'nav-Hide'} w-[4%] py-4 nav-border-right ${show && 'nav-border-right-none'}`}></div>
          </div>
          {/* <div onClick={() => setOpen(!open)} className="-mr-2 flex sm:hidden">
            {open ? (
              <AiOutlineClose className="w-8 h-8 text-gray-50" />
            ) : (
              <GiHamburgerMenu className="w-8 h-8 text-gray-50" />
            )}
          </div> */}
        </div>
      </div>
    </nav>
  )
}