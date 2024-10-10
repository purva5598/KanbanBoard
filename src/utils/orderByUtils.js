// Sort tickets by priority, highest priority first (0 is highest).
export const orderByPriority = (data) => {
  Object.keys(data).forEach((key) => {
      data[key].tickets.sort((ticket1, ticket2) => {
          if (ticket1.priority === 0 && ticket2.priority !== 0) return -1;
          if (ticket1.priority !== 0 && ticket2.priority === 0) return 1;
          return ticket2.priority - ticket1.priority; // Sort by descending priority.
      });
  });
  return data;
};

// Sort tickets by title alphabetically.
export const orderByTitle = (data) => {
  Object.keys(data).forEach((key) => {
      data[key].tickets.sort((ticket1, ticket2) =>
          ticket1.title.localeCompare(ticket2.title) // Alphabetical sorting by title.
      );
  });
  return data;
};
