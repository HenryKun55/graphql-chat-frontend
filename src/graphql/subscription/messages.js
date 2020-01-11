import { gql } from 'apollo-boost'

export const typing = gql`
    subscription ($author: String!) {
        typing(author: $author)
    }
`

export const newMessage = gql`
    subscription {
        message {
            mutation
            data {
                author
                body
            }
        }
    }
`