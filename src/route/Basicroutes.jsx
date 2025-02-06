import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/client/homePage/Home.jsx";
import Shop from "../pages/client/shop/Shop.jsx";
import ShopPing from "../pages/client/shoppingCart/shoppingcartcomponents/ShopPing.jsx";
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
import AboutUs from "../pages/client/aboutus/AboutUs.jsx";
import Description from "../pages/client/product/productcomponents/Description.jsx";
import Wishlist from "../pages/client/wishList/wishlistcomponents/Wishlist.jsx";









const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "Home", element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "shopping", element: <ShopPing/> },
            { path: "wishlist", element: <Wishlist/> },
            { path: "productDetails", element: <ProductDetails/> },
            { path: "description", element: <Description /> },
            { path: "additional", element: <Additional /> },
            { path: "customerfeedback", element: <CustomerFeedback /> },
            { path: "checkout", element: <Checkout /> },
            { path: "signin", element: <Signin /> },
            { path: "register", element: <Register /> },
            {path : "aboutus", element: <AboutUs/>},
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
