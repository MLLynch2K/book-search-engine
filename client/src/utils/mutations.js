import gql from 'graphql-tag'

export const QUERY_ME = gql`
  query me {
    me {
      bookCount
      savedBooks {
        bookId
        image
        title
        authors
        description
      }      
    }
  }
`
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
        savedBooks {
          bookId
          image
          title
          authors
          description
        }
      }      
    }
  }
`
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        savedBooks {
          bookId
          image
          title
          authors
          description
        }
      }      
    }
  }
`
export const ADD_BOOK = gql`
  mutation addBook($authors: [String], $description: String, $bookId: String!, $image: String, $link: String, $title: String!) {
    addBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
      bookCount
      savedBooks {
        bookId
        image
        title
        authors
        description
      }
    }
  }
`
export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      bookCount
      savedBooks {
        bookId
        image
        title
        authors
        description
      }
    }
  }
`