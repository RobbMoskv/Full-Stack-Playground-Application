const { Book, Author } = require('../dbcontext/models');

// Destructioring function
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

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
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                //return authors.find(author => author.id === parent.authorId);
                return Author.findById(parent.authorid);
            }
        }
    }),
});

// Book object type on the graph
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                //return books.filter(books => books.authorId === parent.id);
                return Book.find({ authorid: parent.id });
            }
        }
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
                //return books.find(book => book.id === args.id);
                return Book.findById(args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                //return books;
                return Book.find();
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //return authors.find(author => author.id === args.id);
                return Author.findById(args.id);
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                //return authors;
                return Author.find();
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                return Author(args).save();
            }

        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorid: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Book(args).save();
            }
        }
    }
});

// Export
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});