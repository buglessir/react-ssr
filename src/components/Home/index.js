import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

const Home = () => (
    <div className="home">
        <Helmet>
            <title>Home</title>
        </Helmet>
        <h1>Home</h1>
        <p>This is Home page</p>
    </div>
);

export default Home;
