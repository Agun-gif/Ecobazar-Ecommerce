import React from 'react';
import User from './user';
import OrderHistory from './OrderHistory';
import OrderHistory from './OrderHistory';
import ProfileSatting from './ProfileSatting';

function UserDashboard() {
  return (
    <div>
      <User/>
      <OrderHistory/>
      <OrderDetails/>
      <ProfileSatting/>
    </div>
  );
}

export default UserDashboard;
