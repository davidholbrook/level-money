import React from "react";
import LabelSwitch from '../utils/labelsSwitch';

import Dexie from 'dexie';
import { useLiveQuery } from "dexie-react-hooks";

function Monthly() {
	
	const db = new Dexie("llatDB");
   	db.version(1).stores({
	 	transact: "++id,amount,store,label"
	});
	
	const allItems = useLiveQuery(() => db.transact.toArray(), []);
    if (!allItems) return null;
	
	const addItemToDb = async event => {
		event.preventDefault()
		const amount = document.querySelector('.item-price').value
		const store = document.querySelector('.item-store').value
		const label = 1
		await db.transact.add({ amount, store, label })
  	}
	
  	const removeItemFromDb = async id => {
		await db.transact.delete(id)
  	}
	
	return (
		<div className="bg-lite h-screen w-1/2">
			<div className="p-3 border-b-2 border-dark flex justify-between items-center">
				<h2 className="fancy text-2xl text-dark">Monthly</h2>
				<p className="font-semibold text-xl"><span className="text-secondary"></span> | $300</p>
			</div>
			{allItems.map((item) => (
				<div className="flex items-center gap-2">
				<p className="my-4 pl-4 text-xl" key={item.id}>${item.amount} {item.store} {LabelSwitch(item.label)}</p>
				<button onClick={() => removeItemFromDb(item.id)} className="border-2 border-secondary text-secondary cursor-pointer rounded-full py-0 px-2">X</button>
				</div>
			))}
			
			<form className="add-item-form" onSubmit={event => addItemToDb(event)} >
			  <input type="number" step=".01" className="item-price" placeholder="Price in USD" required/>
			  <input type="text" className="item-store" placeholder="Store" required/>
			  <button type="submit" className="waves-effect waves-light btn right">Add item</button>
			</form>
		</div>
	)
};

export default Monthly;