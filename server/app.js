require('dotenv').config();
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://modularizer:q1w2e3r4@ds245687.mlab.com:45687/node-modularizer', { useNewUrlParser: true })
mongoose.connection.once('open', () => console.log('Connected to Mlab'))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => console.log(`Server app running on http://localhost:4000`))
