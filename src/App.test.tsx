import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("App router", () => {
  it("router test", async () => {
    render(<App />, { wrapper: BrowserRouter });

    const homeLink = screen.getByTestId("home-link");
    const usersLink = screen.getByTestId("users-link");

    expect(homeLink).toBeInTheDocument();

    await userEvent.click(usersLink);

    const loader = screen.getByTestId("loader-elem");
    expect(loader).toBeInTheDocument();

    // Асинхронне очікування та отримання списку користувачів у DOM-дереві після завершення завантаження даних
    // Asynchronously waiting for and retrieving the users list element in the DOM tree after data loading completes
    const usersList = await screen.findByTestId("users-list-elem");
    expect(usersList).toBeInTheDocument();

    // Перевірка того, що індикатор завантаження зник із DOM-дерева після появи даних
    // Verifying that the loading indicator has disappeared from the DOM tree once the data appears
    expect(loader).not.toBeInTheDocument();
  });

  it("not found page test ", () => {
    // Рендеримо додаток в роутері з фейковим URL, щоб перевірити, як він реагує на неіснуючі сторінки
    // Render the app within a router using a fake URL to check how it handles non-existent pages
    render(
      <MemoryRouter initialEntries={["/bad-url-12345"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
