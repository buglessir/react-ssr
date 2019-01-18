import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

const About = () => (
    <div className="about">
        <Helmet>
            <title>About</title>
        </Helmet>
        <h1>About</h1>
        <p>This is About page</p>
    </div>
);

export default About;
