import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/client/homePage/Home";
import Shop from "../pages/client/shop/Shop";
import ShopPing from "../pages/client/shoppingCart/Shopping";
import Wishlist from "../pages/client/wishList/Wishlist";
import MainLayout from "../layouts/MainLayout";



const router = createBrowserRouter([
    {path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "shopping",
                element: <ShopPing />,
            },
            {
                path: "wishlist",
                element: <Wishlist />,
     
            },
        ]    
    }
]);

export default router;
