import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/client/homePage/HomePage";
import ShopPage from "../pages/client/shop/Shoppage";
import ShopPing from "../pages/client/shoppingCart/Shopping";
import Wishlist from "../pages/client/wishList/wishlist";
import MainLayout from "../layouts/MainLayout";



const router = createBrowserRouter([
    {path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "shoppage",
                element: <ShopPage />,
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
