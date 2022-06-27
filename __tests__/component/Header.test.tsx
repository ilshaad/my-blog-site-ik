import { cleanup, render } from "@testing-library/react";
import axios from "axios";
import Header from "../../components/Header";

// react / typescript / jest / rtl / useState / axios = iK working async test
// react-typescript component is fetch request random quote api with axios
//  - element was set using useState() value & we want to test element value after setState was triggered on load
describe("<Header/>", () => {
  const headerComponent = () => render(<Header />);

  // random quote api data structure
  // BIM in ts we must create axios api data structure to do testing of the api we are collecting from (https://api.quotable.io/random)
  // i only put in the property that I want to collect from & ignore the other properties I do not need
  interface apiSchema {
    length: number;
    author: string;
    content: string;
  }

  // remember 'data' is from axios & 'apiSchema' is from the quote api
  // BIM I have to set some default values because error will occur if you try to reassign from undefined value
  const mockRandomQuoteApi: { data?: apiSchema } = {
    data: {
      length: 1,
      author: "salma",
      content: "do it Properly",
    },
  };

  // now I set default values as mock data for the axios
  beforeEach(() => {
    mockRandomQuoteApi.data!.length = 174;
    mockRandomQuoteApi.data!.author = "rechad";
    mockRandomQuoteApi.data!.content = "Time flies like an arrow!";
  });

  afterEach(cleanup); // iK? I do not notice a difference if I did not include this

  // BIM You could use thenable handler on the findByText() or async await function as await findByText()
  // for findByText() you must use done parameter
  test("renders api quote", (done) => {
    jest.spyOn(axios, "get").mockResolvedValue(mockRandomQuoteApi);

    const { findByText } = headerComponent();

    findByText(/Time flies like an arrow!/).then((jsxElement) => {
      expect(jsxElement.textContent).toMatch(/Time flies/);
      done();
    });
  });

  test("renders the Ilshaad Blog heading", async () => {
    const { findByRole } = headerComponent();

    // * the link (<a>) is under the heading but is a link & the heading of all pages
    const heading = await findByRole("heading", { name: /Ilshaad Blog/ });

    expect(heading).toBeInTheDocument();
  });
}); //END describe()
