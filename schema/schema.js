const graphql = require('graphql');
// Destructioring function
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Schema describes the data on this kind of graph:
// - Define object types
// - Define relationships between does object types
// - Define root queries how to reach into the graph to interact with the data

// Book object type on the graph
const BookType = GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLObjectType }
    })
});

// How to reach into the graph to interact with the data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / othe source
            }
        }
    }
});

// Export
module.exports = new GraphQLSchema({
    query: RootQuery
});