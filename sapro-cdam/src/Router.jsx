import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import NoPage from "./pages/NoPage";
import FileUpload from "./pages/FileUpload";
import Dashboard from "./pages/Dashboard";
import GenerateReport from "./pages/GenerateReport";
import Graphic from "./pages/Graphic";
import App from './App';
import { Authenticator, useAuthenticator} from '@aws-amplify/ui-react';



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
                            <Route path="File Upload" element={<FileUpload />} />
                            <Route path="Generate Report" element={<GenerateReport />} />
                            <Route path="Graphic" element={<Graphic />} />
                        </>
                    }
                    <Route path="contact" element={<Contact />} />
                    <Route path="Logout" element={<Logout />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;