// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddBooks from './AddBooks/AddBooks.jsx';
import AllBooks from './AllBooks/AllBooks.jsx';
import store from './store.jsx';
import { Provider } from 'react-redux';
import EditBooks from './EditBooks/EditBooks.jsx';
import Home from './Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Add_Books',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/All_Books',
        element: <AllBooks></AllBooks>
      },
      {
        path: '/Edit_Books',
        element: <EditBooks></EditBooks>
      }
    ]
  }])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
)
