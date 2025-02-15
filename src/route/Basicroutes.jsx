import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/client/homePage/Home.jsx";
import Shop from "../pages/client/shop/shopcomponents/Shop.jsx";
import ShopProductDetails from "../pages/client/shop/shopcomponents/ShopProductDetails.jsx";
import ShopPing from "../pages/client/shoppingCart/shoppingcartcomponents/ShopPing.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ProductDetails from "../pages/client/product/productcomponents/ProductDetails.jsx";
import Checkout from "../pages/client/checkout/checkoutcomponents/Checkout.jsx";
import Signin from "../pages/client/signin/signinComponents/Signin.jsx";
import Register from "../pages/client/signin/signinComponents/Register.jsx";
import ContactUs from "../pages/client/contact/contactcomponents/ContactUs.jsx";
import Faqs from "../pages/client/faqs/Faqs.jsx";
import OrderHistory from "../pages/client/userDashboard/OrderHistory.jsx";
import OrderDetails from "../pages/client/userDashboard/OrderDetails.jsx";
import ProfileSatting from "../pages/client/userDashboard/ProfileSatting.jsx";
import WishLists from "../pages/client/userDashboard/WishLists.jsx";
import ShoppingCarts from "../pages/client/userDashboard/ShoppingCarts.jsx";
import Blog from "../pages/client/Blog/Blog.jsx";
import Eror from "../pages/client/eror/Eror.jsx";
import SingleBlog from "../pages/client/Blog/SingleBlog.jsx";
import Additional from "../pages/client/product/productcomponents/Additional.jsx";
import CustomerFeedback from "../pages/client/product/productcomponents/CustomerFeedback.jsx";
import AboutUs from "../pages/client/aboutus/AboutUs.jsx";
import Description from "../pages/client/product/productcomponents/Description.jsx";
import Wishlist from "../pages/client/wishList/wishlistcomponents/Wishlist.jsx";
import Trackorder from "../pages/client/trackorder/trackordercomponents/Trackorder.jsx";
import PrivacyPolicy from "../pages/client/privecypolicy/PrivacyPolicy.jsx";
import UserDashboard from "../pages/client/userDashboard/UserDashboard,.jsx";
import { Suspense } from "react";
import Products from "../pages/client/product/productcomponents/Products.jsx";











const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "Home", element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>},            
            { path: "Shop", element: <Suspense fallback={<div>Loading...</div>}><Shop /></Suspense> },
            { path: "Shopproductdetails", element: <ShopProductDetails /> },
            { path: "Products", element: <Products /> },
            {path: "ProductDetails", element: <ProductDetails/>},
            { path: "Shopping", element: <ShopPing/> },
            { path: "Wishlist", element: <Wishlist/> },
            { path: "Description", element: <Description /> },
            { path: "Additional", element: <Additional /> },
            { path: "Customerfeedback", element: <CustomerFeedback /> },
            { path: "Checkout", element: <Checkout /> },
            { path: "Signin", element: <Signin /> },
            { path: "Register", element: <Register/> },
            {path : "aboutus", element: <AboutUs/>},
            { path: "Contactus", element: <ContactUs /> },
            { path: "UserDashboard", element: <UserDashboard /> },
            { path: "orderhistory", element: <OrderHistory/> },
            { path: "orderdetails", element: <OrderDetails/> },
            { path: "profilesatting", element: <ProfileSatting/> },
            { path: "wishlists", element: <WishLists/> },
            { path: "ShoppingCarts", element: <ShoppingCarts/> },
            { path:"Blog", element: <Blog/>},
            { path:"SingleBlog", element: <SingleBlog/>},
            { path: "Faqs", element: <Faqs/> },
            { path: "Eror", element: <Eror/> },
            { path: "Trackorder", element: <Trackorder/> },
            { path: "PrivacyPolicy", element: <PrivacyPolicy/> },
            
        ],
    },
]);

export default routers;
