import React from 'react'
import Register from '../puiblic/Register';
import Login from '../puiblic/Login';
import VerifyOtp from '../puiblic/VerifyOtp';
import Home from '../puiblic/Home';
import Search from '../puiblic/Search';
import Account from '../private/common/Account';
import EditProfile from '../private/common/EditProfile';
import Cart from '../private/customer/Cart';
import Order from '../private/customer/Order';
import WishList from '../private/customer/WishList';
import SellerDashBoard from '../private/seller/SellerDashBoard';
import SellerOrder from '../private/seller/SellerOrder';


const Navs =[
    {
        path: "/seller/register",
        element: <Register role={"SELLER"} />,
        requireAuth: false,
        isVisibleAfterAuth: false,
        role: "ALL",
      },
      {
        path: "/customer/register",
        element: <Register  role={"CUSTOMER"}/>,
        requireAuth: false,
        isVisibleAfterAuth: false,
        role: "ALL",
      },
      {
        path: "/login",
        element: <Login />,
        requireAuth: false,
        isVisibleAfterAuth: false,
        role: "ALL",
      },
      {
        path: "/verify-otp",
        element: <VerifyOtp />,
        requireAuth: false,
        isVisibleAfterAuth: false,
        role: "ALL",
      },
        // -------------------------- BEFORE AND AFTER AUTH ----------------
      {
        path: "/",
        element: <Home />,
        requireAuth: false,
        isVisibleAfterAuth: true,
        role: "ALL",
      },
      {
        path: "/search",
        element: <Search />,
        requireAuth: false,
        isVisibleAfterAuth: true,
        role: "ALL",
      },
      // ---------------------- COMMON AND AFTER AUTH ----------------------
      {
        path: "/account",
        element: <Account />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "ALL",
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "ALL",
      },
      // --------------------------- CUSTOMER --------------------------
      {
        path: "/cart",
        element: <Cart />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "CUSTOMER",
      },
      {
        path: "/orders",
        element: <Order />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "CUSTOMER",
      },
      {
        path: "/wishlist",
        element: <WishList />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "CUSTOMER",
      },
      // ------------------------- SELLER ----------------------------
      {
        path: "/seller-dashboard",
        element: <SellerDashBoard />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "SELLER",
      },
      {
        path: "/seller-orders",
        element: <SellerOrder />,
        requireAuth: true,
        isVisibleAfterAuth: true,
        role: "SELLER",
      },
    ];

export default Navs