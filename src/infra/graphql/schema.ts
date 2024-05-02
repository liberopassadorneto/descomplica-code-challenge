import { gql } from 'mercurius-codegen'

export const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    cpf: String!
    email: String!
  }

  input CreateStudentInput {
    name: String!
    cpf: String!
    email: String!
  }

  type CreateStudentOutput {
    studentId: ID!
  }

  type Mutation {
    createStudent(input: CreateStudentInput): CreateStudentOutput!
  }

  input SearchStudentsInput {
    name: String
    cpf: String
    email: String
    page: Int
    pageSize: Int
  }

  type SearchStudentsOutput {
    students: [Student!]!
  }

  type Query {
    searchStudents(input: SearchStudentsInput!): SearchStudentsOutput!
  }
`
