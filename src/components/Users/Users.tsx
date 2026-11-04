import { useEffect, useState } from "react";
import type { User } from "../../types/User";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import { ChevronRight, Mail, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col" data-testid="users-list-elem">
        <h3 className="text-3xl font-extrabold">Users:</h3>
        <span className="text-secondary-text mt-[10px]">A list of users from JSONPlaceholder API.</span>
        <ul className="flex flex-col gap-[10px] mt-[20px]">
          {users.map((user) => (
            <li
              key={user.id}
              className="
                max-w-[70%] flex flex-col gap-[5px]
                border border-solid border-border rounded-[10px]
                outline-2 outline-transparent
                hover:outline-2 hover:outline-purple-border
                transition-[outline-color] ease-in-out duration-300
              "
              data-testid="user-item"
            >
              <Link
                to={`/users/${user.id}`}
                className="p-3 flex gap-[20px] items-center justify-between"
                state={{ user }}
              >
                <div className="flex items-center gap-[20px]">
                  <div className="bg-bg-surface py-[5px] px-[15px] rounded-[20px]">
                    <UserRound size={50} className="text-primary-hover" />
                  </div>
                  <div>
                    <span data-testid="username-item">
                      <b>{user.name}</b>
                    </span>
                    <div className="flex items-center gap-[6px]">
                      <Mail size={16} />
                      <span data-testid="user-email-item">{user.email}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className=" text-primary-purple hover:text-primary-hover"/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
