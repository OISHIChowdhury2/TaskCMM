import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Services ', path: '/service' },
    { id: 4, text: 'Events ', path: '/event' },
  ];

  return (
    <div className='sticky top-0 w-full flex justify-between items-center h-19 px-4 text-black z-50'>
      {/* <h1 className='text-3xl font-bold text-[#00df9a]'> <img src={logo} className="App-logo" alt="logo" /></h1> */}
      <a href="javascript:void(0)"><img
            src='image' alt="logo" class='w-40 mb-8 mx-auto block' />
          </a>
      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2  hover:underline m-1 cursor-pointer duration-300 '
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className='md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='text-3xl font-bold text-[#00df9a] m-4'>Website</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.path} onClick={handleNav}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
