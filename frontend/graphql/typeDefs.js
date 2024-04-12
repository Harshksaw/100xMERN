export const typeDefs = `
type Author {
  id: ID!
  name: String!
  books : [Book]
}

type Book {
  id: ID!
  title: String!
  publishedYear: Int  # Changed type to Int for year
  author: Author  # Added a reference to the Author type

}

type Query {
  authors: [Author]
  books: [Book]

}

type Mutation {
  createAuthor(name: String!): Author!  # Mutation to create an author
  updateAuthor(id: ID!, name: String!): Author  # Mutation to update author
  createBook(title: String!, publishedYear: Int, authorId: ID): Book!  # Mutation to create a book with optional authorId
  updateBook(id: ID!, title: String!, publishedYear: Int): Book  # Mutation to update book
}
`;
