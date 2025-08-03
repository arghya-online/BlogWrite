import React from 'react'
import { Link } from 'react-router-dom';


const Container = ({ children }) => {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
};

// Simple SVG Logo component with retro styling.
const Logo = ({ width = "70px" }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-orange-400"
    >
      <rect x="5" y="5" width="40" height="40" rx="8" ry="8" />
      <path d="M15 15h20v20h-20z" />
    </svg>
  );
};

// Simple LogoutBtn component.
const LogoutBtn = () => {
  return (
    <button
      className='inline-block px-6 py-2 duration-200 bg-teal-700 hover:bg-teal-500 text-white rounded-full'
      onClick={() => console.log('Logout clicked!')}
    >
      Logout
    </button>
  );
};


function Header() {
  // authStatus is now a hardcoded value to ensure the component renders.
  const authStatus = true;

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className='py-3 shadow-md bg-blue-950'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <div> 
              <Logo width='70px' />
            </div>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 text-orange-200 hover:bg-teal-700 hover:text-white rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
