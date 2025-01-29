import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/client/homePage/Home.jsx";
import Shop from "../pages/client/shop/Shop.jsx";
import Shopping from "../pages/client/shoppingcart/ShopPing.jsx";
import Wishlist from "../pages/client/wishList/Wishlist.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ProductDetails from "../pages/client/product/productcomponents/ProductDetails.jsx";
import Checkout from "../pages/client/checkout/checkoutcomponents/Checkout.jsx";
import Signin from "../pages/client/signin/siginComponents/SignIn.jsx";
import Register from "../pages/client/signin/SiginComponents/Register.jsx";
import ContactUs from "../pages/client/contact/contactcomponents/ContactUs.jsx";
import Faqs from "../pages/client/faqs/Faqs.jsx";
import UserDashboard from "../pages/client/userDasboard/user.jsx";
import OrderHistory from "../pages/client/userDasboard/OrderHistory.jsx";
import OrderDetails from "../pages/client/userDasboard/OrderDetails.jsx";
import ProfileSatting from "../pages/client/userDasboard/ProfileSatting.jsx";
import WishLists from "../pages/client/userDasboard/WishLists.jsx";
import ShoppingCarts from "../pages/client/userDasboard/ShoppingCarts.jsx";
import Blog from "../pages/client/Blog/Blog.jsx";
import Eror from "../pages/client/eror/Eror.jsx";
import SingleBlog from "../pages/client/Blog/SingleBlog.jsx";
import Additional from "../pages/client/product/productcomponents/Additional.jsx";
import CustomerFeedback from "../pages/client/product/productcomponents/CustomerFeedback.jsx";







const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "Home", element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "shopping", element: <Shopping /> },
            { path: "wishlist", element: <Wishlist /> },
            { path: "productDetails", element: <ProductDetails /> },
            { path: "additional", element: <Additional /> },
            { path: "customerfeedback", element: <CustomerFeedback /> },
            { path: "checkout", element: <Checkout /> },
            { path: "signin", element: <Signin /> },
            { path: "register", element: <Register /> },
            { path: "Contactus", element: <ContactUs /> },
            { path: "userdashboard", element: <UserDashboard /> },
            { path: "orderhistory", element: <OrderHistory/> },
            { path: "orderdetails", element: <OrderDetails/> },
            { path: "profilesatting", element: <ProfileSatting/> },
            { path: "wishlists", element: <WishLists/> },
            { path: "ShoppingCarts", element: <ShoppingCarts/> },
            { path:"Blog", element: <Blog/>},
            { path:"SingleBlog", element: <SingleBlog/>},
            { path: "faqs", element: <Faqs/> },
            { path: "Eror", element: <Eror/> },
            
        ],
    },
]);

export default routers;
