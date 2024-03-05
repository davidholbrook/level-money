import React from 'react';

export default function removeFromDb() {
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
  return <div>removeFromDb</div>;
}
