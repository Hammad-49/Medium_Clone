import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex justify-between p-1 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img 
                clasName="w-44 onject-contain cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0vUj1wIVsGNyjttiuX6kJYjIQdrmK-gZkA&usqp=CAU" alt="" />
              </Link>
              <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
              </div>
        </div>
        <div className='flex items-center space-x-5 text-green-600'>
            <h3>Sign In</h3>
            <h3 className='border px-4 py-1 rounded-full border-green-600'>
                Get Started</h3>
        </div>
    </header>
  );
}

export default Header;