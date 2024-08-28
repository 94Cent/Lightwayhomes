import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import LogoColoured from "../../assets/images/logo-colured.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="shadow-md bg-white">
      <div className="container mx-auto xl:px-12 md:px-6 px-4 py-4 flex justify-between items-center text-purple">
        <Link to="/" className="text-2xl text-purple">
        <img src={LogoColoured} alt="Logo" className="w-32 h-20" />
        </Link>

        <Navbar />
        <div className="md:flex hidden gap-x-1 justify-center item-center flex-row-reverse my-auto text-purple border-[1.5px] border-purple rounded-[10px] py-2 px-3">
          <a href="tel:+2348075161213" className="">
            +2348075161213
          </a>
          <svg
            width="17"
            height="16"
            className="mt-1"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.69016 7.14981C4.9279 9.58232 6.92204 11.5679 9.35454 12.8142L11.2455 10.9232C11.4776 10.6911 11.8214 10.6138 12.1223 10.7169C13.085 11.0349 14.125 11.2069 15.1908 11.2069C15.6636 11.2069 16.0504 11.5936 16.0504 12.0664V15.0662C16.0504 15.5389 15.6636 15.9257 15.1908 15.9257C7.11973 15.9257 0.578613 9.38463 0.578613 1.31352C0.578613 0.840774 0.965407 0.453979 1.43816 0.453979H4.44655C4.9193 0.453979 5.3061 0.840774 5.3061 1.31352C5.3061 2.38795 5.478 3.4194 5.79604 4.38209C5.89058 4.68293 5.82182 5.01815 5.58115 5.25882L3.69016 7.14981Z"
              fill="#800080"
            />
          </svg>
        </div>

        <div className="text-purple group cursor-pointer lg:hidden">
          <div onClick={toggleNavbar}>
            <svg
              width="30"
              height="30"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
          <div
            className={`bg-white w-full absolute left-0 top-0 z-20 pt-1 pb-4 px-1 ${
              isOpen ? "block" : "hidden"
            } rounded-br-3xl rounded-bl-3xl`}
          >
            <div className="flex justify-end items-center text-2xl border-2 border-purple p-2 py-4 rounded-2xl">
              <div className="text-center w-full">LWH...</div>
              <div onClick={toggleNavbar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
              </div>
            </div>
            <MobileNavbar setIsOpen={setIsOpen} />
            <div className="flex gap-x-1 justify-center items-center flex-row-reverse text-purple border-[1.5px] border-purple rounded-[10px] py-2 px-3 w-min mx-auto mt-4">
              <a href="tel:+2348075161213" className="">
                +2348075161213
              </a>
              <svg
                width="17"
                height="16"
                className="mt-1"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.69016 7.14981C4.9279 9.58232 6.92204 11.5679 9.35454 12.8142L11.2455 10.9232C11.4776 10.6911 11.8214 10.6138 12.1223 10.7169C13.085 11.0349 14.125 11.2069 15.1908 11.2069C15.6636 11.2069 16.0504 11.5936 16.0504 12.0664V15.0662C16.0504 15.5389 15.6636 15.9257 15.1908 15.9257C7.11973 15.9257 0.578613 9.38463 0.578613 1.31352C0.578613 0.840774 0.965407 0.453979 1.43816 0.453979H4.44655C4.9193 0.453979 5.3061 0.840774 5.3061 1.31352C5.3061 2.38795 5.478 3.4194 5.79604 4.38209C5.89058 4.68293 5.82182 5.01815 5.58115 5.25882L3.69016 7.14981Z"
                  fill="#800080"
                />
              </svg>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
