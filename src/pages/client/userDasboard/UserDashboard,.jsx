import React from 'react';
import User from './user';
import OrderHistory from './OrderHistory';
import OrderHistory from './OrderHistory';
import ProfileSatting from './ProfileSatting';
import WishLists from './WishLists';
import ShoppingCarts from './ShoppingCarts';

function UserDashboard() {
  return (
    <div>
      <User/>
      <OrderHistory/>
      <OrderDetails/>
      <ProfileSatting/>
      <WishLists/>
      <ShoppingCarts/>
    </div>
  );
}

export default UserDashboard;
