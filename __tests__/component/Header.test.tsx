import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import axios from "axios";
import { stringify } from "querystring";

describe("<Header/>", () => {
  // random quote api
  interface apiSchema {
    length: number;
    author: string;
    content: string;
  }

  const mockRandomQuoteApi: { data?: apiSchema } = {
    data: {
      length: 1,
      author: "salme",
      content: "Properly",
    },
  };

  beforeEach(() => {
    mockRandomQuoteApi.data!.length = 174;
    mockRandomQuoteApi.data!.author = "rechad";
    mockRandomQuoteApi.data!.content = "Time flies like an arrow!";
  });

  it("renders the Ilshaad Blog heading", () => {
    const { container, getByRole } = render(<Header />);

    // const { getByRole } = screen;

    // * the link (<a>) is under the heading but is a link & the heading of all pages
    const heading = getByRole("heading", { name: /Ilshaad Blog/ });

    expect(heading).toBeInTheDocument();

    // expect(container).toMatchSnapshot();
  });

  it("renders api quote & author", (done) => {
    jest.spyOn(axios, "get").mockResolvedValue(mockRandomQuoteApi);

    const { debug, findByText, queryByText, getByText } = render(<Header />);
    // jest.spyOn(axios, "get").mockResolvedValue(mockRandomQuoteApi);

    findByText(/I am the greatest/).then((quoteElement) => {
      debug(quoteElement);
      expect(quoteElement.textContent).toMatch(/Time flies/);
      done();
    });

    // const string = quoteTag;

    // debug(quoteTag);

    // expect(string).toMatch(/Time flies/);

    // done();

    // expect(quoteTag).toBeInTheDocument();
  });
});

// test("Using jest.spyOn() method", (done) => {
//   jest.spyOn(axios, "get").mockResolvedValue(iKmockData);

//   iKasyncFunction().then((iKnameP) => { /*2+*/
//   expect(iKnameP).toBe("dad"); /*3+*/
//   done();
//   });
//   }); /*END test()*/
