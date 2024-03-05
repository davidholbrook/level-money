import React from 'react';
import Icons from '../icons/icons';

const Header = () => (
  <div className="bg-darkgrey min-h-screen">
    <h1 className="fancy text-primary text-2xl font-bold text-center py-3">
      Level Money
    </h1>
    <ul className="text-lg">
      <li className="border-t border-b border-white py-4 bg-primary text-black text-center ">
        Monthly
      </li>
      <li className="border-b border-white py-4 text-white text-center">
        Special
      </li>
    </ul>
    <button
      type="button"
      className="relative top-[65vh] mx-auto  flex items-center justify-center bg-primary rounded-md p-3"
    >
      <Icons icon="plus" />
      <span className="uppercase text-[1rem] font-semibold text-darkgrey fancy">
        Add Transaction
      </span>
    </button>
  </div>
);

export default Header;
