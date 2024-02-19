import React, { useState, useEffect } from "react";
import JSONdata from '../data/data.json'

export default function Monthly() {	
	
	const transactions = JSONdata.transactions;
	
	function labelsSwitch(param) {
	  switch(param) {
		case 1:
		  return <span className="text-[rebeccapurple] border border-[rebeccapurple] rounded-md align-middle p-1 uppercase text-sm">Food
		  </span>;
		case 2:
		  return <span className="text-[#d11d05] border border-[#d11d05] rounded-md align-middle p-1 uppercase text-sm">Gas
		  </span>;
		case 3:
		  return <span className="text-[#1D1075] border border-[#1D1075] rounded-md align-middle p-1 uppercase text-sm">Services
		  </span>;
		case 4:
		  return <span className="text-[#FA7A55] border border-[#FA7A55] rounded-md align-middle p-1 uppercase text-sm">Misc.
		  </span>;
		default:
		  return <span className="text-[#FA7A55] border border-[#FA7A55] rounded-md align-middle p-1 uppercase text-sm">Misc.
		  </span>;
	  }
	}
	
	function totalUp(){
		let number = 0
		
		for (const trans of transactions){
			number += trans.amount
		}
		
		return number;
	}
	
	function deleteTrans(id){
		console.log(transactions);
		console.log("------------ slicing -------------");
		var deletedItem = transactions.splice(1,1);
		console.log(transactions);
	}
	
	return (
		<div className="bg-lite h-screen w-1/2">
			<div className="p-3 border-b-2 border-dark flex justify-between items-center">
				<h2 className="fancy text-2xl text-dark">Monthly</h2>
				<p className="font-semibold text-xl"><span className="text-secondary">${totalUp()}</span> | $300</p>
			</div>
			
			{transactions.map((trans) => (
				<p className="my-4 pl-4 text-xl" key={trans.id}>-${trans.amount} {trans.discription} {labelsSwitch(trans.label)}
				</p>
			  ))}
			  
		</div>
	)
}
