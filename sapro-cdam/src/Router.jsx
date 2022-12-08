import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import App from './App';
import { useAuthenticator} from '@aws-amplify/ui-react';



function Router() {
    const { route } = useAuthenticator(context => [context.route])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    {/* TODO: This will most likely be how we allow certain users routes to certain pages and not to others */}
                    {route === 'authenticated' &&
                        <>
                            
                        </>
                    }
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;