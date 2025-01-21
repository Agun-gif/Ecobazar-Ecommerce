import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/client/homePage/Home.jsx";
import Shop from "../pages/client/shop/Shop.jsx";
import Shopping from "../pages/client/shoppingcart/ShopPing.jsx";
import Wishlist from "../pages/client/wishList/Wishlist.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ProductDetails from "../pages/client/product/productcomponents/ProductDetails.jsx";
import Checkout from "../pages/client/checkout/checkoutcomponents/Checkout.jsx";
import Signin from "../pages/client/signin/SignIn.jsx";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "home", element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "shopping", element: <Shopping /> },
            { path: "wishlist", element: <Wishlist /> },
            { path: "productDetails", element: <ProductDetails /> },
            { path: "checkout", element: <Checkout /> },
            { path: "signin", element: <Signin /> },
            
        ],
    },
]);

export default routers;
