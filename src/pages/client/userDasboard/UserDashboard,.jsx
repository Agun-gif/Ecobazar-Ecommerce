import React from 'react';
import User from './user';
import OrderHistory from './OrderHistory';
import OrderHistory from './OrderHistory';

function UserDashboard() {
  return (
    <div>
      <User/>
      <OrderHistory/>
      <OrderDetails/>
    </div>
  );
}

export default UserDashboard;
