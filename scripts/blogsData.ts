type blogsDataType = {
  [blogsName: string]: {
    title: string;
    dateDisplay: string;
    dateTime_attribute: string;
  };
};

export const blogsData: blogsDataType = {
  blog1: {
    title: "Create timestamp in SQL format",
    dateDisplay: "2022 June 25th Friday",
    dateTime_attribute: "2022-06-25",
  },

  blog2: {
    title: "Parse SQL timestamp",
    dateDisplay: "2022 July 4th Monday",
    dateTime_attribute: "2022-07-04",
  },

  blog3: {
    title: "How to create a controlled form component with React-Typescript",
    dateDisplay: "2022 July 8th Friday",
    dateTime_attribute: "2022-07-08",
  },

  blog4: {
    title: "Create an instance with Axios",
    dateDisplay: "2022 July 17th Sunday",
    dateTime_attribute: "2022-07-17",
  },
};
