export const GET_MOODS = gql`
  query getMoods() {
    topics {
        name
        id
        created_at
      }
  }
`;