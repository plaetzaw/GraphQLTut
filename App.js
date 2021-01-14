const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require('mongoose');
require('dotenv').config();
//graphqlHTTP is just a naming convention for GraphQL

let username = process.env.username;
let password = process.env.password;
let db = process.env.database;

mongoose
 .connect(
`mongodb+srv://${username}:${password}@cluster0.j4egg.mongodb.net/${db}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
 )
 .then(() => console.log("Connected to MongoDB Atlas"))
 .catch(err => console.log("Error: ", err.message));


const PORT = process.env.PORT || 8080;

const app = express();

app.use("/graphql", graphqlHTTP({ 
    schema,
    graphiql: true
}))

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})