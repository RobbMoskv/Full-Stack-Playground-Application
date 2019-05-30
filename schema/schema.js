const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

// Schema describes the data on this kind of graph
// Describes:
// - object types
// - the relations between does object types
// - How to reach into the graph to interact with the data

const BookType = GraphQLObjectType({
    name: 'Book',
    fields: () => ({

    })
});
