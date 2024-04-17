import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DateUp } from './DateCounter';
import Counter from './Counter';
import DisplayDataWithApi from './DisplayDataWithApi';
import ShowBirthday from './ShowBirthday';
import ProductDisplay from './ProductDisplay';
import Reviews from './Reviews';
import Login from './Login';
import CounterOnChange from './CounterOnChange';
import LoginWithSelect from './LoginWithSelect';
import DisplayDataWithAxios from './DisplayDataWithAxios';
import FormikForm from './FormikForm';
import FormikRegistration from './FormikRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormikWithYup from './FormikWithYup';
import LoginWithFYup from './LoginWithFYup';
import { Validate } from './RegistrationWithFCustom';
import Grocery from './Grocery';
import Product from './Product';
import ParentForCrud from './ParentForCrud';
import { BrowserRouter } from 'react-router-dom';
import W3Routes from './W3Routes';
import W3Navbar from './W3Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <W3Navbar />
      <W3Routes />
    </BrowserRouter>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

