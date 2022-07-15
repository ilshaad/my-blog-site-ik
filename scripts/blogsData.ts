type blogsDataType = {
  [blogsName: string]: {
    title: string;
    dateDisplay: string;
    dateTime_attribute: string;
  };
};

// latest order same as index file
// order date as descending (newest first)
// iK ensure to change the order within the index file if you change the order here
export const blogsData: blogsDataType = {
  blog5: {
    title: "Deploy multiple Docker containers using Github Actions and Heroku",
    dateDisplay: "2022 September 2nd Friday",
    dateTime_attribute: "2022-09-02",
  },

  blog6: {
    title: "Create an ascending and descending sort function",
    dateDisplay: "2022 August 30th Tuesday",
    dateTime_attribute: "2022-08-30",
  },

  blog3: {
    title: "How to create a controlled form component with React-Typescript",
    dateDisplay: "2022 August 21st Sunday",
    dateTime_attribute: "2022-08-21",
  },

  blog1: {
    title: "Create timestamp in SQL format",
    dateDisplay: "2022 August 11th Thursday",
    dateTime_attribute: "2022-08-11",
  },

  blog4: {
    title: "Create an Axios instance",
    dateDisplay: "2022 August 2nd Tuesday",
    dateTime_attribute: "2022-08-02",
  },

  blog9: {
    title: "Create a React HOC scaffold",
    dateDisplay: "2022 August 1st Monday",
    dateTime_attribute: "2022-08-01",
  },

  blog8: {
    title: "Most common HTML entities you will use",
    dateDisplay: "2022 July 31st Sunday",
    dateTime_attribute: "2022-07-31",
  },

  blog7: {
    title: "Capitalise the first character of a word",
    dateDisplay: "2022 July 29th Friday",
    dateTime_attribute: "2022-07-29",
  },

  blog10: {
    title: "Create a dictionary object with Typescript interface",
    dateDisplay: "2022 July 26th Tuesday",
    dateTime_attribute: "2022-07-26",
  },

  blog2: {
    title: "Parse SQL timestamp",
    dateDisplay: "2022 July 20th Wednesday",
    dateTime_attribute: "2022-07-20",
  },
};
