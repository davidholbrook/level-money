import React from 'react'

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

export default labelsSwitch
