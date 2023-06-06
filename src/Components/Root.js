import React from 'react';
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../Pages/About';
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import BlogPost from "./BlogPost";
import App from "./App";
import Reddit from "../Pages/Reddit";

export default function Root() {
    const routes = [
        { path: '/', name: 'Home', Component: App, exact: true },
        { path: '/about', name: 'About', Component: About, exact: false },
        { path: '/contact', name: 'Contact', Component: Contact, exact: false },
        { path: '/blog', name: 'Blog', Component: Blog, exact: true },
        { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
        { path: '/reddit', name: 'Reddit', Component: Reddit, exact: false },
    ];

    return (
        <Router>
            <NavigationBar/>
            <div className="container w-3/4 mx-auto p-4 bg-gray-200 my-5">
                <Switch>
                     {routes.map(({ path, Component, exact }) => (
              <Route key={path} path={path} exact={exact}>
                <Component />
              </Route>
            ))}
                    {/*<Route exact path="/">
                        <App/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/blog/:id">
                        <BlogPost />
                    </Route>*/}

                </Switch>
            </div>
        </Router>
    );
}