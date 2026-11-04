import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import { UserDetailsPage } from "./components/UserDetailsPage/UserDetailsPage";
import { Users } from "./components/Users/Users";
import { Routes, Route, NavLink } from "react-router-dom";
import reactIcon from "./assets/react.svg";
import { House, Users as UsersIcon } from "lucide-react";

function App() {
  return (
    <div className="App min-h-screen bg-background">
      <header className="flex flex-row justify-between items-center gap-[30px] border-b border-solid border-border p-4">
        <div className="flex items-center gap-2">
          <img src={reactIcon} alt="React icon" />
          <span className="text-xl font-semibold">Testing App</span>
        </div>
        <nav className="flex flex-row gap-3">
          <NavLink
            to="/"
            data-testid="home-link"
            className="
              flex flex-row gap-1
              font-semibold px-[15px] py-[5px] rounded-lg
              hover:bg-purple-border hover:text-primary-purple [&.active]:text-primary-purple [&.active]:bg-purple-border 
              transition-colors ease-in-out duration-300
            "
          >
            <House />
            Home
          </NavLink>
          <NavLink
            to="/users"
            data-testid="users-link"
            className="
              flex flex-row gap-1 
              font-semibold px-[15px] py-[5px] rounded-lg 
              hover:bg-purple-border hover:text-primary-purple [&.active]:text-primary-purple [&.active]:bg-purple-border 
              transition-colors ease-in-out duration-300
            "
          >
            <UsersIcon />
            Users
          </NavLink>
        </nav>
        <ThemeToggle />
      </header>

      <main className="flex flex-col justify-center px-[60px] py-[40px]">
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
