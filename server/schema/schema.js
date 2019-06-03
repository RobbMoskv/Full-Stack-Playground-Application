const graphql = require('graphql');
const { books, authors } = require('../data/datastore');
// Destructioring function
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

// Schema describes the data on this kind of graph:
// - Define object types
// - Define relationships between does object types
// - Define root queries how to reach into the graph to interact with the data

// Book object type on the graph
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    }),
});

// Book object type on the graph
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    }),
});

// How to reach into the graph to interact with the data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / othe source
                return books.find(book => book.id == args.id);
            }
        }
    }
});

// Export
module.exports = new GraphQLSchema({
    query: RootQuery
});