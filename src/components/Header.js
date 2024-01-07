import React from 'react'

const Header = () => {
  return (
    <div className='header'>
       <span className='logo-name'> GeekGallary</span>

       <div>
        <input type='text' className='input' placeholder='search...'/>
        <button>search</button>
       </div>
      
    </div>
  )
}

export default Header
