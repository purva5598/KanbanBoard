export const priorityLabels = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};

const createUserMap = (users) => {
  const userMap = {};
  users.forEach((user) => {
      userMap[user.id] = user;
  });
  return userMap;
};

export const groupByStatus = (rawData) => {
  const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Canceled"];
  const userMap = createUserMap(rawData.users);

  return statusOrder.reduce((groupedData, status) => {
      const tickets = rawData.tickets
          .filter((ticket) => ticket.status === status)
          .map((ticket) => ({
              ...ticket,
              priorityLabel: priorityLabels[ticket.priority],
              userName: userMap[ticket.userId].name,
              isUserAvailable: userMap[ticket.userId].available,
          }));

      groupedData[status] = { tickets };
      return groupedData;
  }, {});
};

export const groupByUser = (rawData) => {
  const sortedUsers = [...rawData.users].sort((a, b) => a.name.localeCompare(b.name));
  const userMap = createUserMap(rawData.users);

  return sortedUsers.reduce((groupedData, user) => {
      const tickets = rawData.tickets
          .filter((ticket) => ticket.userId === user.id)
          .map((ticket) => ({
              ...ticket,
              userName: user.name,
              priorityLabel: priorityLabels[ticket.priority],
          }));

      groupedData[user.name] = {
          isUserAvailable: userMap[user.id].available,
          tickets,
      };
      return groupedData;
  }, {});
};

export const groupByPriority = (rawData) => {
  const priorityOrder = [0, 4, 3, 2, 1];
  const userMap = createUserMap(rawData.users);

  return priorityOrder.reduce((groupedData, priority) => {
      const tickets = rawData.tickets
          .filter((ticket) => ticket.priority === priority)
          .map((ticket) => ({
              ...ticket,
              userName: userMap[ticket.userId].name,
              isUserAvailable: userMap[ticket.userId].available,
              priorityLabel: priorityLabels[priority],
          }));

      groupedData[priorityLabels[priority]] = { tickets };
      return groupedData;
  }, {});
};
