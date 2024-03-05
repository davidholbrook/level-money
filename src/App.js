import React, { useState } from 'react';
import './App.css';

import Icons from './icons/icons';
import Monthly from './layout/monthly';
import Special from './layout/special';

import AddToDb from './components/addToDb';

function App() {
  const [state, setState] = useState({
    page: 'monthly',
    addPage: false,
  });

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <div className="bg-darkgrey min-h-screen">
          <h1 className="fancy text-primary text-2xl font-bold text-center py-3">
            Level Money
          </h1>
          <ul className="text-lg">
            <li className="border-t border-b border-white py-4 bg-primary text-black text-center">
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
            <button
              type="button"
              onClick={() => {
                const dd = true;
                setState({
                  ...state,
                  addPage: dd,
                });
              }}
              className="uppercase text-[1rem] font-semibold text-darkgrey fancy"
            >
              Add Transaction
            </button>
          </button>
        </div>
      </div>
      <div className="col-span-10">
        {state.page === 'monthly' ? <Monthly /> : <Special />}
        {state.addPage === true ? (
          <AddToDb
            remove={() => {
              const dd = false;
              setState({ ...state, addPage: dd });
            }}
          />
        ) : null}
      </div>{' '}
    </div>
  );
}

export default App;
