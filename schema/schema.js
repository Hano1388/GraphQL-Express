const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {
            type: GraphQLString
        },
        firstname: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
});