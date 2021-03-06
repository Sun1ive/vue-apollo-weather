import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { API_URL } from '../../config';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';

Vue.use(VueApollo);

// HTTP connexion to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: API_URL
});

// Cache implementation
const cache = new InMemoryCache();

// Create the aollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;
