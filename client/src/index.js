import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createTheme, ThemeProvider, colors } from '@mui/material';
import { AUTH_TOKEN } from './constants';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.indigo[400],
      light: colors.indigo[300],
      dark: colors.indigo[800],
    },
    secondary: {
      main: colors.teal[500],
      dark: colors.teal[800],
    },
    highlight: {
      main: colors.yellow[500]
    }

  }
});

const httpLink = new HttpLink({ uri: '/graphql' });// get url

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
