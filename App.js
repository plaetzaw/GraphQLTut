const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require('mongoose');
//graphqlHTTP is just a naming convention for GraphQL

mongoose
 .connect(
  "mongodb+srv://Plato:test@cluster0.j4egg.mongodb.net/db?retryWrites=true&w=majority",
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