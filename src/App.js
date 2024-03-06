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
            <li
              className={`border-b border-t border-white py-4 text-white text-center cursor-pointer ${state.page === 'monthly' ? 'bg-primary !text-black' : ''}`}
            >
              <a
                onClick={() => {
                  const dd = 'monthly';
                  setState({ ...state, page: dd });
                }}
                onKeyDown={() => {
                  const dd = 'monthly';
                  setState({ ...state, page: dd });
                }}
                role="link"
                tabIndex={0}
              >
                Monthly
              </a>
            </li>
            <li
              className={`border-b border-white py-4 text-white text-center cursor-pointer ${state.page === 'special' ? 'bg-primary !text-black' : ''}`}
            >
              <a
                onClick={() => {
                  const dd = 'special';
                  setState({ ...state, page: dd });
                }}
                onKeyDown={() => {
                  const dd = 'special';
                  setState({ ...state, page: dd });
                }}
                role="link"
                tabIndex={0}
              >
                Special
              </a>
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
            state
          />
        ) : null}
      </div>{' '}
    </div>
  );
}

export default App;
