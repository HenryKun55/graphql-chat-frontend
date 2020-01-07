import { gql } from 'apollo-boost'

export const getMessages = gql`
    query {
        messages {
            title
            author
            body
        }
    }
`
