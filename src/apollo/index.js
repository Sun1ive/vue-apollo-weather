import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { API_URL } from '../../config';

export default new ApolloClient({
  // Provide the URL to the API server.
  link: new HttpLink({ uri: API_URL }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache()
});
