import gql from 'graphql-tag/src'

export const GET_WORDS = gql`
  query getWords{
    words{
      id
      title
      meaning
    }
  }`

export const GET_WORD = gql`
  query getWord($id:String!){
    word(id:$id){
      id
      title
      meaning
    }
  }
  `
export const ADD_WORD = gql`
  mutation createWord($title:String!,$meaning:String!){
    createWord(title:$title,meaning:$meaning){
      id
      title
      meaning
    }
  }
`

export const CHANGE_WORD = gql`
  mutation createWord($id:String!,$title:String!,$meaning:String!){
    createWord(id:$id,title:$title,meaning:$meaning){
      id
      title
      meaning
    }
  }
`

export const DELETE_WORD = gql`
  mutation createWord($id:String!){
    createWord(id:$id){
      id
    }
  }
`
