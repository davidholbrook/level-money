import React from 'react';
import Link from 'next/link'

 function FloatingPlus() {
  return (
    <div className="floatingPlus cursor-pointer">
    <Link href="/createform" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#ffffff" className="w-14 h-14">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </Link>
    </div>
  )
}

export default FloatingPlus;

