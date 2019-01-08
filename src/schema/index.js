import gql from 'graphql-tag';

export const cities = gql`
  query {
    cities {
      name
      temp
      pressure
      wind {
        speed
        direction
      }
    }
  }
`;

export const hottestCity = gql`
  query {
    hottestCity {
      name
      temp
      pressure
    }
  }
`;

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        email
        _id
        username
        password
      }
      token
    }
  }
`;
