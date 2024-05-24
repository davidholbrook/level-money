import React, { useState } from "react";
import { addToDB } from "../data/db";

function CreateForm() {
  const [obstore, setObstore] = useState(0);

  const addItemToDb = async (event) => {
    event.preventDefault();
    console.log('got this far')
    const amount:number = parseFloat((document.querySelector('.item-price') as HTMLInputElement).value);
    const store:string = (document.querySelector('.item-store') as HTMLInputElement).value;
    const label:number = parseInt((document.querySelector('.item-label') as HTMLInputElement).value);
    (await (obstore === 0))
      ? addToDB(0, amount, store, label)
      : addToDB(1, amount, store, label);
      console.log('submitted')
      console.log(document.querySelector('.add-item-form'))
  };

  return (
      <div className="mt-20">
        <h2 className="text-4xl text-center text-dark">Add Transaction</h2>
        <div className="flex justify-around mt-5 w-10/12 mx-auto border-dark border-4 p-5">
        <div className="border-r-4 border-dark mr-2 pr-4">
        <h3 className="text-sm text-center text-dark uppercase my-2">
          Which type of transaction is it?
        </h3>
        <div className="bg-darkgrey rounded-lg py-3 mx-2 flex flex-col items-center gap-1">
        <button
            type="button"
            onClick={() => {
              const dd = 0;
              setObstore(dd);
            }}
            className={
              obstore === 0
              ? `bg-white px-6 mx-auto rounded-full font-bold text-darkgrey uppercase`
              : `text-white uppercase font-bold mx-auto`
            }
            >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => {
              const dd = 1;
              setObstore(dd);
            }}
            className={
              obstore === 1
              ? `bg-white px-6 mx-3 rounded-full font-bold text-darkgrey uppercase`
              : `text-white uppercase font-bold`
            }
            >
            Special
          </button>
            </div>
        </div>
        <div className="w-6/12">
        <h3 className="text-sm text-center text-dark uppercase my-2">
          Enter transaction
        </h3>
        <form className="add-item-form pl-4 block">
          <input
            type="text"
            className="item-store border border-gray-900 block w-11/12 p-2 my-4 text-xl"
            placeholder="Store Name"
            required
          />
          <input
            type="number"
            step=".01"
            className="item-price border border-gray-900 block w-11/12 p-2 my-4 text-xl"
            placeholder="Price"
            required
          />
          <select className="item-label border border-gray-900 block w-11/12 p-2 my-4 text-xl">
            <option value="1">Food</option>
            <option value="2">Shopping</option>
            <option value="2">Gas</option>
            <option value="3">Services</option>
            <option value="4">Misc.</option>
          </select>
        </form>
      </div>
      </div>
      <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-900 text-white uppercase px-2 py-3 mt-10 w-9/12 text-xl mx-auto offset-btn"
            onClick={(e) => addItemToDb(e)}
            >
            Add New transaction
          </button>
            </div>
      </div>
  );
}

export default CreateForm;
