import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import NoPage from "./pages/NoPage";
import Graphic from "./pages/Graphic";
import Report from "./pages/Report"
import ItemDetails from "./pages/ItemDetails";
import Dashboard from "./pages/Dashboard";
import App from './App';
import { Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import CommandDetail from './pages/CommandDetail';



// Handle all page routing here. IE wherever there is a to={Name} in a
// button/item/etc there needs to be a routing here. then create that
// matching page in the "pages" folder
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
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="CommandDetail/:id" element={<CommandDetail />} />
                            <Route path="CommandDetail/:id/:itemID" element={<ItemDetails />} />
                            <Route path="Admin" element={<Admin />} />
                            <Route path="Account" element={<Account />} />
                            <Route path="Graphic" element={<Graphic />} />
                            <Route path="Report" element={<Report />} />
                        </>
                    }
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="Logout" element={<Logout />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;