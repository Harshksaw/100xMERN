
const data = {
  authors: [
    {
      id: 1,
      name: "Chirag Goel",
    },
    {
      id: 1,
      name: "CHarhsh Goel",
    },
  ],
  books: [
    {
      id: 13,
      title: "Hars  kumar",
      publishedYear: 2024,
    },
    {
      id: 13,
      title: "Hardssd  kumar",
      publishedYear: 2024,
    },
    {
      id: 12,
      title: "Harsddssfs  kumar",
      publishedYear: 2024,
    },
  ],
};


export const resolvers = {


  Book: {
    author: (parent,args , context , info) => {
      return data.authors.find((author) => author.id === parent.id);

    }
  }
  Query: {
    authors: () => {
      return        data.authors


    },
    books: () => {
      return data.books;


    },
  },
};
