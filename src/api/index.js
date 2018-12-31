import graphqlClient from '../apollo';
import weather from '../graphql/weather.gql';

export function fetchCities() {
  return graphqlClient.query({
    query: weather
  });
}
