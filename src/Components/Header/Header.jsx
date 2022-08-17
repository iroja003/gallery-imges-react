import React from 'react'

const Header = (props) => {
  return (
    <div className='bg-info d-flex justify-content-center align-items-center'>
       <h1 className={'titulo==null ? null:.titulo'}>{props.titulo}</h1> 
    </div>   
  )
}

export default Header