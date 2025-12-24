import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import HomePage from './components/HomePage.jsx';
import Error from './components/Error';
import RestaurantDetails from "./components/RestaurantDetails.jsx";
import Menu from './components/Menu'
import {UserProvider} from "./utils/example.jsx";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <Error />,
            children:[
                {path: "/", element: <HomePage />},
                {path : "/about", element: <About/>},
                {path: "/restaurant/:id", element : <RestaurantDetails />},
                {path : "*", element : <Error />},
                {path: "menu", element: <Menu />},
                {path: "cart", element : <CartPage />}
            ],
        },
    ]);

    return (
        <Provider store={appStore}>
             <UserProvider>
                 <RouterProvider router={router} />
             </UserProvider>
        </Provider>
    );
}

export default App;
