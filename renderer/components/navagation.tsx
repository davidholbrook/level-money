import React from 'react'
import Link from 'next/link';

const Navagation = () => {
	return (
		<div className="flex justify-between bg-red-50">
			<h1>Level Money</h1>
			<div className="flex gap-5">
				<Link href="/monthly" className="text-black">Monthly</Link>
				<Link href="/special">Special</Link>
			</div>
		</div>
	)
}

export default Navagation;