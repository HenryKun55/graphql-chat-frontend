import { split, HttpLink, getMainDefinition, InMemoryCache, ApolloClient } from '@apollo/client';
import { WebSocketLink } from 'apollo-link-ws'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/'
})

  
const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000',
    options: {
        reconnect: true
    }
})
    
const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    link,
    cache,
})

export default client