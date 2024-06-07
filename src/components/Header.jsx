import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiX, FiMenu } from 'react-icons/fi'; 
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <span
        onClick={handleToggle}
        className="text-gray-700  hover:text-gray-900 font-bold mb-3 md:mb-0 cursor-pointer flex items-center"
      >
        <span className="mr-2">{title}</span>
        <span className="flex items-center">
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </span>
      {isOpen && (
        <div className="absolute top-full left-0 bg-violet-100  border border-gray-300 py-2 mt-1 rounded-md shadow-md z-10">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="block whitespace-nowrap px-4 py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Define your navigation items here
  const navItems = [
    { name: 'About Us', link: '/about' },
    { name: 'Career', link: '/career' },
    { name: 'IT Services', link: '/it-services' },
  ];

  return (
    <header className="py-4 md:px-16 flex items-center font-sen">
      <div className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="w-[142px] h-[36.91px] mr-4" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex font-bold space-x-4 md:space-x-8">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={`text-gray-700 pl-4 hover:text-gray-900 ${activeLink === item.name.toLowerCase() ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick(item.name.toLowerCase())}
          >
            {item.name}
          </NavLink>
        ))}

        <Dropdown
          title="Web & App Services"
          items={[
            { name: 'Service 1', link: '/service-1' },
            { name: 'Service 2', link: '/service-2' },
            { name: 'Service 3', link: '/service-3' },
          ]}
        />

      </nav>

      {/* Contact Us */}
      <NavLink
        to="/contact"
        className="whitespace-nowrap flex items-center bg-[#7F56D9] text-white py-2 px-4 ml-auto rounded-md"
      >
        Contact Us
      </NavLink>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden ml-2 mr-2 focus:outline-none"
        onClick={toggleNav}
      >
        {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isNavOpen && (
       <div className="md:hidden bg-[#F4F5FF] w-full absolute top-16 left-0 py-2 px-4 mt-1 rounded-md shadow-md flex flex-col">
       {navItems.map((item, index) => (
         <NavLink
           key={index}
           to={item.link}
           className="text-gray-700 font-bold hover:text-gray-900 py-2"
           onClick={() => {
             setIsNavOpen(false);
             handleLinkClick(item.name.toLowerCase());
           }}
         >
           {item.name}
         </NavLink>
       ))}

       <Dropdown
         title="Web & App Services"
         items={[
           { name: 'Service 1', link: '/service-1' },
           { name: 'Service 2', link: '/service-2' },
           { name: 'Service 3', link: '/service-3' },
         ]}
       />
     
     
     </div>
     
      )}
    </header>
  );
};

export default Header;
