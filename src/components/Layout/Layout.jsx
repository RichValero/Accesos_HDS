import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-64 flex-shrink-0">
          <SideBar />
        </aside>
        <main className="flex-1 p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
