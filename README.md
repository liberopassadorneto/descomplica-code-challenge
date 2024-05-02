# GraphQL API for Student Management

This GraphQL API provides functionality for managing student records, including creating new student entries and searching for students with various filters and pagination options.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- Docker (for running a local database using PostgreSQL)

### Installing

Clone the repository:

```bash
git clone https://yourrepository.git
cd yourrepository
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Set up and run the PostgreSQL database with Docker:

```bash
docker-compose up -d
```

Initialize the Prisma client (if applicable):

```bash
npx prisma generate
npx prisma migrate dev
```

Start the server:

```bash
npm run start
# or
yarn start
```

Access GraphiQL interface at http://localhost:3333/graphiql for interactive testing and exploration of the GraphQL API.

## Using the API

The GraphQL API can be accessed through any standard GraphQL client, or through tools like GraphiQL. For interactive exploration and testing of the API, use the GraphiQL interface provided at http://localhost:3333/graphiql

### Mutations

#### Create Student

Create a new student record.

**Request:**

```graphql
mutation CreateStudent($input: CreateStudentInput!) {
  createStudent(input: $input) {
    studentId
  }
}
```

**Variables:**

```json
{
  "input": {
    "name": "Jane Doe",
    "cpf": "987.654.321-09",
    "email": "jane.doe@example.com"
  }
}
```

### Queries

#### Search Students

Search for students using optional filters and pagination.

**Request:**

```graphql
query SearchStudents($input: SearchStudentsInput!) {
  searchStudents(input: $input) {
    students {
      name
      email
      cpf
    }
  }
}
```

**Variables:**

```json
{
  "input": {
    "name": "Jane",
    "page": 1,
    "pageSize": 2
  }
}
```

## Testing

Describe how to run the automated tests for this system.

```bash
npm run test
# or
yarn test
```