import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Container from '../Container/Container';
import Logo from '../Logo/logo';
import LogoutBtn from './LogoutBtn';

function Header() {
  const navigate = useNavigate();
  const authStatus = true;

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className='py-3 shadow-md bg-blue-950'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Logo width='70px' />
          </div>
          <ul className='flex ml-auto items-center gap-2'>
            {navItems.map((item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 text-orange-200 hover:bg-teal-700 hover:text-white rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              )
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
