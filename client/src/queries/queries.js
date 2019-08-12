import { gql } from 'apollo-boost'

const getBooksQeury = gql`
  {
    books {
      name
      id
    }
  }
`
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

const addBookMutation = gql`
  mutation(
    $name: String!,
    $genre: String!,
    $authorId: ID!,
  ) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`
const getBookQeury = gql`
  query(
    $id: ID,
  ) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`

export { getAuthorsQuery, getBooksQeury, addBookMutation, getBookQeury }
