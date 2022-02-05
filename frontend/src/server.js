import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import routes from './routes'
import rootReducer from './reducers/rootReducer'

var app = express()

app.use(compression())

// Serve our static stuff like CSS
app.use(express.static(path.join(__dirname, 'public'), {index: false}))

// All routes are basically forwarded to the React Router
app.get('*', (req, res) => {
  // Create a fresh Redux store instance
  let store = createStore(rootReducer, applyMiddleware(thunk));
  console.log("Initial state: " + JSON.stringify(store.getState()));

  console.log("Matching route on server side: " + req.url);
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const viewHtml = 
        <Provider store={store}>
          <RouterContext {...props}/>
        </Provider>;

      // Create an initial Redux state
      const initialState = store.getState();

      // Render the React components
      const appHtml = renderToString(viewHtml);

      // Send everything wrapped in an HTML structure
      res.send(renderPage(appHtml, initialState));
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(viewHtml, initialState) {
  return `
    <!doctype html>
    <html>
    <head>
      <title>React Boot Hello</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div id="app">${viewHtml}</div>
      <script src="/packed-bundle.js"></script>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(initialState)};
        </script>
    </body>
    </html>
   `
}

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
})
