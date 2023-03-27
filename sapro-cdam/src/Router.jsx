import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
// import Home from "./Home";
// import Blogs from "./Blogs";
import About from "./About";
import Contact from "./Contact";
import Logout from "./Logout";
import NoPage from "./NoPage";
import FileUpload from "./FileUpload";
import Dashboard from "./Dashboard";
import App from './App';
import { Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import CommandDetail from './CommandDetail';



// Handle all page routing here. IE wherever there is a to={Name} in a
// button/item/etc there needs to be a routing here. then create that
// matching page in the "pages" folder
function Router() {
    const { route } = useAuthenticator(context => [context.route])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sapro-cdam-capstone/" element={<Layout />}>
                    <Route path="/sapro-cdam-capstone/" element={<App />} />
                    {/* TODO: This will most likely be how we allow certain users routes to certain pages and not to others */}
                    {route === 'authenticated' &&
                        <>
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="File Upload" element={<FileUpload />} />
                            <Route path="/CommandDetail/:id" element={<CommandDetail />} /> {/*This was the old way to have the id be a link to a page*/}
                            {/* <Route path="CommandDetail" element={<CommandDetail />} /> */}
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