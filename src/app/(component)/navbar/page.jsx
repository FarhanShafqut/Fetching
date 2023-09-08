'use client'
import Link from 'next/link'
import React , {useState , useEffect} from 'react'
// npm add react-icons
import {AiOutlineMenu,AiOutlineClose,AiOutlineSearch} from 'react-icons/ai'

export default function Navbar() {
  const [nav, Setnav] = useState(false)
  // const [color, Setcolor] = useState('transparent')
  const [color, Setcolor] = useState('transparent')

  const [textcolor, Settextcolor] = useState('Gray')

const handlenav = () =>{
  Setnav(!nav)
}

useEffect(()=>{
  const changeColor = () => {
    if (window.scrollY >=90 ){
      Setcolor(`Blue`);
      Settextcolor(`White`);
    }
    else{
      Setcolor('transparent');
      Settextcolor(`Gray`);
    }
  }; window.addEventListener('scroll',changeColor)
}
,[]);
  return (
    // fixed left-0 top-0  
    <div className=''>
    <div style={{backgroundColor : `${color}`}} className=' fixed  left-0 top-0 z-10 w-full  ease-in duration-300  ' >
        <div className='max-w-[1240px]  m-auto flex justify-between items-center p-4  '>
          <Link href="./">
           <h1 style={{color : `${textcolor}`}}  className='font-semibold text-lg' >Navbar</h1>
          </Link>
        <ul style={{color : `${textcolor}`}} className='hidden lg:flex ' >
          <li> <Link href='./' className='p-4   hover:text-slate-500 cursor-pointer'> Home</Link> </li>
          <li> <Link href='./about' className='p-4   hover:text-slate-500 cursor-pointer'> About</Link> </li>
          {/* <li> <Link href='./' className='p-4   hover:text-slate-500 cursor-pointer'> Page</Link> </li> */}
          <li> <Link href='./service' className='p-4   hover:text-slate-500 cursor-pointer'> Services </Link> </li>
          {/* <li> <Link href='./' className='p-4   hover:text-slate-500 cursor-pointer'> Portfolio</Link> </li> */}
          <li> <Link href='./blog' className='p-4   hover:text-slate-500 cursor-pointer'> Blog</Link> </li>
          <li> <Link href='./contact' className='p-4   hover:text-slate-500 cursor-pointer'>Contact  </Link> </li>
        </ul>
        <ul  style={{color : `${textcolor}`}} className='hidden lg:flex ' >
          <li  className=' text-sm flex items-center hover:text-gray-500 '> <input type="text" className='p-2 outline-none border-none pl-6 rounded-full text-blue-900 font-semibold  focus:border-blue-500'  placeholder='Search' /><AiOutlineSearch size={25} className='relative -translate-x-9' /></li>
          </ul>
          {/* Mobile Button  */}
          <div onClick={handlenav}   className='block  lg:hidden z-10 '>
            {nav ? <AiOutlineClose size={20} style={{color : `${textcolor}`,  }} />  :  <AiOutlineMenu size={20} style={{color : `${textcolor}`}}  />}
          </div>
          {/* Mobile menu  */}
          <div className={nav ? 'lg:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300 ' : 'lg:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300 '}>
          <ul>
          <li> <Link href='./' className='p-4 text-4xl hover:text-gray-500 cursor-pointer ' >Home </Link> </li>
          <li> <Link href='./about' className='p-4 text-4xl hover:text-gray-500 cursor-pointer' >About</Link> </li>
          {/* <li Link href='./' className='p-4 text-4xl hover:text-gray-500 cursor-pointer '> Page</li> */}
          <li> <Link href='./service' className='p-4 text-4xl hover:text-gray-500 cursor-pointer ' >Services</Link>  </li>
          {/* <li Link href='./' className='p-4 text-4xl hover:text-gray-500 cursor-pointer '> Portfolio</li> */}
          <li> <Link href='./blog' className='p-4 text-4xl hover:text-gray-500 cursor-pointer ' > Blog</Link> </li>
          <li> <Link href='./contact' className='p-4 text-4xl hover:text-gray-500 cursor-pointer '> Contact</Link>  </li>

          <li  className=' text-sm flex items-center hover:text-gray-500 cursor-pointer '> <input type="text" className='p-2 pl-6 rounded-full text-blue-900 font-semibold focus:border-blue-500'  placeholder='Search' /><AiOutlineSearch size={25} className='relative -translate-x-9' /></li>
          </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
