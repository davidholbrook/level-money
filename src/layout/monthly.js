import React from 'react';

import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import LabelSwitch from '../utils/labelsSwitch';
import Icons from '../icons/icons';

function Monthly() {
  const db = new Dexie('llatDB');
  db.version(1).stores({
    transact: '++id,amount,store,label',
  });

  const allItems = useLiveQuery(() => db.transact.toArray(), []);
  if (!allItems) return null;

  const removeItemFromDb = async (id) => {
    if (window.confirm('Do you want to delete this transaction?')) {
      await db.transact.delete(id);
    }
  };

  function TotalUp() {
    let number = 0;

    for (const trans of allItems) {
      number += parseFloat(trans.amount);
    }
    number = process.env.REACT_APP_SPEND_INCOME - number;
    number = number <= 0 ? 0 : number;
    return number;
  }

  return (
    <div className="bg-[#EEEEEE] min-h-screen flex">
      <div className="w-1/2 px-10 pt-6">
        <h2 className="uppercase fancy font-bold text-3xl text-dark text-center">
          Monthly Spending
        </h2>
        <h3 className="fancy italic text-dark text-2xl text-center mb-6">
          March 2024
        </h3>
        <div className="bg-darkgrey rounded-lg flex items-center justify-between p-4">
          <span className="text-[#C6C6C6] text-xl uppercase">Budget</span>
          <span className="text-[#C6C6C6] text-xl font-semibold">
            ${process.env.REACT_APP_SPEND_INCOME}
          </span>
        </div>

        <div className="bg-darkgrey rounded-lg flex items-center justify-between p-4  mt-6">
          <span className="text-[#C6C6C6] text-xl uppercase">Remaining</span>
          <span className="text-[#C6C6C6] text-xl font-semibold">
            $<TotalUp />{' '}
          </span>
        </div>
      </div>

      <div className="w-1/2 min-h-screen border-l-4 border-dark py-4 pl-5">
        <h2 className="uppercase fancy font-bold text-3xl text-dark text-center">
          Transactions
        </h2>
        {allItems.length > 0 ? (
          allItems.map((item) => (
            <div
              className="flex items-center gap-2 border-b-2 border-gray-300 w-[95%]"
              key={item.id}
            >
              <p className="mt-4 pl-4 text-xl flex items-center  pb-3">
                <Icons icon="dollar" /> &nbsp;-{item.amount} {item.store}
                &nbsp;&nbsp;
                {LabelSwitch(item.label)}
              </p>
              <button onClick={() => removeItemFromDb(item.id)} type="button">
                <Icons icon="delete" />
                <span className="hidden">Delete</span>
              </button>
            </div>
          ))
        ) : (
          <p className="my-4 pl-4 text-2xl text-darkgrey text-center">
            You haven't added anything yet!
          </p>
        )}
      </div>
    </div>
  );
}

export default Monthly;
