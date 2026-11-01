import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { UserDetailsPage } from "./components/UserDetailsPage/UserDetailsPage";
import { Users } from "./components/Users/Users";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="flex flex-row justify-start gap-[30px] border-b border-solid border-white p-4">
        <NavLink
          to="/"
          data-testid="home-link"
          className="hover:text-white [&.active]:text-white [&.active]:font-bold"
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          data-testid="users-link"
          className="hover:text-white [&.active]:text-white [&.active]:font-bold"
        >
          Users
        </NavLink>
      </header>

      <main className="flex flex-col justify-center px-[30px] py-[40px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
