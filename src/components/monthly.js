import React from 'react';

import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import LabelSwitch from '../utils/labelsSwitch';

function Monthly() {
  const db = new Dexie('llatDB');
  db.version(1).stores({
    transact: '++id,amount,store,label',
  });

  const allItems = useLiveQuery(() => db.transact.toArray(), []);
  if (!allItems) return null;

  const addItemToDb = async (event) => {
    event.preventDefault();
    const amount = document.querySelector('.item-price').value;
    const store = document.querySelector('.item-store').value;
    const label = document.querySelector('.item-label').value;
    await db.transact.add({ amount, store, label });
  };

  const removeItemFromDb = async (id) => {
    if (window.confirm('Do you want to delete this transaction?')) {
      await db.transact.delete(id);
    }
  };

  const clearBtn = async () => {
    if (window.confirm('Do you want to clear all tranactions')) {
      await db.transact.clear();
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
            <div className="flex items-center gap-2" key={item.id}>
              <p className="my-4 pl-4 text-xl">
                ${item.amount} {item.store} {LabelSwitch(item.label)}
              </p>
              <button
                onClick={() => removeItemFromDb(item.id)}
                type="button"
                aria-labelledby="delete"
                className="cursor-pointer"
              />
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
