import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-row fixed bottom-0 w-full  px-10 mt-8 py-4 bg-[#000000]">
      <nav className="flex flex-row justify-between gap-5 items-center text-white">
        <div>
          <a href="#">NITK Food Court &copy; 2025 | All rights reserved</a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;