

import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";




const AppLayout = () => {
    return(
        <>
        <Header />
        <Outlet />
        <Footer />

        </>
    )
};


const appRouter = createBrowserRouter(
    [
        {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body/>,
                },

            {
                path: "/about",
                element: <About/>,
                },
                {
                    path: "/contact",
                    element: <Contact/>,
                    },
                    {
                        path: "/restaurant/:id",
                        element: <RestaurantMenu/>,
                        }
        ] 
        },

    ]

);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render( <RouterProvider router={appRouter} />);





