import './App.css';
import {  BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import HomePage from "./containers/HomePage";
import CartPage from './containers/CartPage/CartPage';
import LoginPage from './containers/LoginPage/LoginPage';
import SignUpPage from './containers/SignUpPage/SignUpPage';
import { ProductsPage } from './containers/ProductsPage/ProductsPage';
import DetailsPage from './containers/DetailsPage/DetailsPage';

import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./store/actions/authActions";
import { useEffect } from 'react';
function App() {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate, dispatch]);
  return (
    <div className="App">
 <Router>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<DetailsPage />} />


        </Routes>
     
        </Router>

    </div>
  );
}

export default App;
