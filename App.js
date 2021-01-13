const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require("./schema/schema")
//graphqlHTTP is just a naming convention for GraphQL

const PORT = process.env.PORT || 8080;

const app = express();

app.use("/graphql", graphqlHTTP({ 
    schema,
    graphiql: true
}))

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})