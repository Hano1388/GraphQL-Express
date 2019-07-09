const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [{
        id: '1',
        firstname: 'Billy',
        age: 25
    },
    {
        id: '2',
        firstname: 'Gomez',
        age: 22
    },
    {
        id: '3',
        firstname: 'Nathy',
        age: 29
    }
]

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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return _.find(users, {
                    id: args.id
                });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});