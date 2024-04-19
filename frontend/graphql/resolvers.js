export const resolvers = {
  Query: {
    authors: () => {
      return [
        {
          id: 1,
          name: "Chirag Goel",
        },
      ];
    },
    books: () => {
      return [
        {
          id: 1,
          title: "Hars  kumar",
          publishedYear: 2024,
        },
      ];
    },
  },
};
