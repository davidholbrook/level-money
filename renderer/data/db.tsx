import React from 'react';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

const db = new Dexie('levelDB');
db.version(1).stores({
    monthly: '++id,amount,store,label',
    special: '++id,amount,store,label',
});

export const dbReadMonthly = () => {
    // @ts-expect-error
    const allItems = useLiveQuery(() => db.monthly.toArray(), []);
    if (!allItems) return null;
    return allItems;
}

export const dbReadSpecial = () => {
    // @ts-expect-error
    const allItems = useLiveQuery(() => db.monthly.toArray(), []);
    if (!allItems) return null;
    return allItems;
}

export const removeItemFromDb = async (id) => {
    //change to native dialog
    if (window.confirm('Do you want to delete this transaction?')) {
    // @ts-expect-error
      await db.monthly.delete(id);
    }
};

export const clearDb = async () => {
    //change to native dialog
    if (window.confirm('Do you want to clear all transactions?')) {
    // @ts-expect-error
      await db.monthly.clear();
    }
};

export const addToDB = (DBstore:number, amount:number, store:string, label:number) => {
    if(DBstore === 0){
        // @ts-expect-error
        db.monthly.add({amount, store, label});
    } else {
        // @ts-expect-error
        db.special.add({amount, store, label});
    }
}