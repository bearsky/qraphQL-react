import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { getAuthorsQuery, addBookMutation, getBooksQeury } from '../queries/queries'


class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      genre: '',
      authorId: '',
    }
  }
  displayAuthors() {
    const data = this.props.getAuthorsQuery
    if (data.loading) {
      return (<option>Loading authors...</option>)
    } else {
      return data.authors.map(author => {
        return (
          <option key={ author.id } value={ author.id }>{ author.name }</option>
        )
      })
    }
  }

  submitHandler(e) {
    e.preventDefault()
    this.props.addBookMutation({
      variables: this.state,
      refetchQueries: [{query: getBooksQeury}]
    })
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitHandler.bind(this)}>
        <div className="field">
          <label>Book name: </label>
          <input type="text" onChange={ (e) => this.setState({ name: e.target.value}) }/>
        </div>

        <div className="field">
          <label>Genre: </label>
          <input type="text" onChange={ (e) => this.setState({ genre: e.target.value}) }/>
        </div>

        <div className="field">
          <label>Author: </label>
          <select onChange={ (e) => this.setState({ authorId: e.target.value}) }>
            <option>Select author</option>
            { this.displayAuthors() }
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"}),
)(AddBook)
