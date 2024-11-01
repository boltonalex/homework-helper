import React from 'react'

function Loader() {
  return (
    <div className='flex w-full h-screen bg-primaryBtnBG justify-center items-center'>

      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader