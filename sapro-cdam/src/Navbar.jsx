import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useAuthenticator, Theme, ThemeProvider, useTheme } from '@aws-amplify/ui-react';

function Navbar() {
    const { route } = useAuthenticator(context => [context.route])
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {route === 'authenticated' &&
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>

                }
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;