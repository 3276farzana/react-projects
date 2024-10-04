import React from 'react'
import Logo from '../Logo.jsx';
import LogoutBtn from './LogoutBtn.jsx';
import Container from '../container/Container.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  //to check it from state if it's authenticate or not
  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate();
  //to use useNavigate we have to make an array and loop it

  const navItems=[
    {name:'Home',
      slug:'/',
      active:true
    },
    {
      name:'Login',
      slug:'/login',
      active: !authStatus
    },
    {
      name:'Logout',
      slug:'/logut',
      active: !authStatus
    },
    {
      name:'Signup',
      slug:'/signup',
      active: authStatus
    },
    {
      name:'All Posts',
      slug:'/all-posts',
      active: authStatus
    },
    {
      name:'Add Post',
      slug:'/all-post',
      active: authStatus
    }
  ]
  return (
    <header>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='75px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>item.active ? (
              //the one where html element is being repeate, there should be used keys
              <li key={item.name}>
                <button onClick={()=>navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
              </li>
            ) :null)}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
