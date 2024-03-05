import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://vcintake-daee1e96746f.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
