import pkg from "graphql";

const { buildSchema } = pkg;
const schema = buildSchema(`
type Query{
   getFriend(id:ID!):Friend
}

enum Gender{
    MALE
    FEMALE
    OTHERS
}

type Friend{
    id:ID
    firstName:String!
    secondName:String 
    gender:Gender
    hobbies:[String]

}

input FriendInput{
    id:ID
    firstName:String!
    secondName:String 
    gender:Gender
    hobbies:[String]
}

type Mutation{
    createFriend(input:FriendInput):Friend
    updateFriend(input:FriendInput):Friend
    deleteFriend(id:ID!):String

}
`);

export default schema;
