import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import DenseAppBar from './UserDashboard';
import Login from './Login';
import AdminHome from './Admin/AdminHome';
import Account from './Admin/Account/AccountHolder';
import CreateAccount from './Admin/Account/CreateAccount';
import Profile from './Admin/Account/Profile';
import Ticket from './Admin/Account/Ticket';
import UpdateAccount from './Admin/Account/UpdateAccount';
import UserProfileView from './UserProfileView';
import UserTicket from './UserTicket';
import CreateTicket from './CreateTicket';
import ForgetPassword1 from './ForgetPassword1';
import ForgetPassword2 from './ForgetPassword2';
import ForgetPassword3 from './ForgetPassword3';
import Error from './Error';

export default function App() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const excludePaths = [
    '/login',
    '/admin',
    '/accountholder',
    '/ticket',
    '/createaccount',
    '/profile',
    '/updateaccount',
    '/userdashboard',
    '/userprofileview',
    '/userticket',
    '/createticket',
    '/forget-password-1',
    '/forget-password-2',
    '/forget-password-3',
    '/*',
  ];

  const shouldExcludeNavbarFooter = () => excludePaths.includes(path);

  // Function to remove trailing slash and redirect
  const removeTrailingSlash = (path) => {
    if (path.endsWith('/') && path !== '/') {
      return <Navigate to={path.slice(0, -1)} replace />;
    }
    return null;
  };

  return (
    <>
      {removeTrailingSlash(location.pathname)}
      {!shouldExcludeNavbarFooter() && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password-1" element={<ForgetPassword1 />} />
        <Route path="/forget-password-2" element={<ForgetPassword2 />} />
        <Route path="/forget-password-3" element={<ForgetPassword3 />} />

        {localStorage.getItem('login') && (
          <>
            <Route path="/userdashboard" element={<DenseAppBar />} />
            <Route path="/userprofileview" element={<UserProfileView />} />
            <Route path="/userticket" element={<UserTicket />} />
            <Route path="/createticket" element={<CreateTicket />} />
          </>
        )}

        {localStorage.getItem('login') && localStorage.getItem('role') === "admin" && (
          <>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/accountholder" element={<Account />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/updateaccount/:_id" element={<UpdateAccount />} />
          </>
        )}

        <Route path="/*" element={<Error />} />
      </Routes>
      {!shouldExcludeNavbarFooter() && <Footer />}
    </>
  );
}
