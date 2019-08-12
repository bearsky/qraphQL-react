import React, {Component} from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Booklist from './components/BookList'
import AddBook from './components/AddBook'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div id="main">
          <h1>Books List</h1>
          <Booklist />
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
