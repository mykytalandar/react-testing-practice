import { useLocation } from "react-router-dom";
import type { User } from "../../types/User";
import { CircleUserRound, Globe, Mail, Map, MapPin, Phone } from "lucide-react";

export const UserDetailsPage: React.FC = () => {
  const location = useLocation();
  const user: User = location.state.user;

  return (
    <div
      data-testid="user-page"
      className="flex flex-col justify-between gap-[30px]"
    >
      <h3 className="text-2xl font-medium">User Details Page</h3>
      <div className="flex flex-row items-center gap-[10px]">
        <CircleUserRound size={80} color="white" />
        <div className="flex flex-col">
          <span data-testid="user-page-name">
            Name: <b>{user.name}</b>
          </span>
          <span>
            Username: <b>{user.username}</b>
          </span>
        </div>
      </div>

      <div className="flex flex-row gap-[60px]">
        <div className="flex flex-col">
          <span className="text-white">
            <b>About</b>
          </span>

          <div
            className="flex flex-row items-center mt-[10px] gap-[5px]"
            title="Email"
          >
            <Mail size={15} />
            <span>
              <b>{user.email}</b>
            </span>
          </div>

          <div className="flex flex-row items-center gap-[5px]" title="Phone">
            <Phone size={15} />
            <span>
              <b>{user.phone}</b>
            </span>
          </div>

          <div className="flex flex-row items-center gap-[5px]" title="Website">
            <Globe size={15} />
            <span>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <b> {user.website}</b>
              </a>
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-white">
            <b>Address</b>
          </span>

          <div
            className="flex flex-row items-center mt-[10px] gap-[5px]"
            title="City"
          >
            <MapPin size={15} />
            <span data-testid="user-page-city">
              <b>{user.address.city}</b>
            </span>
          </div>

          <div className="flex flex-row items-center gap-[5px]" title="Street">
            <Map size={15} />
            <span>
              <b>{user.address.street}</b>
            </span>
          </div>

          <span>
            Suite: <b>{user.address.suite}</b>
          </span>
          <span>
            Zipcode: <b>{user.address.zipcode}</b>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-white">
            <b>Company</b>
          </span>
          <span className="mt-[10px]">
            Name: <b>{user.company.name}</b>
          </span>
          <span>
            Catch Phrase: <b>{user.company.catchPhrase}</b>
          </span>
          <span>
            Business Slogan: <b>{user.company.bs}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
