import { Link, useLocation } from "react-router-dom";
import type { User } from "../../types/User";
import {
  ArrowLeft,
  BuildingComplex,
  Globe,
  Mail,
  Map,
  MapPin,
  Phone,
  User as UserIcon,
  UserRound,
} from "lucide-react";

export const UserDetailsPage: React.FC = () => {
  const location = useLocation();
  const user: User = location.state.user;

  return (
    <div data-testid="user-page" className="flex flex-col">
      <Link
        to="/users"
        className="flex items-center gap-[10px] text-primary-purple hover:text-primary-hover"
      >
        <ArrowLeft size={18} />
        <span className="font-bold">Back to Users</span>
      </Link>
      <h3 className="text-3xl font-extrabold mt-[10px]">User Details</h3>
      <span className="text-secondary-text mt-[5px]">
        Detailed information about the user.
      </span>

      <div className="flex flex-row items-center gap-[15px] mt-[15px]">
        <div className="bg-bg-surface py-[15px] px-[15px] rounded-[20px]">
          <UserRound size={60} className="text-primary-hover" />
        </div>
        <div className="flex flex-col">
          <span data-testid="user-page-name" className="text-2xl">
            <b>{user.name}</b>
          </span>
          <div className="flex items-center gap-[6px]">
            <Mail size={16} />
            <span data-testid="user-email-item">{user.email}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[15px] mt-[15px]">
        <div className="flex items-center gap-[15px] p-2 border border-solid border-border rounded-[8px]">
          <UserIcon className="text-primary-purple" />
          <div className="flex flex-col">
            <span className="font-bold">Username</span>
            <span>{user.username}</span>
          </div>
        </div>

        <div className="flex items-center gap-[15px] p-2 border border-solid border-border rounded-[8px]">
          <Phone className="text-primary-purple" />
          <div className="flex flex-col">
            <span className="font-bold">Phone</span>
            <span>{user.phone}</span>
          </div>
        </div>

        <div className="flex items-center gap-[15px] p-2 border border-solid border-border rounded-[8px]">
          <Globe className="text-primary-purple" />
          <div className="flex flex-col">
            <span className="font-bold">Website</span>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-hover transition-colors ease-in-out duration-300"
            >
              {user.website}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-[15px] p-2 border border-solid border-border rounded-[8px]">
          <BuildingComplex className="text-primary-purple" />
          <div className="flex flex-col">
            <span className="font-bold">Company</span>
            <span>{user.company.name}</span>
            <span>{user.company.catchPhrase}</span>
          </div>
        </div>

        <div className="flex items-center gap-[15px] p-2 border border-solid border-border rounded-[8px]">
          <MapPin className="text-primary-purple" />
          <div className="flex flex-col">
            <span className="font-bold">Address</span>
            <span>
              {user.address.street}, {user.address.suite}
            </span>
            <span>
              {user.address.city}, {user.address.zipcode}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[15px] p-2 border border-solid border-border rounded-[8px]">
          <Map className="text-primary-purple" />
          <div className="flex flex-col">
            <span className="font-bold">City</span>
            <span>{user.address.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
