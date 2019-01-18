import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import App from './index.js';
import { StaticRouter } from 'react-router-dom';

const app = express();
const port = 4000;

app.use('/assets', express.static(__dirname + '/../build'));

const template = (data, helmet) => (
    `<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="/assets/style.css">
            ${helmet.title.toString()}
        </head>
        <body>
            <div id="root">${data}</div>
            <script type="text/javascript" src="/assets/scripts.js"></script>
        </body>
    </html>`
);

app.get('/*', (req, res) => {
    let context = {};
    let rendered = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    );
    let helmet = Helmet.renderStatic();
    res.send(template(rendered, helmet));
});

app.listen(port, () => {
    console.log('The server is running on port: ' + port);
});
