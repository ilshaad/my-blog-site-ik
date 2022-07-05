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
};
