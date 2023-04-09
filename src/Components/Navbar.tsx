import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineClose, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import '../Pages/Home/home.css'

export default function Navbar() {
  const [open, setOpen] = useState(false);
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

  const [hoverHide, setHoverHide] = useState(false);
  const handleMouseEnter = () => {
    setHoverHide(true);
  };

  const handleMouseLeave = () => {
    setHoverHide(false);
  };

  return (
    <nav className="position">
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
          <div className='nav-menu-1'>
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
                  to="/blogs"
                  className="text-[#0D1519] px-3 justify-end rounded-md link text-base md:text-[15px] font-medium"
                >
                  Blogs
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
          <div onClick={() => setOpen(!open)} className="-mr-2 flex sm:hidden">
            {open ? (
              <AiOutlineClose className="w-8 h-8 text-gray-50" />
            ) : (
              <GiHamburgerMenu className="w-8 h-8 text-gray-50" />
            )}
          </div>
          <div
        className={`${
          open ? "block" : "hidden"
        } absolute z-20 bg-[#232274f9] w-full md:hidden opacity-90`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 translate ease-in-out duration-300">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/carriers"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Carriers
          </Link>
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Blogs
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
        </div>
        </div>
        </div>
      </div>
    </nav>
  )
}