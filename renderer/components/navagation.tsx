import React from 'react'
import Link from 'next/link';

const Navagation = () => {
	return (
		<div>
			<h1>Level Money</h1>
			<div>
				<Link href="/monthly">Monthly</Link>
				<Link href="/special">Special</Link>
			</div>
		</div>
	)
}

export default Navagation;