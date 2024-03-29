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
    dateDisplay: "2022 November 4th Friday",
    dateTime_attribute: "2022-11-04",
  },

  blog6: {
    title: "Create an ascending and descending sort function",
    dateDisplay: "2022 October 12th Wednesday",
    dateTime_attribute: "2022-10-12",
  },

  blog3: {
    title: "How to create a controlled form component with React-Typescript",
    dateDisplay: "2022 September 23rd Friday",
    dateTime_attribute: "2022-09-23",
  },

  blog1: {
    title: "Create timestamp in SQL format",
    dateDisplay: "2022 August 18th Thursday",
    dateTime_attribute: "2022-08-18",
  },

  blog4: {
    title: "Create an Axios instance",
    dateDisplay: "2022 July 28th Thursday",
    dateTime_attribute: "2022-07-28",
  },

  blog9: {
    title: "Create a React HOC scaffold",
    dateDisplay: "2022 July 14th Thursday",
    dateTime_attribute: "2022-07-14",
  },

  blog8: {
    title: "Most common HTML entities you will use",
    dateDisplay: "2022 June 30th Thursday",
    dateTime_attribute: "2022-06-30",
  },

  blog7: {
    title: "Capitalise the first character of a word",
    dateDisplay: "2022 June 21st Tuesday",
    dateTime_attribute: "2022-06-21",
  },

  blog10: {
    title: "Create a dictionary object with Typescript interface",
    dateDisplay: "2022 June 10th Friday",
    dateTime_attribute: "2022-06-10",
  },

  blog2: {
    title: "Parse SQL timestamp",
    dateDisplay: "2022 May 31st Tuesday",
    dateTime_attribute: "2022-05-31",
  },
};
