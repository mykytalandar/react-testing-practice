import { useEffect, useState } from "react";
import type { User } from "../../types/User";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import { Mail, UserRound } from "lucide-react";
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
      <div className="flex flex-col gap-5" data-testid="users-list-elem">
        <h3 className="text-2xl font-medium">Users:</h3>
        <ul className="flex flex-col gap-[10px]">
          {users.map((user) => (
            <li
              key={user.id}
              className="max-w-[300px] flex flex-col border border-solid border-white rounded-[8px] gap-[5px]"
              data-testid="user-item"
            >
              <Link to={`/users/${user.id}`} className="p-[5px]" state={ { user } }>
                <div className="flex flex-row items-center gap-[5px]">
                  <UserRound size={20} />
                  <span data-testid="username-item">
                    <b>{user.username}</b>
                  </span>
                </div>
                <div className="flex flex-row items-center gap-[5px]">
                  <Mail size={20} />
                  <span data-testid="user-email-item">
                    <i>{user.email}</i>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
