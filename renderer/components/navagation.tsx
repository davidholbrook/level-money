import React from 'react'
import Link from 'next/link';

const Navagation = () => {
	return (
		<div className="flex justify-between items-center bg-red-50 py-4 px-3">
			<h1 className="text-2xl"><Link href="/home">Level Money</Link></h1>
			<div className="flex gap-5">
				<Link href="/monthly" className="text-black">Monthly</Link>
				<Link href="/special">Special</Link>
			</div>
		</div>
	)
}

export default Navagation;