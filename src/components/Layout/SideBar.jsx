import {
  FileSpreadsheet,
  House,
  HouseIcon,
  LogIn,
  LogOut,
  MailPlus,
  UserRoundPlusIcon,
} from "lucide-react";
import { useAuth } from "../../features/auth/services/useAuthContext";
import { sideBarList, adminSideBarList } from "../../utils/constants";

export const SideBar = () => {
  const { user, isAdmin, isAuthenticated, logout } = useAuth();

  const navItems = isAdmin
    ? [...sideBarList, ...adminSideBarList]
    : sideBarList;

  return (
    <div className="h-full text-white p-4">
      <div className="flex flex-col pt-10 items-center space-y-5 ">
        <nav className="space-y-4 ">
          {isAuthenticated ? (
            <>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins"
                >
                  <item.icon size={30} />
                  <span className={`isActive ? "bg-secondary opacity-50" : ""`}>
                    {item.label}
                  </span>
                </a>
              ))}
            </>
          ) : (
            <>
              <a
                href="/"
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins"
              >
                <HouseIcon size={30} />
                <span>Inicio</span>
              </a>
              <a
                href="/login"
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins"
              >
                <LogIn size={30} />
                <span>Iniciar Sesion</span>
              </a>
            </>
          )}
        </nav>
      </div>

      {isAuthenticated && (
        <div className="pt-4 border-t border-gray-700 mt-auto">
          <button
            onClick={logout}
            className="w-full flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition duration-300 font-poppins text-red-400"
          >
            <LogOut size={30} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      )}
    </div>
  );
};
