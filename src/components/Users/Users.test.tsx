import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserDetailsPage } from "../UserDetailsPage/UserDetailsPage";
import type { User } from "../../types/User";

const mockUsers: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
];

vitest.mock("axios");

describe("Users Component", () => {
  let response: { data: User[] };

  beforeEach(() => {
    response = {
      data: mockUsers,
    };
  });

  afterEach(() => {
    vitest.clearAllMocks();
  });

  const renderUsers = () => {
    // Налаштування моку для Axios, щоб він повернув тестові дані замість реального запиту
    // Configuring the Axios mock to return test data instead of a real network request
    vitest.mocked(axios.get).mockResolvedValue(response);

    // Рендеримо компонент разом із роутером, щоб він міг коректно працювати з навігацією
    // Render the component along with a router so it can handle navigation correctly
    return render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>,
    );
  };

  it("renders users list", async () => {
    renderUsers();

    // Асинхронне знаходження всіх елементів користувачів після завершення запиту
    // Asynchronously finding all users elements after the request completes
    const users = await screen.findAllByTestId("user-item");

    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("should display fetched usernames and emails", async () => {
    renderUsers();

    const usernames = await screen.findAllByTestId("username-item");
    const emails = await screen.findAllByTestId("user-email-item");

    expect(usernames[0]).toHaveTextContent("Bret");
    expect(emails[0]).toHaveTextContent("Sincere@april.biz");
  });

  it("should navigate to selected user details page", async () => {
    vitest.mocked(axios.get).mockResolvedValue(response);
    render(
      // Налаштовуємо роутер зі стартовою адресою та прописуємо маршрути для перемикання між сторінками
      // Set up the router with a starting address and configure routes for switching between pages
      <MemoryRouter initialEntries={["/users"]}>
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
        </Routes>
      </MemoryRouter>,
    );

    const usernames = await screen.findAllByTestId("username-item");
    await userEvent.click(usernames[0]);

    expect(screen.getByTestId("user-page")).toBeInTheDocument();

    expect(screen.getByTestId("user-page-name")).toHaveTextContent(
      "Leanne Graham",
    );
    expect(screen.getByTestId("user-page-city")).toHaveTextContent(
      "Gwenborough",
    );
  });
});
