import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { createTheme, ThemeProvider, colors } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.indigo[400],
      light: colors.indigo[300],
      dark: colors.indigo[800],
    }

  }
});


const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_ENDPOINT',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    {/*  <React.StrictMode> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
