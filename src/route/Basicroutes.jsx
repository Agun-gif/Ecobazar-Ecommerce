import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/client/homePage/Home";
import Shop from "../pages/client/shop/Shop";
// import ShopPing from "../pages/client/shoppingCart/Shopping";
import Shopping from '../pages/client/shoppingCart/Shopping.jsx';

import Wishlist from "../pages/client/wishList/Wishlist";
import MainLayout from "../layouts/MainLayout";



const routers = createBrowserRouter([
    {path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "shopping",
                element: <Shopping />,
            },
            {
                path: "wishlist",
                element: <Wishlist />,
     
            },
        ]    
    }
]);

export default routers;
