import { gql } from 'apollo-boost'

export const addMessage = gql`
    mutation addMessage($title: String!, $author: String!, $body: String!) {
        addMessage(title: $title, author: $author, body: $body) {
            title
            author
            body
        }
    }
`

export const isTyping = gql`
    mutation typing($author: String!) {
        typing(author: $author)
    }
`