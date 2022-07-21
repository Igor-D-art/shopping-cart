import { render, screen } from "@testing-library/react";
import App from "./App";
import Shop from "./components/Shop";
import '@testing-library/jest-dom';
import {ProductsProvider} from "./context/ProductsContext";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navigation from "./components/Navigation";


describe("General navigation check", () => {

  const navigation = <BrowserRouter><Navigation/></BrowserRouter>

  it('Navigation header is present on every page', () => {
    render(<App />);
    const navigation = screen.getByTestId('header');
    expect(navigation).toBeInTheDocument();
  })

  it("Navigation header contains shop name", () => {
    render(navigation)
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toMatch('BARAHLISHKO');
  });

  it('Navigation header contains 5 links', () => {
    render(navigation);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(5);
  })

  it('Navigation header matches snapshot (contains links to Home, shop, contacts, cart', () => {
    render(navigation)
    const header = screen.getByTestId('header');
    expect(header).toMatchSnapshot();
  });

  it('User lands on a shop page when clicks the shop link', () => {
    // some code will go here
  })

});


describe('Testing shop', () => {

  it('shop contains productss', () => {

    const products = [{
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      }
    }]

    render(
      <BrowserRouter>
        <ProductsProvider value={products}>
          <Shop/>
        </ProductsProvider>
      </BrowserRouter>
    )

    expect(screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")).toBeInTheDocument();
  });

});
